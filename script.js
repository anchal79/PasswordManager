//logic to fill the table

/*function copyText(txt){
    navigator.clipboard.writeText(txt)
    alert(copyText.value);
}*/

function maskPassword(pass) {
  let str = "";
  for (let index = 0; index < pass.length; index++) {
    str += "*";
  }
  return str;
}
const deletePassword = (website) => {
  let data = localStorage.getItem("passwords");
  let arr = JSON.parse(data);
  arrUpdated = arr.filter((e) => {
    return e.website != website;
  });
  localStorage.setItem("passwords", JSON.stringify(arrUpdated));
  alert(`Successfully deleted ${website}'s password`);
  showPasswords();
};
const showPasswords = () => {
  let tb = document.querySelector("table");
  let data = localStorage.getItem("passwords");
  if (data == null) {
    tb.innerHTML = "no data";
  } else {
    tb.innerHTML = `<tr>
        <th>website</th>
        <th>username</th>
        <th>password</th>
        <th>delete</th>
      </tr>`;
    let arr = JSON.parse(data);
    let str = "";

    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];

      str += `<tr>
          <td>${
            element.website
          } <img src="copy.svg" alt="Copy Icon" style="cursor: pointer;" onclick="navigator.clipboard.writeText('Text to copy').then(() => alert('Copied to clipboard!'));">


 </td>
          <td>${
            element.username
          } <img src="copy.svg" alt="Copy Icon" style="cursor: pointer;" onclick="navigator.clipboard.writeText('Text to copy').then(() => alert('Copied to clipboard!'));">


 </td>
          <td>${maskPassword(
            element.password
          )} <img src="copy.svg" alt="Copy Icon" style="cursor: pointer;" onclick="navigator.clipboard.writeText('Text to copy').then(() => alert('Copied to clipboard!'));">


 </td>
          <td><button class="btnsm" onclick="deletePassword('${
            element.website
          }')">delete</button></td>
          </tr>`;
    }

    tb.innerHTML = tb.innerHTML + str;
  }
  website.value = "";
  username.value = "";
  password.value = "";
};

console.log("working");
showPasswords();
document.querySelector(".btn").addEventListener("click", (e) => {
  e.preventDefault();
  e.preventDefault();
  console.log("clicked");

  console.log(username.value, password.value);
  let passwords = localStorage.getItem("passwords");
  console.log(passwords);

  if (passwords == null) {
    let json = [];
    json.push({
      website: website.value,
      username: username.value,
      password: password.value,
    });
    alert("password saved");
    localStorage.setItem("passwords", JSON.stringify(json));
  } else {
    let json = JSON.parse(localStorage.getItem("passwords"));
    json.push({
      website: website.value,
      username: username.value,
      password: password.value,
    });
    alert("password saved");
    localStorage.setItem("passwords", JSON.stringify(json));
  }
  showPasswords();
});

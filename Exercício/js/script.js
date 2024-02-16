const btn = document.querySelector("#submitbtn");

btn.addEventListener("click", function (event) {
  event.preventDefault();

  const name = document.querySelector("#name").value;
  const surName = document.querySelector("#surname").value;
  const myMail = document.querySelector("#mymail").value;
  const birthDate = document.querySelector("#birthdate").value;
  console.table([name, surName, myMail, birthDate]).value;
});

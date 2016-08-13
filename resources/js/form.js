// count = 8

function validar () {
  var user = document.querySelector("#user");
  var pass = document.querySelector("#pass");
    if (user.value === "ariel" && pass.value === "comunidadit")  {
  console.log("Correcto!" + "\n" + "Username:" + user.value + "\n" + "Password:" + pass.value);
    window.location.href = "loged-in.html";
  // form.submit
    } else {
  console.log("No esta autorizado!" + "\n" + "Username:" + user.value + "\n" + "Password:" + pass.value);
    }
};


// $(function () {
//     $("#sub").click(function (e) {
//         e.preventDefault();
//         if (user.value === "ariel" && pass.value === "comunidadit")  {
//   console.log("Correcto!" + "\n" + "Username:" + user.value + "\n" + "Password:" + pass.value);
//     window.location.href = "loged-in.html";
//      } else {
//   console.log("No esta autorizado!" + "\n" + "Username:" + user.value + "\n" + "Password:" + pass.value);
//      };






// $(function () {
//      var $sub = $("#sub")
//      $("#sub").click(function (e) {
//          console.log("anda");
//      });
// });






// $(document).ready(function () {
//     $('.forgot-pass').click(function(event) {
//       $(".pr-wrap").toggleClass("show-pass-reset");
//     });

//     $('.pass-reset-submit').click(function(event) {
//       $(".pr-wrap").removeClass("show-pass-reset");
//     });
// });


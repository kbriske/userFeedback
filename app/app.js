function initListeners() {
  console.log("ready");
}

$(document).ready(function () {
  initListeners();
});

$(window).on("load", function () {
//   Swal.fire({
//     title: "<strong>HTML <u>example</u></strong>",
//     icon: "info",
//     html:
//       "You can use <b>bold text</b>, " +
//       '<a href="//sweetalert2.github.io">links</a> ' +
//       "and other HTML tags",
//     showCloseButton: true,
//     showCancelButton: true,
//     focusConfirm: false,
//     confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
//     confirmButtonAriaLabel: "Thumbs up, great!",
//     cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
//     cancelButtonAriaLabel: "Thumbs down",
//   });
    Swal.fire("Check out this modal!");
  //   $(".modal").css("display", "none");
  console.log("loaded");
});

$(document).ready(function() {

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

  });
});

$(".modal-button").click(function() {
  var target = $(this).data("modal");
  $("html").addClass("is-clipped");
  $(target).addClass("is-active");
});

$(".modal-close").click(function() {
  $("html").removeClass("is-clipped");
  $(this).parent().removeClass("is-active");
});

$(".modal-background").click(function() {
  $("html").removeClass("is-clipped");
  $(this).parent().removeClass("is-active");
});


window.addEventListener("load", function() {
  const form = document.getElementById('form-contact');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      alert("Your message has been submitted successfully, I'll be in touch!");
      form.reset();
    })
  });
});


$(document).ready(function(){

  // DEVELOPMENT
  $("#development-image").click(function(){
    $("#development-image").hide(); // بدون slide
    $("#development").slideDown(1000); // أول ظهور بالأنميشن
  });

  $("#development").click(function(){
    $("#development").slideUp(1000, function() {
      $("#development-image").show(); // تظهر بعد الإغلاق
    });
  });

  // DESIGN
  $("#design-image").click(function(){
    $("#design-image").hide();
    $("#design").slideDown(1000);
  });

  $("#design").click(function(){
    $("#design").slideUp(1000, function() {
      $("#design-image").show();
    });
  });

  // PRODUCT
  $("#product-image").click(function(){
    $("#product-image").hide();
    $("#product").slideDown(1000);
  });

  $("#product").click(function(){
    $("#product").slideUp(1000, function() {
      $("#product-image").show();
    });
  });

  // HOVER effects
  for (let i = 1; i <= 8; i++) {
    $(`#work${i}`).hover(
      function(){ $(`#overlay${i}`).show(); },
      function(){ $(`#overlay${i}`).hide(); }
    );
  }

  // Fade in/out text
  const projHovers = ['work1', 'work2', 'work3', 'work4', 'work5', 'work6', 'work7', 'work8'];
  projHovers.forEach(function(projHover){
    let speed = 2300;
    $(`#${projHover}`).hover(
      function(){ $(`#${projHover} p`).fadeIn(speed); },
      function(){ $(`#${projHover} p`).fadeOut(speed); }
    );
  });

  // Form alert
  $("form#form34A").submit(function(event){
    var name = $("input#MERGE1").val();
    var email = $("input#MERGE0").val();
    var message = $("textarea#comment").val();
    if (name && email){
      alert(`${name}, we have received your message. Thank you for reaching out to us.`);
    } else {
      alert("Please enter your name and email!");
    }
  });

  // Toggle for .col-md-4
  $(".col-md-4").click(function(){ 
    var speed = 3000;
    $(this).children(".hide").slideToggle(speed);
  });

  // Newsletter form
  let form = document.getElementById("mc-embedded-subscribe-form");
  if(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let name = document.getElementById("name").value;
      alert(`${name} thank you for reaching out to us, we have received your message.`);
    });
  }
});


$(document).ready(function(){
    $(".col-md-4 ").click(function(){ 
        var speed= 3000
        $(this).children(".hide").slideToggle(speed)
    });
});
var projHovers = ['work1', 'work2', 'work3', 'work4', 'work5', 'work6', 'work7', 'work8']
$(document).ready(function(){
    projHovers.forEach(function(projHover){
        var speed=2300
        $('#'+projHover).hover(
          function(){$('#'+projHover+' p').fadeIn(speed)},
          function(){$('#'+projHover+' p').fadeOut(speed)})
      });
});
$(document).ready(function(){
    let form = document.getElementById("mc-embedded-subscribe-form");
    form.addEventListener("submit", (e) =>{
        e.preventDefault
        let name = document.getElementById("name").value;
        alert(`${name} thank you for reaching out to us, we have received your message. Incase of any other issues kindly feel free to reach out to us`);
    });
})

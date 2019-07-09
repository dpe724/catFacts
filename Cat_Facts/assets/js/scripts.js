$(document).ready(function (){
  
  $(".catFact").click(function (e){
  e.preventDefault();
  $.get({type: "GET",
          url: "https://catfact.ninja/fact?max_length=140",
          Accept: "application/json"})
});
  $(".response").empty().append();
});



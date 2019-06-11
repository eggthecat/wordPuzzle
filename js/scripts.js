$(document).ready(function(){
  $('form#word').submit(function(event){
    event.preventDefault();
    var vowels = ['a','e','i','o','u'];
    var string = "I have a nerf gun";
    var i = string.splice("");
    console.log(i);
    console.log(string);
  })
})

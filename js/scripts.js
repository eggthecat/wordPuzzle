$(document).ready(function(){
  $('form#word').submit(function(event){
    event.preventDefault();
    var vowels = ['a','e','i','o','u'];
    // everytime you reference jquery for anything; use $("").  .val() is the built-in method to take in the input.  ",split" allows the input to be spit up into a string. "toLowerCase()" lets the input change to lowercase to lower chance of mistranslation later.
    var string = $("#userInput").val().toLowerCase().split("");
    // intitialize an empty array
    var stringArray = [];
    console.log(string);
    stringArray.push(string);
    var answer = [];
    for (var i=0; i < stringArray.length;i++) {
      if (stringArray[i] === vowels[0]) {
        stringArray[i].replace("-");
        answer.push(stringArray);
        // console.log(i);
      }
      return answer;
    }
    // $ singals jquery, "#result" singals the desired output, "text" is the built-in method to display text.
    $("#result").text(answer);
  })
})

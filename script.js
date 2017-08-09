$(document).ready(function ()  {

var total = 5;
var score = 0;

    //Get User Input
    var q1 = $('input:radio[name=q1]').val();
    var q2 = $('input:radio[name=q2]').val();
    var q3 = $('input:radio[name=q3]').val();
    var q4 = $('input:radio[name=q4]').val();
    var q5 = $('input:radio[name=q5]').val();

var answers = ['b', 'a', 'd', 'b', 'd'];
var correct
var radio = $(':radio');

var checkedQ1 = $('input:radio[name=q1]:checked').val();
var checkedQ2 = $('input:radio[name=q2]:checked').val();
var checkedQ3 = $('input:radio[name=q3]:checked').val();
var checkedQ4 = $('input:radio[name=q4]:checked').val();
var checkedQ5 = $('input:radio[name=q5]:checked').val();



$('#submit').click(function () {
  var checkedQ1 = $('input:radio[name=q1]:checked').val();
  var checkedQ2 = $('input:radio[name=q2]:checked').val();
  var checkedQ3 = $('input:radio[name=q3]:checked').val();
  var checkedQ4 = $('input:radio[name=q4]:checked').val();
  var checkedQ5 = $('input:radio[name=q5]:checked').val();

  /*
need to optimize
  for(var i = 0; i <=total; i++) {
        if(checkedQ[i] === undefined) {
          alert('You missed qestion' + i);
          return false;
        }

      }*/


        if(checkedQ1 === undefined || checkedQ2 === undefined || checkedQ3 === undefined || checkedQ4 === undefined || checkedQ5 === undefined) {
                alert('Please select your options!');
            }

            if(checkedQ1 === answers[0]) {
              score++;
            }
            if (checkedQ2 === answers[1]) {
              score++;
            }
            if (checkedQ3 === answers[2]) {
              score++;
            }
            if (checkedQ4 === answers[3]) {
              score++;
            }
            if (checkedQ5 === answers[4]) {
              score++;
            }

            $('#results').html('You scored ' + score + ' of ' + total);
  });


  //END
  });

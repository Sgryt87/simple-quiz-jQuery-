$(document).ready(function() {
  $('#submit').click(function() {
    var score = 0;
    var total = 5;
    var answers = ['b', 'a', 'd', 'b', 'd'];
    for (var i = 0; i < total; i++) {
      var item = $('input:radio[name=q' + (i + 1) + ']:checked').val();
      if (item === undefined) {
        alert('Please select your options!');
        return;
      }
      if (item === answers[i]) {
        score++;
      }
    }
    $('#results').html('You scored ' + score + ' of ' + total);
  });
  //END
});

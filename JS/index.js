var first  = ['a Web develeper','a Gamer','a Student','a DSA lover','a competitive programer','a enthusiastic learner'];
var i = 0;
var j = 0;
var maxfirst  = first.length - 1;

function delay() {
    $('#intro').velocity("transi1ion.slideUpIn", 500);
    setInterval(firstwordchange, 1200);
}

function firstwordchange() {
    if (i < maxfirst) i++; else i = 0;

    $('#firstword').velocity("transition.slideUpOut",500);

    setTimeout(function () {
        $('#firstword').text(first[i]);
    }, 300);

  $('#firstword').velocity("transition.slideUpIn", 1200);
}

setTimeout(delay, 900);
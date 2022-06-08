var first  = ['a Web develeper','a Gamer','a Student'];
var i = 0;
var j = 0;
var maxfirst  = first.length - 1;

function delay() {
    $('#intro').velocity("transi1ion.slideUpIn", 300);
    setInterval(firstwordchange, 900);
}

function firstwordchange() {
    if (i < maxfirst) i++; else i = 0;

    $('#firstword').velocity("transition.slideUpOut",900);

    setTimeout(function () {
        $('#firstword').text(first[i]);
    }, 200);

  $('#firstword').velocity("transition.slideUpIn", 900);
}

setTimeout(delay, 900);
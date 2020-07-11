'use strict'

var name = prompt('Hey, what\'s your name?')
alert('Welcome to our website mr ' + name)
var gender = prompt('what is your gender?')
while (gender !== 'female' && gender !== 'male') {
    gender = prompt('please specificy your gender')
}
if (gender === 'male') {
    alert('Welcome MR ' + name)
    var male = 'MR '
} else if (gender === 'female') {
    alert('welcome MSS ' + name)
    var female = 'MSS '
}


var q1 = prompt('do you know me');

while (q1.toLowerCase() !== 'yes' && q1.toLowerCase() !== 'y' && q1.toLowerCase() !== 'no' && q1.toLowerCase() !== 'n') {
    q1 = prompt('you have to answer the question')
}

if (q1.toLowerCase() === 'yes' || q1.toLowerCase() === 'y') {
    alert('correct answer')
} else {
    alert('wrong answer')
}

var q2 = prompt('do you love me?');

while (q2.toLowerCase() !== 'yes' && q2.toLowerCase() !== 'y' && q2.toLowerCase() !== 'no' && q2.toLowerCase() !== 'n') {
    q2 = prompt('you have to answer the question')
}

if (q2.toLowerCase() === 'yes' || q2.toLowerCase() === 'y') {
    alert('correct answer')
} else {
    alert('wrong answer')
}

var q3 = prompt('can you hurt me?');

while (q3.toLowerCase() !== 'yes' && q3.toLowerCase() !== 'y' && q3.toLowerCase() !== 'no' && q3.toLowerCase() !== 'n') {
    q3 = prompt('you have to answer the question')
}

if (q3.toLowerCase() === 'yes' || q3.toLowerCase() === 'y') {
    alert('correct answer')
} else {
    alert('wrong answer')
}

var q4 = prompt('do you kiss me');

while (q4.toLowerCase() !== 'yes' && q4.toLowerCase() !== 'y' && q4.toLowerCase() !== 'no' && q4.toLowerCase() !== 'n') {
    q4 = prompt('you have to answer the question')
}

if (q4.toLowerCase() === 'yes' || q4.toLowerCase() === 'y') {
    alert('correct answer')
} else {
    alert('wrong answer')
}

var q5 = prompt('do you hate me');

while (q5.toLowerCase() !== 'yes' && q5.toLowerCase() !== 'y' && q5.toLowerCase() !== 'no' && q5.toLowerCase() !== 'n') {
    q5 = prompt('you have to answer the question')
}

if (q5.toLowerCase() === 'yes' || q5.toLowerCase() === 'y') {
    alert('correct answer')
} else {
    alert('wrong answer')
}

if (gender === 'male') {
    alert('thank you so much for visiting our website ' + male + name)
}
if (gender === 'female') {
    alert('thank you so much for visiting our website ' + female + name)
}



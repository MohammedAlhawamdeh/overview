'use strict'

var counter=0;

function nameAndGender(){
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
}
nameAndGender()

function question1(){
var q1 = prompt('do you know me');

while (q1.toLowerCase() !== 'yes' && q1.toLowerCase() !== 'y' && q1.toLowerCase() !== 'no' && q1.toLowerCase() !== 'n') {
    q1 = prompt('you have to answer the question')
}

if (q1.toLowerCase() === 'yes' || q1.toLowerCase() === 'y') {
    alert('correct answer')
    counter++
} else {
    alert('wrong answer')
}
}
question1()

function question2(){
var q2 = prompt('do you love me?');

while (q2.toLowerCase() !== 'yes' && q2.toLowerCase() !== 'y' && q2.toLowerCase() !== 'no' && q2.toLowerCase() !== 'n') {
    q2 = prompt('you have to answer the question')
}

if (q2.toLowerCase() === 'yes' || q2.toLowerCase() === 'y') {
    alert('correct answer')
    counter++
} else {
    alert('wrong answer')
}
}
question2()
function question3(){
var q3 = prompt('can you hurt me?');

while (q3.toLowerCase() !== 'yes' && q3.toLowerCase() !== 'y' && q3.toLowerCase() !== 'no' && q3.toLowerCase() !== 'n') {
    q3 = prompt('you have to answer the question')
}

if (q3.toLowerCase() === 'yes' || q3.toLowerCase() === 'y') {
    alert('correct answer')
    counter++
} else {
    alert('wrong answer')
}
}
question3()


function question4(){
var q4 = prompt('do you kiss me');

while (q4.toLowerCase() !== 'yes' && q4.toLowerCase() !== 'y' && q4.toLowerCase() !== 'no' && q4.toLowerCase() !== 'n') {
    q4 = prompt('you have to answer the question')
}

if (q4.toLowerCase() === 'yes' || q4.toLowerCase() === 'y') {
    alert('correct answer')
    counter++
} else {
    alert('wrong answer')
}
}
question4()

function question5(){
    var gender;
var q5 = prompt('do you hate me');

while (q5.toLowerCase() !== 'yes' && q5.toLowerCase() !== 'y' && q5.toLowerCase() !== 'no' && q5.toLowerCase() !== 'n') {
    q5 = prompt('you have to answer the question')
}

if (q5.toLowerCase() === 'yes' || q5.toLowerCase() === 'y') {
    alert('correct answer')
    counter++
} else {
    alert('wrong answer')
}
if (gender === 'male') {
    alert('thank you so much for visiting our website ' + male + name)
}
if (gender === 'female') {
    alert('thank you so much for visiting our website ' + female + name)
}
}
question5()


function question6(){
for (let i = 4; i > 0; i--) {

    var guess = prompt('Try to guess a number between 1 - 10? - you have only '+i+ ' tries')

    if (guess != null && guess != '') {

        if (!isNaN(guess)) {

            var correctAnswer = Math.floor((Math.random() * 10) + 1);

            if (guess > correctAnswer) {
                alert('too high')
            } else if (guess == correctAnswer) {
                alert('this is correct')
                counter++
                break
            } else {
                alert('too low')
            }
        } else {
            alert('please add a number only')
        }
    } else {
        alert('please enter a number')
    }

}alert('the correct answer is '+correctAnswer)
}
question6()

function question7(){
var places = ['istanbul','izmir','trabzon','rize']

for(let i=6;i>0;i--){
    var q7 = prompt('Can you guess one of my fav cities in Turkey?')
    if(q7 === places[0] || q7 === places[1] || q7 === places[2] || q7 === places[3]){
        alert('amazing, you\'re correct')
        counter++
        break
    }else{
        alert('please try again, you have '+i+ ' tries')
    }
}
alert('my fav places are '+places[0]+' ,'+places[1]+' ,'+places[2]+' and '+places[3])
alert('your final score is '+counter +' out of 7')
}
question7()

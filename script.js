/* const body = document.body

const ele = document.createElement('div');
body.append(ele)

ele.setAttribute('class', 'container')
const element = document.getElementsByClassName('container')

console.log(element.innerhtml = 'hello') */

/* const text = document.getElementById('text');
const button = document.getElementById('button');
const list = document.querySelectorAll('li');
const paragraph = document.getElementById('para'); */
//console.log(list[1])
//list[1].innerHTML = 'change';
/* button.addEventListener('click', e =>{
    list.style.backgroundColor = 'green';
    console.log(e.target)
});
 */
/* for (let i=1; i<=list.length; i++){
    list.style.backgroundColor = 'red';
    console.log(i)
} */

/* const alt = paragraph.getAttribute('class');

console.log(alt) */
/* const log = console.log;
const para = document.querySelector('div .error').innerHTML = 'hello';

const all = document.querySelectorAll('p');

const element = document.querySelectorAll('.error'); */

//log(element)

//all.forEach(paragraph => {
    //console.log(paragraph)
    //paragraph.innerHTML = 'change';
   // paragraph.innerText += 'extend'

//})

//var content = document.querySelector('.content');

//content.innerHTML += 'this is new content'
//console.log(content)

//const people = ['suraj', 'vansh','sanjay','mohan'];

/* people.forEach(person => {
    content += `<p>${person}</p>`;
    console.log(person);
}); */

//console.log(people);

//const attri = document.getElementById('error');

//const apple = document.querySelector('a');
//console.log(apple)

//const some = apple.getAttribute('href');
//console.log(some)


/* attri.getAttribute()
console.log(attri) */
/* 
const score = document.getElementById('score');
const input = document.getElementById('text').value;
const first = document.getElementById('first-answer');
const second = document.getElementById('second-answer');
const button = document.getElementById('button');
const outPut = first.textContent*second.textContent;


button.addEventListener('click', function(){
    first.innerHTML = Math.floor(Math.random() * 10);
    second.innerHTML = Math.floor(Math.random() * 10);
    var value = score.innerHTML;
    if (input == outPut){
        value++
    }else {
        value--
    } */
/*     var outPut = first.innerText*second.innerText;
    console.log(outPut)
    let count = 0;
    if (input == outPut){
        score.innerHTML = count += 1;
    }else {
        score.innerHTML = count -= 1;
    } */
// })

/* function increment(){
    const score = document.getElementById('score');
    var value = score.innerHTML;
    if (input == outPut){
        value++
    }else {
        value--
    }
}
 */
/* var count = 0;
score.addEventListener('click',function(){
    if (input == outPut){
        score.innerHTML = count += 1;
    }else {
        score.innerHTML = count -= 1;
    }
    return score
}) */

// console.log(outPut)

/* function 
const outPut = first.innerText*second_text;
let count = 0;
if (input == outPut){
    score += 1
} */

/* var first_text = first.innerText;
var second_text = second.innerText;

console.log(first_text)
console.log(score) */
/* function getVal(){
    first.value
} */
// console.log(first.value)
/* function getVal(){
    const num = first.textContent;
    const num-two = second.textContent
} */

/* const num = first.value;
const numTwo = second.textContent;

console.log(num)
 */

/* function changeNum(){
    first.innerHTML = Math.floor(Math.random() * 10);
    second.innerHTML = Math.floor(Math.random() * 10)

} */

/* var count = 0;
function increment(){
    
} */



/* const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10);
//  const score = document.getElementById('score');
const text = document.getElementById('text')
const input = document.getElementById('input');
const button = document.getElementById('button')
console.log(num1)
console.log(num2)
let score = 0;
text.innerText = `what is ${num1} multiply by ${num2}?`
const correctAnswer = +num1 * num2;
button.addEventListener('submit', ()=>{
    var score = 0;
    const userAns = +input.value;
    // console.log(userAns,typeof userAns)
    if (userAns === correctAnswer){
        score++
        console.log(score)
    }else{
        score--
    }
})

console.log(correctAnswer)

 */


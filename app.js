const firstQuestion = document.querySelector('.first-question');
const secondQuestion = document.querySelector('.second-question');
const thirdQuestion = document.querySelector('.third-question');
const fourthQuestion = document.querySelector('.fourth-question');
const arrowOne = document.querySelector('.arrow1');
const arrowTwo = document.querySelector('.arrow2');
const arrowThree = document.querySelector('.arrow3');
const arrowFour = document.querySelector('.arrow4');
const answersOne = document.querySelector('.answers1');
const answersTwo = document.querySelector('.answers2');
const answersThree = document.querySelector('.answers3');
const answersFour = document.querySelector('.answers4');

firstQuestion.addEventListener('click', (e)=>{
    arrowOne.classList.toggle('drop-answers');
    answersOne.classList.toggle('answers-display');
});
secondQuestion.addEventListener('click', ()=>{
        arrowTwo.classList.toggle('drop-answers');
        answersTwo.classList.toggle('answers-display');
});
thirdQuestion.addEventListener('click', ()=>{
    arrowThree.classList.toggle('drop-answers');
    answersThree.classList.toggle('answers-display');
});
fourthQuestion.addEventListener('click', ()=>{
    arrowFour.classList.toggle('drop-answers');
    answersFour.classList.toggle('answers-display');
});


const menuList = document.querySelector('.menu-list');
const menuShow = document.querySelector('.menu-bar');
const menuHide= document.querySelector('.close-icon');

menuShow.addEventListener('click', ()=>{
   menuList.classList.add('menu-show');
});

menuHide.addEventListener('click', ()=>{
   menuList.classList.remove('menu-show');
});
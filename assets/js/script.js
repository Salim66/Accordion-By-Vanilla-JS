// grab everything we need
const accordion = document.querySelector('.accordion');
const items     = document.querySelectorAll('li');
const questions = document.querySelectorAll('.question');


// define all functions w'll nedd
function toggleAccordion(){
    let thisItem = this.parentNode;

    items.forEach(item => {
        if(thisItem == item){
            thisItem.classList.toggle('open');
            return;
        }
        item.classList.remove('open');
    });
}


// add event listeners
questions.forEach(question => question.addEventListener('click', toggleAccordion));
let ratings = document.querySelectorAll('.rating');
let sendBtn = document.querySelector('.btn');
let ratingContainer = document.querySelector('.rating-container');
let panel = document.querySelector('#panel');
let selectedRating = 'Satisfied';

ratingContainer.addEventListener('click', (e)=> {
    if(e.target.parentNode.classList.contains('rating')){
        remove();
        e.target.parentNode.classList.add('active');
        selectedRating = e.target.nextElementSibling.innerText;
    }
})

sendBtn.addEventListener('click',(e)=>{
    panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank you!</strong>
    <br>
    <strong>Feedback ${selectedRating}</strong>
    <p> We'll use your feedback to improve our customer support </p>`
})
function remove() {
    for( rating of ratings){
     rating.classList.remove('active');
    }
}
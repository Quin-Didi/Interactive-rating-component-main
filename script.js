const rate = document.querySelectorAll('.rating');
const submit = document.querySelector('#btn');
const panel = document.querySelector('#panel');
const rating = document.querySelector('.ratings');

let selectedRating;

rating.addEventListener('click', (e) => {
  if (e.target.parentNode.classList.contains('rating')) {
    removeActive();
    e.target.parentNode.classList.add('active');
    selectedRating = e.target.innerHTML;
  }
  if (e.target.classList.contains('rating')) {
    removeActive();
    e.target.classList.add('active');
    selectedRating = e.target.innerHTML;
  }
});

console.log(selectedRating);
submit.addEventListener('click', (e) => {
  panel.innerHTML = `
  <div class=" thank__you">
  <img src="./images/illustration-thank-you.svg" alt="thank you" />
  <div class="thanks">
    <small>You selected ${selectedRating} out of 5</small>
    <h2>Thank you!</h2>
    <p class="para">
      We appreciate you taking the time to give a rating. If you ever need
      more support, don’t hesitate to get in touch!
    </p>
  </div>
</div>`;
});

function removeActive() {
  for (let i = 0; i < rate.length; i++) {
    rate[i].classList.remove('active');
  }
}

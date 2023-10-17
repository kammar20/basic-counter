const btns = document.querySelectorAll('.btn');
const count = document.querySelector('.count');

let countValue = 0;

for (let btn of btns) {
  btn.addEventListener('click', function (e) {
    if (e.target.className === 'dec btn') {
      console.log();
      countValue--;
      count.textContent = countValue;
    } else if (e.target.className === 'inc btn') {
      countValue++;
      count.textContent = countValue;
    }
  });
}

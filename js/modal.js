const modal = document.querySelector('.modal');
const openBtn = document.querySelector('#btn-get');
const closeBtn = document.querySelector('.modal_close');

const showModal = () => {
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}
const closeModal = () => {
  modal.style.display = 'none'
  document.body.style.overflow = '';
}

openBtn.addEventListener('click' , showModal)

closeBtn.onclick = closeModal

modal.addEventListener('scroll', (event) => {
  if(event.target === modal){
    closeModal();
  }
})

function openAtBottom() {
    const scrolled = window.scrollY;
    const viewport = window.innerHeight;
    const fullHeight = document.documentElement.offsetHeight;

    if (scrolled + viewport >= fullHeight) {
        showModal();
        window.removeEventListener('scroll', openAtBottom);
    }
}
setTimeout(showModal, 10000);

window.addEventListener('scroll', openAtBottom);
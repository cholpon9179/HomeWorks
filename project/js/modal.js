//DZ -3
function showModal() {
    const modal = document.querySelector('.modal');
    modal.style.display = 'block';
    window.removeEventListener('scroll', showModalOnScroll);
}

function showModalOnScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        showModal();
    }
}

window.addEventListener('scroll', showModalOnScroll);
function showModalAfterDelay() {
    const modal = document.querySelector('.modal');
    modal.style.display = 'block';
}

setTimeout(showModalAfterDelay, 10000);

const modalCloseButton = document.querySelector('.modal_close');

function closeModal() {
    const modal = document.querySelector('.modal');
    modal.style.display = 'none';
}

modalCloseButton.addEventListener('click', closeModal);
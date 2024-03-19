//DZ -3
const tabContentItems = document.querySelectorAll('.tab_content_item');
const tabContentBlocks = document.querySelectorAll('.tab_content_block');

function showSlide(index) {

    tabContentBlocks.forEach(block => {
        block.style.display = 'none';
    });

    tabContentItems.forEach(item => {
        item.classList.remove('tab_content_item_active');
    });

    tabContentBlocks[index].style.display = 'block';
    tabContentItems[index].classList.add('tab_content_item_active');
}

tabContentItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        showSlide(index);
    });
});

showSlide(0);

function nextSlide() {
    const activeIndex = Array.from(tabContentItems).findIndex(item => item.classList.contains('tab_content_item_active'));
    const nextIndex = (activeIndex + 1) % tabContentItems.length;
    showSlide(nextIndex);
}

setInterval(nextSlide, 3000);

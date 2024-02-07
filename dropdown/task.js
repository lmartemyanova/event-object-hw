const dropdown = document.querySelector('.dropdown');
const dropdownList = document.querySelector('.dropdown__list');
const items = document.getElementsByClassName('dropdown__item');
const dropdownValue = document.querySelector('.dropdown__value');
const links = document.getElementsByClassName('dropdown__link');

for (let index = 0; index < links.length; index++) {
    const link = links[index];
    link.onclick = () => {
        return false
    };
};

function dropUpDown(event) {
    dropdownList.classList.toggle('dropdown__list_active');
    dropdownList.style.left = '47%';
    dropdownList.style.right = '47%';
};

dropdown.closest('div').addEventListener('click', dropUpDown);

for (let index = 0; index < items.length; index++) {
    const item = items[index];
    item.onclick = () => {
        dropdownValue.textContent = item.textContent;
    }
}

const tabs = Array.from(document.getElementsByClassName('tab'));
const contents = Array.from(document.getElementsByClassName('tab__content'));

for (let index = 0; index < tabs.length; index++) {
    const tab = tabs[index];
    const content = contents[index]
    tab.addEventListener('click', function setActiveTab(event) {
        tabs.forEach(element => {
            element.classList.remove('tab_active')
        });
        tab.classList.add('tab_active')
        contents.forEach(element => {
            element.classList.remove('tab__content_active')
        });
        content.classList.add('tab__content_active')
    })
}
console.log('main.js is loaded');


let urlHash = window.location.hash || '#comp-default';
window.location.hash = urlHash;
const activeComponent = document.querySelector(urlHash);
showComponent(activeComponent);


window.addEventListener('hashchange', () => {
    console.log('URL Hash has changed!!!');
    let newHash = window.location.hash || '#comp-default';
    const newActiveComponent = document.querySelector(newHash) || document.querySelector('#comp-default');
    showComponent(newActiveComponent)
});


function showComponent(newActiveComponent){
    let activeComponent = document.querySelector('.component.active');
    activeComponent.classList.remove('active');
    activeComponent.classList.add('hidden');

    newActiveComponent.classList.remove('hidden');
    newActiveComponent.classList.add('active');
}
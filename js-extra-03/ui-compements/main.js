const beforeGameComponent = document.querySelector('#before-game');
const inGameComponent = document.querySelector('#in-game');
const postGameComponent = document.querySelector('#post-game');


function toggleComponents(hideComponent, showComponent){
    hideComponent.classList.remove('show');
    hideComponent.classList.add('hide');

    showComponent.classList.remove('hide');
    showComponent.classList.add('show');
}


const startGameBtn = document.querySelector('#before-game button');
startGameBtn.addEventListener('click', () => toggleComponents(beforeGameComponent, inGameComponent));

const endGameBtn = document.querySelector('#in-game button');
endGameBtn.addEventListener('click', () => toggleComponents(inGameComponent, postGameComponent));

const playAgainBtn = document.querySelector('#post-game button');
playAgainBtn.addEventListener('click', () => toggleComponents(postGameComponent, beforeGameComponent));
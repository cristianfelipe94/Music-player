const goToHome = document.getElementById('js-goToHome-change');
const goToList = document.getElementById('js-goToList-change');
const layoutMoving = document.getElementById('js-bodyplayer-layout');
            
const playerDOMcontainer = document.getElementById('js-player-layout');
const defaultlistDOMcontainer = document.getElementById('js-playlist-layout');
const playlistDOMcontainer = document.getElementById('js-playlist-content');
const albumCoverDOMcontainer = document.getElementById('js-albumCover-layout');

function getterElement(target, element) {
    return target.getElementById(element);
}

function addingDOMelement(target, newElement) {
    return target.appendChild(newElement);
}

function generateIndexNumb(playListValue, elementValue) {
    const indexNumb = playListValue.indexOf(elementValue);
    return indexNumb;
}

function generateRandomNumb (maxValue) {
    const maxNumber = maxValue;
    const indexNumb = parseInt(Math.random() * maxValue);
    return indexNumb;
}

goToHome.addEventListener('click', (() => {
    layoutMoving.setAttribute('class', 'ui-bodyplayer-default-layout');
}));

goToList.addEventListener('click', (() => {
    layoutMoving.setAttribute('class', 'ui-bodyplayer-moved-layout');
}));
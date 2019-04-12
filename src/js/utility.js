const goToHome = document.getElementById('js-goToHome-change');
const goToList = document.getElementById('js-goToList-change');
const layoutMoving = document.getElementById('js-bodyplayer-layout');
            
const playerDOMcontainer = document.getElementById('js-player-layout');
const defaultlistDOMcontainer = document.getElementById('js-playlist-layout');
const playlistDOMcontainer = document.getElementById('js-playlist-content');
const albumCoverDOMcontainer = document.getElementById('js-albumCover-layout');

const sortListMoving = document.getElementById('js-sortList-togging');

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
    
    const firstMoveThis = function() {
        sortListMoving.setAttribute('class', 'ui-sortList-hidden-position');
    }
    const thenMoveThis = function() {
        layoutMoving.setAttribute('class', 'ui-bodyplayer-default-layout');
    }

    const afterMoveThis = function() {
        defaultlistDOMcontainer.setAttribute('class', 'ui-homelist-hidden-position');
    }
    
    setTimeout(firstMoveThis, 10);
    setTimeout(afterMoveThis, 1000);
    setTimeout(thenMoveThis, 2000);
}));

goToList.addEventListener('click', (() => {
    
    const firstMoveThis = function() {
        layoutMoving.setAttribute('class', 'ui-bodyplayer-moved-layout');
    }
    const thenMoveThis = function() {
        sortListMoving.setAttribute('class', 'ui-sortList-showing-position');
    }

    const afterMoveThis = function() {
        defaultlistDOMcontainer.setAttribute('class', 'ui-homelist-showing-position');
    }
    setTimeout(firstMoveThis, 10);
    setTimeout(afterMoveThis, 1000);
    setTimeout(thenMoveThis, 3000);
}));
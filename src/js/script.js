
function getterElement(target, element) {
	return target.getElementById(element);
};

function addingDOMelement(target, newElement) {
	return target.appendChild(newElement);
};

function generateRandomNumb(maxValue) {
	const maxNumber = maxValue;
	const indexNumb = parseInt(Math.random() * maxValue);
	return indexNumb;
};

const playList = [
	song1 = {
		src:'sounds/Radiohead-Daydreaming.mp3',
		band:'RadioHead',
		song:'Daydreaming',
	},
	song2 = {
		src:'sounds/Tool-Right-in-two.mp3',
		band:'Tool',
		song:'Right in two',
	},
	song3 = {
		src:'sounds/Tool-Sober.mp3',
		band:'Tool',
		song:'Sober',
	},
	song4 = {
		src:'sounds/Tool-The-Pot.mp3',
		band:'Tool',
		song:'The pot',
	},
];
console.log(playList);

const playerDOMcontainer = document.getElementById('js-player-layout');


class MediaPlayer {
	constructor(playerContainer) {
		this.playerContainer = playerContainer;

		function playMusic(playerElement) {
			playerElement.play();
		}

		function stopMusic(playerElement) {
			playerElement.pause();
		}

		function changeSong(playerElement, cleanBandName, cleanSongName, musicPlayList, indexSong) {
			stopMusic(playerElement);
			cleanBandName.innerText = '';
			cleanSongName.innerText = '';
			cleanBandName.innerText = musicPlayList[indexSong].band;
			cleanSongName.innerText = musicPlayList[indexSong].song;
			playerElement.setAttribute('src', playList[indexSong].src);
			playMusic(playerElement);
		};

		let newSongIndex = 0;

		const playerComponent = document.createElement('audio');
		playerComponent.setAttribute('src', playList[newSongIndex].src);
		playerComponent.setAttribute('controls', true);

		const titleBand = document.createElement('h2');
		titleBand.innerText = playList[newSongIndex].band;
		const titleSong = document.createElement('h2');
		titleSong.innerText = playList[newSongIndex].song;

		const playBtn = document.createElement('button');
		const pauseBtn = document.createElement('button');
		const nextBtn = document.createElement('button');
		const previousBtn = document.createElement('button');

		playBtn.innerText = 'PlayMe';
		pauseBtn.innerText = 'PauseMe';
		nextBtn.innerText = 'Next';
		previousBtn.innerText = 'Previous';

		playBtn.addEventListener('click', (() => {
			playMusic(playerComponent);
		}));

		pauseBtn.addEventListener('click', (() => {
			stopMusic(playerComponent);
		}));

		nextBtn.addEventListener('click', (() => {
			newSongIndex += 1;
			if(newSongIndex < playList.length) {
				changeSong(playerComponent, titleBand, titleSong, playList, newSongIndex);
			} else if (newSongIndex > playList.length - 1) {
				newSongIndex = 0;
				changeSong(playerComponent, titleBand, titleSong, playList, newSongIndex);
			}
		}));

		previousBtn.addEventListener('click', (() => {
			newSongIndex -= 1;
			if(newSongIndex < 0) {
				newSongIndex = playList.length - 1;
				changeSong(playerComponent, titleBand, titleSong, playList, newSongIndex);
			} else if (newSongIndex > -1) {
				changeSong(playerComponent, titleBand, titleSong, playList, newSongIndex);
			}
		}));

		addingDOMelement(this.playerContainer, playerComponent);
		addingDOMelement(this.playerContainer, titleBand);
		addingDOMelement(this.playerContainer, titleSong);
		addingDOMelement(this.playerContainer, playBtn);
		addingDOMelement(this.playerContainer, pauseBtn);
		addingDOMelement(this.playerContainer, previousBtn);
		addingDOMelement(this.playerContainer, nextBtn);
	}
}

const composedMediaPlayer = new MediaPlayer(playerDOMcontainer);
console.log(composedMediaPlayer);

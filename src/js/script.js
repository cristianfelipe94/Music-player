
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

const playList = [
  {
    src: 'sounds/Radiohead-Daydreaming.mp3',
    band: 'RadioHead',
    song: 'Daydreaming',
    cover: 'assets/daydreaming-cover.jpg',
  },
  {
    src: 'sounds/Tool-Right-in-two.mp3',
    band: 'Tool',
    song: 'Right in two',
    cover: 'assets/right-in-two-cover.png',
  },
  {
    src: 'sounds/Tool-Sober.mp3',
    band: 'Tool',
    song: 'Sober',
    cover: 'assets/sober-cover.jpg',
  },
  {
    src: 'sounds/Tool-The-Pot.mp3',
    band: 'Tool',
    song: 'The pot',
    cover: 'assets/the-pot-cover.jpg',
  },
  {
    src: 'sounds/Sticky Fingers-Cool&Calm.mp3',
    band: 'Sticky Fingers',
    song: 'Cool & Calm',
    cover: 'assets/cool-calm-cover.jpg',
  },
  {
    src: 'sounds/A-Perfect-Circle-Judith.mp3',
    band: 'A Perfect Circle',
    song: 'Judith',
    cover: 'assets/judith-cover.jpg',
  },
  {
    src: 'sounds/Dead-Kennedys-Holiday-In-Cambodia.mp3',
    band: 'Dead Kennedys',
    song: 'Holiday In Cambodia',
    cover: 'assets/holiday-in-cambodia-cover.jpg',
  },
  {
    src: 'sounds/Dead-Kennedys-Police-Truck.mp3',
    band: 'Dead Kennedys',
    song: 'Police Truck',
    cover: 'assets/police-truck-cover.jpg',
  },
  {
    src: 'sounds/Deftones-Change.mp3',
    band: 'Deftones',
    song: 'Change',
    cover: 'assets/change-cover.jpg',
  },
  {
    src: 'sounds/Deftones-Digital-Bath.mp3',
    band: 'Deftones',
    song: 'Digital Bath',
    cover: 'assets/digital-bath-cover.jpg',
  },
  {
    src: 'sounds/Incubus-Wish-You-Were-Here.mp3',
    band: 'Incubus',
    song: 'Wish You Were Here',
    cover: 'assets/wish-you-were-here-cover.jpg',
  },
  {
    src: 'sounds/Jinjer-Pisces.mp3',
    band: 'Jinjer',
    song: 'Pisces',
    cover: 'assets/pisces-cover.jpg',
  },
  {
    src: 'sounds/Juan-Gabriel-Abrázame-Muy-Fuerte.mp3',
    band: 'Juan Gabriel',
    song: 'Abrázame Muy Fuerte',
    cover: 'assets/abrazame-muy-fuerte-cover.jpg',
  },
  {
    src: 'sounds/Katatonia-The-Racing-Heart.mp3',
    band: 'Katatonia',
    song: 'The Racing Heart',
    cover: 'assets/the-racing-heart-cover.png',
  },
  {
    src: 'sounds/Led-Zeppelin-Black-Dog.mp3',
    band: 'Led Zeppelin',
    song: 'Black Dog',
    cover: 'assets/black-dog-cover.jpg',
  },
  {
    src: 'sounds/Ozzy-Osbourne-Dreamer.mp3',
    band: 'Ozzy Osbourne',
    song: 'Dreamer',
    cover: 'assets/dreamer-cover.jpg',
  },
  {
    src: 'sounds/Pantera-Walk.mp3',
    band: 'Pantera',
    song: 'Walk',
    cover: 'assets/walk-cover.jpg',
  },
  {
    src: 'sounds/Pearl-Jam-Do-The-Evolution.mp3',
    band: 'Pearl Jam',
    song: 'Do The Evolution',
    cover: 'assets/do-the-evolution-cover.jpg',
  },
  {
    src: 'sounds/Pink-Floyd-Hey-You.mp3',
    band: 'Pink Floyd',
    song: 'Hey You',
    cover: 'assets/hey-you-cover.jpg',
  },
  {
    src: 'sounds/Puscifer-The-Arsonist.mp3',
    band: 'Puscifer',
    song: 'The Arsonist',
    cover: 'assets/the-arsonist-cover.jpg',
  },
  {
    src: 'sounds/Puscifer-The-Humbling-River.mp3',
    band: 'Puscifer',
    song: 'The-Humbling-River',
    cover: 'assets/the-humbling-river-cover.jpg',
  },
  {
    src: 'sounds/Silencer-Death-Pierce-Me.mp3',
    band: 'Silencer',
    song: 'Death Pierce Me',
    cover: 'assets/death-pierce-me-cover.jpg',
  },
  {
    src: 'sounds/Sticky-Fingers-Change.mp3',
    band: 'Sticky Fingers',
    song: 'Change',
    cover: 'assets/change-cover.png',
  },
  {
    src: 'sounds/Stone-Temple-Pilots-Creep.mp3',
    band: 'Stone Temple Pilots',
    song: 'Creep',
    cover: 'assets/creep-cover.jpg',
  },
  {
    src: 'sounds/Stone-Temple-Pilots-Plush.mp3',
    band: 'Stone Temple Pilots',
    song: 'Plush',
    cover: 'assets/plush-cover.jpg',
  },
  {
    src: 'sounds/Sweet-Dreams-Marilyn-Manson.mp3',
    band: 'Marilyn Manson',
    song: 'Sweet Dreams',
    cover: 'assets/sweet-dreams-cover.jpg',
  },
  {
    src: 'sounds/The-Ocean-Cambrian-II-Eternal-Recurrence.mp3',
    band: 'The Ocean',
    song: 'Cambrian II Eternal Recurrence',
    cover: 'assets/cambrian-II-eternal-recurrence-cover.jpg',
  },
];

const playerDOMcontainer = document.getElementById('js-player-layout');
const playlistDOMcontainer = document.getElementById('js-playlist-layout');
const albumCoverDOMcontainer = document.getElementById('js-albumCover-layout');

const composedMediaPlayer = (function builtPlayer() {
  return class MediaPlayer {
    static PlayMusic(playerElement) {
      playerElement.play();
    }

    static StopMusic(playerElement) {
      playerElement.pause();
    }

    static ChangeSong(playPauseToggle, playerElement, cleanBandNameValue, cleanSongNameValue, musicPlayList, indexSong, imageCover) {
      playPauseToggle.classList.remove('far', 'fa-play-circle');
      playPauseToggle.classList.add('far', 'fa-pause-circle');
      const cleanBandName = cleanBandNameValue;
      const cleanSongName = cleanSongNameValue;
      MediaPlayer.StopMusic(playerElement);
      cleanBandName.innerText = '';
      cleanSongName.innerText = '';
      cleanBandName.innerText = musicPlayList[indexSong].band;
      cleanSongName.innerText = musicPlayList[indexSong].song;
      imageCover.setAttribute('src', playList[indexSong].cover);
      playerElement.setAttribute('src', playList[indexSong].src);
      MediaPlayer.PlayMusic(playerElement);
    }

    constructor(playerContainer) {
      this.playerContainer = playerContainer;

      let newSongIndex = generateRandomNumb(playList.length);
      this.playerToggle = true;

      const playerComponent = document.createElement('audio');
      playerComponent.setAttribute('src', playList[newSongIndex].src);
      playerComponent.setAttribute('id', 'js-player-controls');
      playerComponent.setAttribute('controls', true);

      const titleBand = document.createElement('h2');
      titleBand.innerText = playList[newSongIndex].band;
      titleBand.setAttribute('class', 'ui-titleband-position');
      titleBand.setAttribute('id', 'js-band-name');

      const titleSong = document.createElement('h2');
      titleSong.innerText = playList[newSongIndex].song;
      titleSong.setAttribute('class', 'ui-titlesong-position');
      titleSong.setAttribute('id', 'js-song-name');

      const imageCover = document.createElement('img');
      imageCover.setAttribute('class', 'ui-albumcover-width');
      imageCover.setAttribute('id', 'js-albumcover-display');
      imageCover.setAttribute('src', playList[newSongIndex].cover);
      addingDOMelement(albumCoverDOMcontainer, imageCover);

      const buttonsWrapper = document.createElement('div');
      buttonsWrapper.setAttribute('class', 'ui-btnlist-position');
      const playPauseBtn = document.createElement('span');
      const nextBtn = document.createElement('span');
      const previousBtn = document.createElement('span');


      playPauseBtn.classList.add('ui-main-button', 'far', 'fa-play-circle');
      playPauseBtn.setAttribute('id', 'js-toggle-player');
      nextBtn.classList.add('fas', 'fa-step-forward', 'ui-navigation-button');
      previousBtn.classList.add('fas', 'fa-step-backward', 'ui-navigation-button');

      addingDOMelement(buttonsWrapper, previousBtn);
      addingDOMelement(buttonsWrapper, playPauseBtn);
      addingDOMelement(buttonsWrapper, nextBtn);

      playPauseBtn.addEventListener('click', (() => {
        if (this.playerToggle === true) {
          playPauseBtn.classList.remove('far', 'fa-play-circle');
          playPauseBtn.classList.add('far', 'fa-pause-circle');
          this.playerToggle = false;
          MediaPlayer.PlayMusic(playerComponent);
        } else {
          playPauseBtn.classList.remove('far', 'fa-pause-circle');
          playPauseBtn.classList.add('far', 'fa-play-circle');
          this.playerToggle = true;
          MediaPlayer.StopMusic(playerComponent);
        }
      }));

      nextBtn.addEventListener('click', (() => {
        newSongIndex += 1;
        if (newSongIndex < playList.length) {
          this.playerToggle = false;
          MediaPlayer.ChangeSong(playPauseBtn, playerComponent, titleBand, titleSong, playList, newSongIndex, imageCover);
        } else if (newSongIndex > playList.length - 1) {
          newSongIndex = 0;
          this.playerToggle = false;
          MediaPlayer.ChangeSong(playPauseBtn, playerComponent, titleBand, titleSong, playList, newSongIndex, imageCover);
        }
      }));

      previousBtn.addEventListener('click', (() => {
        newSongIndex -= 1;
        if (newSongIndex < 0) {
          this.playerToggle = false;
          newSongIndex = playList.length - 1;
          MediaPlayer.ChangeSong(playPauseBtn, playerComponent, titleBand, titleSong, playList, newSongIndex, imageCover);
        } else if (newSongIndex > -1) {
          this.playerToggle = false;
          MediaPlayer.ChangeSong(playPauseBtn, playerComponent, titleBand, titleSong, playList, newSongIndex, imageCover);
        }
      }));

      addingDOMelement(this.playerContainer, playerComponent);
      addingDOMelement(this.playerContainer, titleBand);
      addingDOMelement(this.playerContainer, titleSong);
      addingDOMelement(this.playerContainer, buttonsWrapper);
    }
  };
}());

const composedPlaylist = (function builtList() {
  const list = [];
  return class PlayList {
    constructor(playlistContainer) {
      playList.forEach((element) => {
        const playlistItem = {
          band: element.band,
          song: element.song,
          songPosition: generateIndexNumb(playList, element),
        };
        list.push(playlistItem);
      });

      list.forEach((element) => {
        const playlist = document.createElement('li');
        playlist.classList.add('ui-playList-default');
        const playlistBandName = document.createElement('p');
        const playlistSongName = document.createElement('p');
        playlistBandName.innerText = element.band;
        playlistSongName.innerText = element.song;
        playlist.setAttribute('data-song-clicked', element.songPosition);
        playlist.addEventListener('click', (() => {
          const audioDOM = document.getElementById('js-player-controls');
          const togglerDOM = document.getElementById('js-toggle-player');
          const bandNameDOM = document.getElementById('js-band-name');
          const songNameDOM = document.getElementById('js-song-name');
          const albumCoverDOM = document.getElementById('js-albumcover-display');

          composedMediaPlayer.ChangeSong(togglerDOM, audioDOM, bandNameDOM, songNameDOM, list, element.songPosition, albumCoverDOM);
        }));
        addingDOMelement(playlist, playlistBandName);
        addingDOMelement(playlist, playlistSongName);
        addingDOMelement(playlistContainer, playlist);
      });
    }
  };
}());

function main(MediaPlayerClass, PlayListClass, playerDOMcontainerClass, playlistDOMcontainerClass) {
  const composedMediaPlayer = new MediaPlayerClass(playerDOMcontainerClass);
  const composedPlaylist = new PlayListClass(playlistDOMcontainerClass);
}

main(composedMediaPlayer, composedPlaylist, playerDOMcontainer, playlistDOMcontainer);

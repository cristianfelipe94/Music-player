
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

const playList = [
  {
    src: 'sounds/Radiohead-Daydreaming.mp3',
    band: 'RadioHead',
    song: 'Daydreaming',
  },
  {
    src: 'sounds/Tool-Right-in-two.mp3',
    band: 'Tool',
    song: 'Right in two',
  },
  {
    src: 'sounds/Tool-Sober.mp3',
    band: 'Tool',
    song: 'Sober',
  },
  {
    src: 'sounds/Tool-The-Pot.mp3',
    band: 'Tool',
    song: 'The pot',
  },
  {
    src: 'sounds/Sticky Fingers-Cool&Calm.mp3',
    band: 'Sticky Fingers',
    song: 'Cool & Calm',
  },
];

const playerDOMcontainer = document.getElementById('js-player-layout');
const playlistDOMcontainer = document.getElementById('js-playlist-layout');


const composedMediaPlayer = (function builtPlayer() {
  return class MediaPlayer {
    static PlayMusic(playerElement) {
      playerElement.play();
    }

    static StopMusic(playerElement) {
      playerElement.pause();
    }

    static ChangeSong(playPauseToggle, playerElement, cleanBandNameValue, cleanSongNameValue, musicPlayList, indexSong) {
      playPauseToggle.classList.remove('far', 'fa-play-circle');
      playPauseToggle.classList.add('far', 'fa-pause-circle');
      const cleanBandName = cleanBandNameValue;
      const cleanSongName = cleanSongNameValue;
      MediaPlayer.StopMusic(playerElement);
      cleanBandName.innerText = '';
      cleanSongName.innerText = '';
      cleanBandName.innerText = musicPlayList[indexSong].band;
      cleanSongName.innerText = musicPlayList[indexSong].song;
      playerElement.setAttribute('src', playList[indexSong].src);
      MediaPlayer.PlayMusic(playerElement);
    }

    constructor(playerContainer) {
      this.playerContainer = playerContainer;

      let newSongIndex = 0;
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
          MediaPlayer.ChangeSong(playPauseBtn, playerComponent, titleBand, titleSong, playList, newSongIndex);
        } else if (newSongIndex > playList.length - 1) {
          newSongIndex = 0;
          this.playerToggle = false;
          MediaPlayer.ChangeSong(playPauseBtn, playerComponent, titleBand, titleSong, playList, newSongIndex);
        }
      }));

      previousBtn.addEventListener('click', (() => {
        newSongIndex -= 1;
        if (newSongIndex < 0) {
          this.playerToggle = false;
          newSongIndex = playList.length - 1;
          MediaPlayer.ChangeSong(playPauseBtn, playerComponent, titleBand, titleSong, playList, newSongIndex);
        } else if (newSongIndex > -1) {
          this.playerToggle = false;
          MediaPlayer.ChangeSong(playPauseBtn, playerComponent, titleBand, titleSong, playList, newSongIndex);
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
          composedMediaPlayer.ChangeSong(togglerDOM, audioDOM, bandNameDOM, songNameDOM, list, element.songPosition);
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

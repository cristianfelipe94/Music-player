
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
  song1 = {
    src: 'sounds/Radiohead-Daydreaming.mp3',
    band: 'RadioHead',
    song: 'Daydreaming',
  },
  song2 = {
    src: 'sounds/Tool-Right-in-two.mp3',
    band: 'Tool',
    song: 'Right in two',
  },
  song3 = {
    src: 'sounds/Tool-Sober.mp3',
    band: 'Tool',
    song: 'Sober',
  },
  song4 = {
    src: 'sounds/Tool-The-Pot.mp3',
    band: 'Tool',
    song: 'The pot',
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

    static ChangeSong(playerElement, cleanBandNameValue, cleanSongNameValue, musicPlayList, indexSong) {
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

      const playerComponent = document.createElement('audio');
      playerComponent.setAttribute('src', playList[newSongIndex].src);
      playerComponent.setAttribute('id', 'js-player-controls');
      playerComponent.setAttribute('controls', true);

      const titleBand = document.createElement('h2');
      titleBand.innerText = playList[newSongIndex].band;
      titleBand.setAttribute('id', 'js-band-name');
      const titleSong = document.createElement('h2');
      titleSong.innerText = playList[newSongIndex].song;
      titleSong.setAttribute('id', 'js-song-name');

      const playBtn = document.createElement('button');
      const pauseBtn = document.createElement('button');
      const nextBtn = document.createElement('button');
      const previousBtn = document.createElement('button');

      playBtn.innerText = 'PlayMe';
      pauseBtn.innerText = 'PauseMe';
      nextBtn.innerText = 'Next';
      previousBtn.innerText = 'Previous';

      playBtn.addEventListener('click', (() => {
        MediaPlayer.PlayMusic(playerComponent);
      }));

      pauseBtn.addEventListener('click', (() => {
        MediaPlayer.StopMusic(playerComponent);
      }));

      nextBtn.addEventListener('click', (() => {
        newSongIndex += 1;
        if (newSongIndex < playList.length) {
          MediaPlayer.ChangeSong(playerComponent, titleBand, titleSong, playList, newSongIndex);
        } else if (newSongIndex > playList.length - 1) {
          newSongIndex = 0;
          MediaPlayer.ChangeSong(playerComponent, titleBand, titleSong, playList, newSongIndex);
        }
      }));

      previousBtn.addEventListener('click', (() => {
        newSongIndex -= 1;
        if (newSongIndex < 0) {
          newSongIndex = playList.length - 1;
          MediaPlayer.ChangeSong(playerComponent, titleBand, titleSong, playList, newSongIndex);
        } else if (newSongIndex > -1) {
          MediaPlayer.ChangeSong(playerComponent, titleBand, titleSong, playList, newSongIndex);
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
          const bandNameDOM = document.getElementById('js-band-name');
          const songNameDOM = document.getElementById('js-song-name');
          composedMediaPlayer.ChangeSong(audioDOM, bandNameDOM, songNameDOM, list, element.songPosition);
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

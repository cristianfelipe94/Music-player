
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

const goToHome = document.getElementById('js-goToHome-change');
const goToList = document.getElementById('js-goToList-change');
const layoutMoving = document.getElementById('js-bodyplayer-layout');


goToHome.addEventListener('click', (() => {
  layoutMoving.setAttribute('class', 'ui-bodyplayer-default-layout');
}));

goToList.addEventListener('click', (() => {
  layoutMoving.setAttribute('class', 'ui-bodyplayer-moved-layout');
}));

const playerDOMcontainer = document.getElementById('js-player-layout');
const defaultlistDOMcontainer = document.getElementById('js-playlist-layout');
const playlistDOMcontainer = document.getElementById('js-playlist-content');
const albumCoverDOMcontainer = document.getElementById('js-albumCover-layout');


const Singletone = (function singletoneBuilder() {
  const PREFIX = 'current_position';
  const PREFIXDefaultStorage = 'saving_default_data';
  const PREFIXCreatedStorage = 'saving_created_data';
  // Created Data or playList and init instance state
  // ////////////
  let playList = [
    {
      src: 'sounds/Tool-Right-in-two.mp3',
      band: 'Tool',
      song: 'Right in two',
      cover: 'assets/right-in-two-cover.png',
      songPosition: `${PREFIX}_1`,
    },
    {
      src: 'sounds/Tool-Sober.mp3',
      band: 'Tool',
      song: 'Sober',
      cover: 'assets/sober-cover.jpg',
      songPosition: `${PREFIX}_2`,
    },
    {
      src: 'sounds/Tool-The-Pot.mp3',
      band: 'Tool',
      song: 'The pot',
      cover: 'assets/the-pot-cover.jpg',
      songPosition: `${PREFIX}_3`,
    },
    {
      src: 'sounds/Sticky Fingers-Cool&Calm.mp3',
      band: 'Sticky Fingers',
      song: 'Cool & Calm',
      cover: 'assets/cool-calm-cover.jpg',
      songPosition: `${PREFIX}_4`,
    },
    {
      src: 'sounds/A-Perfect-Circle-Judith.mp3',
      band: 'A Perfect Circle',
      song: 'Judith',
      cover: 'assets/judith-cover.jpg',
      songPosition: `${PREFIX}_5`,
    },
    {
      src: 'sounds/Dead-Kennedys-Holiday-In-Cambodia.mp3',
      band: 'Dead Kennedys',
      song: 'Holiday In Cambodia',
      cover: 'assets/holiday-in-cambodia-cover.jpg',
      songPosition: `${PREFIX}_6`,
    },
    {
      src: 'sounds/Dead-Kennedys-Police-Truck.mp3',
      band: 'Dead Kennedys',
      song: 'Police Truck',
      cover: 'assets/police-truck-cover.jpg',
      songPosition: `${PREFIX}_7`,
    },
    {
      src: 'sounds/Deftones-Change.mp3',
      band: 'Deftones',
      song: 'Change',
      cover: 'assets/change-cover.jpg',
      songPosition: `${PREFIX}_8`,
    },
    {
      src: 'sounds/Deftones-Digital-Bath.mp3',
      band: 'Deftones',
      song: 'Digital Bath',
      cover: 'assets/digital-bath-cover.jpg',
      songPosition: `${PREFIX}_9`,
    },
    {
      src: 'sounds/Incubus-Wish-You-Were-Here.mp3',
      band: 'Incubus',
      song: 'Wish You Were Here',
      cover: 'assets/wish-you-were-here-cover.jpg',
      songPosition: `${PREFIX}_10`,
    },
    {
      src: 'sounds/Jinjer-Pisces.mp3',
      band: 'Jinjer',
      song: 'Pisces',
      cover: 'assets/pisces-cover.jpg',
      songPosition: `${PREFIX}_11`,
    },
    {
      src: 'sounds/Juan-Gabriel-Abrázame-Muy-Fuerte.mp3',
      band: 'Juan Gabriel',
      song: 'Abrázame Muy Fuerte',
      cover: 'assets/abrazame-muy-fuerte-cover.jpg',
      songPosition: `${PREFIX}_12`,
    },
    {
      src: 'sounds/Katatonia-The-Racing-Heart.mp3',
      band: 'Katatonia',
      song: 'The Racing Heart',
      cover: 'assets/the-racing-heart-cover.png',
      songPosition: `${PREFIX}_13`,
    },
    {
      src: 'sounds/Led-Zeppelin-Black-Dog.mp3',
      band: 'Led Zeppelin',
      song: 'Black Dog',
      cover: 'assets/black-dog-cover.jpg',
      songPosition: `${PREFIX}_14`,
    },
    {
      src: 'sounds/Ozzy-Osbourne-Dreamer.mp3',
      band: 'Ozzy Osbourne',
      song: 'Dreamer',
      cover: 'assets/dreamer-cover.jpg',
      songPosition: `${PREFIX}_15`,
    },
    {
      src: 'sounds/Pantera-Walk.mp3',
      band: 'Pantera',
      song: 'Walk',
      cover: 'assets/walk-cover.jpg',
      songPosition: `${PREFIX}_16`,
    },
    {
      src: 'sounds/Pearl-Jam-Do-The-Evolution.mp3',
      band: 'Pearl Jam',
      song: 'Do The Evolution',
      cover: 'assets/do-the-evolution-cover.jpg',
      songPosition: `${PREFIX}_17`,
    },
    {
      src: 'sounds/Pink-Floyd-Hey-You.mp3',
      band: 'Pink Floyd',
      song: 'Hey You',
      cover: 'assets/hey-you-cover.jpg',
      songPosition: `${PREFIX}_18`,
    },
    {
      src: 'sounds/Puscifer-The-Arsonist.mp3',
      band: 'Puscifer',
      song: 'The Arsonist',
      cover: 'assets/the-arsonist-cover.jpg',
      songPosition: `${PREFIX}_19`,
    },
    {
      src: 'sounds/Puscifer-The-Humbling-River.mp3',
      band: 'Puscifer',
      song: 'The-Humbling-River',
      cover: 'assets/the-humbling-river-cover.jpg',
      songPosition: `${PREFIX}_20`,
    },
    {
      src: 'sounds/Silencer-Death-Pierce-Me.mp3',
      band: 'Silencer',
      song: 'Death Pierce Me',
      cover: 'assets/death-pierce-me-cover.jpg',
      songPosition: `${PREFIX}_21`,
    },
    {
      src: 'sounds/Sticky-Fingers-Change.mp3',
      band: 'Sticky Fingers',
      song: 'Change',
      cover: 'assets/change-cover.png',
      songPosition: `${PREFIX}_22`,
    },
    {
      src: 'sounds/Stone-Temple-Pilots-Creep.mp3',
      band: 'Stone Temple Pilots',
      song: 'Creep',
      cover: 'assets/creep-cover.jpg',
      songPosition: `${PREFIX}_23`,
    },
    {
      src: 'sounds/Stone-Temple-Pilots-Plush.mp3',
      band: 'Stone Temple Pilots',
      song: 'Plush',
      cover: 'assets/plush-cover.jpg',
      songPosition: `${PREFIX}_24`,
    },
    {
      src: 'sounds/Sweet-Dreams-Marilyn-Manson.mp3',
      band: 'Marilyn Manson',
      song: 'Sweet Dreams',
      cover: 'assets/sweet-dreams-cover.jpg',
      songPosition: `${PREFIX}_25`,
    },
    {
      src: 'sounds/The-Ocean-Cambrian-II-Eternal-Recurrence.mp3',
      band: 'The Ocean',
      song: 'Cambrian II Eternal Recurrence',
      cover: 'assets/cambrian-II-eternal-recurrence-cover.jpg',
      songPosition: `${PREFIX}_26`,
    },
  ];

  let newPlayList = [
    {
      src: 'sounds/Radiohead-Daydreaming.mp3',
      band: 'RadioHead',
      song: 'Daydreaming',
      cover: 'assets/daydreaming-cover.jpg',
      songPosition: `${PREFIX}_27`,
    },
  ];
  
  let instance = null;

  return class {
    static Subscriptions() {
      Object.freeze({
        Play_Song: Symbol(`${PREFIX}Play_Song`),
        Stop_Song: Symbol(`${PREFIX}Stop_Song`),
        Change_Song: Symbol(`${PREFIX}Change_Song`),
      });
    }

    // Constructor will generate instance if needed it.
    // ///////////
    constructor() {
      if (!instance) {
        instance = this;
      }
      return instance;
    }

    // Getter, will be updated data.
    // ///////
    get data() {
      return playList;
    }

    get dataNew() {
      return newPlayList;
    }

    get(id) {
      return playList.find(item => generateIndexNumb(playList, item) === id);
    }

    /*// Plays music
    PlayMusic(playerElement) {
      Mediator.Publish(Singletone.Subscriptions.Play_Song, { playerElement });
    }

    // Stops music
    StopMusic(playerElement) {
      Mediator.Publish(Singletone.Subscriptions.Stop_Song, { playerElement });
    }

    ChangeSong(playPauseToggle, playerElement, cleanBandNameValue, cleanSongNameValue, musicPlayList, indexSong, imageCover) {
      Mediator.Publish(Singletone.Subscriptions.Change_Song, { playList, indexSong });
    }*/

    /**
     * Method to sync the data with the localstorage
     */
    updateStorage() {
      try {
        const defaultJSONList = JSON.stringify(playList);
        const newJSONList = JSON.stringify(newPlayList);
        localStorage.setItem(PREFIXDefaultStorage, defaultJSONList);
        localStorage.setItem(PREFIXCreatedStorage, newJSONList);
      } catch (error) {
        console.error(error);
      }
    }

    /**
     * Method to the the saved data on the localstorage
     */
    getStorage() {
      try {
        const defaultData = localStorage.getItem(PREFIXDefaultStorage);
        const createdData = localStorage.getItem(PREFIXCreatedStorage);
        const defaultParsedData = JSON.parse(defaultData);
        const createdParsedData = JSON.parse(createdData);
        if (defaultParsedData && Array.isArray(defaultParsedData) && defaultParsedData.length && createdParsedData && Array.isArray(createdParsedData) && createdParsedData.length){
          playList = defaultParsedData;
          newPlayList = createdParsedData;
        }
      } catch (error) {
        console.error(error);
      }
    }
  };
}());

const Mediator = (function mediatorBuilder() {
  const mainTopics = {};

  return class {
    // Getter, keep topics updated
    // //////
    static get topicsGetter() {
      return Object.keys(mainTopics);
    }

    // Subscriber, set a new Topic an a Callback
    // //////////
    static Subscribe(topic, callback) {
      // If topic does not exist, set a new topic
      // ////////
      if (!mainTopics.hasOwnProperty(topic)) mainTopics[topic] = [];

      // register the callback with its topic
      // ////////
      mainTopics[topic].push(callback);

      // returns the unsubscribe method
      return () => Mediator.Unsubscribe(topic, callback);
    }

    static Unsubscribe(topic, callback) {
      if (!mainTopics.hasOwnProperty(topic)) return false;

      // remove the callback for the topic
      mainTopics[topic] = mainTopics[topic].filter(c => c !== callback);

      return true;
    }

    // Publish, will trigger the callback for each subscribed element
    // Data parameter is used as element on callback
    // //////////////
    static Publish(topic, data) {
      if (!mainTopics.hasOwnProperty(topic)) return false;
      mainTopics[topic].forEach(callback => callback(data));
      return true;
    }
  };
}());

const MediaPlayer = (function playerBuilder() {
  return class PlayerLayout {
    constructor() {
      // Constructor gets body for media player
      // An will create an Instance for the singletone data
      // ///////
      this.selectorPlayer = playerDOMcontainer;
      this.selectorPlayList = playlistDOMcontainer;
      this.selectorAlbumCov = albumCoverDOMcontainer;
      this.defaultList = new Singletone();
      this.defaulMediator = new Mediator();

      this.defaultList.getStorage();

      this.newSongIndex = generateRandomNumb(this.defaultList.dataNew.length);
      this.playerToggle = true;

      // As this is the body component for the media player
      // Bottons and elements from component must be subscribed
      // This will create a new element to respond for a cetain callback
      // /////////
      /*Mediator.Subscribe(Singletone.Subscriptions.Play_Song, this.PlayMusic.bind(this));
      Mediator.Subscribe(Singletone.Subscriptions.Stop_Song, this.StopMusic.bind(this));
      Mediator.Subscribe(Singletone.Subscriptions.Change_Song, this.ChangeSong.bind(this));*/

      this.render();
    }

    // This function will generate al Media Player Body
    // As soon as all parts are generated
    // /////////////
    render() {
      // Save all the returned elements
      // ////////
      this.audioDOMComponent = this.audioComponent();
      this.bandDOMComponent = this.titleBandComponent();
      this.songDOMComponent = this.titleSongComponent();
      this.imageDOMComponent = this.imageComponent();
      this.playStopDOMComponent = this.playStopComponent();
      this.navPlayerDOMComponent = this.actionBtnsComponent();


      // Added every element into de Default selector
      // ///////////
      addingDOMelement(this.selectorPlayer, this.audioDOMComponent);
      addingDOMelement(this.selectorPlayer, this.bandDOMComponent);
      addingDOMelement(this.selectorPlayer, this.songDOMComponent);

      addingDOMelement(this.selectorAlbumCov, this.imageDOMComponent);
      addingDOMelement(this.selectorPlayer, this.navPlayerDOMComponent);
      addingDOMelement(this.navPlayerDOMComponent, this.playStopDOMComponent);
    }

    audioComponent() {
      const playerComponent = document.createElement('audio');
      playerComponent.setAttribute('src', this.defaultList.dataNew[this.newSongIndex].src);
      playerComponent.setAttribute('id', 'js-player-controls');
      playerComponent.setAttribute('controls', true);

      return playerComponent;
    }

    titleBandComponent() {
      const titleBand = document.createElement('h2');
      titleBand.innerText = this.defaultList.dataNew[this.newSongIndex].band;
      titleBand.setAttribute('class', 'ui-titleband-position');
      titleBand.setAttribute('id', 'js-band-name');

      return titleBand;
    }

    titleSongComponent() {
      const titleSong = document.createElement('h2');
      titleSong.innerText = this.defaultList.dataNew[this.newSongIndex].song;
      titleSong.setAttribute('class', 'ui-titlesong-position');
      titleSong.setAttribute('id', 'js-song-name');

      return titleSong;
    }

    imageComponent() {
      const imageCover = document.createElement('img');
      imageCover.setAttribute('class', 'ui-albumcover-width');
      imageCover.setAttribute('id', 'js-albumcover-display');
      imageCover.setAttribute('src', this.defaultList.dataNew[this.newSongIndex].cover);
      addingDOMelement(albumCoverDOMcontainer, imageCover);

      return imageCover;
    }

    playStopComponent() {
      const playPauseBtn = document.createElement('span');
      playPauseBtn.classList.add('ui-main-button', 'far', 'fa-play-circle');
      playPauseBtn.setAttribute('id', 'js-toggle-player');

      playPauseBtn.addEventListener('click', (() => {
        if (this.playerToggle === true) {
          playPauseBtn.classList.remove('far', 'fa-play-circle');
          playPauseBtn.classList.add('far', 'fa-pause-circle');
          this.playerToggle = false;
          MediaPlayer.PlayMusic(this.audioDOMComponent);
        } else {
          playPauseBtn.classList.remove('far', 'fa-pause-circle');
          playPauseBtn.classList.add('far', 'fa-play-circle');
          this.playerToggle = true;
          MediaPlayer.StopMusic(this.audioDOMComponent);
        }
      }));
      return playPauseBtn;
    }

    actionBtnsComponent() {
      const buttonsWrapper = document.createElement('div');
      buttonsWrapper.setAttribute('class', 'ui-btnlist-position');

      const nextBtn = document.createElement('span');
      nextBtn.classList.add('fas', 'fa-step-forward', 'ui-navigation-button', 'ui-right-float');

      const previousBtn = document.createElement('span');
      previousBtn.classList.add('fas', 'fa-step-backward', 'ui-navigation-button', 'ui-left-float');

      nextBtn.addEventListener('click', (() => {
        this.newSongIndex += 1;
        if (this.newSongIndex < this.defaultList.dataNew.length) {
          this.playerToggle = false;
          MediaPlayer.ChangeSong(this.playStopDOMComponent, this.audioDOMComponent, this.bandDOMComponent, this.songDOMComponent, this.defaultList.dataNew, this.newSongIndex, this.imageDOMComponent);
        } else if (this.newSongIndex > this.defaultList.dataNew.length - 1) {
          this.newSongIndex = 0;
          this.playerToggle = false;
          MediaPlayer.ChangeSong(this.playStopDOMComponent, this.audioDOMComponent, this.bandDOMComponent, this.songDOMComponent, this.defaultList.dataNew, this.newSongIndex, this.imageDOMComponent);
        }
      }));

      previousBtn.addEventListener('click', (() => {
        this.newSongIndex -= 1;
        if (this.newSongIndex < 0) {
          this.playerToggle = false;
          this.newSongIndex = this.defaultList.dataNew.length - 1;
          MediaPlayer.ChangeSong(this.playStopDOMComponent, this.audioDOMComponent, this.bandDOMComponent, this.songDOMComponent, this.defaultList.dataNew, this.newSongIndex, this.imageDOMComponent);
        } else if (this.newSongIndex > -1) {
          this.playerToggle = false;
          MediaPlayer.ChangeSong(this.playStopDOMComponent, this.audioDOMComponent, this.bandDOMComponent, this.songDOMComponent, this.defaultList.dataNew, this.newSongIndex, this.imageDOMComponent);
        }
      }));

      addingDOMelement(buttonsWrapper, previousBtn);
      addingDOMelement(buttonsWrapper, nextBtn);

      return buttonsWrapper;
    }

    // Plays music
    static PlayMusic(playerElement) {
      playerElement.play();
    }

    // Stops music
    static StopMusic(playerElement) {
      playerElement.pause();
    }

    static ChangeSong(
      playPauseToggle = this.playStopDOMComponent,
      playerElement = this.audioDOMComponent,
      cleanBandNameValue = this.bandDOMComponent,
      cleanSongNameValue = this.songDOMComponent,
      musicPlayList = this.defaultList.dataNew,
      indexSong = this.newSongIndex,
      imageCover = this.imageDOMComponent,
    ) {
      playPauseToggle.classList.remove('far', 'fa-play-circle');
      playPauseToggle.classList.add('far', 'fa-pause-circle');
      const cleanBandName = cleanBandNameValue;
      const cleanSongName = cleanSongNameValue;
      MediaPlayer.StopMusic(playerElement);
      cleanBandName.innerText = '';
      cleanSongName.innerText = '';
      cleanBandName.innerText = musicPlayList[indexSong].band;
      cleanSongName.innerText = musicPlayList[indexSong].song;
      imageCover.setAttribute('src', musicPlayList[indexSong].cover);
      playerElement.setAttribute('src', musicPlayList[indexSong].src);
      MediaPlayer.PlayMusic(playerElement);
    }
  };
}());

const Playlist = (function builtList() {
  return class PlayList {
    constructor() {
      const playlistContainer = playlistDOMcontainer;
      const defaultlistContainer = defaultlistDOMcontainer;
      const defaultPlayList = new Singletone();

      console.log(defaultPlayList.data);
      console.log(defaultPlayList.dataNew);
      console.log(defaultPlayList.updateStorage);

      /*Mediator.Subscribe(Singletone.Subscriptions.Change_Song, this.ChangeSong);*/

      function dragstart(event) {
        const idElement = event.target.getAttribute('data-song-clicked');
        event.dataTransfer.setData('text', idElement);
      }

      function listDefaultComponent(dataInstance, container) {
        dataInstance.forEach((element) => {
          const playlist = document.createElement('li');
          playlist.classList.add('ui-playList-default');
          const playlistBandName = document.createElement('p');
          const playlistSongName = document.createElement('p');
          playlistBandName.innerText = element.band;
          playlistSongName.innerText = element.song;
          const elementIndex = element.songPosition;
          playlist.setAttribute('data-song-clicked', elementIndex);
          playlist.setAttribute('draggable', true);
          playlist.addEventListener('dragstart', dragstart);
          addingDOMelement(playlist, playlistBandName);
          addingDOMelement(playlist, playlistSongName);
          addingDOMelement(container, playlist);
        });
      }
      
      function listNewComponent(dataInstance, container) {
        dataInstance.forEach((element) => {
          const playlist = document.createElement('li');
          playlist.classList.add('ui-playList-default');
          const playlistBandName = document.createElement('p');
          const playlistSongName = document.createElement('p');
          playlistBandName.innerText = element.band;
          playlistSongName.innerText = element.song;
          const elementIndex = element.songPosition;
          playlist.setAttribute('data-song-clicked', elementIndex);
          playlist.setAttribute('draggable', true);
          playlist.addEventListener('dragstart', dragstart);
          addingDOMelement(playlist, playlistBandName);
          addingDOMelement(playlist, playlistSongName);
          addingDOMelement(container, playlist);
        });
      }
  
      function onDropTo(event) {
        if (event.target.className === 'ui-playList-position') {
          const data = event.dataTransfer.getData('text');
          const selectedElement = document.querySelector(`[data-song-clicked="${data}"]`);
          selectedElement.parentNode.removeChild(selectedElement);
          event.target.appendChild(selectedElement);
          for (let e = 0; e < defaultPlayList.data.length; e++){
            if(data === defaultPlayList.data[e].songPosition) {
              const elementToRemove = generateIndexNumb(defaultPlayList.data, defaultPlayList.data[e]);
              const removedSong = defaultPlayList.data.splice(elementToRemove, 1);
              const stringTo = JSON.stringify(removedSong);
              const formatedToString = stringTo.replace("[","").replace("]","");
              const formatedToJSON = JSON.parse(formatedToString);
              const converted = Object.assign({}, formatedToJSON);
              defaultPlayList.dataNew.push(converted);
              defaultPlayList.updateStorage();
              console.log('Added song:',defaultPlayList.data[e].song);
              console.log('Added band:',defaultPlayList.data[e].band);
            }
          }
        }
      }
  
      function onDropFrom(event) {
        if (event.target.className === 'ui-homelist-position') {
          const data = event.dataTransfer.getData('text');
          const selectedElement = document.querySelector(`[data-song-clicked="${data}"]`);
          selectedElement.parentNode.removeChild(selectedElement);
          event.target.appendChild(selectedElement);
          for (let e = 0; e < defaultPlayList.dataNew.length; e++){
            if(data === defaultPlayList.dataNew[e].songPosition) {
              const elementToRemove = generateIndexNumb(defaultPlayList.dataNew, defaultPlayList.dataNew[e]);
              const removedSong = defaultPlayList.dataNew.splice(elementToRemove, 1);
              const stringTo = JSON.stringify(removedSong);
              const formatedToString = stringTo.replace("[","").replace("]","");
              const formatedToJSON = JSON.parse(formatedToString);
              const converted = Object.assign({}, formatedToJSON);
              defaultPlayList.data.push(converted);
              defaultPlayList.updateStorage();
              console.log('Removed song:',defaultPlayList.data[e].song);
              console.log('Removed band:',defaultPlayList.data[e].band);
            }
          }
        }
      }
  
      function dragOverTo(event) {
        event.preventDefault();
      }

      // Render block.
      // /////////////
      listDefaultComponent(defaultPlayList.data, defaultlistContainer);
      listNewComponent(defaultPlayList.dataNew, playlistContainer);
      playlistContainer.addEventListener('drop', onDropTo);
      defaultlistContainer.addEventListener('drop', onDropFrom);
      playlistContainer.addEventListener('dragover', dragOverTo);
      defaultlistContainer.addEventListener('dragover', dragOverTo);
    }
  };
}());

(function builderComponents() {
  function main() {
    const utility = new Singletone();
    const layout = new MediaPlayer();
    const listLayout = new Playlist();

    window.addEventListener('onload', utility.getStorage());
  }
  main();
}());

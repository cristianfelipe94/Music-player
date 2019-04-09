
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

const playerDOMcontainer = document.getElementById('js-player-layout');
const playlistDOMcontainer = document.getElementById('js-playlist-layout');
const albumCoverDOMcontainer = document.getElementById('js-albumCover-layout');

const Singletone = (function singletoneBuilder() {
  const PREFIX = 'default_list_data';
  // Created Data or playList and init instance state
  // ////////////
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
        this.getStorage();
        instance = this;
      }
      return instance;
    }

    // Getter, will be updated data.
    // ///////
    get data() {
      return playList;
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
        const json = JSON.stringify(this.playList);
        localStorage.setItem(PREFIX, json);
      } catch (error) {
        console.error(error);
      }
    }

    /**
     * Method to the the saved data on the localstorage
     */
    getStorage() {
      try {
        let data = localStorage.getItem(PREFIX);
        data = JSON.parse(data);
        if (data && Array.isArray(data) && data.length) this.playList = data;
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

      this.newSongIndex = generateRandomNumb(this.defaultList.data.length);
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
      playerComponent.setAttribute('src', this.defaultList.data[this.newSongIndex].src);
      playerComponent.setAttribute('id', 'js-player-controls');
      playerComponent.setAttribute('controls', true);

      return playerComponent;
    }

    titleBandComponent() {
      const titleBand = document.createElement('h2');
      titleBand.innerText = this.defaultList.data[this.newSongIndex].band;
      titleBand.setAttribute('class', 'ui-titleband-position');
      titleBand.setAttribute('id', 'js-band-name');

      return titleBand;
    }

    titleSongComponent() {
      const titleSong = document.createElement('h2');
      titleSong.innerText = this.defaultList.data[this.newSongIndex].song;
      titleSong.setAttribute('class', 'ui-titlesong-position');
      titleSong.setAttribute('id', 'js-song-name');

      return titleSong;
    }

    imageComponent() {
      const imageCover = document.createElement('img');
      imageCover.setAttribute('class', 'ui-albumcover-width');
      imageCover.setAttribute('id', 'js-albumcover-display');
      imageCover.setAttribute('src', this.defaultList.data[this.newSongIndex].cover);
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
        if (this.newSongIndex < this.defaultList.data.length) {
          this.playerToggle = false;
          MediaPlayer.ChangeSong(this.playStopDOMComponent, this.audioDOMComponent, this.bandDOMComponent, this.songDOMComponent, this.defaultList.data, this.newSongIndex, this.imageDOMComponent);
        } else if (this.newSongIndex > this.defaultList.data.length - 1) {
          this.newSongIndex = 0;
          this.playerToggle = false;
          MediaPlayer.ChangeSong(this.playStopDOMComponent, this.audioDOMComponent, this.bandDOMComponent, this.songDOMComponent, this.defaultList.data, this.newSongIndex, this.imageDOMComponent);
        }
      }));

      previousBtn.addEventListener('click', (() => {
        this.newSongIndex -= 1;
        if (this.newSongIndex < 0) {
          this.playerToggle = false;
          this.newSongIndex = this.defaultList.data.length - 1;
          MediaPlayer.ChangeSong(this.playStopDOMComponent, this.audioDOMComponent, this.bandDOMComponent, this.songDOMComponent, this.defaultList.data, this.newSongIndex, this.imageDOMComponent);
        } else if (this.newSongIndex > -1) {
          this.playerToggle = false;
          MediaPlayer.ChangeSong(this.playStopDOMComponent, this.audioDOMComponent, this.bandDOMComponent, this.songDOMComponent, this.defaultList.data, this.newSongIndex, this.imageDOMComponent);
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
      musicPlayList = this.defaultList.data,
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
  const list = [];
  return class PlayList {
    constructor() {
      this.playlistContainer = playlistDOMcontainer;
      this.defaultPlayList = new Singletone();

      /*Mediator.Subscribe(Singletone.Subscriptions.Change_Song, this.ChangeSong);*/

      this.defaultPlayList.data.forEach((element) => {
        const playlistItem = {
          band: element.band,
          song: element.song,
          songPosition: generateIndexNumb(this.defaultPlayList.data, element),
        };
        list.push(playlistItem);
      });

      this.listComponent();
    }

    listComponent() {
      list.forEach((element) => {
        const playlist = document.createElement('li');
        playlist.classList.add('ui-playList-default');

        const playlistBandName = document.createElement('p');
        const playlistSongName = document.createElement('p');
        playlistBandName.innerText = element.band;
        playlistSongName.innerText = element.song;
        const elementIndex = element.songPosition;
        playlist.setAttribute('data-song-clicked', elementIndex);
        /*playlist.addEventListener('click', (() => {
          Mediator.Publish(Singletone.Subscriptions.Change_Song, { elementIndex });
        }));*/
        addingDOMelement(playlist, playlistBandName);
        addingDOMelement(playlist, playlistSongName);
        addingDOMelement(this.playlistContainer, playlist);
      });
    }
  };
}());

(function builderComponents() {
  function main() {
    const layout = new MediaPlayer();
    const listLayout = new Playlist();
  }
  main();
}());

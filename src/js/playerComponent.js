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
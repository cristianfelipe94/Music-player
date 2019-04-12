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
  
      // This method Plays Song.
      // ///////////
      PlayMusic(playerElement) {
        Mediator.Publish(Singletone.Subscriptions.Play_Song, { playerElement });
      }
  
      // This method Stops Song.
      // ///////////
      StopMusic(playerElement) {
        Mediator.Publish(Singletone.Subscriptions.Stop_Song, { playerElement });
      }
  
      // This method Changes Song
      // ///////////
      ChangeSong(playPauseToggle, playerElement, cleanBandNameValue, cleanSongNameValue, musicPlayList, indexSong, imageCover) {
        Mediator.Publish(Singletone.Subscriptions.Change_Song, { playList, indexSong });
      }
  
      // This method will set Data on LocalStorage.
      // ///////////
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
  
      // This method will get Stored Data on LocalStorage.
      // ////////////
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
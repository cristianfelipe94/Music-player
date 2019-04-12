const Playlist = (function builtList() {
    return class PlayList {
      constructor() {
        const playlistContainer = playlistDOMcontainer;
        const defaultlistContainer = defaultlistDOMcontainer;
        const defaultPlayList = new Singletone();
  
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
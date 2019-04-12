const sortComponents = (function sorterBuider() {
    const defaultPlayList = new Singletone();

    function sortByName(event) {
        console.log('Sorted by Name');
    }

    function sortBySong(event) {
        console.log('Sorted by Song');
    }

    function sortByDate(event) {
        console.log('Sorted by Date');
    }

    sorterDefaultBand.addEventListener('click', sortByName);
    sorterDefaultSong.addEventListener('click', sortBySong);
    sorterDefaultDate.addEventListener('click', sortByDate);

    sorterCreatedBand.addEventListener('click', sortByName);
    sorterCreatedSong.addEventListener('click', sortBySong);
    sorterCreatedDate.addEventListener('click', sortByDate);
}());
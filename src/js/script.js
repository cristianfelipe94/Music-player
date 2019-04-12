(function builderComponents() {
  function main() {
    const utility = new Singletone();
    const layout = new MediaPlayer();
    const listLayout = new Playlist();

    window.addEventListener('onload', utility.getStorage());
  }
  main();
}());

let button1 = document.querySelector(".btn");
button1.addEventListener("click", function () {
  let name = this.id;
  playAudio(name);
});

function playAudio(name) {
  let audio = new Audio(`resource/${name}.mp3`);
  audio.play();
}

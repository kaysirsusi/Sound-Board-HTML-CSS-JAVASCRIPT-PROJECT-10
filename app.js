const sounds = [
  "Woodpecker",
  "Tarzan",
  "road-runner",
  "donald-duck",
  "Megatron",
  "pop",
];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn", "btn-primary", "m-1");

  btn.innerText = sound;

  btn.addEventListener("click", () => {
    document.getElementById(sound).play();
  });

  document.getElementById("buttons").appendChild(btn);
});

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);

    song.pause();
    song.currentTime = 0;
  });
}

let showHideButton = document.getElementById("showHideButton");
let toggleClassButton = document.getElementById("toggleClassButton");
let switchVideoButton = document.getElementById("switchVideoButton");
let dropTextButton = document.getElementById("dropTextButton");
let bringBackTextButton = document.getElementById("bringBackTextButton");
let video = document.getElementById("video-section");
let videoSource = document.getElementById("video-source");
let mainText = document.getElementById("main-text");

function toggleHide() {
    if (video.style.display === "none") {
        video.style.display = "block";
    } else {
        video.style.display = "none";
    }
}

function toggleClass() {
    if (mainText.classList[0] === "main-text") {
        mainText.classList.remove("main-text");
        mainText.classList.add("main-text-other");
    } else {
      mainText.classList.remove("main-text-other");
      mainText.classList.add("main-text");
    }
}

function switchVideo() {

    let sources = video.getElementsByTagName('source');

    if (sources[0].src === "https://mdbootstrap.com/img/video/Tropical.mp4") {
        sources[0].src = 'https://mdbootstrap.com/img/video/forest.mp4';
    }
    else if (sources[0].src === 'https://mdbootstrap.com/img/video/forest.mp4') {
      sources[0].src = "https://mdbootstrap.com/img/video/Agua-natural.mp4";
    } else {
      sources[0].src = "https://mdbootstrap.com/img/video/Tropical.mp4";
    }
    video.load();
}

function dropText() {
    mainText.classList.add("animated", "hinge");
}

function bringBackText() {
  mainText.classList.remove("animated", "hinge");
  if (mainText.classList[0] === "main-text-other") {
      mainText.classList.remove("main-text-other");
      mainText.classList.add("main-text");
  };
}

showHideButton.addEventListener("click", toggleHide);

toggleClassButton.addEventListener("click", toggleClass);

switchVideoButton.addEventListener("click", switchVideo);

dropTextButton.addEventListener("click", dropText);

bringBackTextButton.addEventListener("click", bringBackText);

const video = document.querySelector('.video');
const controlArea = document.querySelector('.controls-area')
const unmutedBtn = document.querySelector('.unmutedBtn');
const playBtn = document.querySelector('.play');


window.addEventListener('load', function (event) {
  const loader = document.querySelector('.loader-area');
    loader.classList.remove('active');
    controlArea.classList.add('active')
  });

if(video.muted = true){
  unmutedBtn.classList.add('unmuted');
}

function unmute(){
  video.muted = false;
  controlArea.classList.remove('active')
  unmutedBtn.classList.remove('unmuted');
}

function playVieo(){
  video.play();
  playBtn.classList.remove('active')
  controlArea.classList.remove('active')
}

function pauseVideo() {
  video.pause();
  playBtn.classList.add('active')
  controlArea.classList.add('active')
}
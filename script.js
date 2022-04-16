let playBtn=document.getElementById("play-btn");
let video=document.querySelector(".video");
let progressBar=document.querySelector(".progress-bar");
let progressRange=document.querySelector(".progress-range");
let isVideoPlaying=false;
// lets play or pause the video
const playOrPauseVideo=()=>{
  if(!isVideoPlaying){
    video.play();
    isVideoPlaying=true;
    playBtn.classList.replace("fa-play","fa-pause")
  }else{
      video.pause();
      isVideoPlaying=false;
    playBtn.classList.replace("fa-pause","fa-play")

  }
}

// spacebar click

document.body.onkeyup= function(event) {
  if (event.keyCode == 32) {
     playOrPauseVideo();
     return true;
  } else {
     return false;
  }
}
// update progress bar
const updateProgressbar=(check)=>{

  // console.log(check.target.currentTime,check.target.duration);
  let currentTime=check.target.currentTime;
  let duration=check.target.duration;
  progressBar.style.cssText=`
  width:${(currentTime/duration)*100}%
  `;
}
// update seek
function updateSeekbar(event){
  console.log(this);
  console.log(event.offsetX,event.target.clientWidth);
  let currentPoint=event.offsetX;
  let progressBarWidth=this.clientWidth;
  // to find evideyanu click cheythath
  let currentRange=(currentPoint/progressBarWidth)*video.duration;
  video.currentTime=currentRange;

}

// add event listeners
playBtn.addEventListener("click",playOrPauseVideo);
video.addEventListener("click",playOrPauseVideo);
video.addEventListener("timeupdate",updateProgressbar);
progressRange.addEventListener("click",updateSeekbar)

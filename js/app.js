const leftSearch = document.querySelector(".leftSearch");
const mainSearchInput = document.querySelector(".mainSearch input");
const body = document.querySelector("body");
const mainSearch = document.querySelector(".mainSearch");
const rightSearch = document.querySelector(".rightSearch");
const video = document.querySelector(".video");
const Video = document.querySelector(".VideoIMG");
const BigWill = document.querySelector(".Videoinform");
let a = true;
function onClick(){
    leftSearch.classList.add("OnLeftSearch");
    mainSearch.classList.add("OnmainSearch");
    rightSearch.classList.add("onRightSearch");
    a = false;
}
function OutClick(){
    if(leftSearch.classList.contains("OnLeftSearch")&&a){
        leftSearch.classList.remove("OnLeftSearch");
        mainSearch.classList.remove("OnmainSearch");
        rightSearch.classList.remove("onRightSearch");
    }
    else{
        a = true;
    }
}
function onVideoClick(){
    location.href = "https://www.youtube.com/c/%EC%9E%85%EC%A7%88%EC%9D%98%EC%B6%94%EC%96%B5TV";
}
let TimeGoseOn = 0;
function ifOn(){
    TimeGoseOn = 0;
    while(TimeGoseOn<3)
    {
        Video.addEventListener("mouseout",offMouseOver);
        TimeGoseOn += 1;
        if(TimeGoseOn>2){
            console.log("오");
            Video.classList.add("OnVideoIMG");
        }
        sleep(1000);
    }
}
function sleep(ms) {
    const wakeUpTime = Date.now() + ms;
    while (Date.now() < wakeUpTime) {}
}
function onMouseOver(){
    ifOn();
}
function offMouseOver(){
    TimeGoseOn = 4;
    Video.classList.remove("OnVideoIMG");
}
body.addEventListener("click", OutClick);
mainSearchInput.addEventListener("click", onClick);
video.addEventListener("click", onVideoClick);
Video.addEventListener("mouseover", onMouseOver);
Video.addEventListener("mouseout",offMouseOver);
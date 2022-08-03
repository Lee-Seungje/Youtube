const leftSearch = document.querySelector(".leftSearch");
const mainSearchInput = document.querySelector(".mainSearch input");
const body = document.querySelector("body");
const mainSearch = document.querySelector(".mainSearch");
const rightSearch = document.querySelector(".rightSearch");
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
body.addEventListener("click", OutClick);
mainSearchInput.addEventListener("click", onClick);
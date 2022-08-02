const leftSearch = document.querySelector(".leftSearch");
const mainSearchInput = document.querySelector(".mainSearch input");
const body = document.querySelector("body");
const mainSearch = document.querySelector(".mainSearch");
let a = true;
function onClick(){
    leftSearch.classList.add("OnLeftSearch");
    mainSearch.classList.add("OnmainSearch");
    a = false;
}
function OutClick(){
    if(leftSearch.classList.contains("OnLeftSearch")&&a){
        leftSearch.classList.remove("OnLeftSearch");
        mainSearch.classList.remove("OnmainSearch");
    }
    else{
        a = true;
    }
}
body.addEventListener("click", OutClick);
mainSearchInput.addEventListener("click", onClick);
var wrap=document.getElementsByClassName('wrapper')[0];
wrap.addEventListener("scroll", myFunction);
var body=document.getElementsByTagName('body')[0].style; 
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function fadeSide(){
    let set = document.getElementsByClassName('sidebar')[0];
    let fadElems = set.getElementsByClassName('fa');		
    for (i = 0; i < fadElems.length; i++) {
        fadElems[i].style.transform="scale(1)";
        fadElems[i].style.opacity=1;
    }
}

function activate_icon(id){
    var links=document.getElementsByClassName('pagelinks');
    var icons=document.getElementsByClassName('back_icon');
    for (i = 0; i < links.length; i++) {
        if(i==id){
            links[i].id = "active";
            icons[i].id = "back_icon";
        }else{
            links[i].id = "";
            icons[i].id = "";
        }
        }
}

function resetFade(){
    var fadElems = document.getElementsByClassName('fade');
    for (i = 0; i < fadElems.length; i++) {
        fadElems[i].style.opacity=0;
        fadElems[i].style.transform="translateY(5px)";
    }
}
async function fadeMe(id){
    resetFade();
    var set = document.getElementsByClassName('profile');
    var fadElems = set[id].getElementsByClassName('fade');		
    for (i = 0; i < fadElems.length; i++) {
        fadElems[i].style.transform="translateY(0)";
        fadElems[i].style.opacity=1;
        await sleep(0);
    }
}

function myFunction() {
    var scroll =((wrap.scrollTop) / (wrap.scrollHeight));
    let x = 1/16;
    if(scroll<1.5*x){
        body.backgroundColor='rgb(107, 175, 146)';
        activate_icon(0);
        fadeMe(0);
    }else if(scroll<3.5*x){
        body.backgroundColor='rgb(140, 114, 178)';
        activate_icon(1);
        fadeMe(1);
    }else if(scroll<5.5*x){
        body.backgroundColor='rgb(225, 92, 127)';
        activate_icon(2);
        fadeMe(2);
    }else if(scroll<7.5*x){
        body.backgroundColor='rgba(225, 222, 0, 0.7)';
        activate_icon(3);
        fadeMe(3);
    }else if(scroll<9.5*x){
        body.backgroundColor='rgba(255, 67, 1, 0.6)';
        activate_icon(4);
        fadeMe(4);
    }else if(scroll<11.5*x){
        body.backgroundColor='rgb(39, 171, 252)';
        activate_icon(5);
        fadeMe(5);
    }else if(scroll<13.5*x){
        body.backgroundColor='rgb(218, 102, 108)';
        activate_icon(6);
        fadeMe(6);
    }else if(scroll<15.5*x){
        body.backgroundColor='rgb(34, 138, 188)';
        activate_icon(7);
        fadeMe(7);
    }
}
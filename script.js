var wrap=document.getElementsByClassName('wrapper')[0];
wrap.addEventListener("scroll", myFunction);

function activate_icon(id){
    var links=document.getElementsByClassName('pagelinks');
    var icons=document.getElementsByClassName('back_icon');
    for (i = 0; i < links.length; i++) {
            links[i].id = "";
            icons[i].id = "";
    }
    links[id].id = "active";
    icons[id].id = "back_icon";
}

function resetFade(){
    let fadElems = document.querySelectorAll('.fade');
    fadElems.forEach(elem => {
        elem.style.animationName="fade-out";
    });
}

function fadeMe(id){
    resetFade();
    var set = document.querySelectorAll('.profile');
    var fadElems = set[id].querySelectorAll('.fade');
    fadElems.forEach(elem => {
        elem.style.animationName="fade-in";
    });
}

var body=document.getElementsByTagName('body')[0].style; 
function myFunction() {
    var scroll =((wrap.scrollTop) / (wrap.scrollHeight));
    let x = 1/14;
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
        body.backgroundColor='rgb(39, 171, 252)';
        activate_icon(4);
        fadeMe(4);
    }else if(scroll<11.5*x){
        body.backgroundColor='rgb(225, 92, 127)';
        activate_icon(5);
        fadeMe(5);
    }else if(scroll<13.5*x){
        body.backgroundColor='rgb(34, 138, 188)';
        activate_icon(6);
        fadeMe(6);
    }
}

var link_list = document.querySelectorAll('.pagelinks a');
link_list.forEach( link => {
    link.addEventListener('click', function(){
        view = document.querySelector(this.id);
        view.scrollIntoView();
    })
});

console.log('Loaded!');
//change the text of main text div

var element = document.getElementById('main-text');
element.innerHTML = 'new value';

//to move the image on click

var img = document.getElementById('madi');

var moveLeft = 0;

var moveRight = function(){
    moveLeft=moveLeft+1;
    img.style.marginLeft = moveLeft + 'px';
}

img.onclick = function(){
    var interval = setInterval(moveRight,50);
    img.style.marginRight ='100px';
}
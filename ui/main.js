console.log('Loaded!');
//change the text of main text div

var element = document.getElementById('main-text');
element.innerHTML = 'new value';

//to move the image on click

var img = document.getElementById('madi');
img.onclick = function(){
    img.style.marginRight ='100px';
}
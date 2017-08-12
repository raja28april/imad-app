/*console.log('Loaded!');
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
}*/


//Counter code
var button =document.getElementById('counter');
button.onclick = function(){
    //make a request to the counter endpoint
    
    //Capture the respons eans store it in a variable
    
    //Render the vriable in the correct span
    
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};
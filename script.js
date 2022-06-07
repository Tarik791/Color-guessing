var boxes = document.querySelectorAll('.box');
var s = document.querySelectorAll('.rgbspan');
var colors = generateRandomColor(6);
var pickedColor = colors[Math.floor(Math.random() * 6)];

s.textContent = pickedColor;

var playBtn = document.querySelector('#playAgain');
var easyBtn = document.querySelector('#easyBtn');
var hardBtn = document.querySelector('#hardBtn');
var boxCount = 6;
var statusText = document.querySelector('.status');
statusText.textContent = "Let's play!!";

easyBtn.addEventListener('click', function() {

    document.querySelector('h1').style.background = '#f88989';
    statusText.textContent = "Let's play!!";
    boxCount = 3;
    this.style.background = '#f88989';
    this.style.color = 'white';
    hardBtn.style.background = 'white';
    colors = generateRandomColor(boxCount);
    pickedColor = colors[Math.floor(Math.random() * 3)];
    s.textContent = pickedColor;

    for(var i = 0; i < boxes.length; i++){
        if(colors[i]){
            boxes[i].style.background = colors[i];
        
        }else{

            boxes[i].style.display = 'none';


        }
    }


});

hardBtn.addEventListener('click', function(){

    document.querySelector('h1').style.background = '#f88989';
    statusText.textContent = "Let's play!!";
    this.style.background = '#f88989';
    this.style.color = 'white';
    easyBtn.style.background = 'white';
    easyBtn.style.color = '#f88989';
    boxCount = 6;
    colors = generateRandomColor(boxCount);
    pickedColor = colors[Math.floor(Math.random() * 6)];
    for(var i = 0; i < boxes.length; i++){

        boxes[i].style.background = colors[i];
        boxes[i].style.display = 'block';
    }

});

playBtn.addEventListener('click', function() {

    document.querySelector('h1').style.background = '#f88989';
    statusText.textContent = "Let's play!!";
    colors = generateRandomColor(boxCount);
    pickedColor = colors[Math.floor(Math.random() * boxCount)];
    s.textContent = pickedColor;
    for(var i = 0; i < boxes.length; i++){

        boxes[i].style.background = colors[i];
    }


});

for (var i = 0; i < colors.length; i++){

    boxes[i].style.background = colors[i];
    boxes[i].addEventListener('click', function(){

        var selectedColor = this.style.background;
        if(selectedColor === pickedColor){

            win();

        }else{

            loose(this);
        }

    });

}

function win(){

    for(var i = 0; i < colors.length; i++){

        boxes[i].style.background = pickedColor;
    }

    document.querySelector('h1').style.background = pickedColor;
    statusText.textContent = 'Corect!!';
}

function loose(e){

    e.style.background = 'aquamarine';
    statusText.textContent = 'Try again!';


}

function generateRandomColor(num){

    var arr = [];
    for (var i = 0; i < num; i++){

        arr.push(randomColor());
    }

    return arr;

}

function randomColor(){

    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
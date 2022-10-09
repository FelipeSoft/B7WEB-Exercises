//initial data
var currentColor = 'black';
var screen = document.querySelector('#tela');
var context = screen.getContext('2d')
var canDraw = false;
var mouseX = 0;
var mouseY = 0;

//events
document.querySelectorAll('.color').forEach(element => {
    element.addEventListener('click', changeColor);
});
document.querySelector('.clear').addEventListener('click', clearScreen)

screen.addEventListener('mousedown', mouseDownEvent);
screen.addEventListener('mousemove', mouseMoveEvent);
screen.addEventListener('mouseup', mouseUpEvent);

//functions
function changeColor(e){
    var color = e.target.getAttribute('data-color');
    currentColor = color;

    document.querySelector('.color.active').classList.remove('active');
    e.target.classList.add('active');
}

function mouseDownEvent(e){
    canDraw = true;
    mouseX = e.pageX - screen.offsetLeft;
    mouseY = e.pageY - screen.offsetTop;
}

function mouseMoveEvent(e){
    if(canDraw){
        draw(e.pageX, e.pageY);
    }
}

function mouseUpEvent(){
    canDraw = false;
}

function draw(x, y){
    let pointX = x - screen.offsetLeft;
    let pointY = y - screen.offsetTop;

    context.beginPath();
    context.lineWidth = 5;
    context.lineJoin = 'round';
    context.moveTo(mouseX, mouseY);
    context.lineTo(pointX, pointY);
    context.closePath();
    context.strokeStyle = currentColor;
    context.stroke();

    mouseX = pointX;
    mouseY = pointY;
}

function clearScreen(){
    context.transform(1,0,0,1,0,0);
    context.clearRect(0,0,context.canvas.width,context.canvas.height);
}
var mouseEvent = "empty";
var lastPositionX ,lastPositionY;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "red";
widthLine = 1;
canvas.addEventListener("mousedown",myMouseDown);
function myMouseDown(e)
{
    color= document.getElementById("color").value;
    widthLine = document.getElementById("widthLine").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseDown";
} 
canvas.addEventListener("mouseleave",myMouseLeave);
function myMouseLeave(e)
{
    mouseEvent = "mouseLeave";
}
canvas.addEventListener("mouseup",myMouseUp);
function myMouseUp(e)
{
    mouseEvent = "mouseUP";
}
canvas.addEventListener("mousemove",myMouseMove);
function myMouseMove(e)
{
    PositionMouseX = e.clientX - canvas.offsetLeft;
    PositionMouseY = e.clientY - canvas.offsetTop;

    if (mouseEvent =="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthLine;
        ctx.arc(PositionMouseX, PositionMouseY, radius ,0 , 2 * Math.PI);
        ctx.stroke();
    }

    lastPositionX = PositionMouseX;
    lastPositionY = PositionMouseY;
}
function limpar(){
    ctx.clearRect( 0, 0, canvas.width, canvas.height)
}
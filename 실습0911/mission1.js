var vcanvas, ctx;

function mortier(x, y) { // 절구 만들기
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x+100, y+100);
    ctx.lineTo(x, y+100);
    ctx.lineTo(x+100, y);
    ctx.closePath();
    ctx.fillStyle = c;   
    ctx.fill();
}

function circle(x, y) { // 원 만들기
    ctx.beginPath();
    ctx.arc(x, y, 50, 0, 2*Math.PI);   //(x, y, 반지름, 시작각도, 끝각도)
    ctx.fillStyle = "blue";         // 색상 채우기
    ctx.strokeStyle = "yellow";     // stroke (테두리) 색상변경
    ctx.lineWidth = 5;              // 선굵기
    ctx.stroke();
    ctx.fill();
}

function init() {
    vcanvas = document.getElementById("myCanvas");
    ctx = vcanvas.getContext("2d");

    mortier(50, 50, "black");   // 1번 절구 좌표
    mortier(250, 250, "gray");  // 2번 절구 좌표

    circle(300, 100);           // 1번 원 좌표

 // 사각형 그리기
    ctx.lineWidth = 5;          
    ctx.strokeStyle = "green";
    ctx.strokeRect(50, 250, 100, 100);
}
var vcanvas, ctx;

function init() {
    vcanvas = document.getElementById("myCanvas");
    ctx = vcanvas.getContext("2d");

    ctx.moveTo(100, 100);       // 시작
    ctx.lineTo(200, 200);       // 200,200 으로 이동

    ctx.strokeStyle = "white";  // stroke 색상변경
    ctx.stroke();               // 그리기      

}
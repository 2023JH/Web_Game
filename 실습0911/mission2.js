var vcanvas, ctx;


function init() {
    vcanvas = document.getElementById("myCanvas");
    ctx = vcanvas.getContext("2d");

    // 얼굴 그리기
    ctx.beginPath();
    ctx.arc(100, 100, 80, 0, 2 * Math.PI);
    ctx.lineWidth = 5;
    ctx.strokeStyle = "black";
    ctx.stroke();

    // 눈 그리기 (왼쪽)
    ctx.beginPath();
    ctx.arc(70, 70, 10, 0, Math.PI * 2);
    ctx.stroke();

    // 눈 그리기 (오른쪽)
    ctx.beginPath();
    ctx.arc(130, 70, 10, 0, Math.PI * 2);
    ctx.stroke();

    // 입 그리기
    ctx.beginPath();
    ctx.arc(100, 100, 50, 0, Math.PI);
    ctx.stroke();
}

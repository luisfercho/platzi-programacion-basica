var c = document.getElementById("dibujito");

var ctx = c.getContext("2d");

function drawLine(color,x1,y1,x2,y2){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
    ctx.closePath();
}
drawLine("black",1,1,1,299);
drawLine("black",1,299,299,299);

for (let i=0;i<30;i++){
    let aux_i = i * 10;
    let aux_i1 = (i+1)*10;
    drawLine((i%2==0?"blue":"red"),0,aux_i,aux_i1,300);
    drawLine((i%2==0?"blue":"red"),aux_i1,0,300,aux_i);

    drawLine((i%2==0?"blue":"red"),0,aux_i,300-aux_i,0);
    drawLine((i%2==0?"blue":"red"),300-aux_i,300,300,aux_i);
}

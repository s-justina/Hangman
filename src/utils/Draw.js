const resetImage = ()=>{
    const myStickman = document.getElementById("stickman");
    const context = myStickman.getContext('2d');
    context.beginPath();
    context.clearRect(0, 0, 400, 400)
};

const animate = (totalLive)=> {
    let drawMe = totalLive-1;
    drawArray[drawMe]();
};

const canvas = ()=>{
    const myStickman = document.getElementById("stickman");
    const context = myStickman.getContext('2d');
    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 2;
};
const head = ()=>{
    const myStickman = document.getElementById("stickman");
    const context = myStickman.getContext('2d');
    context.beginPath();
    context.arc(60, 25, 10, 0, Math.PI*2, true);
    context.stroke();
};

const draw = ($pathFromx, $pathFromy, $pathTox, $pathToy)=> {
    const myStickman = document.getElementById("stickman");
    const context = myStickman.getContext('2d');
    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke();
};

const frame1 = ()=> {
    draw (0, 150, 150, 150);
};

const frame2 = ()=> {
    draw (10, 0, 10, 600);
};

const frame3 = ()=> {
    draw (0, 5, 70, 5);
};

const frame4 = ()=> {
    draw (60, 5, 60, 15);
};

const torso = ()=> {
    draw (60, 36, 60, 70);
};

const rightArm = ()=> {
    draw (60, 46, 100, 50);
};

const leftArm = ()=> {
    draw (60, 46, 20, 50);
};

const rightLeg = ()=> {
    draw (60, 70, 100, 100);
};

const leftLeg = ()=> {
    draw (60, 70, 20, 100);
};

const drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1];



export default {
    canvas, head, draw, frame1, frame2, frame3, frame4, torso, leftArm, rightArm, leftLeg, rightLeg, drawArray, animate, resetImage
}
song = "";
song2 = "";

var leftWristX = 0;
var rightWristX = 0;

var leftWristY = 0;
var rightWristY = 0;
function setup(){
    canvas = createCanvas(300, 300);
    canvas.position(600, 250);
    img = createCapture(VIDEO);
    img.hide();

    
    classifier = ml5.poseNet(video, MdoelLoaded);
    classifier.on('pose', gotPoses);
}

function MdoelLoaded(){
    console.log("OoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOo");
}

function draw(){
    image(img, 0, 0, 300, 300);
}

function preload(){
    song = loadSound("music.mp3");
    song2 = loadSound("music.mp3");
}



function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
    }
}
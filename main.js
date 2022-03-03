img="";
status="";
function preload(){
    img=loadImage("school.jpg");
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',ModelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting Objects:";
}
function draw(){
    image(img,0,0,640,420);
    fill("red");
    text("SCHOOL",45,75);
    noFill();
    stroke("red");
    rect(30,40,450,370);
}
function ModelLoaded(){
    console.log("Model Loaded");
    status=true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error,result){
    if(error){
        console.error(error);
    }
        else{
            console.log(result);
        }
}
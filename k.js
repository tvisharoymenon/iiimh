img="";
status="";
objects=[];
function preload(){
img=loadImage('K.jpg')
}
function setup(){
    canvas=createCanvas(600,450);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML = "status : Detecting objects";
}
function modelloaded(){
    console.log("model Loaded!");
    status = true;
    objectDetector.detect(img, gotresult);
}
function gotresult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects=results;
}
function draw(){
    image(img,0,0,600,500);
    if(status !=""){
        for (i=0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "status: Object Detected";
            fill("#FF0000");
            percent = floor(objects[i].confidence*100);
            text(objects[i].label+" "+percent+"%",objects[i].x + 15,objects[i].y + 15 );
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);}}}

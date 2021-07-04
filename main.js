pridiction_1="";
pridiction_2="";

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:9
});
camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/td0aLkI4j/model.json',modelLoaded);

function modelLoaded(){
    console.log("model Loaded");
}

function speak(){
    var synth=window.speechSynthesis;
    speak_data_1="The first pridiction why i stil not know the spelling of pridiction is "+pridiction_1;
    speak_data_2="The second pridiction why i stil not know the spelling of prediction ohhh i wrote it correct is "+pridiction_2;
    var utterThis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterThis);
}

function check(){
    img=document.getElementById('capture_image');
    classifier.classify(img,gotResult);
}
function gotResult(error,results){
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML=results[0].label;
        document.getElementById("result_emotion_name2").innerHTML=results[1].label;
        pridiction_1=results[0].label;
        pridiction_2=results[1].label;
        speak();

        if(results[0].label=="amazing"){
            document.getElementById("update_emoji").innerHTML="&#128076;";
        }
        if(results[0].label=="best"){
            document.getElementById("update_emoji").innerHTML="&#128077;";
        }
        if(results[0].label=="victory"){
            document.getElementById("update_emoji").innerHTML="&#9996;";
        }
        if(results[0].label=="amazing"){
            document.getElementById("update_emoji").innerHTML="&#128076;";
        }
        if(results[0].label=="best"){
            document.getElementById("update_emoji").innerHTML="&#128077;";
        }
        if(results[0].label=="victory"){
            document.getElementById("update_emoji").innerHTML="&#9996;";
        }
    }
}
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/7OUJmmMq3/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults); 
}

dog= 0;
cat=0;
cow=0;
lion=0;

function gotResults(error, results){
    if(error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r= Math.floor(Math.random()*255)+1;
        random_number_g= Math.floor(Math.random()*255)+1;
        random_number_b= Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML='Detected Voice is of - '+results[0].label;
        document.getElementById("result_confidence").innerHTML='Detected Dog - '+dog+'  Detected Cat - '  +cat+'  Detected Cow - '+cow+'  Detected Lion - '+lion;
        document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img=document.getElementById('defult');
       

        if(results[0].label=="dog"){
            img.src='dog.gif';
            dog=dog+1;
        } else if(results[0].label=="cat"){
            img.src='mute.gif';
            cat=cat+1;
        } else if(results[0].label=="cow"){
            img.src='cow-moo.gif';
            cow=cow+1;
        } else if(results[0].label=="lion"){
            img.src='lion-roar.gif';
            lion=lion+1;
        } else{
            img.src='https://media1.giphy.com/media/eNM4NlGpmCxzcXesjr/giphy.gif';
        }
    }
}
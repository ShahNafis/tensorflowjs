//create image classifer
let mobilenet;
let classifier;
let videoToPredict;
let label = '';
let prob = '';

let schoolDuckButton;
let policeDuckButton;
let trainButton;


//Callback func for when the model is ready
function modelReady() {
    console.log('Model ready');

    //predict what the image is
    //mobilenet.predict(videoToPredict,gotResults);

    //video
    //mobilenet.predict(gotResults);
}

//call back for when video is ready
function videoReady() {
    console.log('video is ready')
}

//call back while training
function whileTraining(loss) {
    if(loss == null) {
        console.log('Training Complete')
        classifier.classify(gotResults)
    } else {
        console.log(loss)
    }
}

//Show the results of prediction
function gotResults(error,result) {

    //make sure theres no errors
    if(error) {
        console.error(error);
    } else {
        console.log(result);
        label = result//result[0].className
        //prob = result[0].probability

        //Show the best predictions
        fill(0);
        textSize(64);
        text(label,10,height-100);
        // createP(label)
        // createP(prob)

        //video, continous
        mobilenet.classify(gotResults);
    }
}

//once an image is ready, show it
function imageReady() {
    image(videoToPredict,0,0,width,height);
}

function setup() {
    createCanvas(640,480);
    background(0);

    //Using webcam
    videoToPredict = createCapture(VIDEO,imageReady);

    videoToPredict.hide()

    //video
    mobilenet = ml5.featureExtractor('MobileNet',modelReady);

    classifier = mobilenet.classification(videoToPredict,videoReady)

    //add buttons
    schoolDuckButton = createButton('School Duck')
    schoolDuckButton.mousePressed(function () {
        classifier.addImage('School Duck')
    })
    policeDuckButton = createButton('Police Duck')
    policeDuckButton.mousePressed(function () {
        classifier.addImage('Police Duck')
    })
    trainButton = createButton('Train')
    trainButton.mousePressed(function() {
        classifier.train(whileTraining)
    })
}




function draw(){
    //image(videoToPredict,0,0)
    imageReady()
    text(label,10,height-100);

}

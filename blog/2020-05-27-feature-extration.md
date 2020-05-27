---
title: Feature Extracting
author: Shah Nafis Rafique
tags: [ml5,loss]
---

Adding my own classes to ml5 mobile net

<!--truncate-->

Todays video I followed [here](https://www.youtube.com/watch?v=eeO-rWYFuG0&list=PLRqwX-V7Uu6YPSwT06y_AEYTqIwbeam3y&index=6)

So the first thing that has to be done is make the image classifier into a
feature extractor, which is as simple as doing

```js
classifier = mobilenet.classification(videoToPredict,videoReady)
```

Where the first parameter `videoToPredict` is the video and `videoReady` is just
a callback function.

Now I have to add buttons to tell the classifier what class I am showing on the
video and a train button to tell it to train on the images captured

```js
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
```

The `whileTraining` is given the loss and as its training it gets lower and
lower. In this image it started at 1.37065 and went down to 0.0

![try1](/img/tutorial/feature_extractor/loss1.PNG)

So whenever the loss value gets to `null` I run the classifer to show the
results and predict whatever is shown on the screen. Here are the results.

The two classes 
![class1](/img/tutorial/feature_extractor/schoolDuck.PNG)
![class2](/img/tutorial/feature_extractor/policeDuck.PNG)

A cat
![cat](/img/tutorial/feature_extractor/cat.PNG)

A brown duck? A monkey duck?
![otherDuck](/img/tutorial/feature_extractor/otherDuck.PNG)

Some where things where that even if the image was still, the classifier would
change its mind and switch between school and police duck. Also now it can only
classify these two classes and cant use the default 1000 that mobile net has.

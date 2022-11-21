let outputImage = document.getElementById('image');
let outputTitle = document.getElementById('title');
let everythingContainer = document.getElementsByClassName('everything')[0];

var numRed = Math.random() * 255;
var numGreen = Math.random() * 255;
var numBlue = Math.random() * 255;
var randomColor = "rgb(" + numRed + "," + numGreen + "," + numBlue + ")";

let artCollection =[
  {
    "title" : "Lightbulb Paradise",
    "image" : "lightbulb_world.png",
    "color" : "randomColor",
  },
  {
    "title" : "Eye",
    "image" : "eye.png",
    "color" : "randomColor",
  },
  {
    "title" : "Loneliness",
    "image" : "loneliness.png",
    "color" : "randomColor",
  },
  {
    "title" : "Sad",
    "image" : "sad.png",
    "color" : "randomColor",
  },
  {
    "title" : "Heart",
    "image" : "heart.png",
    "color" : "randomColor",
  },
  {
    "title" : "Cutie",
    "image" : "cutie.png",
    "color" : "randomColor",
  },
  {
    "title" : "Flower",
    "image" : "flower.png",
    "color" : "randomColor",
  },
  {
    "title" : "Groot",
    "image" : "groot.png",
    "color" : "randomColor",
  },
  {
    "title" : "Doodles",
    "image" : "doodles.png",
    "color" : "randomColor",
  },
];
  for (var i = 0; i < artCollection.length; i++) {
    createProjectpreview(artCollection[i]);
  }

  AOS.init();

  function createProjectpreview(incomingJSON) {

    let newContentElementText = document.createElement("DIV");
    newContentElementText.setAttribute('data-aos', 'fade-right');
    newContentElementText.style.backgroundColor = incomingJSON['color'];
    newContentElementText.innerText = incomingJSON['title'];
    newContentElementText.classList.add('text');

    let newContentElement = document.createElement("DIV");
    newContentElement.style.backgroundColor = incomingJSON['color'];
    newContentElement.classList.add('contentItem');

    let newContentElementImg = document.createElement("DIV");
    newContentElementImg.setAttribute('data-aos', 'fade-left');
    let newImage = document.createElement("IMG");
    newImage.src = incomingJSON['image'];

    newContentElement.appendChild(newContentElementImg);
    newContentElementImg.appendChild(newImage);
    newContentElement.appendChild(newContentElementText);
    everythingContainer.appendChild(newContentElement);
}

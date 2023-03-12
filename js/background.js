const images = [
    "batman.jpeg",
    "wallpaper1.jpeg",
    "wallpaper2.jpeg"
];

function getRandomIndex(arrayLength) {
    return Math.floor(Math.random() * arrayLength);
}

const chosenImage = images[getRandomIndex(images.length)];

const backgroundImage = document.createElement("img");
backgroundImage.src = `img/${chosenImage}`;
document.body.appendChild(backgroundImage);
backgroundImage.id = 'background-image';
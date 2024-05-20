const sprite = document.getElementById('sprite');
const frameWidth = 16;
const totalFrames = 3;
let currentFrame = 0;

function updateFrame() {
    const frameX = currentFrame * frameWidth;
    sprite.style.backgroundPosition = `-${frameX}px 0`;

    currentFrame = (currentFrame + 1) % totalFrames;
}

setInterval(updateFrame, 200); // Change frame every 100ms

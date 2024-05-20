const player = document.querySelector('.player');
const gameArea = document.querySelector('#gameArea');
const step = 16; // Number of pixels the player moves with each key press

// Set initial positions using inline style
player.style.top = '225px';
player.style.left = '225px';

// Get the game area boundaries
const gameAreaRect = gameArea.getBoundingClientRect();

document.addEventListener('keydown', (e) => {
    // Ensure styles are properly parsed as integers
    let top = parseInt(player.style.top.replace('px', ''), 10);
    let left = parseInt(player.style.left.replace('px', ''), 10);

    switch(e.key) {
        case 'ArrowUp':
            if (top - step >= 0) { // Prevent moving out of the top boundary
                player.style.top = `${top - step}px`;
            }
            break;
        case 'ArrowDown':
            if (top + step <= gameAreaRect.height - player.clientHeight) { // Prevent moving out of the bottom boundary
                player.style.top = `${top + step}px`;
            }
            break;
        case 'ArrowLeft':
            if (left - step >= 0) { // Prevent moving out of the left boundary
                player.style.left = `${left - step}px`;
            }
            break;
        case 'ArrowRight':
            if (left + step <= gameAreaRect.width - player.clientWidth) { // Prevent moving out of the right boundary
                player.style.left = `${left + step}px`;
            }
            break;
    }
});

const sprite = document.querySelector('.player');
const frameWidth = 16;
const totalFrames = 3;
let currentFrame = 0;

function updateFrame() {
    const frameX = currentFrame * frameWidth;
    sprite.style.backgroundPosition = `-${frameX}px 0`;

    currentFrame = (currentFrame + 1) % totalFrames;
}

setInterval(updateFrame, 100); // Change frame every 100ms

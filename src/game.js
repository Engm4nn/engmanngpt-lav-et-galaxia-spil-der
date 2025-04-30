// Game variables
let canvas;
let ctx;
let gameWidth;
let gameHeight;
let lastTime = 0;
let animationFrameId;

// Initialize the game
function init() {
    canvas = document.getElementById('gameCanvas');
    ctx = canvas.getContext('2d');
    
    // Set canvas size and handle resize
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Start the game loop
    gameLoop(0);
}

// Resize canvas to maintain aspect ratio and be responsive
function resizeCanvas() {
    // Target aspect ratio (16:9)
    const targetAspectRatio = 16 / 9;
    
    // Get the dimensions of the container
    const container = document.getElementById('game-container');
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    
    // Calculate the best dimensions to fit the container while maintaining aspect ratio
    let width = containerWidth;
    let height = containerWidth / targetAspectRatio;
    
    if (height > containerHeight) {
        height = containerHeight;
        width = containerHeight * targetAspectRatio;
    }
    
    // Set canvas dimensions
    canvas.width = gameWidth = Math.floor(width);
    canvas.height = gameHeight = Math.floor(height);
    
    // Apply any necessary scaling or adjustments after resize
    // This could include adjusting game elements based on the new size
}

// Main game loop
function gameLoop(timestamp) {
    // Calculate delta time (time since last frame)
    const deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    
    // Clear the canvas
    ctx.clearRect(0, 0, gameWidth, gameHeight);
    
    // Update game state
    update(deltaTime);
    
    // Render game elements
    render();
    
    // Request next frame
    animationFrameId = requestAnimationFrame(gameLoop);
}

// Update game state
function update(deltaTime) {
    // Update game objects and logic here
    // Example: player.update(deltaTime);
}

// Render game elements
function render() {
    // Draw game objects here
    // Example: player.draw(ctx);
    
    // Draw a sample rectangle to show the canvas is working
    ctx.fillStyle = '#3498db';
    ctx.fillRect(gameWidth / 2 - 50, gameHeight / 2 - 50, 100, 100);
    
    // Draw text
    ctx.fillStyle = '#ffffff';
    ctx.font = '20px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Canvas Spil', gameWidth / 2, gameHeight / 2 + 100);
}

// Handle browser compatibility
function checkBrowserCompatibility() {
    const canvas = document.createElement('canvas');
    return !!(canvas.getContext && canvas.getContext('2d'));
}

// Start the game when the page loads
window.addEventListener('load', () => {
    if (checkBrowserCompatibility()) {
        init();
    } else {
        alert('Din browser understøtter ikke HTML5 Canvas. Opdater venligst din browser.');
    }
});

// Clean up when the page is unloaded
window.addEventListener('unload', () => {
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }
    window.removeEventListener('resize', resizeCanvas);
});
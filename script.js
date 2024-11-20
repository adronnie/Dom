document.getElementById('change-color').addEventListener('click', function() {
    document.body.style.backgroundColor = getRandomColor();
});

document.getElementById('add-element').addEventListener('click', function() {
    const newElement = document.createElement('p');
    newElement.textContent = "This is a new dynamically added paragraph!";
    document.getElementById('dynamic-content').appendChild(newElement);
});

document.getElementById('toggle-visibility').addEventListener('click', function() {
    const element = document.getElementById('dynamic-content');
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
});

document.getElementById('animate-element').addEventListener('click', function() {
    const box = document.getElementById('animated-box');
    box.style.display = 'block';
    box.style.transition = 'all 1s ease';
    box.style.transform = 'translateY(100px)';
    setTimeout(() => {
        box.style.transform = 'translateY(0)';
    }, 1000);
});

document.getElementById('modify-text').addEventListener('click', function() {
    const textElement = document.getElementById('text-display');
    textElement.textContent = "The text has been changed!";
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

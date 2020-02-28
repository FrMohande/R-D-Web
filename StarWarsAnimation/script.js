const star = 100;

for (let i = 0; i < star; i++) {
    var div = document.createElement('div');
    div.className = 'star';
    var xy = getRandomPosition();
    div.style.top = xy[0] + 'px';
    div.style.left = xy[1] + 'px';
    document.body.append(div);
}

function getRandomPosition() {
    var y = window.innerWidth;
    var x = window.innerHeight;
    var randomX = Math.floor(Math.random() * x);
    var randomY = Math.floor(Math.random() * y);
    return [randomX, randomY];
}

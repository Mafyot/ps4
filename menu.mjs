// Update to remove background box and overlay text buttons on screen
const menu = document.createElement('div');
menu.style.position = 'absolute';
menu.style.top = '50%';
menu.style.left = '50%';
menu.style.transform = 'translate(-50%, -50%)';
menu.style.display = 'flex';
menu.style.flexDirection = 'column';
menu.style.gap = '10px';

const button1 = document.createElement('button');
button1.innerText = 'Button 1';
button1.style.background = 'none';
button1.style.border = 'none';
button1.style.color = '#fff';

const button2 = document.createElement('button');
button2.innerText = 'Button 2';
button2.style.background = 'none';
button2.style.border = 'none';
button2.style.color = '#fff';

menu.appendChild(button1);
menu.appendChild(button2);
document.body.appendChild(menu);
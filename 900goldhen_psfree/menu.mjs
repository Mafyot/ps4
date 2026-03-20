// menu.mjs
// This file provides an interactive menu with buttons for disable updates, enable updates, and fan control, to be shown after GoldHEN loads.

function createMenu() {
    const menu = document.createElement('div');
    menu.setAttribute('id', 'interactive-menu');
    menu.style.position = 'absolute';
    menu.style.top = '10%';
    menu.style.left = '50%';
    menu.style.transform = 'translateX(-50%)';
    menu.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    menu.style.padding = '20px';
    menu.style.borderRadius = '10px';
    menu.style.zIndex = '1000';

    const disableButton = document.createElement('button');
    disableButton.innerHTML = 'Disable Updates';
    disableButton.onclick = () => { 
        console.log('Updates Disabled');
        // Add code to disable updates
    };

    const enableButton = document.createElement('button');
    enableButton.innerHTML = 'Enable Updates';
    enableButton.onclick = () => { 
        console.log('Updates Enabled');
        // Add code to enable updates
    };

    const fanControlButton = document.createElement('button');
    fanControlButton.innerHTML = 'Fan Control';
    fanControlButton.onclick = () => { 
        console.log('Fan Control Activated');
        // Add code for fan control
    };

    menu.appendChild(disableButton);
    menu.appendChild(enableButton);
    menu.appendChild(fanControlButton);

    document.body.appendChild(menu);
}

// Invoke the menu function after GoldHEN loads
window.onload = createMenu;
let keyChange = {
    numpadKeys: [
        {
        keyId: 'clap',
        audioId: 'clap1',
        key: 97 
        },
        {
        keyId: 'hihat',
        audioId: 'hihat1',
        key: 98 
        },
        {
        keyId: 'kick',
        audioId: 'kick1',
        key: 99 
        },
        {
        keyId: 'openhat',
        audioId: 'openhat1',
        key: 100 
        },
        {
        keyId: 'boom',
        audioId: 'boom1',
        key: 101 
        },
        {
        keyId: 'ride',
        audioId: 'ride1',
        key: 102 
        },
        {
        keyId: 'snare',
        audioId: 'snare1',
        key: 103 
        },
        {
        keyId: 'tom',
        audioId: 'tom1',
        key: 104 
        },
        {
        keyId: 'tink',
        audioId: 'tink1',
        key: 105 
        }
    ],
    keyboardKeys: [
        {
        keyId: 'clap',
        audioId: 'clap1',
        key: 49 
        },
        {
        keyId: 'hihat',
        audioId: 'hihat1',
        key: 50 
        },
        {
        keyId: 'kick',
        audioId: 'kick1',
        key: 51
        },
        {
        keyId: 'openhat',
        audioId: 'openhat1',
        key: 52 
        },
        {
        keyId: 'boom',
        audioId: 'boom1',
        key: 53
        },
        {
        keyId: 'ride',
        audioId: 'ride1',
        key: 54 
        },
        {
        keyId: 'snare',
        audioId: 'snare1',
        key: 55 
        },
        {
        keyId: 'tom',
        audioId: 'tom1',
        key: 56 
        },
        {
        keyId: 'tink',
        audioId: 'tink1',
        key: 57 
        }
    ]
}
//////////////////////////////////////TOGGLE NUMPAD/KEYBOARD////////////////////////////////////
function toggleKey(e) {
    var toggle = document.querySelector('.switch-input[type="checkbox"]');

    toggle.addEventListener('change', () => {
        if (toggle.checked){
            document.getElementById('title').innerHTML = "KEYBOARD";
            keyChange.keyboardKeys.forEach(keyboard => {
                document.getElementById(`${keyboard.keyId}`).setAttribute('keyboard-key', `${keyboard.key}`)
                document.getElementById(`${keyboard.audioId}`).setAttribute('keyboard-key', `${keyboard.key}`)
            });
        } else {
            document.getElementById('title').innerHTML = "NUMPAD";
            keyChange.numpadKeys.forEach(numpad => {
                document.getElementById(`${numpad.keyId}`).setAttribute('keyboard-key', `${numpad.key}`)
                document.getElementById(`${numpad.audioId}`).setAttribute('keyboard-key', `${numpad.key}`)
            });
        }
    });
}
///////////////////////////////////END OF TOGGLE NUMPAD/KEYBOAD/////////////////////////////////

///////// \/\/\/\/\/\/\/ /////////LINKS KEYCODE WITH AUDIO BIT/////// \/\/\/\/\/\/\/ /////////////
function playSound(e) {
    const audio = document.querySelector(`audio[keyboard-key = "${e.keyCode}"]`);
    const key = document.querySelector(`.key[keyboard-key = "${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    key.classList.add('playing');
    audio.play();
};
/////////////////////////////////Removes animation after key is pressed///////////////////////////
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
////////////Plays key based on which side the toggle is on////////////////////////////////////////
window.addEventListener('click', toggleKey);
window.addEventListener('keydown', playSound);



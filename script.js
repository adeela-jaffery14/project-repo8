const sounds = ['applause', 'cheer', 'cave', 'cartoon', 'children']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = sound

    btn.addEventListener('click', () => {
        stopPlaying()
        document.getElementById(sound).play()  
    })

    document.getElementById('buttons').appendChild(btn)
});

function stopPlaying() { 
    sounds.forEach(sound => { 
        const audio = document.getElementById(sound)

        audio.pause()
        audio.currentTime = 0;
    })
}


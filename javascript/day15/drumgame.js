window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    // If there's no audio element for this key, exit early
    if (!audio) return;

    // Rewind audio and play it
    audio.currentTime = 0;
    audio.play();

    // Add visual feedback if the key element exists
    if (key) {
        key.classList.add('playing');
        setTimeout(function () {
            key.classList.remove('playing');
        }, 500);
    }
});

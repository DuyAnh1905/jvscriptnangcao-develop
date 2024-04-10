// Array of button objects with associated audio files
var buttons = [
    { key: 'w', audio: 'sounds/crash.mp3' },
    { key: 'a', audio: 'sounds/kick-bass.mp3' },
    { key: 's', audio: 'sounds/snare.mp3' },
    { key: 'd', audio: 'sounds/tom-1.mp3' },
    { key: 'j', audio: 'sounds/tom-2.mp3' },
    { key: 'k', audio: 'sounds/tom-3.mp3' },
    { key: 'l', audio: 'sounds/tom-4.mp3' }
  ];
  
  // Iterate through the buttons array
  buttons.forEach(function(button) {
    // Create audio element
    var audio = document.createElement('audio');
    audio.src = button.audio;
  
    // Attach audio element to button
    var buttonElement = document.querySelector('.' + button.key);
    buttonElement.appendChild(audio);
  
    // Add event listener to play audio on button click
    buttonElement.addEventListener('click', function() {
      audio.currentTime = 0;
      audio.play();
    });
  });
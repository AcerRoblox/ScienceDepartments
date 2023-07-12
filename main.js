const galleryImages = document.querySelectorAll('.photo');

galleryImages.forEach(photo => {
  const image = photo.querySelector('img');
  const caption = photo.querySelector('.caption');

  photo.addEventListener('mouseover', function() {
    image.style.transform = 'scale(1.1)';
    image.style.zIndex = '1';
    caption.style.transform = 'scale(1.1)';
    image.style.transition = 'transform 0.3s ease';
    caption.style.transition = 'transform 0.3s ease';
    photo.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    
    playSoundEffect();
  });

  photo.addEventListener('mouseout', function() {
    image.style.transform = 'scale(1)';
    image.style.zIndex = '0';
    caption.style.transform = 'scale(1)';
    image.style.transition = 'transform 0.3s ease';
    caption.style.transition = 'transform 0.3s ease';
    photo.style.backgroundColor = 'transparent';
  });

  photo.addEventListener('click', function() {
    const rotation = generateRandomNumber(-45, 45);
    image.style.transform = `rotate(${rotation}deg)`;
    image.style.transition = 'transform 0.3s ease';
  });

  photo.addEventListener('dblclick', function() {
    const newColor = getRandomColor();
    image.style.filter = `hue-rotate(${newColor})`;
    image.style.transition = 'filter 0.3s ease';
  });
});

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function toggleFullScreen(element) {
  if (
    !document.fullscreenElement &&
    !document.mozFullScreenElement &&
    !document.webkitFullscreenElement &&
    !document.msFullscreenElement
  ) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function playSoundEffect() {
  const audio = new Audio('path/to/sound-effect.mp3');
  audio.play();
}

//This is some code for gallery.html
//This is some code for gallery.html
//This is some code for gallery.html
//This is some code for gallery.html
//This is some code for gallery.html
//This is some code for gallery.html
//This is some code for gallery.html
//This is some code for gallery.html
//This is some code for gallery.html
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const openIcon = document.querySelector('.open-icon');
    const closeIcon = document.querySelector('.close-icon');
    navMenu.classList.toggle('active');
    if (navMenu.classList.contains('active')) {
        openIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    } else {
        openIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
}

let lastScrollPosition = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    if (currentScrollPosition > lastScrollPosition) {
        header.classList.add('header-hidden');
    } else {
        header.classList.remove('header-hidden');
    }


    if (currentScrollPosition === 0) {
        header.classList.remove('header-hidden');
    }

    lastScrollPosition = currentScrollPosition;
});

document.addEventListener('DOMContentLoaded', function () {
    const goToTopBtn = document.getElementById('goToTopBtn');

    window.addEventListener('scroll', function () {
        const heightToShow = 20;
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;

        if (scrollPosition > heightToShow) {
            goToTopBtn.style.display = 'flex';
        } else {
            goToTopBtn.style.display = 'none';
        }
    });

    // Scroll to top when button is clicked
    goToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
  const accordionButtons = document.querySelectorAll('.accordion-button');
  
  accordionButtons.forEach(button => {
    button.addEventListener('click', function() {
      const accordionItem = this.parentElement;
      const content = this.nextElementSibling;
      const icon = this.querySelector('.accordion-icon');
      
      const isActive = accordionItem.classList.contains('active');
      
      document.querySelectorAll('.accordion-item').forEach(item => {
        const itemContent = item.querySelector('.accordion-content');
        const itemIcon = item.querySelector('.accordion-icon');
        
        if (item.classList.contains('active')) {
          itemContent.style.height = itemContent.scrollHeight + 'px';
          
          void itemContent.offsetHeight;
          
          itemContent.style.height = '0px';
          itemIcon.style.transform = 'rotate(0deg)';
          
          setTimeout(() => {
            item.classList.remove('active');
            itemContent.style.display = 'none';
            itemContent.style.height = '';
          }, 300);
        }
      });
      
      if (!isActive) {
        content.style.display = 'block';
        content.style.height = '0px';
        
        // Force a reflow
        void content.offsetHeight;
        
        content.style.height = content.scrollHeight + 'px';
        icon.style.transform = 'rotate(45deg)';
        
        accordionItem.classList.add('active');
        
        setTimeout(() => {
          content.style.height = '';
        }, 300);
      }
    });
  });
});

// intro video hero

const video = document.getElementById('introVideo');
  const muteButton = document.getElementById('muteButton');
  const introSection = document.querySelector('.intro-video-section');

  muteButton.addEventListener('click', () => {
    if (video.muted) {
      video.muted = false;
      muteButton.textContent = 'Mute';
    } else {
      video.muted = true;
      muteButton.textContent = 'Unmute';
    }
  });

  const colorThief = new ColorThief();
  const captureFrame = () => {
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth / 10;
    canvas.height = video.videoHeight / 10;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imgData = canvas.toDataURL('image/png');
    const img = new Image();
    img.src = imgData;

    img.onload = () => {
      const dominantColor = colorThief.getColor(img);
      introSection.style.backgroundColor = `rgb(${dominantColor.join(',')})`;
    };
  };

  video.addEventListener('play', () => {
    setInterval(captureFrame, 1000);
  });
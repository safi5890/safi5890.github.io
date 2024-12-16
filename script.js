document.querySelector('.box').addEventListener('animationend', () => {
    const socialIcons = document.querySelector('.social-icons');
    socialIcons.style.display = 'flex'; // Make icons visible
    socialIcons.style.opacity = '1';   // Fade in the icons
});

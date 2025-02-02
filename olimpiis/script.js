document.querySelectorAll('section').forEach(function(section) {
    section.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#f0f0f0'; // change background on hover
    });
    section.addEventListener('mouseleave', function() {
        this.style.backgroundColor = ''; // reset background
    });
});

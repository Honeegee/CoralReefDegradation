document.addEventListener('DOMContentLoaded', function() {
    const causes = [
        "Climate change and ocean acidification",
        "Overfishing and destructive fishing practices",
        "Pollution and sedimentation",
        "Coastal development",
        "Invasive species",
        "Disease outbreaks"
    ];

    // Populate the causes list
    const causesList = document.getElementById('causes-list');
    causes.forEach(cause => {
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.textContent = cause;
        causesList.appendChild(li);
    });

    // Handle all "Show More" buttons to open new pages
    document.querySelectorAll('.show-more').forEach(button => {
        button.addEventListener('click', () => {
            const sectionId = button.getAttribute('data-target');
            
            // Open a new page for each "Show More" button
            if (sectionId === 'intro-more') {
                window.location.href = 'introduction.html';  // Redirect to a new page for Introduction
            } else if (sectionId === 'causes-more') {
                window.location.href = 'causes.html';  // Redirect to a new page for Causes
            } else if (sectionId === 'impact-info') {
                window.location.href = 'impact.html';  // Redirect to a new page for Impact
            } else if (sectionId === 'conservation-more') {
                window.location.href = 'conservation.html';  // Redirect to a new page for Conservation
            }
        });
    });

    // Smooth scrolling for menu navigation (existing behavior)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dark mode toggle (existing behavior)
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        body.classList.toggle('light-mode');
        
        // Update icon
        const icon = darkModeToggle.querySelector('i');
        if (body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });

 

    // Underwater animation
    function createUnderwater() {
        createBubble();
        createFish();
    }

    function createBubble() {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        
        const size = Math.random() * 40 + 10;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        
        bubble.style.left = `${Math.random() * 100}vw`;
        bubble.style.animationDuration = `${Math.random() * 5 + 3}s`;
        
        document.body.appendChild(bubble);
        
        setTimeout(() => {
            bubble.remove();
        }, 8000);
    }

    function createFish() {
        const fish = document.createElement('div');
        fish.classList.add('fish');
        
        const size = Math.random() * 30 + 20;
        fish.style.width = `${size}px`;
        fish.style.height = `${size / 2}px`;
        
        fish.style.top = `${Math.random() * 80 + 10}vh`;
        fish.style.animationDuration = `${Math.random() * 10 + 10}s`;
        
        // Create a simple fish shape using CSS
        fish.style.backgroundColor = 'transparent';
        fish.style.borderRadius = '50%';
        fish.style.boxShadow = `${size/4}px 0 0 ${size/8}px var(--accent-color)`;
        
        document.body.appendChild(fish);
        
        setTimeout(() => {
            fish.remove();
        }, 20000);
    }

    setInterval(createUnderwater, 1000);
});


    // Smooth scrolling for menu navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        const UnderwaterAnimation = {
            fishImages: [
                'fish1.png',
                'fish2.png',
                'fish3.png'
            ],
            
            init() {
                this.container = document.createElement('div');
                this.container.id = 'underwater-animation-container';
                this.container.style.cssText = `
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                    z-index: 1;
                `;
                document.body.appendChild(this.container);
                
                this.updateContainerSize();
                window.addEventListener('resize', () => this.updateContainerSize());
                window.addEventListener('scroll', () => this.updateElementPositions());
                
                this.startAnimations();
            },
    
            updateContainerSize() {
                const docHeight = Math.max(
                    document.body.scrollHeight, document.documentElement.scrollHeight,
                    document.body.offsetHeight, document.documentElement.offsetHeight,
                    document.body.clientHeight, document.documentElement.clientHeight
                );
                this.container.style.height = `${docHeight}px`;
            },
    
            updateElementPositions() {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const viewportHeight = window.innerHeight;
                
                this.container.querySelectorAll('.bubble, .fish').forEach(el => {
                    const rect = el.getBoundingClientRect();
                    if (rect.bottom < 0 || rect.top > viewportHeight) {
                        const newY = Math.random() * this.container.offsetHeight;
                        el.style.transform = `translateY(${newY}px)`;
                    }
                });
            },
    
            startAnimations() {
                for (let i = 0; i < 50; i++) {
                    this.createBubble();
                }
                for (let i = 0; i < 10; i++) {
                    this.createFish();
                }
    
                setInterval(() => this.createBubble(), 2000);
                setInterval(() => this.createFish(), 5000);
            },
    
            createBubble() {
                const bubble = document.createElement('div');
                const size = Math.random() * 20 + 5;
                const startX = Math.random() * this.container.offsetWidth;
                const startY = Math.random() * this.container.offsetHeight;
    
                bubble.className = 'bubble';
                bubble.style.cssText = `
                    left: ${startX}px;
                    top: ${startY}px;
                    width: ${size}px;
                    height: ${size}px;
                `;
    
                this.container.appendChild(bubble);
            },
    
            createFish() {
                const fish = document.createElement('div');
                const size = Math.random() * 60 + 40;
                const yPos = Math.random() * this.container.offsetHeight;
                const isLeftToRight = Math.random() > 0.5;
                const imageIndex = Math.floor(Math.random() * this.fishImages.length);
    
                fish.className = 'fish';
                fish.style.cssText = `
                    top: ${yPos}px;
                    width: ${size}px;
                    height: ${size / 2}px;
                    background-image: url('${this.fishImages[imageIndex]}');
                    --direction: ${isLeftToRight ? 1 : -1};
                    --start: ${isLeftToRight ? '-100px' : '100%'};
                    --end: ${isLeftToRight ? '100%' : '-100px'};
                `;
    
                this.container.appendChild(fish);
            }
        };
    
        UnderwaterAnimation.init();
    });


    document.getElementById('pledgeForm').addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to your server
        console.log('Form submitted');
        
        // Close the pledge modal
        var pledgeModal = bootstrap.Modal.getInstance(document.getElementById('pledgeModal'));
        pledgeModal.hide();
        
        // Show the thank you modal
        var thankYouModal = new bootstrap.Modal(document.getElementById('thankYouModal'));
        thankYouModal.show();
    });
   
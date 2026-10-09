// ==================== CONFIGURATION - EDIT THIS SECTION ====================
const config = {
    // Names
    herName: "Sweetheart",
    myName: "Your Love",
    
    // Dates
    birthday: "2026-10-16T00:00:00",
    relationshipStartDate: "01-01-2024",
    
    // Timeline events (editable)
    timeline: [
        {
            date: "January 1, 2024",
            title: "The Day We Met",
            description: "Our eyes met for the first time and I knew my life was about to change forever."
        },
        {
            date: "February 14, 2024",
            title: "Our First Date",
            description: "A magical evening under the stars, where we laughed and talked for hours."
        },
        {
            date: "March 15, 2024",
            title: "First Trip Together",
            description: "Our first adventure together, creating memories that would last a lifetime."
        },
        {
            date: "June 20, 2024",
            title: "I Said 'I Love You'",
            description: "The moment I finally found the courage to say those three special words."
        },
        {
            date: "September 10, 2024",
            title: "Moving In Together",
            description: "Starting our new chapter, building a home filled with love and laughter."
        }
    ],
    
    // Photo gallery (use placeholder URLs or local paths)
    photos: [
        { src: "https://picsum.photos/400/400?random=1", caption: "Our first selfie" },
        { src: "https://picsum.photos/400/400?random=2", caption: "Beach day memories" },
        { src: "https://picsum.photos/400/400?random=3", caption: "Dinner date" },
        { src: "https://picsum.photos/400/400?random=4", caption: "Adventure time" },
        { src: "https://picsum.photos/400/400?random=5", caption: "Sunset walks" },
        { src: "https://picsum.photos/400/400?random=6", caption: "Movie night" },
        { src: "https://picsum.photos/400/400?random=7", caption: "Cooking together" },
        { src: "https://picsum.photos/400/400?random=8", caption: "Road trip" },
        { src: "https://picsum.photos/400/400?random=9", caption: "Holiday magic" },
        { src: "https://picsum.photos/400/400?random=10", caption: "Dancing together" },
        { src: "https://picsum.photos/400/400?random=11", caption: "Coffee dates" },
        { src: "https://picsum.photos/400/400?random=12", caption: "Lazy Sundays" }
    ],
    
    // Flip card memories
    memories: [
        { photo: "https://picsum.photos/300/400?random=13", caption: "The day you made me laugh until I cried" },
        { photo: "https://picsum.photos/300/400?random=14", caption: "Our first dance together" },
        { photo: "https://picsum.photos/300/400?random=15", caption: "When you surprised me with breakfast in bed" },
        { photo: "https://picsum.photos/300/400?random=16", caption: "The moment I knew you were the one" }
    ],
    
    // Reasons I love you
    reasons: [
        "Your beautiful smile that lights up my world",
        "The way you laugh at my silly jokes",
        "Your kindness to everyone around you",
        "How you support me in everything I do",
        "The warmth of your hugs",
        "Your incredible cooking",
        "The way you make every day special",
        "Your strength and resilience",
        "How you always know how to cheer me up",
        "Your beautiful soul",
        "The little things you do for me",
        "Your amazing voice",
        "How you make me want to be a better person",
        "Your intelligence and wisdom",
        "The way you look at me",
        "Your contagious energy",
        "How you make ordinary moments magical",
        "Your patience and understanding",
        "The way you love me unconditionally",
        "Simply because you are you"
    ],
    
    // Love letter
    loveLetter: `My Dearest Love,

On this special day, I want you to know just how much you mean to me. You came into my life and turned my world upside down in the most beautiful way possible.

Every day with you is a gift. Your smile brightens my darkest days, your laugh is my favorite sound, and your love is the greatest treasure I've ever known.

I cherish every moment we've shared, from our first meeting to this very day. Through the ups and downs, the laughter and the tears, you've been my rock, my best friend, and my soulmate.

I promise to love you more with each passing day, to support your dreams, to hold your hand through every challenge, and to celebrate every victory with you.

You are my today and all of my tomorrows.

Happy Birthday, my love. May this year bring you all the happiness you deserve.

Forever yours,
Your Love ❤️`
};

// ==================== END OF CONFIGURATION ====================

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    initLoader();
    initEnvelope();
    initMusicPlayer();
    initCountdown();
    initTimeline();
    initGallery();
    initFlipCards();
    initReasons();
    initLoveLetter();
    initCake();
    initHeroCanvas();
    initFireworksCanvas();
    initCustomCursor();
    initNightMode();
    initNavbar();
    initMobileMenu();
    initBackToTop();
    initFloatingHearts();
    initAOS();
    
    // Replace placeholder content
    document.getElementById('footer-name').textContent = config.myName;
});

// ==================== AOS INITIALIZATION ====================
function initAOS() {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });
}

// ==================== LOADER ====================
function initLoader() {
    const loader = document.getElementById('loader');
    const envelopeContainer = document.getElementById('envelope-container');
    
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
            envelopeContainer.style.display = 'flex';
            envelopeContainer.classList.add('animate__animated', 'animate__fadeIn');
        }, 500);
    }, 2000);
}

// ==================== ENVELOPE ====================
function initEnvelope() {
    const envelope = document.getElementById('envelope');
    const envelopeContainer = document.getElementById('envelope-container');
    const mainContent = document.getElementById('main-content');
    const musicPlayer = document.getElementById('music-player');
    const nightToggle = document.getElementById('night-toggle');
    const bgMusic = document.getElementById('bg-music');
    
    envelope.addEventListener('click', () => {
        envelope.classList.add('open');
        
        setTimeout(() => {
            envelopeContainer.style.opacity = '0';
            setTimeout(() => {
                envelopeContainer.style.display = 'none';
                mainContent.classList.remove('hidden');
                mainContent.classList.add('animate__animated', 'animate__fadeIn');
                musicPlayer.classList.remove('hidden');
                nightToggle.classList.remove('hidden');
                
                // Try to play music
                bgMusic.volume = 0.5;
                bgMusic.play().catch(() => {
                    console.log('Autoplay prevented, user needs to click play');
                });
                
                // Start typewriter effect
                startTypewriter();
            }, 500);
        }, 1000);
    });
}

// ==================== MUSIC PLAYER ====================
function initMusicPlayer() {
    const toggle = document.getElementById('music-toggle');
    const playIcon = document.getElementById('play-icon');
    const pauseIcon = document.getElementById('pause-icon');
    const volumeSlider = document.getElementById('volume-slider');
    const bgMusic = document.getElementById('bg-music');
    
    toggle.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play();
            playIcon.classList.add('hidden');
            pauseIcon.classList.remove('hidden');
        } else {
            bgMusic.pause();
            playIcon.classList.remove('hidden');
            pauseIcon.classList.add('hidden');
        }
    });
    
    volumeSlider.addEventListener('input', (e) => {
        bgMusic.volume = e.target.value / 100;
    });
}

// ==================== TYPEWRITER EFFECT ====================
function startTypewriter() {
    const heading = document.getElementById('hero-heading');
    const subheading = document.getElementById('hero-subheading');
    const headingText = `Happy Birthday, ${config.herName}!`;
    const subheadingText = `Celebrating the most beautiful person in my life`;
    
    typeText(heading, headingText, 100);
    setTimeout(() => {
        typeText(subheading, subheadingText, 50);
    }, headingText.length * 100 + 500);
}

function typeText(element, text, speed) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            element.innerHTML += '<span class="typewriter-cursor"></span>';
        }
    }
    
    type();
}

// ==================== COUNTDOWN ====================
function initCountdown() {
    const countdown = document.getElementById('countdown');
    const celebration = document.getElementById('celebration');
    const birthday = new Date(config.birthday).getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = birthday - now;
        
        if (distance < 0) {
            // Birthday has arrived
            countdown.classList.add('hidden');
            celebration.classList.remove('hidden');
            celebration.classList.add('animate__animated', 'animate__bounceIn');
            triggerConfetti();
            triggerFireworks();
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// ==================== TIMELINE ====================
function initTimeline() {
    const container = document.getElementById('timeline-container');
    
    config.timeline.forEach((event, index) => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        item.innerHTML = `
            <div class="timeline-content glassmorphism">
                <div class="timeline-date">${event.date}</div>
                <div class="timeline-title">${event.title}</div>
                <div class="timeline-description">${event.description}</div>
            </div>
        `;
        container.appendChild(item);
    });
    
    // Scroll-triggered reveal
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });
    
    document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
    });
}

// ==================== GALLERY ====================
function initGallery() {
    const grid = document.getElementById('gallery-grid');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('lightbox-close');
    const prevBtn = document.getElementById('lightbox-prev');
    const nextBtn = document.getElementById('lightbox-next');
    
    let currentIndex = 0;
    
    // Create gallery items
    config.photos.forEach((photo, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.setAttribute('data-index', index);
        item.innerHTML = `<img src="${photo.src}" alt="${photo.caption}" loading="lazy">`;
        item.addEventListener('click', () => openLightbox(index));
        grid.appendChild(item);
    });
    
    function openLightbox(index) {
        currentIndex = index;
        lightboxImg.src = config.photos[index].src;
        lightbox.classList.remove('hidden');
        lightbox.classList.add('animate__animated', 'animate__fadeIn');
    }
    
    function closeLightbox() {
        lightbox.classList.add('hidden');
    }
    
    function showNext() {
        currentIndex = (currentIndex + 1) % config.photos.length;
        lightboxImg.src = config.photos[currentIndex].src;
    }
    
    function showPrev() {
        currentIndex = (currentIndex - 1 + config.photos.length) % config.photos.length;
        lightboxImg.src = config.photos[currentIndex].src;
    }
    
    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', showPrev);
    nextBtn.addEventListener('click', showNext);
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('hidden')) {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') showNext();
            if (e.key === 'ArrowLeft') showPrev();
        }
    });
    
    // Swipe support
    let touchStartX = 0;
    let touchEndX = 0;
    
    lightbox.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    lightbox.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) showNext();
            else showPrev();
        }
    }
    
    // Close on background click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
}

// ==================== FLIP CARDS ====================
function initFlipCards() {
    const container = document.getElementById('flip-cards');
    
    config.memories.forEach(memory => {
        const card = document.createElement('div');
        card.className = 'flip-card';
        card.innerHTML = `
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src="${memory.photo}" alt="Memory" loading="lazy">
                </div>
                <div class="flip-card-back">
                    <p>${memory.caption}</p>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// ==================== REASONS ====================
function initReasons() {
    const container = document.getElementById('reasons-container');
    
    config.reasons.forEach((reason, index) => {
        const card = document.createElement('div');
        card.className = 'reason-card shimmer';
        card.style.animationDelay = `${index * 0.1}s`;
        card.innerHTML = `<p>${reason}</p>`;
        container.appendChild(card);
    });
}

// ==================== LOVE LETTER ====================
function initLoveLetter() {
    const letter = document.getElementById('love-letter');
    const letterText = config.loveLetter;
    let letterTyped = false;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !letterTyped) {
                letterTyped = true;
                typeLetter(letter, letterText);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(letter);
}

function typeLetter(element, text) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            const char = text.charAt(i);
            if (char === '\n') {
                element.innerHTML += '<br>';
            } else {
                element.innerHTML += char;
            }
            i++;
            setTimeout(type, 30);
        }
    }
    
    type();
}

// ==================== CAKE ====================
function initCake() {
    const blowBtn = document.getElementById('blow-candles');
    const micBtn = document.getElementById('mic-blow');
    const wishMessage = document.getElementById('wish-message');
    const candles = document.querySelectorAll('.candle');
    let candlesBlown = false;
    
    blowBtn.addEventListener('click', blowCandles);
    
    micBtn.addEventListener('click', () => {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            const recognition = new SpeechRecognition();
            recognition.continuous = false;
            recognition.lang = 'en-US';
            
            recognition.onstart = () => {
                micBtn.textContent = 'Blow now! 🎤';
            };
            
            recognition.onresult = (event) => {
                const command = event.results[0][0].transcript.toLowerCase();
                if (command.includes('blow') || command.includes('happy birthday')) {
                    blowCandles();
                }
            };
            
            recognition.onerror = () => {
                alert('Could not detect audio. Please use the button instead.');
            };
            
            recognition.onend = () => {
                micBtn.textContent = 'Use Microphone 🎤';
            };
            
            recognition.start();
        } else {
            alert('Speech recognition not supported in this browser. Please use the button instead.');
        }
    });
    
    function blowCandles() {
        if (candlesBlown) return;
        candlesBlown = true;
        
        candles.forEach(candle => {
            candle.classList.add('blown');
        });
        
        setTimeout(() => {
            wishMessage.classList.remove('hidden');
            triggerConfetti();
            triggerFireworks();
        }, 1000);
    }
}

// ==================== HERO CANVAS (Hearts & Balloons) ====================
function initHeroCanvas() {
    const canvas = document.getElementById('hero-canvas');
    const ctx = canvas.getContext('2d');
    
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resize();
    window.addEventListener('resize', resize);
    
    const hearts = [];
    const balloons = [];
    
    // Create hearts
    for (let i = 0; i < 20; i++) {
        hearts.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 20 + 10,
            speedY: Math.random() * 1 + 0.5,
            speedX: Math.random() * 0.5 - 0.25,
            opacity: Math.random() * 0.5 + 0.3
        });
    }
    
    // Create balloons
    for (let i = 0; i < 5; i++) {
        balloons.push({
            x: Math.random() * canvas.width,
            y: canvas.height + Math.random() * 200,
            size: Math.random() * 30 + 40,
            speedY: Math.random() * 1 + 0.5,
            color: ['#f472b6', '#ec4899', '#f9a8d4', '#fce7f3'][Math.floor(Math.random() * 4)]
        });
    }
    
    function drawHeart(x, y, size, opacity) {
        ctx.globalAlpha = opacity;
        ctx.fillStyle = '#f472b6';
        ctx.beginPath();
        ctx.moveTo(x, y + size / 4);
        ctx.quadraticCurveTo(x, y, x + size / 4, y);
        ctx.quadraticCurveTo(x + size / 2, y, x + size / 2, y + size / 4);
        ctx.quadraticCurveTo(x + size / 2, y, x + size * 3 / 4, y);
        ctx.quadraticCurveTo(x + size, y, x + size, y + size / 4);
        ctx.quadraticCurveTo(x + size, y + size / 2, x + size / 2, y + size * 0.75);
        ctx.quadraticCurveTo(x, y + size / 2, x, y + size / 4);
        ctx.fill();
        ctx.globalAlpha = 1;
    }
    
    function drawBalloon(x, y, size, color) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.ellipse(x, y, size / 2, size * 0.6, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // String
        ctx.strokeStyle = '#9d174d';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x, y + size * 0.6);
        ctx.quadraticCurveTo(x + Math.sin(Date.now() / 500) * 10, y + size, x, y + size + 30);
        ctx.stroke();
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw hearts
        hearts.forEach(heart => {
            heart.y -= heart.speedY;
            heart.x += heart.speedX;
            
            if (heart.y < -50) {
                heart.y = canvas.height + 50;
                heart.x = Math.random() * canvas.width;
            }
            
            drawHeart(heart.x, heart.y, heart.size, heart.opacity);
        });
        
        // Update and draw balloons
        balloons.forEach(balloon => {
            balloon.y -= balloon.speedY;
            
            if (balloon.y < -100) {
                balloon.y = canvas.height + 100;
                balloon.x = Math.random() * canvas.width;
            }
            
            drawBalloon(balloon.x, balloon.y, balloon.size, balloon.color);
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// ==================== FIREWORKS CANVAS ====================
function initFireworksCanvas() {
    const canvas = document.getElementById('fireworks-canvas');
    const ctx = canvas.getContext('2d');
    
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resize();
    window.addEventListener('resize', resize);
    
    let fireworks = [];
    let particles = [];
    let isActive = false;
    
    function createFirework(x, y) {
        const colors = ['#f472b6', '#ec4899', '#f9a8d4', '#fce7f3', '#fbbf24', '#f59e0b'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        for (let i = 0; i < 100; i++) {
            const angle = (Math.PI * 2 / 100) * i;
            const velocity = Math.random() * 5 + 2;
            particles.push({
                x: x,
                y: y,
                vx: Math.cos(angle) * velocity,
                vy: Math.sin(angle) * velocity,
                color: color,
                alpha: 1,
                decay: Math.random() * 0.02 + 0.01
            });
        }
    }
    
    function animate() {
        if (!isActive) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            requestAnimationFrame(animate);
            return;
        }
        
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach((particle, index) => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.vy += 0.05; // gravity
            particle.alpha -= particle.decay;
            
            if (particle.alpha <= 0) {
                particles.splice(index, 1);
                return;
            }
            
            ctx.globalAlpha = particle.alpha;
            ctx.fillStyle = particle.color;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
            ctx.fill();
        });
        
        ctx.globalAlpha = 1;
        
        if (particles.length === 0) {
            isActive = false;
        }
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    window.triggerFireworks = () => {
        isActive = true;
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                createFirework(
                    Math.random() * canvas.width,
                    Math.random() * canvas.height * 0.5
                );
            }, i * 300);
        }
    };
}

// ==================== CONFETTI ====================
function triggerConfetti() {
    const colors = ['#f472b6', '#ec4899', '#f9a8d4', '#fce7f3', '#fbbf24', '#f59e0b', '#a78bfa', '#818cf8'];
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confetti.style.animationDuration = Math.random() * 2 + 2 + 's';
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// ==================== CUSTOM CURSOR ====================
function initCustomCursor() {
    // Check if device supports hover (desktop)
    if (window.matchMedia('(hover: hover)').matches) {
        const cursor = document.getElementById('cursor');
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
        
        document.addEventListener('click', (e) => {
            const sparkle = document.createElement('div');
            sparkle.style.position = 'fixed';
            sparkle.style.left = e.clientX + 'px';
            sparkle.style.top = e.clientY + 'px';
            sparkle.style.fontSize = '20px';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.zIndex = '10000';
            sparkle.style.animation = 'cursor-sparkle 0.5s ease-out forwards';
            sparkle.textContent = '❤️';
            document.body.appendChild(sparkle);
            
            setTimeout(() => sparkle.remove(), 500);
        });
    } else {
        document.getElementById('cursor').style.display = 'none';
    }
}

// ==================== NIGHT MODE ====================
function initNightMode() {
    const toggle = document.getElementById('night-toggle');
    let isNightMode = false;
    
    toggle.addEventListener('click', () => {
        isNightMode = !isNightMode;
        document.body.classList.toggle('night-mode', isNightMode);
        
        if (isNightMode) {
            createStars();
        } else {
            removeStars();
        }
    });
}

function createStars() {
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.animationDelay = Math.random() * 2 + 's';
        star.dataset.nightStar = 'true';
        document.body.appendChild(star);
    }
}

function removeStars() {
    document.querySelectorAll('[data-night-star]').forEach(star => star.remove());
}

// ==================== NAVBAR ====================
function initNavbar() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ==================== MOBILE MENU ====================
function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    
    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
    
    // Close menu when clicking a link
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
        });
    });
}

// ==================== BACK TO TOP ====================
function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });
    
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ==================== FLOATING HEARTS ====================
function initFloatingHearts() {
    const container = document.querySelector('.floating-hearts');
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = '❤️';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = Math.random() * 3 + 4 + 's';
        heart.style.fontSize = Math.random() * 15 + 15 + 'px';
        container.appendChild(heart);
        
        setTimeout(() => heart.remove(), 7000);
    }, 500);
}

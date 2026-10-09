# Romantic Birthday Website 🎂❤️

A beautiful, fully animated romantic birthday website built with plain HTML, CSS, and vanilla JavaScript. Perfect for surprising your loved one on their special day!

## 📁 Project Structure

```
/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # Custom CSS with animations
├── js/
│   └── script.js      # JavaScript with config object
├── images/            # Place your photos here
│   └── README.txt     # Instructions for images
├── audio/             # Place your song here
│   └── README.txt     # Instructions for audio
└── README.md          # This file
```

## 🎨 Features

- **Animated Intro**: Heart loader with surprise envelope
- **Hero Section**: Typewriter effect, countdown timer, floating hearts & balloons
- **Timeline**: Scroll-triggered relationship milestones
- **Photo Gallery**: Masonry grid with lightbox, swipe support, keyboard navigation
- **Flip Cards**: 3D memory cards with hover flip effect
- **Reasons I Love You**: Animated heart cards
- **Love Letter**: Typewriter animation letter
- **Birthday Cake**: 3D animated cake with blow-out candles (button or microphone)
- **Fireworks & Confetti**: Canvas-based particle effects
- **Night Mode**: Toggle with twinkling stars
- **Music Player**: Background music with volume control
- **Custom Cursor**: Heart trail on desktop
- **Fully Responsive**: Mobile-first design

## ⚙️ Customization

All editable content is in the `config` object at the top of `js/script.js`:

```javascript
const config = {
    // Names
    herName: "Sweetheart",        // Replace with her name
    myName: "Your Love",          // Replace with your name
    
    // Dates
    birthday: "2026-10-16T00:00:00",        // Birthday date
    relationshipStartDate: "01-01-2024",    // When you started dating
    
    // Timeline events
    timeline: [
        {
            date: "January 1, 2024",
            title: "The Day We Met",
            description: "Your description here"
        },
        // Add more events...
    ],
    
    // Photo gallery
    photos: [
        { src: "images/photo1.jpg", caption: "Your caption" },
        // Add more photos...
    ],
    
    // Flip card memories
    memories: [
        { photo: "images/memory1.jpg", caption: "Your memory" },
        // Add more memories...
    ],
    
    // Reasons I love you
    reasons: [
        "Your beautiful smile",
        // Add more reasons...
    ],
    
    // Love letter
    loveLetter: `Your heartfelt letter here...`
};
```

## 📷 Adding Your Photos

1. Place your photos in the `images/` folder
2. Name them: `photo1.jpg`, `photo2.jpg`, etc.
3. Update the `config.photos` array in `js/script.js`:

```javascript
photos: [
    { src: "images/photo1.jpg", caption: "Our first selfie" },
    { src: "images/photo2.jpg", caption: "Beach day" },
    // Add all your photos...
]
```

**Note**: The website currently uses placeholder images from picsum.photos. Replace these with your actual photos.

## 🎵 Adding Music

1. Place your song in the `audio/` folder
2. Name it: `song.mp3`
3. The website will automatically play it when the envelope is opened

**Note**: The music player includes a play/pause button and volume control.

## 🚀 Deploying to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the `+` icon in the top-right corner
3. Select "New repository"
4. Name it something like `birthday-surprise` (or any name you like)
5. Make it "Public" (so you can share the link)
6. Click "Create repository"

### Step 2: Upload Your Files

**Option A: Using GitHub Web Interface (Easiest)**

1. On your repository page, click "uploading an existing file"
2. Drag and drop all your files and folders:
   - `index.html`
   - `css/` folder
   - `js/` folder
   - `images/` folder
   - `audio/` folder
3. Wait for all files to upload
4. Scroll to the bottom and click "Commit changes"

**Option B: Using Git Command Line**

```bash
# Navigate to your project folder
cd C:\Users\Vansh\OneDrive\Desktop\Extra\Neev

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add remote repository (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/birthday-surprise.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. In the left sidebar, click "Pages"
4. Under "Build and deployment", find "Source"
5. Select "Deploy from a branch"
6. Choose "main" (or "master") as the branch
7. Select "/ (root)" as the folder
8. Click "Save"

### Step 4: Get Your Website URL

1. Wait about 1-2 minutes for deployment
2. Go back to the "Pages" settings
3. You'll see your website URL at the top, like:
   `https://YOUR_USERNAME.github.io/birthday-surprise/`

Share this link with your loved one! 🎉

## 🎯 Testing Locally

To test the website before deploying:

1. Simply open `index.html` in your browser
2. Or use a local server:
   - With Python: `python -m http.server 8000`
   - With Node.js: `npx serve`
   - Then open `http://localhost:8000`

**Note**: Some features (like microphone blow) may require HTTPS or localhost to work properly due to browser security.

## 📱 Browser Compatibility

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Fully responsive

## 🎨 Customizing Colors

The theme uses a romantic pink/rose gold/purple gradient. To change colors, edit `css/style.css`:

- Main gradient: `bg-gradient-to-br from-pink-100 via-rose-200 to-purple-200`
- Accent colors: `text-rose-700`, `text-rose-600`, etc.
- Glassmorphism: Adjust `rgba` values in `.glassmorphism` class

## 🔧 Troubleshooting

**Music not playing?**
- Browsers block autoplay. The user must interact with the page first (clicking the envelope handles this)
- Check that your audio file is named `song.mp3` in the `audio/` folder

**Images not showing?**
- Make sure image paths in the config are correct
- Use relative paths: `images/photo1.jpg` (not `/images/photo1.jpg`)

**Countdown not working?**
- Check the birthday format: `"2026-10-16T00:00:00"`
- Make sure the date is in the future

**Microphone not working?**
- Microphone feature requires HTTPS or localhost
- Some browsers may block microphone access
- The button fallback always works

**Animations too slow on mobile?**
- The code respects `prefers-reduced-motion` for accessibility
- Canvas effects are optimized with `requestAnimationFrame`

## 📝 File Sizes

For best performance:
- Compress images before uploading (use TinyPNG or similar)
- Keep audio file under 5MB if possible
- The website uses lazy loading for images

## ❤️ Enjoy!

This website is a labor of love. Feel free to customize it to make it perfect for your special someone!

Made with ❤️ for your loved one's special day.

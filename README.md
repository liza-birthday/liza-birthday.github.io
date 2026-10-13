# Birthday Website ❤️

A fully animated birthday website made with only **HTML, CSS and JavaScript** (plus Bootstrap, Animate.css and AOS from a CDN). No build step, so it works directly on GitHub Pages.

Most animations happen **when you click or tap**: opening the envelope, flipping cards, pulling reasons from the heart jar, breaking the letter seal, blowing the candles, popping balloons and more.

## Folder structure

```
index.html
css/style.css
js/script.js        <- ALL your personal content is at the top of this file
images/             <- photo1.jpg ... photo12.jpg (placeholders)
audio/              <- put song.mp3 here
```

## 1. Personalise it (5 minutes)

Open `js/script.js` and edit the `CONFIG` object at the very top:

- `herName`, `myName`
- `birthday` (format `2026-10-16T00:00:00`) and `startDate` (format `2024-02-14`)
- `timeline`, `photos`, `memories`, `reasons`, `letter`
- `candleCount`, `wishTitle`, `wishSub`, `footerText`

Use `{name}` for her name and `{me}` for your name inside any text.

## 2. Replace the photos

1. Compress your photos first (for example at squoosh.app) so the site loads quickly. Aim for under 300 KB each.
2. Put them in the `images/` folder, replacing `photo1.jpg` ... `photo12.jpg` (keep the same names), **or** use new names and update the `src` values in `CONFIG.photos` and `CONFIG.memories`.
3. You can add more photos by adding more lines to `CONFIG.photos`.

## 3. Add the music

Copy a song to `audio/song.mp3`. Browsers block autoplay, so the music starts when she taps the envelope. If the file is missing, the site still works and shows a small hint.

## 4. Test locally

Double-click `index.html`, or for the best result run a tiny server in this folder:

```
python3 -m http.server 8000
```

then open http://localhost:8000. Test on your phone too.

## 5. Put it online with GitHub Pages

1. Create a new repository on github.com (for example `birthday-surprise`).
2. Upload all the files and folders (**Add file > Upload files**, then drag the contents of this folder in, so `index.html` is at the top level of the repo).
3. Go to **Settings > Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select **main** and **/ (root)**, then **Save**.
5. Wait a minute or two. Your link will be `https://YOUR-USERNAME.github.io/birthday-surprise/`.

Send her the link, ideally on her birthday morning (16 October) when the countdown ends and the fireworks start.

## Tips

- The microphone "blow the candles" feature needs `https` (GitHub Pages is fine). There is always a button fallback.
- Click anywhere on the page for little hearts, tap the balloons to pop them, and use the 🌙 button for night-sky mode.
- If someone has "reduce motion" turned on in their device settings, the animations are toned down automatically.

## Mobile support

The site is built mobile-first and was checked at 320, 360, 390 and 768 px wide and on a landscape phone. It has no sideways scrolling, tap targets are finger-sized, and the layout respects notches and the iPhone home bar. On phones the effects are lighter so scrolling stays smooth.

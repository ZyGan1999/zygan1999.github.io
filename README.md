# zygan1999.github.io

Personal academic homepage of **Zeyu Gan (甘泽宇)** — Ph.D. candidate at the Gaoling
School of Artificial Intelligence, Renmin University of China.

🔗 https://zygan1999.github.io

## About this site

A static, zero-build homepage in an **Animal-Crossing-inspired** visual style.
No Jekyll, no npm — just HTML, CSS, and a little vanilla JavaScript, so it can be
opened locally by double-clicking `index.html` and deployed straight to GitHub Pages.

```
index.html              # single-page layout
.nojekyll               # serve files as-is (no Jekyll processing)
assets/
  css/style.css         # design tokens + all components
  js/data.js            # ← EDIT THIS: profile, publications, news, education
  js/main.js            # rendering, live clock, mobile drawer, scroll-spy
  fonts/                # self-hosted Nunito + Noto Sans SC (woff2)
  img/                  # avatar, backgrounds, footer, icons, cursor
  ZeyuGan.pdf           # CV
```

## Updating content

Almost everything lives in **`assets/js/data.js`**:

- `PROFILE` — name, role, affiliation, links, avatar, CV path
- `ABOUT` — about paragraphs (supports `[text](url)` and `**bold**`)
- `RESEARCH` — research-interest cards
- `PUBLICATIONS` — papers (newest first); your name is auto-bolded
- `NEWS` — timeline items
- `EDUCATION` — education timeline

To add a paper, prepend an entry to `PUBLICATIONS`. No build step required.

## Local preview

Just open `index.html` in a browser, or serve the folder:

```
python -m http.server 8000   # then visit http://localhost:8000
```

## Credits

UI design language and assets (fonts, backgrounds, icons) are adapted from
[animal-island-ui](https://github.com/guokaigdg/animal-island-ui) by guokaigdg,
licensed under **CC BY-NC 4.0** (non-commercial, attribution required).
Not affiliated with or endorsed by Nintendo.

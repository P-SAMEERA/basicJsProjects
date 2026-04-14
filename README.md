# \u23f1\ufe0f WORLD CLOCK
### *"Sometimes you gotta run before you can walk."* \u2014 Tony Stark

![Version](https://img.shields.io/badge/version-2.0.0-00e5ff?style=flat-square)
![Status](https://img.shields.io/badge/status-LIVE%20%26%20TICKING-4caf50?style=flat-square)
![Built With](https://img.shields.io/badge/built%20with-HTML%20%7C%20CSS%20%7C%20JS-ff9933?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-ff4081?style=flat-square)
![Phone Ready](https://img.shields.io/badge/phone-optimised-ffce00?style=flat-square)

---

> **A real-time global clock dashboard tracking India, Germany, USA & Japan \u2014**
> **built with zero dependencies, zero frameworks, and zero compromises.**
> 
> This isn't your grandma's timezone converter. This is a living, breathing, **pixel-perfect time intelligence system** that fits in your pocket and tells you everything you need to know about the world \u2014 at a glance.

---

## \ud83d\ude80 What Is This?

A single-file (`index.html`) **world clock web app** that works completely offline after first load. No React. No Vue. No 200MB `node_modules`. Just raw HTML, CSS, and Vanilla JavaScript \u2014 lean, mean, and faster than Pepper Potts on a deadline.

Drop it on your phone's browser. Bookmark it. Open it every morning. Know your world.

---

## \ud83c\udf0d Countries Tracked

| Flag | Country | Timezone | UTC Offset |
|------|---------|----------|------------|
| \ud83c\uddee\ud83c\uddf3 | **India** | Asia/Kolkata (IST) | UTC +5:30 |
| \ud83c\udde9\ud83c\uddea | **Germany** | Europe/Berlin (CET/CEST) | UTC +1 / +2 (DST auto) |
| \ud83c\uddfa\ud83c\uddf8 | **USA** | America/New_York (EST/EDT) | UTC -5 / -4 (DST auto) |
| \ud83c\uddef\ud83c\uddf5 | **Japan** | Asia/Tokyo (JST) | UTC +9 |

> DST (Daylight Saving Time) is handled **automatically** using the browser's native `Intl.DateTimeFormat` API. You never have to think about it. It just works. Like J.A.R.V.I.S.

---

## \u2728 Features

### \ud83d\udd50 Dual Clock Display \u2014 Analog + Digital
Every country card shows **both** a live analog clock (with sweeping second hand) and a precision digital readout in `HH:MM:SS` format. Because why choose one when you can have both?

### \ud83c\udf1e\ud83c\udf19 Day / Night Indicator
Each card detects whether it's currently **daytime or night** in that country and shows a contextual sun \u2600\ufe0f or moon \ud83c\udf19 icon. One glance and you know \u2014 no math required.

### \ud83d\udfe2\ud83d\udd34 Work Hours Badge
A live badge tells you if it's currently **business hours (9 AM \u2013 6 PM)** in each country:
- \ud83d\udfe2 **Work Hours** \u2014 Someone's at their desk. Call them.
- \ud83d\udd34 **Closed** \u2014 They're sleeping. Don't.

### \ud83d\udde3\ufe0f Local Language Greeting
Each card greets you in the **native language** of that country, dynamically based on the time of day:

| Country | Morning | Afternoon | Evening | Night |
|---------|---------|-----------|---------|-------|
| \ud83c\uddee\ud83c\uddf3 India | Suprabhat \ud83c\udf05 | Namaskar \u2600\ufe0f | Shubh Sandhya \ud83c\udf06 | Shubh Ratri \ud83c\udf19 |
| \ud83c\udde9\ud83c\uddea Germany | Guten Morgen \ud83c\udf05 | Guten Tag \u2600\ufe0f | Guten Abend \ud83c\udf06 | Gute Nacht \ud83c\udf19 |
| \ud83c\uddfa\ud83c\uddf8 USA | Good Morning \ud83c\udf05 | Good Afternoon \u2600\ufe0f | Good Evening \ud83c\udf06 | Good Night \ud83c\udf19 |
| \ud83c\uddef\ud83c\uddf5 Japan | Ohayou \ud83c\udf05 | Konnichiwa \u2600\ufe0f | Konbanwa \ud83c\udf06 | Oyasumi \ud83c\udf19 |

### \ud83d\udcca Seconds Progress Bar
A glowing accent bar at the bottom of each card **fills up every 60 seconds** \u2014 a cinematic visual countdown that shows you exactly where you are in the current minute. Satisfying as repulsor test at 3 AM.

### \u23f1\ufe0f Time Difference from Local
Each card shows how many hours and minutes that country is **ahead of or behind your local device time**. No calculator. No Googling. Just instant clarity.

### \ud83c\udfa8 Dark / Light Theme Toggle
Ships in **dark mode** \u2014 deep navy, glowing accents, scanline overlay for that retro-futuristic cockpit aesthetic. One tap on the top-right button flips it to **paper-white light mode** for outdoor readability. Both modes are fully polished.

---

## \ud83e\udde0 Tech Stack

This thing is built the way Tony builds suits \u2014 minimal, elegant, and brutally effective.

```
index.html
\u251c\u2500\u2500 HTML5              \u2014 Semantic structure
\u251c\u2500\u2500 CSS3               \u2014 Variables, animations, responsive layout, dark/light theming
\u251c\u2500\u2500 Vanilla JavaScript \u2014 Live clock logic, Intl API, analog hand math
\u2514\u2500\u2500 Google Fonts       \u2014 Share Tech Mono (digital) + Rajdhani (UI)
```

**Zero dependencies. Zero build steps. Zero BS.**

The only external calls are to Google Fonts CDN \u2014 and even those are cached after first load. Everything else runs 100% in your browser.

---

## \u2699\ufe0f How It Works

### Time Engine
Uses the browser-native `Intl.DateTimeFormat` API with `formatToParts()` to extract granular time components (hour, minute, second, date, weekday, AM/PM) for each timezone \u2014 accurately, handling DST automatically.

```javascript
const parts = new Intl.DateTimeFormat('en-US', {
  timeZone: 'Asia/Kolkata',
  hour: 'numeric', minute: 'numeric', second: 'numeric',
  hour12: true, week
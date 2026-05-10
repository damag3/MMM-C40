# MMM-TapoC40 – MagicMirror² Module for Tapo C40 Camera (WebRTC/RTSP Proxy)

![MagicMirror](https://img.shields.io/badge/MagicMirror-Module-blue)
![TP-Link](https://img.shields.io/badge/Tapo-C40-orange)
![WebRTC](https://img.shields.io/badge/Stream-WebRTC-green)
![License](https://img.shields.io/badge/License-MIT-yellow)

MMM‑TapoC40 is a lightweight MagicMirror² module that displays a **live video stream** from a **TP‑Link Tapo C40** camera using a WebRTC/RTSP proxy such as:

- **rtsp‑to‑webrtc**
- **rtsp‑simple‑server**
- **TinyPilot stream proxy**
- **Any RTSP → WebRTC/HTML5 gateway**

The module embeds the stream inside an `<iframe>` and works on any Raspberry Pi, including the Pi Zero.

---

## 📡 Requirements

You must run a **WebRTC or HTML5 stream proxy** that exposes your Tapo C40 camera feed as a webpage.

Example:
http://192.168.1.48:1984/stream.html?src=tapo&mode=webrtc


This module does **not** decode RTSP directly — it simply displays the webpage that contains the video player.

---

## 📦 Installation

Clone the module into your MagicMirror modules directory:

```bash
cd ~/MagicMirror/modules
git clone https://github.com/YOUR_USER/MMM-TapoC40


No additional dependencies are required.

⚙️ Configuration
Add the module to your config.js:

js
{
    module: "MMM-TapoC40",
    position: "bottom_right",
    config: {
        url: "http://192.168.1.48:1984/stream.html?src=tapo&mode=webrtc",
        width: "354px",
        height: "240px",
        refreshInterval: 0
    }
}
Configuration Options
```

🧠 How It Works
The module creates an <iframe> pointing to the configured stream URL

The iframe loads your WebRTC/HTML5 player

MagicMirror displays the live camera feed

No CPU‑heavy decoding is done on the Pi

Works even on Raspberry Pi Zero W

🗂️ File Structure
Code
MMM-TapoC40/
└── MMM-TapoC40.js

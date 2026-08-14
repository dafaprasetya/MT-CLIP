# MT-CLIP

![MT-CLIP](https://github.com/dafaprasetya/MT-CLIP/blob/main/img/logo.png?raw=true)

> **AI Auto Clip From YouTube — 100% FREE (Until I Change My Mind)**

**Release:** [Download MT-CLIP Releases](https://github.com/dafaprasetya/MT-CLIP/releases)

---

# 🇮🇩 Bahasa Indonesia

MT-CLIP adalah aplikasi untuk **mengubah video YouTube menjadi short clips secara otomatis menggunakan AI**.

Cukup masukkan link YouTube, lalu MT-CLIP akan menangani proses download, transcription, analisis AI, pemilihan momen terbaik, hingga rendering video secara otomatis.

## Fitur

* AI-powered automatic clip generation
* Otomatis mencari momen menarik dari video
* Support **Ollama / Local AI**
* Default AI model: `qwen2.5:7b`
* Support berbagai AI provider
* Otomatis menggunakan subtitle YouTube jika tersedia
* Fallback ke **Whisper.cpp** jika subtitle tidak tersedia
* Generate beberapa clip sekaligus
* Pengaturan jumlah clip
* Pengaturan durasi minimum dan maksimum clip
* **Portrait / 9:16 clip**
* Automatic portrait crop
* Animated subtitle
* Custom subtitle
* Gallery untuk melihat hasil clip
* Automatic video rendering menggunakan FFmpeg
* ViralEnhance untuk membantu mencari topik dan tren yang relevan
* Support sumber data:

  * YouTube
  * Google Trends
  * Reddit
  * TikTok
* Local AI processing menggunakan Ollama
* GPU acceleration melalui backend yang didukung Ollama, termasuk Vulkan

---

# System Requirements

MT-CLIP dapat berjalan pada komputer dengan spesifikasi yang cukup sederhana.

Namun, proses AI, transcription, portrait crop, dan rendering video cukup berat. **Semakin besar RAM dan semakin bagus GPU, semakin cepat prosesnya.**

### Minimum

* **OS:** Windows 10 / Windows 11
* **CPU:** 4 Core
* **RAM:** 8 GB
* **Storage:** SSD recommended
* **GPU:** Optional
* Internet connection

### Recommended

* **CPU:** 6–8 Core
* **RAM:** 16 GB atau lebih
* **GPU:** Dedicated GPU dengan VRAM 6 GB+
* **Storage:** SSD dengan ruang kosong yang cukup

### RAM

RAM yang lebih besar sangat membantu ketika:

* Memproses video panjang
* Menjalankan model AI lokal
* Melakukan transcription menggunakan Whisper
* Rendering beberapa clip
* Menjalankan beberapa proses secara bersamaan

**16 GB RAM** merupakan titik awal yang nyaman untuk penggunaan sehari-hari.

Jika ingin memproses video panjang atau menjalankan model AI yang lebih besar, **32 GB RAM atau lebih** akan lebih nyaman.

### GPU & Vulkan

GPU **tidak wajib**, tetapi sangat direkomendasikan untuk mendapatkan processing time yang lebih cepat.

Jika GPU dan driver kamu mendukung Vulkan, Ollama dapat dijalankan menggunakan backend Vulkan.

Contoh di Windows:

```bash
set OLLAMA_VULKAN=1
ollama serve
```

Kemudian MT-CLIP dapat menggunakan Ollama seperti biasa.

> Dukungan Vulkan dan performanya bergantung pada GPU, driver, versi Ollama, backend yang digunakan, serta model AI.

GPU dengan VRAM yang lebih besar umumnya lebih nyaman untuk menjalankan model AI lokal.

Contoh konfigurasi yang nyaman:

```text
CPU     : 6+ Core
RAM     : 16–32 GB
GPU     : 8 GB+ VRAM
Storage : SSD
```

Namun konfigurasi tersebut **bukan requirement wajib**.

MT-CLIP tetap dapat berjalan menggunakan CPU saja. Hanya saja proses AI dan transcription dapat menjadi jauh lebih lambat.

### Performance Priority

Jika tujuan utama kamu adalah mempercepat MT-CLIP, secara umum:

```text
GPU / Hardware Acceleration
          ↓
        RAM
          ↓
        CPU
          ↓
        SSD
```

Terutama untuk:

```text
Ollama
Whisper
Portrait Crop
FFmpeg Rendering
```

---

# Requirements

MT-CLIP membutuhkan beberapa software eksternal.

### Required

* **Ollama** — AI local inference
* **FFmpeg** — video processing dan rendering
* **yt-dlp** — download video dan subtitle YouTube
* **Whisper.cpp** — fallback transcription

### Optional

* YouTube Data API v3
* TikTok RapidAPI
* API provider lain

API tersebut hanya diperlukan jika ingin menggunakan fitur **ViralEnhance** tertentu.

---

# Installation

## 1. Install Ollama

Download dan install Ollama:

[Download Ollama for Windows](https://ollama.com/download/windows?utm_source=chatgpt.com)

Setelah selesai, buka terminal:

```bash
ollama pull qwen2.5:7b
```

Cek model:

```bash
ollama list
```

Contoh:

```text
NAME            SIZE
qwen2.5:7b      ~4.7 GB
```

`qwen2.5:7b` merupakan model default yang direkomendasikan untuk memulai.

Tetapi kamu bebas menggunakan model lain yang kompatibel dengan Ollama.

---

## 2. Install FFmpeg

Download FFmpeg:

[FFmpeg Builds by Gyan](https://www.gyan.dev/ffmpeg/builds/?utm_source=chatgpt.com)

Disarankan menggunakan **Full Build**.

Setelah install, cek:

```bash
ffmpeg -version
```

Jika menggunakan Chocolatey:

```bash
choco install ffmpeg
```

---

## 3. Install yt-dlp

Download `yt-dlp.exe` dari repository resminya:

[yt-dlp GitHub Repository](https://github.com/yt-dlp/yt-dlp?utm_source=chatgpt.com)

MT-CLIP membutuhkan:

```text
yt-dlp.exe
```

Path executable dapat diatur melalui **Settings**.

---

## 4. Install Whisper.cpp

Whisper digunakan sebagai fallback apabila subtitle YouTube tidak tersedia.

MT-CLIP menggunakan:

```text
whisper-cli.exe
```

dan model Whisper:

```text
ggml-large-v3-turbo-q5_0.bin
```

Path executable dan model dapat diatur melalui **Settings**.

Jika subtitle YouTube tersedia, MT-CLIP dapat menggunakan subtitle tersebut terlebih dahulu sehingga proses transcription dapat menjadi jauh lebih cepat.

---

# First Setup

Jalankan MT-CLIP untuk pertama kali.

Beberapa path yang perlu dikonfigurasi:

```text
yt-dlp
FFmpeg
Whisper CLI
Whisper Model
```

Untuk AI lokal:

```text
AI Provider : Ollama
AI Model    : qwen2.5:7b
Ollama URL  : http://127.0.0.1:11434
```

Pastikan Ollama sedang berjalan sebelum melakukan proses clip.

---

# Cara Menggunakan

## 1. Buka Dashboard

Masukkan URL video YouTube yang ingin diproses.

Contoh:

```text
https://www.youtube.com/watch?v=xxxxxxxxxxx
```

## 2. Atur Konfigurasi

Sebelum memulai, kamu dapat mengatur:

* Bahasa
* Jumlah clip
* Minimum clip duration
* Maximum clip duration
* AI provider
* AI model
* Context length
* Subtitle
* Portrait mode
* Subtitle style
* ViralEnhance

Untuk penggunaan pertama, konfigurasi default sudah cukup untuk mencoba MT-CLIP.

## 3. Generate Clip

Klik tombol:

**Buat Clip**

MT-CLIP akan menjalankan proses secara otomatis:

```text
YouTube URL
     ↓
Download Video
     ↓
Get Subtitle
     ↓
Subtitle tersedia?
     │
     ├── YES
     │    ↓
     │  Clean Transcript
     │
     └── NO
          ↓
       Extract Audio
          ↓
       Whisper.cpp
          ↓
       Transcript
          ↓
     AI Analysis
          ↓
     ViralEnhance
          ↓
    Clip Selection
          ↓
     Validate Clips
          ↓
    FFmpeg Rendering
          ↓
   Portrait Processing
          ↓
   Animated Subtitle
          ↓
       Gallery
```

---

# AI Clip Selection

AI tidak hanya mencari bagian video secara random.

Model akan menganalisis transcript dan mencari bagian yang berpotensi menjadi short-form content.

Beberapa faktor yang dapat dipertimbangkan:

* Hook
* Emotional impact
* Standalone clarity
* Shareability
* Story climax
* Humor
* Plot twist
* Educational value
* Interesting statement
* Context
* Potential audience engagement

AI juga akan mencoba menghindari clip yang:

* Terlalu pendek
* Tidak memiliki konteks
* Terpotong di tengah pembicaraan
* Tidak memiliki hook
* Terlalu mirip dengan clip lainnya

---

# Output

Semua hasil dapat ditemukan melalui **Gallery**.

Secara umum workspace memiliki struktur:

```text
workspace/
├── downloads/
├── audio/
├── transcripts/
└── clips/
    └── VIDEO_ID/
        ├── clip_01.mp4
        ├── clip_01_portrait.mp4
        ├── clip_02.mp4
        ├── clip_02_portrait.mp4
        └── ...
```

Format portrait ditujukan untuk:

* TikTok
* YouTube Shorts
* Instagram Reels

---

# Portrait Mode

MT-CLIP dapat membuat versi portrait dari video landscape.

```text
16:9 Landscape
      ↓
Object Detection
      ↓
Automatic Subject Tracking
      ↓
9:16 Portrait
```

Tujuannya adalah menjaga subject utama tetap berada di dalam frame ketika video diubah menjadi format vertical.

---

# Animated Subtitle

MT-CLIP dapat membuat subtitle otomatis dengan animasi.

Beberapa pengaturan yang tersedia meliputi:

* Font
* Font size
* Text color
* Stroke color
* Stroke width
* Words per chunk
* Pop duration
* Uppercase
* Safe zone

Subtitle dapat disesuaikan melalui Settings.

---

# ViralEnhance

**ViralEnhance bersifat optional.**

Fitur ini memberikan konteks tambahan kepada AI mengenai topik dan tren yang sedang relevan.

MT-CLIP dapat menggunakan beberapa sumber:

```text
YouTube
Google Trends
Reddit
TikTok
```

Data tersebut kemudian digunakan sebagai konteks tambahan saat AI memilih dan mengevaluasi clip.

## YouTube

MT-CLIP menggunakan **YouTube Data API v3**.

### Cara mendapatkan API Key

1. Buka Google Cloud Console.
2. Buat project baru.
3. Aktifkan **YouTube Data API v3**.
4. Buat API Key.
5. Masukkan API Key ke Settings MT-CLIP.

Konfigurasi:

```text
Settings
→ Trend Sources
→ YouTube API Key
```

## TikTok

MT-CLIP menggunakan RapidAPI untuk mendapatkan data TikTok.

### Cara setup

1. Register di RapidAPI.
2. Cari API TikTok yang digunakan oleh MT-CLIP.
3. Subscribe API tersebut.
4. Copy API Key.
5. Masukkan API Key ke Settings.

Konfigurasi:

```text
Settings
→ Trend Sources
→ TikTok RapidAPI Key
```

TikTok RapidAPI Host juga dapat dikonfigurasi jika diperlukan.

Jika API key tidak tersedia, sumber TikTok akan dilewati.

## Google Trends

Google Trends digunakan untuk mendapatkan informasi mengenai topik yang sedang populer.

Konfigurasi region dapat diatur melalui:

```text
Trend Region
```

Contoh:

```text
ID
```

Google Trends tidak membutuhkan API key tambahan untuk penggunaan ini.

## Reddit

Reddit juga dapat digunakan sebagai sumber konteks tren.

MT-CLIP menggunakan User-Agent untuk request.

Contoh:

```text
clipmaker/1.0
```

Jika Reddit tidak dapat diakses, sumber Reddit akan dilewati dan proses utama tetap dapat berjalan.

---

# AI Providers

Default configuration:

```text
Provider : Ollama
Model    : qwen2.5:7b
```

MT-CLIP dirancang agar tidak bergantung pada satu AI provider.

Tergantung konfigurasi yang digunakan, project dapat menggunakan provider seperti:

* Ollama
* OpenAI-compatible API
* OpenRouter
* OpenAI
* Gemini
* LM Studio
* Groq
* Together

Untuk penggunaan gratis dan lokal, **Ollama merupakan pilihan yang direkomendasikan**.

---

# Local AI

Keuntungan menggunakan Ollama:

* Tidak membutuhkan API key
* Data transcript dapat diproses secara lokal
* Tidak membutuhkan biaya API
* Dapat menggunakan GPU
* Dapat memilih berbagai model
* Bisa digunakan tanpa cloud AI

Contoh:

```bash
ollama pull qwen2.5:7b
```

Kemudian:

```text
AI Provider → Ollama
AI Model    → qwen2.5:7b
```

---

# GPU Acceleration

Jika GPU kamu mendukung backend yang digunakan Ollama, proses AI dapat dijalankan menggunakan GPU.

Untuk mencoba Vulkan:

```bash
set OLLAMA_VULKAN=1
ollama serve
```

Kemudian pastikan Ollama berjalan:

```bash
ollama list
```

GPU yang memiliki VRAM lebih besar akan lebih nyaman ketika menggunakan model AI yang lebih besar.

Contohnya:

```text
8 GB VRAM
12 GB VRAM
16 GB VRAM
```

Tetapi GPU bukan syarat wajib.

MT-CLIP tetap dapat berjalan menggunakan CPU.

---

# Settings

## Video & Transcription

```text
Language
Download YouTube Subtitle
Whisper Path
Whisper Model
yt-dlp Path
FFmpeg Path
```

## AI

```text
AI Provider
AI Base URL
AI API Key
AI Model
Context Length
Chunk Window
Max Clips / Chunk
```

## Clip

```text
Minimum Clip Duration
Maximum Clip Duration
Maximum Clips
Diversity Mode
Quote Validation
```

## Portrait & Subtitle

```text
Subtitle Font
Font Size
Subtitle Color
Stroke Color
Stroke Width
Words Per Chunk
Pop Duration
Uppercase
Safe Zone
```

## Trend

```text
YouTube API Key
Trend Region
Reddit User-Agent
TikTok RapidAPI Key
TikTok RapidAPI Host
```

---

# Processing Time

MT-CLIP melakukan beberapa proses yang cukup berat:

```text
Download
    ↓
Transcription
    ↓
AI Analysis
    ↓
Clip Selection
    ↓
Video Rendering
    ↓
Portrait Crop
    ↓
Subtitle Rendering
```

Karena itu, video panjang dapat membutuhkan waktu beberapa menit atau lebih.

Performa sangat bergantung pada:

* Durasi video
* Resolusi video
* CPU
* RAM
* GPU
* VRAM
* AI model
* Whisper model
* Storage

---

# Troubleshooting

## Ollama tidak terhubung

Pastikan Ollama sedang berjalan:

```bash
ollama list
```

Default URL:

```text
http://127.0.0.1:11434
```

Pastikan model yang dipilih sudah tersedia:

```bash
ollama pull qwen2.5:7b
```

## FFmpeg tidak ditemukan

Pastikan `ffmpeg.exe` tersedia.

Test:

```bash
ffmpeg -version
```

Kemudian masukkan path FFmpeg melalui Settings.

## yt-dlp tidak ditemukan

Pastikan file berikut tersedia:

```text
yt-dlp.exe
```

Kemudian masukkan path-nya melalui Settings.

## Whisper tidak ditemukan

Pastikan file berikut tersedia:

```text
whisper-cli.exe
ggml-large-v3-turbo-q5_0.bin
```

Kemudian masukkan kedua path melalui Settings.

## YouTube Subtitle tidak tersedia

Tidak masalah.

MT-CLIP memiliki fallback ke Whisper:

```text
YouTube Subtitle
       ↓
   Available?
    /      \
  YES      NO
   ↓        ↓
Subtitle  Whisper
   \        /
    \      /
   Transcript
```

Jika subtitle tersedia, transcription dapat dilakukan lebih cepat.

Jika subtitle tidak tersedia, MT-CLIP akan menggunakan Whisper.cpp.

---

# Project Structure

```text
MT-CLIP/
│
├── Assets/
│   ├── Fonts/
│   └── images/
│
├── Core/
│   ├── Ai.py
│   ├── AiProvider.py
│   ├── AudioExtact.py
│   ├── Logger.py
│   ├── PortraitCropper.py
│   ├── SubtitleAnimator.py
│   ├── VideoCutter.py
│   ├── ViralEnhance.py
│   ├── WhisperTranscript.py
│   └── YtDlp.py
│
├── workspace/
│   ├── audio/
│   ├── clips/
│   ├── downloads/
│   └── transcripts/
│
├── Config.py
├── Main.py
├── app.py
├── settings.json
│
└── README.md
```

---

# Disclaimer

MT-CLIP dibuat untuk membantu proses editing dan content creation secara otomatis.

Pastikan kamu memiliki hak atau izin yang sesuai terhadap video yang diproses.

Penggunaan video dari YouTube tetap tunduk pada:

* Hak cipta
* Terms of Service YouTube
* Aturan platform
* Hak pemilik konten

Developer tidak bertanggung jawab atas penggunaan MT-CLIP untuk mendistribusikan konten yang melanggar hak cipta atau aturan platform.

---

# License

Lihat file `LICENSE` pada repository ini untuk informasi mengenai lisensi project.

---

<p align="center">

Made with too much coffee and questionable engineering decisions.

</p>

---

<br>

# 🇬🇧 English

MT-CLIP is an application that **automatically turns YouTube videos into short clips using AI**.

Simply provide a YouTube URL and MT-CLIP will handle the downloading, transcription, AI analysis, clip selection, and video rendering automatically.

## Features

* AI-powered automatic clip generation
* Automatically finds interesting moments from videos
* Support for **Ollama / Local AI**
* Default AI model: `qwen2.5:7b`
* Support for multiple AI providers
* Automatically uses YouTube subtitles when available
* Falls back to **Whisper.cpp** when subtitles are unavailable
* Generate multiple clips at once
* Configurable clip count
* Configurable minimum and maximum clip duration
* **Portrait / 9:16 clips**
* Automatic portrait cropping
* Animated subtitles
* Custom subtitle styling
* Built-in gallery for generated clips
* Automatic video rendering using FFmpeg
* ViralEnhance for trend and topic context
* Support for:

  * YouTube
  * Google Trends
  * Reddit
  * TikTok
* Local AI processing using Ollama
* GPU acceleration through supported Ollama backends, including Vulkan

---

# System Requirements

MT-CLIP can run on relatively modest hardware.

However, AI inference, transcription, portrait processing, and video rendering can be resource-intensive. **More RAM and a better GPU generally mean faster processing.**

### Minimum

* **OS:** Windows 10 / Windows 11
* **CPU:** 4 Cores
* **RAM:** 8 GB
* **Storage:** SSD recommended
* **GPU:** Optional
* Internet connection

### Recommended

* **CPU:** 6–8 Cores
* **RAM:** 16 GB or more
* **GPU:** Dedicated GPU with 6 GB+ VRAM
* **Storage:** SSD with sufficient free space

### RAM

More RAM is especially useful when:

* Processing long videos
* Running local AI models
* Transcribing with Whisper
* Rendering multiple clips
* Running multiple processes simultaneously

**16 GB RAM** is a comfortable starting point for everyday use.

For long videos or larger AI models, **32 GB RAM or more** is recommended.

### GPU & Vulkan

A GPU is **not required**, but it is highly recommended if you want faster processing.

If your GPU and drivers support Vulkan, Ollama can be run using the Vulkan backend.

On Windows:

```bash
set OLLAMA_VULKAN=1
ollama serve
```

MT-CLIP can then use Ollama normally.

> Vulkan support and performance depend on your GPU, drivers, Ollama version, backend, and AI model.

A GPU with more VRAM is generally more comfortable for running larger local AI models.

A comfortable configuration would be:

```text
CPU     : 6+ Cores
RAM     : 16–32 GB
GPU     : 8 GB+ VRAM
Storage : SSD
```

This is **not a mandatory requirement**.

MT-CLIP can still run using CPU-only processing, but AI inference and transcription may be significantly slower.

### Performance Priority

If your main goal is faster MT-CLIP processing, generally prioritize:

```text
GPU / Hardware Acceleration
          ↓
         RAM
          ↓
         CPU
          ↓
         SSD
```

Especially for:

```text
Ollama
Whisper
Portrait Crop
FFmpeg Rendering
```

---

# Requirements

MT-CLIP requires several external components.

### Required

* **Ollama** — local AI inference
* **FFmpeg** — video processing and rendering
* **yt-dlp** — YouTube video and subtitle downloading
* **Whisper.cpp** — fallback transcription

### Optional

* YouTube Data API v3
* TikTok RapidAPI
* Other AI provider APIs

These APIs are only required if you want to use certain **ViralEnhance** features.

---

# Installation

## 1. Install Ollama

Download and install Ollama:

[Download Ollama for Windows](https://ollama.com/download/windows?utm_source=chatgpt.com)

Then open a terminal:

```bash
ollama pull qwen2.5:7b
```

Check the installed models:

```bash
ollama list
```

Example:

```text
NAME            SIZE
qwen2.5:7b      ~4.7 GB
```

`qwen2.5:7b` is the recommended default model to get started.

You can also use another model compatible with Ollama.

---

## 2. Install FFmpeg

Download FFmpeg:

[FFmpeg Builds by Gyan](https://www.gyan.dev/ffmpeg/builds/?utm_source=chatgpt.com)

The **Full Build** is recommended.

Verify the installation:

```bash
ffmpeg -version
```

If you use Chocolatey:

```bash
choco install ffmpeg
```

---

## 3. Install yt-dlp

Download `yt-dlp.exe` from the official repository:

[yt-dlp GitHub Repository](https://github.com/yt-dlp/yt-dlp?utm_source=chatgpt.com)

MT-CLIP requires:

```text
yt-dlp.exe
```

The executable path can be configured through **Settings**.

---

## 4. Install Whisper.cpp

Whisper is used as a fallback when YouTube subtitles are unavailable.

MT-CLIP uses:

```text
whisper-cli.exe
```

and the Whisper model:

```text
ggml-large-v3-turbo-q5_0.bin
```

The executable and model paths can be configured through **Settings**.

When YouTube subtitles are available, MT-CLIP can use them first, making transcription significantly faster.

---

# First Setup

Launch MT-CLIP for the first time.

Configure the required executable paths:

```text
yt-dlp
FFmpeg
Whisper CLI
Whisper Model
```

For local AI:

```text
AI Provider : Ollama
AI Model    : qwen2.5:7b
Ollama URL  : http://127.0.0.1:11434
```

Make sure Ollama is running before generating clips.

---

# How To Use

## 1. Open the Dashboard

Paste the YouTube URL you want to process.

Example:

```text
https://www.youtube.com/watch?v=xxxxxxxxxxx
```

## 2. Configure Your Clip

Before starting, you can configure:

* Language
* Number of clips
* Minimum clip duration
* Maximum clip duration
* AI provider
* AI model
* Context length
* Subtitles
* Portrait mode
* Subtitle style
* ViralEnhance

For your first run, the default settings should be enough.

## 3. Generate Clips

Click:

**Create Clip**

MT-CLIP will automatically process the video:

```text
YouTube URL
     ↓
Download Video
     ↓
Get Subtitle
     ↓
Subtitle available?
     │
     ├── YES
     │    ↓
     │  Clean Transcript
     │
     └── NO
          ↓
       Extract Audio
          ↓
       Whisper.cpp
          ↓
       Transcript
          ↓
     AI Analysis
          ↓
     ViralEnhance
          ↓
    Clip Selection
          ↓
     Validate Clips
          ↓
    FFmpeg Rendering
          ↓
   Portrait Processing
          ↓
   Animated Subtitle
          ↓
       Gallery
```

---

# AI Clip Selection

The AI does not simply pick random sections of the video.

It analyzes the transcript and looks for moments that could work well as short-form content.

Factors may include:

* Hook
* Emotional impact
* Standalone clarity
* Shareability
* Story climax
* Humor
* Plot twist
* Educational value
* Interesting statements
* Context
* Potential audience engagement

The AI also attempts to avoid clips that are:

* Too short
* Missing important context
* Cut in the middle of a statement
* Lacking a hook
* Too similar to other clips

---

# Output

All generated clips can be found through the **Gallery**.

The workspace generally looks like:

```text
workspace/
├── downloads/
├── audio/
├── transcripts/
└── clips/
    └── VIDEO_ID/
        ├── clip_01.mp4
        ├── clip_01_portrait.mp4
        ├── clip_02.mp4
        ├── clip_02_portrait.mp4
        └── ...
```

Portrait versions are intended for:

* TikTok
* YouTube Shorts
* Instagram Reels

---

# Portrait Mode

MT-CLIP can generate a portrait version from landscape videos.

```text
16:9 Landscape
      ↓
Object Detection
      ↓
Automatic Subject Tracking
      ↓
9:16 Portrait
```

The goal is to keep the main subject inside the frame when converting landscape footage to vertical format.

---

# Animated Subtitles

MT-CLIP can automatically generate animated subtitles.

Available settings include:

* Font
* Font size
* Text color
* Stroke color
* Stroke width
* Words per chunk
* Pop duration
* Uppercase
* Safe zone

Subtitle settings can be customized through Settings.

---

# ViralEnhance

**ViralEnhance is optional.**

It provides additional context to the AI about relevant topics and current trends.

MT-CLIP can use several sources:

```text
YouTube
Google Trends
Reddit
TikTok
```

The collected data is then provided as additional context when the AI evaluates and selects clips.

## YouTube

MT-CLIP uses the **YouTube Data API v3**.

### Getting an API Key

1. Open Google Cloud Console.
2. Create a new project.
3. Enable **YouTube Data API v3**.
4. Create an API Key.
5. Enter the API Key in MT-CLIP Settings.

Configuration:

```text
Settings
→ Trend Sources
→ YouTube API Key
```

## TikTok

MT-CLIP uses RapidAPI to retrieve TikTok data.

### Setup

1. Register on RapidAPI.
2. Find the TikTok API used by MT-CLIP.
3. Subscribe to the API.
4. Copy your API Key.
5. Enter it in Settings.

Configuration:

```text
Settings
→ Trend Sources
→ TikTok RapidAPI Key
```

The TikTok RapidAPI Host can also be configured if required.

If no API key is provided, TikTok will simply be skipped.

## Google Trends

Google Trends is used to retrieve information about currently popular topics.

The region can be configured using:

```text
Trend Region
```

Example:

```text
ID
```

No additional API key is required for this integration.

## Reddit

Reddit can also be used as a trend context source.

MT-CLIP uses a User-Agent for requests.

Example:

```text
clipmaker/1.0
```

If Reddit cannot be accessed, the Reddit source will be skipped and the main processing pipeline can continue.

---

# AI Providers

Default configuration:

```text
Provider : Ollama
Model    : qwen2.5:7b
```

MT-CLIP is designed not to depend on a single AI provider.

Depending on the configuration, the project can work with providers such as:

* Ollama
* OpenAI-compatible APIs
* OpenRouter
* OpenAI
* Gemini
* LM Studio
* Groq
* Together

For free local AI processing, **Ollama is the recommended option**.

---

# Local AI

Advantages of using Ollama:

* No API key required
* Transcript processing can stay local
* No API costs
* GPU acceleration
* Multiple model choices
* Can operate without cloud AI

Example:

```bash
ollama pull qwen2.5:7b
```

Then configure:

```text
AI Provider → Ollama
AI Model    → qwen2.5:7b
```

---

# GPU Acceleration

If your GPU supports an Ollama backend, AI inference can be accelerated using your GPU.

To try Vulkan:

```bash
set OLLAMA_VULKAN=1
ollama serve
```

Then verify that Ollama is running:

```bash
ollama list
```

GPUs with more VRAM are generally more comfortable when running larger AI models.

For example:

```text
8 GB VRAM
12 GB VRAM
16 GB VRAM
```

A GPU is not mandatory.

MT-CLIP can still run using CPU-only processing.

---

# Settings

## Video & Transcription

```text
Language
Download YouTube Subtitle
Whisper Path
Whisper Model
yt-dlp Path
FFmpeg Path
```

## AI

```text
AI Provider
AI Base URL
AI API Key
AI Model
Context Length
Chunk Window
Max Clips / Chunk
```

## Clip

```text
Minimum Clip Duration
Maximum Clip Duration
Maximum Clips
Diversity Mode
Quote Validation
```

## Portrait & Subtitle

```text
Subtitle Font
Font Size
Subtitle Color
Stroke Color
Stroke Width
Words Per Chunk
Pop Duration
Uppercase
Safe Zone
```

## Trend

```text
YouTube API Key
Trend Region
Reddit User-Agent
TikTok RapidAPI Key
TikTok RapidAPI Host
```

---

# Processing Time

MT-CLIP performs several relatively heavy operations:

```text
Download
    ↓
Transcription
    ↓
AI Analysis
    ↓
Clip Selection
    ↓
Video Rendering
    ↓
Portrait Crop
    ↓
Subtitle Rendering
```

Because of this, long videos may take several minutes or more to process.

Performance depends heavily on:

* Video duration
* Video resolution
* CPU
* RAM
* GPU
* VRAM
* AI model
* Whisper model
* Storage

---

# Troubleshooting

## Ollama is not connecting

Make sure Ollama is running:

```bash
ollama list
```

Default URL:

```text
http://127.0.0.1:11434
```

Make sure the selected model is installed:

```bash
ollama pull qwen2.5:7b
```

## FFmpeg is not found

Make sure `ffmpeg.exe` is available.

Test:

```bash
ffmpeg -version
```

Then configure the FFmpeg path through Settings.

## yt-dlp is not found

Make sure the following file exists:

```text
yt-dlp.exe
```

Then configure its path through Settings.

## Whisper is not found

Make sure these files exist:

```text
whisper-cli.exe
ggml-large-v3-turbo-q5_0.bin
```

Then configure both paths through Settings.

## YouTube subtitles are unavailable

This is not a problem.

MT-CLIP has a Whisper fallback:

```text
YouTube Subtitle
       ↓
   Available?
    /      \
  YES      NO
   ↓        ↓
Subtitle  Whisper
   \        /
    \      /
   Transcript
```

If subtitles are available, transcription can be significantly faster.

If subtitles are unavailable, MT-CLIP will use Whisper.cpp.

---

# Project Structure

```text
MT-CLIP/
│
├── Assets/
│   ├── Fonts/
│   └── images/
│
├── Core/
│   ├── Ai.py
│   ├── AiProvider.py
│   ├── AudioExtact.py
│   ├── Logger.py
│   ├── PortraitCropper.py
│   ├── SubtitleAnimator.py
│   ├── VideoCutter.py
│   ├── ViralEnhance.py
│   ├── WhisperTranscript.py
│   └── YtDlp.py
│
├── workspace/
│   ├── audio/
│   ├── clips/
│   ├── downloads/
│   └── transcripts/
│
├── Config.py
├── Main.py
├── app.py
├── settings.json
│
└── README.md
```

---

# Disclaimer

MT-CLIP is designed to assist with automated video editing and content creation.

Make sure you have the appropriate rights or permission to process the videos you use.

Videos downloaded from YouTube remain subject to:

* Copyright law
* YouTube Terms of Service
* Platform rules
* Content owner rights

The developer is not responsible for the use of MT-CLIP to distribute copyrighted content or content that violates platform rules.

---

# License

See the `LICENSE` file in this repository for information about the project's license.

---

<p align="center">

Made with too much coffee and questionable engineering decisions.

</p>

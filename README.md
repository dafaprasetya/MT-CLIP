# MT-CLIP

![MT-CLIP](https://github.com/dafaprasetya/ClipMaker-Low-Budget/blob/main/Assets/images/logo.png?raw=true)

> **AI Auto Clip From YouTube — 100% FREE (Until I Change My Mind)**

**Release:** [Download MT-CLIP Releases](https://github.com/dafaprasetya/MT-CLIP/releases/?utm_source=mt-clipper.my.id)

> **Note:** Release ZIP sudah berisi file dan komponen yang dibutuhkan MT-CLIP. Kamu tidak perlu menginstall komponen internal secara manual. Cukup download release, install beberapa dependency eksternal yang diperlukan, lalu jalankan aplikasinya.

---

# 🇮🇩 Bahasa Indonesia

MT-CLIP adalah aplikasi yang dapat **mengubah video YouTube menjadi short clips secara otomatis menggunakan AI**.

Cukup masukkan link YouTube, pilih pengaturan yang kamu inginkan, dan MT-CLIP akan mencari momen menarik dari video kemudian membuatnya menjadi clip yang siap digunakan.

MT-CLIP dirancang agar prosesnya semudah mungkin — **download, setup, dan langsung buat clip.**

---

## Fitur

* AI Auto Clip dari YouTube
* Otomatis mencari momen menarik dari video
* Local AI dengan Ollama
* Support berbagai AI model
* Generate beberapa clip sekaligus
* Pengaturan jumlah clip
* Pengaturan durasi clip
* Landscape dan Portrait / 9:16
* Automatic subject tracking untuk portrait
* Animated subtitle
* Custom subtitle
* Gallery untuk melihat hasil
* Automatic video processing
* ViralEnhance untuk membantu mencari topik dan tren yang relevan
* Support sumber tren:

  * YouTube
  * Google Trends
  * Reddit
  * TikTok
* GPU acceleration melalui Vulkan
* Dapat digunakan secara lokal tanpa API AI berbayar

---

# System Requirements

MT-CLIP dapat berjalan pada komputer dengan spesifikasi yang cukup sederhana.

Namun, proses AI dan video processing cukup berat. **Semakin besar RAM dan semakin bagus GPU, semakin cepat prosesnya.**

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
* **Storage:** SSD

### Untuk hasil yang lebih cepat

Jika ingin processing yang lebih cepat, terutama ketika menggunakan AI lokal:

**RAM**

* 8 GB → Bisa digunakan
* 16 GB → Recommended
* 32 GB+ → Sangat nyaman untuk video panjang dan penggunaan berat

**GPU**

GPU tidak wajib, tetapi sangat direkomendasikan.

GPU dengan VRAM yang lebih besar akan lebih nyaman untuk menjalankan AI model yang lebih besar.

Contoh:

```text
8 GB VRAM
12 GB VRAM
16 GB VRAM
```

### Vulkan

Jika GPU kamu mendukung Vulkan, kamu dapat mencoba menjalankan Ollama menggunakan Vulkan untuk memanfaatkan GPU.

```bash
set OLLAMA_VULKAN=1
ollama serve
```

> Performa Vulkan berbeda-beda tergantung GPU, driver, versi Ollama, dan model AI yang digunakan.

---

# Yang Dibutuhkan

Untuk menggunakan MT-CLIP dari release, kamu hanya perlu menyiapkan beberapa hal:

### 1. MT-CLIP

Download versi terbaru dari:

[MT-CLIP Releases](https://github.com/dafaprasetya/MT-CLIP/releases/?utm_source=mt-clipper.my.id)

Extract ZIP ke folder yang kamu inginkan.

**Tidak perlu mendownload file internal MT-CLIP secara terpisah.**

---

### 2. Ollama

Download dan install Ollama:

[Download Ollama for Windows](https://ollama.com/download/windows?utm_source=mt-clipper.my.id)

Setelah install, buka terminal:

```bash
ollama pull qwen2.5:7b
```

Kemudian cek:

```bash
ollama list
```

Jika muncul:

```text
qwen2.5:7b
```

berarti model sudah siap digunakan.

> Kamu bebas menggunakan AI model lain yang kompatibel. `qwen2.5:7b` digunakan sebagai rekomendasi default karena relatif ringan dan dapat dijalankan secara lokal.

---

### 3. FFmpeg

Download FFmpeg:

[FFmpeg Builds by Gyan](https://www.gyan.dev/ffmpeg/builds/?utm_source=mt-clipper.my.id)

Disarankan menggunakan **Full Build**.

Setelah install, cek:

```bash
ffmpeg -version
```

Jika command tersebut berhasil, berarti FFmpeg sudah siap.

---

# Setup Awal

Setelah semua requirement tersedia:

1. Download MT-CLIP dari halaman Release.
2. Extract file ZIP.
3. Install Ollama.
4. Download AI model yang ingin digunakan.
5. Install FFmpeg.
6. Jalankan MT-CLIP.
7. Buka **Settings**.
8. Pastikan konfigurasi AI sudah benar.
9. Masukkan path FFmpeg jika diperlukan.
10. Simpan pengaturan.

Setelah itu MT-CLIP siap digunakan.

---

# Cara Menggunakan

## 1. Masukkan Link YouTube

Buka Dashboard MT-CLIP.

Masukkan link video YouTube:

```text
https://www.youtube.com/watch?v=xxxxxxxxxxx
```

---

## 2. Atur Pengaturan

Kamu dapat mengatur beberapa hal seperti:

* AI Model
* Bahasa
* Jumlah clip
* Durasi minimum
* Durasi maksimum
* Subtitle
* Portrait mode
* Subtitle style
* ViralEnhance

Kalau baru pertama kali menggunakan MT-CLIP, **pengaturan default sudah cukup untuk mencoba.**

---

## 3. Buat Clip

Klik tombol **Buat Clip**.

MT-CLIP akan otomatis:

```text
YouTube Video
      ↓
   Processing
      ↓
  AI Analysis
      ↓
Find Best Moments
      ↓
  Create Clips
      ↓
 Add Subtitle
      ↓
Portrait Version
      ↓
    Gallery
```

Kamu cukup menunggu sampai proses selesai.

---

# Gallery

Setelah proses selesai, semua hasil clip dapat dilihat melalui **Gallery**.

MT-CLIP dapat menghasilkan:

### Landscape

```text
16:9
```

Cocok untuk:

* YouTube
* Video biasa
* Podcast clips

### Portrait

```text
9:16
```

Cocok untuk:

* TikTok
* YouTube Shorts
* Instagram Reels

---

# AI Clip Selection

AI akan menganalisis isi video dan mencoba menemukan bagian yang memiliki potensi menjadi short-form content.

Beberapa faktor yang dapat dipertimbangkan:

* Hook
* Emotional impact
* Interesting moments
* Story climax
* Humor
* Plot twist
* Educational value
* Shareability
* Context
* Audience engagement

AI juga berusaha menghindari clip yang:

* Terlalu pendek
* Tidak memiliki konteks
* Terpotong di tengah pembicaraan
* Tidak memiliki hook
* Terlalu mirip dengan clip lainnya

> Hasil terbaik tetap bergantung pada kualitas video, transcript, AI model, dan pengaturan yang digunakan.

---

# ViralEnhance

**ViralEnhance adalah fitur optional.**

Fitur ini memberikan informasi tambahan kepada AI mengenai topik dan tren yang sedang relevan.

Sumber yang dapat digunakan:

```text
YouTube
Google Trends
Reddit
TikTok
```

Tujuannya adalah membantu AI memahami apakah suatu topik atau pembahasan memiliki relevansi dengan tren saat ini.

---

## Unlock ViralEnhance

Beberapa sumber membutuhkan API key.

### YouTube

MT-CLIP menggunakan **YouTube Data API v3**.

Cara mendapatkan API Key:

1. Buka Google Cloud Console.
2. Buat project.
3. Aktifkan **YouTube Data API v3**.
4. Buat API Key.
5. Masukkan API Key ke Settings MT-CLIP.

```text
Settings
→ Trend Sources
→ YouTube API Key
```

---

### TikTok

MT-CLIP menggunakan RapidAPI untuk mendapatkan data TikTok.

Cara setup:

1. Register di RapidAPI.
2. Cari API TikTok yang digunakan.
3. Subscribe API tersebut.
4. Copy API Key.
5. Masukkan ke Settings.

```text
Settings
→ Trend Sources
→ TikTok RapidAPI Key
```

Jika API key tidak diisi, sumber TikTok akan dilewati.

---

### Google Trends

Google Trends dapat digunakan untuk mendapatkan informasi mengenai topik yang sedang populer.

Region dapat diatur melalui:

```text
Trend Region
```

Contoh:

```text
ID
```

Tidak membutuhkan API key tambahan.

---

### Reddit

Reddit juga dapat digunakan sebagai sumber informasi tambahan mengenai topik yang sedang ramai dibicarakan.

Jika sumber Reddit tidak tersedia, MT-CLIP tetap dapat berjalan seperti biasa.

---

# AI Provider

Default:

```text
Provider : Ollama
Model    : qwen2.5:7b
```

MT-CLIP juga dapat menggunakan provider lain yang kompatibel dengan konfigurasi aplikasi.

Contohnya:

* Ollama
* OpenAI
* OpenRouter
* Gemini
* LM Studio
* Groq
* OpenAI-compatible API

Untuk penggunaan gratis dan lokal, **Ollama merupakan pilihan yang direkomendasikan.**

---

# Local AI

Menggunakan Ollama memungkinkan MT-CLIP menjalankan AI secara lokal.

Keuntungannya:

* Tidak membutuhkan API key
* Tidak perlu membayar API AI
* Data dapat diproses secara lokal
* Dapat menggunakan GPU
* Bebas memilih model
* Tidak bergantung pada layanan cloud AI

Contoh:

```bash
ollama pull qwen2.5:7b
```

Kemudian pada MT-CLIP:

```text
AI Provider → Ollama
AI Model    → qwen2.5:7b
```

---

# GPU Acceleration

GPU tidak wajib untuk menjalankan MT-CLIP.

Namun, jika komputer memiliki GPU yang mendukung Vulkan, kamu dapat mencoba menggunakan GPU untuk mempercepat AI processing.

```bash
set OLLAMA_VULKAN=1
ollama serve
```

Kemudian jalankan MT-CLIP seperti biasa.

> Hasil dan peningkatan performa Vulkan dapat berbeda tergantung hardware dan driver.

Jika memiliki GPU dengan VRAM besar, penggunaan AI model yang lebih besar juga akan menjadi lebih memungkinkan.

---

# Processing Time

Waktu processing tergantung pada:

* Durasi video
* Resolusi video
* AI model
* CPU
* RAM
* GPU
* VRAM
* Storage
* Jumlah clip
* Pengaturan processing

Video yang panjang tentu membutuhkan waktu lebih lama.

Untuk mendapatkan hasil yang lebih cepat:

**Recommended:**

```text
RAM : 16 GB+
GPU : Dedicated GPU
VRAM: 8 GB+
SSD : Recommended
```

---

# Troubleshooting

## Ollama tidak terhubung

Pastikan Ollama sudah berjalan.

Coba:

```bash
ollama list
```

Pastikan model yang digunakan sudah tersedia.

Contoh:

```bash
ollama pull qwen2.5:7b
```

---

## FFmpeg tidak ditemukan

Pastikan FFmpeg sudah terinstall.

Coba:

```bash
ffmpeg -version
```

Jika command tidak ditemukan, pastikan FFmpeg sudah masuk ke PATH atau masukkan lokasi FFmpeg melalui Settings.

---

## MT-CLIP tidak dapat membuat clip

Pastikan:

* Internet tersedia
* Link YouTube valid
* Ollama berjalan
* AI model sudah tersedia
* FFmpeg sudah terkonfigurasi
* Storage masih tersedia

Jika masih mengalami masalah, periksa log yang tersedia pada aplikasi.

---

# Release

Versi terbaru MT-CLIP dapat di-download melalui GitHub Releases:

[Download Latest Release](https://github.com/dafaprasetya/MT-CLIP/releases/?utm_source=mt-clipper.my.id)

Setiap release ZIP sudah berisi file yang diperlukan untuk menjalankan MT-CLIP.

**Tidak perlu melakukan build dari source code jika hanya ingin menggunakan aplikasinya.**

---

# Disclaimer

MT-CLIP dibuat untuk membantu proses editing dan content creation secara otomatis.

Pastikan kamu memiliki hak atau izin yang sesuai terhadap video yang diproses.

Penggunaan video dari YouTube tetap tunduk pada:

* Hak cipta
* YouTube Terms of Service
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

Simply provide a YouTube URL, choose your preferred settings, and MT-CLIP will find interesting moments and turn them into ready-to-use clips.

MT-CLIP is designed to keep the process as simple as possible — **download, setup, and start creating clips.**

---

## Features

* AI-powered automatic clip generation
* Automatically finds interesting moments
* Local AI using Ollama
* Support for multiple AI models
* Generate multiple clips at once
* Configurable clip count
* Configurable clip duration
* Landscape and Portrait / 9:16 output
* Automatic subject tracking for portrait videos
* Animated subtitles
* Custom subtitles
* Built-in gallery
* Automatic video processing
* ViralEnhance for trend and topic analysis
* Trend sources:

  * YouTube
  * Google Trends
  * Reddit
  * TikTok
* GPU acceleration through Vulkan
* Can run locally without paid AI APIs

---

# System Requirements

MT-CLIP can run on relatively modest hardware.

However, AI processing and video processing can be resource-intensive. **More RAM and a better GPU generally mean faster processing.**

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
* **Storage:** SSD

### For Faster Processing

If you want faster processing, especially when using local AI:

**RAM**

* 8 GB → Usable
* 16 GB → Recommended
* 32 GB+ → Great for long videos and heavier workloads

**GPU**

A GPU is not required, but it is highly recommended.

More VRAM generally provides a better experience when running larger AI models.

For example:

```text
8 GB VRAM
12 GB VRAM
16 GB VRAM
```

### Vulkan

If your GPU supports Vulkan, you can try running Ollama with Vulkan to utilize your GPU.

```bash
set OLLAMA_VULKAN=1
ollama serve
```

> Vulkan performance varies depending on your GPU, drivers, Ollama version, and AI model.

---

# What You Need

To use the MT-CLIP release, you only need to prepare a few things.

### 1. MT-CLIP

Download the latest release from:

[MT-CLIP Releases](https://github.com/dafaprasetya/MT-CLIP/releases/?utm_source=mt-clipper.my.id)

Extract the ZIP wherever you want.

**You do not need to download MT-CLIP's internal components separately.**

---

### 2. Ollama

Download and install Ollama:

[Download Ollama for Windows](https://ollama.com/download/windows?utm_source=mt-clipper.my.id)

Then open a terminal:

```bash
ollama pull qwen2.5:7b
```

Check:

```bash
ollama list
```

If you see:

```text
qwen2.5:7b
```

the model is ready.

You can also use another compatible model.

---

### 3. FFmpeg

Download FFmpeg:

[FFmpeg Builds by Gyan](https://www.gyan.dev/ffmpeg/builds/?utm_source=mt-clipper.my.id)

The **Full Build** is recommended.

Verify the installation:

```bash
ffmpeg -version
```

---

# Initial Setup

After preparing everything:

1. Download MT-CLIP from the Releases page.
2. Extract the ZIP.
3. Install Ollama.
4. Download your preferred AI model.
5. Install FFmpeg.
6. Launch MT-CLIP.
7. Open **Settings**.
8. Check the AI configuration.
9. Configure the FFmpeg path if required.
10. Save your settings.

MT-CLIP is now ready to use.

---

# How To Use

## 1. Enter a YouTube URL

Open the MT-CLIP Dashboard.

Paste your YouTube URL:

```text
https://www.youtube.com/watch?v=xxxxxxxxxxx
```

---

## 2. Configure Your Settings

You can configure:

* AI model
* Language
* Number of clips
* Minimum duration
* Maximum duration
* Subtitles
* Portrait mode
* Subtitle style
* ViralEnhance

For your first run, **the default settings should be enough.**

---

## 3. Generate Clips

Click **Create Clip**.

MT-CLIP will automatically:

```text
YouTube Video
      ↓
   Processing
      ↓
  AI Analysis
      ↓
Find Best Moments
      ↓
  Create Clips
      ↓
 Add Subtitle
      ↓
Portrait Version
      ↓
    Gallery
```

---

# Gallery

Once processing is complete, all generated clips can be viewed through the **Gallery**.

MT-CLIP can generate:

### Landscape

```text
16:9
```

Suitable for:

* YouTube
* Standard video
* Podcast clips

### Portrait

```text
9:16
```

Suitable for:

* TikTok
* YouTube Shorts
* Instagram Reels

---

# AI Clip Selection

The AI analyzes the video content and tries to find moments that have potential as short-form content.

Factors may include:

* Hook
* Emotional impact
* Interesting moments
* Story climax
* Humor
* Plot twist
* Educational value
* Shareability
* Context
* Audience engagement

The AI also attempts to avoid clips that are:

* Too short
* Missing context
* Cut in the middle of a statement
* Missing a hook
* Too similar to other clips

> Results still depend on the source video, transcript, AI model, and selected settings.

---

# ViralEnhance

**ViralEnhance is optional.**

It provides additional information to the AI about relevant topics and current trends.

Available sources include:

```text
YouTube
Google Trends
Reddit
TikTok
```

The goal is to help the AI understand whether a topic or discussion is relevant to current trends.

---

## Unlock ViralEnhance

Some sources require API keys.

### YouTube

MT-CLIP uses the **YouTube Data API v3**.

To get an API Key:

1. Open Google Cloud Console.
2. Create a project.
3. Enable **YouTube Data API v3**.
4. Create an API Key.
5. Enter the API Key in MT-CLIP Settings.

```text
Settings
→ Trend Sources
→ YouTube API Key
```

### TikTok

MT-CLIP uses RapidAPI to retrieve TikTok data.

Setup:

1. Register on RapidAPI.
2. Find the TikTok API being used.
3. Subscribe to the API.
4. Copy your API Key.
5. Enter it in Settings.

```text
Settings
→ Trend Sources
→ TikTok RapidAPI Key
```

If no API key is provided, TikTok will simply be skipped.

### Google Trends

Google Trends can be used to retrieve information about currently popular topics.

Configure:

```text
Trend Region
```

Example:

```text
ID
```

No additional API key is required.

### Reddit

Reddit can also be used as an additional source of information about trending topics.

If Reddit is unavailable, MT-CLIP will continue to work normally.

---

# AI Providers

Default:

```text
Provider : Ollama
Model    : qwen2.5:7b
```

MT-CLIP can also work with other compatible providers.

Examples include:

* Ollama
* OpenAI
* OpenRouter
* Gemini
* LM Studio
* Groq
* OpenAI-compatible APIs

For free local AI processing, **Ollama is recommended.**

---

# Local AI

Using Ollama allows MT-CLIP to run AI locally.

Benefits:

* No API key required
* No paid AI API required
* Data can be processed locally
* GPU acceleration
* Freedom to choose models
* No dependency on cloud AI services

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

A GPU is not required to run MT-CLIP.

However, if your GPU supports Vulkan, you can try using it to accelerate AI processing.

```bash
set OLLAMA_VULKAN=1
ollama serve
```

Then launch MT-CLIP normally.

> Vulkan performance depends on your hardware and drivers.

A GPU with more VRAM also makes it easier to use larger AI models.

---

# Processing Time

Processing time depends on:

* Video duration
* Video resolution
* AI model
* CPU
* RAM
* GPU
* VRAM
* Storage
* Number of clips
* Processing settings

Longer videos naturally take more time.

For faster processing:

```text
RAM : 16 GB+
GPU : Dedicated GPU
VRAM: 8 GB+
SSD : Recommended
```

---

# Troubleshooting

## Ollama is not connecting

Make sure Ollama is running.

Try:

```bash
ollama list
```

Make sure the selected model is installed:

```bash
ollama pull qwen2.5:7b
```

---

## FFmpeg is not found

Make sure FFmpeg is installed.

Try:

```bash
ffmpeg -version
```

If the command is not found, make sure FFmpeg is added to PATH or configure its location through Settings.

---

## MT-CLIP cannot generate clips

Make sure:

* Internet connection is available
* The YouTube URL is valid
* Ollama is running
* The AI model is installed
* FFmpeg is configured
* Enough storage space is available

If the problem persists, check the application logs.

---

# Release

Download the latest MT-CLIP release from GitHub:

[Download Latest Release](https://github.com/dafaprasetya/MT-CLIP/releases/?utm_source=mt-clipper.my.id)

Each release ZIP already contains the files required to run MT-CLIP.

**You do not need to build the application from source if you only want to use the released application.**

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

# MAL to Stremio Browser Extension

A simple but powerful browser extension that adds a "Play in Stremio" button directly to MyAnimeList anime pages, providing a seamless bridge between discovering anime and watching it.

![Screenshot of the button on MyAnimeList](https://i.imgur.com/your-screenshot-link.png) 
<!-- 
  TODO for you: 
  1. Take a nice screenshot of your final button on a MAL page.
  2. Upload it to a free image host like Imgur.com.
  3. Replace the link above with your screenshot's link.
-->

---

## ⚠️ Important: Stremio Version Limitation

This extension is confirmed to work perfectly with the stable **Stremio v4**.

Due to a bug in the beta version of Stremio, this extension **does not currently work with Stremio v5 Beta**. The v5 Beta fails to correctly handle the external `stremio://` links that this extension generates. A bug report has been filed, and this notice will be removed if the issue is resolved in a future Stremio update.

---

## ✨ Features

-   Adds a stylish and elegant "Play in Stremio" button to the user actions block on MAL.
-   Uses a reliable API to map MyAnimeList IDs to Kitsu IDs, ensuring broad compatibility with anime addons.
-   Features a polished "glassmorphism" design that fits modern aesthetics.
-   Includes a local SVG icon for fast loading and a professional look.
-   Lightweight and efficient.

---

## ✅ Supported Browsers

This extension can be installed in any browser that is based on the Chromium engine. This includes:

-   **Brave Browser** (Recommended)
-   **Google Chrome**
-   **Microsoft Edge**
-   **Vivaldi**
-   And many others...

It is not compatible with Firefox without being repackaged, which is not currently supported.

---

## 🚀 Installation Tutorial

This extension is not on any official web store. To install it, you need to load it manually as an "unpacked extension."

#### **Step 1: Download the Code**

-   Click the green **`< > Code`** button at the top of this GitHub page.
-   Select **"Download ZIP"**.

![Download ZIP Screenshot](https://i.imgur.com/hWWylf7.png) <!-- This is a generic image, you can leave it -->

#### **Step 2: Unzip the Folder**

-   Find the downloaded ZIP file (e.g., `mal-to-stremio-extension-main.zip`) in your Downloads.
-   Right-click and **"Extract All..."** or **"Unzip"** the contents.
-   Place the resulting folder somewhere permanent on your computer where you won't delete it by accident (e.g., your Documents folder).

#### **Step 3: Load the Extension in Your Browser**

1.  Open your browser and navigate to its extensions management page. The address is slightly different for each browser:
    -   **Brave:** `brave://extensions`
    -   **Chrome:** `chrome://extensions`
    -   **Edge:** `edge://extensions`

2.  In the top-right corner of the extensions page, find the **"Developer mode"** toggle and make sure it is switched **ON**. This will reveal new buttons.

    ![Developer Mode Screenshot](https://i.imgur.com/3QMLJ6g.png) <!-- This is a generic image, you can leave it -->

3.  Click the **"Load unpacked"** button that appeared.

4.  A file browser window will open. Navigate to the folder where you unzipped the project.
5.  Select the **entire folder** (the one that contains `manifest.json`, e.g., `mal-to-stremio-extension-main`) and click "Select Folder."

The "MAL to Stremio" extension will now appear in your list of extensions and is ready to use! Just visit any anime page on MyAnimeList, and the button will appear automatically.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
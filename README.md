# MAL & AniList to Stremio Browser Extension

A powerful browser extension that provides a seamless bridge between discovering anime and watching it. It adds a "Watch on Stremio" button directly to **MyAnimeList** and **AniList** pages.

When clicked, the button instantly launches the Stremio desktop app and takes you directly to that anime's detail page, saving you from having to search for it manually.

<img width="853" height="526" alt="Screenshot 2025-08-24 221512" src="https://github.com/user-attachments/assets/81ace0be-f133-4370-b6fa-4e75b9165979" />
<img width="834" height="537" alt="Screenshot 2025-08-24 221548" src="https://github.com/user-attachments/assets/06e05d03-d180-49c7-863d-7d1e98517b2f" />
<img width="842" height="642" alt="Screenshot 2025-08-24 221653" src="https://github.com/user-attachments/assets/08dadb9a-65f7-4484-8db6-f2e9d011f350" />


---

## ⚠️ Important: Stremio Version Limitation

This extension is confirmed to work perfectly with the stable **Stremio v4.4**.

Due to a bug in the beta version of Stremio, this extension **does not currently work with Stremio v5 Beta**. The v5 Beta fails to correctly handle the external `stremio://` links that this extension generates. A bug report has been filed, and this notice will be removed if the issue is resolved in a future Stremio update.

---

## ✨ Features

-   **Multi-Site Support:** Works on both **MyAnimeList** and **AniList**.
-   **Full Integration:** Adds a large, clear "Watch on Stremio" button to anime detail pages.
-   **Quick-Launch Icons:** Adds small, convenient Stremio icons to list pages on MyAnimeList, including:
    -   **Top Anime** page
    <img width="848" height="797" alt="Screenshot 2025-08-24 221712" src="https://github.com/user-attachments/assets/22684585-5747-47a4-a845-36f7dd78506e" />

-   **Adaptive Design:** The button's style automatically changes to match the look and feel of the site you're on, with a "glassmorphism" design for MAL and a native dark theme for AniList.
-   **Smart ID Resolution:** Uses a reliable API to find the correct Kitsu ID for any anime, ensuring broad compatibility with Stremio's anime addons.

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

<img width="1690" height="342" alt="Screenshot 2025-08-24 080349" src="https://github.com/user-attachments/assets/939f6e07-c1d5-42d4-96b5-6c4e6e3d2fd8" />

3.  Click the **"Load unpacked"** button that appeared.

4.  A file browser window will open. Navigate to the folder where you unzipped the project.
5.  Select the **entire folder** (the one that contains `manifest.json`, e.g., `mal-to-stremio-extension-main`) and click "Select Folder."

The "MAL & AniList to Stremio" extension will now appear in your list of extensions and is ready to use! Just visit any of the supported pages, and the button will appear automatically.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

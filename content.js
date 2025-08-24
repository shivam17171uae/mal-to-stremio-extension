// Universal Version v4.5.2 - Perfected List Icon Spacing
function main() {
  console.log("Stremio Universal Extension: Starting...");

  const hostname = window.location.hostname;
  const pathname = window.location.pathname;

  if (hostname === "myanimelist.net") {
    if (pathname.startsWith("/anime/")) {
      handleMalDetailPage();
    } else if (pathname.startsWith("/topanime.php")) {
      handleMalListPage();
    }
  } else if (hostname === "anilist.co") {
    handleAniList();
  }
}

// ===================================================================
// --- MyAnimeList - DETAIL PAGE Handler ---
// ===================================================================
function handleMalDetailPage() {
  const observer = new MutationObserver((mutations, obs) => {
    const imageContainer = document.querySelector('div.leftside > div:first-child'); 
    if (imageContainer) {
      if (!document.getElementById('stremio-button-detail')) {
        createLargeStremioButton(imageContainer, "myanimelist");
      }
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
}

// ===================================================================
// --- MyAnimeList - TOP ANIME LIST PAGE Handler ---
// ===================================================================
function handleMalListPage() {
  const observer = new MutationObserver((mutations, obs) => {
    const rows = document.querySelectorAll('tr.ranking-list:not(.stremio-processed)');
    if (rows.length > 0) {
      rows.forEach(row => {
        row.classList.add('stremio-processed');
        const titleLink = row.querySelector('.detail h3 a');
        const targetElement = row.querySelector('.watch-pv') || titleLink;

        if (titleLink && targetElement) {
          const malId = titleLink.href.split('/')[4];
          createSmallStremioButton(targetElement, "myanimelist", malId);
        }
      });
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
}


// ===================================================================
// --- AniList Handler ---
// ===================================================================
function handleAniList() {
  const observer = new MutationObserver((mutations, obs) => {
    const container = document.querySelector('.actions');
    if (container) {
      if (!document.getElementById('stremio-button-detail')) {
        createLargeStremioButton(container, "anilist");
      }
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
}

// ===================================================================
// --- Button Creation Functions ---
// ===================================================================
function createLargeStremioButton(targetNode, site) {
  const stremioButton = document.createElement('a');
  stremioButton.id = 'stremio-button-detail';
  stremioButton.style.display = 'flex';
  stremioButton.style.alignItems = 'center';
  stremioButton.style.justifyContent = 'center';
  stremioButton.style.textDecoration = 'none';
  stremioButton.style.cursor = 'pointer';
  stremioButton.style.fontWeight = '600';
  stremioButton.href = '#';
  stremioButton.title = 'Searching...';

  if (site === "myanimelist") applyMalStyle(stremioButton);
  else if (site === "anilist") applyAnilistStyle(stremioButton);
  
  const iconUrl = chrome.runtime.getURL('icon48.png');
  stremioButton.innerHTML = `<img src="${iconUrl}" style="height: 18px; width: 18px; margin-right: 8px;"><span class="stremio-button-text">Watch on Stremio</span>`;
  
  if (site === "anilist") targetNode.prepend(stremioButton);
  else targetNode.insertAdjacentElement('afterend', stremioButton);

  const buttonTextSpan = stremioButton.querySelector('.stremio-button-text');
  let siteId = window.location.pathname.split('/')[2];
  fetchAndSetLink(stremioButton, buttonTextSpan, site, siteId);
}

function createSmallStremioButton(targetNode, site, siteId) {
    // --- THIS IS THE SPACING FIX ---
    // Create a wrapper div to mimic MAL's structure
    const wrapper = document.createElement('div');
    wrapper.style.display = 'inline-block';
    wrapper.style.marginLeft = '4px';
    wrapper.style.verticalAlign = 'middle';
    
    const stremioButton = document.createElement('a');
    stremioButton.id = `stremio-button-list-${siteId}`;
    stremioButton.style.display = 'inline-flex';
    stremioButton.style.alignItems = 'center';
    stremioButton.style.cursor = 'pointer';
    stremioButton.style.opacity = '0.7';
    stremioButton.style.transition = 'opacity 0.2s ease';
    stremioButton.addEventListener('mouseover', () => stremioButton.style.opacity = '1');
    stremioButton.addEventListener('mouseout', () => stremioButton.style.opacity = '0.7');

    const iconUrl = chrome.runtime.getURL('icon48.png');
    stremioButton.innerHTML = `<img src="${iconUrl}" style="height: 16px; width: 16px;">`;
    
    // Add the button inside the wrapper, and the wrapper to the page
    wrapper.appendChild(stremioButton);
    targetNode.insertAdjacentElement('afterend', wrapper);
    
    fetchAndSetLink(stremioButton, null, site, siteId);
}

// --- Shared API Fetch Logic ---
function fetchAndSetLink(button, textSpan, site, siteId) {
  if (!siteId) {
    if(textSpan) textSpan.textContent = 'Error: No ID found';
    return;
  }
  
  fetch(`https://relations.yuna.moe/api/ids?source=${site}&id=${siteId}`)
    .then(response => response.json())
    .then(data => {
      const kitsuId = data.kitsu;
      if (!kitsuId) { throw new Error('Kitsu ID not found.'); }
      
      button.href = `stremio://detail/anime/kitsu:${kitsuId}`;
      button.title = `Watch on Stremio (Kitsu ID: ${kitsuId})`;
    })
    .catch(error => {
      button.title = error.message;
      if (textSpan) {
        textSpan.textContent = '❌ Not Found';
        if (site === 'anilist') button.style.backgroundColor = 'rgb(229, 72, 72)';
        else button.style.backgroundColor = 'rgba(211, 47, 47, 0.7)';
      } else {
        button.style.filter = 'grayscale(1)';
      }
    });
}

// ===================================================================
// --- Styling Functions ---
// ===================================================================
function applyMalStyle(button) {
  button.style.padding = '6px 16px';
  button.style.fontSize = '13px';
  button.style.marginTop = '8px';
  button.style.marginBottom = '8px';
  button.style.width = '225px';
  button.style.boxSizing = 'border-box';
  button.style.borderRadius = '8px';
  button.style.color = 'rgba(255, 255, 255, 0.9)';
  button.style.backgroundColor = 'rgba(45, 45, 45, 0.5)';
  button.style.backdropFilter = 'blur(10px)';
  button.style.webkitBackdropFilter = 'blur(10px)';
  button.style.border = '1px solid rgba(255, 255, 255, 0.1)';
  button.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
  button.style.transition = 'background-color 0.2s ease-in-out';
  button.addEventListener('mouseover', () => button.style.backgroundColor = 'rgba(60, 60, 60, 0.7)');
  button.addEventListener('mouseout', () => button.style.backgroundColor = 'rgba(45, 45, 45, 0.5)');
}

function applyAnilistStyle(button) {
    button.style.gridColumn = '1 / -1';
    button.style.padding = '8px 0';
    button.style.borderRadius = '8px';
    button.style.fontSize = '14px';
    button.style.color = 'rgb(194, 203, 212)';
    button.style.backgroundColor = 'rgba(42, 51, 62, 0.8)';
    button.style.transition = 'background-color 0.2s ease-in-out';
    button.addEventListener('mouseover', () => button.style.backgroundColor = 'rgba(51, 62, 75, 0.9)');
    button.addEventListener('mouseout', () => button.style.backgroundColor = 'rgba(42, 51, 62, 0.8)');
}

// --- Run the main function when the script starts ---
main();
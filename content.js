// Barebones Version - Tries only the Kitsu /anime link.
// Final version with polished "Glass Elegant" style and perfect layout correction.
function addStremioButton() {
  // Wait for the page actions block to be ready.
  const observer = new MutationObserver((mutations, obs) => {
    const userActionsBlock = document.querySelector('.user-status-block');
    if (userActionsBlock) {
      // Once it's ready, run the main logic and stop waiting.
      main(userActionsBlock);
      obs.disconnect();
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
}

function main(targetNode) {
  console.log("MAL-to-Stremio (Layout Fixed): Starting...");

  // Prevent adding a duplicate button.
  if (document.getElementById('stremio-button')) return;

  const stremioButton = document.createElement('a');
  stremioButton.id = 'stremio-button';

  // --- Style the Button Container (the <a> tag) ---
  stremioButton.style.display = 'flex';
  stremioButton.style.alignItems = 'center';
  stremioButton.style.justifyContent = 'center';
  stremioButton.style.padding = '12px 16px';
  stremioButton.style.marginTop = '8px';
  stremioButton.style.borderRadius = '12px';
  stremioButton.style.cursor = 'pointer';
  stremioButton.style.textDecoration = 'none';
  stremioButton.style.color = 'rgba(255, 255, 255, 0.9)';
  stremioButton.style.fontWeight = '600';
  stremioButton.style.fontSize = '15px';
  
  // --- The Core Glass Effect ---
  stremioButton.style.backgroundColor = 'rgba(45, 45, 45, 0.5)';
  stremioButton.style.backdropFilter = 'blur(10px)';
  stremioButton.style.webkitBackdropFilter = 'blur(10px)';
  stremioButton.style.border = '1px solid rgba(255, 255, 255, 0.1)';
  stremioButton.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
  
  // ===================================================================
  // --- START OF NEW LAYOUT FIX ---

  // --- Layout Correction ---
  // Instead of negative margins, we set the width to 100% of its container.
  // 'box-sizing: border-box' ensures padding is included in the width, not added to it.
  stremioButton.style.width = '100%';
  stremioButton.style.boxSizing = 'border-box';

  // --- Hover Effect ---
  stremioButton.style.transition = 'background-color 0.2s ease-in-out';
  stremioButton.addEventListener('mouseover', () => {
    stremioButton.style.backgroundColor = 'rgba(60, 60, 60, 0.7)';
  });
  stremioButton.addEventListener('mouseout', () => {
    stremioButton.style.backgroundColor = 'rgba(45, 45, 45, 0.5)';
  });

  // --- END OF NEW LAYOUT FIX ---
  // ===================================================================

  stremioButton.href = '#';
  stremioButton.title = 'Searching...';

  const iconUrl = chrome.runtime.getURL('stremio.svg');
  
  stremioButton.innerHTML = `
      <img src="${iconUrl}" style="height: 20px; width: 20px; margin-right: 10px; vertical-align: middle;">
      <span class="stremio-button-text">Watch on Stremio</span>
  `;
  
  targetNode.appendChild(stremioButton);

  const buttonTextSpan = stremioButton.querySelector('.stremio-button-text');

  // Get MAL ID from the URL.
  const malId = window.location.pathname.split('/')[2];
  if (!malId) {
    buttonTextSpan.textContent = 'Error: No MAL ID';
    return;
  }
  
  // Fetch from the reliable ID-mapping API.
  fetch(`https://relations.yuna.moe/api/ids?source=myanimelist&id=${malId}`)
    .then(response => response.json())
    .then(data => {
      const kitsuId = data.kitsu;
      if (!kitsuId) {
        throw new Error('Kitsu ID not found.');
      }
      
      stremioButton.href = `stremio://detail/anime/kitsu:${kitsuId}`;
      stremioButton.title = `Open in Stremio (Kitsu ID: ${kitsuId})`;
    })
    .catch(error => {
      buttonTextSpan.textContent = '❌ Not Found';
      stremioButton.style.backgroundColor = 'rgba(211, 47, 47, 0.7)';
      stremioButton.title = error.message;
    });
}

addStremioButton();
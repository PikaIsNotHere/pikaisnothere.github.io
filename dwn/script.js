const trailerReleaseDate = new Date('2024-12-13T01:20:00Z');  // Trailer upload time in UTC
let displayMode = localStorage.getItem('displayMode') || 'weeks'; // Persist mode (weeks or allDays)
let pMode = localStorage.getItem('pMode') === 'true'; // Persist P Mode state

function updateTimer() {
    const now = new Date();
    const timeDifference = now - trailerReleaseDate;

    // Calculate the different time units
    const weeks = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 7));
    const days = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    if (displayMode === 'weeks') {
        let weeksElement = document.getElementById('weeks');

        // If the weeks element doesn't exist, create it instantly
        if (!weeksElement) {
            weeksElement = document.createElement('span');
            weeksElement.id = 'weeks';
            document.getElementById('timer').insertBefore(weeksElement, document.getElementById('days'));
        }

        // Add 'visible' class for the transition effect
        weeksElement.textContent = `${weeks} weeks`;
        weeksElement.classList.add('visible');

        // Update the days display
        document.getElementById('days').textContent = `${days} days`;
    } else {
        // If in "Days Only" mode, remove the weeks element
        const weeksElement = document.getElementById('weeks');
        if (weeksElement) {
            weeksElement.remove();
        }

        // Update the total days display
        const totalDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        document.getElementById('days').textContent = `${totalDays} days`;
    }

    // Update other time units (hours, minutes, seconds)
    document.getElementById('hours').textContent = `${hours} hours`;
    document.getElementById('minutes').textContent = `${minutes} minutes`;
    document.getElementById('seconds').textContent = `${seconds} seconds`;

    // Special "Nice" change after 69 days
    if (days === 69) {
        document.getElementById('header').textContent = "Nice.";
    }

    // Add animation for timer updates
    const timerElements = document.querySelectorAll('#timer span');
    timerElements.forEach(element => {
        element.classList.add('update-animation');
        setTimeout(() => {
            element.classList.remove('update-animation');
        }, 500);
    });

    // Update every second
    setTimeout(updateTimer, 1000);
}

// Toggle "P Mode" background
function togglePMode() {
    if (pMode) {
        document.body.style.backgroundImage = "url('https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/03/elden-ring-fia-hug.jpg')";
        document.body.style.transition = 'background-image 0.5s ease-in-out';
    } else {
        document.body.style.backgroundImage = '';
        document.body.style.transition = 'background-image 0.5s ease-in-out';
    }
}

// Show settings modal
function showSettings() {
    const settingsModal = document.getElementById('settingsModal');
    settingsModal.classList.add('show'); // Show the modal
    document.getElementById('daysOnly').checked = displayMode === 'allDays'; // Set display mode checkbox
    document.getElementById('pMode').checked = pMode; // Set P Mode checkbox
}

// Close settings modal
function closeSettings() {
    const settingsModal = document.getElementById('settingsModal');
    settingsModal.classList.remove('show'); // Hide the modal
}

// Save settings based on checkbox states
function saveSettings() {
    // Get the current state of checkboxes
    displayMode = document.getElementById('daysOnly').checked ? 'allDays' : 'weeks.visable';
    pMode = document.getElementById('pMode').checked;
    
    // Persist settings in localStorage
    localStorage.setItem('displayMode', displayMode);
    localStorage.setItem('pMode', pMode.toString());

    // Apply changes based on settings
    if (pMode) {
        togglePMode();
    } else {
        togglePMode(); // Ensure P Mode is disabled if unchecked
    }

    updateTimer(); // Refresh the timer to apply new display mode
    closeSettings(); // Close settings modal
}

// Event listeners for the checkboxes inside the settings modal
document.getElementById('daysOnly').addEventListener('change', saveSettings);  // Save settings when Days Only checkbox changes
document.getElementById('pMode').addEventListener('change', saveSettings);      // Save settings when P Mode checkbox changes

// Event listeners for the settings modal buttons
document.getElementById('settings').addEventListener('click', showSettings);
document.getElementById('closeModal').addEventListener('click', closeSettings);
document.getElementById('creditsButton').addEventListener('click', () => {
    alert("Credits: P for P mode, & Game Rant for the image!");
});

// Initialize the timer and settings
updateTimer();

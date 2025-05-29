function updateTimer() {
    const now = new Date();
    const stopTime = new Date('2025-05-29T09:00:00Z'); // 5:00 AM EST = 09:00 UTC

    // If current time is after stop time, freeze the timer
    const effectiveNow = now > stopTime ? stopTime : now;
    const timeDifference = effectiveNow - trailerReleaseDate;

    // Calculate the different time units
    const weeks = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 7));
    const days = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    if (displayMode === 'weeks') {
        let weeksElement = document.getElementById('weeks');

        if (!weeksElement) {
            weeksElement = document.createElement('span');
            weeksElement.id = 'weeks';
            document.getElementById('timer').insertBefore(weeksElement, document.getElementById('days'));
        }

        weeksElement.textContent = `${weeks} weeks`;
        weeksElement.classList.add('visible');
        document.getElementById('days').textContent = `${days} days`;
    } else {
        const weeksElement = document.getElementById('weeks');
        if (weeksElement) {
            weeksElement.remove();
        }

        const totalDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        document.getElementById('days').textContent = `${totalDays} days`;
    }

    document.getElementById('hours').textContent = `${hours} hours`;
    document.getElementById('minutes').textContent = `${minutes} minutes`;
    document.getElementById('seconds').textContent = `${seconds} seconds`;

    if (days === 69) {
        document.getElementById('header').textContent = "Nice.";
    }

    // Only keep updating if it's before the stop time
    if (now < stopTime) {
        setTimeout(updateTimer, 1000);
    }
}

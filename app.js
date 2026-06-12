(function () {
  // Start date: August 31, 2014 at 08:00:00 AM (local time)
  // Month is 0-indexed, so 7 is August
  const startDate = new Date(2014, 7, 31, 8, 0, 0);

  function getDuration(start, end) {
    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();
    let hours = end.getHours() - start.getHours();
    let minutes = end.getMinutes() - start.getMinutes();
    let seconds = end.getSeconds() - start.getSeconds();

    // Adjust negative seconds
    if (seconds < 0) {
      seconds += 60;
      minutes--;
    }
    // Adjust negative minutes
    if (minutes < 0) {
      minutes += 60;
      hours--;
    }
    // Adjust negative hours
    if (hours < 0) {
      hours += 24;
      days--;
    }
    // Adjust negative days
    if (days < 0) {
      // Get the number of days in the previous month of the end date
      const prevMonth = new Date(end.getFullYear(), end.getMonth(), 0);
      days += prevMonth.getDate();
      months--;
    }
    // Adjust negative months
    if (months < 0) {
      months += 12;
      years--;
    }

    return { years, months, days, hours, minutes, seconds };
  }

  function updateTimer() {
    const now = new Date();
    if (now < startDate) return;

    const duration = getDuration(startDate, now);

    let parts = [];

    // Years (always shown if years > 0)
    if (duration.years > 0) {
      parts.push(`${duration.years} year${duration.years !== 1 ? 's' : ''}`);
    }

    // Months (shown only if > 0)
    if (duration.months > 0) {
      parts.push(`${duration.months} month${duration.months !== 1 ? 's' : ''}`);
    }

    // Days (shown only if > 0)
    if (duration.days > 0) {
      parts.push(`${duration.days} day${duration.days !== 1 ? 's' : ''}`);
    }

    // Hours (always shown)
    parts.push(`${duration.hours} hour${duration.hours !== 1 ? 's' : ''}`);

    const line1Text = parts.join(' ');
    const minutesText = `${duration.minutes} minute${duration.minutes !== 1 ? 's' : ''}`;
    const secondsText = `${duration.seconds} second${duration.seconds !== 1 ? 's' : ''}`;

    const displayLine1 = document.getElementById('timer-line1');
    const displayLine2 = document.getElementById('timer-line2');
    
    if (displayLine1 && displayLine2) {
      displayLine1.textContent = line1Text;
      displayLine2.textContent = `${minutesText} and ${secondsText}`;
    }
  }

  // Initial update
  updateTimer();

  // Keep updating every second
  setInterval(updateTimer, 1000);
})();

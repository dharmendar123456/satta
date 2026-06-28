document.addEventListener('DOMContentLoaded', () => {
    const clockElement = document.getElementById('clock');
    
    // Function to update the clock
    function updateClock() {
        const now = new Date();
        const options = { 
            weekday: 'short', 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit',
            timeZoneName: 'short'
        };
        const timeString = now.toLocaleString('en-IN', options);
        clockElement.innerHTML = `Updated: <time datetime="${now.toISOString()}">${timeString}</time>`;
    }
    
    // Update immediately and then every second
    updateClock();
    setInterval(updateClock, 1000);
});

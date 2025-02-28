document.addEventListener("DOMContentLoaded", function() {
    console.log("script.js loaded and DOMContentLoaded fired");

    const events = [
        { title: "NA", date: "2025-01-10", abstract: "Abstract: NA", room: "Room 101", time: "2:00 PM" },
        { title: "NA", date: "2025-02-05", abstract: "Abstract: NA", room: "Room 202", time: "3:30 PM" },
        { title: "TBA", date: "2025-03-12", abstract: "Abstract: NA", room: "Room 303", time: "10:00 AM" },
        { title: "TBA", date: "2025-04-20", abstract: "Abstract: NA", room: "Room 404", time: "1:00 PM" },
        { title: "TBA", date: "2025-05-15", abstract: "Abstract: NA", room: "Room 505", time: "4:00 PM" },
        { title: "TBA", date: "2024-11-30", abstract: "Abstract: NA", room: "Room 606", time: "11:00 AM" },
        { title: "TBA", date: "2024-10-25", abstract: "Abstract: NA", room: "Room 707", time: "2:30 PM" }
    ];

    const now = new Date();
    const pastEvents = events.filter(event => new Date(event.date) < now).slice(-2);
    const futureEvents = events.filter(event => new Date(event.date) >= now).slice(0, 3);

    function renderEvents(eventList, elementId) {
        console.log(`Rendering events for ${elementId}`);
        const ul = document.getElementById(elementId);
        if (!ul) {
            console.error(`Element with ID '${elementId}' not found`);
            alert(`Error: Could not find element with ID '${elementId}'. Check your HTML or script setup.`);
            return;
        }
        ul.innerHTML = ""; // Clear existing content
        eventList.forEach((event, index) => {
            const li = document.createElement("li");
            const abstractId = `${elementId}-abstract${index + 1}`;
            li.textContent = `${event.title} - ${event.date} - ${event.time} - ${event.room}`;
            const abstractDiv = document.createElement("div");
            abstractDiv.id = abstractId;
            abstractDiv.className = "abstract";
            abstractDiv.textContent = event.abstract;
            li.appendChild(abstractDiv);
            ul.appendChild(li);

            li.addEventListener("click", function() {
                toggleAbstract(abstractId);
            });
        });
        console.log(`${eventList.length} events rendered for ${elementId}`);
    }

    // Render events for index.html
    renderEvents(futureEvents, "future-events");
    renderEvents(pastEvents, "past-events-list");

    // Render events for all-events.html
    renderEvents(events, "all-events-list");
});

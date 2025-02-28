document.addEventListener("DOMContentLoaded", function() {
    console.log("script.js loaded and DOMContentLoaded fired");

    const events = [
        { title: "NA", date: "2025-03-03", abstract: "Abstract: NA", room: "TBA", time: "4:00 PM" },
        { title: "NA", date: "2025-03-10", abstract: "Abstract: NA", room: "TBA", time: "4:00 PM" },
        { title: "NA", date: "2025-03-24", abstract: "Abstract: NA", room: "TBA", time: "4:00 PM" },
        { title: "NA", date: "2025-03-31", abstract: "Abstract: NA", room: "TBA", time: "4:00 PM" },
    ];

    const now = new Date();
    const pastEvents = events.filter(event => new Date(event.date) < now).slice(-2);
    const futureEvents = events.filter(event => new Date(event.date) >= now).slice(0, 3);

    function renderEvents(eventList, elementId) {
        console.log(`Rendering events for ${elementId}`);
        const ul = document.getElementById(elementId);
        if (!ul) {
            console.warn(`Element with ID '${elementId}' not found on this page`);
            return; // Silently skip if the element doesn’t exist
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

    // Only render if the element exists on the page
    if (document.getElementById("future-events")) {
        renderEvents(futureEvents, "future-events");
    }
    if (document.getElementById("past-events-list")) {
        renderEvents(pastEvents, "past-events-list");
    }
    if (document.getElementById("all-events-list")) {
        renderEvents(events, "all-events-list");
    }
});

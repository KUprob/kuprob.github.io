document.addEventListener("DOMContentLoaded", function() {
    console.log("script.js loaded and DOMContentLoaded fired");

    const events = [        
        { title: "Zhipeng Liu", date: "2026-01-30", abstract: "KPZ fixed point with a general initial condition of compact support", room: "Zoom meeting", time: "9:00 AM" },
        { title: "Zhipeng Liu", date: "2026-02-06", abstract: "KPZ fixed point with a general initial condition of compact support, part 2", room: "Zoom meeting", time: "9:00 AM" },
        { title: "TBA", date: "2026-02-13", abstract: "NA", room: "Zoom meeting", time: "9:00 AM" },
        { title: "TBA", date: "2026-02-20", abstract: "NA", room: "Zoom meeting", time: "9:00 AM" },
        { title: "TBA", date: "2026-02-27", abstract: "NA", room: "Zoom meeting", time: "9:00 AM" },
        { title: "TBA", date: "2026-03-06", abstract: "NA", room: "Zoom meeting", time: "9:00 AM" },
        { title: "TBA", date: "2026-03-13", abstract: "NA", room: "Zoom meeting", time: "9:00 AM" },
        { title: "TBA", date: "2026-03-20", abstract: "NA", room: "Zoom meeting", time: "9:00 AM" },
        { title: "TBA", date: "2026-03-27", abstract: "NA", room: "Zoom meeting", time: "9:00 AM" },
    ];

    const now = new Date();
    console.log("Current time:", now); // Debug: Check current time

    // Parse event date and time together
    const pastEvents = events.filter(event => {
        const eventDateTime = new Date(`${event.date} ${event.time}`);
        console.log(`Event: ${event.title}, DateTime: ${eventDateTime}`); // Debug: Check event time
        return eventDateTime < now;
    }).slice(-2);

    const futureEvents = events.filter(event => {
        const eventDateTime = new Date(`${event.date} ${event.time}`);
        return eventDateTime >= now;
    }).slice(0, 3);

    function renderEvents(eventList, elementId) {
        console.log(`Rendering events for ${elementId}`);
        const ul = document.getElementById(elementId);
        if (!ul) {
            console.warn(`Element with ID '${elementId}' not found on this page`);
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

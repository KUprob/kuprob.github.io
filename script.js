document.addEventListener("DOMContentLoaded", function() {
    const events = [
        { title: "NA", date: "2025-01-10", abstract: "Abstract: NA", room: "Room 101" },
        { title: "NA", date: "2025-02-05", abstract: "Abstract: NA", room: "Room 202" },
        { title: "TBA", date: "2025-03-12", abstract: "Abstract: NA", room: "Room 303" },
        { title: "TBA", date: "2025-04-20", abstract: "Abstract: NA", room: "Room 404" },
        { title: "TBA", date: "2025-05-15", abstract: "Abstract: NA", room: "Room 505" },
        { title: "TBA", date: "2024-11-30", abstract: "Abstract: NA", room: "Room 606" },
        { title: "TBA", date: "2024-10-25", abstract: "Abstract: NA", room: "Room 707" }
    ];

    const now = new Date();
    const pastEvents = events.filter(event => new Date(event.date) < now).slice(-2);
    const futureEvents = events.filter(event => new Date(event.date) >= now).slice(0, 3);

    function renderEvents(eventList, elementId) {
        const ul = document.getElementById(elementId);
        ul.innerHTML = "";
        eventList.forEach((event, index) => {
            const li = document.createElement("li");
            const abstractId = `${elementId}-abstract${index + 1}`;
            li.textContent = `${event.title} - ${event.date} - ${event.room}`;
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
    }

    renderEvents(futureEvents, "future-events");
    renderEvents(pastEvents, "past-events-list");
});

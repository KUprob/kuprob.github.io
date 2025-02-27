document.addEventListener("DOMContentLoaded", function() {
    const events = [
        { title: "Seminar on Probability", date: "2025-01-10" },
        { title: "AI in Mathematics", date: "2025-02-05" },
        { title: "Quantum Computing Basics", date: "2025-03-12" },
        { title: "Machine Learning Advances", date: "2025-04-20" },
        { title: "Stochastic Processes", date: "2025-05-15" },
        { title: "Graph Theory Seminar", date: "2024-11-30" },
        { title: "Topology and Geometry", date: "2024-10-25" }
    ];

    const now = new Date();
    const pastEvents = events.filter(event => new Date(event.date) < now).slice(-2);
    const futureEvents = events.filter(event => new Date(event.date) >= now).slice(0, 3);

    function renderEvents(eventList, elementId) {
        const ul = document.getElementById(elementId);
        ul.innerHTML = "";
        eventList.forEach(event => {
            const li = document.createElement("li");
            li.textContent = `${event.title} - ${event.date}`;
            ul.appendChild(li);
        });
    }

    renderEvents(futureEvents, "future-events");
    renderEvents(pastEvents, "past-events-list");
});

document.addEventListener("DOMContentLoaded", function() {
    const events = [
        { title: "Seminar on Probability", date: "2025-01-10", abstract: "Abstract: Discussion on advanced probability theory.", room: "Room 101" },
        { title: "AI in Mathematics", date: "2025-02-05", abstract: "Abstract: Exploring AI applications in mathematics.", room: "Room 202" },
        { title: "Quantum Computing Basics", date: "2025-03-12", abstract: "Abstract: Introduction to quantum computing.", room: "Room 303" },
        { title: "Machine Learning Advances", date: "2025-04-20", abstract: "Abstract: Latest trends in machine learning.", room: "Room 404" },
        { title: "Stochastic Processes", date: "2025-05-15", abstract: "Abstract: Analyzing stochastic processes.", room: "Room 505" },
        { title: "Graph Theory Seminar", date: "2024-11-30", abstract: "Abstract: Advances in graph theory.", room: "Room 606" },
        { title: "Topology and Geometry", date: "2024-10-25", abstract: "Abstract: Applications of topology and geometry.", room: "Room 707" }
    ];

    const now = new Date();
    const pastEvents = events.filter(event => new Date(event.date) < now).slice(-2);
    const futureEvents = events.filter(event => new Date(event.date) >= now).slice(0, 3);

    function renderEvents(eventList, elementId) {
        const ul = document.getElementById(elementId);
        ul.innerHTML = "";
        eventList.forEach((event, index) => {
            const li = document.createElement("li");
            const abstractId = `${elementId}-abstract${index + 1}`; // Unique ID for each abstract
            li.textContent = `${event.title} - ${event.date} - ${event.room}`;
            li.setAttribute("onclick", `toggleAbstract('${abstractId}')`);
            const abstractDiv = document.createElement("div");
            abstractDiv.id = abstractId;
            abstractDiv.className = "abstract";
            abstractDiv.textContent = event.abstract;
            li.appendChild(abstractDiv);
            ul.appendChild(li);
        });
    }

    renderEvents(futureEvents, "future-events");
    renderEvents(pastEvents, "past-events-list");
});

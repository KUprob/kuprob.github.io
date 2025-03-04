document.addEventListener("DOMContentLoaded", function() {
    console.log("script.js loaded and DOMContentLoaded fired");

    const events = [
        { title: "Planning", date: "2025-03-03", abstract: "We will make the plan for the semester.", room: "Snow 256", time: "4:00 PM" },
        { title: "Zhipeng Liu: An upper tail field of the KPZ fixed point", date: "2025-03-10", abstract: "Abstract: The KPZ fixed point is a (1+1)-dimensional space-time random field conjectured to be the universal limit for models within the Kardar-Parisi-Zhang (KPZ) universality class. We consider the KPZ fixed point with the narrow-wedge initial condition, conditioning on a large value at a specific point. By zooming in the neighborhood of this high point appropriately, we obtain a limiting random field, which we call an upper tail field of the KPZ fixed point. Different from the KPZ fixed point, where the time parameter has to be nonnegative, the upper tail field is defined in the full 2-dimensional space. Especially, if we zoom out the upper tail field appropriately, it behaves like a Brownian-type field in the negative time regime, and the KPZ fixed point in the positive time regime. One main ingredient of the proof is an upper tail estimate of the joint tail probability functions of the KPZ fixed point near the given point, which generalizes the well known one-point upper tail estimate of the GUE Tracy-Widom distribution. This is a joint work with Ray Zhang.", room: "Snow 256", time: "4:00 PM" },
        { title: "NA", date: "2025-03-24", abstract: "Abstract: NA", room: "Snow 256", time: "4:00 PM" },
        { title: "NA", date: "2025-03-31", abstract: "Abstract: NA", room: "Snow 256", time: "4:00 PM" },
        { title: "NA", date: "2025-04-07", abstract: "Abstract: NA", room: "Snow 256", time: "4:00 PM" },
        { title: "NA", date: "2025-04-14", abstract: "Abstract: NA", room: "Snow 256", time: "4:00 PM" },
        { title: "NA", date: "2025-04-21", abstract: "Abstract: NA", room: "Snow 256", time: "4:00 PM" },
        { title: "NA", date: "2025-04-28", abstract: "Abstract: NA", room: "Snow 256", time: "4:00 PM" },
        { title: "NA", date: "2025-05-05", abstract: "Abstract: NA", room: "Snow 256", time: "4:00 PM" },
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

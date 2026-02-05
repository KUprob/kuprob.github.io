document.addEventListener("DOMContentLoaded", function () {
  const events = [
    { title: "Zhipeng Liu", date: "2026-01-30", abstract: "KPZ fixed point with a general initial condition of compact support (Part 1)", room: "Zoom meeting" },
    { title: "Zhipeng Liu", date: "2026-02-06", abstract: "KPZ fixed point with a general initial condition of compact support (Part 2)", room: "Zoom meeting" },
    { title: "TBA", date: "2026-02-13", abstract: "NA", room: "Zoom meeting" },
    { title: "TBA", date: "2026-02-20", abstract: "NA", room: "Zoom meeting" },
    { title: "TBA", date: "2026-02-27", abstract: "NA", room: "Zoom meeting" },
    { title: "TBA", date: "2026-03-06", abstract: "NA", room: "Zoom meeting" },
    { title: "TBA", date: "2026-03-13", abstract: "NA", room: "Zoom meeting" },
    { title: "TBA", date: "2026-03-20", abstract: "NA", room: "Zoom meeting" },
    { title: "TBA", date: "2026-03-27", abstract: "NA", room: "Zoom meeting" },
  ];

  // Parse event date safely at local noon (avoids timezone edge cases)
  function parseEventDate(yyyy_mm_dd) {
    return new Date(`${yyyy_mm_dd}T12:00:00`);
  }

  function formatDate(yyyy_mm_dd) {
    const d = parseEventDate(yyyy_mm_dd);
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }

  const now = new Date();

  const pastEvents = events
    .filter(e => parseEventDate(e.date) < now)
    .slice(-2);

  const futureEvents = events
    .filter(e => parseEventDate(e.date) >= now)
    .slice(0, 3);

  function renderEvents(eventList, elementId) {
    const ul = document.getElementById(elementId);
    if (!ul) return;

    ul.innerHTML = "";
    eventList.forEach(event => {
      const li = document.createElement("li");
      li.textContent = `${event.title} - ${formatDate(event.date)} - ${event.abstract}`;
      ul.appendChild(li);
    });
  }

  if (document.getElementById("future-events")) renderEvents(futureEvents, "future-events");
  if (document.getElementById("past-events-list")) renderEvents(pastEvents, "past-events-list");
  if (document.getElementById("all-events-list")) renderEvents(events, "all-events-list");
});


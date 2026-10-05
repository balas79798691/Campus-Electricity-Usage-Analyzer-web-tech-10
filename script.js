let readings = [
    {room:"Computer Lab",date:"2026-09-28",reading:1200},
    {room:"Computer Lab",date:"2026-09-29",reading:1218},
    {room:"Computer Lab",date:"2026-09-30",reading:1242},
    {room:"Seminar Hall",date:"2026-09-28",reading:800},
    {room:"Seminar Hall",date:"2026-09-29",reading:808}
];

const form = document.getElementById("readingForm");

function analyze() {
    const sorted = [...readings].sort((a,b) =>
        a.room.localeCompare(b.room) || a.date.localeCompare(b.date)
    );

    const usages = [];

    for (let i = 1; i < sorted.length; i++) {
        if (sorted[i].room === sorted[i-1].room) {
            const usage = sorted[i].reading - sorted[i-1].reading;
            if (usage >= 0) {
                usages.push({
                    room: sorted[i].room,
                    date: sorted[i].date,
                    usage
                });
            }
        }
    }

    const total = usages.reduce((sum,u) => sum + u.usage, 0);
    const average = usages.length ? total / usages.length : 0;
    const highest = usages.length
        ? usages.reduce((max,u) => u.usage > max.usage ? u : max, usages[0])
        : null;

    document.getElementById("total").textContent = `${total.toFixed(1)} kWh`;
    document.getElementById("average").textContent = `${average.toFixed(1)} kWh`;
    document.getElementById("highest").textContent =
        highest ? `${highest.room} (${highest.usage.toFixed(1)} kWh)` : "—";

    document.getElementById("analysis").innerHTML = usages.length
        ? usages.map(u => {
            const high = u.usage > average * 1.5 && average > 0;
            return `
            <div class="reading">
                <strong>${escapeHTML(u.room)}</strong>
                — ${escapeHTML(u.date)}
                — ${u.usage.toFixed(1)} kWh
                <span class="${high ? "warning" : "normal"}">
                    ${high ? " ⚠ Unusually high usage" : " ✓ Normal range"}
                </span>
            </div>`;
        }).join("")
        : "<p>Add at least two readings for the same room to calculate consumption.</p>";
}

function escapeHTML(value) {
    const div = document.createElement("div");
    div.textContent = value;
    return div.innerHTML;
}

form.addEventListener("submit", e => {
    e.preventDefault();

    readings.push({
        room: document.getElementById("room").value,
        date: document.getElementById("date").value,
        reading: Number(document.getElementById("reading").value)
    });

    form.reset();
    analyze();
});

analyze();

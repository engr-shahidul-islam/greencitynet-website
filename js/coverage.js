document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("coverage-results");
  const search = document.getElementById("area-search");
  const count = document.getElementById("coverage-count");
  if (!list || !search) return;

  // DEMO DATA ONLY: replace sample percentages with verified field-survey/network records before publishing.
  const areas = [
    { name: "Degerchala", icon: "⌂", percent: 85, status: "Priority service zone", detail: "Core enquiry area for residential fiber connections.", services: "Home broadband · Router setup · Technical support", note: "Exact road/building availability and OLT port capacity must be checked." },
    { name: "Degerchala Road", icon: "↗", percent: 75, status: "Network check required", detail: "Residential and small-business connection enquiries.", services: "Home broadband · SME internet · Wi-Fi setup", note: "Availability can vary by building, side of road and fiber route." },
    { name: "Hariken", icon: "⌖", percent: 60, status: "Expansion / verification zone", detail: "Coverage enquiry area for nearby homes and shops.", services: "Home broadband · Business internet", note: "Field team should confirm the nearest distribution point." },
    { name: "Amazing Fashion Ltd. Area", icon: "▦", percent: 55, status: "Business enquiries welcome", detail: "Commercial and staff-residential connectivity enquiries.", services: "SME internet · Corporate enquiry · Wi-Fi solutions", note: "Business links may require a separate technical assessment." },
    { name: "Hanapukur", icon: "⌁", percent: 50, status: "Address confirmation needed", detail: "Local connection enquiries accepted.", services: "Home broadband · Router installation", note: "Ask the team to confirm line reach and available port." },
    { name: "Zajhor", icon: "◇", percent: 45, status: "Address confirmation needed", detail: "Coverage can be reviewed for individual streets and buildings.", services: "Home broadband · Technical support", note: "New line feasibility depends on fiber route and capacity." },
    { name: "Moiran", icon: "✳", percent: 40, status: "Coverage survey recommended", detail: "Submit your exact address for a feasibility check.", services: "Home broadband · Connection enquiry", note: "Availability must be confirmed by the network team." },
    { name: "Hajir Pukur", icon: "⌂", percent: 45, status: "Coverage survey recommended", detail: "Residential coverage enquiries for the surrounding locality.", services: "Home broadband · Wi-Fi setup", note: "The nearest fiber point and installation route require checking." },
    { name: "Gazipur City Corporation", icon: "◎", percent: 35, status: "Selected locations only", detail: "A broader administrative area; availability is not uniform across it.", services: "Home · SME · Corporate enquiries", note: "Do not assume every ward or address is serviceable; request an address check." }
  ];

  function render(query = "") {
    const q = query.trim().toLocaleLowerCase();
    const filtered = areas.filter(area => area.name.toLocaleLowerCase().includes(q));
    if (count) count.textContent = `${filtered.length} ${filtered.length === 1 ? "area" : "areas"} listed`;
    list.innerHTML = filtered.length ? filtered.map((area, index) => {
      const params = new URLSearchParams({ coverage: area.name });
      const safeId = `area-detail-${areas.indexOf(area)}`;
      return `<article class="coverage-area-card">
        <div class="coverage-area-icon" aria-hidden="true">${area.icon}</div>
        <div class="coverage-area-copy"><span class="coverage-area-label">SERVICE AREA</span><h3>${area.name}</h3><p>${area.status}</p>
          <div class="coverage-mini-meter"><div class="coverage-mini-meter-top"><span>Demo coverage indicator</span><strong>${area.percent}%</strong></div><div class="coverage-meter-track" role="img" aria-label="Demo indicator ${area.percent} percent"><span style="width:${area.percent}%"></span></div><small>Sample only · not verified network data</small></div>
        </div>
        <button class="coverage-area-link coverage-details-toggle" type="button" aria-expanded="false" aria-controls="${safeId}" data-detail="${safeId}">Details <span aria-hidden="true">⌄</span></button>
        <div class="coverage-area-details" id="${safeId}" hidden>
          <div class="coverage-detail-heading"><span class="coverage-detail-kicker">AREA PROFILE</span><h4>${area.name}</h4><p>${area.detail}</p></div>
          <div class="coverage-detail-stats"><div><span>Coverage indicator</span><strong>${area.percent}% <small>DEMO</small></strong></div><div><span>Availability</span><strong>Address check</strong></div><div><span>Technology</span><strong>Fiber / FTTH enquiry</strong></div></div>
          <div class="coverage-detail-info"><strong>Services to enquire about</strong><p>${area.services}</p></div>
          <div class="coverage-detail-info"><strong>Network note</strong><p>${area.note}</p></div>
          <a class="btn btn-primary coverage-enquire" href="contact.html?${params.toString()}">Check this area <span aria-hidden="true">→</span></a>
        </div>
      </article>`;
    }).join("") : `<div class="coverage-empty"><strong>No matching area found</strong><p>Try another spelling or contact our team to check your address.</p><a class="btn btn-primary" href="contact.html">Ask About Coverage</a></div>`;

    list.querySelectorAll(".coverage-details-toggle").forEach(button => {
      button.addEventListener("click", () => {
        const panel = document.getElementById(button.dataset.detail);
        const willOpen = button.getAttribute("aria-expanded") !== "true";
        button.setAttribute("aria-expanded", String(willOpen));
        button.innerHTML = willOpen ? 'Hide <span aria-hidden="true">⌃</span>' : 'Details <span aria-hidden="true">⌄</span>';
        panel.hidden = !willOpen;
        button.closest(".coverage-area-card").classList.toggle("is-expanded", willOpen);
      });
    });
  }

  search.addEventListener("input", () => render(search.value));
  render();
});

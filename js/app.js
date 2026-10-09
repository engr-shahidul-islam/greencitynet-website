
document.addEventListener("DOMContentLoaded",()=>{
  const header=document.querySelector(".site-header");
  const menu=document.querySelector(".menu-btn"), links=document.querySelector(".nav-links");
  if(menu) menu.addEventListener("click",()=>links.classList.toggle("open"));
  window.addEventListener("scroll",()=>header?.classList.toggle("scrolled",scrollY>30));
  const path=location.pathname.split("/").filter(Boolean).pop()||"index.html";
  document.querySelectorAll(".nav-links a").forEach(a=>{if(a.getAttribute("href")?.includes(path))a.classList.add("active")});
  const year=document.querySelector("#year"); if(year) year.textContent=new Date().getFullYear();

  const oneRate=document.querySelector("#one-country-packages");
  if(oneRate && Array.isArray(GCN.oneCountryPackages)){
    oneRate.innerHTML=GCN.oneCountryPackages.map(x=>`<article class="card package one-rate-card"><span class="eyebrow">ONE COUNTRY · ONE RATE</span><h3>${x.name}</h3><div class="speed">${x.speed}</div><div class="price">${x.price}<small>/month</small></div><ul class="feature-list">${x.features.map(f=>`<li>${f}</li>`).join("")}</ul><a class="btn btn-dark" href="contact.html">Get Connected</a></article>`).join("");
  }

  const pkg=document.querySelector("#packages");
  if(pkg){
    const isHomePage = path === "index.html";
    const render=(cat="All")=>{
      let plans = GCN.packages.filter(x=>cat==="All"||x.category===cat);
      // Homepage shows a short featured preview; the Packages page shows the full catalogue.
      if (isHomePage && cat === "All") plans = plans.slice(0, 3);
      pkg.innerHTML=plans.map(x=>`
      <article class="card package"><span class="eyebrow">${x.category}</span><h3>${x.name}</h3><div class="speed">${x.speed}</div><div class="price">${x.price}<small>/month</small></div>
      <ul class="feature-list">${x.features.map(f=>`<li>${f}</li>`).join("")}</ul><a class="btn btn-dark" href="contact.html">Get Connected</a></article>`).join("");
      if (isHomePage) {
        const heading = pkg.closest(".section")?.querySelector(".section-head");
        if (heading && !heading.querySelector(".all-packages-link")) {
          const link = document.createElement("a"); link.className="btn btn-outline all-packages-link"; link.href="packages.html"; link.textContent="View All Packages"; heading.appendChild(link);
        }
      }
    };
    const activateCategory=(cat)=>{document.querySelectorAll(".filter").forEach(x=>x.classList.toggle("active",x.dataset.cat===cat));render(cat)};
    render();
    document.querySelectorAll(".filter").forEach(b=>b.addEventListener("click",()=>activateCategory(b.dataset.cat)));
    const hashCat={"#premium":"Premium","#sme":"SME","#corporate":"Corporate"}[location.hash.toLowerCase()];
    if(hashCat) activateCategory(hashCat);
  }
  const services=document.querySelector("#services");
  if(services) {
    services.innerHTML=GCN.services.map((s,i)=>`<article class="card service-card"><div class="icon">${String(i+1).padStart(2,"0")}</div><h3>${s.name}</h3><p>${s.short}</p><button type="button" class="btn btn-dark service-detail-btn" data-service="${i}">Learn More</button></article>`).join("");
    services.querySelectorAll(".service-detail-btn").forEach(btn=>btn.addEventListener("click",()=>{
      const s=GCN.services[Number(btn.dataset.service)];
      const modal=document.createElement("div"); modal.className="profile-modal service-modal";
      modal.innerHTML=`<section class="profile-modal-box service-modal-box" role="dialog" aria-modal="true" aria-label="${s.name} details"><button class="modal-close" aria-label="Close">×</button><span class="eyebrow">GREEN CITY NET SERVICES</span><h2>${s.name}</h2><p class="service-detail-intro">${s.detail}</p><h4>Key Benefits</h4><ul class="feature-list">${s.benefits.map(x=>`<li>${x}</li>`).join("")}</ul><p><b>Suitable for:</b> ${s.audience}</p><div class="network-credentials"><h3>Our Network & Licensing</h3><p><b>${GCN.networkCredentials.licence}</b></p><p>${GCN.networkCredentials.iig}</p><p><b>Connectivity ecosystem:</b> ${GCN.networkCredentials.upstreams.join(" • ")}</p><small>${GCN.networkCredentials.note}</small></div><div class="actions"><a class="btn btn-primary" href="contact.html?service=${encodeURIComponent(s.name)}">Ask About This Service</a><button type="button" class="btn btn-dark service-close-btn">Close</button></div></section>`;
      document.body.appendChild(modal);
      const close=()=>modal.remove();
      modal.querySelector(".modal-close").onclick=close;
      modal.querySelector(".service-close-btn").onclick=close;
      modal.addEventListener("click",e=>{if(e.target===modal)close()});
    }));
  }
  const team=document.querySelector("#team");
  if(team){
    const people=team.dataset.teamView==="leadership" ? GCN.leadership : GCN.team;
    team.innerHTML=people.map((p,i)=>{const initials=p.name.split(" ").map(x=>x[0]).join("").slice(0,2);return `<article class="card team-card"><div class="profile ${team.dataset.teamView==='leadership'?'leadership-profile':''}"><div class="avatar photo-avatar"><span>${initials}</span><img src="${p.photo||''}" alt="${p.name}" onerror="this.style.display='none'"></div><div class="profile-copy"><span class="eyebrow">${p.dept}</span><h3>${p.name}</h3><b>${p.role}</b><p class="muted">${p.education}</p><p>${p.bio}</p><button type="button" class="btn btn-dark profile-btn" data-profile="${i}">View Profile</button></div></div></article>`}).join("");
    team.querySelectorAll(".profile-btn").forEach(btn=>btn.addEventListener("click",()=>{
      const p=(team.dataset.teamView==="leadership" ? GCN.leadership : GCN.team)[Number(btn.dataset.profile)]; const initials=p.name.split(" ").map(x=>x[0]).join("").slice(0,2);
      const modal=document.createElement("div"); modal.className="profile-modal";
      modal.innerHTML=`<div class="profile-modal-box"><button class="modal-close" aria-label="Close">×</button><div class="profile profile-deep"><div class="avatar photo-avatar"><span>${initials}</span><img src="${p.photo||''}" alt="${p.name}" onerror="this.style.display='none'"></div><div><span class="eyebrow">${p.dept}</span><h2>${p.name}</h2><h3>${p.role}</h3><p><b>Education:</b> ${p.education}</p><p><b>Experience:</b> ${p.experience}</p><p>${p.bio}</p><h4>Responsibilities</h4><ul class="feature-list">${(p.responsibilities||[]).map(x=>`<li>${x}</li>`).join("")}</ul><h4>Skills & Expertise</h4><div class="skill-tags">${(p.skills||[]).map(x=>`<span>${x}</span>`).join("")}</div></div></div></div>`;
      document.body.appendChild(modal);
      modal.querySelector(".modal-close").onclick=()=>modal.remove();
      modal.addEventListener("click",e=>{if(e.target===modal)modal.remove()});
    }));
  }

  document.querySelectorAll(".configurable-link").forEach(link=>link.addEventListener("click",e=>{
    const url=(link.dataset.url||"").trim();
    if(!url || url==="#"){e.preventDefault();alert(`Please add the real ${link.dataset.label||'server'} URL in ftp-server.html before publishing.`);return;}
    link.href=url; link.target="_blank"; link.rel="noopener noreferrer";
  }));
  document.querySelectorAll("form[data-formspree]").forEach(form=>form.addEventListener("submit",async e=>{
    e.preventDefault();
    const button=form.querySelector('button[type="submit"]');
    const status=form.querySelector("[data-form-status]");
    const originalText=button?.innerHTML;
    if(status){status.textContent="Sending…";status.className="form-status is-sending";}
    if(button){button.disabled=true;button.setAttribute("aria-busy","true");button.textContent="Sending…";}
    try{
      const response=await fetch(form.action,{method:"POST",body:new FormData(form),headers:{"Accept":"application/json"}});
      let result={};
      try{result=await response.json();}catch(_){ }
      if(response.ok){
        if(status){status.textContent="Thank you! Your submission was sent successfully.";status.className="form-status is-success";}
        form.reset();
      }else{
        const details=Array.isArray(result.errors)?result.errors.map(x=>x.message).join(" "):"Please check the form and try again.";
        if(status){status.textContent="Sorry, your submission could not be sent. "+details;status.className="form-status is-error";}
      }
    }catch(_){
      if(status){status.textContent="Network error. Please check your internet connection and try again.";status.className="form-status is-error";}
    }finally{
      if(button){button.disabled=false;button.removeAttribute("aria-busy");button.innerHTML=originalText;}
    }
  }));
});

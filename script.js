document.addEventListener('DOMContentLoaded', () => {

  // === DISTRICT DATA FROM CSV ===
  const districts = [
    { ubigeo:"140202", name:"Cañaris", votes:3724, keikoPct:11.47, poverty:62.55, population:12251, quechua:75.80, province:"Ferreñafe" },
    { ubigeo:"140203", name:"Incahuasi", votes:4600, keikoPct:14.91, poverty:53.20, population:15112, quechua:79.17, province:"Ferreñafe" },
    { ubigeo:"140310", name:"Salas", votes:6350, keikoPct:32.58, poverty:44.55, population:13577, quechua:13.70, province:"Lambayeque" },
    { ubigeo:"140306", name:"Mórrope", votes:24757, keikoPct:47.41, poverty:29.80, population:56131, quechua:0.64, province:"Lambayeque" },
    { ubigeo:"140308", name:"Olmos", votes:22498, keikoPct:26.65, poverty:29.35, population:55691, quechua:0.98, province:"Lambayeque" },
    { ubigeo:"140312", name:"Túcume", votes:12847, keikoPct:45.65, poverty:29.05, population:24221, quechua:1.06, province:"Lambayeque" },
    { ubigeo:"140311", name:"San José", votes:7772, keikoPct:32.90, poverty:27.15, population:17754, quechua:1.99, province:"Lambayeque" },
    { ubigeo:"140307", name:"Motupe", votes:14697, keikoPct:28.01, poverty:26.00, population:33952, quechua:4.09, province:"Lambayeque" },
    { ubigeo:"140302", name:"Chochope", votes:1008, keikoPct:30.36, poverty:25.85, population:1571, quechua:2.61, province:"Lambayeque" },
    { ubigeo:"140309", name:"Pacora", votes:4247, keikoPct:36.03, poverty:25.65, population:8829, quechua:1.25, province:"Lambayeque" },
    { ubigeo:"140303", name:"Íllimo", votes:5507, keikoPct:41.82, poverty:24.05, population:9472, quechua:0.49, province:"Lambayeque" },
    { ubigeo:"140305", name:"Mochumí", votes:10414, keikoPct:35.90, poverty:23.65, population:19750, quechua:1.09, province:"Lambayeque" },
    { ubigeo:"140304", name:"Jayanca", votes:9514, keikoPct:31.65, poverty:22.70, population:20042, quechua:3.10, province:"Lambayeque" },
    { ubigeo:"140206", name:"Pueblo Nuevo", votes:7687, keikoPct:33.15, poverty:22.60, population:16007, quechua:3.71, province:"Ferreñafe" },
    { ubigeo:"140205", name:"Pítipo", votes:10119, keikoPct:30.01, poverty:20.85, population:21977, quechua:1.23, province:"Ferreñafe" },
    { ubigeo:"140107", name:"Lagunas", votes:4664, keikoPct:30.55, poverty:19.75, population:10829, quechua:1.28, province:"Chiclayo" },
    { ubigeo:"140114", name:"Santa Rosa", votes:5849, keikoPct:37.13, poverty:19.30, population:13856, quechua:1.31, province:"Chiclayo" },
    { ubigeo:"140117", name:"Pátapo", votes:11144, keikoPct:30.26, poverty:18.75, population:25022, quechua:1.35, province:"Chiclayo" },
    { ubigeo:"140102", name:"Chongoyape", votes:9286, keikoPct:26.83, poverty:18.30, population:19629, quechua:1.42, province:"Chiclayo" },
    { ubigeo:"140111", name:"Picsi", votes:4613, keikoPct:28.27, poverty:18.30, population:14726, quechua:2.62, province:"Chiclayo" },
    { ubigeo:"140110", name:"Oyotún", votes:4236, keikoPct:28.42, poverty:18.30, population:8359, quechua:0.39, province:"Chiclayo" },
    { ubigeo:"140103", name:"Eten", votes:7135, keikoPct:31.10, poverty:18.30, population:13118, quechua:1.81, province:"Chiclayo" },
    { ubigeo:"140116", name:"Cayaltí", votes:7969, keikoPct:40.01, poverty:16.80, population:15365, quechua:2.51, province:"Chiclayo" },
    { ubigeo:"140204", name:"M.A. Mesones Muro", votes:2264, keikoPct:35.69, poverty:16.40, population:4179, quechua:2.24, province:"Ferreñafe" },
    { ubigeo:"140108", name:"Monsefú", votes:20391, keikoPct:38.33, poverty:16.05, population:35323, quechua:1.72, province:"Chiclayo" },
    { ubigeo:"140201", name:"Ferreñafe", votes:19129, keikoPct:24.57, poverty:15.55, population:37715, quechua:8.82, province:"Ferreñafe" },
    { ubigeo:"140301", name:"Lambayeque", votes:38649, keikoPct:22.24, poverty:14.10, population:79845, quechua:4.09, province:"Lambayeque" },
    { ubigeo:"140115", name:"Saña", votes:4662, keikoPct:27.86, poverty:14.00, population:12497, quechua:1.41, province:"Chiclayo" },
    { ubigeo:"140118", name:"Pomalca", votes:12638, keikoPct:20.36, poverty:13.85, population:27016, quechua:1.25, province:"Chiclayo" },
    { ubigeo:"140105", name:"José Leonardo Ortiz", votes:92096, keikoPct:26.34, poverty:13.50, population:165355, quechua:3.56, province:"Chiclayo" },
    { ubigeo:"140120", name:"Tumán", votes:13821, keikoPct:19.67, poverty:12.50, population:29773, quechua:2.21, province:"Chiclayo" },
    { ubigeo:"140109", name:"Nueva Arica", votes:1395, keikoPct:26.52, poverty:12.50, population:2538, quechua:1.16, province:"Chiclayo" },
    { ubigeo:"140113", name:"Reque", votes:9195, keikoPct:27.56, poverty:12.50, population:17794, quechua:2.49, province:"Chiclayo" },
    { ubigeo:"140119", name:"Pucalá", votes:4240, keikoPct:30.97, poverty:12.50, population:9022, quechua:0.58, province:"Chiclayo" },
    { ubigeo:"140106", name:"La Victoria", votes:50100, keikoPct:24.70, poverty:11.05, population:99183, quechua:3.43, province:"Chiclayo" },
    { ubigeo:"140112", name:"Pimentel", votes:19666, keikoPct:22.41, poverty:10.75, population:52505, quechua:2.10, province:"Chiclayo" },
    { ubigeo:"140104", name:"Eten Puerto", votes:1316, keikoPct:19.45, poverty:8.80, population:2439, quechua:0.87, province:"Chiclayo" },
    { ubigeo:"140101", name:"Chiclayo", votes:171765, keikoPct:19.54, poverty:7.50, population:288360, quechua:3.05, province:"Chiclayo" }
  ];

  const totalVotes = districts.reduce((s, d) => s + d.votes, 0);
  const totalPop = districts.reduce((s, d) => s + d.population, 0);

  // Top 5 by electorate
  const top5 = [...districts].sort((a,b) => b.votes - a.votes).slice(0, 5);
  const top5Votes = top5.reduce((s,d) => s + d.votes, 0);

  // === PROGRESS BAR ===
  const progressBar = document.getElementById('progressBar');
  window.addEventListener('scroll', () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = (window.scrollY / h * 100) + '%';
  });

  // === NAV VISIBILITY ===
  const nav = document.getElementById('navBar');
  const heroEl = document.getElementById('hero');
  const observer = new IntersectionObserver(([e]) => {
    nav.classList.toggle('visible', !e.isIntersecting);
  }, { threshold: 0.1 });
  observer.observe(heroEl);

  // === NAV ACTIVE LINK ===
  const sections = document.querySelectorAll('[data-section]');
  const navLinks = document.querySelectorAll('.nav-link');
  const sectionObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const id = e.target.getAttribute('data-section');
        navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + id));
      }
    });
  }, { threshold: 0.3, rootMargin: '-20% 0px -60% 0px' });
  sections.forEach(s => sectionObs.observe(s));

  // === SCROLL ANIMATIONS ===
  const animEls = document.querySelectorAll('.text-block, .fade-up');
  const animObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });
  animEls.forEach(el => animObs.observe(el));

  // === BAR CHART ANIMATION ===
  const barFills = document.querySelectorAll('.bar-fill');
  const barObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const w = e.target.getAttribute('data-width');
        e.target.style.width = w;
      }
    });
  }, { threshold: 0.1 });
  barFills.forEach(b => barObs.observe(b));

  // === COUNTER ANIMATION ===
  const counters = document.querySelectorAll('.counter');
  const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting && !e.target.dataset.animated) {
        e.target.dataset.animated = 'true';
        animateCounter(e.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => counterObs.observe(c));

  function animateCounter(el) {
    const target = parseFloat(el.getAttribute('data-target'));
    const suffix = el.getAttribute('data-suffix') || '';
    const prefix = el.getAttribute('data-prefix') || '';
    const decimals = el.getAttribute('data-decimals') ? parseInt(el.getAttribute('data-decimals')) : 0;
    const duration = 1500;
    const start = performance.now();

    function update(now) {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = (target * ease).toFixed(decimals);
      el.textContent = prefix + numberWithCommas(current) + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  function numberWithCommas(x) {
    const parts = x.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  }

  // === SCATTER PLOT (Chapter 3 - all orange + trend line) ===
  const scatterEl = document.getElementById('scatterPlot');
  if (scatterEl) {
    buildScatterAll(scatterEl, districts);
  }

  function buildScatterAll(container, data) {
    const w = container.clientWidth;
    const h = container.clientHeight;
    const pad = { top: 10, right: 10, bottom: 10, left: 10 };
    const maxPov = Math.max(...data.map(d => d.poverty));
    const maxKeiko = Math.max(...data.map(d => d.keikoPct));

    // Draw trend line (SVG)
    const svgNS = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('width', w);
    svg.setAttribute('height', h);
    svg.style.cssText = 'position:absolute;top:0;left:0;pointer-events:none;';
    const pts = data.map(d => ({
      x: pad.left + (d.poverty / maxPov) * (w - pad.left - pad.right - 12),
      y: h - pad.bottom - (d.keikoPct / maxKeiko) * (h - pad.top - pad.bottom - 12)
    }));
    const lr = linearRegression(pts);
    const line = document.createElementNS(svgNS, 'line');
    line.setAttribute('x1', lr.x1); line.setAttribute('y1', lr.y1);
    line.setAttribute('x2', lr.x2); line.setAttribute('y2', lr.y2);
    line.setAttribute('stroke', 'rgba(249,115,22,0.4)');
    line.setAttribute('stroke-width', '2');
    line.setAttribute('stroke-dasharray', '6,4');
    svg.appendChild(line);
    container.appendChild(svg);

    data.forEach(d => {
      const dot = document.createElement('div');
      dot.className = 'scatter-dot';
      const x = pad.left + (d.poverty / maxPov) * (w - pad.left - pad.right - 12);
      const y = h - pad.bottom - (d.keikoPct / maxKeiko) * (h - pad.top - pad.bottom - 12);
      dot.style.left = x + 'px';
      dot.style.top = y + 'px';
      const sz = Math.max(8, Math.min(18, Math.sqrt(d.votes / 500)));
      dot.style.width = sz + 'px';
      dot.style.height = sz + 'px';
      dot.setAttribute('data-district', d.name);
      dot.setAttribute('data-keiko', d.keikoPct);
      dot.setAttribute('data-poverty', d.poverty);
      dot.setAttribute('data-quechua', d.quechua);
      container.appendChild(dot);
    });
  }

  // Linear regression helper
  function linearRegression(pts) {
    const n = pts.length;
    let sx=0, sy=0, sxy=0, sxx=0;
    pts.forEach(p => { sx+=p.x; sy+=p.y; sxy+=p.x*p.y; sxx+=p.x*p.x; });
    const m = (n*sxy - sx*sy) / (n*sxx - sx*sx);
    const b = (sy - m*sx) / n;
    const xs = pts.map(p=>p.x);
    const minX = Math.min(...xs), maxX = Math.max(...xs);
    return { x1: minX, y1: m*minX+b, x2: maxX, y2: m*maxX+b };
  }

  // === TOOLTIP ===
  const tooltip = document.getElementById('tooltip');
  document.addEventListener('mouseover', e => {
    const dot = e.target.closest('.scatter-dot, .bubble');
    if (dot) {
      const name = dot.getAttribute('data-district');
      const keiko = dot.getAttribute('data-keiko');
      const poverty = dot.getAttribute('data-poverty');
      const quechua = dot.getAttribute('data-quechua');
      const votes = dot.getAttribute('data-votes');
      let html = '<div class="tooltip-name">' + name + '</div><div class="tooltip-data">';
      if (keiko) html += 'Voto Keiko: ' + keiko + '%<br>';
      if (poverty) html += 'Pobreza: ' + poverty + '%<br>';
      if (quechua) html += 'Quechua: ' + quechua + '%<br>';
      if (votes) html += 'Votos: ' + numberWithCommas(votes);
      html += '</div>';
      tooltip.innerHTML = html;
      tooltip.classList.add('show');
    }
  });
  document.addEventListener('mousemove', e => {
    if (tooltip.classList.contains('show')) {
      tooltip.style.left = (e.clientX + 12) + 'px';
      tooltip.style.top = (e.clientY - 10) + 'px';
    }
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest('.scatter-dot, .bubble')) {
      tooltip.classList.remove('show');
    }
  });

  // Touch tooltip
  document.addEventListener('touchstart', e => {
    const dot = e.target.closest('.scatter-dot, .bubble');
    if (dot) {
      const name = dot.getAttribute('data-district');
      const keiko = dot.getAttribute('data-keiko');
      const poverty = dot.getAttribute('data-poverty');
      const quechua = dot.getAttribute('data-quechua');
      let html = '<div class="tooltip-name">' + name + '</div><div class="tooltip-data">';
      if (keiko) html += 'Voto Keiko: ' + keiko + '%<br>';
      if (poverty) html += 'Pobreza: ' + poverty + '%<br>';
      if (quechua) html += 'Quechua: ' + quechua + '%';
      html += '</div>';
      tooltip.innerHTML = html;
      tooltip.classList.add('show');
      const r = dot.getBoundingClientRect();
      tooltip.style.left = r.left + 'px';
      tooltip.style.top = (r.top - 60) + 'px';
      setTimeout(() => tooltip.classList.remove('show'), 2500);
    }
  }, { passive: true });

  // === ATOMIZATION BAR CHART (Chapter 1) ===
  const atomEl = document.getElementById('atomizationBars');
  if (atomEl) {
    const candidates = [
      { name: 'Otros candidatos', pct: 52, color: '#6b6b80' },
      { name: 'Keiko Fujimori', pct: 26, color: '#f97316' },
      { name: 'Roberto Sánchez', pct: 10, color: '#8b5cf6' },
      { name: 'Jorge Nieto', pct: 10, color: '#3b82f6' }
    ];
    candidates.forEach(c => {
      const item = document.createElement('div');
      item.style.cssText = 'margin-bottom:14px;';
      item.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:6px;">
          <span style="font-size:0.8rem;font-weight:600;color:var(--text-primary);">${c.name}</span>
          <span style="font-size:0.7rem;color:${c.color};font-weight:700;">${c.pct}%</span>
        </div>
        <div class="bar-track" style="overflow:hidden;">
          <div class="bar-fill" data-width="${c.pct}%" style="background:${c.color};"></div>
        </div>
      `;
      atomEl.appendChild(item);
      barObs.observe(item.querySelector('.bar-fill'));
    });
  }

  // === TABLE SEARCH ===
  const tableSearch = document.getElementById('tableSearch');
  if (tableSearch) {
    tableSearch.addEventListener('input', () => {
      const q = tableSearch.value.toLowerCase();
      document.querySelectorAll('#districtTable tbody tr').forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(q) ? '' : 'none';
      });
    });
  }

  // === SORT ===
  const sortBtns = document.querySelectorAll('.sort-btn');
  sortBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sortBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const field = btn.getAttribute('data-sort');
      const tbody = document.querySelector('#districtTable tbody');
      const rows = Array.from(tbody.querySelectorAll('tr'));
      rows.sort((a, b) => {
        const aVal = parseFloat(a.getAttribute('data-' + field)) || 0;
        const bVal = parseFloat(b.getAttribute('data-' + field)) || 0;
        return bVal - aVal;
      });
      rows.forEach(r => tbody.appendChild(r));
    });
  });

  // === POPULATE TABLE ===
  const tbody = document.querySelector('#districtTable tbody');
  if (tbody) {
    districts.forEach(d => {
      const tr = document.createElement('tr');
      tr.setAttribute('data-keiko', d.keikoPct);
      tr.setAttribute('data-poverty', d.poverty);
      tr.setAttribute('data-votes', d.votes);
      tr.setAttribute('data-quechua', d.quechua);
      tr.setAttribute('data-population', d.population);
      if (d.quechua > 70) tr.className = 'highlight-row';
      tr.innerHTML = `
        <td>${d.name}</td>
        <td>${d.keikoPct}%</td>
        <td>${d.poverty}%</td>
        <td>${numberWithCommas(d.votes)}</td>
        <td>${numberWithCommas(d.population)}</td>
        <td>${d.quechua}%</td>
      `;
      tbody.appendChild(tr);
    });
  }

  // === TOP 5 BAR CHART ===
  const top5Container = document.getElementById('top5Bars');
  if (top5Container) {
    const maxVotes = top5[0].votes;
    top5.forEach(d => {
      const item = document.createElement('div');
      item.style.cssText = 'margin-bottom:14px;';
      const pct = (d.votes / maxVotes * 100);
      item.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:6px;">
          <span style="font-size:0.8rem;font-weight:600;color:var(--text-primary);">${d.name}</span>
          <span style="font-size:0.7rem;color:var(--orange-light);font-weight:700;">${d.keikoPct}% Keiko</span>
        </div>
        <div class="bar-track" style="overflow:hidden;">
          <div class="bar-fill" data-width="${pct}%"></div>
        </div>
        <div style="text-align:right;font-size:0.65rem;color:var(--text-muted);margin-top:3px;">${numberWithCommas(d.votes)} votos emitidos</div>
      `;
      top5Container.appendChild(item);
      barObs.observe(item.querySelector('.bar-fill'));
    });
  }

  // === POVERTY BAR CHART (all orange scale, no quechua distinction) ===
  const povertyBarsEl = document.getElementById('povertyBars');
  if (povertyBarsEl) {
    const topPoverty = [...districts].sort((a,b) => b.poverty - a.poverty).slice(0, 10);
    topPoverty.forEach(d => {
      const item = document.createElement('div');
      item.className = 'bar-item';
      const pct = (d.poverty / 65 * 100);
      const cls = d.poverty > 30 ? 'high' : 'medium';
      item.innerHTML = `
        <span class="bar-label">${d.name}</span>
        <div class="bar-track">
          <div class="bar-fill ${cls}" data-width="${pct}%" style="overflow:visible;">
            <span class="bar-value">${d.poverty}%</span>
          </div>
        </div>
      `;
      povertyBarsEl.appendChild(item);
      barObs.observe(item.querySelector('.bar-fill'));
    });
  }

  // === SPEARMAN CORRELATION SCATTER (Chapter 4) ===
  const spearmanEl = document.getElementById('spearmanPlot');
  if (spearmanEl) {
    buildSpearman(spearmanEl, districts);
  }

  function buildSpearman(container, data) {
    const w = container.clientWidth;
    const h = container.clientHeight;
    const pad = { top: 10, right: 10, bottom: 10, left: 10 };
    const maxPov = Math.max(...data.map(d => d.poverty));
    const maxKeiko = Math.max(...data.map(d => d.keikoPct));

    const noQuechua = data.filter(d => d.quechua <= 70);

    // Trend line from non-quechua districts only
    const svgNS = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('width', w);
    svg.setAttribute('height', h);
    svg.style.cssText = 'position:absolute;top:0;left:0;pointer-events:none;';
    const pts = noQuechua.map(d => ({
      x: pad.left + (d.poverty / maxPov) * (w - pad.left - pad.right - 12),
      y: h - pad.bottom - (d.keikoPct / maxKeiko) * (h - pad.top - pad.bottom - 12)
    }));
    const lr = linearRegression(pts);
    const line = document.createElementNS(svgNS, 'line');
    line.setAttribute('x1', lr.x1); line.setAttribute('y1', lr.y1);
    line.setAttribute('x2', lr.x2); line.setAttribute('y2', lr.y2);
    line.setAttribute('stroke', 'rgba(249,115,22,0.5)');
    line.setAttribute('stroke-width', '2');
    line.setAttribute('stroke-dasharray', '6,4');
    svg.appendChild(line);
    container.appendChild(svg);

    // All dots
    data.forEach(d => {
      const dot = document.createElement('div');
      const isQuechua = d.quechua > 70;
      dot.className = 'scatter-dot' + (isQuechua ? ' outlier' : '');
      const x = pad.left + (d.poverty / maxPov) * (w - pad.left - pad.right - 12);
      const y = h - pad.bottom - (d.keikoPct / maxKeiko) * (h - pad.top - pad.bottom - 12);
      dot.style.left = x + 'px';
      dot.style.top = y + 'px';
      const sz = Math.max(8, Math.min(18, Math.sqrt(d.votes / 500)));
      dot.style.width = sz + 'px';
      dot.style.height = sz + 'px';
      dot.setAttribute('data-district', d.name);
      dot.setAttribute('data-keiko', d.keikoPct);
      dot.setAttribute('data-poverty', d.poverty);
      dot.setAttribute('data-quechua', d.quechua);
      container.appendChild(dot);
    });
  }
});

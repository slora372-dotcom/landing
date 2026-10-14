(function () {
  const S = window.SITE;
  const $ = (id) => document.getElementById(id);
  const money = (n) => S.currency + Number(n).toFixed(2);
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const img = (src, alt) => (src ? `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy">` : "");

  // ---------- Brand ----------
  $("logo").innerHTML = S.brand.logo
    ? img(S.brand.logo, S.brand.name)
    : `<strong>${esc(S.brand.name)}</strong><small>${esc(S.brand.tagline)}</small>`;
  $("partner").href = S.brand.partner.url;
  $("partner").innerHTML = S.brand.partner.img
    ? img(S.brand.partner.img, S.brand.partner.name)
    : `<strong>${esc(S.brand.partner.name)}</strong><small>${esc(S.brand.partner.label)}</small>`;
  $("marquee").textContent = S.announcement;
  $("footerNote").textContent = S.footerNote;

  document.querySelectorAll("[data-link]").forEach((el) => {
    el.href = S.links[el.dataset.link] || "#";
  });

  // ---------- Carousel ----------
  const track = $("carouselTrack");
  const dots = $("carouselDots");
  track.innerHTML = S.banners.map((b) =>
    b.img
      ? `<a class="slide has-img" href="${esc(b.url)}">${img(b.img, b.title)}</a>`
      : `<a class="slide ${b.dark ? "dark" : ""}" href="${esc(b.url)}" style="background:linear-gradient(135deg,${b.colors[0]},${b.colors[1]})">
           <span class="slide-icon">${b.icon}</span>
           <span class="slide-text"><h3>${esc(b.title)}</h3><em>${esc(b.highlight)}</em><p>${esc(b.sub)}</p></span>
         </a>`
  ).join("");
  dots.innerHTML = S.banners.map((_, i) => `<button aria-label="Slide ${i + 1}"></button>`).join("");

  let slide = 0;
  const goTo = (i) => {
    slide = (i + S.banners.length) % S.banners.length;
    track.scrollTo({ left: slide * track.clientWidth, behavior: "smooth" });
  };
  const syncDots = () => {
    slide = Math.round(track.scrollLeft / track.clientWidth);
    [...dots.children].forEach((d, i) => d.classList.toggle("active", i === slide));
  };
  [...dots.children].forEach((d, i) => d.addEventListener("click", () => goTo(i)));
  track.addEventListener("scroll", syncDots, { passive: true });
  syncDots();
  let timer = setInterval(() => goTo(slide + 1), 4000);
  track.addEventListener("pointerdown", () => clearInterval(timer), { once: true });

  // ---------- Trust + payments ----------
  const chip = (p) => `<span class="chip" style="background:${p.color}" title="${esc(p.name)}">${esc(p.short)}</span>`;
  if (S.staticBanner) {
    $("trust").hidden = true;
    $("payStrip").classList.add("has-img");
    $("payStrip").innerHTML = img(S.staticBanner, "Payment methods");
  } else {
    $("trust").innerHTML = S.trustPoints.map((t) => `<li>${esc(t)}</li>`).join("");
    $("payStrip").innerHTML = S.payments.map(chip).join("");
  }

  // ---------- Wallet ----------
  $("balance").textContent = money(0);
  $("minDeposit").textContent = money(S.minDeposit);
  $("minWithdrawal").textContent = money(S.minWithdrawal);
  $("refreshBtn").addEventListener("click", () => toast("Please log in to view your balance"));

  // ---------- Referral ----------
  const r = S.referral;
  const banner = $("referralBanner");
  if (r.img) {
    // The artwork leaves its lower part empty for the four buttons.
    $("referral").classList.add("has-img");
    banner.classList.add("has-img");
    banner.innerHTML = img(r.img, r.heading);
  } else {
    banner.innerHTML = `<h3>${esc(r.heading)}</h3><span class="pct">${esc(r.percent)}</span>
      <p class="l1">${esc(r.line1)}</p><p class="l2">${esc(r.line2)}</p><p class="foot">${esc(r.footnote)}</p>`;
  }
  const copyLink = () =>
    navigator.clipboard.writeText(S.referralUrl).then(() => toast("Referral link copied"), () => toast(S.referralUrl));
  $("copyBtn").addEventListener("click", copyLink);
  $("shareBtn").addEventListener("click", () => {
    if (navigator.share) navigator.share({ title: S.brand.name, url: S.referralUrl }).catch(() => {});
    else copyLink();
  });

  // ---------- Category tabs + game grid ----------
  const tabs = $("tabs");
  const showCategory = (id) => {
    [...tabs.children].forEach((t) => {
      const on = t.dataset.id === id;
      t.classList.toggle("active", on);
      t.setAttribute("aria-selected", String(on));
    });
    const cat = S.categories.find((c) => c.id === id);
    const list = S.games.filter((g) => g.category === id);
    $("games").innerHTML = list.length
      ? list.map((g) => `
        <a class="game art ${g.img ? "has-img" : ""}" href="${esc(g.url)}" style="--h:${g.hue || 0}" aria-label="${esc(g.name)}">
          ${g.img ? "" : g.icon || ""}${img(g.img, g.name)}
          ${g.img ? "" : `<span class="side">${esc(cat.label)}</span><span class="label">${esc(g.name)}</span>`}
          ${g.tag ? `<span class="tag">${esc(g.tag)}</span>` : ""}
        </a>`).join("")
      : `<p class="game-empty">Coming soon</p>`;
  };
  tabs.innerHTML = S.categories.map((c) =>
    c.img
      ? `<button class="tab has-img" role="tab" data-id="${esc(c.id)}">${img(c.img, c.label)}</button>`
      : `<button class="btn tab" role="tab" data-id="${esc(c.id)}"><i>${c.icon}</i>${esc(c.label)}</button>`
  ).join("");
  tabs.addEventListener("click", (e) => {
    const t = e.target.closest(".tab");
    if (t) showCategory(t.dataset.id);
  });
  showCategory(S.categories[0].id);

  // ---------- Toast ----------
  let toastTimer;
  function toast(msg) {
    const el = $("toast");
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("show"), 2200);
  }
})();

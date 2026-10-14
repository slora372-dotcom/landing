(function () {
  const S = window.SITE;
  const $ = (id) => document.getElementById(id);
  const money = (n) => S.currency + Number(n).toFixed(2);
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const img = (src, alt) => `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy">`;
  const link = (key) => esc(S.links[key] || "#");

  // ---------- Brand ----------
  $("logo").innerHTML = `<img src="${esc(S.brand.logo)}" alt="${esc(S.brand.name)}">`;
  $("partner").innerHTML = img(S.brand.partner.img, S.brand.partner.name);
  $("marquee").textContent = S.announcement;
  $("copyright").textContent = S.copyright;

  // ---------- Carousel ----------
  const track = $("carouselTrack");
  const dots = $("carouselDots");
  track.innerHTML = S.banners.map((src, i) =>
    `<a class="slide" href="${link("register")}"><img src="${esc(src)}" alt="12Cuci promotion ${i + 1}"${i ? ' loading="lazy"' : ""}></a>`
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

  // ---------- Wallet ----------
  $("balance").textContent = money(0);
  $("minDeposit").textContent = money(S.minDeposit);
  $("minWithdrawal").textContent = money(S.minWithdrawal);
  $("refreshBtn").addEventListener("click", () => toast("Sila login untuk lihat baki anda"));

  // ---------- Referral ----------
  const copyLink = () =>
    navigator.clipboard.writeText(S.referralUrl).then(() => toast("Referral link copied"), () => toast(S.referralUrl));
  $("copyBtn").addEventListener("click", copyLink);
  $("shareBtn").addEventListener("click", () => {
    if (navigator.share) navigator.share({ title: S.brand.name, url: S.referralUrl }).catch(() => {});
    else copyLink();
  });

  // ---------- Games ----------
  $("hotGames").innerHTML = S.hotGames.map((src, i) =>
    `<a class="hot" href="${link("games")}">${img(src, `Hot game ${i + 1}`)}</a>`
  ).join("");
  $("tabs").innerHTML = S.categories.map((c) =>
    `<a class="tab" href="${link("games")}">${img(c.img, c.label)}</a>`
  ).join("");
  $("games").innerHTML = S.games.map((g) =>
    `<a class="game" href="${link("games")}">${img(g.img, g.name)}</a>`
  ).join("");
  document.querySelectorAll("[data-scroll]").forEach((b) =>
    b.addEventListener("click", () => $("tabs").scrollBy({ left: b.dataset.scroll * $("tabs").clientWidth * 0.75, behavior: "smooth" }))
  );

  // ---------- Testimonials ----------
  $("testimonials").innerHTML = S.testimonials.map((t) => `
    <article class="testi-card">
      <h3>${esc(t.title)}</h3>
      <p>${esc(t.text)}</p>
      <div class="testi-foot">
        <span class="stars" aria-label="${t.stars} out of 5 stars">${"★".repeat(t.stars)}${"☆".repeat(5 - t.stars)}</span>
        <span class="testi-user">Ulasan daripada : ${esc(t.user)}</span>
      </div>
    </article>`).join("");

  // ---------- Footer ----------
  $("payments").innerHTML = S.payments.map((p) => img(p.img, p.name)).join("");

  // ---------- Links ----------
  document.querySelectorAll("[data-link]").forEach((el) => {
    el.href = S.links[el.dataset.link] || "#";
  });

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

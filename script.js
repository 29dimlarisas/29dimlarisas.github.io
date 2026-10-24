/* ================================================================
   29ο Δημοτικό Σχολείο Λάρισας · European Projects
   Κοινό μενού, υποσέλιδο, γλώσσα ΕΛ/EN, φωτογραφίες, φίλτρα
   ================================================================ */

/* ✏️ ΣΤΟΙΧΕΙΑ ΣΧΟΛΕΙΟΥ — αλλάξτε τα ΜΟΝΟ εδώ και ενημερώνονται σε όλες τις σελίδες */
var SCHOOL = {
  address_el: "31ης Αυγούστου 34, 41221 Λάρισα",
  address_en: "31is Avgoustou 34, 41221 Larissa, Greece",
  phone: "2410 288327",
  email: "mail@29dim-laris.lar.sch.gr",
  web: "",          // π.χ. "https://29dim-laris.lar.sch.gr" (αφήστε κενό αν δεν θέλετε)
  facebook: "https://www.facebook.com/profile.php?id=61594135984559"
};

/* Μενού: [αρχείο, Ελληνικά, English] */
var NAV = [
  ["index.html",      "Αρχική",         "Home"],
  ["news.html",       "Νέα",            "News"],
  ["erasmus.html",    "Erasmus+",       "Erasmus+"],
  ["etwinning.html",  "eTwinning",      "eTwinning"],
  ["mobilities.html", "Κινητικότητες",  "Mobilities"],
  ["gallery.html",    "Φωτογραφίες",    "Gallery"],
  ["results.html",    "Αποτελέσματα",   "Results"],
  ["contact.html",    "Επικοινωνία",    "Contact"]
];

(function () {
  var root = document.documentElement;
  function bi(el, en) { return '<span data-l="el">' + el + '</span><span data-l="en">' + en + '</span>'; }

  /* ---- Γλώσσα ---- */
  function setLang(l) {
    root.classList.toggle("l-en", l === "en");
    root.lang = l === "en" ? "en" : "el";
    try { localStorage.setItem("lang", l); } catch (e) {}
  }
  var q = new URLSearchParams(location.search).get("lang");
  if (q === "en" || q === "el") setLang(q);

  /* ---- Header ---- */
  var page = location.pathname.split("/").pop() || "index.html";
  var links = NAV.map(function (n) {
    return '<li><a href="' + n[0] + '"' + (n[0] === page ? ' class="active"' : '') + '>' + bi(n[1], n[2]) + '</a></li>';
  }).join("");
  var header = document.createElement("header");
  header.innerHTML =
    '<div class="wrap nav">' +
      '<a class="brand" href="index.html"><img class="logo" src="logo-school-icon.png" alt=""><span>' +
        '<b data-l="el">29ο Δημοτικό Σχολείο Λάρισας</b><b data-l="en">29th Primary School of Larissa</b>' +
        '<small data-l="el">Ευρωπαϊκά Προγράμματα</small><small data-l="en">European Projects</small>' +
      '</span></a>' +
      '<ul class="menu">' + links + '</ul>' +
      '<button class="langbtn" type="button" title="Ελληνικά / English">' + bi("EN", "ΕΛ") + '</button>' +
      '<button class="burger" type="button" aria-label="Menu">☰</button>' +
    '</div>';
  document.body.insertBefore(header, document.body.firstChild);
  header.querySelector(".langbtn").onclick = function () { setLang(root.classList.contains("l-en") ? "el" : "en"); };
  header.querySelector(".burger").onclick = function () { header.querySelector(".menu").classList.toggle("open"); };

  /* ---- Footer ---- */
  var footer = document.createElement("footer");
  footer.id = "contact";
  footer.innerHTML =
    '<div class="wrap"><div class="foot">' +
      '<div><h3>' + bi("29ο Δημοτικό Σχολείο Λάρισας", "29th Primary School of Larissa") + '</h3>' +
        '<p>' + bi(SCHOOL.address_el, SCHOOL.address_en) + '<br>☏ ' + SCHOOL.phone +
        '<br>✉ <a href="mailto:' + SCHOOL.email + '">' + SCHOOL.email + '</a>' +
        (SCHOOL.web ? '<br>🌐 <a href="' + SCHOOL.web + '" target="_blank" rel="noopener">' + SCHOOL.web.replace(/^https?:\/\//, "") + '</a>' : '') + '</p></div>' +
      '<div><h3>' + bi("Σελίδες", "Pages") + '</h3><p>' +
        NAV.map(function (n) { return '<a href="' + n[0] + '">' + bi(n[1], n[2]) + '</a>'; }).join("<br>") + '</p></div>' +
      '<div><h3>' + bi("Ακολουθήστε μας", "Follow us") + '</h3><p><a href="' + SCHOOL.facebook + '" target="_blank" rel="noopener">Facebook</a></p></div>' +
    '</div>' +
    '<div class="logos"><img src="logo-school.png" alt="29ο Δημοτικό Σχολείο Λάρισας">' +
      '<img src="logo-155.png" alt="155 Pieces, One Puzzle">' +
      '<img src="etwinning-school.png" alt="eTwinning School 2026-2027">' +
      '<img src="eu-cofunded.png" alt="Co-funded by the European Union" onerror="this.remove()"></div>' +
    '<div class="eu">' + bi(
      "Χρηματοδοτείται από την Ευρωπαϊκή Ένωση. Οι απόψεις και οι γνώμες που διατυπώνονται εκφράζουν αποκλειστικά τις απόψεις των συντακτών και δεν αντιπροσωπεύουν κατ’ ανάγκη τις απόψεις της Ευρωπαϊκής Ένωσης ή του Ευρωπαϊκού Εκτελεστικού Οργανισμού Εκπαίδευσης και Πολιτισμού (EACEA). Η Ευρωπαϊκή Ένωση και ο EACEA δεν μπορούν να θεωρηθούν υπεύθυνοι για τις εκφραζόμενες απόψεις.",
      "Co-funded by the European Union. Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of the European Union or the European Education and Culture Executive Agency (EACEA). Neither the European Union nor EACEA can be held responsible for them.") +
    '</div></div>';
  document.body.appendChild(footer);

  /* ---- Συμπλήρωση στοιχείων επικοινωνίας (data-fill="email" κ.λπ.) ---- */
  document.querySelectorAll("[data-fill]").forEach(function (el) {
    var k = el.getAttribute("data-fill");
    if (k === "email") el.innerHTML = '<a href="mailto:' + SCHOOL.email + '">' + SCHOOL.email + '</a>';
    else if (k === "phone") el.innerHTML = '<a href="tel:' + SCHOOL.phone.replace(/\s/g, "") + '">' + SCHOOL.phone + '</a>';
    else if (k === "address") el.innerHTML = bi(SCHOOL.address_el, SCHOOL.address_en);
    else if (k === "facebook") el.setAttribute("href", SCHOOL.facebook);
  });

  /* ---- Φίλτρα κινητικοτήτων ---- */
  var chips = document.querySelectorAll(".chip[data-f]");
  chips.forEach(function (c) {
    c.onclick = function () {
      chips.forEach(function (x) { x.classList.remove("on"); });
      c.classList.add("on");
      var f = c.getAttribute("data-f");
      document.querySelectorAll(".mobi").forEach(function (m) {
        var types = m.getAttribute("data-t").split(" ");
        m.style.display = (f === "all" || types.indexOf(f) > -1) ? "" : "none";
      });
    };
  });

  /* ---- Φωτογραφίες: προβολή σε μεγάλο μέγεθος ---- */
  document.querySelectorAll(".gallery").forEach(function (g) {
    if (!g.querySelector("img")) {
      g.innerHTML = '<div class="empty">📷 ' + bi("Οι φωτογραφίες θα ανέβουν σύντομα!", "Photos coming soon!") + '</div>';
    }
  });
  var imgs = Array.prototype.slice.call(document.querySelectorAll(".gallery img"));
  if (imgs.length) {
    var lb = document.createElement("div");
    lb.className = "lightbox";
    lb.innerHTML = '<button class="x" aria-label="Close">×</button><button class="prev" aria-label="Previous">‹</button><img alt=""><div class="cap"></div><button class="next" aria-label="Next">›</button>';
    document.body.appendChild(lb);
    var big = lb.querySelector("img"), cap = lb.querySelector(".cap"), cur = 0;
    function show(i) { cur = (i + imgs.length) % imgs.length; big.src = imgs[cur].src; cap.textContent = imgs[cur].alt || ""; lb.classList.add("open"); }
    imgs.forEach(function (im, i) { im.loading = "lazy"; im.onclick = function () { show(i); }; });
    lb.querySelector(".x").onclick = function () { lb.classList.remove("open"); };
    lb.querySelector(".prev").onclick = function (e) { e.stopPropagation(); show(cur - 1); };
    lb.querySelector(".next").onclick = function (e) { e.stopPropagation(); show(cur + 1); };
    lb.onclick = function (e) { if (e.target === lb) lb.classList.remove("open"); };
    document.addEventListener("keydown", function (e) {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") lb.classList.remove("open");
      if (e.key === "ArrowLeft") show(cur - 1);
      if (e.key === "ArrowRight") show(cur + 1);
    });
  }
})();

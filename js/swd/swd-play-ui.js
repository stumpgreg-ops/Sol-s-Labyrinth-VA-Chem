/* Sol's Labyrinth · SWD: after js/game.js in swd-play.html. Goes straight from the link (swd.html → Path 2 → a main game
   mode) to that grade's subject and mode, so the student lands on the Start / Continue screen; adds a way back to the SWD
   menu on every start screen; hides what this build does not use (progress codes, badges, class codes, the teacher link). */
(function () {
  "use strict";
  var P = window.SWD_PLAY || {};
  function $(id) { return document.getElementById(id); }
  /* back to the SWD menu: swd.html, or in the Canvas build (one page) a reload without the main-game flag */
  function backLink(a) {
    a.href = "swd.html";
    a.addEventListener("click", function (e) {
      if (!window.SOL_CANVAS) return;
      e.preventDefault();
      try { sessionStorage.removeItem("solSWD.play"); } catch (x) {}
      location.reload();
    });
  }
  ["btn-progress", "btn-restore", "btn-badges", "btn-progress-end"].forEach(function (id) { var e = $(id); if (e) e.classList.add("hidden"); });
  var jr = document.querySelector(".join-row"); if (jr) jr.classList.add("hidden");
  /* the way back, on the title, mode and skill screens and at the end of a level */
  ["title-screen", "mode-screen", "skill-screen"].forEach(function (id) {
    var scr = $(id); if (!scr) return;
    var a = document.createElement("a");
    a.className = "btn swd-back"; backLink(a); a.textContent = "← SWD menu";
    scr.insertBefore(a, scr.firstChild);
  });
  var again = $("btn-again");
  if (again && again.parentNode) {
    var b = document.createElement("a"); b.className = "btn"; backLink(b); b.textContent = "SWD menu";
    again.parentNode.appendChild(b);
  }
  /* full screen: whenever the page is not full screen, a "Full screen" button is on screen. The main game hides its
     own button (#btn-fs) when not full screen; here it stays, as "⛶ Full screen", and new ones sit on the start
     screens and the end-of-level box (a reload from the SWD menu always starts out of full screen) */
  function isFull() { return !!(document.fullscreenElement || document.webkitFullscreenElement); }
  function goFull() {
    var el = document.documentElement, req = el.requestFullscreen || el.webkitRequestFullscreen;
    if (req) { try { var p = req.call(el); if (p && p.catch) p.catch(function () {}); } catch (e) {} }
  }
  function fsButton(cls) {
    var b = document.createElement("button");
    b.type = "button"; b.className = "btn primary swd-fs " + (cls || ""); b.textContent = "⛶ Full screen";
    b.addEventListener("click", function (e) { e.stopPropagation(); goFull(); });
    return b;
  }
  ["title-screen", "mode-screen", "skill-screen"].forEach(function (id) { var scr = $(id); if (scr) scr.insertBefore(fsButton("swd-fs-corner"), scr.firstChild); });
  var endRow = again && again.parentNode;
  if (endRow) endRow.appendChild(fsButton());
  var fsb = $("btn-fs");
  function syncFs() {
    var full = isFull();
    document.body.classList.toggle("swd-full", full);
    if (fsb && !full) { if (fsb.classList.contains("hidden")) fsb.classList.remove("hidden"); if (fsb.textContent !== "⛶ Full screen") fsb.textContent = "⛶ Full screen"; }
  }
  if (fsb) {
    fsb.addEventListener("click", function () { if (!isFull()) goFull(); });
    if (window.MutationObserver) new MutationObserver(syncFs).observe(fsb, { attributes: true, attributeFilter: ["class"], childList: true });
  }
  document.addEventListener("fullscreenchange", syncFs);
  document.addEventListener("webkitfullscreenchange", syncFs);
  syncFs();

  /* straight to this subject and mode */
  var fam = (P.band || "G2") + ({ math: "MATH", reading: "READ", life: "LIFE" }[P.subject] || "MATH");
  setTimeout(function () {
    var card = document.querySelector('#title-screen .card[data-family="' + fam + '"]');
    if (!card) return;
    card.click();
    setTimeout(function () {
      var m = document.querySelector('#mode-packs .card[data-gamemode="' + (P.mode || "maze") + '"]');
      if (m) m.click();
    }, 80);
  }, 60);
})();

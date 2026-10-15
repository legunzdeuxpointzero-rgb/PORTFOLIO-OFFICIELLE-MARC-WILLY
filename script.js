/* ====== UTILITAIRES ====== */
var $ = function(s, r){ return (r||document).querySelector(s); };
var $$ = function(s, r){ return Array.prototype.slice.call((r||document).querySelectorAll(s)); };
function byId(id){ return PROJECTS.filter(function(p){ return p.id===id; })[0]; }
function esc(s){ return String(s).replace(/[&<>"']/g, function(c){ return ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[c]; }); }

/* Pochettes graphiques générées (pas d'images externes) */
var COVERS = [
 ["#2A1B5E","#C4B0FF"], ["#1E2A12","#A3E635"], ["#3B2A7A","#F5F3F8"],
 ["#17151F","#A3E635"], ["#8B5CF6","#17151F"], ["#2B2739","#B79CFA"]
];
function cover(p){
  if (p.coverImage) return '<img class="cover-image" src="'+esc(p.coverImage)+'" alt="">';
  var c = COVERS[p.hue % COVERS.length];
  var s = (p.hue*37 + p.ini.charCodeAt(0)) % 5;
  var shapes = [
    '<circle cx="82%" cy="30%" r="90" fill="none" stroke="'+c[1]+'" stroke-opacity=".35" stroke-width="2"/><circle cx="82%" cy="30%" r="50" fill="'+c[1]+'" fill-opacity=".14"/>',
    '<path d="M0 90% Q 30% 40% 60% 70% T 100% 30%" fill="none" stroke="'+c[1]+'" stroke-opacity=".45" stroke-width="3"/>',
    '<rect x="62%" y="12%" width="120" height="120" rx="26" fill="'+c[1]+'" fill-opacity=".16" transform="rotate(14 360 80)"/>',
    '<g stroke="'+c[1]+'" stroke-opacity=".25" stroke-width="1.5"><path d="M60% 0 L100% 40%"/><path d="M70% 0 L100% 30%"/><path d="M80% 0 L100% 20%"/><path d="M50% 0 L100% 50%"/></g>',
    '<circle cx="76%" cy="62%" r="64" fill="'+c[1]+'" fill-opacity=".18"/><circle cx="90%" cy="22%" r="22" fill="'+c[1]+'" fill-opacity=".4"/>'
  ];
  return '<svg aria-hidden="true" preserveAspectRatio="none">'+shapes[s]+'</svg><span class="ini">'+esc(p.ini)+'</span>';
}
function setCv(el, p){ var c = COVERS[p.hue % COVERS.length]; el.style.setProperty("--cv-bg", c[0]); el.style.setProperty("--cv-fg", c[1]); }

/* ====== GALERIE ====== */
var fDom = "all", fSta = "all";
function pillRow(rowId, entries, current, onPick){
  var row = $(rowId);
  $$("button", row).forEach(function(b){ b.remove(); });
  entries.forEach(function(e){
    var b = document.createElement("button");
    b.type = "button"; b.className = "pill"; b.textContent = e[1];
    b.setAttribute("aria-pressed", String(e[0] === current));
    b.addEventListener("click", function(){ onPick(e[0]); });
    row.appendChild(b);
  });
}
function renderFilters(){
  var d = [["all","Tous"]].concat(Object.keys(DOMAINS).map(function(k){ return [k, DOMAINS[k]]; }));
  var s = [["all","Tous"]].concat(Object.keys(STATUS).map(function(k){ return [k, STATUS[k]]; }));
  pillRow("#f-dom", d, fDom, function(v){ fDom = v; renderFilters(); renderGrid(); });
  pillRow("#f-sta", s, fSta, function(v){ fSta = v; renderFilters(); renderGrid(); });
}
function renderGrid(){
  var list = PROJECTS.filter(function(p){ return (fDom==="all"||p.dom===fDom) && (fSta==="all"||p.st===fSta); });
  var grid = $("#grid"); grid.innerHTML = "";
  var showFeat = fDom==="all" && fSta==="all";
  list.forEach(function(p){
    var b = document.createElement("button");
    b.type = "button";
    b.className = "card" + (p.featured && showFeat ? " featured" : "");
    b.setAttribute("aria-haspopup","dialog");
    b.innerHTML = '<div class="cover">'+cover(p)+'<span class="status '+p.st+'">'+STATUS[p.st]+'</span></div>' +
      '<div class="card-body"><h3>'+esc(p.title)+'</h3><span class="cat">'+esc(p.cat)+'</span><p class="sum">'+esc(p.sum)+'</p></div>';
    setCv($(".cover", b), p);
    b.addEventListener("click", function(){ openProject(p.id, b); });
    grid.appendChild(b);
  });
  if (!list.length) grid.innerHTML = '<p class="empty">Aucun projet ne correspond à ces filtres. Choisissez « Tous » pour tout afficher.</p>';
  $("#count").textContent = list.length + (list.length>1 ? " projets affichés" : " projet affiché");
}

function renderCaseStudies(){
  var grid = $("#case-grid");
  if (!grid) return;
  grid.innerHTML = PROJECTS.filter(function(p){ return p.caseStudy; }).map(function(p){
    return '<a class="case-study" href="projet.html?id='+encodeURIComponent(p.id)+'">' +
      '<img src="'+esc(p.coverImage)+'" alt="Visuel du projet '+esc(p.title)+'" loading="lazy">' +
      '<span class="case-study-copy"><span class="case-study-label">'+esc(p.cat)+'</span><strong>'+esc(p.title)+'</strong><span>'+esc(p.sum)+'</span><span class="case-study-link">Lire l’étude de cas <span aria-hidden="true">→</span></span></span>' +
    '</a>';
  }).join("");
}

/* ====== FICHE PROJET ====== */
var dlg = $("#dlg");
function openProject(id){
  var p = byId(id); if(!p) return;
  var images = p.images || (p.image ? [p.image] : []);
  var cv = $("#dlg-cover"); setCv(cv, p); cv.innerHTML = cover(p);
  var res = p.result.map(function(r){ return "<li>"+esc(r)+"</li>"; }).join("");
  var statusNote = p.st==="concept" ? '<p class="note">Ce projet est au stade du concept : il n\'est pas encore développé.</p>' :
                   p.st==="cours" ? '<p class="note">Ce projet est en cours de développement ou d\'apprentissage.</p>' : "";
  $("#dlg-body").innerHTML =
    '<h3 id="dlg-title">'+esc(p.title)+'</h3>' +
    '<div class="dlg-meta"><span class="tag">'+STATUS[p.st]+'</span><span class="tag">'+esc(DOMAINS[p.dom])+'</span></div>' +
    '<p style="color:var(--muted);font-size:15px">'+esc(p.cat)+'</p>' +
    images.map(function(image){ return '<img class="poster" style="max-width:300px;margin-top:18px" src="'+esc(image)+'" alt="'+esc(p.title)+'">'; }).join("") +
    '<div class="case">' +
      '<div><h4>Le problème</h4><p>'+esc(p.problem)+'</p></div>' +
      '<div><h4>La solution</h4><p>'+esc(p.solution)+'</p></div>' +
      '<div><h4>Mon rôle</h4><p>'+esc(p.role)+'</p></div>' +
      '<div><h4>Technologies</h4><p>'+p.tech.map(function(t){ return '<span class="tag" style="margin-right:6px">'+esc(t)+'</span>'; }).join("")+'</p></div>' +
      '<div><h4>Résultat et apprentissages</h4><ul>'+res+'</ul></div>' +
    '</div>' + statusNote + (p.note ? '<p class="note">'+esc(p.note)+'</p>' : "") +
    '<div class="dlg-actions">' +
      (p.link ? '<a class="btn btn-primary" href="'+esc(p.link)+'" target="_blank" rel="noopener">'+esc(p.linkTxt||"Voir le projet")+'</a>' : '') +
      '<button class="btn btn-ghost" type="button" id="dlg-close2">Fermer</button>' +
    '</div>';
  $("#dlg-close2").addEventListener("click", function(){ dlg.close(); });
  dlg.showModal();
  dlg.scrollTop = 0;
}
$("#dlg-x").addEventListener("click", function(){ dlg.close(); });
dlg.addEventListener("click", function(e){ if (e.target === dlg) dlg.close(); });

/* ====== FACETTES ====== */
function renderFacet(key){
  var f = FACETS[key];
  var links = f.ids.map(function(id){ var p = byId(id); return '<button type="button" data-open="'+id+'"><span>'+esc(p.title)+'</span><small>'+STATUS[p.st]+'</small></button>'; }).join("");
  $("#fpanel").innerHTML = '<p>'+esc(f.p)+'</p><div class="facet-links">'+links+'</div>';
  $$("[data-open]", $("#fpanel")).forEach(function(b){ b.addEventListener("click", function(){ openProject(b.getAttribute("data-open")); }); });
}
var ftabs = $$("#ftabs [role=tab]");
function selectFacet(btn, focus){
  ftabs.forEach(function(t){ var on = t===btn; t.setAttribute("aria-selected", String(on)); t.tabIndex = on?0:-1; });
  $("#fpanel").setAttribute("aria-labelledby", btn.id);
  renderFacet(btn.getAttribute("data-f"));
  if (focus) btn.focus();
}
ftabs.forEach(function(t, i){
  t.addEventListener("click", function(){ selectFacet(t); });
  t.addEventListener("keydown", function(e){
    var n = null;
    if (e.key==="ArrowRight") n = ftabs[(i+1)%ftabs.length];
    if (e.key==="ArrowLeft") n = ftabs[(i-1+ftabs.length)%ftabs.length];
    if (n){ e.preventDefault(); selectFacet(n, true); }
  });
});

/* ====== COMPETENCES ====== */
$("#skills").innerHTML = SKILLS.map(function(g){
  var li = g.items.map(function(it){
    var pips = ""; for (var i=1;i<=4;i++) pips += '<i class="'+(i<=it[1]?"on":"")+'"></i>';
    return '<li><span>'+esc(it[0])+'</span><span class="lvl"><span class="pips" role="img" aria-label="Niveau '+it[1]+' sur 4">'+pips+'</span></span><span class="via">'+esc(it[2])+'</span></li>';
  }).join("");
  return '<article class="skill-card"><h3>'+esc(g.t)+'</h3><p>'+esc(g.d)+'</p><ul class="skill-list">'+li+'</ul></article>';
}).join("");

/* ====== CV ====== */
if (CONFIG.cvFile) {
  var cvBtn = $("#print"), cvLink = document.createElement("a");
  cvLink.className = cvBtn.className; cvLink.href = CONFIG.cvFile; cvLink.setAttribute("download", "");
  cvLink.textContent = "Télécharger le CV (PDF)"; cvBtn.replaceWith(cvLink);
} else {
  $("#print").addEventListener("click", function(){ window.print(); });
}

/* ====== CONTACT ====== */
$("#mail-txt").textContent = CONFIG.email;
$("#mail-link").setAttribute("href", "mailto:" + CONFIG.email);
$("#form").addEventListener("submit", function(e){
  e.preventDefault();
  var f = e.target, nom = f.nom.value.trim(), mail = f.email.value.trim(), msg = f.msg.value.trim();
  var out = $("#fmsg");
  if (!nom || !/^\S+@\S+\.\S+$/.test(mail) || !msg){ out.textContent = "Renseignez votre nom, un e-mail valide et votre message."; return; }
  var body = msg + "\n\n— " + nom + " (" + mail + ")";
  window.location.href = "mailto:" + CONFIG.email + "?subject=" + encodeURIComponent("Contact portfolio — " + nom) + "&body=" + encodeURIComponent(body);
  out.textContent = "Votre application e-mail s'ouvre avec le message prêt à envoyer.";
});

/* ====== NAVIGATION ====== */
var nav = $("#nav"), menu = $("#menu");
menu.addEventListener("click", function(){
  var o = nav.classList.toggle("open");
  menu.setAttribute("aria-expanded", String(o));
  menu.setAttribute("aria-label", o ? "Fermer le menu" : "Ouvrir le menu");
});
$$("#nav a").forEach(function(a){ a.addEventListener("click", function(){ nav.classList.remove("open"); menu.setAttribute("aria-expanded","false"); }); });

var links = $$("#nav a");
var targets = links.map(function(a){ return $(a.getAttribute("href")); });
function onScroll(){
  var h = document.documentElement;
  var max = h.scrollHeight - h.clientHeight;
  $("#progress").style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
  var y = h.scrollTop + 140, cur = 0;
  targets.forEach(function(t, i){ if (t && t.offsetTop <= y) cur = i; });
  links.forEach(function(a, i){ if (i===cur) a.setAttribute("aria-current","true"); else a.removeAttribute("aria-current"); });
}
window.addEventListener("scroll", onScroll, { passive:true });
window.addEventListener("resize", onScroll);

/* ====== THEME ====== */
var root = document.documentElement, tbtn = $("#theme");
var SUN = tbtn.innerHTML;
var MOON = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';
function applyTheme(t){
  root.setAttribute("data-theme", t);
  tbtn.innerHTML = t==="dark" ? SUN : MOON;
  tbtn.setAttribute("aria-label", t==="dark" ? "Passer en mode clair" : "Passer en mode sombre");
  var m = document.querySelector('meta[name="theme-color"]'); if (m) m.setAttribute("content", t==="dark" ? "#17151F" : "#F5F3F8");
}
var saved = null; try { saved = localStorage.getItem("mk-theme"); } catch(e){}
applyTheme(saved || (window.matchMedia && matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"));
tbtn.addEventListener("click", function(){
  var n = root.getAttribute("data-theme")==="dark" ? "light" : "dark";
  applyTheme(n); try { localStorage.setItem("mk-theme", n); } catch(e){}
});

/* ====== INIT ====== */
$("#poster-about").src = POSTER;
renderFilters(); renderGrid(); renderCaseStudies(); renderFacet("tech"); onScroll();

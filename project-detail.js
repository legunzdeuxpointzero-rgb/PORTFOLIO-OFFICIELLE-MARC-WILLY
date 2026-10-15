function escapeHtml(value){
  return String(value).replace(/[&<>"']/g, function(char){
    return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char];
  });
}

var projectId = new URLSearchParams(window.location.search).get("id");
var project = PROJECTS.filter(function(item){ return item.id === projectId && item.caseStudy; })[0];
var main = document.getElementById("case-main");

if (!project) {
  document.title = "Étude de cas introuvable — Kouame N'Guetta Marc Wilfried";
  main.innerHTML = '<section class="wrap case-error"><h1>Étude de cas introuvable</h1><p>Cette fiche n’est pas disponible. Consultez les études de cas publiées.</p><a class="btn btn-primary" href="index.html#etudes-de-cas">Voir les études de cas</a></section>';
} else {
  var image = (project.images && project.images[0]) || project.coverImage || project.image;
  var imageMarkup = image ? '<img class="case-hero-image" src="'+escapeHtml(image)+'" alt="Visuel du projet '+escapeHtml(project.title)+'">' : '';
  var results = project.result.map(function(result){ return '<li>'+escapeHtml(result)+'</li>'; }).join("");
  var technologies = project.tech.map(function(technology){ return '<span class="tag">'+escapeHtml(technology)+'</span>'; }).join("");
  var statusNote = project.st === "concept" ? '<p class="note">Ce projet est au stade du concept : il n’est pas encore développé.</p>' :
    project.st === "cours" ? '<p class="note">Ce projet est en cours de développement ou d’apprentissage.</p>' : '';

  document.title = project.title + " — Étude de cas";
  document.querySelector('meta[name="description"]').setAttribute("content", project.sum);
  main.innerHTML =
    '<section class="case-hero"><div class="wrap">' +
      '<p class="case-breadcrumb"><a href="index.html#projets">Projets</a> / Étude de cas</p>' +
      '<h1 class="case-title">'+escapeHtml(project.title)+'</h1>' +
      '<p class="case-summary">'+escapeHtml(project.sum)+'</p>' + imageMarkup +
    '</div></section>' +
    '<div class="wrap case-content"><div class="case-content-main">' +
      '<section><h2>Le contexte et le défi</h2><p>'+escapeHtml(project.problem)+'</p></section>' +
      '<section><h2>La solution</h2><p>'+escapeHtml(project.solution)+'</p></section>' +
      '<section><h2>Mon rôle</h2><p>'+escapeHtml(project.role)+'</p></section>' +
      '<section><h2>Résultats observables</h2><ul>'+results+'</ul></section>' + statusNote +
      '<div class="dlg-actions">'+(project.link ? '<a class="btn btn-primary" href="'+escapeHtml(project.link)+'" target="_blank" rel="noopener">'+escapeHtml(project.linkTxt || "Voir le projet")+' ↗</a>' : '')+'<a class="btn btn-ghost" href="index.html#contact">Parler d’un projet similaire</a></div>' +
    '</div><aside class="case-aside"><h2>Repères</h2><p>'+escapeHtml(project.cat)+'</p><div class="case-tech">'+technologies+'</div></aside></div>';
}

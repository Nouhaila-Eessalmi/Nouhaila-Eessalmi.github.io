/* =========================================================
   CÓDIGO QUE DESENHA A PÁGINA
   Não precisas de mexer aqui. Os textos estão em projetos.js
   ========================================================= */
(function () {
'use strict';

/* Protege os textos para não serem lidos como HTML */
function esc(s) {
  return String(s).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
}

function chips(lista) {
  return '<ul class="chips">' + (lista || []).map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul>';
}

/* Pequenos desenhos para o topo dos cartões sem imagem */
const desenhos={
 migrar:'<svg viewBox="0 0 320 110" preserveAspectRatio="xMidYMid slice"><rect x="40" y="25" width="90" height="60" rx="8" fill="#ffffff18" stroke="#ffffff44"/><rect x="190" y="25" width="90" height="60" rx="8" fill="#ff6a4d"/><path d="M138 55h44" stroke="#ffc861" stroke-width="3"/><path d="M174 47l10 8-10 8" fill="none" stroke="#ffc861" stroke-width="3"/><rect x="52" y="37" width="50" height="6" rx="3" fill="#ffffff55"/><rect x="52" y="50" width="66" height="6" rx="3" fill="#ffffff33"/><rect x="202" y="37" width="40" height="6" rx="3" fill="#2d1838"/><rect x="202" y="50" width="66" height="22" rx="5" fill="#ffffff66"/></svg>',
 api:'<svg viewBox="0 0 320 110" preserveAspectRatio="xMidYMid slice"><circle cx="80" cy="55" r="26" fill="#8fb8ff"/><circle cx="240" cy="55" r="26" fill="#3ccf91"/><path d="M110 45h100M210 65H110" stroke="#ffc861" stroke-width="3" stroke-dasharray="6 6"/><text x="160" y="38" text-anchor="middle" fill="#f6f0fa" font-size="13" font-family="Inter">GET</text><text x="160" y="84" text-anchor="middle" fill="#f6f0fa" font-size="13" font-family="Inter">JSON</text></svg>',
 sql:'<svg viewBox="0 0 320 110" preserveAspectRatio="xMidYMid slice"><g fill="#ece4f4"><ellipse cx="90" cy="30" rx="34" ry="10"/><path d="M56 30v46c0 6 15 10 34 10s34-4 34-10V30c0 6-15 10-34 10S56 36 56 30z" opacity=".85"/></g><g fill="#ff6a4d"><rect x="160" y="70" width="18" height="18" rx="3"/><rect x="186" y="56" width="18" height="32" rx="3"/><rect x="212" y="40" width="18" height="48" rx="3"/><rect x="238" y="26" width="18" height="62" rx="3"/></g></svg>',
 app:'<svg viewBox="0 0 320 110" preserveAspectRatio="xMidYMid slice"><rect x="130" y="10" width="60" height="110" rx="12" fill="#ece4f4"/><rect x="138" y="24" width="44" height="10" rx="3" fill="#ff6a4d"/><rect x="138" y="42" width="44" height="8" rx="3" fill="#2d183844"/><rect x="138" y="56" width="44" height="8" rx="3" fill="#2d183844"/><rect x="138" y="70" width="30" height="8" rx="3" fill="#2d183844"/><text x="70" y="64" fill="#ffc861" font-size="30" font-family="serif">ع</text><text x="230" y="64" fill="#ffc861" font-size="26" font-family="Space Grotesk">Aa</text></svg>',
 n8n:'<svg viewBox="0 0 320 110" preserveAspectRatio="xMidYMid slice"><g stroke="#ffc861" stroke-width="3" fill="none"><path d="M86 55h44M190 55h44"/></g><rect x="40" y="35" width="46" height="40" rx="10" fill="#8fb8ff"/><rect x="130" y="30" width="60" height="50" rx="10" fill="#ff6a4d"/><rect x="234" y="35" width="46" height="40" rx="10" fill="#3ccf91"/><path d="M152 46l18 9-18 9z" fill="#2d1838"/></svg>',
 web:'<svg viewBox="0 0 320 110" preserveAspectRatio="xMidYMid slice"><rect x="70" y="16" width="180" height="90" rx="10" fill="#ece4f4"/><rect x="70" y="16" width="180" height="16" rx="8" fill="#ffffff"/><circle cx="82" cy="24" r="3" fill="#ff6a4d"/><circle cx="92" cy="24" r="3" fill="#ffc861"/><rect x="84" y="42" width="40" height="40" rx="20" fill="#ff6a4d"/><rect x="136" y="46" width="90" height="8" rx="4" fill="#2d183866"/><rect x="136" y="60" width="70" height="8" rx="4" fill="#2d183844"/><text x="230" y="98" fill="#2d1838" font-size="12" font-family="monospace">&lt;/&gt;</text></svg>'
};


/* ---- Competências ---- */
document.getElementById('skills').innerHTML = competencias.map(function (c) {
  return '<div class="sk"><h3>' + esc(c[0]) + '</h3>' + chips(c[1]) + '</div>';
}).join('');

/* ---- Projetos ---- */
document.getElementById('proj').innerHTML = projetos.map(function (p) {
  var topo = p.imagem
    ? '<div class="top foto"><img src="' + esc(p.imagem) + '" alt="' + esc('Captura de ecrã: ' + p.titulo) + '" loading="lazy"></div>'
    : '<div class="top">' + (desenhos[p.desenho] || desenhos.web) + '</div>';
  var links = (p.links && p.links.length)
    ? '<div class="links">' + p.links.map(function (l) {
        return '<a href="' + esc(l[1]) + '" target="_blank" rel="noopener">' + esc(l[0]) + ' →</a>';
      }).join('') + '</div>'
    : '';
  return '<article class="card">' + topo + '<div class="body">' +
    '<h3>' + esc(p.titulo) + '</h3>' +
    '<p class="ctx">' + esc(p.contexto || '') + '</p>' +
    '<p>' + esc(p.descricao || '') + '</p>' +
    chips(p.tecnologias) + links +
    '</div></article>';
}).join('');

/* ---- Experiência e formação ---- */
function linhaTempo(lista) {
  return lista.map(function (i) {
    return '<li><span class="when">' + esc(i[0]) + '</span><div><h3>' + esc(i[1]) + '</h3><p>' + esc(i[2]) + '</p></div></li>';
  }).join('');
}
document.getElementById('exp').innerHTML = linhaTempo(experiencia);
document.getElementById('edu').innerHTML = linhaTempo(formacao);

/* ---- Ano no rodapé ---- */
var ano = document.getElementById('ano');
if (ano) ano.textContent = new Date().getFullYear();
})();

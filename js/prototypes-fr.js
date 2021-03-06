/*
 * Droits d'auteur 2015 Valentin Lorentz <progval+github@progval.net>
 * Droits d'auteur 2015 Christophe-Marie Duquesne <chmd@chmd.fr>
 */

'use strict';

var Objet = Object
Objet.créer = Objet.create

var Chaine = String
Chaine.prototype.enMinuscules = Chaine.prototype.toLowerCase
Chaine.prototype.enMajuscules = Chaine.prototype.toUpperCase
Chaine.prototype.remplacer = Chaine.prototype.replace
Chaine.prototype.caractèreÀ = Chaine.prototype.charAt
Chaine.prototype.tranche = Chaine.prototype.slice
Chaine.prototype.sansAccents = function () {
    // Faute d'une bibliotheque unidecode, nous nous limitons aux lettres
    // accentuées du français.
    // https://fr.wikipedia.org/wiki/Diacritiques_utilisés_en_français
    return this
        .remplacer("à", "a")
        .remplacer("â", "a")
        .remplacer("ç", "c")
        .remplacer("é", "e")
        .remplacer("è", "e")
        .remplacer("ê", "e")
        .remplacer("ë", "e")
        .remplacer("î", "i")
        .remplacer("ï", "i")
        .remplacer("ô", "o")
        .remplacer("ù", "u")
        .remplacer("ü", "u")
        .remplacer("À", "A")
        .remplacer("Â", "A")
        .remplacer("Ç", "C")
        .remplacer("É", "E")
        .remplacer("È", "E")
        .remplacer("Ê", "E")
        .remplacer("Ë", "E")
        .remplacer("Î", "I")
        .remplacer("Ï", "I")
        .remplacer("Ô", "O")
        .remplacer("Ù", "U")
        .remplacer("Ü", "U");
}
Chaine.prototype.majusculer = function() {
    return this.caractèreÀ(0).enMajuscules() + this.tranche(1);
}

var Tableau = Array
Tableau.prototype.trier = Tableau.prototype.sort
Tableau.prototype.longueur = function () { return this.length; }
Tableau.prototype.pousser = Tableau.prototype.push

document.créerÉlément = document.createElement
document.récupérerÉlémentParNomDÉtiquette = document.getElementsByTagName;
document.localisation = document.location;
document.localisation.protocole = document.localisation.protocol;

jQuery.fn.extend({
    clic: function (x) { return this.click(x); },
    enfants: function () { return this.children(); },
    dernier: function () { return this.last(); },
    ajouter: function (x) { return this.append(x); }
});
$.récupérerJSON = $.getJSON

// Création de liste de liens au chargement de la page
function createGalleryList() {
  var temp = "<a href='#' class='resetFilter'>Tous</a><br>";

  $(".gallery-chapter").each(function() {
    temp += "<a href='#' class='galleryDetail'>" + $(this).text() + "</a><br>";
  })
  $("#flyHDGalleryLinks").html(temp);
}

// Réinitialisation de la galerie, lors du clic sur "Tous"
// Et à chaqeu clic pour changer de filtre.
function resetGallery() {
  $(".selectedChapter").removeClass("selectedChapter");

  $(".hidden").each(function() {
    $(this).removeClass("hidden");
  })
}

// Au chargement de la page, veille.
$(document).ready(function(event) {

  // Création de la galerie
  createGalleryList();

 // Réaction au clic sur l'un des filtres
  $(".galleryDetail").on("click", function() {
    var chapter = $(this).text();
    // Réinitialiser le précédent filtre.
    resetGallery();

    $(this).addClass("selectedChapter");
    // Parcourir les chapitres, cacher ceux qui ne correpondent pas à la sélection.
    $(".gallery-chapter").each(function() {
      if (chapter != $(this).text()) {
        $(this).addClass("hidden");
        $(this).next("div").addClass("hidden");
        }
    })

    return false;
  })

  // Réaction au clic sur le lien "Tous"
  $(".resetFilter").on("click", resetGallery);
})

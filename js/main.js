function showExploreContainer() {
  var documentContainer = document.getElementById("documents-container");

  if (documentContainer.style.display === "none") {
     documentContainer.style.display = "block";
   } else {
     documentContainer.style.display = "none";
   }
}

function showExploreContainer() {
  var documentContainer = document.getElementById("documents-container");

  if (documentContainer.style.display === "none") {
     documentContainer.style.display = "block";
     window.scrollTo(0,document.body.scrollHeight);
   } else {
     documentContainer.style.display = "none";
   }
}

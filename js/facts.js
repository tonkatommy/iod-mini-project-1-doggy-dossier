const updateFactCard = (breed) => {
  const factCardTemplate = document.getElementById("factcard-template").content.clone(true);
  factCardTemplate.querySelector("postcard__title").innerHTML = "Dog Breed Here";
};

const fetchData = async (url) => {
  await fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Fetch Unsuccessful");
      }
      return response.json();
    })
    .then((dogs) => {
      console.log(dogs);
      // updateGallery(dogs);
    });
};

fetchData(
  "https://api.thedogapi.com/v1/breeds?limit=10&page=0?api_key=live_Ev8ePMHoEtQrBVPRAZtDVrDFTign6M4uuLTQI7dSbpf5V7aUb4c1q5WPq8eDPESF"
);

const breedSelector = document.getElementById("breedSelector");

breedSelector.addEventListener("change", function () {
  updateFactCard(this.value);
});

// import {} from "./variables.js";

// const axios = require("axios");
// // const fileSys = require("fs");

// axios.defaults.headers.common["x-api-key"] = "live_Ev8ePMHoEtQrBVPRAZtDVrDFTign6M4uuLTQI7dSbpf5V7aUb4c1q5WPq8eDPESF";

// async function getData(url) {
//   return await axios
//     .get(url)
//     .then(function (response) {
//       // handle success
//       // console.log(response.data);
//       dogs = JSON.stringify(response.data);
//       // fileSys.writeFile("dogs.json", JSON.stringify(response.data), function (err) {
//       //   console.log(err);
//       // });
//     })
//     .catch(function (error) {
//       // handle error
//       console.log(error);
//     })
//     .finally(function () {
//       // always executed
//     });
// }

// getData("https://api.thedogapi.com/v1/breeds");
// console.log(dogs);
// document.querySelector(".hero-image").src = "";

// const getData = async (url) => {
//   const response = await axios.get(url);
//   // console.log(response);
//   dogsJson = response.data;
//   updateHero();
// };

const API_ENDPOINT = "https://api.thedogapi.com/v1/breeds?api_key=";
const API_KEY = "live_Ev8ePMHoEtQrBVPRAZtDVrDFTign6M4uuLTQI7dSbpf5V7aUb4c1q5WPq8eDPESF";

const updateHero = (dogs) => {
  // Flag to check for first element
  let firstElement = true;
  // Loop through dogs
  for (const dog of dogs) {
    const heroItemTemplate = document.getElementById("hero-carousel-item-template").content.cloneNode(true);
    if (firstElement) {
      heroItemTemplate.querySelector(".hero-c-item").className = "carousel-item hero-c-item active";
      firstElement = false;
    }
    heroItemTemplate.querySelector(".hero-c-img").src = dog.image.url;
    heroItemTemplate.querySelector(".hero-c-img").alt = `Image of dog: ${dog.name}`;
    document.querySelector(".hero-carousel-items").appendChild(heroItemTemplate);
  }

  // console.log("Update Done!");
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
      updateHero(dogs);
    });
};

fetchData(API_ENDPOINT + API_KEY);
// fetchData("../json/dogs.json");

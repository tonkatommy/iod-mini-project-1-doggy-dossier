const API_ENDPOINT = "https://api.thedogapi.com/v1/breeds?api_key=";
const API_KEY = "live_Ev8ePMHoEtQrBVPRAZtDVrDFTign6M4uuLTQI7dSbpf5V7aUb4c1q5WPq8eDPESF";

const updateGallery = (dogs) => {
  // Loop through the list of dogs
  dogs.forEach((dog) => {
    const cardItemTemplate = document.getElementById("gallery-card-template").content.cloneNode(true);
    cardItemTemplate.querySelector(".gallery-card-image").src = dog.image.url;
    cardItemTemplate.querySelector(".gallery-card-image").alt = `Image of dog: ${dog.name}`;
    cardItemTemplate.querySelector(".card-text").innerHTML = dog.name;
    document.querySelector(".gallery-items").appendChild(cardItemTemplate);
  });
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
      updateGallery(dogs);
    });
};

fetchData(API_ENDPOINT + API_KEY);

const applyClickHandler = (btnGroupElement) => {
  // Select all of the buttons in the button group.
  const btns = btnGroupElement.querySelectorAll("btn");

  // Iterate over the selected buttons and add an onClick event handler to each button.
  btns.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Write the code that you want to execute when a button is clicked.
      console.log("Button clicked!");
      setActiveBtn(btn);
    });
  });
};

const setActiveBtn = (buttonClicked) => {
  const buttons = document.querySelectorAll("g-btn");
  buttons.forEach((button) => {
    button.classList.remove("btn-active");
  });

  // Add the 'button active' style to the button that was pressed.
  buttonClicked.classList.add("btn-active");
};

const galleryBtnGroup = document.querySelector(".gallery-btn-group");

applyClickHandler(galleryBtnGroup);

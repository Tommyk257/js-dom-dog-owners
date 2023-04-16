console.log(data);

// WRITE YOUR CODE BELOW!

const ul = document.querySelector(".dogs-list");

data.forEach((element) => {
  const liEl = document.createElement("li");
  liEl.className = "dogs-list__button";
  liEl.innerText = element.name;

  ul.append(liEl);
});

const mainS = document.querySelector(".main__dog-section");

// function

// data.forEach((dogCards) => {
//   const h2 = document.createElement("h2");
//   h2.innerText = dogCards.name;
//   h2.className = "dogsNames";

//   const dogImg = document.createElement("img");
//   dogImg.src = dogCards.image;

//   const afterimg = document.createElement("div");
//   afterimg.className = "main__dog-section__desc";

//   const bio = document.createElement("h3");
//   bio.innerText = "Bio";

//   const dogInfo = document.createElement("p");
//   dogInfo.innerText = dogCards.bio;

//   mainS.append(h2);
//   mainS.append(dogImg);

//   mainS.append(bio);
//   mainS.append(afterimg);
//   afterimg.append(bio);
//   afterimg.append(dogInfo);
// });

// function changeTitle() {
//   const dogCards = document.querySelector("h2");
//   dogCards.remove();
// }

// const dogButton = document.querySelector("ul");
// dogButton.addEventListener("click", changeTitle);

// weve created the title with dogs name
// we need to create img tags to display dog images
// create a

// we need a loop to make the 'buttons' clickable to display each dog card

// we need to display one card at the time creating a funcion linked to the first loop

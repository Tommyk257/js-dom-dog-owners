console.log(data);

// WRITE YOUR CODE BELOW!

const ul = document.querySelector(".dogs-list");

data.forEach((element) => {
  const liEl = document.createElement("li");
  liEl.className = "dogs-list__button";
  liEl.innerText = element.name;
  // console.log(liEl)

  // console.log(dogImg)
  ul.append(liEl);
});

const mainS = document.querySelector(".main__dog-section");

data.forEach((dogCards) => {
  const h2 = document.querySelector("h2");
    h2.innerText = dogCards.name;
    
  const dogImg = document.createElement("img");
  dogImg.src = dogCards.image;


  mainS.append(dogImg);
  h2.append(mainS);
});

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
    const h2 = document.createElement("h2");
      h2.innerText = dogCards.name;
      
    const dogImg = document.createElement("img");
    dogImg.src = dogCards.image[0];
  
    const afterimg = document.createElement("div")
    afterimg.className = "main__dog-section__desc"
    
    const bio = document.createElement("h3")
    bio.innerText = "Bio"
    
    const dogInfo = document.createElement("p")
    dogInfo.innerText = dogCards.bio
    

    
    
    
  mainS.append(dogImg);
  mainS.append(h2);
  mainS.append(bio);
  afterimg.append(bio)
  afterimg.append(dogInfo)
 
})


// weve created the title with dogs name
// we need to create img tags to display dog images
// create a 
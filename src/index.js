console.log(data);

// WRITE YOUR CODE BELOW!

const ul = document.querySelector(".dogs-list");


data.forEach((element) => {
  const liEl = document.createElement("li");
  liEl.className = "dogs-list__button";
  liEl.innerText = element.name;
 ul.append(liEl);


  liEl.addEventListener("click", function() {
    const mainS = document.querySelector(".main");
    mainS.innerText = "";

    const section = document.createElement("section")
    section.setAttribute("class", "main__dog-section");
    mainS.append(section)
 
   const h2 = document.createElement("h2");
   h2.innerText = element.name;
    section.append(h2)
    
     const dogImg = document.createElement("img");
    dogImg.src = element.image;
    section.append(dogImg)

       const afterimg = document.createElement("div");
    afterimg.className = "main__dog-section__desc";
    section.append(afterimg)

 const bio = document.createElement("h3");
    bio.innerText = "Bio";
    afterimg.append(bio)


 const dogInfo = document.createElement("p");
  dogInfo.innerText = element.bio;
afterimg.append(dogInfo)
  })

});


// when + is clicked it clears the dog page
// create a form for the info of the dog 
// add a new ls item to liEl with the information from the form
// 

// Create a function to loop each card
// in the loop get each card separately - index -
// dispay each different card when button is clicked


// weve created the title with dogs name
// we need to create img tags to display dog images
// create a

// we need a loop to make the 'buttons' clickable to display each dog card

// we need to display one card at the time creating a funcion linked to the first loop

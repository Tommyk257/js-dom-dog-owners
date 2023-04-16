console.log(data);

// WRITE YOUR CODE BELOW!

const ul = document.querySelector(".dogs-list");

data.forEach((element) => {
  const liEl = document.createElement("li");
  liEl.className = "dogs-list__button";
  liEl.innerText = element.name;
  ul.append(liEl);

  liEl.addEventListener("click", function () {
    const mainS = document.querySelector(".main");
    mainS.innerText = "";

    const section = document.createElement("section");
    section.setAttribute("class", "main__dog-section");
    mainS.append(section);

    const h2 = document.createElement("h2");
    h2.innerText = element.name;
    section.append(h2);

    const dogImg = document.createElement("img");
    dogImg.src = element.image;
    section.append(dogImg);

    const afterimg = document.createElement("div");
    afterimg.className = "main__dog-section__desc";
    section.append(afterimg);

    const bio = document.createElement("h3");
    bio.innerText = "Bio";
    afterimg.append(bio);

    const dogInfo = document.createElement("p");
    dogInfo.innerText = element.bio;
    afterimg.append(dogInfo);

    const plusButton = document.querySelector(".dogs-list__button--add");

    // form function

    // plusButton.addEventListener("click", function () {
    //   const dogClear = document.querySelector(".main");
    //   mainS.innerHTML = "";

    //   const dogForm = document.createElement("section");
    //   dogForm.setAttribute("class", "main__dog-section");
    //   mainS.append(dogForm);

    //   const formTitle = document.createElement("h2");
    //   formTitle.innerText = "Add New Dog";
    //   dogForm.append(formTitle);

    //   const form = document.createElement("form");
    //   dogForm.append(form);

    //   const label = document.createElement("label");
    //   label.innerText = "Dog's name: ";
    //   form.append(label);

    //   const dogNameInput = document.createElement("input");
    //   form.append(dogNameInput);

    //   // const br = document.createElement("br")
    //   // form.append(br)

    //   // const br2 = document.createElement("br")
    //   // form.append(br2)

    //   const picLabel = document.createElement("label");
    //   picLabel.innerText = "Dogs picture: ";
    //   picLabel.setAttribute("for", "name");
    //   form.append(picLabel);

    //   const picInput = document.createElement("input", (type = "url"));
    //   picLabel.setAttribute("for", "image");
    //   form.append(picInput);

      // const br3 = document.createElement("br")
      // form.append(br3)

      // const br4 = document.createElement("br")
      // form.append(br4)

    //   const bioInput = document.createElement("label");
    //   bioInput.innerText = "Dogs Bio: ";
    //   picLabel.setAttribute("for", "name");
    //   form.append(bioInput);

    //   const textArea = document.createElement("textarea");
    //   form.append(textArea);
    //   textArea.className = "form input,textarea";

    //   const submitInput = document.createElement("button", (type = "submit"));
    //   submitInput.innerText = "Submit";
    //   form.append(submitInput);

    //   submitInput.addEventListener("click", function () {
    //     const addNewDog = document.querySelector("ul")
    //     addNewDog.innerHTML = "dogNameInput";

    //     const newDog = document.createElement("dogs-list__button");
       
    //     newDog.innerText = "dogNameInput"
    //     ul.append(newDog);

       
    //   });
    // });
  });
});

// if there is and eventlistern "click" on the submit button
// create a new li element to the dog buttons with the name of the dog
// from the submitted form displayed

// when + is clicked it clears the dog page
// create a section main-dog-section for the info of the dog

// header with add new dog
// create a form
// create a label for dog name dog img and bio
// create the submit input

//     <section class="main__dog-section">
/* <h2>Add a new Dog</h2>
<form class="form">

  <label for="name">Dog's name</label>
  <input type="text" id="name" name="name">

  <label for="image">Dog's picture</label>
  <input type="url" id="image" name="image">

  <label for="bio">Dog's bio</label>
  <textarea rows="5" id="bio" name="bio"></textarea>

  <input type="submit" id="submit" name="submit" value="Let's add a dog!" class="form__button">
</form>
</section> */

// add a new ls item to the dog buttons
// display the dog card with the infor from the form

// Create a function to loop each card
// in the loop get each card separately - index -
// dispay each different card when button is clicked

// weve created the title with dogs name
// we need to create img tags to display dog images
// create a

// we need a loop to make the 'buttons' clickable to display each dog card

// we need to display one card at the time creating a funcion linked to the first loop

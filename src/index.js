console.log(data);

// WRITE YOUR CODE BELOW!


const ul = document.querySelector(".dogs-list")

data.forEach((element) => {
    
    const liEl = document.createElement("li");
    liEl.className = "dogs-list__button"
    liEl.innerText = element.name
    // console.log(liEl)    
    
    
    ul.append(liEl);
})




let quizContainer = document.getElementById("quizContainer");


questions.forEach((question) => {
    let feedBack = document.createElement("p");
    
    let buttonTrue = document.createElement("button");
    buttonTrue.classList.add("button-style");
    buttonTrue.innerText = "TRUE";

    buttonTrue.addEventListener("click", () => {
        if(question.answer == true){
            feedBack.innerText = "Rätt svar";
            feedBack.classList.add("correct");
        }
        else{
            feedBack.innerText = "Fel svar";
            feedBack.classList.add("wrong");
        }
    })

    let buttonFalse = document.createElement("button");
    buttonFalse.classList.add("button-style");
    buttonFalse.innerText = "FALSE";

    buttonFalse.addEventListener("click", () => {
        if(question.answer == false){
            feedBack.innerText = "Rätt svar";
            feedBack.classList.add("correct");
        }
        else{
            feedBack.innerText = "Fel svar";
            feedBack.classList.add("wrong");
        }
    })

    let buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    buttonContainer.appendChild(buttonTrue);
    buttonContainer.appendChild(buttonFalse);

    let box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML = `
    <h2>${question.title}</h2>
    <p>${question.question}</p>
    `;

    box.appendChild(buttonContainer);
    box.appendChild(feedBack);
    quizContainer.appendChild(box)
})





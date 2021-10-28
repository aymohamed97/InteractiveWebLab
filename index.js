let message = document.querySelector('aside')



function addMovie(event){
    event.preventDefault()
    let inputField = document.querySelector("input");

    const movie = document.createElement("li");
    const movieTitle= document.createElement("span");
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle);
    let deleteBtn = document.createElement("button")
    deleteBtn.textContent= 'x';
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)
    document.querySelector("ul").appendChild(movie);
    inputField.value = ''
}

let form = document.querySelector("form");
form.addEventListener('submit', addMovie)

function deleteMovie(event){
    message.textContent= `${event.target.parentNode.firstChild.textContent} deleted!`;
    event.target.parentNode.remove();
    revealMessage()
}

function crossOffMovie(event){
    event.target.classList.toggle('checked')
    if (event.target.classList.contains('checked'=== true)){
        message.textContent= `${event.target.textContent} watched!`
    } else{
        message.textContent= `${event.target.textContent} added back!`
    }
    revealMessage()
}

function revealMessage(){
    
    // call
    setTimeout(() => {
        message.classList.add()
}, 1000);

}
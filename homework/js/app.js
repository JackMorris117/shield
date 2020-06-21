document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#new-item-form');
    form.addEventListener('submit', handleFormSubmit);
    
    const avengersAssembleButton  = document.createElement("button");
    avengersAssembleButton.textContent = "Avengers Assemble!";
    form.appendChild(avengersAssembleButton);
    avengersAssembleButton.addEventListener('click', handleAssembly);

    const deleteAllButton = document.createElement("button");
    deleteAllButton.textContent = "Delete All";
    form.appendChild(deleteAllButton);
    deleteAllButton.addEventListener('click', handleDeleteAll);
    deleteAllButton.setAttribute('type', 'button')

    
})

const handleFormSubmit = function(event) {
    event.preventDefault();
    const marvelSuperHeroes = document.querySelector('#marvel-super-heroes');
    const newListItem = document.createElement('li');
    newListItem.textContent = `${event.target.alias.value} is secretly ${event.target.secret.value} and they are considered ${event.target.affiliation.value} with a power level of ${event.target.power.value}!`;
    marvelSuperHeroes.append(newListItem);
    resetForm();
};

const resetForm = function() {
    document.querySelector('#new-item-form').reset();
};

const handleDeleteAll = function() {
    document.querySelectorAll("li").forEach(character => character.remove());
};

const handleAssembly = function(event) {
    event.preventDefault();
    const marvelSuperHeroes = document.querySelector('#marvel-super-heroes');
    const ironMan = document.createElement('li');
    const captainAmerica = document.createElement('li');
    const hulk = document.createElement('li');
    const blackWidow = document.createElement('li');
    const avengers = document.createElement('li');

    ironMan.textContent ="Tony Stark is secretly Iron Man and they are considered Good with a power level of 65!";
    captainAmerica.textContent = "Steve Rogers is secretly Captain America and they are considered Good with a power level of 55!";
    hulk.textContent = "Bruce Banner is secretly The HULK and they are considered Good with a power level of 100!";
    blackWidow.textContent = "Natasha Romanoff is secretly Black Widow and they are considered Good with a power level of 35!";
    avengers.textContent = `The Avengers have Assembled!`;

    marvelSuperHeroes.appendChild(ironMan);
    marvelSuperHeroes.appendChild(captainAmerica);
    marvelSuperHeroes.appendChild(hulk);
    marvelSuperHeroes.appendChild(blackWidow);
    marvelSuperHeroes.appendChild(avengers);

    resetForm();
};

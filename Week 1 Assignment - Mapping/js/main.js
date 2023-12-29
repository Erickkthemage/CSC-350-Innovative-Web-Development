//  Name: Erick Diaz    Date: 10/18/23

let placesMap = new Map(); // Creating a new Map to store places
let index = 1; // Initializing index for the places
let placeInput = document.getElementById("txtAdd"); // Getting the input field for adding places

// Setting focus on the input field
placeInput.focus();

// Adding an event listener for the 'Enter' key press
placeInput.addEventListener("keypress",(event)=>{
    if(event.key === 'Enter'){
        addPlace();
    }
});

// Adding an event listener for the 'Add' button
document.querySelector("#btnAdd").addEventListener("click",addPlace);

// Adding an event listener for the 'Clear' button
document.querySelector("#btnClr").addEventListener("click",()=>{
    placesMap.clear(); // Clearing the map
    displayPlaces(); // Displaying the updated list of places
    placeInput.focus(); // Setting focus back to the input field
    placeInput.value = ''; // Clearing the input field
    index = 1; // Resetting the index
});

// Function to display places in the unordered list
function displayPlaces(){
    let placesUL = document.querySelector('ul');
    placesUL.innerHTML = '';

    // Iterating over the map to display each place
    for (let [index,place] of placesMap){
        let li = document.createElement('li');
        li.innerText = `${index} - ${place}`;
        placesUL.appendChild(li);
    }
}

// Function to add a new place to the map
function addPlace(){
    let newPlace = placeInput.value;

    if(newPlace){
        placesMap.set(index, newPlace); // Adding the new place to the map with the corresponding index
        displayPlaces(); // Displaying the updated list of places
        placeInput.value = ''; // Clearing the input field
        index++; // Incrementing the index for the next place
        placeInput.focus(); // Setting focus back to the input field
    }
}
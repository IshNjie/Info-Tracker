
// Assign info container to append innerHTML later
const info_container = document.getElementById('info_container')

// Function to suibmit form 
function formSubmit() {

    // Create an object of inputs
    const obj = {}

    // ID set in HTML file
    const fName = document.getElementById('FirstName').value;
    const lName = document.getElementById('LastName').value;
    const job = document.getElementById('Job').value;
    const skills = document.getElementById('Skills').value;

    // Remove the input value when next user wants to input
    document.getElementById('FirstName').value = '';
    document.getElementById('LastName').value = '';
    document.getElementById('Job').value = '';
    document.getElementById('Skills').value = '';

    // Create object with the entries above
    const entry = {
        FirstName : fName,
        LastName: lName,
        Job: job,
        skills: skills.split(',')
    }

    // Create a new object to append to empty object
    const newObj = Object.assign(obj,entry);
    
    infoCard(newObj);
    console.log(newObj);

}

// Create Info Card

function infoCard(person){

    const infoEl = document.createElement('div');
    // add a class to element
    infoEl.classList.add('info');

    // Grab entries from the person object after submit
    const fName = person.FirstName;
    const lName = person.LastName;
    const job = person.Job;
    const skills = person.skills;

    // Create InnerHTML to display information 
    const infoInnerHTML = `
    
    <div class = "info">

    <h2 class="FirstName"> ${fName}</h2>
    <p class="LastName"> Last Name: ${lName}</p>
    <p class="Job"> Job: ${job}</p>
    <p class="Skills"> List of Skills: ${skills}</p>


    </div>
    
    `

    infoEl.innerHTML = infoInnerHTML;

    info_container.appendChild(infoEl)

}
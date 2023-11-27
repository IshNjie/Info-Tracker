

const info_container = document.getElementById('info_container')


function formSubmit() {

    const obj = {}
    const fName = document.getElementById('FirstName').value;
    const lName = document.getElementById('LastName').value;
    const job = document.getElementById('Job').value;
    const skills = document.getElementById('Skills').value;

    document.getElementById('FirstName').value = '';
    document.getElementById('LastName').value = '';
    document.getElementById('Job').value = '';
    document.getElementById('Skills').value = '';

    const entry = {
        FirstName : fName,
        LastName: lName,
        Job: job,
        skills: skills.split(',')
    }

    const newObj = Object.assign(obj,entry)

    console.log(fName)
    console.log(lName)
    
    infoCard(newObj);
    console.log(newObj)


}


function infoCard(person){

    const infoEl = document.createElement('div');
    // add a class to element
    infoEl.classList.add('info');

    const fName = person.FirstName;
    const lName = person.LastName;
    const job = person.Job;
    const skills = person.skills;

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
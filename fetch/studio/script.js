//TODO: Add Your Code Below
window.addEventListener("load", event => {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        response.json().then(function (json) {
            const destination = document.getElementById("container");
            destination.innerHTML = `
            <div>Number of Astronauts: ${json.length}</div>
            `;
            let sortedJson = json.sort(function (a, b) {
                return a.hoursInSpace - b.hoursInSpace;
            })
            for (item in sortedJson) {
            if (sortedJson[item].active === false) {
                destination.innerHTML += `
            <div class="astronaut">
                <div class="bio">
                    <h3>${sortedJson[item].firstName} ${sortedJson[item].lastName}</h3>
                    <ul>
                    <li>Hours in space: ${sortedJson[item].hoursInSpace}</li>
                    <li>Active: ${sortedJson[item].active}</li>
                    <li>Skills: ${sortedJson[item].skills}</li>
                    </ul>
                </div>
                <img class="avatar" src="${sortedJson[item].picture}">
            </div>
                `
            } else if (sortedJson[item].active === true) {
                destination.innerHTML += `
            <div class="astronaut">
                <div class="bio">
                    <h3>${sortedJson[item].firstName} ${sortedJson[item].lastName}</h3>
                    <ul>
                    <li>Hours in space: ${sortedJson[item].hoursInSpace}</li>
                    <li class='true'>Active: ${sortedJson[item].active}</li>
                    <li>Skills: ${sortedJson[item].skills}</li>
                    </ul>
                </div>
                <img class="avatar" src="${sortedJson[item].picture}">
            </div>
                `
            }
            }
            let x = document.getElementsByClassName('true')
        });
    })
})

// Write your JavaScript code here.
// Remember to pay attention to page loading!

function takeOff () {
    const takeOff = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");

    takeOff.addEventListener("click", event => {
        window.alert("Shuttle Ready for Takeoff");
        flightStatus.innerHTML = "Shuttle in Flight.";
        shuttleBackground.style.backgroundColor = "#005f6a";
        spaceShuttleHeight.innerHTML = 10000;
    });
}

function landing () {
    const landing = document.getElementById("landing");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");

    landing.addEventListener("click", event => {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;
    });
}

function abortMission () {
    const missionAbort = document.getElementById("missionAbort");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");

    missionAbort.addEventListener("click", event => {
        let input = window.confirm("Are you sure you want to abort the mission?")
        if (input === true) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = 0;
        }
    });
    
}

function movementButtons () {
    const up  = document.getElementById("up");
    const down = document.getElementById("down");
    const left = document.getElementById("left");
    const right = document.getElementById("right");
    const rocket = document.getElementById('rocket');
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    rocket.style.position = 'absolute';
    rocket.style.left = '250px';
    rocket.style.right = '50px';
    rocket.style.bottom = '0%';
    
    up.addEventListener("click", event => {
        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + parseInt('10000');
        rocket.style.bottom = parseInt(rocket.style.bottom) + parseInt('10') + 'px';
    });
    down.addEventListener("click", event => {
        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) - parseInt('10000');
        rocket.style.bottom = parseInt(rocket.style.bottom) - parseInt('10') + 'px';
    });
    left.addEventListener("click", event => {
        rocket.style.left = parseInt(rocket.style.left) - parseInt('10') + 'px';
    });
    right.addEventListener("click", event => {
        rocket.style.left = parseInt(rocket.style.left) + parseInt('10') + 'px';
    });

}
window.addEventListener("load", takeOff);
window.addEventListener("load", landing);
window.addEventListener("load", abortMission);
window.addEventListener("load", movementButtons);
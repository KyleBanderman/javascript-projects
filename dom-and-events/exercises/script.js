function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    //button code
    button.addEventListener("click", event => {
        paragraph.innerHTML = "Houston, we have liftoff!"
    });

    //missionAbort code
    missionAbort.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "red";
    });
    missionAbort.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "";
    });
    missionAbort.addEventListener("click", event => {
        let input = window.confirm("Are you sure you want to abort the mission?");
        
        if (input === true) {
            paragraph.innerHTML = "Mission aborted! Space shuttle returning home."
        }
    });
}

window.addEventListener("load", init);

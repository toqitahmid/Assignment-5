document.getElementById("all-btn").addEventListener("click", () => filterIssues("all","all-btn"));
document.getElementById("open-btn",).addEventListener("click", () => filterIssues("open","open-btn"));
document.getElementById("closed-btn").addEventListener("click", () => filterIssues("closed","closed-btn"));



const filterIssues = (status, clickedBtn) => {

    let filterd;
    const issuediv = document.getElementById("issue-cards");
    issuediv.innerHTML = "";

    if(status === "all"){
        filterd = allIssues;
    }
    else{
        filterd = allIssues.filter(issue => {
            if(issue.status){
                return issue.status.toLowerCase() === status;
            }
            return false;
        })
    }
    issueCounter(filterd);
    displayIssues(filterd);
    setActiveBtn(clickedBtn);

}

const issueCounter = (filterd) => {
    
    const issueCount = document.getElementById("issue-count");
    issueCount.innerText = filterd.length;
}

const setActiveBtn = (clickedBtn) =>{
    const buttons = document.querySelectorAll(".filter-btn");

    buttons.forEach(button => {
        button.classList.remove("btn-primary");
    })
    document.getElementById(clickedBtn).classList.add("btn-primary");
}
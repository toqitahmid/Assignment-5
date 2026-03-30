document.getElementById("all-btn").addEventListener("click", () => filterIssues("all"));
document.getElementById("open-btn").addEventListener("click", () => filterIssues("open"));
document.getElementById("closed-btn").addEventListener("click", () => filterIssues("closed"));



const filterIssues = (status) => {

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
}

const issueCounter = (filterd) => {
    const issueCount = document.getElementById("issue-count");
    issueCount.innerText = filterd.length;
}
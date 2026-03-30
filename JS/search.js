document.getElementById("search-btn").addEventListener('click', () => {

    
    let filtered;

    const issuediv = document.getElementById("issue-cards");
    issuediv.innerHTML = "";
    
    const input = document.getElementById("user-input").value;

    if (
      input.toLowerCase() === "high" ||
      input.toLowerCase() === "low" ||
      input.toLowerCase() === "medium"
    ) {
      filtered = allIssues.filter((issue) => {
        if (issue.priority) {
          return issue.priority.toLowerCase() === input;
        }
        return false;
      });
    }
    displayIssues(filtered);
    // console.log(input.value);
})
const changeUpperBorder = (card, info) => {


  card.classList.add("bg-white", "mt-1", "rounded-md", "h-full");
  const infoDiv = document.createElement("div");
  
  if (info.status.toString() === "open") {
      infoDiv.classList.add("bg-green-500", "rounded-md");
  }
  else if (info.status.toString() === "closed") {
    infoDiv.classList.add("bg-purple-500", "rounded-md");
  }
  infoDiv.appendChild(card);
  const issueCard = document.getElementById("issue-cards");
  issueCard.appendChild(infoDiv);
};

const changeVardict = (issueInfo) => {
    const img = document.createElement("img");
    if (issueInfo.status.toString() === "open") {

        img.src = "./assets/open.png";
    } 
    else if (issueInfo.status.toString() === "closed") {
        img.src = "./assets/closed.png";
    }
    return img;
}

const changePriorityBtn = (Info) => {
  const prioBtn = document.createElement("button");
  if (Info.priority.toString() === "high") {
    prioBtn.classList.add("btn", "btn-soft", "btn-secondary", "w-25");
  } else if (Info.priority.toString() === "medium") {
    prioBtn.classList.add("btn", "btn-soft", "btn-warning", "w-25");
  } else if (Info.priority.toString() === "low") {
    prioBtn.classList.add("btn", "btn-soft", "btn-default", "w-20");
  }
  prioBtn.innerText = Info.priority.toUpperCase();

  return prioBtn;
};


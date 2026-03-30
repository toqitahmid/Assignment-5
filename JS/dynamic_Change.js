const changeUpperBorder = (card, info) => {
  card.classList.add("bg-white", "mt-1", "rounded-md", "h-full");
  const infoDiv = document.createElement("div");

  if (info.status.toString() === "open") {
    infoDiv.classList.add("bg-green-500", "rounded-md");
  } else if (info.status.toString() === "closed") {
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
  } else if (issueInfo.status.toString() === "closed") {
    img.src = "./assets/closed.png";
  }
  return img;
};

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

const createElements = (arr) => {
  const HTMLElements = arr.map(
    (el) =>
      `<span class = "btn btn-outline">
        ${el} </span>`,
  );
  return HTMLElements.join(" ");
};

const issueModal = (id) => {
  const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((json) => displayModal(json.data));
};

const displayModal = (data) => {
  const modalDiv = document.getElementById("modal-div");
  modalDiv.innerHTML = "";

  const dynamicModal = document.createElement("div");
  dynamicModal.innerHTML = `
    <div class="p-4">
                        <h2 class="text-2xl font-bold pb-2">${data.title}</h2>
                        <button class="btn btn-dash btn-primary">Status</button>
                        <p class="inline-block ml-2"> opend by <span>${data.assignee ? data.assignee : "Unknown"}</span> | <span>${data.updatedAt}</span></p>
                        <div class="flex justify-start gap-5 pt-5 pb-5">${createElements(data.labels)}
                        </div>
                    
                        <div class="flex justify-between items-center">
                            <div>
                                <p class="font-bold">Assignee</p>
                                <p>${data.assignee ? data.assignee : "Unknown"}</p>
                            </div>
                            <div>
                                <p class="font-bold">Priority</p>
                                <button class="btn btn-outline ">${data.priority}</button>
                            </div>
                        </div>
                    </div>
  `;
  modalDiv.appendChild(dynamicModal);
};

let allIssues = [];

const showAllissues = async () => {
  const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";

  const res = await fetch(url);
  const json = await res.json();

  allIssues = json.data;
  displayIssues(allIssues);
};

showAllissues();

const displayIssues = (issueInfo) => {
  issueInfo.forEach((Info) => {

    const infoCard = document.createElement("div");
    infoCard.innerHTML = `
                    <div onclick="issueModal(${Info.id}),my_modal_5.showModal()" class="p-5">
                        <div class="flex justify-between items-center">
                            <div class = "show-vardict size-7">
                            </div>
                            <div class = "priority-btn"></div>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold pt-3">${Info.title}</h3>
                            <p class="text-slate-500 pt-2">${Info.description}</p>
                        </div>
                        <div class="flex justify-start gap-5 pt-5 pb-5">${createElements(Info.labels)}
                            </div>
                            <hr>
                            <div class="flex justify-between items-center pt-5">
                                <p>${Info.author}</p>
                                <p>${Info.createdAt}</p>
                            </div>
                            <div class="flex justify-between items-center">
                                <p>${Info.assignee ? Info.assignee : "assignee"}</p>
                                <p>${Info.updatedAt}</p>
                            </div>
                    </div>
        `;
    // changed issues upper border color   
    changeUpperBorder(infoCard, Info);

    // changed vardict dynamically;
    const showVardict = infoCard.querySelector(".show-vardict");
    const vardict = changeVardict(Info);
    showVardict.appendChild(vardict);

    //changed priority button dynamically 
    const priorityBtn = infoCard.querySelector(".priority-btn");
    const btn = changePriorityBtn(Info);
    priorityBtn.appendChild(btn);

  });
};



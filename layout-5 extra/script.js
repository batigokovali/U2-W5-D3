function createDivs () {
    let parent = document.querySelector(".main-area")
    for (i = 1; i<=12; i++)
    {
        let divContainer = document.createElement("div")
        divContainer.className = "divs";

        for (j = 1; j<i; j++)
        {
            let div = document.createElement("div")
            div.innerText = j;
            div.className = "mini-div";
            divContainer.appendChild(div)
        }
        parent.appendChild(divContainer)
    }
}
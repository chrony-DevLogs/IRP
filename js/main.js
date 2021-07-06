const service = document.querySelectorAll(".serDiv");
const contBtn = document.createElement("button");
contBtn.innerHTML = "Contact!"
contBtn.setAttribute("class","onCnt")
service.forEach(element => {
    element.addEventListener("mouseover",()=>{
        element.appendChild(contBtn)
        contBtn.addEventListener("click",()=>{
            alert("appelez-nous +216 123 123 123")
        })
    })
});
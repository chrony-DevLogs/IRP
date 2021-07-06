const service = document.querySelectorAll(".serDiv");
const contBtn = document.createElement("button");
const send = document.getElementById("send");


contBtn.innerHTML = "Contact!"


contBtn.setAttribute("class","onCnt")
service.forEach(element => {
    element.addEventListener("mouseover",()=>{
        element.appendChild(contBtn)
        contBtn.addEventListener("click",()=>{
            window.open("popup.html")
        })
    })
});

send.addEventListener("click",()=>{
    alert("votre e-mail a été envoyé")
})
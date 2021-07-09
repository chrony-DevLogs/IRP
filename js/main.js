//service button adding & removing

const service = document.querySelectorAll(".serDiv");
const contBtn = document.createElement("button");

contBtn.innerHTML = "Contact!"
contBtn.setAttribute("class","onCnt")

service.forEach(element => {
    element.addEventListener("mouseover",()=>{
        element.appendChild(contBtn)
        contBtn.addEventListener("click",()=>{
            window.open("popup.html")

        })
    })
    element.addEventListener("mouseleave",()=>{
        element.removeChild(contBtn)
    })
});

//setting up gallery

const photos = document.querySelectorAll(".image");

photos.forEach(item =>{
    item.addEventListener("click",()=>{
        window.open(item.getAttribute("src"))
    })
})

//Send mail


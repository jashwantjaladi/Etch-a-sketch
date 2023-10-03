asksize=prompt("enter a number")
const gridsize = document.querySelector(".gridsize");
let gridlayout;
if(asksize>100)
{
    gridsize.textContent = "Sorry no layout can be generated!"
}else
{
    gridlayout = asksize*asksize;
    gridsize.textContent= "the size of your grid is "+(asksize*asksize);
}
const container = document.querySelector(".container")
container.style.gridTemplateColumns=`repeat(${asksize}, 1fr)`;
container.style.gridTemplateRows=`repeat(${asksize}, 1fr)`;

for(let i=1;i<=gridlayout;i++)
{
    const div = document.createElement("div")
    div.classList.add("containeritem")
    container.appendChild(div)
}

let containeritem =document.querySelectorAll(".containeritem") 
containeritem.forEach((item) =>
{
    item.addEventListener("mouseover", function(e)
    {
        item.style.cssText ="background-color : pink"
    })
}

)

let reset = document.querySelector(".reset")
reset.addEventListener("click", function(e)
{
    containeritem.forEach((item) =>
    {
        item.style.cssText="background-color : inherit"
    })
    
})
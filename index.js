


const initApp = () =>{
  // Retrive Elements
  const id = document.querySelectorAll(".id")
  const white = document.querySelectorAll(".white")
  const save1 = document.getElementById("save1")
  const save2 = document.getElementById("save2")
  const pop1 = document.getElementById("save1__container")
  const pop2 = document.getElementById("save2__container")


  // popup functions
  save1.addEventListener("mouseover",() =>{
    pop1.style.transform = "translate(45% , -18%)"
    if (pop2.style.transform == "translate(95% , -18%)"){
      pop2.style.transform = "translate(95% , -10000%)"
    }
  })

  pop1.addEventListener("mouseover", () =>{
    pop1.style.transform = "translate(45% , -18%)"
  })

  pop2.addEventListener("mouseover", () =>{
    pop2.style.transform = "translate(95% , -18%)"
  })

  save2.addEventListener("mouseover",()=>{
    pop2.style.transform = "translate(95% , -18%)"
    if( pop1.style.transform == "translate(45% , -18%)"){
      pop1.style.transform = "translate(45% , -10000%)"
    }
  })


  pop1.addEventListener("mouseout", () =>{
    pop1.style.transform = "translate(45% , -10000%)"
  })

  pop2.addEventListener("mouseout", () =>{
    pop2.style.transform = "translate(95% , -10000%)"
  })


  //board functions

  id.forEach(id =>{
    id.addEventListener("mouseover", () =>{
        setColor(id)
        id.style.backgroundColor = id.dataset.bg;
        const img = id.getElementsByTagName("img")[0];
        img.style.transform = "translate(0%, 0%)";
        
        
    })

    id.addEventListener("mouseout", () =>{
      id.style.backgroundColor = "#fff";
      white.forEach(item =>{
        let color = item.dataset.normal;
        item.style.color = color
      })
      const img = id.getElementsByTagName("img")[0];
      img.style.transform = "translate(100%, 60%)";
      
    })
  })

  const t1 = document.getElementById("t1")
  const t2 = document.getElementById("t2")
  const t3 = document.getElementById("t3")
  const t4 = document.getElementById("t4")
  const t5 = document.getElementById("t5")
 


  const functionList = [
    {
      func: addHover,
      params:[t1,"blue"]
    },
    {
      func: addHover,
      params:[t4,"#f33252"]
    },
    {
      func: addHover, 
      params:[t2,"#04b0f5"]
    },
    {
      func: addHover, 
      params:[t5,"#122237"]
    }, 
    {
      func: addHover, 
      params:[t3,"#037e03"]
    }
  ] 

  

    process(functionList)
 
}

window.addEventListener('DOMContentLoaded',initApp)


async function process(funcList){
  for (const functionl of funcList){
    const { func, params} = functionl
    await func(...params)
    await timeout(5000)
  }
  process(funcList)
}

// Recursive functions
async function setColor(element){
    element.style.color = "#fff";
    let children = element.children;
    for (let i = 0 ; i < children.length; i++){
      if(children.length === 0){
        return
      }
        setColor(children[i])
    }
}

 async function addHover(element,color){
  element.style.backgroundColor = color;
  await setColor(element)
  const img = element.getElementsByTagName("img")[0];
  img.style.transform = "translate(0%, 0%)";
  let white = element.querySelectorAll(".white")
  timeout(3000)
  removeHover(element,white)



}


async function removeHover(element,white){
  await timeout(5000)
  element.style.backgroundColor = "#fff";
  await white.forEach(item =>{
  let color = item.dataset.normal;
  item.style.color = color
  })
  const img = element.getElementsByTagName("img")[0];
  img.style.transform = "translate(100%, 60%)";

}

function timeout(duration){
  return new Promise(resolve =>{
    setTimeout(resolve,duration)
  })
}

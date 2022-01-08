let API_HANDLER = (query) => {
    let API_KEY = "153bf84a12c9689a582a1fe628b5d22c"
    let API_ID = "3538ce3c"
    let API = `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`
    let API_CALL = fetch(API)
    API_CALL.then((res)=>{
        return res.json()
    }).then((data)=>{
        for(let i = 0;i<data.hits.length;i++){
            let div = document.createElement("div")
            let img = document.createElement("img")
            let title = document.createElement("h2")
            div.classList.add("box")
            img.src = data.hits[i].recipe.image
            title.innerHTML = data.hits[i].recipe.label
            div.appendChild(img)
            div.appendChild(title)
            let container = document.querySelector(".container")
            container.appendChild(div)
            // console.log(data.hits[i])
        }
    })
}
let search = () => {
    let input = document.querySelector(".input")
    let allBoxes = document.querySelectorAll(".box")
    allBoxes.forEach((item)=>{
        item.remove()
    })
    API_HANDLER(input.value)
}

let btn = document.querySelector(".btn")
btn.addEventListener("click",search)
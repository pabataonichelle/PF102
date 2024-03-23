const leftDiv = (t1, t2, p1, p2, b1, b2, b3, b4) => {
    let div = document.createElement("div")
    div.className = "classLeft"
    div.innerHTML = `<h1>${t1}</h1>
                     <p>${p1}</p>
                     <h1>${t2}</h1>
                     <p>${p2}</p>
                     <button>${b1}</button>
                     <button>${b2}</button>
                     <button>${b3}</button>
                     <button>${b4}</button>
    `
    return div
}

export {leftDiv}

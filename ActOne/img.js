const rightDiv = (img) => {
    let div = document.createElement("div")
    div.className = "classRight"
    div.innerHTML = `<img src="./${img}"></img>
    `
    return div
}

export {rightDiv}
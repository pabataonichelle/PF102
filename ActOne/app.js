import { leftDiv } from "./info.js"
import { rightDiv } from "./img.js"


let container = document.getElementById("container")
const data = {
    title: "JAVASCRIPT",
    title2: "ES6",
    para: "JavaScript is a scripting language used to create and control dynamic website content,",
    para2: "ES6 is a version of JavaScript that was officially released in the summer of 2015.",
    button: "Tutorial",
    button2: "Features",
    button3: "HTML",
    button4: "CSS",
    img: "img/js.png"
}

const {title, title2, para, para2, button, button2, button3, button4, img} = data

container.append(leftDiv(title,title2,para,para2,button,button2,button3,button4))
container.append(rightDiv(img))
import {image} from "./img.js"
import {info} from "./info.js"
import {cards} from "./card.js"

const myObj1 = {
    title : "My portfolio",
    para : "Greetings! <br> My name is Nichelle A. Pabatao, A 3rd year student of BSIT in Gingoog City Colleges",
    btn : "About me",
    img : "myImg.jpg"
}

const myObj2 = {
    comp : "Project Completed",

    img1 : "img1.PNG",
    para1 : "",
    btn1 : "Learn More",

    img2 : "img2.PNG",
    para2 : "",
    btn2 : "Learn More",

    img3 : "img3.PNG",
    para3 : "",
    btn3 : "Learn More"
}

let sectionOne = document.getElementById("sectionOne")
let sectionTwo = document.getElementById("sectionTwo")

const {title,para,btn,img} = myObj1;

const {comp,img1,para1,btn1,img2,para2,btn2,img3,para3,btn3} = myObj2;

sectionOne.append(info(title,para,btn))
sectionOne.append(image(img))  

sectionTwo.append(cards(comp,img1,para1,btn1,img2,para2,btn2,img3,para3,btn3))




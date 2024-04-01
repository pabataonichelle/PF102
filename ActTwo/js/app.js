import {image} from "./img.js"
import {info} from "./info.js"
import {cards} from "./card.js"

const myObj1 = {
    title : "My portfolio<br>",
    para : "<br>Greetings! <br> My name is Nichelle A. Pabatao, A 3rd year student of BSIT in Gingoog City Colleges<br><br>",
    btn : "About me",
    img : "myImg.jpg"
}

const myObj2 = {
    comp : "Project Completed",

    img1 : "1.png",
    para1 : "Employee Attendance Monitoring System. This project is for the Software Engineering subject.",
    btn1 : "Learn More",

    img2 : "2.jpg",
    para2 : " Adobe Flash for the Midterm in Multimedia Computing ",
    btn2 : "Learn More",

    img3 : "3.png",
    para3 : "Website for an Ice cream Parlor",
    btn3 : "Learn More"
}

let sectionOne = document.getElementById("sectionOne")
let sectionTwo = document.getElementById("sectionTwo")

const {title,para,btn,img} = myObj1;

const {comp,img1,para1,btn1,img2,para2,btn2,img3,para3,btn3} = myObj2;

sectionOne.append(info(title,para,btn))
sectionOne.append(image(img))  

sectionTwo.append(cards(comp,img1,para1,btn1,img2,para2,btn2,img3,para3,btn3))




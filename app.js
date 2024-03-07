const p = document.getElementById("text-dom") /* การเรียก html เข้ามาทำงาน ด้วย 
domcument.getElementsById , domcument.getElementsByTagName , domcument.getElementsByClassName*/
const p2 = document.querySelector(".text-dom") // การเรียกเข้ามาทำงานแบบ querySelector 

const p3 = document.querySelector(".box-color")
// .innerHTML .innerText เปลี่ยนแปลงข้อคตวามหรือเพิ่มข้อมูล
/*function changeText() {98
    p.innerHTML = "hello"
}*/
const theme = document.querySelector(".light-mode")
const menu = document.querySelector(".menu")
const item = document.querySelector(".item2")

function changeText() {
  p2.innerHTML = "Color Is Red"
  p2.style.color = "Red"
  p3.style.backgroundColor = "red"
}
function changeText2() {
  p2.innerHTML = "Color Is Yellow"
  p2.style.color = "Yellow"
  p3.style.backgroundColor = "yellow"
}
function changeText3() {
  p2.innerHTML = "Color Is Green"
  p2.style.color = "Green"
  p3.style.backgroundColor = "green"
}
function resetbtn() {
  p2.innerHTML = "The Color 🌈"
  p2.style.color = p
  p3.style.backgroundColor = "gray"
}

function colormode() {
  theme.setAttribute("class", "dark-mode") // ควบคุมเปลี่ยนค่าของ attribute ในตัวอย่างคือเปลี่ยน class
}
function colormode2() {
  theme.setAttribute("class", "light-mode")
}

let count = 1; // ประกาศตัวแปร count 

function addlist() {
  const item = document.createElement("li") //สร้าง Element ใหม่ให้ nodeแม่
  item.innerText = "Add item to list : "+(count++); // เพิ่มข้อความด้วย innerText
  menu.appendChild(item) // appendChild คือ ทำ element ไปต่อท้าย node แม่
}

function removelist() {
  menu.removeChild(item)  // ลบ node ลูก
} 


const newitem = document.createElement("li");
newitem.innerText = "E"; // สร้าง element li ข้อความ "E"

function replacelist() {
    menu.replaceChild(newitem,item) // แทนที่ node ใหม่แทน  node เก่า ด้วย replaceChild (new,old)
}

const bg = document.getElementById('bg-color');

function btncolor() {
  bg.classList.add("blue"); // classlist ทำหน้าที่เกี่ยวกับ class  เช่น เพิ่ม ลบ สลับ เปรียบเทียบ  ในที่นี้ classlist มี medthod คือ .add
  // classlist.add คึือ เพิ่ม class
    
}

function btncolorremove(){
   bg.classList.remove("blue"); // classlist มี medthod เป็น .remove ทำหน้าที่ ลบ class
}

let status;

function switchbtn(){ 
  bg.classList.toggle("blue"); // classlist  ที่สามารถเพิ่มและลบในอันเดียวนั้นคือ  classlist.toggle 
  //status = bg.classList.contains("blue"); //classlist.contains เปรียบเทียบหรือตรวจเช็ค และ แสดงผล 
 // alert(`Result is : ${status}`) // แสดงผลเป็น boolen
 if (bg.classList.contains("blue")) {
       bg.style.color = "red"; // ใช้เช็ค
 } else {
       bg.style.color = "green";
 }
}

function welcome() {
   alert("Welcome"); // alert ข้อความของ onload event 
}

function hightligth(hi) {
  hi.style.backgroundColor = "red"; // 

}

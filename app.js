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
const item = document.querySelector(".item")

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
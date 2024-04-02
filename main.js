function enter() {
name=document.getElementById("name").value;
localStorage.setItem("name",name);

grade=document.getElementById("grade").value;
localStorage.setItem("grade",grade);

sec=document.getElementById("sec").value;
localStorage.setItem("sec",sec);

roll=document.getElementById("roll").value;
localStorage.setItem("roll",roll);

eng=document.getElementById("eng").value;
localStorage.setItem("eng",eng);

hin=document.getElementById("hin").value;
localStorage.setItem("hin",hin);

math=document.getElementById("math").value;
localStorage.setItem("math",math);

window.location="second.html";
}
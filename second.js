name=localStorage.getItem("name");
document.getElementById("name").innerHTML=name;

grade=localStorage.getItem("grade");
document.getElementById("grade").innerHTML=grade;

sec=localStorage.getItem("sec");
document.getElementById("sec").innerHTML=sec;

roll=localStorage.getItem("roll");
document.getElementById("roll").innerHTML=roll;

eng=localStorage.getItem("eng");
document.getElementById("english").innerHTML=eng;

hin=localStorage.getItem("hin");
document.getElementById("hin").innerHTML=hin;

math=localStorage.getItem("math");
document.getElementById("math").innerHTML=math;
function start() {
if (english.value<33) {
    document.getElementById("pass1").style.visibility="visible";
    document.getElementById("fail1").style.visibility="hidden";

}
else{
    document.getElementById("fail1").style.visibility="visible";
    document.getElementById("pass1").style.visibility="hidden";
}

if (hin.value<33) {
    document.getElementById("pass2").style.visibility="visible";
    document.getElementById("fail2").style.visibility="hidden";

}
else{
    document.getElementById("fail2").style.visibility="visible";
    document.getElementById("pass2").style.visibility="hidden";
}

if (math.value<33) {
    document.getElementById("pass3").style.visibility="visible";
    document.getElementById("fail3").style.visibility="hidden";

}
else{
    document.getElementById("fail3").style.visibility="visible";
    document.getElementById("pass3").style.visibility="hidden";
}
}
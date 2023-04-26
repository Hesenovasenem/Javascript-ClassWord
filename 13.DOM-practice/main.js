const startbtn = document.createElement("button");
const pr = document.createElement("p");
const form = document.createElement("form");
const username = document.createElement("label");
const nameinput = document.createElement("input");
const surname = document.createElement("label");
const surnameinput = document.createElement("input");
const checkbox = document.createElement("input");
const radio1 = document.createElement("input");
const radio2 = document.createElement("input");
const btn = document.createElement("button");
const nextpage = document.createElement("button");
const br1 = document.createElement("br");
const br2 = document.createElement("br");
const br3 = document.createElement("br");
const br4 = document.createElement("br");
const br5 = document.createElement("br");
const br6 = document.createElement("br");
const br7 = document.createElement("br");

document.body.append(startbtn);
document.body.append(pr);
document.body.append(form);
document.body.append(nextpage);
form.append(username);
form.append(br7);
form.append(nameinput);
form.append(br1);
form.append(surname);
form.append(br2);
form.append(surnameinput);
form.append(br3);
form.append(checkbox);
form.append(br4);
form.append(radio1);
form.append(br5);
form.append(radio2);
form.append(br6);
form.append(btn);

let time = 15;
startbtn.innerHTML = "Let's start...";
pr.innerHTML = `00: ${time}`;
username.innerHTML = "<strong>Name</strong>";
surname.innerHTML = "<strong>Surname</strong>";
btn.innerHTML = "Submit";
nextpage.innerHTML = "Next Page";

nameinput.setAttribute("required", "");
surnameinput.setAttribute("required", "");
checkbox.setAttribute("required", "");
radio1.setAttribute("required", "");
radio2.setAttribute("required", "");

checkbox.setAttribute("type", "checkbox");
radio1.setAttribute("type", "radio");
radio2.setAttribute("type", "radio");
radio1.setAttribute("name","yes")
radio2.setAttribute("name","yes")
btn.setAttribute("disabled", "true");
nextpage.setAttribute("disabled", "true");



pr.style.border = "3px solid black";
pr.style.width = "100px";
pr.style.height = "40px";
pr.style.display="flex"
pr.style.justifyContent="center"
pr.style.alignItems="center"


form.style.height = "80vh";
form.style.border = "2px dashed black";
form.style.display = "flex";
form.style.flexDirection = "column";
form.style.justifyContent = "center";
form.style.alignItems = "center";
checkbox.style.accentColor = "red";
radio1.style.accentColor="blue"
radio2.style.accentColor="blue"


let interval;
startbtn.addEventListener("click", function () {
  interval = setInterval(() => {
    time-=1;
    pr.innerText=`00: ${time}`;
    btn.removeAttribute('disabled')
    startbtn.setAttribute('disabled','true')
    if(time<=10){
        pr.style.color="red";
        pr.style.border="2px solid red"
    }else{
        pr.style.color="black";
        pr.style.border="2px solid black"
    }
    if(time===0){
        pr.innerText="You missed :("
        clearInterval(interval)
        startbtn.removeAttribute('disabled')
        btn.setAttribute("disabled","true")
       
    }
},1000);
} );

btn.addEventListener('click',function(){
    nextpage.removeAttribute('disabled')
})
nextpage.addEventListener('click',function(){
    alert("FINISHED!")
})

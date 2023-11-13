let mainIphone=document.querySelector(".mainIphone")
let goldIphone=document.getElementById("gold")
let blueIphone=document.getElementById("blue")
let blackIphone=document.getElementById("black")
let beigIphone=document.getElementById("beig")
let redIphone=document.getElementById("red")

goldIphone.onclick=function(){
    document.body.style.backgroundColor="black";
    mainIphone.src="photos/0.png"

}
blueIphone.onclick=function(){
    document.body.style.backgroundColor="rgb(6 91 156)";
    mainIphone.src="photos/1.png"
}
blackIphone.onclick=function(){
    document.body.style.backgroundColor="#0b09099c";
    mainIphone.src="photos/2.png"

}
beigIphone.onclick=function(){
    document.body.style.backgroundColor="#513636";
    mainIphone.src="photos/3.png"

}
redIphone.onclick=function(){
    document.body.style.backgroundColor="rgb(96 0 0)";
    mainIphone.src="photos/4.png"
}
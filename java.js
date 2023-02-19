document.querySelector(".i-1").onkeypress=(event)=>
{console.log("charCode: "+ event.charCode);
console.log("code: " + event.code);
console.log("key: " + event.key);
console.log("keycode: " + event.keyCode);
    console.log(event)};
// v stroke net no v vivode DA.
    document.querySelector(".i-2").onkeypress=(event)=>
{console.log("charCode: "+ event.charCode);
console.log("code: " + event.code);
console.log("key: " + event.key);
console.log("keycode: " + event.keyCode);
    console.log(event)

return false};
//MENYAU BYKVI VIVODA NA DRYGIE
document.querySelector(".i-3").onkeypress=(event)=>{
console.log("charCode: "+ event.charCode);
console.log("code: " + event.code);
console.log("key: " + event.key);
console.log("keycode: " + event.keyCode);
const a={
    q: "a",
    s: "Vova"
}
document.querySelector(".i-3").value+=a[event.key];
return false;
}
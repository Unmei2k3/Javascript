console.log(`Hello world from HTML`)
let txt = "afasffabava";
console.log(txt.length);
function myFunction() {
    let text = document.getElementById("demo").innerHTML;
    if(text.includes("Html")){
        
        document.getElementById("demo").innerHTML = text.replace("Html","Unmei2k3")
    } else {
       
        document.getElementById("demo").innerHTML = text.replace("Unmei2k3","Html")
    }
   
}
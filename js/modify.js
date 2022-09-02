values = JSON.parse(localStorage.getItem("values"));
if (values) {
    console.log(values);
    
}
localStorage.removeItem("values");

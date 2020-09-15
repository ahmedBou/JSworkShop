let loggedin; // always false
if(!loggedin){
    console.log("you must log");
}


let flavor = "watermelon";

if(flavor !== 'grape' && flavor !== "cherry"){
    console.log("We don't have this flavor");
}

if(!(flavor === "grape" || flavor === "cherry")){
    console.log("We don't have this flavor");
}
// So we're requesting this data (sample.txt) in the background.
// And once we get the data without reloading the page, we display.
const btn = document.querySelector('.btn');

btn.addEventListener('click', ()=>{
    getData();
})

function getData(){
    const xhr = new XMLHttpRequest();
    xhr.open("get", "api/sample.txt");
    console.log(xhr);

    xhr.onreadystatechange= function(){
        console.log(xhr);
        if(xhr.status === 200 && xhr.readyState === 4){
            // console.log(xhr.responseText);
            const text = document.createElement('p');
            console.log(text);
    
            text.innerHTML = xhr.responseText;
            document.body.appendChild(text);
    
        }else{
            console.log({
                status: xhr.status,
                text: xhr.statusText,
                state: xhr.readyState 
            });
        }
    }
    
    // xhr.send();
}


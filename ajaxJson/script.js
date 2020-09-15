function getAjaxData(callbackSuccess, callbackError) {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://gist.githubusercontent.com/abadayoussef/993f70c2e540761c45a8cacc86487c27/raw/8c77286eab9b6b21edb065e546fd1bbf79f33592/data.json');

    request.onload = function () {
        //console.log("status: "+request.status, "status text: "+request.statusText);
        if (request.status === 200) {
            callbackSuccess();
        } else {
            callbackError();
        }
    }
    request.onerror = function () {
        console.error("Network error"); //network error
    }

    request.send();
}

successHandler = function () {
    let slides = JSON.parse(request.response); //request was successful
    for (let i = 0; i < slides.length; i++) {
        document.getElementById("videos").innerHTML += `
            <video src="${slides[i].sources[0]}" type="video/mp4" muted ></video>`;
    }
};

faillierHander = function () {
    console.error(request.statusText); //error message 
};

getAjaxData(successHandler, faillierHander);
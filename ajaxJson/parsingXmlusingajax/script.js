
var request = new XMLHttpRequest();
request.open("GET", "data.xml");
request.send();
request.onreadystatechange = function(){
    if((request.readyState === 4) & (request.status === 200)){
        
        // console.log(request.responseXML.getElementsByTagName("name")[0].firstChild.nodeValue);
        var items = request.responseXML.getElementsByTagName("name");
        console.log(items);
        var output = '<ul>';
        for(var i=0; i< items.length; i++){
            output += '<li>' +items[i].firstChild.nodeValue + '</li>';
            
        }
        output += '</ul>';
        console.log(output)
        document.getElementById("demo").innerHTML = output;
    }
}




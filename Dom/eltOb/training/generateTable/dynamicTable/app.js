let contentInfo = [{
    CreatedAt: "22-06-2020 14:33:44", 
    Title:"Team1 Vs Team2",
    Country: "Morocco", Field: "Itihad temara",
    State: "Finished", Preview: '<i class="fa fa-hand-o-right"></i>'
},{
    CreatedAt: "10-08-2020 07:10:24", 
    Title:"Team1 Vs Team2",
    Country: "Netherland", Field: "columburg",
    State: "Streaming", Preview: '<i class="fa fa-hand-o-right"></i>'
},{
    CreatedAt: "14-09-2020 17:10:14", 
    Title:"Team1 Vs Team2",
    Country: "bresil", Field: "rio de jenero",
    State: "Scheduled", Preview: '<i class="fa fa-hand-o-right"></i>'
},{
    CreatedAt: "10-03-2020 07:10:24", 
    Title:"Team1 Vs Team2",
    country: "Espagne", field: "Malaga",
    state: "Finished", preview: '<i class="fa fa-hand-o-right"></i>'
}
]

function generate_table(){
    // get the reference for the body
    var body = document.getElementsByTagName("body")[0];
    console.log(body);
    // creates a <table> element and a <tbody> element
    let tbl = document.createElement("table");
    console.log(tbl);
    let tblbody = document.createElement("tbody");
    // console.log(tblbody);

    // creating all cells
    for(let i=0; i<2; i++){
        // creates a table row
        let row = document.createElement("tr");
        // console.log(row);
        for(let j=0; j<2; j++){
            // create a <td> element and a text node, make the text 
            // node the contents of the <td>, and put the <td> at the end of the
            // table row.
            let cell = document.createElement("td");
            // console.log(cell);
            let cellText = document.createTextNode("cell in row "+i+",column "+j);
            // console.log(cellText);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        // add the row to the end of the table body
        tblbody.appendChild(row);

    }
    // put the <tbody> in the <table>
    tbl.appendChild(tblbody);
    // appends <table> into <body>
    body.appendChild(tbl);

}

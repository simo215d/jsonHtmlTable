# jsonHtmlTable

Hvordan finder jeg min json fil:</br>
Jeg har et javascript, hvor der er en funktion, som bliver kaldt, når min html_select element bliver ændret. Den funktion henter så 
min json fil som indeholder min data fra min public folder. Jeg bruger xmlhttprequest, som kan ses i denne fil i github: jsonHtmlTable/public/javascripts/index.js


    const getData = ()=>{
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost:3000/jsonStuff/carsystem.json');
        xhr.onload = function(){
            myObj = JSON.parse(xhr.response);
            console.log(myObj);
            updateHtml(myObj, sel);
        }
        xhr.send();
    }
    getData();
    
    
    
Sådan ændre jeg min html:</br>
min updateHtml funktion sørger for, at opdatere min html som er tilknyttet. Den funktion tager et parameter, som angør om hvilken data vi skal hente fra data parametret
som er json dataen. 
På json objektet er der en liste af objekter, som jeg skal ind og hente min data fra. Dataen setter jeg på en string, som er en html tabel. 


function updateHtml(myObj, sel){
    txt = "<table border='1'>";
    console.log("THIS WAS SELECTED: "+sel);
    if(sel=="cars"){
        for(x in myObj.carLeasRent[0].cars){
            txt += "<tr><td>" + myObj.carLeasRent[0].cars[x].id + "</td></tr>";
        }
        txt += "</table>"    
        document.getElementById("demo").innerHTML = txt;
    }
    if(sel=="users"){
        for(x in myObj.carLeasRent[1].users){
            txt += "<tr><td>" + myObj.carLeasRent[1].users[x].name + "</td></tr>";
        }
        txt += "</table>"    
        document.getElementById("demo").innerHTML = txt;
    }
    if(sel=="bookings"){
        txt += "<tr><td>" + "start date" + "</td> <td>" + "end date" + "</td> <td>" + "leaser" + "</td> <td>" + "renter" + "</td> </tr>";
        for(x in myObj.carLeasRent[2].bookings){
            txt += "<tr><td>" + myObj.carLeasRent[2].bookings[x].startDate + "</td> <td>" + myObj.carLeasRent[2].bookings[x].endDate + "</td> <td>" + myObj.carLeasRent[2].bookings[x].leaserName + "</td> <td>" + myObj.carLeasRent[2].bookings[x].renterName + "</td> </tr>";
        }
        txt += "</table>"    
        document.getElementById("demo").innerHTML = txt;
    }
}

function change_myselect(sel){
    //without xmlhttprequest. se i layout.hbs for at se biblioteket jeg anvender så $ virker.
    /*
    myObj = "";
    $.getJSON('http://localhost:3000/jsonStuff/carsystem.json', function(data) {
        console.log(data);
        myObj=data;
        updateHtml(myObj, sel);
    });
    */
    //with xmlhttprequest
    //jeg brugte denne tutorial: https://www.youtube.com/watch?v=4K33w-0-p2c&list=PLEHgyrNljgEaLy-LYjvKgb8Y5zBmF_f-Y&index=8
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
}

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
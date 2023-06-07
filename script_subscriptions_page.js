var dataObj;
function getdata() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () { 
        if (xhttp.readyState == 4 && xhttp.status == 200) {   // value 4 - means the load is complete ##  200 Code informs about successful processing of the request.
            processResult(xhttp);
        }
    }
    xhttp.open("GET", "MySubscriptionsData.json", true);   // async: true (asynchronous) or false (synchronous)
    xhttp.send();
}
// This function process teh content of JSON file.     
function processResult(xhttp) {
    var jsonText = xhttp.responseText;        // Get JSON text.     
    dataObj = JSON.parse(jsonText);   // convert the response text to JSON object.
    showMySubscriptions();
}
getdata();

function showMySubscriptions(){
    var keys = Object.keys(dataObj.Services.Mobile_Services.PostPaid[0]);

    for(var i = 0; i < dataObj.Services.Mobile_Services.PostPaid.length; i++){
        document.getElementById("data").innerHTML += "<p>" + dataObj.Services.Mobile_Services.PostPaid[i].Name + "<\p>" +
        keys[1] + ": " + dataObj.Services.Mobile_Services.PostPaid[i].Data + "&emsp;" +
        keys[2] + ": " + dataObj.Services.Mobile_Services.PostPaid[i].Voice + "&emsp;" +
        keys[3] + ": " + dataObj.Services.Mobile_Services.PostPaid[i].Price + "&emsp;" +
        keys[4] + ": " + dataObj.Services.Mobile_Services.PostPaid[i].Time + "</p>" +
        "<div class=\"unsubscribe__btn--right\"> <button class=\"unsubscribe__btn\" onClick=\"unsubscribe()\">Unsubscribe</button><hr></div>";
    }
    
}

function unsubscribe(){

}


//Display Success message after storing the data
function SuccessMsg() {
    alert('Data Stored');
}

//Display error message after unsuccessful storage of data
function ErrorMsg() {
    alert('Unable to Store');
}

//Display Success message after retrieving the data
function SuccessDataMsg(Obj) {
    alert('Data Retrieved');
    var result = Obj.ScrollMsg1 + Obj.ScrollMsg2 + Obj.ScrollMsg3 + Obj.ScrollMsg4;
    document.getElementById('status').innerHTML='<marquee>'+result+'</marquee>';
}

//Display error message after unsuccessful retrival of data
function ErrorDataMsg() {
    alert('Unable to Retrieve');
}

//Adding Device Ready Event Listener
function AddDeviceReady() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

//Add JS that needs to execute on Device Ready
function onDeviceReady() {
    
    //Display device ready message
    document.getElementById('status').innerHTML='Device is ready';
    
    //Sample JSON Object
    var ScrollMsg = {
        ScrollMsg1 : "1 - Lorem Ipsum is simply dummy text of the printing and typesetting industry // ",
        ScrollMsg2 : "2 - Lorem Ipsum is simply dummy text of the printing and typesetting industry // ",
        ScrollMsg3 : "3 - Lorem Ipsum is simply dummy text of the printing and typesetting industry // ",
        ScrollMsg4 : "4 - Lorem Ipsum is simply dummy text of the printing and typesetting industry // "
    }
    
    //Store data
    NativeStorage.setItem("R_ScrollMsg", ScrollMsg, SuccessMsg, ErrorMsg);
    
    //Retrieve Data
    NativeStorage.getItem("R_ScrollMsg", SuccessDataMsg , ErrorDataMsg );
}
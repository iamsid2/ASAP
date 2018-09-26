$(document).ready(function(){
    console.log("Hello");
    $("#loginform").submit(function(e){
        e.preventDefault();
        var username = $("#user").val();
        var password = $("#pass").val();
        console.log(password);
        if(username === "abinash" && password === "labadmin"){
            location.href = "./reportupload";}
        else{alert("wrong userId or password");}
    });
    $("#regform").submit(function(e){
        e.preventDefault();
    });
});
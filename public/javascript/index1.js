$(document).ready(function(){
    accept = function(){
        var bedno = document.getElementById("bed").value;
        var complain_sub = document.getElementById("complain").value;
        console.log(bedno);
        console.log(complain_sub);
        clean();
    }
    clean = function(){
        document.getElementById("bed").value="";
        document.getElementById("complain").value="";
    }
    accept1 = function(){
        var phc= document.getElementById("PHC").value;
        var doctor= document.getElementById("Doctor").value;
        console.log(phc);
        console.log(doctor);
        clean1();
    }
    clean1 = function(){
        document.getElementById("PHC").value="";
        document.getElementById("Doctor").value="";
    }
});

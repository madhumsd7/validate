function myFun() {
       
        var correct_way = /^[A-Za-z]+$/;

        var a = document.getElementById("User_Name").value;

        if(a == ""){
            alert("name is mandatory")
            return false;
        }

        if(a.match(correct_way))
        true;
        else{
            alert("Alphabets only in name section")
            return false;
        }



        var correct_way = /^[0-9]+$/;

        var b = document.getElementById("Mobile_Num").value;

        if(b == ""){
            alert("mobile is mandatory")
            return false; 
        }

        if(b.length==10){
       
        }else{
            alert("mobile number contain 10 numbers")
            return false;
        }

        if(b.match(correct_way))
        true;
        else{
            alert(" only numbers in phone number")
            return false;
        }

        var c = document.getElementById("password").value;
        

        if(c.length < 8){
            alert("password must b in 10-15")
            return false;
        }
        else if(c.length >15){
            alert("password must b in 10-15")
            return false;
        }
        else if(c.search(/[0-9]/)== -1){
            document.getElementById("demo").innerHTML = "* atleast contain one number"
            return false;
        }
        else if(c.search(/[A-Z]/)== -1){
            document.getElementById("demo").innerHTML = "* atleast contain one capital letter"
            return false;
        }
        else if(c.search(/[a-z]/)== -1){
            document.getElementById("demo").innerHTML = "* atleast contain one small letter"
            return false;
        }
        else if(c.search(/[@\$\!\#\%\&\*\^]/)== -1){
            document.getElementById("demo").innerHTML = "* atleast contain 1 spl char"
            return false;
        }
    
        var d = document.getElementById("passwords").value;
        if(d==""){
            alert("reenter the password")
            return false;
        }
        if(c==d){
             document.getElementById("demo").innerHTML="password matched success";
             return false;
        }
        else{
            alert("password not matched")
            return false;
        }


}


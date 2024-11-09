function convertt(){
    var input=document.getElementById("input");
    var typee = document.getElementById("Temperature");
    var selectvalue=typee.value;
    if(input.value==""){
        alert("Type valid  Temperature")
        location.reload()
        input.value="";
    }
    else if(selectvalue=="select"){
        alert("Please Select Temperature Type");
    }
    else if(selectvalue=="Celsius"){
        var kelvin = parseFloat(input.value) + 273;
        var farenheit=(1.8*input.value)+32;
        var celsius=input.value;
    }
    else if(selectvalue=="Kelvin"){
        var kelvin=input.value;
        var farenheit=((input.value-273)*1.8)+32;
        var celsius=input.value-273;
    }
    else if(selectvalue=="Farenheit"){
        var kelvin=((input.value-32)*0.56)+273
        var farenheit=input.value;
        var celsius=(0.56)*(input.value-32);
    }
    var c=document.getElementById("c");
    var f=document.getElementById("f");
    var k=document.getElementById("k");
    c.textContent=parseFloat(celsius).toFixed(2);
    f.textContent=parseFloat(farenheit).toFixed(2);
    k.textContent=parseFloat(kelvin).toFixed(2);
}

function convertt(){
    var input=document.getElementById("input");
    var typee = document.getElementById("Temperature");
    var selectvalue=typee.value;
    if(input.value==""){
        alert("Type valid  Temperature")
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
    // celsius.toFixed(2);
    // farenheit.toFixed(2);
    // kelvin.toFixed(2);
    var c=document.getElementById("c");
    var f=document.getElementById("f");
    var k=document.getElementById("k");
    c.textContent=celsius;
    f.textContent=farenheit;
    k.textContent=kelvin;


}

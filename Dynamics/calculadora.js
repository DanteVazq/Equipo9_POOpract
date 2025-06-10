

class Calculadora{
    suma(var1,var2)
    {
        let operacion=0;
        operacion=var1+var2;
        console.log("La suma es igual a " + operacion);
    }  

    resta(var1,var2)
    {
        let operacion=0;
        operacion=var1-var2;
        console.log("La resta es igual a " + operacion);

    }

    multiplicacion(var1,var2)
    {
        let operacion=0;
        operacion=var1*var2;
        console.log("La multiplicacion es igual a " + operacion);

    }

    division(var1,var2)
    {
        let operacion=0;
        operacion=var1/var2;
        console.log("La division es igual a " + operacion);
    }
}

const var1 =2;
const var2=10;

let calculadora=new Calculadora();
calculadora.suma(var1, var2);
calculadora.resta(var1, var2);
calculadora.multiplicacion(var1, var2);
calculadora.division(var1, var2);


function calcular() {
    const numero1 = Number(document.getElementById("numero1").value);
    const numero2 = Number(document.getElementById("numero2").value);
    console.log(Number(numero1));
    console.log(String(numero1));
    console.log(Boolean(numero1));
    let numero5 = 42;
    let string1 = numero5.toString();
    console.log(typeof string1); // output: string

    let string2 = "42.6";
    let numero6 = parseInt(string2);
    console.log(typeof numero6 + " " + numero6); // output: number

    let string3 = "3.1416";
    let numero7 = parseFloat(string3);
    console.log(typeof numero7 + " " + numero7); // output: number

    let string4 = "1010";
    let numero8 = parseInt(string4,2);
   
    console.log(typeof numero8 + string4 + "Este numero es binario" + numero8); // output: number. Este numero se ha pasadoa binario
  }

  console.log(Number(numero1))

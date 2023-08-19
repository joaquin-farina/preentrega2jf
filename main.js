alert("Bienvenido a Mundo Calzado"); 

class Zapatillas { 
    constructor(marca, modelo, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }
};

const Calzado = () => {
    const calzadoCargado = [];
    calzadoCargado.push(new Zapatillas("Adidas", "Adizero", 50000));
    calzadoCargado.push(new Zapatillas("Adidas", "Superstar", 38000));
    calzadoCargado.push(new Zapatillas("Adidas", "Yeezy", 100000));
    calzadoCargado.push(new Zapatillas("Nike", "Air", 73000));
    calzadoCargado.push(new Zapatillas("Nike", "Jordan", 97000));
    calzadoCargado.push(new Zapatillas("Nike", "Kobe", 240000));
    return calzadoCargado;
};

const compraOVenta = () => { 
    let venderOComprar = prompt("Quieres vender o comprar zapatillas?");
    if (venderOComprar.toLowerCase() === "comprar") {
        let Eleccion = Comprar(); 
        cuponDescuento(Eleccion); 
    } else if (venderOComprar.toLowerCase() === "vender") {
        let calzadoPreCargado = Calzado(); 
        let calzadoCargadoPorElUsuario = venderCalzado(); 
        concatDeCalzado(calzadoPreCargado, calzadoCargadoPorElUsuario); 
    } else alert("Opcion invalida");
};

const Comprar = () => {
    let comprar = prompt("Elija marca y modelo de la zapatilla"); 
    let calzadoCargado = Calzado();
    let calzadoAComprar = [];
    const filtro = calzadoCargado.filter(item => { 
        return item.marca.toLowerCase() === comprar.toLowerCase();
    });

    if (filtro.length === 0) { 
        alert(`No tenemos stock de esa marca ${comprar}`);
        const marcas = [...new Set(calzadoCargado.map(calzado => calzado.marca))];
        let marcasCadena = marcas.join(", "); 
        let mensaje = `Tenemos zapatillas de estas marcas ${marcasCadena}`;
        alert(mensaje);
        Comprar();
    };

    filtro.forEach((item, index) => { 
        let mensaje = `
        Zapatilla: ${index + 1}
        Marca: ${item.marca}
        Modelo: ${item.modelo}
        Precio: $${item.precio}`;
        calzadoAComprar.push(item);
        alert(mensaje);
    });


    let opcion = parseInt(prompt("Ingrese el número de la zapatilla elegida")); 
    const calzadoElegido = filtro[opcion - 1];
    if (opcion >= 1 && opcion <= filtro.length) {
        alert(`Usted eligio ${calzadoElegido.marca}, ${calzadoElegido.modelo} `);
    } else alert("Opción inválida.");
    alert("Gracias por comprar tus zapatillas con nosotros. A continuación ingrese su email para ponernos en contacto con usted.")
    prompt("Ingrese su email");
    alert("Gracias por mandar su email, lo contactaremos lo mas pronto posible.")
    return calzadoAComprar;
};

const venderCalzado = () => {
    let vender = confirm("Quieres vender tus zapatillas?");
    const cargarCalzado = [];

    while (vender === true) {
        cargarCalzado.push(new Zapatillas(prompt("Ingrese la marca"),
            prompt("Ingrese el modelo de las zapatillas"),
            parseInt(prompt("Ingrese el precio al que desea venderlo"))));
        vender = confirm("Quieres vender algo más?");
    };
    
    return cargarCalzado;
};

const concatDeCalzado = (calzadoPreCargado, calzadoCargadoPorElUsuario) => {
    let concatDeCalzado = calzadoPreCargado.concat(calzadoCargadoPorElUsuario);
    
    if (calzadoCargadoPorElUsuario.length > 1) {
        alert(`Gracias por vender ${calzadoCargadoPorElUsuario.length} tus zapatillas con nosotros. Ingrese a continuación su email para finalizar su venta.`);
    } else if (calzadoCargadoPorElUsuario.length === 1) {
        alert("Gracias por vender tus zapatillas. Ingrese a continuación su email para finalizar su venta.");
        prompt("Ingrese su email");
        alert("Gracias por mandar su email, lo contactaremos lo mas pronto posible.")
    } else alert("Nos encantaria que vendas tus zapatillas con nosotros.");

    return concatDeCalzado;
}

compraOVenta();


 
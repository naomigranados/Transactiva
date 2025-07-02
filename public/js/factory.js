// Clase base
class FigGeo {
    constructor() {
        this.area = 0;
    }

    calcArea() {
        throw new Error("Método calcArea() debe ser implementado");
    }

    saveArea() {
        if (this.area === 0) {
            console.log("calculando area...");
            this.area = this.calcArea();
        }
    }

    getArea() {
        return this.area;
    }
}

// Interfaz de impresión (usamos convención en JS)
class FigGeoPrinter {
    printDetails() {
        throw new Error("Método printDetails() debe ser implementado");
    }
}

// Clase Circle (hereda de FigGeo y usa interfaz FigGeoPrinter)
class Circle extends FigGeo {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calcArea() {
        return Math.PI * this.radius * this.radius;
    }

    printDetails() {
        console.log(radio = ${this.radius}, area = ${this.area});
    }
}

// Fábrica de Figuras Geométricas
class FigGeoFactory {
    static createCircle(radius) {
        return new Circle(radius);
    }
}

// ------------------------
// Uso de la fábrica
// ------------------------
const figura = FigGeoFactory.createCircle(5.0);
figura.saveArea();
figura.printDetails();
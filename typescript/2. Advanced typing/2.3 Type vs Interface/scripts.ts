/** Type vs Interface **/

// Aliases - type
// 1. primitives, unions, intersections
// type Window - can't be created

// Interfaces - interface
// 1. When we want to expand interface in future
// 2. Class with implements

interface InterfaceProduct {
    price : number,
    isNew : boolean,
    isSale ?: boolean,
    title : string
}

interface InterfaceVehicle {
    wheels: number,
    year: number,
    brand: string
}

interface InterfaceCar extends InterfaceProduct, InterfaceVehicle{
    type: string,
    model: string
}


type TypeProduct = {
    price : number,
    isNew : boolean,
    isSale : boolean,
    title : string
}

type TypeVehicle = {
    wheels: number,
    year: number,
    brand: string
}

type TypeCar = {
    type: string,
    model: string
} & TypeProduct & TypeVehicle;

export {}
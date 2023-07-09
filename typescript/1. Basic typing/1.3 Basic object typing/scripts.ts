/** Basic object typing **/
interface Car {
    wheels: number,
    brand: string,
    type: string,
    // Optional features
    isNew?: boolean,
    name?: string,
    // Method for adding properties
    [key: string]: unknown;
}
const car: Car = {
    wheels: 4,
    brand: 'BMW',
    type: 'Sedan',
    isNew: true,
};
car.brand = 'NewBrand';

const car2: Car = {
    wheels: 4,
    brand: 'Opel',
    type: 'Sedan',
    isNew: false,
    name: 'Astra'
};
car2['drive'] = true;
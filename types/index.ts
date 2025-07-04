export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    age: number;
    image: string;
    department: string;
    rating: number;
    address: { city: string, address: string };
    phone: number
}

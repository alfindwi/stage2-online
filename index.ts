// tipe data dasar typescript

// primitive types number, string, boolean

// const age: number = 18;
// const fullName: string = "alvin";
// const isStudent: boolean = true;

// tipe any dan unknown

// const vAny: any = 89;
// const vUnkown: unknown = 88;

// const v1: string = vAny; // any bisa dimasukan ke tipe data apapun
// // const v2: number = vUnkown ; // tidak bisa
// // const v3: string = vUnkown as string; // bisa karena kita memberikan kepastian bahwa data ini adalah string,

// // vAny.method() // semuanya dianggap bisa oleh any
// // vUnkown.method() // Tidak ok; kita tidak tau apapun dari variable ini

// tipe union dan itersction types

// Union mengizinkan variable memiliki lebih dari satu tipe. Membacanya ATAU " | "
// Intersection menggabungkan beberapa tipe menjadi satu. Cara bacanya DAN " & "

// union 

// let value: string | number ;
// value = "Hello",
// value = 18;


// itersection 

// type A = {
//     a: string;
// }

// type B = {
//     b: number;
// }

// let value : A & B;

// value = {
//     a: "Hello",
//     b: 18
// }

// literal types

// type Direction = "left" | "right";
// let Direction1 = "kiri"; //  error, Direction bukan tipe string, tapi tipenya ya literally "left" dan "right"
// let Direction2 = "right"; 

// enum 

// enum Color {
//     Red = "red",
//     Green = "green",
//     Blue = "blue"
// }

// let color : Color = Color.Green;

// console.log(color);


// interfaces dan types alias

// interface
// interface User{
//     fullName: string;
//     age: number;
// }

// let user : User = {
//     fullName: "alvin",
//     age: 18
// }

// type alias
// type User = {
//     name?: string; // ? tidak wajib di isi
//     email: string;
//     password: string;
// }

// let user: User = {
//     email: "alvin",
//     password: "xxx"
// }


// extending interfaces
// interface User {
//     name?: string;
//     email: string;
//     password: string;
// }

// interface Profile{
//     image?: string;
//     age? : number;
//     birthDate?: Date;
//     address: string;
// }

// interface UserProfile extends User, Profile{}

// extend type alias

// type User = {
//     name?: string;
//     email: string;
//     password: string;
// }

// type Profile = {
//     image?: string;
//     age? : number;
//     birthDate?: Date;
//     address: string;
// }

// type UserProfile = User & Profile;

// let user: UserProfile = {
//     email: "alvin",
//     password: "xxx",
//     address: "xxx"
// }


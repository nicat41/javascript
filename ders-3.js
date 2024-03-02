// /////////////////////////////////////////////////////////////////////////////////////// 3 ders ki 1   tabsiriq
// let meyve = ["Alma", "Armud", "Banan", "Çiyələk"]

// console.log(meyve.length)
// console.log("ilk deyer", meyve[0], "son deyer", meyve[meyve.length - 1])      //// yarimciq qailib

// meyve.push("Mandalin")
// console.log(meyve)
// meyve.splice(-2)
// console.log(meyve)

// /////////////////////////////////////////////////////////////////////////////////////// 3 ders ki 2   tabsiriq

// let user = {
//     name: "nicat",
//     sorname: "hasimov",
//     age: 23,
//     hobby: ["swim", "book"],
//     family: {
//         "father-name": "natiq",
//         brother: "nihat"
//     },
//     works: [
//         {
//            "I am working": "master",
//         },

//         {
//             "My father is working": "Gardener",

//         },

//         {
//             "My brother is working": "seller",
//         },

//     ]
// }

// console.log(user.name)
// console.log(user.sorname)
// console.log(user.age)
// console.log(user.hobby[0])
// console.log(user.hobby[1])
// console.log(user.family["father-name"])
// console.log(user.family.brother)
// console.log(user.works[0]["I am working"])
// console.log(user.works[1]["My father is working"])
// console.log(user.works[2]["My brother is working"])

// /////////////////////////////////////////////////////////////////////////////////////// 3 ders ki 1   tabsiriq

// let orders = [
//   {
//     id: "1",
//     date: "2024.03.01",
//     payment_type: "card",
//     cargo_address: "yasamal rayonu",
//     products: [
//       {
//         id: "2",
//         title: " telefon redmi not 9 pro",
//         url: "fecbook",
//         price: "11397",
//       },
//       {
//         id: "3",
//         title: "qulaqliq JBL LIVE 770 NC Blue",
//         url: "instagram",
//         price: "857",
//       },
//     ],
//     customer_id: "nicat",
//     seller: {
//       id: "5",
//       name: "yusif",
//     },
//   },
// ];

// let date = orders[0].date;
// let payment_type = orders[0].payment_type;
// let cargo_address = orders[0].cargo_address;
// let title1 = orders[0].products[0].title;
// let title2 = orders[0].products[1].title;

// let price1 = orders[0].products[0].price;
// let price2 = orders[0].products[1].price;
// let total = Number(price1) + Number(price2);

// totalprice = (total * 15) / 100;

// let totalprices = totalprice + total;

// console.log(`salam sizin kargo melubatlariniz, 
// sifariş tarixi: ${date} 
// ödəniş növünüz: ${payment_type} 
// ünvan: ${cargo_address} 
// mesulunuz adi: ${title1} qiymet: ${price1}azn
// mesulunuz adi: ${title2} qiymet: ${price2}azn
// ümumi məhsulun qiyməti: ${total} 
// Karqo qiymeti ${totalprice}
// ümumi məhsulun  Karqo daxil qiymetdi: ${totalprices}`);





// /////////////////////////////////////////////////////////////////////////////////////// 3 ders ki 2   tabsiriq


// let number = [1, 5, 6, 8, 15, 20, 4];

// for ( let i = 0; i < number.length; i++) {

// console.log(number[i] * number[i])

// }

//////////////////////////////////////////////////////////////

// let number = [1, 5, 6, 8, 15, 20, 4];

// for ( let i = 0; i < number.length; i++) {
    
//     if ( number[i] >= 9 && number[i] <= 99)
//    console.log(number[i])
// }


//////////////////////////////////////////////////////////////////////

// let number = [1, 5, 6, 8, 15, 20, 4];


//     for (let i = 0; i <= number.length; i++) { 
//         if ((number[i] / 3) = 0) { 
//             console.log(number) 
//         } 
    
//     } 
  
//////////////////////////////////////////////////////////////////////////////////////////
  
// let fruits = ['alma', 'armud', 'banan', 'çiyələk']; 
// let Newfruits = []
// for(let i = 0; i < fruits.length; i++) {
// let array = fruits[i].toUpperCase();
// Newfruits.push(array)
// }

// console.log(Newfruits);



///////////////////////////////////////////////////////////////////////////

// let fruits = ['alma', 'armud', 'banan', 'çiyələk']; 
// for(let i = 0; i < fruits.length; i++) {

//     if (fruits.indexOf === "a") {
//         console.log(fruits)
//     }
// }


////////////////////////////////////////////////////////             


let students = [
	{
		name: "Orxan",
		surname: "Abbasov",
		scores: [60, 70, 80]
	},
	{
		name: "Kenan",
		surname: "Zeynalov",
		scores: [74, 83, 89]
	},
	{
		name: "Fərid",
		surname: "İsmayılov",
		scores: [78, 81, 94]
	}
]


for(let i = 0; i < students.length; i++) {

if  (( (students[0].scores[0] + students[0].scores[1] + students[0].scores[2]) / 3 ) <= 60) {
    console.log("normal")
};


}
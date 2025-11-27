// Mock data

const cars_mock = [
  {
    name: "Toyota Corolla",
    model: "Xei Cvt",
    price: 20000, // USD
    year: 2022,
    km: 60000,
    locality: "La Falda",
    province: "Córdoba",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/autoprecios-f936b.appspot.com/o/cars%2Ftemp_1763139842260_mzvubkhsv%2Fmeli_0_1763139842732.webp?alt=media&token=4b6d0fe9-28b9-4232-b6f9-7ea46deacae3",
  },
  {
    name: "Fiat Punto",
    model: "Elx 1.4 5p",
    price: 6300, // USD
    year: 2009,
    km: 162845,
    locality: "Saavedra",
    province: "CABA",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/autoprecios-f936b.appspot.com/o/cars%2Ftemp_1763139842261_mzvubkhsy%2Fmeli_0_1763139842733.webp?alt=media&token=a8c5f1b2-11a3-424a-b5a8-5d2f703abc1e",
  },
  {
    name: "Volkswagen Bora",
    model: "2.0 Trendline 115cv Manual",
    price: 7990, // USD
    year: 2013,
    km: 123000,
    locality: "Barracas",
    province: "CABA",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/autoprecios-f936b.appspot.com/o/cars%2Ftemp_1763139842262_mzvubkhsz%2Fmeli_0_1763139842734.webp?alt=media&token=3e9b1d0c-6a1e-4c7b-8d0f-1a3b4e5f6g7h",
  },
  {
    name: "Audi A1",
    model: "1.4 Tfsi S Line S Tronic 185 Cv",
    price: 20000, // USD
    year: 2013,
    km: 120000,
    locality: "Loma Verde",
    province: "Buenos Aires",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/autoprecios-f936b.appspot.com/o/cars%2Ftemp_1763139842263_mzvubkhsA%2Fmeli_0_1763139842735.webp?alt=media&token=8f7e6d5c-4b3a-2c1d-9e8c-7b6a5d4c3b2a",
  },
  {
    name: "Chevrolet Tracker",
    model: "Ltz Awd",
    price: 14500, // USD
    year: 2017,
    km: 86000,
    locality: "Villa Devoto",
    province: "CABA",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/autoprecios-f936b.appspot.com/o/cars%2Ftemp_1763139842264_mzvubkhsB%2Fmeli_0_1763139842736.webp?alt=media&token=1c2d3e4f-5g6h-7i8j-9k0l-1m2n3o4p5q6r",
  },
  {
    name: "Volkswagen Golf",
    model: "Gti",
    price: 35000, // USD
    year: 2018,
    km: 73000,
    locality: "Salta",
    province: "Salta",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/autoprecios-f936b.appspot.com/o/cars%2Ftemp_1763139842265_mzvubkhsC%2Fmeli_0_1763139842737.webp?alt=media&token=2a3b4c5d-6e7f-8g9h-0i1j-2k3l4m5n6o7p",
  },
  {
    name: "Jeep Compass",
    model: "Limited Plus",
    price: 40500000, // ARS (Valor numérico alto para simular precio en pesos)
    year: 2021,
    km: 70200,
    locality: "Córdoba",
    province: "Córdoba",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/autoprecios-f936b.appspot.com/o/cars%2Ftemp_1763139842266_mzvubkhsD%2Fmeli_0_1763139842738.webp?alt=media&token=3c4d5e6f-7g8h-9i0j-1k2l-3m4n5o6p7q8r",
  },
  {
    name: "Fiat Toro",
    model: "Ranch 2.0 16v Multijet 4x4 At9",
    price: 23000, // USD
    year: 2020,
    km: 66000,
    locality: "San Salvador de Jujuy",
    province: "Jujuy",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/autoprecios-f936b.appspot.com/o/cars%2Ftemp_1763139842267_mzvubkhsE%2Fmeli_0_1763139842739.webp?alt=media&token=4d5e6f7a-8b9c-0d1e-2f3g-4h5i6j7k8l9m",
  },
  {
    name: "Chevrolet Sonic",
    model: "Ltz 5p At",
    price: 8500, // USD
    year: 2013,
    km: 80000,
    locality: "Caballito",
    province: "CABA",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/autoprecios-f936b.appspot.com/o/cars%2Ftemp_1763139842268_mzvubkhsF%2Fmeli_0_1763139842740.webp?alt=media&token=5e6f7a8b-9c0d-1e2f-3g4h-5i6j7k8l9m0n",
  },
  {
    name: "Chevrolet Vectra",
    model: "Next Edition Cd 2.4 16v 4p At",
    price: 8700, // USD
    year: 2010,
    km: 97000,
    locality: "CABA",
    province: "CABA",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/autoprecios-f936b.appspot.com/o/cars%2Ftemp_1763139842269_mzvubkhsG%2Fmeli_0_1763139842741.webp?alt=media&token=6f7a8b9c-0d1e-2f3g-4h5i-6j7k8l9m0n1p",
  },
  {
    name: "Chevrolet Aveo",
    model: "Lt 4p",
    price: 12000000, // ARS
    year: 2012,
    km: 82000,
    locality: "Monserrat",
    province: "CABA",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/autoprecios-f936b.appspot.com/o/cars%2Ftemp_1763139842270_mzvubkhsH%2Fmeli_0_1763139842742.webp?alt=media&token=7a8b9c0d-1e2f-3g4h-5i6j-7k8l9m0n1p2q",
  },
  {
    name: "Ford Fiesta",
    model: "Titanium 5p Mt",
    price: 11200, // USD
    year: 2013,
    km: 94500,
    locality: "CABA",
    province: "CABA",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/autoprecios-f936b.appspot.com/o/cars%2Ftemp_1763139842271_mzvubkhsI%2Fmeli_0_1763139842743.webp?alt=media&token=8b9c0d1e-2f3g-4h5i-6j7k-8l9m0n1p2q3r",
  },
  {
    name: "Dodge Journey",
    model: "2.4 Sxt",
    price: 20999, // USD
    year: 2018,
    km: 122000,
    locality: "San Isidro",
    province: "Buenos Aires",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/autoprecios-f936b.appspot.com/o/cars%2Ftemp_1763139842272_mzvubkhsJ%2Fmeli_0_1763139842744.webp?alt=media&token=9c0d1e2f-3g4h-5i6j-7k8l-9m0n1p2q3r4s",
  },
  {
    name: "Volkswagen Up!",
    model: "Take",
    price: 10500, // USD
    year: 2019,
    km: 88000,
    locality: "Olivos",
    province: "Buenos Aires",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/autoprecios-f936b.appspot.com/o/cars%2Ftemp_1763139842273_mzvubkhsK%2Fmeli_0_1763139842745.webp?alt=media&token=0d1e2f3g-4h5i-6j7k-8l9m-0n1p2q3r4s5t",
  },
  {
    name: "Peugeot 408",
    model: "Sport 1.6 Thp",
    price: 9000, // USD
    year: 2012,
    km: 140000,
    locality: "Mataderos",
    province: "CABA",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/autoprecios-f936b.appspot.com/o/cars%2Ftemp_1763139842274_mzvubkhsL%2Fmeli_0_1763139842746.webp?alt=media&token=1e2f3g4h-5i6j-7k8l-9m0n-1p2q3r4s5t6u",
  },
];


document.addEventListener('DOMContentLoaded', () => {
  console.log(cars_mock);
  const carsContainerSection = document.querySelector('#carsContainer')
  const cardSummaryCar = document.createElement('li')
  cardSummaryCar.classList.add('p-3')

  

})

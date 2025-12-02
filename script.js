// Mock data

const CARS_BRAND_MOCK = [
  "Toyota",
  "Fiat",
  "Volkswagen",
  "Audi",
  "Chevrolet",
  "Jeep",
  "Ford",
  "Dodge",
  "Peugeot",
];

const CARS_MOCK = [
  {
    name: "Toyota Corolla",
    model: "Xei Cvt",
    brand: "Toyota",
    price: 20000,
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
    brand: "Fiat",
    price: 6300,
    year: 2009,
    km: 162845,
    locality: "Saavedra",
    province: "CABA",
    imageUrl: "https://http2.mlstatic.com/D_888742-MLA96060484437_102025-C.jpg",
  },
  {
    name: "Volkswagen Bora",
    model: "2.0 Trendline 115cv Manual",
    brand: "Volkswagen",
    price: 7990,
    year: 2013,
    km: 123000,
    locality: "Barracas",
    province: "CABA",
    imageUrl: "https://http2.mlstatic.com/D_959112-MLA88885178223_072025-C.jpg",
  },
  {
    name: "Audi A1",
    model: "1.4 Tfsi S Line S Tronic 185 Cv",
    brand: "Audi",
    price: 20000,
    year: 2013,
    km: 120000,
    locality: "Loma Verde",
    province: "Buenos Aires",
    imageUrl:
      "https://http2.mlstatic.com/D_NQ_NP_702545-MLA95981816572_102025-O.webp",
  },
  {
    name: "Chevrolet Tracker",
    model: "Ltz Awd",
    brand: "Chevrolet",
    price: 14500,
    year: 2017,
    km: 86000,
    locality: "Villa Devoto",
    province: "CABA",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTkK9MhG2AWb-hKJ81OxWpCiPTQ6eND_YQQ&s",
  },
  {
    name: "Volkswagen Golf",
    model: "Gti",
    brand: "Volkswagen",
    price: 35000,
    year: 2018,
    km: 73000,
    locality: "Salta",
    province: "Salta",
    imageUrl:
      "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/caradvice/private/a99942be85e2cf450127997e2dfd8a81",
  },
  {
    name: "Jeep Compass",
    model: "Limited Plus",
    brand: "Jeep",
    price: 27458,
    year: 2021,
    km: 70200,
    locality: "Córdoba",
    province: "Córdoba",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/autoprecios-f936b.appspot.com/o/cars%2FyrGRfVx3IHI2hp3AL7sv%2F516a4296-626d-4a87-8262-c04482079eb4_1763730324467.webp?alt=media&token=f16e459e-676d-4936-965f-110b713ad110",
  },
  {
    name: "Fiat Toro",
    model: "Ranch 2.0 16v Multijet 4x4 At9",
    brand: "Fiat",
    price: 23000,
    year: 2020,
    km: 66000,
    locality: "San Salvador de Jujuy",
    province: "Jujuy",
    imageUrl: "https://i.ytimg.com/vi/XwxcqlqRsUg/maxresdefault.jpg",
  },
  {
    name: "Chevrolet Sonic",
    model: "Ltz 5p At",
    brand: "Chevrolet",
    price: 8500,
    year: 2013,
    km: 80000,
    locality: "Caballito",
    province: "CABA",
    imageUrl:
      "https://cdncla.lavoz.com.ar/files/avisos/aviso_auto/aviso-auto-chevrolet-sonic-4ebd8d75-0cee-48c8-83fc-1fcbab727d74-249.webp",
  },
  {
    name: "Chevrolet Vectra",
    model: "Next Edition Cd 2.4 16v 4p At",
    brand: "Chevrolet",
    price: 8700,
    year: 2010,
    km: 97000,
    locality: "CABA",
    province: "CABA",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Chevrolet_Vectra_2.4_CD_2010_%2814439978435%29.jpg/1024px-Chevrolet_Vectra_2.4_CD_2010_%2814439978435%29.jpg",
  },
  {
    name: "Chevrolet Aveo",
    model: "Lt 4p",
    brand: "Chevrolet",
    price: 12000000, // ARS
    year: 2012,
    km: 82000,
    locality: "Monserrat",
    province: "CABA",
    imageUrl:
      "https://acroadtrip.blob.core.windows.net/publicaciones-imagenes/Small/chevrolet/aveo/ar/RT_PU_95b8f687e7ca4c9e9fd4c2ada4d2f98d.webp",
  },
  {
    name: "Ford Fiesta",
    model: "Titanium 5p Mt",
    brand: "Ford",
    price: 11200,
    year: 2013,
    km: 94500,
    locality: "CABA",
    province: "CABA",
    imageUrl:
      "https://http2.mlstatic.com/D_NQ_NP_642779-MLA83304962454_042025-O.webp",
  },
  {
    name: "Dodge Journey",
    model: "2.4 Sxt",
    brand: "Dodge",
    price: 20999,
    year: 2018,
    km: 122000,
    locality: "San Isidro",
    province: "Buenos Aires",
    imageUrl:
      "https://cdncla.lavoz.com.ar/files/avisos/aviso_auto/aviso-auto-dodge-journey-c3ec2922-81ed-4b11-a1c3-9ec1b9d8300c-105.webp",
  },
  {
    name: "Volkswagen Up!",
    model: "Take",
    brand: "Volkswagen",
    price: 10500,
    year: 2019,
    km: 88000,
    locality: "Olivos",
    province: "Buenos Aires",
    imageUrl:
      "https://cuyomotor.com.ar/wp-content/uploads/2018/04/Vw-up-2018-1.jpg",
  },
  {
    name: "Peugeot 408",
    model: "Sport 1.6 Thp",
    brand: "Peugeot",
    price: 9000,
    year: 2012,
    km: 140000,
    locality: "Mataderos",
    province: "CABA",
    imageUrl:
      "https://cdncla.lavoz.com.ar/files/avisos/aviso_auto/aviso-auto--14283762.webp",
  },
];

// Constants
const carsContainerSection = document.querySelector("#carsContainer");
const brandSelect = document.querySelector("#carBrand");
const yearInput = document.querySelector("#carYear");
const currentYear = new Date().getFullYear();
const minYearCar = 2000;
const minPriceInput = document.querySelector("#carMinPrice");
const maxPriceInput = document.querySelector("#carMaxPrice");
const minKmInput = document.querySelector("#carMinKm");
const maxKmInput = document.querySelector("#carMaxKm");
const carsFiltered = {
  carBrand: "",
  carYear: "",
  carMinPrice: "",
  carMaxPrice: "",
  carMinKm: "",
  carMaxKm: "",
};

document.addEventListener("DOMContentLoaded", () => {
  showCars(CARS_MOCK);
  showBrandOptions();
});

brandSelect.addEventListener("change", (e) => {
  carsFiltered.carBrand = e.target.value;
  getCarsFiltered();
});
yearInput.addEventListener("blur", validate);
minPriceInput.addEventListener("blur", validate);
maxPriceInput.addEventListener("blur", validate);
minKmInput.addEventListener("blur", validate);
maxKmInput.addEventListener("blur", validate);

function formattedPrice(price) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "USD",
  }).format(price);
}

function showCars(carsArray) {
  // Guard if container is not found
  if (!carsContainerSection) {
    console.error('Container element "#carsContainer" not found');
    return;
  }

  // Apply layout classes once to the container
  carsContainerSection.classList.add(
    "grid",
    "grid-cols-1",
    "sm:grid-cols-2",
    "md:grid-cols-3",
    "lg:grid-cols-4",
    "xl:grid-cols-5",
    "gap-4",
    "list-none",
    "p-0",
    "m-0"
  );

  clearResultsContainerHtml();
  for (const car of carsArray) {
    // Create atoms elements for card
    const { imageUrl, km, locality, province, model, name, price, year } = car;

    // Create fresh elements for each car (do not reuse)
    const cardSummaryCar = document.createElement("li");

    const cardTitleCar = document.createElement("span");
    const cardPriceCar = document.createElement("span");
    const cardYearCar = document.createElement("span");
    const cardKmCar = document.createElement("span");
    const cardLocalityCar = document.createElement("span");
    const cardImageCar = document.createElement("img");

    // Add content in atoms elements
    cardTitleCar.textContent = `${name} ${model}`;
    cardPriceCar.textContent = formattedPrice(price);
    cardYearCar.textContent = year;
    cardKmCar.textContent = `km: ${km}`;
    cardLocalityCar.textContent = `${locality}, ${province}`;
    cardImageCar.src = imageUrl;
    cardImageCar.alt = `${name} ${model}`;

    // Add styles to card element
    cardSummaryCar.classList.add(
      "pb-2",
      "border-slate-300",
      "border-1",
      "rounded-md",
      "flex",
      "flex-col",
      "gap-2"
    );

    // Add atoms elements to card
    cardSummaryCar.appendChild(cardImageCar);
    cardSummaryCar.appendChild(cardTitleCar);
    cardSummaryCar.appendChild(cardPriceCar);
    cardSummaryCar.appendChild(cardYearCar);
    cardSummaryCar.appendChild(cardKmCar);
    cardSummaryCar.appendChild(cardLocalityCar);
    carsContainerSection.appendChild(cardSummaryCar);
  }
}

function clearResultsContainerHtml() {
  while (carsContainerSection.firstChild) {
    carsContainerSection.removeChild(carsContainerSection.firstChild);
  }
}

function showBrandOptions() {
  for (const brand of CARS_BRAND_MOCK) {
    const optionBrand = document.createElement("option");
    optionBrand.value = brand;
    optionBrand.textContent = brand;
    brandSelect.append(optionBrand);
  }
}

function validate(event) {
  clearAlert(event.target.parentElement);
  fieldsRegex(event.target.value, event.target.id, event.target.parentElement);

  carsFiltered[event.target.id] = event.target.value.trim().toLowerCase();
  getCarsFiltered();
}

function showAlert(message, elementRef) {
  clearAlert(elementRef);
  const error = document.createElement("p");
  error.textContent = message;
  error.classList.add("py-2", "text-red-300", "font-semibold");
  // Agregar el error abajo de cada input
  elementRef.appendChild(error);
}

function clearAlert(elementRef) {
  const supportingTextError = elementRef.querySelector(".text-red-300");
  if (supportingTextError) {
    supportingTextError.remove();
  }
}

const VALIDATION_RULES = {
  carYear: {
    rules: [
      {
        test: (value) => /^\d{4}$/.test(value),
        message: "El año debe tener 4 números",
      },
      {
        test: (value) => Number(value) < currentYear,
        message: "El año debe ser menor al año actual",
      },
      {
        test: (value) => Number(value) > minYearCar,
        message: "El año debe ser mayor al año 2000",
      },
    ],
    carMinPrice: {
      rules: [
        {
          test: (value) => /^\d+$/.test(String(value).trim()),
          message: "El precio mínimo debe ser un número",
        },
      ],
    },
    carMaxPrice: {
      rules: [
        {
          test: (value) => /^\d+$/.test(String(value).trim()),
          message: "El precio máximo debe ser un número",
        },
        {
          test: (value) => Number(value) > carsFiltered.carMinPrice,
          message: "El precio máximo debe ser mayor al precio mínimo",
        },
      ],
    },
    carMinKm: {
      rules: [
        {
          test: (value) => /^\d+$/.test(String(value).trim()),
          message: "El kilómetraje mínimo debe ser un número",
        },
      ],
    },
    carMaxKm: {
      rules: [
        {
          test: (value) => Number(value) > carsFiltered.carMinKm,
          message: "El kilómetraje máximo debe ser mayor al kilómetraje mínimo",
        },
      ],
    },
  },
};

function fieldsRegex(value, id, elementRef) {
  if (!VALIDATION_RULES[id]) return true; // Sin reglas definidas = válido

  if (value === "" || value === undefined) return true;

  const rules = VALIDATION_RULES[id].rules;

  for (const ruleYear of rules) {
    if (!ruleYear.test(value)) {
      showAlert(ruleYear.message, elementRef);
      return false;
    }
  }

  // Si pasó todas las validaciones agregar al objeto de filtros
  return true;
}

function getCarsFiltered() {
  const carsResult = CARS_MOCK.filter(filterBrands).filter(filterYear);

  //console.log(carsResult);
  showCars(carsResult);
}

function filterBrands(car) {
  const { carBrand } = carsFiltered;
  if (carBrand) {
    return car?.brand === carBrand;
  }

  return car;
}

function filterYear(car) {
  const { carYear } = carsFiltered;
  if (carYear) {
    return car.year.toString() === carYear;
  }

  return car;
}

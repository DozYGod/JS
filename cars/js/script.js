let cars = [
    {
        id: 1,
        model: "urus",
        company: "lamborgini",
        price: 266000,
        engineForce: 6.5 
    },
    {
        id: 2,
        model: "cheron",
        company: "buggatti",
        price: 500000,
        engineForce: 7 
    },
    {
        id: 3,
        model: "malibu 2",
        company: "gm",
        price: 33000,
        engineForce: 2.4 
    },
    {
        id: 4,
        model: "gentra",
        company: "gm",
        price: 17000,
        engineForce: 1.5
    },
    {
        id: 5,
        model: "gelen vagen",
        company: "mercedes",
        price: 300000,
        engineForce: 4
    },
    {
        id: 6,
        model: "matiz",
        company: "daewoo",
        price: 3000,
        engineForce: 6
    }
]


let company = prompt("Введите интересующую компанию:");
let model = prompt("Введите интересующую модель:");
let budget = +prompt("Введите свой бюджет:");

let car = cars.filter(cars => cars === company && cars.model === model);

if (car) {
  if (car.price <= budget) {
    alert(`Поздравляем, вы можете купить ${car} ${car.model} за ${car.price}$`);
  } else {
    alert(`К сожалению, у вас недостаточно денег для покупки ${car} ${car.model}. Требуется еще ${car.price - budget}$`);
  }
} else {
  alert("К сожалению, мы не нашли такой модели в нашем автосалоне.");
}


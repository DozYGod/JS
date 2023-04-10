//tz
//Соединить два объекта в одно целлое и новое 
//Получить все его ключи в новую переменную
//Получить все его значения в новую переменную
//Соединить все переменные в одну
//И по ним провести цыкл распределив их по нужным ключам в объекте тайпс


let types = {
    string: [],
    number: [],
    boolean: [],
    object: []
}

let obj1 = {
    name: "Джон",
    age: 28,
    student: true
  }
  
  let obj2 = {
    city: "Нью-Йорк",
    state: "Нью-Йорк",
    index: 10001
  }
  
  // Объединяем два объекта в один новый объект
  let mergedObj = {...obj1, ...obj2};
  
  // Получить все ключи в новую переменную
  let keys = Object.keys(mergedObj);
  
  // Получить все значения в новую переменную
  let meaning = Object.values(mergedObj);
  
  // Объединяем все переменные в одну
  let combined = keys.concat(meaning);
  
  // Перебираем и распределяем переменные по объектам типов
  for (let i = 0; i <combined.length; i++) {
    let mergedObj = typeof(combined [i]);
    if (mergedObj === "строка") {
      types.string.push (combined[i]);
    } else if (mergedObj === "число") {
      types.number.push(combined[i]);
    } else if (mergedObj === "логическое значение") {
      types.boolean.push (combined[i]);
    } else if (mergedObj === "объект") {
      types.object.push(combined[i]);
    }
  }
  
  console.log(types);
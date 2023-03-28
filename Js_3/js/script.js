// let name = 'Alex'
// let money = 10000
// let accound = 7777

// let nameprmt = prompt('как вас зовут?')

// if (name === nameprmt) {
//     let money1 = prompt('Номер счета?')
//     if (accound === +money1) {
//         let money2 = prompt('сколько обналичить?')
//         if (+money2 < money) {
//             let money3 = money - +money2
//             alert(`снял ${money2} осталось ${money - money2}`)
//         }else{
//             alert('не достаточно средст!')
//         }
//     }else{
//         alert('акк не найден!')
//     }
// }else{
//     alert('пользователь не найден!')
// }

// Второе задание 

// let clubName = prompt('Пропускаются те у каво имя начинается на А/а').toLowerCase().trim()

// if (clubName[0] === 'а') {
//      alert('Welcom')
// }else{
//     alert('GO HOME!')
// }

// let clubMoney = +prompt('Пропускаются те у каво боль $100 в кармане').trim()

// if (clubMoney >= 100 ) {
//      alert('Welcom')
// }else{
//     alert('GO HOME!')
// }

  
// let old = +prompt('Сколько лет тебе? пускаем тех каму > 20 но не старше < 40!').trim()

// if (old >= 20 && old <= 40 ) {
//    alert('welcom')
// }else{
//     alert('GO HOME!')
// }





//четвортое задание

// let now = +prompt('дата');

// let date = +prompt('число');

// if (date.getDate() === now.getDate() &&
//     date.getMonth() === now.getMonth() &&
//     date.getFullYear() === now.getFullYear()) {
//   console.log("текущая дата");
// } else {
//   console.log("не является текущей датой");
// }
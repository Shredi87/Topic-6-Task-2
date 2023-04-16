function arrayObjectIndexOf(myArray, searchTerm) {
    for(let i = 0; i < myArray.length; i++) {
      if (myArray[i] === searchTerm) {
          return i;
        }  
    }

  return -1;
};

function isPossibility(positionOne, positionTwo) {

  /**
   * Делим координаты на две разных ветви.
   */
  let abscissaOne = positionOne[0];
  let ordinateOne = positionOne[1];
  let abscissaTwo = positionTwo[0];
  let ordinateTwo = positionTwo[1];


  /**
   * Задаем допустимые значения по каждой ветви.
   */
  let abscissaArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  let ordinateArr = ['1', '2', '3', '4', '5', '6', '7', '8'];


  /**
   * Проверяем каждую кординату на соответвсвие допустимым значениям и, в случае успешной проверки, получаем индексы.
   */
  let positionAbscissaOne = arrayObjectIndexOf(abscissaArr, abscissaOne);
  let positionAbscissaTwo = arrayObjectIndexOf(abscissaArr, abscissaTwo);
  let positionOrdinateOne = arrayObjectIndexOf(ordinateArr, ordinateOne);
  let positionOrdinateTwo = arrayObjectIndexOf(ordinateArr, ordinateTwo);

  /*
   * Выдаем сообщения, если координаты введены неверно.
   */
  if (positionAbscissaOne === -1 || positionAbscissaTwo === -1) { 
    return 'Введены неверные значения буквенной координаты. Попробуйте еще раз.';
  }

  if (positionOrdinateOne === -1 || positionOrdinateTwo === -1) { 
    return 'Введены неверные значения численной координаты. Попробуйте еще раз.';
  }
  

  /*
   * Сравниваем разницу перемещений по осям по модулю
   */
  return (Math.abs(positionAbscissaOne - positionAbscissaTwo) === Math.abs(positionOrdinateOne - positionOrdinateTwo)) ? true : false;
};

isPossibility('a3', 'g4');


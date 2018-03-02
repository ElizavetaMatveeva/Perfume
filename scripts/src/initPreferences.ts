// Метод "по предпочтениям" 

import showHomeButton from './showHomeButton';
import showRes from './showResult'


// Инициализация кнопки "по предпочтениям"
function initPref(): void 
{
    const button = document.getElementById('preferences') as HTMLButtonElement;
    const m = document.getElementById('methods') as HTMLButtonElement;
    const m2 = document.getElementById('m2') as HTMLButtonElement;
    const intro = document.getElementById('introduction') as HTMLButtonElement;
    const onPref = (event: Event): void =>
    {
        if (event == undefined) { return; }
        m.style.display = 'none'; // Скрыть кнопки "по характеру" и "по предпочтениям"
        intro.style.display = 'none'; // Скрыть введение
        m2.style.display = 'block'; // Показать чекбоксы
        initCountRes(); // Инициализация кнопки "показать результат"
        showHomeButton(); // Отображение кнопки "на главную"
    }
    button.addEventListener( 'click', onPref);
 }

// Инициализация кнопки вычисления результата 
function initCountRes(): void 
{
    const button = document.getElementById('result') as HTMLButtonElement;
    const onRes = (event: Event): void =>
    {
        if (event == undefined) { return; }
        let arr = findCheckedBoxes(); // Поиск отмеченных чекбоксов
        if (arr.length > 0) // Если есть хотя бы один отмеченный чекбокс, показываем результат
            showRes(arr);
        else // В противном случае выводим сообщение об ошибке
        {
            const er = document.getElementById ('error') as HTMLElement;
            er.style.display = 'block';
            er.innerHTML = 'Пожалуйста, ответьте на предложенный вопрос для получения результата';
        }
        event.preventDefault();
    };
    button.addEventListener('click', onRes);
}

// Функция, записывающая в массив индексы отмеченных чекбоксов
function findCheckedBoxes()
{
    let id_arr = new Array(); 
    $('input[type = checkbox]:checked').each(  function() { id_arr.push(this.id); }  );
    return id_arr;
}

export 
{
    initPref as default,
};
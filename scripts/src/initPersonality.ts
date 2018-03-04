// Иниицализация метода "по характеру"

import showHomeButton from './showHomeButton';
import showTestRes from './showTestResult';

// Инициализация кнопки "по характеру"
function initPers(): void
{
    const button = document.getElementById('personality') as HTMLButtonElement;
    const m = document.getElementById('methods') as HTMLButtonElement;
    const m1 = document.getElementById('m1') as HTMLButtonElement;
    const intro = document.getElementById('introduction') as HTMLButtonElement;
    const onPers = (event: Event): void =>
    {
        if (event == undefined) { return; }
        m.style.display = 'none'; // Скрыть кнопки "по характеру" и "по предпочтениям"
        intro.style.display = 'none'; // Скрыть введение
        m1.style.display = 'block'; // Показать тест
        initCountRes(); // Инициализация кнопки "показать результат"
        showHomeButton(); // Отображение кнопки "на главную"
    }
    button.addEventListener( 'click', onPers);
}

// Инициализация кнопки "показать результат"
function initCountRes(): void
{
    const button = document.getElementById('test_result') as HTMLButtonElement;
    let numOfQuest = 10; // Количество вопросов в тесте
    const onRes = (event: Event): void =>
    {
        if (event == undefined) { return; }
        let arr = writeButtonsIds(); // Записываем ответы, выбранные пользователем
        if (arr.length == numOfQuest) // Если пользователь ответил на все вопросы, показываем результаты теста
        {
            let max_i = findMax(arr); // Ищем максимально часто встречающийся вариант ответа (1 или более)
            showTestRes(max_i);
        }
        else // Иначе выводим сообщение об ошибке
        {
            const er = document.getElementById ('error') as HTMLElement;
            er.style.display = 'block';
            er.textContent = 'Пожалуйста, ответьте на все предложенные вопросы для получения результата';
        }
        event.preventDefault();
    }
    button.addEventListener('click', onRes);
}

// Функция, записывающая ответы пользователя в массив
function writeButtonsIds() 
{
    let id_arr: string[] = [];
    $('input[type = radio]:checked').each(  function() { id_arr.push((<HTMLInputElement>this).value); }  );
    return id_arr;
}

// Функция, которая ищет номер ответа, встречающегося чаще всего
function findMax(arr)
{
    let counter = [0, 0, 0, 0]; // Массив счётчиков номеров ответов
    let answer: number[] = []; // Массив для номеров ответов, встречающихся максимальное кол-во раз
    let max = 0; 
    for (let i = 0; i < arr.length; i++) // Заполняем счётчики и ищем максимум
        counter[arr[i]-1]++;
    for (let i = 0; i < counter.length; i++)
    {
        if (counter[i] > max )
            max = counter[i];
    }
    for (let i = 0; i < counter.length; i++) // Если разные ответы встречались одинаковое кол-во раз, заносим их в массив
    {
        if (max == counter[i])
            answer.push(i);
    }
    return answer;
}

export
{
    initPers as default,
};
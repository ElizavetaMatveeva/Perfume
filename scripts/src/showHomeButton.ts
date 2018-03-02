// Функция, отображающая кнопку "на главную" 

function showHomeBtn (): void 
{
    const h = document.getElementById('home') as HTMLButtonElement;
    h.style.display = 'block';
}

export 
{
	showHomeBtn as default,
};
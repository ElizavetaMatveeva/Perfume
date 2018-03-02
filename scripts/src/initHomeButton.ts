// Инициализация кнопки "на главную"

function initHome (): void
{
    const button = document.getElementById('home') as HTMLButtonElement;
    button.style.display = 'none';
    const onHome = ( event: Event ): void => 
	{	
        if (event == undefined) { return; }
        location.reload();
    };
    button.addEventListener( 'click', onHome);
}

export 
{
	initHome as default,
};
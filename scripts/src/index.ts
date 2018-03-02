// Инициализация кнопок 
// npm run build:scripts 

import initPref from './initPreferences';
import initPers from './initPersonality';
import initHome from './initHomeButton';

function main(): void
{
    initPref();
    initHome();
    initPers();
}

main();

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return showHomeBtn; });
function showHomeBtn() {
    const h = document.getElementById('home');
    h.style.display = 'block';
}



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__initPreferences__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__initPersonality__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__initHomeButton__ = __webpack_require__(6);



function main() {
    Object(__WEBPACK_IMPORTED_MODULE_0__initPreferences__["a" /* default */])();
    Object(__WEBPACK_IMPORTED_MODULE_2__initHomeButton__["a" /* default */])();
    Object(__WEBPACK_IMPORTED_MODULE_1__initPersonality__["a" /* default */])();
}
main();


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initPref; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__showHomeButton__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__showResult__ = __webpack_require__(3);


function initPref() {
    const button = document.getElementById('preferences');
    const m = document.getElementById('methods');
    const m2 = document.getElementById('m2');
    const intro = document.getElementById('introduction');
    const onPref = (event) => {
        if (event == undefined) {
            return;
        }
        m.style.display = 'none';
        intro.style.display = 'none';
        m2.style.display = 'block';
        initCountRes();
        Object(__WEBPACK_IMPORTED_MODULE_0__showHomeButton__["a" /* default */])();
    };
    button.addEventListener('click', onPref);
}
function initCountRes() {
    const button = document.getElementById('result');
    const onRes = (event) => {
        if (event == undefined) {
            return;
        }
        let arr = findCheckedBoxes();
        if (arr.length > 0)
            Object(__WEBPACK_IMPORTED_MODULE_1__showResult__["a" /* default */])(arr);
        else {
            const er = document.getElementById('error');
            er.style.display = 'block';
            er.innerHTML = 'Пожалуйста, ответьте на предложенный вопрос для получения результата';
        }
        event.preventDefault();
    };
    button.addEventListener('click', onRes);
}
function findCheckedBoxes() {
    let id_arr = new Array();
    $('input[type = checkbox]:checked').each(function () { id_arr.push(this.id); });
    return id_arr;
}



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return showRes; });
function showRes(arr) {
    const res = ['aкватические («морские») ароматы. Представители категории акватических ароматов подходят и для женщин, и для мужчин – свежие легкие ароматы идеальны для жаркой летней погоды. Особую свежесть и некоторую пикантность таким ароматам часто добавляют зеленые и цитрусовые ноты.',
        'цитрусовые ароматы. Ноты лимона, свежего горького апельсина, мандарина, бергамота делают цитрусовые ароматы особенно свежими и сочными: представители семейства цитрусовых ароматов хорошо подходят для людей, ведущих активный образ жизни, и для теплой погоды. Цитрусовые ароматы для женщин очень часто привлекают интересным сочетанием свежих цитрусовых и цветочных либо фруктовых нот.',
        'шипровые ароматы. Шипровые – одна из самых необычных и интересных категорий в парфюмерии. Шипровые ароматы – это своеобразное сочетание нот бергамота, дубового мха и лабданума, которое ложится в основу парфюмерной композиции и мужских, и женских ароматов. Экзотическая комбинация древесных и цветочных аккордов с нотами мха может быть скорее женственной, с фруктовыми тонами, или же мужской, с акцентами кожи – однако шипровые ароматы всегда очень сухие и действительно необычные.',
        'цветочные ароматы. Традиционная категория парфюмерии, цветочные ароматы строятся на нотах жасмина, пиона, розы, гардении, дуберозы – иногда в сочетании с изысканными пудровыми акцентами.',
        'фруктовые ароматы. Это традиционная категория парфюмерии, женские фруктовые ароматы представляют собой сочетание нот красных ягод и нецитрусовых фруктов – зачастую с акцентами цветочных и пряных нот. Ориентальные аккорды делают фруктовые ароматы особенно привлекательными и запоминающимися.',
        'ориентальные («восточные») ароматы. Ориентальные, или «восточные» ароматы – одна из самых старых и наиболее популярных категорий в парфюмерии, в нее входят ароматы как для женщин, так и для мужчин. Парфюмерная композиция ориентальных духов строится на теплых, пряных нотах амбры, мускуса, ванили. Экзотические, чувственные и бесконечно соблазнительные, ориентальные ароматы обычно интенсивные и глубокие, идеально подходящие для вечера и холодного осенне-зимнего сезона.',
        'зеленые (ветиверовые) ароматы. Чаще всего так называемые «зеленые» ароматы – или духи с отчетливой нотой ветивера – выпускаются для мужчин. Представители этой категории ароматов могут быть свежими, цитрусовыми, или древесно-ориентальными. Как бы то ни было, аккорд ветивера делает такие духи очень свежими, яркими, легкими – идеальными для жаркой погоды.',
        'древесные ароматы. Древесный аккорд в мужских и женских ароматах – теплое сочетание нот сандала, пачули и мха. Как правило, основу композиции древесных ароматов составляют ноты пряностей, меда, дубового мха, кедра, ветивера и амбры.'];
    const form = document.forms[1];
    form.style.display = 'none';
    const d = document.getElementById('description');
    d.innerHTML = 'Вам подходят ';
    for (let i = 0; i < arr.length; i++) {
        if (i > 0)
            d.innerHTML += '<br><br>Также Вам могут понравиться ';
        d.innerHTML += res[arr[i]];
    }
}



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initPers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__showHomeButton__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__showTestResult__ = __webpack_require__(5);


function initPers() {
    const button = document.getElementById('personality');
    const m = document.getElementById('methods');
    const m1 = document.getElementById('m1');
    const intro = document.getElementById('introduction');
    const onPers = (event) => {
        if (event == undefined) {
            return;
        }
        m.style.display = 'none';
        intro.style.display = 'none';
        m1.style.display = 'block';
        initCountRes();
        Object(__WEBPACK_IMPORTED_MODULE_0__showHomeButton__["a" /* default */])();
    };
    button.addEventListener('click', onPers);
}
function initCountRes() {
    const button = document.getElementById('test_result');
    let numOfQuest = 10;
    const onRes = (event) => {
        if (event == undefined) {
            return;
        }
        let arr = writeButtonsIds();
        if (arr.length == numOfQuest) {
            let max_i = findMax(arr);
            Object(__WEBPACK_IMPORTED_MODULE_1__showTestResult__["a" /* default */])(max_i);
        }
        else {
            const er = document.getElementById('error');
            er.style.display = 'block';
            er.innerHTML = 'Пожалуйста, ответьте на все предложенные вопросы для получения результата';
        }
        event.preventDefault();
    };
    button.addEventListener('click', onRes);
}
function writeButtonsIds() {
    let id_arr = new Array();
    $('input[type = radio]:checked').each(function () { id_arr.push(this.id); });
    return id_arr;
}
function findMax(arr) {
    let counter = [0, 0, 0, 0];
    let answer = new Array();
    let max = 0;
    for (let i = 0; i < arr.length; i++)
        counter[arr[i] - 1]++;
    for (let i = 0; i < counter.length; i++) {
        if (counter[i] > max)
            max = counter[i];
    }
    for (let i = 0; i < counter.length; i++) {
        if (max == counter[i])
            answer.push(i);
    }
    return answer;
}



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return showTestRes; });
function showTestRes(arr) {
    const res = ['представители категорий акватических (морских) или зелёных (ветиверовых) ароматов – свежие легкие ароматы идеальны для жаркой летней погоды. Особую свежесть и некоторую пикантность таким ароматам часто добавляют зеленые и цитрусовые ноты. Аккорд ветивера делает такие духи очень свежими, яркими, легкими – идеальными для жаркой погоды.',
        'фруктовые и цитрусовые ароматы, представляющие собой сочетание нот красных ягод и различных фруктов – зачастую с акцентами цветочных и пряных нот. Ориентальные аккорды делают фруктовые ароматы особенно привлекательными и запоминающимися. Цитрусовые же ароматы очень свежие и сочные благодаря нотам лимона, свежего горького апельсина, мандарина и бергамота.',
        'шипровые и древесные ароматы – одни из самых необычных и интересных категорий в парфюмерии. Шипровые ароматы – это своеобразное сочетание нот бергамота, дубового мха и лабданума, которое ложится в основу парфюмерной композиции и мужских, и женских ароматов. Древесные ароматы также характеризуются необычным аккордом – теплое сочетание нот сандала, пачули и мха. Как правило, основу композиции древесных ароматов составляют ноты пряностей, меда, дубового мха, кедра, ветивера и амбры.',
        'цветочные или ориентальные («восточные») ароматы – одна из самых старых и наиболее популярных категорий в парфюмерии, в нее входят ароматы как для женщин, так и для мужчин. Парфюмерная композиция ориентальных духов строится на теплых, пряных нотах амбры, мускуса, ванили. Ориентальные ароматы обычно интенсивные и глубокие. Цветочные же ароматы строятся на нотах жасмина, пиона, розы, гардении, дуберозы – иногда в сочетании с изысканными пудровыми акцентами.'];
    const form = document.forms[0];
    form.style.display = 'none';
    const d = document.getElementById('description');
    d.innerHTML = 'Вам подходят ';
    for (let i = 0; i < arr.length; i++) {
        if (i > 0)
            d.innerHTML += '<br><br>Помимо этого, Вам могут подойти ';
        d.innerHTML += res[arr[i]];
    }
}



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initHome; });
function initHome() {
    const button = document.getElementById('home');
    button.style.display = 'none';
    const onHome = (event) => {
        if (event == undefined) {
            return;
        }
        location.reload();
    };
    button.addEventListener('click', onHome);
}



/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map
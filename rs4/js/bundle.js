!function(e){var n={};function a(s){if(n[s])return n[s].exports;var t=n[s]={i:s,l:!1,exports:{}};return e[s].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=n,a.d=function(e,n,s){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:s})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)a.d(s,t,function(n){return e[n]}.bind(null,t));return s},a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="",a(a.s=4)}([function(module,exports,__webpack_require__){eval('module.exports = __webpack_require__.p + "f22cb49ba5ee2ed15d9cc11e5026e1d2.png";\n\n//# sourceURL=webpack:///./app/main/images/logo.png?')},function(module,exports,__webpack_require__){eval('module.exports = __webpack_require__.p + "8f779c28acf842a50ea1f5fee8216813.png";\n\n//# sourceURL=webpack:///./app/main/images/phone.png?')},function(module,exports,__webpack_require__){eval('module.exports = __webpack_require__.p + "dacf5a3617a4307d5d5c93aad8fa0e49.jpg";\n\n//# sourceURL=webpack:///./app/main/images/logos/SMI.jpg?')},function(module,exports,__webpack_require__){eval('module.exports = __webpack_require__.p + "2f99faef542548e8dd51da071e52c7d8.png";\n\n//# sourceURL=webpack:///./app/main/images/mail.png?')},function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_html__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n(function () {\n  var bellBtn = document.querySelector('.js-bell');\n  var popup = document.querySelector('.js-popup-bell');\n  var btnPopupClosed = document.querySelector('.js-popup-content-closed');\n  var is = bellBtn && popup && btnPopupClosed;\n  if (!is) return 0;\n  bellBtn.addEventListener('click', function () {\n    popup.classList.remove('is-closed');\n  });\n  btnPopupClosed.addEventListener('click', function () {\n    popup.classList.add('is-closed');\n  });\n  popup.addEventListener('click', function (e) {\n    if (e.target == popup) popup.classList.add('is-closed');\n  });\n})();\n\n//# sourceURL=webpack:///./app/main/entry.js?")},function(module,exports,__webpack_require__){eval('module.exports = "<!DOCTYPE html>\\n<html lang=\\"en\\" class=\\"wide wow-animation\\">\\n  <head>\\n    \x3c!-- Site Title--\x3e\\n    <title>Cosmos</title>\\n    <meta name=\\"format-detection\\" content=\\"telephone=no\\">\\n    <meta name=\\"viewport\\" content=\\"width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0\\">\\n    <meta http-equiv=\\"X-UA-Compatible\\" content=\\"IE=edge\\">\\n    <meta charset=\\"utf-8\\">\\n    <link rel=\\"icon\\" href=\\"images/favicon.ico\\" type=\\"image/x-icon\\">\\n    \x3c!-- Stylesheets--\x3e\\n    <link rel=\\"stylesheet\\" type=\\"text/css\\" href=\\"//fonts.googleapis.com/css?family=Raleway:400,300%7CMontserrat:400,700\\">\\n    <link rel=\\"stylesheet\\" href=\\"css/style.css\\">\\n\\t\\t\x3c!--[if lt IE 10]>\\n    <div style=\\"background: #212121; padding: 10px 0; box-shadow: 3px 3px 5px 0 rgba(0,0,0,.3); clear: both; text-align:center; position: relative; z-index:1;\\"><a href=\\"http://windows.microsoft.com/en-US/internet-explorer/\\"><img src=\\"" + __webpack_require__(6) + "\\" border=\\"0\\" height=\\"42\\" width=\\"820\\" alt=\\"You are using an outdated browser. For a faster, safer browsing experience, upgrade for free today.\\"></a></div>\\n    <script src=\\"js/html5shiv.min.js\\"><\/script>\\n\\t\\t<![endif]--\x3e\\n  </head>\\n  <body>\\n    \x3c!-- Page--\x3e\\n    <div class=\\"page text-center text-md-left\\">\\n      <div id=\\"bg-default\\">\\n        <canvas id=\\"bgCanvas\\"></canvas>\\n        <div id=\\"guiHolder\\"></div>\\n      </div>\\n      \x3c!-- Page Header--\x3e\\n      <header class=\\"page-head bg-image bg-image-1 bg-fixed section-55 section-sm-80 section-xl-bottom-270 section-lg-80\\">\\n        \x3c!-- RD Navbar--\x3e\\n        <div class=\\"rd-navbar-wrap\\">\\n          <nav data-layout=\\"rd-navbar-fixed\\" data-sm-layout=\\"rd-navbar-fixed\\" data-md-layout=\\"rd-navbar-fixed\\" data-lg-layout=\\"rd-navbar-fixed\\" class=\\"rd-navbar\\">\\n            <div class=\\"rd-navbar-inner\\">\\n              <div class=\\"rd-navbar-panel\\">\\n                <button data-rd-navbar-toggle=\\".rd-navbar-nav-wrap\\" class=\\"rd-navbar-toggle\\"><span></span></button>\\n              </div>\\n              <div class=\\"rd-navbar-nav-wrap\\">\\n                \x3c!-- RD Navbar Nav--\x3e\\n                <ul class=\\"rd-navbar-nav\\">\\n                  <li class=\\"active\\"><a href=\\"#about\\">Факты в цифрах</a></li>\\n                  <li><a href=\\"#team\\">Структура холдинга</a></li>\\n                  <li><a href=\\"#business\\">Бизнес направления</a></li>\\n                  <li><a href=\\"#news\\">География бизнеса</a></li>\\n                  <li><a href=\\"#contacts\\">Контакты</a></li>\\n                </ul>\\n              </div>\\n            </div>\\n          </nav>\\n        </div>\\n        <div class=\\"shell shell-wide\\">\\n          <div class=\\"range range-md-middle\\">\\n            <div class=\\"cell-md-6\\"><a href=\\"index.html\\" class=\\"brand\\"><img src=\\"" + __webpack_require__(0) + "\\" width=\\"435\\" height=\\"142\\" alt=\\"\\" class=\\"img-responsive\\"></a></div>\\n            <div class=\\"cell-md-6 text-md-right\\">\\n              <address class=\\"address\\">\\n                \x3c!--<p>New York, 28 Jackson Blvd Ste 1020 Chicago, IL 60604-2340</p>--\x3e\\n                <dl class=\\"contact-info\\">\\n                  <dt><img src=\\"" + __webpack_require__(1) + "\\" alt=\\"\\"></dt>\\n                  <dd><a href=\\"callto:#\\" class=\\"phone-text\\">+7 (495) 646-08-39</a></dd>\\n                </dl>\\n                <dl class=\\"contact-info\\">\\n                  <dd class=\\"btn-bell js-bell\\">Заказать звонок</dd>\\n                </dl>\\n              </address>\\n            </div>\\n          </div>\\n        </div>\\n        <div id=\\"home\\" data-type=\\"anchor\\" class=\\"shell shell-wide\\">\\n          <div class=\\"range\\">\\n            <div class=\\"cell-lg-preffix-1 cell-lg-8 cell-xl-6\\">\\n              <h1>РесурсТранс</h1>\\n              <h3 class=\\"heading\\">Группа компаний, специализирующаяся на\\n                оказании услуг в сфере управления и обслуживания транспорта\\n              </h3>\\n              \x3c!--<p class=\\"big postfix-xl-right&#45;&#45;30\\">Группа компаний, специализирующаяся на оказании услуг в сфере управления и обслуживания транспорта</p>\\n              --\x3e<p class=\\"big postfix-xl-right--30\\">Помогаем оптимизировать деятельность наших клиентов за счет применения собственных успешных практик и внедрения современных решений.</p>\\n            </div>\\n            <div class=\\"cell-lg-preffix-1 cell-lg-1 text-md-right cell-md-bottom cell-xl-preffix-3\\">\\n              <div class=\\"count count-white offset-xl-bottom--45 preffix-xl-left--5\\"></div>\\n            </div>\\n          </div>\\n        </div>\\n      </header>\\n      \x3c!-- Page Content--\x3e\\n      <main class=\\"page-content\\">\\n        \x3c!-- About--\x3e\\n        <section class=\\"bg-white section-50 section-lg-80 section-xl-100\\">\\n          <div id=\\"about\\" data-type=\\"anchor\\" class=\\"shell shell-wide\\">\\n            <div class=\\"range text-center\\">\\n              <div class=\\"cell-lg-5 text-md-left text-lg-right\\">\\n                <div class=\\"count count-porcelain\\"></div>\\n                <div class=\\"box-wrap text-md-left\\">\\n                  <h2 class=\\"heading about-title\\">Факты в цифрах</h2>\\n                  <p class=\\"about-text\\"><span class=\\"about-text-span\\">10+</span> лет на рынке</p>\\n                  <p class=\\"about-text\\"><span class=\\"about-text-span\\">60+</span> регионов присутствия</p>\\n                  <p class=\\"about-text\\"><span class=\\"about-text-span\\">10 000+</span> квалифицированных сотрудников</p>\\n                  <p class=\\"about-text\\"><span class=\\"about-text-span\\">13 000+</span> транспортных средств в управлении</p>\\n                </div>\\n              </div>\\n              <div class=\\"cell-lg-preffix-1 cell-lg-6\\"><img src=\\"" + __webpack_require__(7) + "\\" width=\\"695\\" height=\\"768\\" alt=\\"\\" class=\\"img-responsive offset-xl-top--220 image-wrap\\"></div>\\n            </div>\\n          </div>\\n        </section>\\n\\n        \x3c!-- Our team--\x3e\\n        <section class=\\"section-55 bg-white section-xl-120 section-xl-bottom-0 section-lg-bottom-80\\">\\n          <div id=\\"team\\" data-type=\\"anchor\\" class=\\"shell shell-wide\\">\\n            <div class=\\"range range-lg-bottom range-xl-top\\">\\n              <div class=\\"cell-lg-preffix-1 cell-lg-2\\">\\n                <div class=\\"count\\"></div>\\n              </div>\\n              <div class=\\"cell-lg-4 offset-xl-top-60\\">\\n                <h2 class=\\"heading heading-custom\\">Структура холдинга</h2>\\n              </div>\\n              <div class=\\"cell-lg-6\\"></div>\\n            </div>\\n            <div class=\\"\\">\\n              <div class=\\"structure\\">\\n                <a href=\\"\\" class=\\"structure-link\\">\\n                  <img src=\\"" + __webpack_require__(8) + "\\" alt=\\"\\" class=\\"structure-link-logo\\">\\n                </a>\\n                <a href=\\"\\" class=\\"structure-link\\">\\n                  <img src=\\"" + __webpack_require__(9) + "\\" alt=\\"\\" class=\\"structure-link-logo\\">\\n                </a>\\n                <a href=\\"\\" class=\\"structure-link\\">\\n                  <img src=\\"" + __webpack_require__(10) + "\\" alt=\\"\\" class=\\"structure-link-logo\\">\\n                </a>\\n                <a href=\\"\\" class=\\"structure-link\\">\\n                  <img src=\\"" + __webpack_require__(11) + "\\" alt=\\"\\" class=\\"structure-link-logo\\">\\n                </a>\\n                <a href=\\"\\" class=\\"structure-link\\">\\n                  <img src=\\"" + __webpack_require__(12) + "\\" alt=\\"\\" class=\\"structure-link-logo\\">\\n                </a>\\n                <a href=\\"\\" class=\\"structure-link\\">\\n                  <img src=\\"" + __webpack_require__(2) + "\\" alt=\\"\\" class=\\"structure-link-logo\\">\\n                </a>\\n                <a href=\\"\\" class=\\"structure-link\\">\\n                  <img src=\\"" + __webpack_require__(2) + "\\" alt=\\"\\" class=\\"structure-link-logo\\">\\n                </a>\\n              </div>\\n            </div>\\n          </div>\\n        </section>\\n\\n        <section class=\\"section-55 section-sm-80 section-xl-240 bg-image bg-image-2 bg-fixed section-lg-140 section-md-100\\">\\n          <div id=\\"business\\" data-type=\\"anchor\\" class=\\"shell shell-wide\\">\\n            <div class=\\"\\">\\n              <div class=\\"business-directions-top\\">\\n                <div class=\\"count count-white business-directions-top-num\\"></div>\\n                <h2 class=\\"heading business-directions-title\\">Бизнес направления</h2>\\n              </div>\\n              <div class=\\"business-directions-content\\">\\n                <p class=\\"business-directions-text\\">Аутсорсинг транспортной функции</p>\\n                <p class=\\"business-directions-text\\">Пассажирские перевозки</p>\\n                <p class=\\"business-directions-text\\">Внедрение ИТ-решений в области контроля и управления корпоративным автопарком</p>\\n                <p class=\\"business-directions-text\\">Развитие экосистемы продуктов для контроля и управления транспортными средствами</p>\\n                <p class=\\"business-directions-text\\">Управление жизненным циклом транспортных средств</p>\\n                <p class=\\"business-directions-text\\">Дополнительное образование и повышение квалификации специалистов транспортной отрасли</p>\\n                <p class=\\"business-directions-text\\">Организация ремонта и поставка запчастей для транспортных средств</p>\\n              </div>\\n            </div>\\n          </div>\\n        </section>\\n        \x3c!-- Space news--\x3e\\n        <section class=\\"section-50 bg-white section-lg-80\\">\\n          <div class=\\"shell shell-wide values\\">\\n            <div class=\\"range decoration values-order\\">\\n              <div class=\\"cell-lg-7 text-center offset-xl-top--160\\"><img src=\\"" + __webpack_require__(13) + "\\" width=\\"955\\" height=\\"588\\" alt=\\"\\" class=\\"img-responsive\\"></div>\\n            </div>\\n            <div class=\\"range values-order\\">\\n              <div class=\\"cell-lg-preffix-4 cell-lg-6\\">\\n                <h4 class=\\"values-text\\">Надежность</h4>\\n              \x3c!--  <p class=\\"postfix-xl-right&#45;&#45;30\\">For the past 60 years, astronomers have been puzzled by an unusual type of star that looks hotter and bluer than it should for its age. It has been dubbed a \\"blue straggler\\" because it seems to lag behind the evolution of neighboring stars.</p>\\n              --\x3e</div>\\n            </div>\\n            <div class=\\"range values-order\\" style=\\"padding-left: 60px\\">\\n              <div class=\\"cell-lg-preffix-4 cell-lg-6\\">\\n                <h4 class=\\"values-text\\">Открытость</h4>\\n                \x3c!--  <p class=\\"postfix-xl-right&#45;&#45;30\\">For the past 60 years, astronomers have been puzzled by an unusual type of star that looks hotter and bluer than it should for its age. It has been dubbed a \\"blue straggler\\" because it seems to lag behind the evolution of neighboring stars.</p>\\n                --\x3e</div>\\n            </div>\\n            <div id=\\"news\\" data-type=\\"anchor\\" class=\\"range offset-xl-top-100 values-order\\">\\n              <div class=\\"cell-lg-4 cell-xl-preffix-1 cell-xl-3\\">\\n                <h2 class=\\"heading offset-xl-top-5 heading-mod\\">Ценности</h2>\\n                <div class=\\"count preffix-xl-left--5\\"></div>\\n              </div>\\n              <div class=\\"cell-lg-preffix-1 cell-xl-6 cell-lg-6\\">\\n                <h4 class=\\"values-text\\">Соблюдение транспортного законодательства</h4>\\n                <h4 class=\\"values-text-mob\\">Надежность</h4>\\n                <h4 class=\\"values-text-mob\\">Открытость</h4>\\n                <h4 class=\\"values-text-mob\\">СОБЛЮДЕНИЕ ТРАНСПОРТНОГО ЗАКОНОДАТЕЛЬСТВА</h4>\\n                <h4 style=\\"\\" class=\\"values-text mod-padding\\">Проактивность</h4>\\n                <h4 class=\\"values-text-mob\\">Гибкость</h4>\\n               \x3c!-- <p>Hunting for faraway galaxies that existed long, long ago is like a fishing trip for astronomers. So far only the \\"big fish\\" have been found, bright galaxies that existed just a few hundred million years after the big bang.</p>\\n              --\x3e</div>\\n\\n            </div>\\n            <div class=\\"range range-lg-right decoration-custom offset-xl-top-60 values-order\\">\\n              <div class=\\"cell-lg-6\\">\\n                <h4 class=\\"values-text\\">Гибкость</h4>\\n                \x3c!--<p>ESA’s XMM-Newton X-ray observatory has revealed three massive filaments of hot gas flowing towards a<br class=\\"hidden visible-xl\\">cluster of galaxies, uncovering a portion of the cosmic skeleton that pervades the entire Universe.</p>\\n              --\x3e</div>\\n            </div>\\n            <div class=\\"range range-lg-center offset-xl-top-150 values-order\\">\\n              <div class=\\"cell-lg-6 text-center offset-xl-bottom--200\\"><img src=\\"" + __webpack_require__(14) + "\\" width=\\"869\\" height=\\"529\\" alt=\\"\\" class=\\"img-responsive\\"></div>\\n            </div>\\n          </div>\\n        </section>\\n\\n      </main>\\n      \x3c!-- Page Footer--\x3e\\n      <footer class=\\"page-foot bg-image bg-image-3 bg-fixed\\">\\n        <div id=\\"contacts\\" data-type=\\"anchor\\" class=\\"shell shell-wide\\">\\n          <div class=\\"range\\">\\n            <div class=\\"cell-md-5 cell-xl-3\\">\\n              <h2 class=\\"heading heading-mod\\">Контакты</h2>\\n              <div class=\\"count count-white\\"></div>\\n             \x3c!-- <p>We are always ready to help you. There are many ways to contact us. You may drop us a line, give us a call or send an email, choose what suits you the most.</p>\\n            --\x3e</div>\\n            <div class=\\"cell-md-preffix-1 cell-md-6 cell-xl-preffix-1 cell-xl-3\\">\\n              \x3c!-- Rd Mailform result field--\x3e\\n              <div class=\\"rd-mailform-validate\\"></div>\\n              \x3c!-- RD Mailform--\x3e\\n              <form data-result-class=\\"rd-mailform-validate\\" data-form-type=\\"contact\\" method=\\"post\\" action=\\"bat/rd-mailform.php\\" class=\\"rd-mailform text-md-left\\">\\n                <input type=\\"text\\" name=\\"name\\" data-constraints=\\"@NotEmpty\\" placeholder=\\"Имя\\">\\n                <input type=\\"text\\" name=\\"email\\" data-constraints=\\"@NotEmpty @Email\\" placeholder=\\"Email\\">\\n                <textarea name=\\"message\\" data-constraints=\\"@NotEmpty\\" placeholder=\\"Сообщение:\\"></textarea>\\n                <button class=\\"btn btn-white\\">Отправить</button>\\n              </form>\\n            </div>\\n            <div class=\\"cell-lg-12 cell-xl-5 offset-sm-top-60 text-md-center offset-top-50 text-lg-left offset-xl-top-0\\">\\n              <div class=\\"range range-lg-bottom range-lg-justify range-xl-left\\">\\n                <div class=\\"cell-lg-6 cell-xl-10 cell-xl-preffix-2\\">\\n                  <div class=\\"preffix-xl-left-30\\">\\n                    <address class=\\"address\\">\\n                      <p class=\\"address-text\\"><img src=\\"" + __webpack_require__(15) + "\\" alt=\\"\\" class=\\"img-point\\">127287, Россия, Москва, Москва, 2я Хуторская ул., д. 38А, стр. 14, БЦ «Мирлэнд»</p>\\n                      <dl class=\\"contact-info\\">\\n                        <dt><img src=\\"" + __webpack_require__(1) + "\\" alt=\\"\\" class=\\"img-phone\\"></dt>\\n                        <dd><a href=\\"callto:#\\" class=\\"phone-text\\">+7 (495) 646-08-39</a></dd>\\n                      </dl>\\n                      </dl>\\n                      <a class=\\"contact-mail\\" href=\\"mailto:#info@resourcegroup.ru\\"><img src=\\"" + __webpack_require__(3) + "\\" alt=\\"\\" class=\\"img-mail\\">info@resourcegroup.ru</a>\\n                      <br>\\n                      <a class=\\"contact-mail\\" href=\\"mailto:#vg@rt24.ru\\"><img src=\\"" + __webpack_require__(3) + "\\" alt=\\"\\" class=\\"img-mail\\">Для СМИ: vg@rt24.ru</a>\\n                      \x3c!--<p class=\\"offset-xl-top-15\\">7 Days a week from 9:00 am to 7:00 pm</p>--\x3e\\n                    </address>\\n                    \x3c!--<ul class=\\"list-inline list-inline-sm\\">\\n                      <li><a href=\\"#\\" class=\\"icon icon-white fa-facebook\\"></a></li>\\n                      <li><a href=\\"#\\" class=\\"icon icon-white fa-twitter\\"></a></li>\\n                      <li><a href=\\"#\\" class=\\"icon icon-white fa-google-plus\\"></a></li>\\n                      <li><a href=\\"#\\" class=\\"icon icon-white fa-youtube\\"></a></li>\\n                    </ul>--\x3e\\n                  </div>\\n                </div>\\n                \x3c!--<div class=\\"cell-lg-3 text-lg-center cell-xl-10 text-xl-left offset-xl-top-110\\"><a href=\\"index.html\\" class=\\"brand preffix-xl-left-30\\"><img src=\\"" + __webpack_require__(0) + "\\" width=\\"335\\" height=\\"142\\" alt=\\"\\" class=\\"img-responsive\\"></a>\\n                  <span class=\\"copyright\\">&#169;<span id=\\"copyright-year\\"></span><span>All Rights Reserved</span></span>\\n                </div>--\x3e\\n              </div>\\n            </div>\\n          </div>\\n        </div>\\n        \x3c!-- RD Google Map--\x3e\\n        <div class=\\"rd-google-map\\">\\n          <div id=\\"google-map\\" data-zoom=\\"14\\" data-x=\\"-73.9874068\\" data-y=\\"40.643180\\" class=\\"rd-google-map__model\\"></div>\\n        </div>\\n        <div class=\\"bottom-block\\">\\n          <div class=\\"bottom-block-center\\">\\n            <p class=\\"bottom-block-text\\">© 2020 ООО «РесурсГрупп». Все права защищены</p>\\n            <a href=\\"\\" class=\\"bottom-block-link\\">Политика конфиденциальности</a>\\n          </div>\\n        </div>\\n        \x3c!--coded by gel--\x3e\\n      </footer>\\n\\n    </div>\\n\\n\\n\\n    <div class=\\"popup js-popup-bell is-closed\\">\\n      <div class=\\"popup-content\\">\\n        <div class=\\"popup-content-closed js-popup-content-closed\\"></div>\\n        <p class=\\"popup-content-title\\">Заказать звонок</p>\\n        <p class=\\"popup-content-text\\">Оставьте свои данные и мы вам перезвоним</p>\\n        <div class=\\"popup-content-input\\">\\n          <input class=\\"popup-content-in\\" type=\\"text\\" name=\\"name\\" data-constraints=\\"@NotEmpty\\" placeholder=\\"Имя\\">\\n          <div class=\\"\\"></div>\\n        </div>\\n        <div class=\\"popup-content-input\\">\\n          <input class=\\"popup-content-in\\" type=\\"text\\" name=\\"name\\" data-constraints=\\"@NotEmpty\\" placeholder=\\"Телефон\\">\\n          <div class=\\"mfValidation\\"></div>\\n        </div>\\n        <div class=\\"popup-content-input\\">\\n          <input class=\\"popup-content-in\\" type=\\"text\\" name=\\"name\\" data-constraints=\\"@NotEmpty\\" placeholder=\\"Желаеомое время звонка\\">\\n          <div class=\\"mfValidation\\"></div>\\n        </div>\\n        <textarea class=\\"popup-content-in\\" name=\\"message\\" data-constraints=\\"@NotEmpty\\" placeholder=\\"Сообщение:\\"></textarea>\\n\\n        <label class=\\"checkbox popup-content-checkbox\\">\\n          <input class=\\"checkbox-input\\" type=\\"checkbox\\" checked=\\"checked\\" name=\\"radio\\">\\n          <span class=\\"checkbox-checkmark\\"></span>\\n          <p class=\\"checkbox-text\\">Я принимаю политики обработки персональных данных Я принимаю условия политики персональных данных</p>\\n        </label>\\n        <button class=\\"btn btn-white popup-content-btn\\">Отправить</button>\\n      </div>\\n    </div>\\n\\n    \x3c!-- Java script--\x3e\\n    <script src=\\"js/core.min.js\\"><\/script>\\n    <script src=\\"js/script.js\\"><\/script>\\n  </body>\\n</html>";\n\n//# sourceURL=webpack:///./app/main/index.html?')},function(module,exports,__webpack_require__){eval('module.exports = __webpack_require__.p + "793734b103d99035ef76535c8ac9c9f5.jpg";\n\n//# sourceURL=webpack:///./app/main/images/ie8-panel/warning_bar_0000_us.jpg?')},function(module,exports,__webpack_require__){eval('module.exports = __webpack_require__.p + "7e0025edec70370e65b8b520dbfbcfe7.jpg";\n\n//# sourceURL=webpack:///./app/main/images/home-02.jpg?')},function(module,exports,__webpack_require__){eval('module.exports = __webpack_require__.p + "cbb49097a4a34be62fb0bbb4a3f1ddf7.jpg";\n\n//# sourceURL=webpack:///./app/main/images/logos/RT.jpg?')},function(module,exports,__webpack_require__){eval('module.exports = __webpack_require__.p + "2f3411f921d4c8682723cfb056b4c8f5.jpg";\n\n//# sourceURL=webpack:///./app/main/images/logos/TETRON.jpg?')},function(module,exports,__webpack_require__){eval('module.exports = __webpack_require__.p + "2af53b47b2d802d903695083b8b0dc95.jpg";\n\n//# sourceURL=webpack:///./app/main/images/logos/RTLI.jpg?')},function(module,exports,__webpack_require__){eval('module.exports = __webpack_require__.p + "b5a2ec9a452db3116f97d9bd2525ae5b.jpg";\n\n//# sourceURL=webpack:///./app/main/images/logos/RTLIZ.jpg?')},function(module,exports,__webpack_require__){eval('module.exports = __webpack_require__.p + "af350a594e3b0a27b7a0dfff931f8bf7.jpg";\n\n//# sourceURL=webpack:///./app/main/images/logos/TI.jpg?')},function(module,exports,__webpack_require__){eval('module.exports = __webpack_require__.p + "e552ef6d1b8c6ff4d68bb4148181789d.jpg";\n\n//# sourceURL=webpack:///./app/main/images/home-07.jpg?')},function(module,exports,__webpack_require__){eval('module.exports = __webpack_require__.p + "067d9a6d3175f9e5b122b2f3e97074cb.jpg";\n\n//# sourceURL=webpack:///./app/main/images/home-08.jpg?')},function(module,exports,__webpack_require__){eval('module.exports = __webpack_require__.p + "c11cd079a97eeea845b1f26d37b0ea04.png";\n\n//# sourceURL=webpack:///./app/main/images/point.png?')},function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./app/main/style.scss?")}]);
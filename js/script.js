const CATEGORIES = {
    'parser': 'Парсер',
    'userbot': 'Юзербот',
    'game': 'Игра',
    'other': 'Разное',
};

const PORTFOLIO = [
    // Parsers
    {
        title: "Парсер Петрович",
        subtitle: "Данные о стройматериалах в вашей Excel таблице за считанные минуты",
        desc: "Программа для автоматического сбора данных с сайта Petrovich.ru</br></br>Позволяет собирать информацию о строительных материалах и товарах для ремонта из любого раздела магазина.",
        category: "parser",
        tags: ["Python", "Работа с API", "Pandas", "Прокси", "Многопоточность"],
        cover: "img/portfolio/parsers/9/cover.png",
        images: [
            "img/portfolio/parsers/9/1.png",
            "img/portfolio/parsers/9/2.png",
        ],
        link: ""
    },
    {
        title: "Парсер Купер",
        subtitle: "Сбор всех товаров с популярного сайта Купер",
        desc: "Программа для автоматического сбора данных с сайта kuper.ru</br></br>Позволяет собирать информацию о товарах из любого магазина</br></br>Собираемые данные: название, цена, цена ос скидкой, скидка, процент скидки, категория, доступность, выгодное ли предложение, рейтинг, кол-во отзывов, кол-во оценок, количество, граммовка, ссылка на товар.",
        category: "parser",
        tags: ["Python", "Работа с API", "Pandas", "Прокси", "Многопоточность"],
        cover: "img/portfolio/parsers/8/cover.png",
        images: [
            "img/portfolio/parsers/8/1.png",
            "img/portfolio/parsers/8/2.png",
        ],
        link: ""
    },
    {
        title: "Парсер ДОМ.МИНЖКХ",
        subtitle: "Массовый сбор данных выставленных домах на сайте.",
        desc: "Парсер для агрегатора ДОМ.МИНЖКХ. Позволяет массово выгружать данные о выставленных домах, предоставленных на сайте. Сортировка по областям/городам.",
        category: "parser",
        tags: ["Python", "Работа с API", "Pandas", "Прокси", "Многопоточность"],
        cover: "img/portfolio/parsers/7/cover.png",
        images: [
            "img/portfolio/parsers/7/1.png"
        ],
        link: ""
    },
    {
        title: "Парсер Unibo",
        subtitle: "Сбор открытой информации об аренде квартир",
        desc: "Парсер для агрегатора Unibo. Позволяет массово выгружать данные о выставленных квартирах, предоставленных на сайте.",
        category: "parser",
        tags: ["Python", "BS4", "Pandas"],
        cover: "img/portfolio/parsers/6/cover.png",
        images: [
            "img/portfolio/parsers/6/1.png"
        ],
        link: ""
    },
    {
        title: "Парсер Cdek Shopping",
        subtitle: "Современный парсер для современного сайта",
        desc: "Парсер для Cdek Shopping, для массового и автоматического сбора информации о товарах, предоставленных на сайте. Функционал позволяет очень гибко настраивать парсер и собирать все данные с страницы товара.",
        category: "parser",
        tags: ["Python", "Прокси", "BS4", "Pandas", "Многопоточность"],
        cover: "img/portfolio/parsers/5/cover.png",
        images: [
            "img/portfolio/parsers/5/1.png"
        ],
        link: ""
    },
    {
        title: "Парсер Steam Market",
        subtitle: "Решение для популярной темы внутриигровых предметов",
        desc: "Парсер для Steam Market, который автоматически извлекает информацию о ценах на скины и предметы из любой игры по ее ID. Этот инструмент позволяет отслеживать изменения в ценах, появление новых предметов и любые изменения в лотах. Есть возможность добавлять прокси и фильтры. Результаты приходят в Telegram.",
        category: "parser",
        tags: ["Python", "Прокси", "Steam API", "Telegram API", "Многопоточность"],
        cover: "img/portfolio/parsers/4/cover.png",
        images: [
            "img/portfolio/parsers/4/1.png"
        ],
        link: ""
    },
    {
        title: "Парсер Vseti App",
        subtitle: "Автоматический сбор резюме на старом агрегаторе",
        desc: "Парсер резюме для сайта VSETI APP, который автоматически извлекает информацию о соискателях и их профессиональных навыках. Этот инструмент позволяет собирать актуальные резюме, что значительно упрощает процесс подбора кандидатов для работодателей",
        category: "parser",
        tags: ["Python", "Работа с API", "TinyDB", "Pandas"],
        cover: "img/portfolio/parsers/3/cover.png",
        images: [
            "img/portfolio/parsers/3/1.png"
        ],
        link: ""
    },
    {
        title: "Парсер прокси",
        subtitle: "Собирает бесплатные прокси с сайтов-раздатчиков",
        desc: "Сборщик бесплатных прокси, разработанный на Python, который автоматически извлекает актуальные прокси-серверы с различных сайтов. Этот инструмент позволяет быстро находить и проверять рабочие прокси, что делает его идеальным для веб-парсинга и обхода блокировок.",
        category: "parser",
        tags: ["Python", "BS4", "Многопоточность"],
        cover: "img/portfolio/parsers/2/cover.png",
        images: [
            "img/portfolio/parsers/2/1.png"
        ],
        link: ""
    },
    {
        title: "Парсер Checko",
        subtitle: "Быстрый и удобный парсер сайта checko.ru",
        desc: "Парсер для сайта checko.ru, который автоматически извлекает данные о юридических лицах и компаниях.</br></br>С помощью этого инструмента вы можете получать актуальную информацию (можно указать, какую именно информацию нужно собирать)",
        category: "parser",
        tags: ["Python", "Работа с API", "Pandas", "Многопоточность"],
        cover: "img/portfolio/parsers/1/cover.png",
        images: [
            "img/portfolio/parsers/1/1.png"
        ],
        link: ""
    },
    // Userbot
    {
        title: "Парсер телеграм каналов",
        subtitle: "Программа имитирует действия пользователя и отлавливает нужные входящие сообщения.",
        desc: "Парсер Telegram-каналов, который получается все новые сообщения и отправляет их в ваш личный канал/чат.</br></br>Имеется возможность настроить фильтры для сообщений, чтобы собирать только номера телефонов, почты, ссылки или что угодно другое</br></br>Полная настройка парсера + упакованное .exe приложение.",
        category: "userbot",
        tags: ["Python", "Pyrogram", "Telegram API", "Pandas"],
        cover: "img/portfolio/userbots/1/cover.png",
        images: [
            "img/portfolio/userbots/1/1.png"
        ],
        link: ""
    },
    // Other
    {
        title: "Рассылка постов ВК",
        subtitle: "Удобная рассылка вашего сообщения на стену сообществ в Вконтакте. Поддерживает изображения.",
        desc: "Автоматизированная система рассылки сообщений в ВКонтакте, позволяющая отправлять персонализированные сообщения в сообщества на основе заданных критериев.</br></br>С помощью данного инструмента вы можете легко настраивать шаблоны сообщений и планировать их отправку в удобное время.",
        category: "other",
        tags: ["Python", "Requests", "VK API"],
        cover: "img/portfolio/other/1/cover.png",
        images: [
            "img/portfolio/other/1/1.png"
        ],
        link: ""
    },
    {
        title: "Проверка почты",
        subtitle: "Быстрая и простая проверка на существование почты",
        desc: "Эта программа проверяет доставляемость email-адресов из входной таблицы (XLSX), используя API для валидации, сохраняет результаты (включая статус проверки и возможные ошибки) в исходную таблицу и выводит процесс обработки в консоль. Настройки программы (пути к файлам и параметры DNS) задаются в файле config.json. В случае ошибок программа выводит сообщения и завершает работу.",
        category: "other",
        tags: ["Python", "Валидатор", "Работа с почтой", "Работа с API"],
        cover: "img/portfolio/other/2/cover.png",
        images: [
            "img/portfolio/other/2/1.png",
            "img/portfolio/other/2/2.png",
        ],
        link: ""
    },
    // Games
    {
        title: "Standoff 2 Кейсы",
        subtitle: "Симулятор кейсов, который смог набрать больше 2.5 млн. установок.",
        desc: "Добро пожаловать в Standoff 2 Кейсы - уникальное приложение, которое открывает перед вами виртуальный мир невероятных возможностей!</br></br>🎁 Открытие кейсов: Готовы ли вы к волнению, связанному с каждым щелчком мыши? Просто нажмите на контейнер, который вам понравился, и он откроется!</br></br>🔫 3D Осмотр: Погрузитесь в удивительный мир детализированных 3D скинов. Исследуйте каждую деталь и наслаждайтесь превосходной графикой.</br></br>⚙️ Мини-Игры: Поднимите адреналин, улучшая свои предметы в захватывающих мини-играх. Улучшите свои скины, чтобы добиться великолепных результатов и выделиться среди игроков.</br></br>📜 Контракты: Испытайте свою удачу, обменивая 10 скинов одного качества на 1 скин качеством выше.</br></br>🌟 Эксклюзивные возможности: Вас ждут специальные кейсы, полные редких и уникальных предметов. Подчеркните свой стиль и разнообразьте игровой опыт благодаря этим особенным находкам.</br></br>📊 Статистика: Отслеживайте свой прогресс с помощью детальной статистики игрока.",
        category: "game",
        tags: ["Unity", "C#", "WebGL", "Яндекс.Игры"],
        cover: "img/portfolio/games/1/cover.png",
        images: [
            "img/portfolio/games/1/1.png",
            "img/portfolio/games/1/2.png",
            "img/portfolio/games/1/3.png",
            "img/portfolio/games/1/4.png",
            "img/portfolio/games/1/5.png",
            "img/portfolio/games/1/6.png",
            "img/portfolio/games/1/7.png",
            "img/portfolio/games/1/8.png",
            "img/portfolio/games/1/9.png",
            "img/portfolio/games/1/10.png"
        ],
        link: "https://yandex.ru/games/app/191273"
    },
    {
        title: "Бекон: Кулинарные советы",
        subtitle: "Веселая игра, в которой вашей целью является хорошенько обжарить кусочки бекона.",
        desc: "Только 0.4% игроков смогли пройти все уровни.</br></br>Бекон: Кулинарные советы - это удивительная и веселая игра, в которой вам предстоит отправиться в волшебный мир бекона! Вашей задачей будет обжарить кусочки бекона и использовать сковородку как волшебную ракетку, чтобы бросить их на самые забавные предметы.</br></br>В игре вас ждет множество захватывающих уровней, каждый из которых принесет вам новые необычные приключения. Вы будете удивлены и восхищены их оригинальностью! Игровой процесс подарит вам массу радости и улыбок. Ваш бекон может превратиться в самые невероятные украшения для предметов. А музыкальное сопровождение в игре такое веселое, что оно сразу поднимет вам настроение! Графика в игре простая, но яркая и современная, и увлечет вас в свою волшебную атмосферу.</br></br>Особенности игры:</br>★ Простой и удобный интерфейс.</br>★ Игра абсолютно бесплатная.</br>★ Много скинов.</br>★ Разнообразные уровни и этапы.</br>★ Много веселья и радости.",
        category: "game",
        tags: ["Unity", "C#", "WebGL", "Яндекс.Игры"],
        cover: "img/portfolio/games/2/cover.png",
        images: [
            "img/portfolio/games/2/1.png",
            "img/portfolio/games/2/2.png",
            "img/portfolio/games/2/3.png",
            "img/portfolio/games/2/4.png"
        ],
        link: "https://yandex.ru/games/app/233954"
    },
    {
        title: "Симулятор кейсов",
        subtitle: "Попробуйте открыть кейсы из знамениой игры CS2 и выбить дорогой дроп!",
        desc: "Открывайте кейсы и выбивайте дорогие скины и ножи! Присутствует множество режимов игры, такие как: Апгрейдер, Джекпот, Краш, Викторина, Башня, Обезвреживание бомбы и многие другие!</br></br>Особенности игры Симулятор кейсов:</br>★ Открытие кейсов</br>★ Открытие сувенирных наборов</br>★ Мини-Игры</br>★ Специальные кейсы</br>★ Статистика игрока</br>★ Рулетка</br>★ Торговая площадка</br></br>И многое другое! - Оставляйте идеи в приложении и ждите больше контента!",
        category: "game",
        tags: ["Unity", "C#", "WebGL", "Яндекс.Игры"],
        cover: "img/portfolio/games/3/cover.png",
        images: [
            "img/portfolio/games/3/1.png",
            "img/portfolio/games/3/2.png",
            "img/portfolio/games/3/3.png",
            "img/portfolio/games/3/4.png",
            "img/portfolio/games/3/5.png",
            "img/portfolio/games/3/6.png",
            "img/portfolio/games/3/7.png",
            "img/portfolio/games/3/8.png",
            "img/portfolio/games/3/9.png",
            "img/portfolio/games/3/10.png"
        ],
        link: "https://yandex.ru/games/app/168374"
    },
    {
        title: "AMONG US - Тест и мини-игры",
        subtitle: "Простая игра-викторина для самых маленьких про очень популярную в 2023 году игру.",
        desc: "В данной игре есть тест, в котором собраны различные вопросы на понимание игры, на запоминание механик и таймингов.</br></br>Так же хорошим провождением времени будут мини-игры из оригинальный игры.Это сделано, чтобы можно было определить насколько вы хорошо знакомы с Among Us для того, чтобы поставить вам оценку и дать одно из 8 званий.</br></br>Самое лучшее звание - это проигрок. Его получат только те, кто смог ответить на все 15 вопросов с первого раза и без различного рода подсказок.</br></br>После прохождения теста рекомендуется оценить приложение, это даст +100 к скиллу каждому!",
        category: "game",
        tags: ["Unity", "C#", "WebGL", "Яндекс.Игры"],
        cover: "img/portfolio/games/4/cover.png",
        images: [
            "img/portfolio/games/4/1.png",
            "img/portfolio/games/4/2.png",
            "img/portfolio/games/4/3.png",
            "img/portfolio/games/4/4.png",
            "img/portfolio/games/4/5.png"
        ],
        link: "https://yandex.ru/games/app/155398"
    },
    {
        title: "ПАРКУР-НЕОН",
        subtitle: "Игра про паркур, где нужно проходить сложные уровни, чтобы в конце победить босса.",
        desc: "В этой игре вам предстоит проходить уровни, используя свою ловкость и крюк-кошку. Если вы справитесь, то в конце вас ждет Мега-БОСС, который проверит чему вы научились за время игры!</br></br>Характеристики :</br>• 20 уникальных уровней</br>• Возможность изменить графику под свой ПК</br>• Необычный неоновый стиль</br></br>Удачи! Помните, что у вас неограниченное количество попыток!</br></br>И да, после прохождения игры вас ждет сюрприз.",
        category: "game",
        tags: ["Unity", "C#", "WebGL", "Яндекс.Игры"],
        cover: "img/portfolio/games/5/cover.png",
        images: [
            "img/portfolio/games/5/1.png",
            "img/portfolio/games/5/2.png",
            "img/portfolio/games/5/3.png",
            "img/portfolio/games/5/4.png",
            "img/portfolio/games/5/5.png",
            "img/portfolio/games/5/6.png",
            "img/portfolio/games/5/7.png",
            "img/portfolio/games/5/8.png",
            "img/portfolio/games/5/9.png"
        ],
        link: "https://yandex.ru/games/app/159773"
    },
];

const TESTIMONIALS = [
    {
        "rating": 5,
        "project": "Помочь разобраться с запуском парсера на Python (Colab) (Разработка / Бэкенд)",
        "text": "Михаил очень крутой специалист в сфере сбора данных! Внимательный и дружелюбный",
        "author": {
            "name": "Aнастасия Н",
            "avatar": "img/icons/female.png",
            "platform": "Habr"
        }
    },
    {
        "rating": 5,
        "project": "Внести изменения в код Python  (Разработка / Боты и парсинг данных)",
        "text": "Благодарю Михаила за работу! Внес изменения в код за 10 минут!!",
        "author": {
            "name": "Andrey Gostenov",
            "avatar": "img/icons/male.png",
            "platform": "Habr"
        }
    },
    {
        "rating": 4.8,
        "project": "Сделать парсинг нескольких сайтов по ключевым словам (Разное / Разное)",
        "text": "Михаил сделал все быстрее, чем было указано! Все верно, с пояснениями и лояльностью! Благодарю за качество исполнения!",
        "author": {
            "name": "Татьяна Иванова",
            "avatar": "img/icons/female.png",
            "platform": "Habr"
        }
    },
    {
        "rating": 5,
        "project": "Парсинг сайта https://dexscreener.com/ (Разработка / Боты и парсинг данных)",
        "text": "Все прошло быстро и качественно.",
        "author": {
            "name": "Ivan Kolchanov",
            "avatar": "img/icons/male.png",
            "platform": "Habr"
        }
    },
    {
        "rating": 5,
        "project": "Разработать парсер сайта (Разработка / Боты и парсинг данных)",
        "text": "Работал с Михаилом над парсером для сайта. Сделал все качественно и в срок. Всегда был на связи и учитывал пожелания, предлагал дополнительные функции для облегчения взаимодействия с программой. Рекомендую!",
        "author": {
            "name": "Дмитрий Иванов",
            "avatar": "img/icons/male.png",
            "platform": "Habr"
        }
    },
    {
        "rating": 5,
        "project": "Парсинг отзывов WB для отдельных SKU (Разработка / Разное)",
        "text": "Моментальное исполнение заказа. Только положительное впечатление от взаимодействия. Будем сотрудничать дальше. Спасибо!",
        "author": {
            "name": "Анастасия SL",
            "avatar": "img/icons/female.png",
            "platform": "Habr"
        }
    },
    {
        "rating": 5,
        "project": "Нужен парсер отзывов  (Разработка / Боты и парсинг данных)",
        "text": "Приятно было работать с Михаилом. Отличный человек, отличный специалист. Рекомендую +",
        "author": {
            "name": "Антон А",
            "avatar": "img/icons/male.png",
            "platform": "Habr"
        }
    },
    {
        "rating": 5,
        "project": "Парсеры Steam-инвентарей и Steam community market  (Разработка / Боты и парсинг данных)",
        "text": "Лучший опыт работы с человеком, который у меня был. Всё было сделано невероятно качественно, за адекватную цену и в кратчайшие сроки. Собираемся и дальше сотрудничать. Трижды рекомендую!",
        "author": {
            "name": "Александр Подсотский",
            "avatar": "img/icons/male.png",
            "platform": "Habr"
        }
    },
    {
        "rating": 5,
        "project": "Вытащить все ссылки с двух сайтов (Разработка / Сайты «под ключ»)",
        "text": "Спарвился за полтора часа. Рекомендую",
        "author": {
            "name": "Тимур Разработчик",
            "avatar": "img/icons/male.png",
            "platform": "Habr"
        }
    },
    {
        "rating": 5,
        "project": "Скрипт для сбора номеров телефонов из постов телеграм канала в .xlsx (Разработка / Скрипты и плагины)",
        "text": "Быстро списались вечером, срок был на утро следующего дня, написал уже через час о готовности. Утром все проверили - супер!!! Написал скрипт с инструкциями, чтобы было проще разобраться. Рекомендую!!!",
        "author": {
            "name": "Андрей Иванов",
            "avatar": "img/icons/male.png",
            "platform": "Habr"
        }
    },
    {
        "rating": 5,
        "project": "Парсинг новостей (Разработка / Скрипты и плагины)",
        "text": "Все отлично, ожидаемые сроки уменьшились в 2 раза, все четко и по тз.Работой доволен",
        "author": {
            "name": "Илья Кочкин",
            "avatar": "img/icons/male.png",
            "platform": "Habr"
        }
    },
    {
        "rating": 5,
        "project": "Парсинг сайта (Разработка / Боты и парсинг данных)",
        "text": "Сделал все быстро и качественно, еще буду обращаться",
        "author": {
            "name": "Denis Samoylenko",
            "avatar": "img/icons/male.png",
            "platform": "Habr"
        }
    },
    {
        "rating": 5,
        "project": "Парсинг Телеграм Каналов (Разработка / Бэкенд)",
        "text": "Сразу приступил, все сделал во время.",
        "author": {
            "name": "Артем Доброхвалов",
            "avatar": "img/icons/male.png",
            "platform": "Habr"
        }
    },
    {
        "rating": 5,
        "project": "Разработать скрипт для парсинга сайта (Разработка / Боты и парсинг данных)",
        "text": "Михаил выполнил задачу на создание парсера максимально качественно, и предоставил даже больше чем мы изначально планировали создав Телеграм бот в качестве интерфейса парсера. Всем рекомендую к сотрудничеству",
        "author": {
            "name": "Севастьян Лютиков",
            "avatar": "img/icons/male.png",
            "platform": "Habr"
        }
    },
    {
        "rating": 5,
        "project": "Юзербот для репоста постов из канала в канал (Разработка / Разное)",
        "text": "Толковый исполнитель.Работает качественно.На вопросы отвечает быстро.Расценки адекватные.Рекомендую к сотрудничеству!",
        "author": {
            "name": "Dimitry Ra",
            "avatar": "img/icons/male.png",
            "platform": "Habr"
        }
    },
    {
        "rating": 5,
        "project": "Написать 2 функции для user-бота Telegram (Разработка / Боты и парсинг данных)",
        "text": "Очень быстро выполнил работу. Все четко.",
        "author": {
            "name": "Данил Сидякин",
            "avatar": "img/icons/male.png",
            "platform": "Habr"
        }
    },
    {
        "rating": 5,
        "project": "Разработка бота для информационной поддержки студентов (Разработка / Боты и парсинг данных)",
        "text": "Все замечательно, работа сделана очень быстро)",
        "author": {
            "name": "Эмиль Ширинов",
            "avatar": "img/icons/male.png",
            "platform": "Habr"
        }
    },
    {
        "rating": 5,
        "project": "Написание скрипта для выгрузки данных с geckoterminal.com в xls/acess (Разработка / Боты и парсинг данных)",
        "text": "Исполнение работы на высшем уровне, всё в четком соответствии с ТЗ, а также, что немаловажно быстро и вежливо. Обязательно обращусь ещё",
        "author": {
            "name": "Артем Вольф",
            "avatar": "img/icons/male.png",
            "platform": "Habr"
        }
    },
    {
        "rating": 5,
        "project": "Объединить вкладки в Google Таблицах (Разработка / Разное)",
        "text": "Задача выполнена оперативно, согласно ТЗ. Такие и должны быть исполнители. Рекомендую Михаила.",
        "author": {
            "name": "Ilya V",
            "avatar": "img/icons/male.png",
            "platform": "Habr"
        }
    },
    {
        "rating": 5,
        "project": "Парсинг сайта (Разработка / Боты и парсинг данных)",
        "text": "Все супер, сделал за день все, что было нужно, также помог с настройкой и использованием кода",
        "author": {
            "name": "Mixar_1",
            "avatar": "img/icons/male.png",
            "platform": "Habr"
        }
    },
    {
        "rating": 5,
        "project": "Решить задачу (с интерфейсом) на С# (Разное / Разное)",
        "text": "Благодарность и хорошая оценка работы исполнителя!",
        "author": {
            "name": "Александр Гуренко",
            "avatar": "img/icons/male.png",
            "platform": "Habr"
        }
    }
];



document.addEventListener('DOMContentLoaded', function() {
    // Basic

    function shuffle(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }

        return newArray;
    }



    // Preloader
    
    const preloader = document.querySelector('.preloader');
    
    window.addEventListener('load', function() {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 800);
    });


    
    // Mobile Menu

    const burgerMenu = document.querySelector('.burger-menu');
    const fullscreenMenu = document.querySelector('.fullscreen-menu');
    const closeBtn = document.querySelector('.fullscreen-menu .close-btn');

    burgerMenu.addEventListener('click', function() {
        this.classList.toggle('active');
        fullscreenMenu.classList.toggle('active');
        document.body.style.overflow = 'hidden';

    });

    closeBtn.addEventListener('click', function() {
        burgerMenu.classList.remove('active');
        fullscreenMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });




    // Switch Theme

    const themeInputs = document.querySelectorAll('.theme-switch input[type="checkbox"]');

    function applyTheme(isDark) {
        document.body.className = isDark ? 'dark-theme' : 'light-theme';
        localStorage.setItem('theme', document.body.className);
        
        themeInputs.forEach(input => {
            input.checked = isDark;
        });
    }

    const savedTheme = localStorage.getItem('theme');
    const initialTheme = savedTheme ? savedTheme === 'dark-theme' : true;
    applyTheme(initialTheme);

    themeInputs.forEach(input => {
        input.addEventListener('change', function() {
            applyTheme(this.checked);
        });
    });



    // Smooth scrolling for anchor links

    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (this.getAttribute('href') === '#') return;
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                burgerMenu.classList.remove('active');
                fullscreenMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });




    // Header scroll effect

    const header = document.getElementById('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });




    // Back to top button

    const backToTop = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });

    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });




    // Particles.js

    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#2563eb"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#2563eb",
                    "opacity": 0.2,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }
    



    // Portfolio Filter

    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            filterPortfolioItems(filter);
        });
    });
    
    function filterPortfolioItems(filter) {
        const items = document.querySelectorAll('.portfolio-item');
        
        items.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
    



    // Load Portfolio Items from JSON

    const portfolioGrid = document.getElementById('portfolio-grid');
    
    function loadPortfolioItems() {
        portfolioGrid.innerHTML = '';
        
        PORTFOLIO.forEach(item => {
            const portfolioItem = document.createElement('div');
            portfolioItem.className = 'portfolio-item';
            portfolioItem.setAttribute('data-category', item.category);
            portfolioItem.setAttribute('data-project', JSON.stringify(item));
            
            portfolioItem.innerHTML = `
                <div class="portfolio-img">
                    <img src="${item.cover}" alt="${item.title}" loading="lazy">
                </div>
                <div class="portfolio-info">
                    <h3 class="portfolio-title">${item.title}</h3>
                    <div class="portfolio-tags">
                        ${item.tags.slice(0, 3).map(tag => `<span class="portfolio-tag">${tag}</span>`).join('')}
                    </div>
                    <p class="portfolio-subtitle">${item.subtitle}</p>
                </div>
            `;
            
            portfolioGrid.appendChild(portfolioItem);
        });
        
        // Add click event to portfolio items
        document.querySelectorAll('.portfolio-item').forEach(item => {
            item.addEventListener('click', function() {
                const projectData = JSON.parse(this.getAttribute('data-project'));
                openProjectModal(projectData);
            });
        });
    }
    



    // Project Modal

    const projectModal = document.querySelector('.portfolio-modal');
    
    function openProjectModal(project) {
        function initSlider() {
            const slider = document.getElementById('modal-gallery-slider');
            const prevBtn = document.getElementById('prev-slide');
            const nextBtn = document.getElementById('next-slide');
            let currentIndex = 0;
            console.log(currentIndex);
            
            if (!slider) return;
            
            const slides = slider.querySelectorAll('.modal-gallery-slide');
            const slideCount = slides.length;
            
            if (slideCount <= 1) {
                prevBtn.style.display = 'none';
                nextBtn.style.display = 'none';
                return;
            }
            else
            {
                prevBtn.style.display = 'flex';
                nextBtn.style.display = 'flex';
            }
            
            function goToSlide(index) {
                if (index < 0) index = slideCount - 1;
                if (index >= slideCount) index = 0;
                
                currentIndex = index;
                slider.scrollTo({
                    left: slider.offsetWidth * index,
                    behavior: 'smooth'
                });
            }
            
            prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
            nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));

            slider.scrollTo({ left: 0, });
        }

        const modalContainer = projectModal.querySelector('.modal-container');
        const modalTitle = projectModal.querySelector('.modal-title');
        const modalSubtitle = projectModal.querySelector('.modal-subtitle');
        const modalCategory = projectModal.querySelector('.modal-category span');
        const modalGallerySlider = projectModal.querySelector('.modal-gallery-slider');
        const modalTags = projectModal.querySelector('.modal-tags');
        const modalDesc = projectModal.querySelector('.modal-desc');
        const modalLink = projectModal.querySelector('.modal-link');
        
        // Set project data
        modalTitle.textContent = project.title;
        modalSubtitle.textContent = project.subtitle;
        modalCategory.textContent = getCategoryName(project.category);
        modalDesc.innerHTML = project.desc;

        modalLink.style.display = project.link ? "inline-block" : "None";
        modalLink.href = project.link;
        
        modalContainer.scrollTop = 0;

        // Add images
        modalGallerySlider.innerHTML = '';

        project.images.forEach((img, index) => {
            const modalSlide = document.createElement('div');
            modalSlide.className = 'modal-gallery-slide';
            modalSlide.innerHTML = `<img src="${img}" alt="${project.title} - ${index + 1}" loading="lazy">`;                    
            modalGallerySlider.appendChild(modalSlide);
        });

        // Add tags
        modalTags.innerHTML = '';

        project.tags.forEach((tag, index) => {
            const modalTag = document.createElement('span');
            modalTag.className = 'modal-tag';
            modalTag.innerHTML = tag;                 
            modalTags.appendChild(modalTag);
        });
        
        initSlider();

        document.querySelectorAll('.modal-gallery-slide img').forEach(img => {
            img.addEventListener('click', function() {
                openFullscreenImage(this.src);
            });
        });

        // Open modal
        projectModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function openFullscreenImage(src) {
        const fullscreenImage = document.querySelector('.fullscreen-image');
        const img = fullscreenImage.querySelector('img');
        
        img.src = src;
        fullscreenImage.classList.add('active');
        fullscreenImage.querySelector('.fullscreen-image-close').addEventListener('click', closeFullscreenImage);
        fullscreenImage.addEventListener('click', closeFullscreenImage);
    }

    function closeFullscreenImage() {
        document.querySelector('.fullscreen-image').classList.remove('active');
    }
    
    function getCategoryName(category) {
        return CATEGORIES[category] || category;
    }
    
    // Close modal

    projectModal.querySelector('.modal-close').addEventListener('click', function() {
        projectModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside

    projectModal.addEventListener('click', function(e) {
        if (e.target === this) {
            projectModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Load portfolio items

    loadPortfolioItems();
    


    // Testimonials Slider
    
    const testimonials = shuffle(TESTIMONIALS)
    const testimonialsTrack = document.getElementById('testimonials-track');
    const testimonialDots = document.getElementById('testimonial-dots');
    const prevBtn = document.getElementById('prev-testimonial');
    const nextBtn = document.getElementById('next-testimonial');
    let currentSlide = 0;
    
    function loadTestimonials() {
        testimonialsTrack.innerHTML = '';
        testimonialDots.innerHTML = '';
        
        // Create slides (3 testimonials per slide)
        const slidesCount = Math.ceil(testimonials.length / 3);
        
        for (let i = 0; i < slidesCount; i++) {
            const slide = document.createElement('div');
            slide.className = 'testimonials-slide';
            slide.style.minWidth = '100%';
            
            const testimonialsInSlide = testimonials.slice(i * 3, i * 3 + 3);
            
            // Create testimonials for this slide
            const testimonialsContainer = document.createElement('div');
            testimonialsContainer.className = 'testimonials-container';
            testimonialsContainer.style.display = 'grid';
            testimonialsContainer.style.gridTemplateColumns = `repeat(${testimonialsInSlide.length}, 1fr)`;
            testimonialsContainer.style.gap = '30px';
            
            testimonialsInSlide.forEach(testimonial => {
                const testimonialCard = document.createElement('div');
                testimonialCard.className = 'testimonial-card';
                
                // Create rating stars
                let stars = '';
                for (let j = 1; j <= 5; j++) {
                    if (j <= Math.floor(testimonial.rating)) {
                        stars += `<i class="fas fa-star star"></i>`;
                    } else if (j - 0.5 <= testimonial.rating) {
                        stars += `<i class="fas fa-star-half-alt star"></i>`;
                    } else {
                        stars += `<i class="far fa-star star"></i>`;
                    }
                }
                
                testimonialCard.innerHTML = `
                    <div class="testimonial-rating">
                        ${stars}
                        <span class="rating-value">${testimonial.rating}/5</span>
                    </div>
                    <h4 class="testimonial-project">${testimonial.project}</h4>
                    <p class="testimonial-text">${testimonial.text}</p>
                    <div class="testimonial-author">
                        <div class="author-avatar">
                            <img src="${testimonial.author.avatar}" alt="${testimonial.author.name}">
                        </div>
                        <div class="author-info">
                            <h4>${testimonial.author.name}</h4>
                            <p class="author-platform">Заказчик с ${testimonial.author.platform}</p>
                        </div>
                    </div>
                `;
                
                testimonialsContainer.appendChild(testimonialCard);
            });
            
            slide.appendChild(testimonialsContainer);
            testimonialsTrack.appendChild(slide);
            
            // Create dot for this slide
            const dot = document.createElement('div');
            dot.className = 'slider-dot';
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(i));
            testimonialDots.appendChild(dot);
        };
        
        updateSlider();
    }
    
    function goToSlide(slideIndex) {
        currentSlide = slideIndex;
        updateSlider();
    }
    
    function updateSlider() {
        const slideWidth = 100;
        testimonialsTrack.style.transform = `translateX(-${currentSlide * slideWidth}%)`;
        
        // Update dots
        document.querySelectorAll('.slider-dot').forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
    
    prevBtn.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
        } else {
            currentSlide = Math.ceil(testimonials.length / 3) - 1;
        }
        updateSlider();
    });
    
    nextBtn.addEventListener('click', () => {
        if (currentSlide < Math.ceil(testimonials.length / 3) - 1) {
            currentSlide++;
        } else {
            currentSlide = 0;
        }
        updateSlider();
    });

    loadTestimonials();

    function handleResponsive() {
        // Adjust testimonials grid for mobile
        if (window.innerWidth < 768) {
            document.querySelectorAll('.testimonials-container').forEach(container => {
                container.style.gridTemplateColumns = '1fr';
            });
        } else {
            document.querySelectorAll('.testimonials-container').forEach(container => {
                const testimonialsCount = container.children.length;
                container.style.gridTemplateColumns = `repeat(${testimonialsCount}, 1fr)`;
            });
        }
    }
    
    window.addEventListener('resize', handleResponsive);
    handleResponsive();
});
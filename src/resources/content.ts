import {media} from "@/resources/media";

export const headerContent = {
    logo: {
        src: media.logo,
        alt: "Sakura School Logo",
        href: "/",
    },
    links: [
        {label: "Мови", href: "#courses"},
        {label: "Переваги", href: "#advantages"},
        {label: "Місія", href: "#mission"},
        {label: "Формати Навчання", href: "#formats"},
        {label: "FAQ", href: "#faq"},
    ],
};

export const heroContent = {
    title: `Вивчай <span class="hero__title--mod">Китайську</span>, <span class="hero__title--mod">Японську</span> та <span class="hero__title--mod">Корейську</span> мови з <strong class="hero__title--name">Sakura!</strong>`,
    subtitle:
        "Розкрий красу Сходу — мови, традиції, культура і натхнення в одному місці.",
    button: {
        text: "Переглянути Курси",
    },
    image: {
        src: media.menoki || "/hero-sakura.webp",
        alt: "Sakura language school",
    },

    /* 🈶 Ієрогліфи */
    kanjiLayer: [
        {char: "愛", top: "0", left: "10%", size: 120, opacity: 0.4, rotate: -10},
        {char: "愛", top: "40%", left: "-10px", size: 220, opacity: 0.2, rotate: -10},
        {char: "夢", top: "0", left: "90%", size: 280, opacity: 0.4, rotate: 8},
        {char: "心", top: "70%", left: "75%", size: 130, opacity: 0.4, rotate: 12},
        {char: "和", top: "0", left: "35%", size: 100, opacity: 0.4, rotate: -7},
        {char: "和", top: "45%", left: "45%", size: 200, opacity: 0.4, rotate: -7},
    ],

    /* 🐼 Персонажі */
    characters: [
        {
            top: "10%",
            left: "5%",
            size: 200,
            rotate: -10,
            src: media.weir || media.menoki,
            alt: "Panda",
        },
        {
            top: "10%",
            left: "95%",
            size: 150,
            rotate: 10,
            src: media.menoki,
            alt: "Maneki Neko",
        },
        {
            top: "90%",
            left: "0",
            size: 180,
            rotate: -8,
            src: media.panda || media.menoki,
            alt: "Tiger",
        },
        {
            top: "50%",
            left: "110%",
            size: 150,
            rotate: 8,
            src: media.yinYang || media.menoki,
            alt: "Fortune Cat",
        },
    ],
};

export const languageCoursesContent = [
    {
        title: "Китайська - 中国",
        subtitle: "Мова імператорів і мудрості",
        image: media.chinaStudent,
        color: "#E53935",
        type: "classic",
        modalText: `Китайська мова — це ключ до однієї з найдавніших цивілізацій світу.
Ви навчитесь читати і писати ієрогліфи, освоїте правильну вимову та інтонацію,
а також дізнаєтесь про унікальну китайську культуру.`,
    },
    {
        title: "Японська - 日本語",
        subtitle: "Мова країни сонця, що сходить",
        image: media.japanStudent,
        color: "#D81B60",
        type: "classic",
        modalText: `Японська мова відкриває двері у світ аніме, культури самураїв і технологій.
Ми навчимо вас граматиці, канджі та живому спілкуванню, щоб ви почували себе впевнено.`,
    },
    {
        title: "Корейська - 한국어",
        subtitle: "Мова гармонії та сучасності",
        image: media.koreaStudent,
        color: "#1E88E5",
        type: "classic",
        modalText: `Корейська мова поєднує просту логіку письма та мелодійне звучання.
Наш курс допоможе вам розуміти K-pop, K-dramas та спілкуватись як справжній кореєць.`,
    },
];

/* 🎓 Формати навчання */
export const studyFormatsContent = [
    {
        type: "extended",
        title: "Групові заняття (4–6 студентів)",
        price: "1750 грн/блок",
        description:
            "Блок занять складається з 8 занять по 60 хвилин. Група 4–6 студентів формується з урахуванням вподобань студента. Дитячі групи коштують 1800 грн/блок.",
        image: media.groupLesson2,
        color: "#E53935",
        buttonText: "Обрати групу",
    },
    {
        type: "extended",
        title: "Групові заняття (3 студенти)",
        price: "1850 грн/блок",
        description:
            "Блок занять складається з 8 занять по 60 хвилин. Група з трьох студентів формується з урахуванням побажань. Остаточне рішення залишається за школою.",
        image: media.groupLesson1,
        color: "#D81B60",
        buttonText: "Обрати групу",
    },
    {
        type: "extended",
        title: "Парні заняття (2 студенти)",
        price: "2500 грн/блок",
        description:
            "Пара формується з урахуванням побажань студентів при записі. Також можна записатись удвох із другом і отримати знижку.",
        image: media.pairLesson,
        color: "#1E88E5",
        buttonText: "Записатись",
    },
    {
        type: "extended",
        title: "Індивідуальні заняття (1 студент)",
        price: "від 1800 грн/блок",
        description:
            "Блок складається з 4 або 8 занять на місяць. Деталі залежать від цілей студента та рівня знань.",
        image: media.individualLesson,
        color: "#43A047",
        buttonText: "Записатись",
    },
];

export const contactContent = {
    info: {
        title: "📬 Зв’яжіться з нами",
        description:
            "Маєте запитання або бажаєте приєднатись до нашої школи? Ми відповімо протягом <strong>24 годин</strong>.",
        address: "вул. Сакурова, 15, Київ",
        email: "info@sakura-school.com",
        phone: "+380 (97) 123-45-67",
    },
    form: {
        title: "Надішліть нам повідомлення",
        fields: {
            firstName: "Ім’я",
            lastName: "Прізвище",
            email: "Email",
            phone: "Номер телефону",
            message: "Ваше повідомлення",
        },
        button: "Надіслати",
    },
};

export const advantagesContent = {
    title: "Наші переваги",
    subtitle:
        "Чому студенти обирають <strong>Sakura School</strong> для вивчення мов Сходу",
    items: [
        {
            icon: "🎓",
            title: "Професійні викладачі",
            text: "Наші викладачі мають міжнародні сертифікати та багаторічний досвід викладання китайської, японської та корейської мов.",
        },
        {
            icon: "🗣️",
            title: "Інтерактивне навчання",
            text: "Ми поєднуємо традиційні методики з сучасними технологіями — уроки завжди цікаві, живі та результативні.",
        },
        {
            icon: "🌏",
            title: "Культурне занурення",
            text: "Крім мови, ви дізнаєтесь про традиції, свята, етикет і мистецтво Азії, щоб краще відчути дух Сходу.",
        },
        {
            icon: "💻",
            title: "Онлайн і офлайн формати",
            text: "Займайтеся як у нашій школі, так і онлайн — ми підлаштовуємось під ваш розклад.",
        },
        {
            icon: "📚",
            title: "Навчальні матеріали",
            text: "Ми надаємо доступ до авторських підручників, інтерактивних вправ і флеш-карт для ефективного запам’ятовування.",
        },
        {
            icon: "🌸",
            title: "Дружня атмосфера",
            text: "Ми створюємо комфортне середовище, де кожен студент відчуває себе частиною спільноти Sakura.",
        },
    ],
};

export const missionContent = {
    title: "Наша місія 🌸",
    description:
        "Ми прагнемо зробити вивчення азійських мов не просто корисним, а натхненним процесом. Наш підхід — це поєднання культури, практики й любові до мови.",
    image: media.dragon,
    facts: [
        {
            icon: media.sakuraIcon,
            value: "5",
            text: "років досвіду у викладанні мов Сходу по всьому світу.",
        },
        {
            icon: media.teacherIcon,
            value: "15",
            text: "викладачів-носіїв мови, що надихають кожного студента.",
        },
        {
            icon: media.bookIcon,
            value: "700+",
            text: "студентів уже досягли своїх мовних цілей із Sakura.",
        },
    ],
};

export const faqContent = {
    image: media.sakura,
    items: [
        {
            question: "Які мови можна вивчати у Sakura School?",
            answer:
                "Ми навчаємо китайської, японської та корейської мов. Усі курси розроблені за міжнародними стандартами з акцентом на розмовну практику.",
        },
        {
            question: "Чи можна навчатись онлайн?",
            answer:
                "Так! Ми пропонуємо як офлайн-заняття в Києві, так і онлайн через Zoom або Google Meet. Формат ви обираєте самі.",
        },
        {
            question: "Скільки триває курс?",
            answer:
                "Базовий курс триває 3 місяці (24 заняття). Ви можете продовжити навчання до рівнів Intermediate або Advanced.",
        },
        {
            question: "Чи надаєте ви сертифікат після закінчення?",
            answer:
                "Так, після успішного завершення курсу студенти отримують сертифікат Sakura School, який підтверджує рівень володіння мовою.",
        },
        {
            question: "Чи є пробне заняття?",
            answer:
                "Так, перше заняття — безкоштовне. Ви зможете познайомитись із викладачем і відчути атмосферу нашої школи.",
        },
    ],
};

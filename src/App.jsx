
import { useState } from 'react'
import './App.css'

const logos = [
  { src: '/images/logo CHNU.png', alt: 'Чернівецький національний університет' },
  { src: '/images/logo nniftkn.png', alt: 'Навчально-науковий інститут' },
  { src: '/images/logo KPMOT.png', alt: 'Кафедра поліграфічних, мультимедійних та оптичних технологій' },
]

const features = [
  { icon: '/images/icon 1_meet.png', alt: 'Зустрічі', lines: ['Зустріч раз на тиждень', 'по 2 години'] },
  { icon: '/images/icon 2_what.png', alt: 'Навчання', lines: ['Основні принципи дизайну', 'Основний інструментарій'] },
  { icon: '/images/icon 3_comm.png', alt: 'Спільнота', lines: ['Набирання практики', 'Обмін досвідом з групою'] },
  { icon: '/images/icon 4_free.png', alt: 'Вільний проєкт', lines: ['Кожне четверте заняття', 'Вільний проєкт'] },
]

const destinations = [
  { id: 'mindmap', title: 'mindmap', subtitle: '«Цифровий дизайн»', className: 'nav-bubble--mindmap' },
  { id: 'calendar', title: 'План гуртка', subtitle: '', className: 'nav-bubble--calendar' },
]

const topics = [
  {
    id: 1, title: 'Основи дизайну', subtitle: 'Принципи, які формують візуальну мову',
    icon: '/images/icon 2_1.png', color: '#C5E7E1',
    course: 'Композиційний дизайн — 2 сем. магістратури',
    items: [['2_1_1.png', 'Композиція'], ['2_1_2.png', 'Візуальна ієрархія'], ['2_1_3.png', 'Контраст, баланс, ритм'], ['2_1_4.png', 'Сітки та модульність']],
  },
  {
    id: 2, title: 'Текст', subtitle: 'Слова, які читають та помічають',
    icon: '/images/icon 2_2.png', color: '#F2CCBD',
    course: 'Опрацювання текстової інформації — 4 сем.',
    items: [['2_2_1.png', 'Типографіка'], ['2_2_2.png', 'Шрифтові пари'], ['2_2_3.png', 'Верстка тексту'], ['2_2_4.png', 'Розміщення тексту']],
  },
  {
    id: 3, title: 'Колір', subtitle: 'Колір як основа передачі емоцій',
    icon: '/images/icon 2_3.png', color: '#F4DCA0',
    course: 'Опрацювання текстової інформації — 4 сем.',
    items: [['2_3_1.png', 'Теорія кольору'], ['2_3_2.png', 'Колірні моделі'], ['2_3_3.png', 'Підбір кольорів'], ['2_3_4.png', 'Психологія кольору']],
  },
  {
    id: 4, title: 'Зображення', subtitle: 'Візуальний контент та його обробка',
    icon: '/images/icon 2_4.png', color: '#D7D0F0',
    course: 'Опрацювання текстової інформації — 4 сем.',
    items: [['2_4_1.png', 'Фотографії та стоки'], ['2_4_2.png', 'Обробка зображень'], ['2_4_3.png', 'Ілюстрації та колажі'], ['2_4_4.png', 'Формати та роздільна здатність']],
  },
  {
    id: 5, title: 'Типи робіт', subtitle: 'Де і як застосовується дизайн',
    icon: '/images/icon 2_5.png', color: '#F1C5D2', special: true, course: '',
    items: [
      { title: 'Графічний дизайн', list: ['Одиночні замовлення', 'Логотипи та логобуки', 'Брендування та айдентика', 'Поліграфія', 'Рекламні матеріали', 'Інфографіка'] },
      { title: 'UX/UI та цифрові продукти', list: ['Вебсайти: лендінги, маркетплейси, новинні портали', 'Вебсервіси', 'Мобільні застосунки', 'CRM-системи'] },
      { title: '3D-графіка та анімація', list: ['3D-сцени та об’єкти', '3D-персонажі', 'Анімація', 'Візуалізація продуктів'] },
      { title: 'Моушн-дизайн', list: ['Анімована типографіка', 'Анімація логотипів', 'Рекламні ролики', 'Анімована інфографіка'] },
    ],
  },
  {
    id: 6, title: 'Дизайн-процес', subtitle: 'Від дослідження до результату',
    icon: '/images/icon 2_6.png', color: '#C8D8F1',
    course: 'Опрацювання текстової інформації — 4 сем.',
    items: [['2_6_1.png', 'Збір та аналіз даних'], ['2_6_2.png', 'Розробка концепції'], ['2_6_3.png', 'Ескізи та мудборди'], ['2_6_4.png', 'Створення та доопрацювання'], ['2_6_5.png', 'Презентація продукту']],
  },
  {
    id: 7, title: 'Дослідження та концепція', subtitle: 'Розуміти контекст і створювати сенси',
    icon: '/images/icon 2_7.png', color: '#D6E4B7',
    course: 'Опрацювання текстової інформації — 4 сем.',
    items: [['2_7_1.png', 'Аналіз ринку'], ['2_7_2.png', 'Аналіз конкурентів'], ['2_7_3.png', 'Цільова аудиторія'], ['2_7_4.png', 'Формування філософії'], ['2_7_5.png', 'Бриф і постановка задачі']],
  },
  {
    id: 8, title: 'Стилі', subtitle: 'Візуальні напрямки та їх застосування',
    icon: '/images/icon 2_8.png', color: '#F2D5B7',
    course: 'Опрацювання текстової інформації — 4 сем.',
    items: [['2_8_1.png', 'Види стилів'], ['2_8_2.png', 'Комбінування стилів'], ['2_8_3.png', 'Актуальні тренди']],
  },
  {
    id: 9, title: 'Психологія клієнта', subtitle: 'Люди, їхні потреби та рішення',
    icon: '/images/icon 2_9.png', color: '#BFD9E9',
    course: 'Опрацювання текстової інформації — 4 сем.',
    items: [['2_9_1.png', 'Поведінка споживача'], ['2_9_2.png', 'Мотивація та емоції'], ['2_9_3.png', 'Комунікація з клієнтом']],
  },
  {
    id: 10, title: 'Маркетинг і реклама', subtitle: 'Як дизайн працює на бізнес',
    icon: '/images/icon 2_10.png', color: '#E7C8A8',
    course: 'Опрацювання текстової інформації — 4 сем.',
    items: [['2_10_1.png', 'Основи маркетингу'], ['2_10_2.png', 'Бренд і позиціонування'], ['2_10_3.png', 'Реклама та її робота']],
  },
]

const schedule = [
  { date: '2026-10-26', title: 'Вступ. Що таке графічний дизайн? Роль дизайну у візуальній комунікації', topicId: 1, color: topics.find((topic) => topic.id === 1)?.color ?? '#C5E7E1',  description: 'Вступ. Що таке графічний дизайн? Роль дизайну у візуальній комунікації', practice: 'Розбір прикладів і практичне застосування принципів теми.', works: 'Власна візуальна робота або вправа за темою заняття.' },
  { date: '2026-11-02', title: 'Дизайн як спосіб передавання інформації. Повідомлення, зміст і візуальна форма', topicId: 1, color: topics.find((topic) => topic.id === 1)?.color ?? '#C5E7E1',  description: 'Дизайн як спосіб передавання інформації. Повідомлення, зміст і візуальна форма', practice: 'Розбір прикладів і практичне застосування принципів теми.', works: 'Власна візуальна робота або вправа за темою заняття.' },
  { date: '2026-11-09', title: 'Візуальна ієрархія. Як керувати увагою глядача та виділяти головне', topicId: 1, color: topics.find((topic) => topic.id === 1)?.color ?? '#C5E7E1',  description: 'Візуальна ієрархія. Як керувати увагою глядача та виділяти головне', practice: 'Розбір прикладів і практичне застосування принципів теми.', works: 'Власна візуальна робота або вправа за темою заняття.' },
  { date: '2026-11-16', title: 'Вільний проєкт. Вибір та розробка вланого проєкту із подальшим аналізом', topicId: 5, color: topics.find((topic) => topic.id === 5)?.color ?? '#C5E7E1', free: true, description: 'Самостійне застосування вивчених принципів графічного дизайну у власній роботі.', practice: 'Вибір задуму, створення та обговорення результату.', works: 'Авторський проєкт на основі тем, які вже розглянули на заняттях.' },
  { date: '2026-11-23', title: 'Основи композиції. Рівновага, акценти, цілісність і розташування елементів', topicId: 1, color: topics.find((topic) => topic.id === 1)?.color ?? '#C5E7E1',  description: 'Основи композиції. Рівновага, акценти, цілісність і розташування елементів', practice: 'Розбір прикладів і практичне застосування принципів теми.', works: 'Власна візуальна робота або вправа за темою заняття.' },
  { date: '2026-11-30', title: 'Сітки в дизайні. Модульна сітка, колонки, поля, вирівнювання та структура макета', topicId: 1, color: topics.find((topic) => topic.id === 1)?.color ?? '#C5E7E1',  description: 'Сітки в дизайні. Модульна сітка, колонки, поля, вирівнювання та структура макета', practice: 'Розбір прикладів і практичне застосування принципів теми.', works: 'Власна візуальна робота або вправа за темою заняття.' },
  { date: '2026-12-07', title: 'Контраст, ритм і пропорції. Принципи організації візуального простору', topicId: 1, color: topics.find((topic) => topic.id === 1)?.color ?? '#C5E7E1',  description: 'Контраст, ритм і пропорції. Принципи організації візуального простору', practice: 'Розбір прикладів і практичне застосування принципів теми.', works: 'Власна візуальна робота або вправа за темою заняття.' },
  { date: '2026-12-14', title: 'Вільний проєкт. Вибір та розробка вланого проєкту із подальшим аналізом', topicId: 5, color: topics.find((topic) => topic.id === 5)?.color ?? '#C5E7E1', free: true, description: 'Самостійне застосування вивчених принципів графічного дизайну у власній роботі.', practice: 'Вибір задуму, створення та обговорення результату.', works: 'Авторський проєкт на основі тем, які вже розглянули на заняттях.' },
  { date: '2027-02-01', title: 'Колір у дизайні. Колірне коло, гармонії, палітри та емоційне сприйняття', topicId: 3, color: topics.find((topic) => topic.id === 3)?.color ?? '#C5E7E1',  description: 'Колір у дизайні. Колірне коло, гармонії, палітри та емоційне сприйняття', practice: 'Розбір прикладів і практичне застосування принципів теми.', works: 'Власна візуальна робота або вправа за темою заняття.' },
  { date: '2027-02-08', title: 'Контраст і доступність. Читабельність, колірні поєднання та помітність елементів', topicId: 3, color: topics.find((topic) => topic.id === 3)?.color ?? '#C5E7E1',  description: 'Контраст і доступність. Читабельність, колірні поєднання та помітність елементів', practice: 'Розбір прикладів і практичне застосування принципів теми.', works: 'Власна візуальна робота або вправа за темою заняття.' },
  { date: '2027-02-15', title: 'Основи типографіки. Вибір шрифтів, характер, читабельність і поєднання гарнітур', topicId: 2, color: topics.find((topic) => topic.id === 2)?.color ?? '#C5E7E1',  description: 'Основи типографіки. Вибір шрифтів, характер, читабельність і поєднання гарнітур', practice: 'Розбір прикладів і практичне застосування принципів теми.', works: 'Власна візуальна робота або вправа за темою заняття.' },
  { date: '2027-02-22', title: 'Вільний проєкт. Вибір та розробка вланого проєкту із подальшим аналізом', topicId: 5, color: topics.find((topic) => topic.id === 5)?.color ?? '#C5E7E1', free: true, description: 'Самостійне застосування вивчених принципів графічного дизайну у власній роботі.', practice: 'Вибір задуму, створення та обговорення результату.', works: 'Авторський проєкт на основі тем, які вже розглянули на заняттях.' },
  { date: '2027-03-01', title: 'Текст і макет. Типографічна ієрархія, інтервали, абзаци та робота з текстовими блоками', topicId: 2, color: topics.find((topic) => topic.id === 2)?.color ?? '#C5E7E1',  description: 'Текст і макет. Типографічна ієрархія, інтервали, абзаци та робота з текстовими блоками', practice: 'Розбір прикладів і практичне застосування принципів теми.', works: 'Власна візуальна робота або вправа за темою заняття.' },
  { date: '2027-03-08', title: 'Зображення у дизайні. Композиційна роль фотографій, ілюстрацій і графічних елементів', topicId: 4, color: topics.find((topic) => topic.id === 4)?.color ?? '#C5E7E1',  description: 'Зображення у дизайні. Композиційна роль фотографій, ілюстрацій і графічних елементів', practice: 'Розбір прикладів і практичне застосування принципів теми.', works: 'Власна візуальна робота або вправа за темою заняття.' },
  { date: '2027-03-15', title: 'Форма, силует і візуальні символи. Спрощення, піктограми та принципи створення зрозумілих образів', topicId: 4, color: topics.find((topic) => topic.id === 4)?.color ?? '#C5E7E1',  description: 'Форма, силует і візуальні символи. Спрощення, піктограми та принципи створення зрозумілих образів', practice: 'Розбір прикладів і практичне застосування принципів теми.', works: 'Власна візуальна робота або вправа за темою заняття.' },
  { date: '2027-03-22', title: 'Вільний проєкт. Вибір та розробка вланого проєкту із подальшим аналізом', topicId: 5, color: topics.find((topic) => topic.id === 5)?.color ?? '#C5E7E1', free: true, description: 'Самостійне застосування вивчених принципів графічного дизайну у власній роботі.', practice: 'Вибір задуму, створення та обговорення результату.', works: 'Авторський проєкт на основі тем, які вже розглянули на заняттях.' },
  { date: '2027-03-29', title: 'Стилі в графічному дизайні. Аналіз характерних ознак, прийомів і візуальної мови', topicId: 8, color: topics.find((topic) => topic.id === 8)?.color ?? '#C5E7E1',  description: 'Стилі в графічному дизайні. Аналіз характерних ознак, прийомів і візуальної мови', practice: 'Розбір прикладів і практичне застосування принципів теми.', works: 'Власна візуальна робота або вправа за темою заняття.' },
  { date: '2027-04-05', title: 'Референси та візуальні концепції. Пошук прикладів, аналіз рішень і формування мудборда', topicId: 7, color: topics.find((topic) => topic.id === 7)?.color ?? '#C5E7E1',  description: 'Референси та візуальні концепції. Пошук прикладів, аналіз рішень і формування мудборда', practice: 'Розбір прикладів і практичне застосування принципів теми.', works: 'Власна візуальна робота або вправа за темою заняття.' },
  { date: '2027-04-12', title: 'Інфографіка та візуалізація інформації. Схеми, діаграми, піктограми й пояснення складних даних', topicId: 10, color: topics.find((topic) => topic.id === 10)?.color ?? '#C5E7E1',  description: 'Інфографіка та візуалізація інформації. Схеми, діаграми, піктограми й пояснення складних даних', practice: 'Розбір прикладів і практичне застосування принципів теми.', works: 'Власна візуальна робота або вправа за темою заняття.' },
  { date: '2027-04-19', title: 'Вільний проєкт. Вибір та розробка вланого проєкту із подальшим аналізом', topicId: 5, color: topics.find((topic) => topic.id === 5)?.color ?? '#C5E7E1', free: true, description: 'Самостійне застосування вивчених принципів графічного дизайну у власній роботі.', practice: 'Вибір задуму, створення та обговорення результату.', works: 'Авторський проєкт на основі тем, які вже розглянули на заняттях.' },
  { date: '2027-04-26', title: 'Візуальна система та єдність дизайну. Повторення елементів, узгодженість стилю й системність рішень', topicId: 6, color: topics.find((topic) => topic.id === 6)?.color ?? '#C5E7E1',  description: 'Візуальна система та єдність дизайну. Повторення елементів, узгодженість стилю й системність рішень', practice: 'Розбір прикладів і практичне застосування принципів теми.', works: 'Власна візуальна робота або вправа за темою заняття.' },
  { date: '2027-05-03', title: 'Аналіз дизайну. Як оцінювати композицію, типографіку, колір і зрозумілість візуального повідомлення', topicId: 9, color: topics.find((topic) => topic.id === 9)?.color ?? '#C5E7E1',  description: 'Аналіз дизайну. Як оцінювати композицію, типографіку, колір і зрозумілість візуального повідомлення', practice: 'Розбір прикладів і практичне застосування принципів теми.', works: 'Власна візуальна робота або вправа за темою заняття.' },
  { date: '2027-05-10', title: 'Від завдання до концепції. Аналіз потреб, пошук ідей, вибір рішень та вдосконалення дизайну', topicId: 7, color: topics.find((topic) => topic.id === 7)?.color ?? '#C5E7E1',  description: 'Від завдання до концепції. Аналіз потреб, пошук ідей, вибір рішень та вдосконалення дизайну', practice: 'Розбір прикладів і практичне застосування принципів теми.', works: 'Власна візуальна робота або вправа за темою заняття.' },
  { date: '2027-05-17', title: 'Вільний проєкт. Вибір та розробка вланого проєкту із подальшим аналізом', topicId: 5, color: topics.find((topic) => topic.id === 5)?.color ?? '#C5E7E1', free: true, description: 'Самостійне застосування вивчених принципів графічного дизайну у власній роботі.', practice: 'Вибір задуму, створення та обговорення результату.', works: 'Авторський проєкт на основі тем, які вже розглянули на заняттях.' },
  { date: '2027-05-24', title: 'Доопрацювання та презентація власних робіт. Аргументація дизайнерських рішень і підготовка результату', topicId: 6, color: topics.find((topic) => topic.id === 6)?.color ?? '#C5E7E1',  description: 'Доопрацювання та презентація власних робіт. Аргументація дизайнерських рішень і підготовка результату', practice: 'Розбір прикладів і практичне застосування принципів теми.', works: 'Власна візуальна робота або вправа за темою заняття.' },
  { date: '2027-05-31', title: 'Підсумки гуртка. Обговорення робіт, аналіз прогресу та подальші напрями розвитку', topicId: 6, color: topics.find((topic) => topic.id === 6)?.color ?? '#C5E7E1',  description: 'Підсумки гуртка. Обговорення робіт, аналіз прогресу та подальші напрями розвитку', practice: 'Розбір прикладів і практичне застосування принципів теми.', works: 'Власна візуальна робота або вправа за темою заняття.' },
]

const monthNames = [
  'Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень',
  'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень',
]

const monthMeta = [
  { year: 2026, month: 9 },
  { year: 2026, month: 10 },
  { year: 2026, month: 11 },
  { year: 2027, month: 0 },
  { year: 2027, month: 1 },
  { year: 2027, month: 2 },
  { year: 2027, month: 3 },
  { year: 2027, month: 4 },
]

const pdfPath = '/documents/план%20проведення%20гуртка%20цифрового%20дизайну%20Pixellab.pdf'

function Hint({ children }) {
  return <div className="site-hint" aria-live="polite"><span className="site-hint-dot" />{children}</div>
}

function JoinButton({ onClick }) {
  return <button className="join-button" type="button" onClick={onClick}>Долучитись <span aria-hidden="true">↗</span></button>
}

function JoinModal({ onClose }) {
  function submitApplication(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const subject = encodeURIComponent('Заявка до гуртка PixelLab')
    const body = encodeURIComponent(
      `Заявка до гуртка PixelLab\n\nПІБ: ${data.get('name')}\nНавчальний заклад / клас / курс: ${data.get('education')}\nДосвід у дизайні: ${data.get('experience')}\nОчікування: ${data.get('expectations')}\nКонтакт для відповіді: ${data.get('contact')}`
    )
    window.location.href = `mailto:a.dobrianksyi@chnu.edu.ua?subject=${subject}&body=${body}`
  }

  return (
    <div className="modal-backdrop" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose()
    }}>
      <section className="join-modal" role="dialog" aria-modal="true" aria-labelledby="join-title">
        <button className="modal-close" type="button" onClick={onClose} aria-label="Закрити">×</button>
        <p className="inner-page-eyebrow">PIXELLAB / СПІЛЬНОТА</p>
        <h2 id="join-title">Долучайся до PixelLab</h2>
        <p className="join-intro">Розкажи трохи про себе — і зробімо перший крок до спільної роботи.</p>
        <form className="join-form" onSubmit={submitApplication}>
          <label>Ім’я та прізвище<input name="name" required placeholder="Як до тебе звертатися?" /></label>
          <label>Де навчаєшся?<input name="education" placeholder="Школа, клас, заклад або курс" /></label>
          <label>Досвід у дизайні<select name="experience" defaultValue="Початківець"><option>Початківець</option><option>Маю невеликий досвід</option><option>Вже створюю власні роботи</option></select></label>
          <label>Що хочеш спробувати?<textarea name="expectations" rows="3" placeholder="Теми, навички або ідеї, які цікавлять" /></label>
          <label>Контакт для відповіді<input name="contact" required placeholder="Email або Telegram" /></label>
          <button className="join-submit" type="submit">Підготувати заявку <span aria-hidden="true">↗</span></button>
          <p className="form-note">Відкриється твоя поштова програма з підготовленим листом. Перед відправленням перевір його та натисни «Надіслати».</p>
        </form>
      </section>
    </div>
  )
}

function InstitutionLogos() {
  return <header className="logo-row" aria-label="Логотипи установ">
    {logos.map((logo) => <img key={logo.src} className="institution-logo" src={logo.src} alt={logo.alt} />)}
  </header>
}

function MindmapPage({ onBack, onJoin }) {
  const [selectedTopic, setSelectedTopic] = useState(null)

  return (
    <main className="mindmap-page">
      <header className="mindmap-header">
        <div className="mindmap-header-logos">
          <img src="/images/pixelLab logo.png" alt="PixelLab" className="mindmap-brand" />
          {logos.map((logo) => <img key={logo.src} src={logo.src} alt={logo.alt} className="institution-logo" />)}
        </div>
        <div className="mindmap-header-actions">
          <JoinButton onClick={onJoin} />
          <button className="mindmap-back" type="button" onClick={onBack} aria-label="Повернутися на головну" title="На головну">
            <span aria-hidden="true">↗</span>
          </button>
        </div>
      </header>

      <Hint>Обери тему, щоб дізнатися більше</Hint>

      <section className={`mindmap-canvas ${selectedTopic ? 'has-selection' : ''}`} aria-label="Майндмапа цифрового дизайну">
        <div className="mindmap-center"><p className="mindmap-center-title">Цифровий<br />дизайн</p></div>

        {topics.map((topic, index) => (
          <button
            key={topic.id}
            className={`mindmap-bubble mindmap-bubble--${index + 1} ${selectedTopic?.id === topic.id ? 'is-selected' : ''}`}
            style={{ '--bubble-color': topic.color }}
            type="button"
            onClick={() => setSelectedTopic((current) => current?.id === topic.id ? null : topic)}
            aria-label={`Відкрити розділ: ${topic.title}`}
            aria-expanded={selectedTopic?.id === topic.id}
            tabIndex={selectedTopic && selectedTopic.id !== topic.id ? -1 : 0}
          >
            <img src={topic.icon} alt="" aria-hidden="true" /><span>{topic.title}</span>
          </button>
        ))}

        {selectedTopic && (
          <div className="topic-panel" style={{ '--panel-color': selectedTopic.color }} role="dialog" aria-modal="true" aria-labelledby="topic-panel-title">
            <header className="topic-panel-header">
              <div>
                <h2 id="topic-panel-title">{selectedTopic.title}</h2>
                {selectedTopic.course && <p className="topic-panel-course">{selectedTopic.course}</p>}
              </div>
              <button className="topic-panel-close" type="button" onClick={() => setSelectedTopic(null)} aria-label="Закрити вікно">×</button>
            </header>
            {selectedTopic.special ? (
              <div className="work-types-grid">
                {selectedTopic.items.map((item) => <section className="work-type" key={item.title}>
                  <h3>{item.title}</h3><ul>{item.list.map((entry) => <li key={entry}>{entry}</li>)}</ul>
                </section>)}
              </div>
            ) : (
              <div className={`topic-cards topic-cards--${selectedTopic.items.length}`}>
                {selectedTopic.items.map(([image, caption]) => <article className="topic-card" key={image}>
                  <img src={`/images/${image}`} alt={caption} loading="lazy" /><p>{caption}</p>
                </article>)}
              </div>
            )}
          </div>
        )}
      </section>
    </main>
  )
}

function formatDate(dateString) {
  const date = new Date(`${dateString}T12:00:00`)
  return new Intl.DateTimeFormat('uk-UA', { day: 'numeric', month: 'long', year: 'numeric' }).format(date)
}

function getMonthLabel(meta) {
  return `${monthNames[meta.month]} ${meta.year}`
}

function getMonthSchedule(meta) {
  return schedule.filter((item) => {
    const date = new Date(`${item.date}T12:00:00`)
    return date.getFullYear() === meta.year && date.getMonth() === meta.month
  })
}

function CalendarPage({ onBack, onJoin }) {
  const [activeMonthIndex, setActiveMonthIndex] = useState(null)
  const [selectedSession, setSelectedSession] = useState(null)
  const [showPlan, setShowPlan] = useState(false)

  function moveMonth(direction) {
    setActiveMonthIndex((current) => {
      const next = Math.max(0, Math.min(monthMeta.length - 1, current + direction))
      return next
    })
    setSelectedSession(null)
  }

  const activeMonth = activeMonthIndex === null ? null : monthMeta[activeMonthIndex]
  const activeSessions = activeMonth ? getMonthSchedule(activeMonth) : []

  return (
    <main className="calendar-page">
      <header className="calendar-header">
        <button className="calendar-home-button" type="button" onClick={onBack} aria-label="Повернутися на головну" title="На головну"><span aria-hidden="true">←</span></button>
        <div className="calendar-brand-row">
          <img src="/images/pixelLab logo.png" alt="PixelLab" className="calendar-brand" />
        </div>
        <div className="calendar-header-actions">
          <JoinButton onClick={onJoin} />
        </div>
      </header>

      <Hint>{activeMonth ? 'Обери заняття, щоб переглянути деталі' : 'Обери місяць, щоб переглянути заняття'}</Hint>

      <section className="calendar-content">
        <div className="calendar-intro calendar-intro-layout">
          <div className="calendar-intro-copy">
            <p className="inner-page-eyebrow">PIXELLAB / 2026—2027</p>
            <h1>План гуртка</h1>
            <p>Від знайомства з принципами дизайну — до власних візуальних проєктів.</p>
          </div>
          <div className="calendar-intro-actions">
            <button className="outline-button" type="button" onClick={() => setShowPlan(true)}>Переглянути план <span aria-hidden="true">↗</span></button>
            <a className="outline-button" href={pdfPath} target="_blank" rel="noreferrer">Відкрити PDF <span aria-hidden="true">↗</span></a>
            <a className="outline-button" href={pdfPath} download>Завантажити PDF <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div className="calendar-legend">
          <span><i className="legend-dot legend-dot--lesson" />Заняття</span>
          <span><i className="legend-dot legend-dot--free" />Вільний проєкт</span>
          <span><i className="legend-dot legend-dot--break" />Зимова перерва</span>
        </div>

        {activeMonthIndex === null ? (
          <>
            <div className="year-calendar">
              {monthMeta.map((meta, index) => {
                const sessions = getMonthSchedule(meta)
                const isBreak = meta.month === 0
                return (
                  <button
                    key={`${meta.year}-${meta.month}`}
                    type="button"
                    className={`month-tile ${isBreak ? 'month-tile--break' : ''}`}
                    onClick={() => { setActiveMonthIndex(index); setSelectedSession(null) }}
                  >
                    <span className="month-tile-top"><span>{getMonthLabel(meta)}</span><span aria-hidden="true">↗</span></span>
                    {isBreak ? (
                      <span className="winter-pattern"><span>✳</span><span>✧</span><span>❄</span><span>✳</span><small>Зимова перерва</small></span>
                    ) : (
                      <span className="month-dates">
                        {sessions.map((session) => (
                          <span key={session.date} className={`month-date ${session.free ? 'month-date--free' : ''}`} style={{ '--session-color': session.color }}>
                            {new Date(`${session.date}T12:00:00`).getDate()}
                          </span>
                        ))}
                      </span>
                    )}
                    <span className="month-tile-bottom">{isBreak ? 'Відпочинок і натхнення' : meta.month === 11 ? `${sessions.length} заняття · перерва з 16.12` : `${sessions.length} ${sessions.length === 1 ? 'заняття' : 'занять'}`}</span>
                  </button>
                )
              })}
            </div>
          </>
        ) : (
          <section className="month-view" key={activeMonthIndex}>
            <button className="outline-button month-back-button" type="button" onClick={() => { setActiveMonthIndex(null); setSelectedSession(null) }}>← Повернутись до річного календаря</button>
            <div className="month-slider-heading">
              <button className="slider-arrow" type="button" onClick={() => moveMonth(-1)} disabled={activeMonthIndex === 0} aria-label="Попередній місяць">←</button>
              <div className="month-slider-title">
                {activeMonthIndex > 0 && <button type="button" className="neighbor-month" onClick={() => moveMonth(-1)}>{getMonthLabel(monthMeta[activeMonthIndex - 1])}</button>}
                <h2>{getMonthLabel(activeMonth)}</h2>
                {activeMonthIndex < monthMeta.length - 1 && <button type="button" className="neighbor-month" onClick={() => moveMonth(1)}>{getMonthLabel(monthMeta[activeMonthIndex + 1])}</button>}
              </div>
              <button className="slider-arrow" type="button" onClick={() => moveMonth(1)} disabled={activeMonthIndex === monthMeta.length - 1} aria-label="Наступний місяць">→</button>
            </div>

            {(activeMonth.month === 0) ? (
              <div className="month-break-panel"><div className="break-symbol">✳</div><h3>Час для відпочинку та натхнення</h3><p>У січні регулярні зустрічі не проводяться. Побачимось 1 лютого!</p></div>
            ) : (
              <div className="session-list">
                {activeSessions.map((session, index) => (
                  <button
                    key={session.date}
                    type="button"
                    className={`session-card ${session.free ? 'session-card--free' : ''} ${selectedSession?.date === session.date ? 'session-card--selected' : ''}`}
                    style={{ '--session-color': session.color }}
                    onClick={() => setSelectedSession((current) => current?.date === session.date ? null : session)}
                  >
                    <span className="session-date"><strong>{new Date(`${session.date}T12:00:00`).getDate()}</strong><small>ПН</small></span>
                    <span className="session-main"><span className="session-number">ЗАНЯТТЯ {schedule.findIndex((item) => item.date === session.date) + 1}</span><strong>{session.title}</strong><small>{session.free ? 'Вільний проєкт' : 'Теорія та практика'}</small></span>
                    <span className="session-arrow" aria-hidden="true">{selectedSession?.date === session.date ? '−' : '+'}</span>
                    {selectedSession?.date === session.date && (
                      <span className="session-details">
                        <span><strong><b>Про що говоритимемо</b></strong>{session.description}</span>
                        <span><strong><b>Практика</b></strong>{session.practice}</span>
                        <span><strong><b>Результат заняття</b></strong>{session.works}</span>
                      </span>
                    )}
                  </button>
                ))}
                {activeSessions.length === 0 && <p className="empty-month">У цьому місяці зустрічей немає.</p>}
                {activeMonth.month === 11 && <p className="winter-break-note">Зимова перерва починається 16 грудня 2026 року й триває до кінця січня 2027 року.</p>}
              </div>
            )}

            <div className="month-view-footer">
              <button className="outline-button" type="button" onClick={() => setShowPlan(true)}>Переглянути повний план <span aria-hidden="true">↗</span></button>
            </div>
          </section>
        )}

      </section>

      {showPlan && (
        <div className="modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setShowPlan(false) }}>
          <section className="plan-modal" role="dialog" aria-modal="true" aria-labelledby="plan-modal-title">
            <header className="plan-modal-header"><div><p className="inner-page-eyebrow">PIXELLAB / 2026—2027</p><h2 id="plan-modal-title">План проведення гуртка</h2></div><button className="modal-close" type="button" onClick={() => setShowPlan(false)} aria-label="Закрити">×</button></header>
            <div className="plan-table-wrap">
              <table className="plan-table">
                <thead><tr><th>№</th><th>Дата</th><th>Тема заняття</th><th>Зміст і практика</th></tr></thead>
                <tbody>{schedule.map((session, index) => (
                  <tr key={session.date} className={session.free ? 'plan-row--free' : ''} style={{ '--session-color': session.color }}>
                    <td>{index + 1}</td><td>{formatDate(session.date)}</td><td>{session.title}</td><td>{session.description} {session.practice}</td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
            <div className="plan-modal-footer"><a className="outline-button" href={pdfPath} target="_blank" rel="noreferrer">Відкрити PDF ↗</a><a className="outline-button" href={pdfPath} download>Завантажити PDF ↓</a></div>
          </section>
        </div>
      )}
    </main>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [page, setPage] = useState('home')
  const [destination, setDestination] = useState('')
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [joinOpen, setJoinOpen] = useState(false)

  function toggleMenu() {
    if (!isTransitioning) setMenuOpen((current) => !current)
  }

  function navigateTo(nextPage) {
    if (isTransitioning) return
    setDestination(nextPage)
    setIsTransitioning(true)
    window.setTimeout(() => {
      setPage(nextPage)
      setMenuOpen(false)
      setIsTransitioning(false)
    }, 700)
  }

  function goHome() {
    setPage('home')
    setMenuOpen(false)
    setDestination('')
    setIsTransitioning(false)
  }

  const isHome = page === 'home'

  return (
    <>
      {page === 'mindmap' ? (
        <MindmapPage onBack={goHome} onJoin={() => setJoinOpen(true)} />
      ) : page === 'calendar' ? (
        <CalendarPage onBack={goHome} onJoin={() => setJoinOpen(true)} />
      ) : (
        <main className={['site', 'page-home', menuOpen ? 'menu-open' : '', isTransitioning ? 'is-transitioning' : '', destination ? `destination-${destination}` : ''].filter(Boolean).join(' ')}>
          <InstitutionLogos />
          <JoinButton onClick={() => setJoinOpen(true)} />
          <Hint>Натисни на бульбашку, щоб дослідити PixelLab</Hint>
          <section className="hero" aria-label="PixelLab">
            <div className="hero-stage">
              <button className={`hero-bubble ${menuOpen ? 'is-active' : ''}`} type="button" aria-label={menuOpen ? 'Закрити меню напрямків' : 'Відкрити меню напрямків'} aria-expanded={menuOpen} onClick={toggleMenu}>
                <img className="hero-logo logo-normal" src="/images/pixelLab logo.png" alt="PixelLab" />
                <img className="hero-logo logo-inverted" src="/images/PixelLab logo inv.png" alt="" aria-hidden="true" />
              </button>
              {destinations.map((item) => (
                <button key={item.id} className={`nav-bubble ${item.className}`} type="button" aria-label={item.subtitle ? `${item.title} ${item.subtitle}` : item.title} tabIndex={menuOpen ? 0 : -1} onClick={() => navigateTo(item.id)}>
                  <span className="nav-bubble-title">{item.title}</span>
                  {item.subtitle && <span className="nav-bubble-subtitle">{item.subtitle}</span>}
                </button>
              ))}
            </div>
          </section>
          <section className="features" aria-label="Про гурток">
            {features.map((feature) => <article className="feature" key={feature.icon}>
              <img className="feature-icon" src={feature.icon} alt={feature.alt} />
              <p className="feature-text">{feature.lines.map((line) => <span key={line}>{line}</span>)}</p>
            </article>)}
          </section>
        </main>
      )}
      {joinOpen && <JoinModal onClose={() => setJoinOpen(false)} />}
    </>
  )
}

export default App

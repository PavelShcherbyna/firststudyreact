import { LOCALES } from './locales'

export const messages = {
    [LOCALES.ENGLISH]: {
        learn_to: `Hello, let's learn how to use React-Intl`,
        price_display:
            'How {n, number, ::currency/USD} is displayed in your selected language',
        number_display:
            'This is how {n, number} is formatted in the selected locale',
        start_today: 'Start Today: {d, date}',
        // меню
        about_project: 'About the project',
        contact_us: 'Contact us'
    },
    [LOCALES.RUSSIAN]: {
        learn_to: 'Привет, научимся использовать React-Intl',
        price_display:
            'Как {n, number, ::currency/RUB} отображается на выбранном языке',
        number_display:
            'Вот как {n, number} форматируется на основе выбранной локации',
        start_today: 'Начни сегодня: {d, date}',
        // меню
        about_project: 'О проекте',
        contact_us: 'Свяжитесь с нами'
    },
    [LOCALES.FRENCH]: {
        learn_to: 'Bonjour, apprenons à utiliser React-Intl',
        price_display: `Comment {n, number, ::currency/USD} $ s'affiche dans la langue sélectionnée`,
        number_display:
            'Voici comment {n, number} sont formatés dans les paramètres régionaux sélectionnés ',
        start_today: `Commencez aujourd'hui: {d, date}`,
        // меню
        about_project: 'À propos du projet',
        contact_us: 'Contactez-nous'
    },
    [LOCALES.GERMAN]: {
        learn_to: 'Hallo, lass uns lernen, wie man React-Intl benutzt',
        price_display:
            'Wie {n, number, ::currency/USD} in Ihrer ausgewählten Sprache angezeigt wird',
        number_display:
            'Auf diese Weise werden {n, number} im ausgewählten Gebietsschema formatiert',
        start_today: 'Beginnen Sie heute: {d, date}',
        // меню
        about_project: 'Über das Projekt',
        contact_us: 'Kontaktiere uns'
    }
}
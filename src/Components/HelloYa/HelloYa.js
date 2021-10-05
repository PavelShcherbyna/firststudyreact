import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import { FormattedMessage } from 'react-intl';
import { messages } from './messages';
import { LOCALES } from './locales';
import './HelloYa.css';



const languages = [
    { name: 'English', code: LOCALES.ENGLISH },
    { name: 'Русский', code: LOCALES.RUSSIAN },
    { name: 'Français', code: LOCALES.FRENCH },
    { name: 'Deutsche', code: LOCALES.GERMAN }
];


function HelloYa () {
    const locale = LOCALES.ENGLISH;
    const [currentLocale, setCurrentLocale] = useState(locale);
    const handleChange = ({ target: { value } }) => {setCurrentLocale(value)};
    return (
        <IntlProvider messages={messages[currentLocale]} locale={currentLocale} defaultLocale={LOCALES.ENGLISH}>
            <div >
                <div className='switcher'>
                    {/* Выпадающий список для выбора языка */}
                    Languages <select onChange={handleChange} value={currentLocale}>
                        {languages.map(({ name, code }) => (
                            <option key={code} value={code}>
                                {name}
                            </option>
                        ))}
                    </select>
                </div>
                <h1>HelloYa!</h1>
                <div className='container hero'>
                    <h2>
                        <FormattedMessage id='learn_to' />
                    </h2>
                    <p>
                        <FormattedMessage id='price_display' values={{ n: 59.99 }} />
                    </p>
                    <p>
                        <FormattedMessage id='number_display' values={{ n: 2000 }} />
                    </p>
                    <p>
                        <FormattedMessage id='start_today' values={{ d: new Date() }} />
                    </p>

                </div>
            </div>
        </IntlProvider>
    );
}




export default HelloYa;
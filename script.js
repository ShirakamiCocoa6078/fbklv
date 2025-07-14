document.addEventListener('DOMContentLoaded', () => {
    const langSelect = document.getElementById('lang-select');

    const setLanguage = (lang) => {
        document.documentElement.lang = lang;
        localStorage.setItem('language', lang);
        const elements = document.querySelectorAll('[data-key]');
        elements.forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });
    };

    langSelect.addEventListener('change', (event) => {
        setLanguage(event.target.value);
    });

    const savedLang = localStorage.getItem('language');
    const browserLang = navigator.language.split('-')[0];
    const initialLang = savedLang || (translations[browserLang] ? browserLang : 'ko');
    
    langSelect.value = initialLang;
    setLanguage(initialLang);
}); 
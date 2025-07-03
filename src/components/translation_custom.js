export const changeWordTo = (text, lang) => {

    let _translation = text
    if (lang == "hy-AM") {

        switch (text) {
            case "Contact us":
                _translation = "Կապ մեզ հետ"
                break;
            case "View all":
                _translation = "Ավելին"
                break;
            case "Read":
                _translation = "Կարդալ"
                break;
            case "View more":
                _translation = "Տեսնել ավելին"
                break;
            case "Contact us":
                _translation = "Կապ մեզ հետ"
                break;
            case "Name":
                _translation = "Անուն"
                break;
            case "Email":
                _translation = "Էլ. Հասցե"
                break;
            case "Phone":
                _translation = "Հեռախոսահամար"
                break;
            case "Message":
                _translation = "Հաղորդագրություն"
                break;
            case "Send":
                _translation = "Ուղարկել"
                break;
            case "Home":
                _translation = "Գլխավոր"
                break;
            case "About us":
                _translation = "Մեր մասին"
                break;
            case "Overview":
                _translation = "Ընդհանուր"
                break;
            case "Legal acts":
                _translation = "Իրավական ակտեր"
                break;
            case "Association documents":
                _translation = "Ներքին փաստաթղթեր"
                break;
            case "Certificates":
                _translation = "Սերտիֆիկացում"
                break;
            case "Useful links":
                _translation = "Հղումներ"
                break;

            default:
                break;
        }

    } else if (lang === "ru") {

        switch (text) {
            case "Contact us":
                _translation = "Связаться с нами"
                break;
            case "View all":
                _translation = "Все"
                break;
            case "Read":
                _translation = "Читать"
                break;
            case "View more":
                _translation = "Посмотреть больше"
                break;
            case "Contact us":
                _translation = "Связаться с нами"
                break;
            case "Name":
                _translation = "Имя"
                break;
            case "Email":
                _translation = "Эл. Почта "
                break;
            case "Phone":
                _translation = "Номер Телефона "
                break;
            case "Message":
                _translation = "Сообщение"
                break;
            case "Send":
                _translation = "Отправить"
                break;
            case "Home":
                _translation = "Главная"
                break;
            case "About us":
                _translation = "О нас."
                break;
            case "Overview":
                _translation = "Обзор"
                break;
            case "Legal acts":
                _translation = "Правовые акты"
                break;
            case "Association documents":
                _translation = "Документы ассоциации"
                break;
            case "Certificates":
                _translation = "Сертификаты"
                break;
            case "Useful links":
                _translation = "Полезные ссылки"
                break;

            default:
                break;
        }

    }

    return _translation

}

// Legal acts Association documents Certificates Useful links 
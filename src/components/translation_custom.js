export const changeWordTo = (text, lang) => {

    let _translation = text
    if(lang == "hy-AM"){

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
        
            default:
                break;
        }

    } else if (lang === "ru"){

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
        
            default:
                break;
        }

    }

    return _translation

}
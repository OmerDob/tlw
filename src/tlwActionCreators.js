export function addLanguage(id, shortName, fullName, strings, extraBodyClass = '') {
    return {
        type: 'ADD_LANGUAGE',
        language: {
            id,
            shortName,
            fullName,
            strings,
            extraBodyClass
        }
    };
}

export function changeLanguage(id) {
    return {
        type: 'CHANGE_LANGUAGE',
        to: id
    };
}
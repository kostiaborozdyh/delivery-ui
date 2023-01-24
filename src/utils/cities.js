export const getCitiesByClassName = (className) => {
    const listCity = document.querySelectorAll(`.${className}`)
    return Array.from(listCity)
        .map(edt => edt.value)
        .filter(value => value.trim() !== '')
        .join('|')
}
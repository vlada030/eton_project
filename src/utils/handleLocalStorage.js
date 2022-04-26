export const readFromLocalStorage = (name) => {
    return localStorage.getItem(name)
}

export const saveToLocalStorage = (name, value) => {
    localStorage.setItem(name, value)
}
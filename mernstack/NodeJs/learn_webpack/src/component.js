export default (text = 'hello, webpack') => {
    const element = document.createElement('h1');
    element.innerHTML = text;
    return element;
}
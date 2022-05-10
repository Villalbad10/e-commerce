export const getData = async (endPoint) => {
    const URL = 'https://store--app.herokuapp.com/';
    
    let res = await fetch(`${URL}${endPoint}`);
    let data = await res.json();

    return data;
}
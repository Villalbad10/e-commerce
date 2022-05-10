export const verCategoria = (arr, cont) => {


    arr.forEach(element => {
        const { id, title, price, description, image } = element;
        cont.innerHTML += `
        <div class="card me-5 mb-4" style="width: 18rem;">
            <img id="${id}" style="width: 260px; height: 290px;" src="${image}" class="card-img-top ver" alt="...">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <a id="${id}" class="btn btn-outline-primary ver">$ ${price}</a>
            </div>
        </div>
        `
    });
}
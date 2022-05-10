export const postData = (endPoint, objeto) => {
    fetch(`https://store--app.herokuapp.com/${endPoint}`, {
        method: 'POST',
        body: JSON.stringify(objeto),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(res => res.json())
        .then(() => {
            toastr.success('Producto agregado');
            setTimeout(() => {
                window.location.reload();
            }, "1000")
        });
}
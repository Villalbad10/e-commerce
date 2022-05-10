export const deleteData = (endPoint, id) => {
    fetch(`https://store--app.herokuapp.com/${endPoint}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(() => {
        // console.log('Elemento eliminado');
        toastr.error('Producto eliminado');
        // window.location.reload();
        setTimeout(() => {
            window.location.reload();
        }, "1000")
    })
}
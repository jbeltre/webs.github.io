const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
const item = document.getElementById("product");
fetch(`https://fakestoreapi.com/products/${id}`)
.then(res=>res.json())
.then(products => { 
    const title= products.title;
    const description = products.description;
    const image = products.image;

    item.innerHTML=`
    <img class="camisa__imagen" src="${image}" alt="${title || "IMG Producto"}">

    <div class="camisa__contenido">
        <p>${description}
        </p>
        <form class="formulario">
            <select class="formulario__campo">
                <option disabled selected>-- Seleccionar talla -- </option>
                <option value="Peq">Pequeña</option>
                <option value="Med">Mediana</option>
                <option value="Gra">Grande</option>
            </select>
            <input class="formulario__campo" type="number" placeholder="Cantidad" min="1">
            <input class="formulario__submit" type="submit" value="Agregar al Carrito">
        </form>
    </div>`;
})
.catch(err => console.log(err.message))
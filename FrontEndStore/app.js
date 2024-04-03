

function showItems(){
    const productos = document.getElementById("productos");

    fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(products => {
                for(const product in products){
                    const item = document.createElement("div");
                    item.classList.add("producto");
                    const title = products[product].title;
                    const image = products[product].image;
                    const prices = products[product].price;
                    
                    item.innerHTML=`
                    <a href="producto.html?id=${products[product].id}">
                        <img class="producto__imagen" src="${image}" alt="${title || "IMG Camisa"}">
                        <div class="producto__informacion">
                            <p class="producto__nombre">${title}</p>
                            <p class="producto__precio">$${prices}</p>
                        </div>
                    </a>`;
                    console.log(item)
                    productos.appendChild(item);
                }
                
                //console.log(products[0]);
                
            })
}


showItems();
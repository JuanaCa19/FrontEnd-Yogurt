"use strict"

const urlApi = "http://localhost:8081/api";

async function cargarYogurts(){
    let response = await fetch(`${urlApi}/yogurt/findAll`);

    let yogurt = await response.json();

    console.log(yogurt)

    const divTarjetas = document.getElementById('products__grid');

    let html="";
    for (let i = 0; i < yogurt.length; i++) {
        
        if(!yogurt[i].activo) continue;
        
        html += `
            <div class="product-card">
                <div class="product-card__image" style="background-image: url('${yogurt[i].imagenUrl}')"></div>
                <h3  class="product-card__name">${yogurt[i].nombre}</h3>
                <h3 class="product-card__price">$ ${yogurt[i].precio.toLocaleString("es-Co")}</h3>
                <p class="product-card__category">${yogurt[i].categoria}</p>
                <a href="https://wa.me/3113669629?text=Hola,%20 quiero%20comprar%20un%20${yogurt[i].nombre}" class="product-card__button" target="_blank><i class="fab fa-whatsapp"></i> Pedir por WhatsApp</a>
            </div>
    `;
    }
    divTarjetas.innerHTML = html;
}
 cargarYogurts();

const nombres = [
    "Yogurt de Fresa",
    "Yogurt de Mora",
    "Yogurt de Mango",
    "Yogurt de Durazno"
];

const precios = [
    "$10.000",
    "$12.000",
    "$11.000",
    "$10.000"
];

const categorias = [
    "Frutas",
    "Frutas",
    "Frutas",
    "Frutas"
];

const imagenes = [
    "img/fresa.jpg",
    "img/mora.jpg",
    "img/mango.jpg",
    "img/durazno.jpg"
];

const mensajesWhatsapp = [
    "Hola,%20quiero%20comprar%20el%20yogurt%20de%20Fresa",
    "Hola,%20quiero%20comprar%20el%20yogurt%20de%20Mora",
    "Hola,%20quiero%20comprar%20el%20yogurt%20de%20Mango",
    "Hola,%20quiero%20comprar%20el%20yogurt%20de%20Durazno"
];
const divTarjetas = document.getElementById('products__grid');
for(let i=0;i<nombres.length;i++){
    divTarjetas.innerHTML += `
        <div class="product-card">
            <div class="product-card__image img1"></div>
            <h3  class="product-card__name">${nombres[i]}</h3>
            <h3 class="product-card__price">${precios[i]}</h3>
            <p class="product-card__category">${categorias[i]}</p>
            <a href="https://wa.me/3113669629?text=${mensajesWhatsapp[i]}" class="product-card__button"><i class="fab fa-whatsapp"></i> Pedir por WhatsApp</a>
        </div>
`;

}
let divImg =document.getElementsByClassName("product-card__image");
for(let div of divImg){
    div.style.backgroundImage = `url("/descarga.jpg")`;
}
fetch("http://localhost:8081/api/yogurt/findAll")
.then(res => res.json())
    .then(data => {
        let yogurts = data;
    })
console.log(typeof yogurts);
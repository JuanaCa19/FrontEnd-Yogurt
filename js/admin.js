"use strict"
const form = document.querySelector(".product-form__form");
let idYogurtModificar = 0;
class Yogurt{
    id
    constructor(nombre,categoria,precio,imagenUrl,activo,stock){
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.imagenUrl = imagenUrl;
        this.activo = activo;
        this.stock = stock;
    }
}
const aSalir = document.querySelector(".navbar__button");
const divPanel = document.querySelector(".product-form");
const divForm = document.querySelector(".product-form__container");

divPanel.addEventListener("click", (e) => {
    if (e.target === divPanel) {
        form.reset();
        idYogurtModificar = 0;
        ocultarPanelProducto();
    }
})

aSalir.addEventListener("click", () => {
    let respuesta = confirm("¿Estas Seguro de Salir?")
    if (respuesta) {
        window.location.href = "login.html";
        sessionStorage.clear();
    }
});

window.addEventListener("DOMContentLoaded",()=>{
    const item = sessionStorage.getItem("user");
    const user = document.querySelector(".navbar__username");
    if(!(item == user.innerHTML)){
        window.location.href = "/login.html"
    }
})

window.addEventListener("unload",()=>{
    sessionStorage.clear();
})

async function cargarProductos() {
    try {
        const response = await fetch("https://b389-38-252-237-86.ngrok-free.app/api/yogurt/findAll", {
            headers: {
                "ngrok-skip-browser-warning": "true"
            }
        });
        const data = await response.json();

        insertarProductos(data);
        cargarStats(data);
    } catch (error) {
        console.log(error)
    }
}
function insertarProductos(yogurts) {
    const tBody = document.querySelector("#products-body");
    let filas = "";
    for (let i = 0; i < yogurts.length; i++) {
        filas += `
        <tr>
            <td class="products-table__cell products-table__cell--id">${yogurts[i].id}</td>
            <td class="products-table__cell  products-table__cell--name">${yogurts[i].nombre}</td>
            <td class="products-table__cell">${yogurts[i].categoria}</td>
            <td class="products-table__cell products-table__cell--price">$ ${yogurts[i].precio.toLocaleString("es-Co")}</td>
            <td class="products-table__cell">${yogurts[i].stock}</td>
            <td class="products-table__cell products-table__cell--status">
                <span class="${yogurts[i].activo ? 'status--active' : 'status--inactive'}">
                ${yogurts[i].activo ? 'Activo' : 'Inactivo'}
                </span>
            </td>
            <td class="products-table__cell">
                <div class="products-table__actions">
                    <button class="action-btn products-table__button--update" onclick="cargarDatosYogurt(${yogurts[i].id})">
                        <i class="fas fa-pen"></i>
                    </button>
                    <button class="action-btn products-table__button--delete" onclick="elimnarYogurt(${yogurts[i].id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        </tr>
        `
    }
    tBody.innerHTML = filas;
}
function cargarStats(yogurts) {
    const h3Productos = document.querySelector("#total-products");
    const h3ProductosActivos = document.querySelector("#active-products");
    const h3ProductosSinStock = document.querySelector("#out-of-stock-products");

    let productosActivos = 0;
    let productosSinStock = 0;


    for (let i = 0; i < yogurts.length; i++) {

        if (yogurts[i].activo) productosActivos++
        if (yogurts[i].stock == 0) productosSinStock++
    }

    h3Productos.innerHTML = yogurts.length;
    h3ProductosActivos.innerHTML = productosActivos;
    h3ProductosSinStock.innerHTML = productosSinStock;
}
function editar(id) {
    console.log(id);
}
function cargarNombre() {
    const spanNombre = document.querySelector(".navbar__username");
    spanNombre.innerHTML = sessionStorage.getItem("user");
}
function abrirPanelProducto() {
    const divPanel = document.querySelector(".product-form");
    divPanel.style.display = "flex";
}
function ocultarPanelProducto() {
    const divPanel = document.querySelector(".product-form");
    divPanel.style.display = "none";
}
async function elimnarYogurt(idYogurt) {
    if (confirm("¿Desea Eliminar el Yogurt?")) {
        try {
            const response = await fetch(`https://b389-38-252-237-86.ngrok-free.app/api/yogurt/delete/${idYogurt}`, {
                method: "DELETE",
                headers: {
                    "ngrok-skip-browser-warning": "true"
                }
            })
            alert("Yogurt Eliminado")
            cargarProductos();
        } catch (error) {
            console.log(error);
        }
    }
}
form.addEventListener("submit",async (e)=>{
     e.preventDefault();
    let nombre = document.querySelector("#nombre").value;
    let categoria = document.querySelector("#categoria").value;
    let precio = document.querySelector("#precio").value;
    let stock = document.querySelector("#stock").value;
    let estado = document.querySelector("#estado").value;
    let url = document.querySelector("#url").value;

    const yogurt = new Yogurt(nombre,categoria,precio,url,(estado == "Activo")?true:false,stock);
    if(idYogurtModificar != 0){
        yogurt.id = idYogurtModificar;
    }
    await guardarYogurt(yogurt);
    form.reset();
    ocultarPanelProducto();
    await cargarProductos();
    
    if(idYogurtModificar == 0){
        alert(`Nuevo ${nombre} Agregado`);
    }else{
        alert(`${nombre} Actualizado`);
    }
    idYogurtModificar = 0;
})

async function guardarYogurt(yogurt){
    const response = await fetch("https://b389-38-252-237-86.ngrok-free.app/api/yogurt/save", {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
                "ngrok-skip-browser-warning": "true"
            },
            body: JSON.stringify(yogurt)
        });
}
async function buscarPorId(idYogurt){
    try{
        const response = await fetch(`https://b389-38-252-237-86.ngrok-free.app/api/yogurt/findById/${idYogurt}`, {
            headers: {
                "ngrok-skip-browser-warning": "true"
            }
        })
        const data = await response.json();
        return data;
    }catch(error){
        console.log(error);
    }
}
async function cargarDatosYogurt(idYogurt){
    let yogurt = await buscarPorId(idYogurt);
    abrirPanelProducto();

    document.querySelector("#nombre").value = yogurt.nombre;
    document.querySelector("#categoria").value = yogurt.categoria;
    document.querySelector("#precio").value = yogurt.precio;
    document.querySelector("#stock").value = yogurt.stock;
    document.querySelector("#estado").value = (yogurt.activo)?"Activo":"Inactivo";
    document.querySelector("#url").value = yogurt.imagenUrl;
    idYogurtModificar = idYogurt;
}
cargarProductos();
cargarNombre();
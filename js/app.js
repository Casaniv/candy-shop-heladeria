/**
 * Activa a desactiva el menú
 */
function cambiarClase() {
    let siteNav = document.getElementById('site-nav');
    siteNav.classList.toggle('site-nav-open');

    let menuOpen = document.getElementById('menu-toggle');
    menuOpen.classList.toggle('menu-open');
}


const componentsHTML = {
    item: (item) => `
    <div class="product">
        <h2>${item.id}: ${item.producto}</h2>
        <span>${item.tipo}: ${item.precio}</span>
    </div>`,
    userInfo: (user) => `<div>Usuario "${user.name}" con DNI: ${user.dni}</div>`
};

const methods = {
    /** Obtiene un item a partir de su ID
     * @param {Number} id Número que especifica el valor ID en el inventario.
     * @param {Array} inventario Array de items (productos)
     * @returns {Object} Item (producto)
     */
    getItemById: (id, inventario = data.inventario) => inventario.find((item) => item.id == id),
    /** Obtiene un usuario a partir de su DNI
     * @param {Number} DNI Número de documento que identifica a una persona
     * @param {Array} clients Array de usuarios (clientela)
     * @returns {Object} Usuario (cliente)
     */
    getUserByDNI: (DNI, clients = data.clients) => clients.find((user) => user.dni == DNI)
};

var data = {
    inventario: [{}],
    clients: [{}]
};

const stringURLs = {
    inventario: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRxOxuUOBEa_H45AUTOJD8LeRTNgBj4Ac-cr1F6oKlTFw2R25cIa0BIQEdRwO6TTqegxFdxQksEkZNX/pub?gid=0&single=true&output=csv",
    clients: ""
};

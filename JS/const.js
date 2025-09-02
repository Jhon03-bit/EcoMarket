const products = [
    // Frutas 
    { id: 1, name: "Manzana", category: "Frutas", description: "Fresca y orgánica.", price: 1.5, details: "Cultivadas sin pesticidas en huertos locales.", image: "IMG/FRUTAS/manzana.jpg" },
    { id: 4, name: "Plátano", category: "Frutas", description: "Dulce y energético.", price: 1.2, details: "Perfecto para snacks saludables.", image: "IMG/FRUTAS/platano.jpg" },
    { id: 7, name: "Palta", category: "Frutas", description: "Cremosa y saludable.", price: 2.5, details: "Rica en grasas buenas y vitaminas.", image: "IMG/FRUTAS/palta.jpg" },
    { id: 13, name: "Fresas", category: "Frutas", description: "Dulces y refrescantes.", price: 3.2, details: "Perfectas para postres.", image: "IMG/FRUTAS/fresas.jpg" },
    { id: 20, name: "Uvas", category: "Frutas", description: "Dulces y jugosas.", price: 2.9, details: "Perfectas para comer solas o en ensaladas de frutas.", image: "IMG/FRUTAS/uvas.jpg" },
    { id: 23, name: "Higo", category: "Frutas", description: "Dulce y carnoso.", price: 4.5, details: "Delicioso fresco o seco.", image: "IMG/FRUTAS/higo.jpg" },
    { id: 30, name: "Naranja", category: "Frutas", description: "Cítrica y refrescante.", price: 1.1, details: "Excelente fuente de vitamina C.", image: "IMG/FRUTAS/naranja.jpg" },
    { id: 31, name: "Mango", category: "Frutas", description: "Tropical y dulce.", price: 3.8, details: "Ideal para batidos y postres.", image: "IMG/FRUTAS/mango.jpg" },
    { id: 32, name: "Pera", category: "Frutas", description: "Suave y dulce.", price: 1.7, details: "Buena fuente de fibra.", image: "IMG/FRUTAS/pera.jpg" },
    { id: 33, name: "Piña", category: "Frutas", description: "Ácida y tropical.", price: 3.5, details: "Deliciosa a la parrilla o en jugos.", image: "IMG/FRUTAS/piña.jpg" },
    // Verduras 
    { id: 2, name: "Zanahoria", category: "Verduras", description: "Crujiente y nutritiva.", price: 0.9, details: "Proveniente de agricultura responsable.", image: "IMG/VERDURAS/zanahoria.jpg" },
    { id: 5, name: "Brócoli", category: "Verduras", description: "Rico en antioxidantes.", price: 1.8, details: "Ideal para una dieta balanceada.", image: "IMG/VERDURAS/brocoli.jpg" },
    { id: 8, name: "Espinaca", category: "Verduras", description: "Fuente de hierro.", price: 1.4, details: "Ideal para ensaladas y smoothies.", image: "IMG/VERDURAS/espinaca.jpg" },
    { id: 11, name: "Tomate", category: "Verduras", description: "Jugoso y fresco.", price: 1.1, details: "Perfecto para ensaladas.", image: "IMG/VERDURAS/tomate.jpg" },
    { id: 14, name: "Pepino", category: "Verduras", description: "Refrescante y ligero.", price: 1.3, details: "Perfecto para ensaladas.", image: "IMG/VERDURAS/pepino.jpg" },
    { id: 21, name: "Zanahoria Baby", category: "Verduras", description: "Pequeñas y dulces.", price: 1.7, details: "Ideales como snack saludable para niños.", image: "IMG/VERDURAS/zanahoriaB.jpg" },
    { id: 24, name: "Rábanos", category: "Verduras", description: "Picantes y crujientes.", price: 1.2, details: "Ideales para ensaladas o como guarnición.", image: "IMG/VERDURAS/rabano.jpg" },
    { id: 34, name: "Lechuga", category: "Verduras", description: "Crujiente y fresca.", price: 1.0, details: "Base para muchas ensaladas.", image: "IMG/VERDURAS/lechuga.jpg" },
    { id: 35, name: "Pimiento Rojo", category: "Verduras", description: "Dulce y colorido.", price: 2.1, details: "Excelente fuente de vitamina C.", image: "IMG/VERDURAS/pimiento.jpg" },
    { id: 36, name: "Cebolla", category: "Verduras", description: "Sabor fuerte y versátil.", price: 0.7, details: "Fundamental en muchas preparaciones.", image: "IMG/VERDURAS/cebolla.jpg" },
    // Granos 
    { id: 3, name: "Lentejas", category: "Granos", description: "Altas en proteína.", price: 2.0, details: "Ricas en fibra y minerales esenciales.", image: "IMG/GRANOS/lentejas.jpg" },
    { id: 6, name: "Quinoa", category: "Granos", description: "Superalimento nutritivo.", price: 3.5, details: "Libre de gluten y alta en proteína.", image: "IMG/GRANOS/quinua.jpg" },
    { id: 9, name: "Arroz Integral", category: "Granos", description: "Saludable y versátil.", price: 2.8, details: "Perfecto para una dieta balanceada.", image: "IMG/GRANOS/arroz.jpg" },
    { id: 17, name: "Maíz", category: "Granos", description: "Dulce y tierno.", price: 1.0, details: "Perfecto para ensaladas o a la parrilla.", image: "IMG/GRANOS/maiz.jpg" },
    { id: 19, name: "Avena", category: "Granos", description: "Excelente para el desayuno.", price: 2.2, details: "Aporta fibra y energía.", image: "IMG/GRANOS/avena.jpg" },
    { id: 37, name: "Garbanzos", category: "Granos", description: "Ricos en proteína y fibra.", price: 2.5, details: "Ideales para hummus o guisos.", image: "IMG/GRANOS/garbanzo.jpg" },
    { id: 38, name: "Frijoles Negros", category: "Granos", description: "Fuente de proteína vegetal.", price: 1.8, details: "Deliciosos en sopas o como acompañamiento.", image: "IMG/GRANOS/frijolesN.jpg" },
    { id: 39, name: "Cebada", category: "Granos", description: "Nutritiva y con textura.", price: 2.1, details: "Ideal para sopas y ensaladas.", image: "IMG/GRANOS/cebada.jpg" },
    { id: 40, name: "Centeno", category: "Granos", description: "Sabor distintivo.", price: 2.6, details: "Utilizado en panes y galletas.", image: "IMG/GRANOS/centeno.jpg" },
    { id: 41, name: "Trigo Sarraceno", category: "Granos", description: "Sin gluten y nutritivo.", price: 3.0, details: "Ideal para panqueques o ensaladas.", image: "IMG/GRANOS/trigo.jpg" },
    // Tubérculos 
    { id: 10, name: "Camote", category: "Tubérculos", description: "Dulce y nutritivo.", price: 1.6, details: "Ideal para hornear o hervir.", image: "IMG/TUBERCULOS/camote.jpg" },
    { id: 16, name: "Papa", category: "Tubérculos", description: "Versátil y popular.", price: 0.8, details: "Ideal para puré, fritas o al horno.", image: "IMG/TUBERCULOS/papa.jpg" },
    { id: 42, name: "Yuca", category: "Tubérculos", description: "Almidonosa y energética.", price: 1.5, details: "Base de muchos platos tradicionales.", image: "IMG/TUBERCULOS/yuca.jpg" },
    { id: 43, name: "Oca", category: "Tubérculos", description: "Dulce y con textura crujiente.", price: 2.0, details: "Se puede consumir cocida o al horno.", image: "IMG/TUBERCULOS/oca.jpg" },
    { id: 44, name: "Mashua", category: "Tubérculos", description: "Ligeramente picante.", price: 1.8, details: "Tradicional de los Andes.", image: "IMG/TUBERCULOS/mashua.jpg" },
    { id: 45, name: "Manioc", category: "Tubérculos", description: "Similar a la yuca.", price: 1.7, details: "Utilizado en diversas preparaciones.", image: "IMG/TUBERCULOS/manioc.jpg" },
    { id: 46, name: "Taro", category: "Tubérculos", description: "Sabor ligeramente dulce a nuez.", price: 2.2, details: "Popular en muchas cocinas tropicales.", image: "IMG/TUBERCULOS/taro.jpg" },
    { id: 47, name: "Batata", category: "Tubérculos", description: "Similar al camote, pero menos dulce.", price: 1.9, details: "Buena fuente de vitaminas.", image: "IMG/TUBERCULOS/batata.jpg" },
    { id: 48, name: "Topinambur", category: "Tubérculos", description: "Sabor dulce y a nuez.", price: 2.5, details: "Se puede consumir crudo o cocido.", image: "IMG/TUBERCULOS/topinambur.jpg" },
    { id: 49, name: "Jícama", category: "Tubérculos", description: "Crujiente y ligeramente dulce.", price: 1.4, details: "Ideal para ensaladas y snacks.", image: "IMG/TUBERCULOS/jicama.jpg" },
    // Semillas 
    { id: 12, name: "Chía", category: "Semillas", description: "Fuente de Omega-3.", price: 4.0, details: "Ideal para smoothies y postres.", image: "IMG/SEMILLAS/chia.jpg" },
    { id: 22, name: "Linaza", category: "Semillas", description: "Rica en fibra y omega-3.", price: 3.8, details: "Se puede añadir a batidos o yogures.", image: "IMG/SEMILLAS/linaza.jpg" },
    { id: 50, name: "Semillas de Girasol", category: "Semillas", description: "Snack saludable y nutritivo.", price: 2.5, details: "Ricas en vitamina E.", image: "IMG/SEMILLAS/s'girasol.jpg" },
    { id: 51, name: "Semillas de Calabaza", category: "Semillas", description: "Fuente de magnesio.", price: 3.0, details: "Deliciosas tostadas o en ensaladas.", image: "IMG/SEMILLAS/s'calabaza.jpg" },
    { id: 52, name: "Sésamo", category: "Semillas", description: "Sabor a nuez.", price: 4.2, details: "Utilizado en panes y preparaciones orientales.", image: "IMG/SEMILLAS/sesamo.jpg" },
    { id: 53, name: "Amapola", category: "Semillas", description: "Pequeñas y con sabor delicado.", price: 5.0, details: "Usadas en panes y postres.", image: "IMG/SEMILLAS/amapola.jpg" },
    { id: 54, name: "Cáñamo", category: "Semillas", description: "Alta en proteína y omega-3.", price: 6.5, details: "Se puede añadir a batidos o ensaladas.", image: "IMG/SEMILLAS/cañamo.jpg" },
    { id: 55, name: "Amaranto", category: "Semillas", description: "Sin gluten y nutritivo.", price: 3.3, details: "Se puede usar como cereal o harina.", image: "IMG/SEMILLAS/amaranto.jpg" },
    { id: 56, name: "Comino Negro", category: "Semillas", description: "Sabor terroso y ligeramente picante.", price: 4.8, details: "Utilizado en la medicina tradicional.", image: "IMG/SEMILLAS/cominoN.jpg" },
    { id: 57, name: "Mostaza", category: "Semillas", description: "Pequeñas y con sabor picante.", price: 2.8, details: "Base para la mostaza.", image: "IMG/SEMILLAS/mostaza.jpg" },
    // Frutos Secos 
    { id: 15, name: "Nueces", category: "Frutos Secos", description: "Energéticas y crujientes.", price: 5.5, details: "Altas en grasas saludables.", image: "IMG/FRUTO'SECO/nueces.jpg" },
    { id: 18, name: "Almendras", category: "Frutos Secos", description: "Ricas en vitamina E.", price: 6.0, details: "Ideales como snack o en preparaciones.", image: "IMG/FRUTO'SECO/almendra.jpg" },
    { id: 58, name: "Avellanas", category: "Frutos Secos", description: "Sabor dulce y terroso.", price: 7.0, details: "Deliciosas tostadas o en postres.", image: "IMG/FRUTO'SECO/avellanas.jpg" },
    { id: 59, name: "Anacardos", category: "Frutos Secos", description: "Suaves y cremosos.", price: 6.8, details: "Ideales como snack o en platos asiáticos.", image: "IMG/FRUTO'SECO/anacardos.jpg" },
    { id: 60, name: "Pistachos", category: "Frutos Secos", description: "Ligeramente salados y con un color distintivo.", price: 8.0, details: "Deliciosos como snack o en helados.", image: "IMG/FRUTO'SECO/pistachos.jpg" },
    { id: 61, name: "Maní", category: "Frutos Secos", description: "Popular y económico.", price: 3.0, details: "Ideal como snack, mantequilla o en salsas.", image:"IMG/FRUTO'SECO/mani.jpg" },
    { id: 62, name: "Nuez de Brasil", category: "Frutos Secos", description: "Rica en selenio.", price: 9.0, details: "Se consume como snack o en preparaciones.", image: "IMG/FRUTO'SECO/nuecesB.jpg" },
    { id: 63, name: "Macadamia", category: "Frutos Secos", description: "Textura suave y sabor mantecoso.", price: 10.0, details: "Deliciosa como snack o en postres.", image: "IMG/FRUTO'SECO/macadamia.jpg" },
    { id: 64, name: "Pecanas", category: "Frutos Secos", description: "Sabor dulce y mantecoso.", price: 8.5, details: "Ideales en tartas y como snack.", image: "IMG/FRUTO'SECO/pecanas.jpg" },
    { id: 65, name: "Piñones", category: "Frutos Secos", description: "Pequeños y con sabor a resina.", price: 12.0, details: "Ingrediente clave del pesto.", image: "IMG/FRUTO'SECO/piñones.jpg" },
    // Carnes 
    { id: 25, name: "Pechuga de Pollo", category: "Carnes", description: "Baja en grasa y alta en proteína.", price: 8.5, details: "Ideal para asar, hornear o a la plancha.", image: "IMG/CARNES/pechugaP.jpg" },
    { id: 26, name: "Carne de Res Molida", category: "Carnes", description: "Versátil para muchas recetas.", price: 7.0, details: "Perfecta para hamburguesas, salsas o rellenos.", image: "IMG/CARNES/CarneMR.jpg" },
    { id: 27, name: "Filete de Salmón", category: "Carnes", description: "Rico en Omega-3.", price: 12.0, details: "Delicioso al horno, a la parrilla o ahumado.", image: "IMG/CARNES/salmon.jpg" },
    { id: 28, name: "Chuletas de Cerdo", category: "Carnes", description: "Sabrosas y jugosas.", price: 6.0, details: "Ideales para la parrilla o al horno con hierbas.", image: "IMG/CARNES/chuleta.jpg" },
    { id: 29, name: "Pavo Molido", category: "Carnes", description: "Alternativa magra a la carne de res.", price: 7.5, details: "Se puede usar en las mismas recetas que la carne de res molida.", image: "IMG/CARNES/pavo.jpg" },
    { id: 66, name: "Bistec de Res", category: "Carnes", description: "Corte premium y sabroso.", price: 15.0, details: "Ideal a la parrilla o a la sartén.", image: "IMG/CARNES/vistec.jpg" },
    { id: 67, name: "Muslos de Pollo", category: "Carnes", description: "Más sabrosos y jugosos que la pechuga.", price: 6.5, details: "Ideales para guisos o al horno.", image: "IMG/CARNES/muslos.jpg" },
    { id: 68, name: "Atún en Lata", category: "Carnes", description: "Práctico y fuente de proteína.", price: 2.5, details: "Ideal para ensaladas o sándwiches.", image: "IMG/CARNES/atun.jpg" },
    { id: 69, name: "Cordero", category: "Carnes", description: "Sabor intenso y característico.", price: 14.0, details: "Ideal para asar o en guisos.", image: "IMG/CARNES/cordero.jpg" },
    { id: 70, name: "Salchicha", category: "Carnes", description: "Variedad de sabores y tipos.", price: 5.0, details: "Ideal para parrillas o como ingrediente en platos.", image: "IMG/CARNES/salchicha.jpg" },
    // Canes 
    { id: 71, name: "Alimento Seco para Cachorros", category: "Canes", description: "Nutrición completa para cachorros.", price: 25.0, details: "Con vitaminas y minerales esenciales.", image: "IMG/CANES/cachorro.jpg" },
    { id: 72, name: "Alimento Seco para Adultos", category: "Canes", description: "Mantiene a tu perro adulto saludable.", price: 30.0, details: "Equilibrado y fácil de digerir.", image: "IMG/CANES/adultos.jpg" },
    { id: 73, name: "Snacks Dentales para Perros", category: "Canes", description: "Ayuda a mantener sus dientes limpios.", price: 7.5, details: "Deliciosos y efectivos.", image: "IMG/CANES/snackD.jpg" },
    { id: 74, name: "Juguete de Cuerda Resistente", category: "Canes", description: "Ideal para juegos de tirar y aflojar.", price: 12.0, details: "Duradero y seguro.", image: "IMG/CANES/cuerdaP.jpg" },
    { id: 75, name: "Cama Cómoda para Perro", category: "Canes", description: "Un lugar suave para que tu perro descanse.", price: 45.0, details: "Fácil de lavar y confortable.", image: "IMG/CANES/cama.jpg" },
    { id: 76, name: "Correa Resistente para Paseos", category: "Canes", description: "Segura y cómoda para pasear a tu perro.", price: 15.0, details: "Durable y con buen agarre.", image: "IMG/CANES/corea.jpg" },
    { id: 77, name: "Champú Suave para Perros", category: "Canes", description: "Limpia y cuida el pelaje de tu perro.", price: 10.0, details: "Hipoalergénico y con aroma agradable.", image: "IMG/CANES/shanpu.jpg" },
    { id: 78, name: "Plato de Acero Inoxidable", category: "Canes", description: "Higiénico y fácil de limpiar.", price: 8.0, details: "Resistente y duradero.", image: "IMG/CANES/platos.jpg" },
    { id: 79, name: "Bozal Ajustable para Perros", category: "Canes", description: "Para situaciones donde se requiere control.", price: 9.5, details: "Cómodo y seguro de usar.", image: "IMG/CANES/bosal.jpg" },
    { id: 80, name: "Bolsas para Excrementos de Perro", category: "Canes", description: "Esenciales para paseos responsables.", price: 5.0, details: "Biodegradables y fáciles de usar.", image: "IMG/CANES/bolsa.jpg" }
];

const categories = ["Todas", ...new Set(products.map(p => p.category))];

const categoryButtons = document.getElementById("categoryButtons");
const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const cartSidebar = document.getElementById("cartSidebar");
const cartButton = document.querySelector(".cart-icon");
const cartItemsList = document.getElementById("cartItems");
const cartTotalElement = document.getElementById("cartTotal");
const cartItemCountElement = document.getElementById("cart-item-count");
const checkoutBtn = document.getElementById("checkoutBtn");
const paymentModal = document.getElementById("paymentModal");
const closePaymentModal = document.getElementById("closePaymentModal");
const paymentForm = document.getElementById("paymentForm");
const thankYouModal = document.getElementById("thankYouModal");
const closeThankYouModal = document.getElementById("closeThankYouModal");

let selectedCategory = "Todas";
let cart = [];

function updateCartDisplay() {
    cartItemsList.innerHTML = "";
    let total = 0;
    if (cart.length === 0) {
        const li = document.createElement("li");
        li.className = "empty-cart";
        li.textContent = "El carrito está vacío";
        cartItemsList.appendChild(li);
    } else {
        cart.forEach((item, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
            <div class="cart-item-info">
                <span class="cart-item-name">${item.name}</span>
                <span class="cart-item-price">S/ ${item.price.toFixed(2)}</span>
            </div>
            <button class="remove-item-btn" data-index="${index}">×</button>
        `;

            
            cartItemsList.appendChild(li);
            total += item.price;
        });
    }
    cartTotalElement.textContent = `S/ ${total.toFixed(2)}`;
    cartItemCountElement.textContent = cart.length;

    // Event listeners para los botones de remover
    document.querySelectorAll('.remove-item-btn').forEach(button => {
        button.addEventListener('click', function(event) { 
            const indexToRemove = parseInt(this.dataset.index);
            cart.splice(indexToRemove, 1);
            updateCartDisplay();
            event.stopPropagation(); 
        });
    });
}

function renderCategories() {
    const categoryIcons = {
        "Todas": `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" style="margin-right: 0.5rem;"><path d="M3 3h18v2H3V3m0 4h18v2H3V7m0 4h18v2H3v-2m0 4h18v2H3v-2m0 4h18v2H3v-2Z"/></svg>`, // Ejemplo de icono
        "Frutas": `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" style="margin-right: 0.5rem;"><path d="M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z"/></svg>`, // Ejemplo de icono de fruta
        "Verduras": `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" style="margin-right: 0.5rem;"><path d="M5 3v4L3 7l3 2v4L3 13l3 2v4L3 19l3 2h14l2-2v-4l2-2v-4l2-2v-4l2-2H5Z"/></svg>`, // Ejemplo de icono de verdura
        "Granos": `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" style="margin-right: 0.5rem;"><path d="M19 7v8H5V7H3v10h18V7h-2Z"/></svg>`, // Ejemplo de icono de granos
        "Tubérculos": `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" style="margin-right: 0.5rem;"><path d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z"/></svg>`, // Ejemplo de icono de tubérculo
        "Semillas": `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" style="margin-right: 0.5rem;"><path d="M16 17c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2m-6 0c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2m6-4c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2m-6 0c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2M8 7c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2m6 0c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2"/></svg>`, // Ejemplo de icono de semillas
        "Frutos Secos": `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" style="margin-right: 0.5rem;"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4c-3.64 0-6.67 2.59-7.35 6.04C3.11 10.51 1 13.63 1 17c0 3.87 3.13 7 7 7h8c3.87 0 7-3.13 7-7c0-3.37-2.11-6.5-5.65-6.96M13 17h-2v-2h2v2m0-4h-2v-4h2v4Z"/></svg>`, // Ejemplo de icono de frutos secos
        "Carnes": `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" style="margin-right: 0.5rem;"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M14 17H7v-2h7v2m3-4H7v-2h10v2m0-4H7V7h10v2Z"/></svg>`, // Ejemplo de icono de carnes
        "Canes": `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" style="margin-right: 0.5rem;"><path d="M12 2C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74L12 22l3.99-7.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm0 13c-2.21 0-4-1.7.79-4-4s1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4z"/></svg>`, // Ejemplo de icono de canes
    };

    categoryButtons.innerHTML = "";
    categories.forEach(category => {
        const btn = document.createElement("button");
        btn.textContent = category;
        btn.className = selectedCategory === category ? "active" : "";
        if (categoryIcons[category]) {
            btn.innerHTML = categoryIcons[category] + category;
        }
        btn.addEventListener("click", () => {
            selectedCategory = category;
            renderCategories();
            renderProducts();
        });
        categoryButtons.appendChild(btn);
    });
}

function renderProducts() {
    const searchValue = searchInput.value.toLowerCase();
    const filtered = products.filter(product => {
        const matchSearch = product.name.toLowerCase().includes(searchValue);
        const matchCategory = selectedCategory === "Todas" || product.category === selectedCategory;
        return matchSearch && matchCategory;
    });
    productGrid.innerHTML = "";
    filtered.forEach(product => {
        const div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" />
            </div>
            <div class="product-details">
                <h2>${product.name}</h2>
                <p class="product-description">${product.description}</p>
                <p class="product-details-info">${product.details}</p>
                <div class="price-buy">
                    <span class="product-price">S/ ${product.price.toFixed(2)}</span>
                    <div class="product-actions">
                        <button class="buy-btn" data-product-id="${product.id}">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" style="margin-right: 0.5rem;">
                                <path d="M21 16L19 16V6H5V16L3 16V4H21V16Z M12 19C10.34 19 9 20.34 9 22H15C15 20.34 13.66 19 12 19Z" />
                            </svg>
                            Comprar
                        </button>
                    </div>
                </div>
            </div>
        `;
        productGrid.appendChild(div);
    });

    // Event listeners para los botones de comprar
    document.querySelectorAll('.buy-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.dataset.productId);
            const productToAdd = products.find(p => p.id === productId);
            if (productToAdd) {
                cart.push(productToAdd);
                updateCartDisplay();
            }
        });
    });
}

searchInput.addEventListener("input", renderProducts);
cartButton.addEventListener("click", () => {
    if (cartSidebar.classList.contains("open")) {
        cartSidebar.classList.remove("open");
        document.body.style.overflow = '';
    } else {
        cartSidebar.classList.add("open");
        document.body.style.overflow = 'hidden';
    }
});
checkoutBtn.addEventListener("click", () => {
    if (cart.length > 0) {
        paymentModal.style.display = "block"; 
        cartSidebar.classList.remove("open"); 
    } else {
        alert("El carrito está vacío. Agrega productos antes de finalizar la compra.");
    }
});

closePaymentModal.addEventListener("click", () => {
    paymentModal.style.display = "none"; 
});

paymentForm.addEventListener("submit", (event) => {
    event.preventDefault(); 
    // Aquí podrías obtener los datos del formulario (nombre, tarjeta, etc.)
    const formData = new FormData(paymentForm);
    const paymentDetails = {};
    formData.forEach((value, key) => {
        paymentDetails[key] = value;
    });

    console.log("Detalles de pago:", paymentDetails);
    
    paymentModal.style.display = "none"; 
    thankYouModal.style.display = "block"; 
    cart = []; 
    updateCartDisplay(); 
    paymentForm.reset(); 
});

closeThankYouModal.addEventListener("click", () => {
    thankYouModal.style.display = "none"; 
});

window.addEventListener("click", (event) => {
    if (cartSidebar.classList.contains("open") && !event.target.closest('.cart-sidebar') && event.target !== cartButton && !cartButton.contains(event.target)) {
        cartSidebar.classList.remove("open");
    }
    if (event.target == paymentModal) {
        paymentModal.style.display = "none";
    }
    if (event.target == thankYouModal) {
        thankYouModal.style.display = "none";
    }
});

// Asegúrate de que estas funciones se llamen después de que el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    renderCategories();
    renderProducts();
    updateCartDisplay();
});
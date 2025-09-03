# BioMarket - Documentación de Funcionalidades

## Descripción General
BioMarket es una página web de e-commerce dedicada a la venta de productos biológicos y naturales, incluyendo frutas, verduras, granos, tubérculos, semillas, frutos secos, carnes y productos para mascotas (canes). La página está construida con HTML, CSS y JavaScript puro, sin dependencias externas.

## Estructura de Archivos
- `index.html`: Archivo principal HTML que contiene la estructura de la página
- `CSS/Estilo.css`: Hoja de estilos CSS para el diseño y layout
- `JS/const.js`: Archivo JavaScript que contiene la lógica de la aplicación
- `IMG/`: Directorio con todas las imágenes de productos organizadas por categorías

## Funcionalidades Principales

### 1. Visualización de Productos
- **Grid de Productos**: Los productos se muestran en una cuadrícula responsiva
- **Información del Producto**:
  - Imagen del producto
  - Nombre del producto
  - Descripción breve
  - Detalles adicionales
  - Precio en soles peruanos (S/)
- **Categorías Disponibles**:
  - Frutas
  - Verduras
  - Granos
  - Tubérculos
  - Semillas
  - Frutos Secos
  - Carnes
  - Canes (productos para perros)

### 2. Sistema de Categorías
- **Botones de Categoría**: Ubicados en la parte superior de la página
- **Filtrado**: Al hacer clic en una categoría, se muestran solo los productos de esa categoría
- **Categoría "Todas"**: Muestra todos los productos disponibles
- **Iconos**: Cada categoría tiene un icono SVG representativo

### 3. Búsqueda de Productos
- **Campo de Búsqueda**: Input en el header con icono de lupa
- **Búsqueda en Tiempo Real**: Filtra productos mientras se escribe
- **Búsqueda por Nombre**: Busca coincidencias en el nombre del producto
- **Combinación con Categorías**: La búsqueda funciona junto con el filtro de categorías

### 4. Carrito de Compras
- **Icono del Carrito**: En el header, muestra el número de items
- **Sidebar del Carrito**: Panel lateral que se desliza desde la derecha
- **Funciones del Carrito**:
  - Agregar productos al carrito
  - Ver lista de productos en el carrito
  - Eliminar productos individuales
  - Calcular total automáticamente
  - Mostrar precio de cada item

### 5. Proceso de Compra
- **Botón de Finalizar Compra**: Solo disponible si hay productos en el carrito
- **Modal de Pago**: Formulario con campos para:
  - Nombre completo
  - Número de tarjeta (con validación de formato)
  - Fecha de expiración (MM/AA)
  - CVV (3 dígitos)
- **Validación**: Campos requeridos con patrones de validación
- **Envío del Formulario**: Simula el procesamiento del pago
- **Modal de Agradecimiento**: Se muestra después de completar el pago

### 6. Interfaz de Usuario
- **Header**: Contiene título, búsqueda y carrito
- **Diseño Responsivo**: Adaptable a diferentes tamaños de pantalla
- **Animaciones**: Transiciones suaves en botones y elementos interactivos
- **Colores**: Esquema verde ecológico (#2ecc71, #27ae60)
- **Tipografía**: Fuente sans-serif moderna (Segoe UI)

### 7. Funcionalidades JavaScript

#### Variables Globales
- `products`: Array con todos los productos y sus propiedades
- `categories`: Array con todas las categorías disponibles
- `selectedCategory`: Categoría actualmente seleccionada
- `cart`: Array con los productos en el carrito

#### Funciones Principales
- `updateCartDisplay()`: Actualiza la visualización del carrito
- `renderCategories()`: Renderiza los botones de categorías
- `renderProducts()`: Renderiza la cuadrícula de productos con filtros aplicados

#### Event Listeners
- Búsqueda: Actualiza productos en tiempo real
- Clic en categorías: Cambia categoría seleccionada
- Clic en "Comprar": Agrega producto al carrito
- Clic en carrito: Abre/cierra sidebar
- Clic en "Finalizar Compra": Abre modal de pago
- Envío de formulario: Procesa pago y muestra modal de agradecimiento

### 8. Características Técnicas
- **Lenguajes**: HTML5, CSS3, JavaScript ES6+
- **Compatibilidad**: Navegadores modernos con soporte SVG
- **Accesibilidad**: Uso de etiquetas semánticas, alt en imágenes
- **Performance**: Código optimizado, sin librerías externas
- **Mantenibilidad**: Código modular y bien comentado

### 9. Datos de Productos
Cada producto contiene:
- `id`: Identificador único
- `name`: Nombre del producto
- `category`: Categoría a la que pertenece
- `description`: Descripción breve
- `details`: Información adicional
- `price`: Precio en soles
- `image`: Ruta a la imagen del producto

### 10. Estados de la Aplicación
- **Carrito Vacío**: Muestra mensaje "El carrito está vacío"
- **Búsqueda sin Resultados**: La cuadrícula se vacía si no hay coincidencias
- **Modal Abierto**: Los modales bloquean la interacción con el fondo
- **Sidebar Abierto**: Se puede cerrar haciendo clic fuera o en el botón del carrito

## Cómo Usar la Página
1. **Navegar Categorías**: Haz clic en los botones de categoría para filtrar productos
2. **Buscar Productos**: Escribe en el campo de búsqueda para encontrar productos específicos
3. **Agregar al Carrito**: Haz clic en "Comprar" en cualquier producto
4. **Ver Carrito**: Haz clic en el icono del carrito para ver tus productos
5. **Eliminar Productos**: Usa el botón "×" junto a cada producto en el carrito
6. **Finalizar Compra**: Haz clic en "Finalizar Compra" cuando estés listo
7. **Completar Pago**: Llena el formulario de pago y confirma

## Notas de Desarrollo
- El código JavaScript está contenido en un solo archivo para simplicidad
- Las imágenes están organizadas por categorías en el directorio IMG/
- El diseño es completamente responsivo con media queries
- No se requieren dependencias externas ni servidor backend para el funcionamiento básico

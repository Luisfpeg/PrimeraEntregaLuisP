
// Crear una nueva instancia de ProductManager
const productManager = new ProductManager();

// Obtenga la lista inicial de productos (debe estar vacía)
console.log(productManager.getProducts()); // []

// Agregar un producto
productManager.addProduct({
title: 'Producto prueba',
description: 'Este es un producto de prueba',
price: 200,
thumbnail: 'Sin imagen',
code: 'abc123',
stock: 25
});


// Obtenga la lista actualizada de productos (debe contener el nuevo producto)
console.log(productManager.getProducts());

// Obtenga un producto por id (debería devolver el producto)
const productById = productManager.getProductById(1);
console.log(productById);

// Intente obtener un producto con una identificación no válida (debe arrojar un error)
try {
console.log(productManager.getProductById(999));
} catch (e) {
console.log(e.message); // No encontrado
Buscar
}

// Actualizar el stock de un producto (debe devolver verdadero)
const updateStock = productManager.updateStock('abc123', 10);
console.log(updateStock);
console.log(productManager.getProductByCode('abc123'));


// Intente actualizar la identificación de un producto (no debe cambiar la identificación)
const updateId = productManager.updateStock('abc123', { id: 2, stock: 15 });
console.log(updateId);
console.log(productManager.getProductByCode('abc123'));

// Eliminar un producto por código (debe devolver verdadero)
const deleteProduct = productManager.removeProductByCode('abc123');
console.log(deleteProduct);
console.log(productManager.getProducts());

// Intenta eliminar un producto no válido (debe devolver falso)
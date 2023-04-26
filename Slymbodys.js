class ProductManager {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    // Generar una identificación única
    let id = 1;
    while (this.products.some((p) => p.id === id)) {
      id++;
    }
    product.id = id;

    // Comprobar si el código ya existe
    if (this.products.some((p) => p.code === product.code)) {
      throw new Error('Code already exists');
    }

    this.products.push(product);
  }

  getProductByCode(code) {
    const product = this.products.find((p) => p.code === code);
    if (!product) {
      console.log('Not found');
    }
    return product;
  }

  getProductById(id) {
    const product = this.products.find((p) => p.id === id);
    if (!product) {
      throw new Error('Not found');
    }
    return product;
  }

  updateStock(code, newStock) {
    const product = this.getProductByCode(code);
    if (!product) {
      return false;
    }
    product.stock = newStock;
    return true;
  }

  removeProductByCode(code) {
    const index = this.products.findIndex((p) => p.code === code);
    if (index === -1) {
      return false;
    }
    this.products.splice(index, 1);
    return true;
  }

  getProductsByPriceAsc() {
    return this.products.slice().sort((a, b) => a.price - b.price);
  }

  getProducts() {
    return this.products;
  }
}

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

// Intente agregar el mismo producto nuevamente (debería arrojar un error)
try {
  productManager.addProduct({
    title: 'Producto prueba',
    description: 'Este es un producto de prueba',
    price: 200,
    thumbnail: 'Sin imagen',
    code: 'abc123',
    stock: 25
  });
} catch (e) {
  console.log(e.message); 
  // El código ya existe
}
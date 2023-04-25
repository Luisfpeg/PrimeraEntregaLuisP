class ProductManager {
  constructor() {
    this.products = []; // arreglo vacío para almacenar los productos
    this.productIdCounter = 1; // contador para asignar un id autoincrementable a cada producto
  }

  // método para agregar un nuevo producto al arreglo
  addProduct(title, description, price, thumbnail, code, stock) {
    // validar que todos los campos sean obligatorios
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      throw new Error('Todos los campos son obligatorios');
    }
    // validar que no se repita el campo "code"
    if (this.products.some(product => product.code === code)) {
      throw new Error('Ya existe un producto con ese código identificador');
    }
    // crear un nuevo producto con un id autoincrementable y agregarlo al arreglo
    const newProduct = { id: this.productIdCounter++, title, description, price, thumbnail, code, stock };
    this.products.push(newProduct);
    return newProduct;
  }

  // método para buscar un producto por su código identificador
  findProduct(code) {
    return this.products.find(product => product.code === code);
  }

  // método para actualizar el stock de un producto
  updateStock(code, newStock) {
    const product = this.findProduct(code);
    if (product) {
      product.stock = newStock;
      return true;
    }
    return false;
  }

  // método para eliminar un producto del arreglo
  removeProduct(code) {
    const index = this.products.findIndex(product => product.code === code);
    if (index !== -1) {
      this.products.splice(index, 1);
      return true;
    }
    return false;
  }

  // método para devolver el arreglo con todos los productos creados hasta ese momento
  getProducts() {
    return this.products;
  }

  // método para buscar un producto por su id
  getProductById(id) {
    const product = this.products.find(product => product.id === id);
    if (product) {
      return product;
    }
    console.error('Not found');
    return null;
  }
}
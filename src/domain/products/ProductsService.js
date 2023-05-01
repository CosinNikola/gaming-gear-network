import ProductsGateway from "./ProductsGateway";

export default class ProductsService{
    static getAllProducts(){
        return new ProductsGateway().getAllProducts();
    }
    static getOneProduct(id){
        return new ProductsGateway().getOneProduct(id);
    }
}
import ApiClient from "../../utils/http/ApiClient";

export default class ProductsGateway{
    async getAllProducts(){
        let data = await ApiClient.get('/products');
        return data.data;
    }
    async getOneProduct(id){
        let data = await ApiClient.get(`/products/${id}`);
        return data.data;
    }
}
import ApiClient from "../../utils/http/ApiClient";

export default class MousepadsGateway{
    async getAllMousepads(){
        let data = await ApiClient.get('/mousepads');
        return data.data;
    }
    async getOneMousepad(id){
        let data = await ApiClient.get(`/mousepads/${id}`);
        return data.data;
    }
}
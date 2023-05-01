import ApiClient from "../../utils/http/ApiClient";

export default class KeyboardsGateway{
    async getAllKeyboards(){
        let data = await ApiClient.get('/keyboards');
        return data.data;
    }
    async getOneKeyboard(id){
        let data = await ApiClient.get(`/keyboards/${id}`);
        return data.data;
    }
}
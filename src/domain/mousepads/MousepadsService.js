import MousepadsGateway from "./MousepadsGateway";

export default class MousepadsService{
    static getAllMousepads(){
        return new MousepadsGateway().getAllMousepads();
    }
    static getOneMousepad(id){
        return new MousepadsGateway().getOneMousepad(id);
    }
}
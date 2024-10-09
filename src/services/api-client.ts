import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/games',
    params: {
        key: 'b66880cc2f79403ab7684e3593cfe0a5'
    }
})
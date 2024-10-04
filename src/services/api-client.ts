import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '4c73ca41b12b4a4885f0081ca879cf3f'
    }
})

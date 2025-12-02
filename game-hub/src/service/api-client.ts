
import axios, { CanceledError } from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '586ea90590374b62ab0f4ac1c15155ed'
    }
})
export { CanceledError};
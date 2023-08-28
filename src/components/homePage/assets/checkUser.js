let API_URL = process.env.REACT_APP_API_URL;
let API_KEY = process.env.REACT_APP_API_KEY;

export const checkUser = async (username) => {
    try {
        const response = await fetch(`${API_URL}?username=${username}`, {
            headers: {"x-api-key": API_KEY,
            "Content-Type": "application/json"}
        })
        const data = await response.json()
        return [null, data]
    } catch (error) {
        return [error.message, null]
    }   
}


import {createHeaders} from './index'
const apiUrl = process.env.REACT_APP_API_URL

async function checkForUser (username) {
    
    try {
        const response = await fetch(`${apiUrl}?username=${username}`)
        if(!(response).ok){
            throw new Error('Could not complete request')
        }
        const data = await response.json()
        return [null,data]
    } catch (error) {
        return [error.message,null]
    }
}

const createUser = async (username,password) => {
    try {
        const response = await fetch(apiUrl,{
            method: 'POST',
            headers: createHeaders(),
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        if(!(response).ok){
            throw new Error('Could not create user with username ' + username)
        }
        const data = await response.json()
        return [null,data]
    } catch (error) {
        return [error.message,[]]
    }
}

export const loginUser = async (username,password) => {
    const [checkError,user] = await checkForUser(username)
    
    if(checkError !== null){
        return [ checkError, null]
    } 

    /*if(user === 'undefined'){*/
    console.log(username.length)
    return await createUser(username,password)
    //}
    /*
    if (user !== 'undefined'){//username.length > 0){
        return [null,user.pop()]
    }  
    */
    
}

import { createHeaders } from './index';

const apiUrl = process.env.REACT_APP_API_URL;

async function checkForUser(username) {
    const response = await fetch(`${apiUrl}?username=${username}`);
    
    if (!response.ok) {
        throw new Error('Could not complete request');
    }
    
    const data = await response.json();

    // If the result is an empty array, return null
    if (Array.isArray(data) && data.length === 0) {
        return null;
    }
    
    return data;
}

const createUser = async (username) => {
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: createHeaders(),
        body: JSON.stringify({ username })
    });

    if (!response.ok) {
        throw new Error('Could not create user with username ' + username);
    }

    return await response.json();
}

export const loginUser = async (username) => {
    try {
        const user = await checkForUser(username);

        // If user is not found (i.e., checkForUser returned null)
        if (!user) {
            prompt("The user does not exist. Please create a new user")
            return [null, await createUser(username)];
        }

        return [null, user];
    } catch (error) {
        console.error(error.message);
        return [error, null];
    }
}


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
        const users = await checkForUser(username);

        // If user is not found (i.e., checkForUser returned an empty array)
        if (!users || users.length === 0) {
            let newusername = prompt("The user does not exist. Please create a new user");
            if(newusername === null){
                return [null, null];
            } else {
                const newUser = await createUser(newusername);
                return [null, { ...newUser, newUserCreated: true }];  // Add a flag to the returned user
            }
        }

        return [null, users[0]];
    } catch (error) {
        console.error(error.message);
        return [error, null];
    }
}





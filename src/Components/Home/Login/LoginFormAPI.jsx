

export const createHeaders = () => {
    const apiKey = process.env.REACT_APP_API_KEY
    return {
        'Content-Type': 'application/json',
        'x-api-key': apiKey
    }
}



// Definding the loginUser function.

// This function will check if the user exists in the database.
// If the user does not exsits, the function will return an empty array. 
export const checkForUser = async username => {
    const apiUrl = process.env.REACT_APP_API_URL;
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

// Defining the createUser function.
// This function will create a new user in the database.
export const createUser = async (username) => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: createHeaders(),
        body: JSON.stringify({ 
            username: username,
            translations: []
         })
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
        // we want a dialog pop-up to ask the user "Do you want create a new user,
        // or do you want to login with a different user".
        if (!users || users.length === 0) {
/*            let response = confirm("The user does not exist. Do you want to create a new user?");

            if(!response){
                //return [null, null];
            }else if(response){}
*/
            let newusername = prompt("The user does not exist. Please create a new user");
            if(newusername === null){
                return null;//return [null, null];
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
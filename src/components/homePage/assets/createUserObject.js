  
  // Function to pass the body to the API to create a user object
  
  export const createUserObject = (username) => {
    return {
      username: username,
      translations: [],
    };
  };
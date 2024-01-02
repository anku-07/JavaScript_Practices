/*
Create a function that generates a random alphanumeric string of a given length.
*/
function generateRandomString(length) {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomString = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      randomString += charset[randomIndex];
    }
  
    return randomString;
  }
  
  // Example usage:
  const length = 10;
  const randomAlphanumericString = generateRandomString(length);
  console.log(randomAlphanumericString); 
  
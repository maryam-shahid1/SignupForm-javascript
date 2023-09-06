# Signup Form with JavaScript Validation  

This project is a simple signup form with JavaScript validation. It validates user input for the username, email, and password fields to ensure they meet certain criteria. The form also uses Webpack for bundling the JavaScript code.  

## Prerequisites  
Before you begin, ensure you have met the following requirements:  

- [Node.js](https://nodejs.org/) installed on your local machine.  

## Installation  
1. Clone the repository to your local machine:  
```sh
git clone https://github.com/your-username/signup-form-validation.git
```
2. Change to the project's directory:  
```sh
cd signup-form-validation
```
3. Install the project dependencies using npm:  
```sh
npm install
```

## Usage
1. Open the `index.html` file in a web browser to access the signup form.  

2. Fill in the form fields (username, email, password).  

3. JavaScript validation will check the input for the following criteria:  
- Username: Between 2 and 20 characters, containing only letters, numbers, underscores, and periods.  
- Password: Between 8 and 15 characters, containing only letters, numbers, and special characters.  
- Email: A valid email address.  

4. If the input meets the criteria, a successful registration alert will be displayed.  

To build the app using Webpack, run the following command:  
```sh
npx webpack  
```  
  

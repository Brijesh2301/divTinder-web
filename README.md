# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# DevTinder

- Create  a Vite  + React application
- Remove unecessary code and create a Hello World app
- Install Tailwond CSS
- Install Daisy UI
- Add to Navbar component to APP.jsx
- Create a navbar.jsx separeate Coponent APIs
- install React-router-dom 
- Create BrowserRouter> Routes> Route = / > RouteChildren
- Create and Outlet in Your Body Component
- Create a footer
- Create a Login Page
- Intall axios
- Cors - install cores in backend => add middleware to with cionfiguration and confediatal : True  
- Install Redux toolkit
- install react-redux +@reduxjs/toolkit =>  configureStore => Provider => createSlice => add reduce to store
- configureStore => Provider => CreateSlice => add reducer to store
- Add redux devtools in chrome
- Login and see if your data is coming properly in the store
- NavBar Update should as user login
- Refactor our codes to add constant file  + create  a componenets folder
- You should not be acess other routes without login
- if token is not present , redirect  user to login page
- logout features 
- Get the feed and  add the feed in the store
- build the user card
- Edit Profile Feature
- After Update Profile show the success Toast


 
 Body
  Navbar
  Route=/ => feed
  Route=/login => Login
  Route=/connections => connections 
  Route=/ pr


  #Deployment
- Signup on AWS
- Launch instance
- chmod 400  <secret>.pem
- ssh -i "devTinder-secret.pem" ssh -i "devTinder-secret.pem" ubuntu@ec2-13-201-171-81.ap-south-1.compute.amazonaws.com
- install node version using nvm install 22.20.0
- Git clone
- install depenecny using npm install this will install the dependency

- Front-end
  -  npm instll 
  - npm run build
  - sudo apt update
  - sudo apt install nginx
  - sudo systemctl start nginx
  - sudo systnctl enable nginx
  - Copy code from dist(build files) to /var/www/html/
  - sudo scp -r dist /* (build files) to /var/www/html/
  - Enable port :80 or your instance



# Backend Deployment Steps
 - allowed ec2 instance public IP on mongodb server
 - npm install pm2 -g
 - pm2 start npm -- start
 - pm2 logs // for checking the status of runnig or not
 - pm2 list , pm2 flush <name> , pm2 stop , pm delete

    frontend = http://13.201.171.81/
    Backend = http://13.201.171.81:3000/

    Domain name = devtinder.com  => http://13.201.171.81
    
/*
						React 18 Application
1. Install Node JS
2. Install Visual Studio Code
3. Open any PC location in command prompt

		F:\> npx  create-react-app   react-shopping-app

Note: NPX uses "Webpack" bundler for creating a react application with Javascript.
	
4. Open the folder  "F:\react-shopping-app" in visual studio code

5. To start react application, open terminal and run the command

			> npm  start

6. React application starts on  "http://127.0.0.1:3000"

React 18 File System:

	File / Folder				Description
	----------------------------------------------------------------------------------------------------
	node_modules			It comprises of all library files installed with npm.
	public					It comprises of static resources.
	src						It comprises of dynamic resources.
	.gitignore					It configures the repository to ignore while publishing
							on GIT.
	package.json				It comprises of project meta data.
	package.lock.json			It comprises of library meta data.
	README.md				It is help document provided for developers.

FAQ: What is "npm start"?
Ans:  It is a batch program used to start react scripts and run react application on local server.
		
FAQ: What is in npm start?
Ans :  It comprises of commands related to react script and start.

		"start"  : "react-scripts start"

	  [ package.json \ scripts ]


React Startup Flow:
1. React application comprises of a component  called "App", which is designed in "App.js"

			function  App()
			{
			  return (<JSX> </JSX>);
			}

2. React container "index.js" that imports the App component and renders into virtual DOM of "index.html"

 a) React upto 17 version

		import   { App  }   from   "app";

		ReactDOM.render(<App /> , document.getElementById("root"));

b) React 18x version

		import  { App } from  "app";

		const  root = createRoot(document.getElementById("root"));

		root.render(<App />)


Note: It is always good to run startup component with strict mode ON. It reduces the
	  code inconsistancy.

	  root.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>
		)

Creating a new Component for React App: 
1. Go to "src" folder and add a folder by name "components".

2. Add a new folder for your component 
		"login"
    - Every component folder may have 3 files
		a) .jsx
		b) .css
		c) .test.js

3. Add following files into login folder

		a) login.jsx
		b) login.css

4. Go to login.css

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
.form-login {
    border:1px solid black;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 2px 2px 2px gray;
}

5. Go to login.jsx

import './login.css';

export function Login()
{
    return(
        <div className="container">
            <form className='form-login'>
                <h3>User Login</h3>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" /></dd>
                    <dt>Password</dt>
                    <dd><input type="password"/></dd>
                </dl>
                <button>Login</button>
            </form>
        </div>
    )
}

6. Go to index.js

import { Login } from './components/login/login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);


*/
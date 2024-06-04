/*
					         React Components
- A component is like a template with presentation, styles and functionality.

		a) Presentation
		b) Styles
		c) Functionality

- Presentation is created by using Markup.
- Styles are defined by using CSS.
- Functionality is defined by using Javascript or Typescript.
- Component is created by using 

		a) JavaScript Function
		b) JavaScript Class

Function Concepts:
- Function Declaration
- Function Expression
- Function Parameters
- Rest & Spread approach
- Anonymous Functions
- IIFE Pattern
- Function with return
- Function Closure
- Function Callback
- Function Promises
- Async Functions
- Function Generator

React Function Component Rules:
1. Every function component name must start with uppercase letter.

		function  Login()
		{
		}

2. Function component must return JSX element. [JavaScript Extention]
3. Function component can't be void.

		function  Login()
		{
		   return (<> JSX Element </>);
		}
4. JSX is same as HTML but have following rules to configure

		a) JSX must return only one fragment as markup.

				function  Login()
				{
				     return(
					      <div>
						 ...your markup...
					      </div>
					      );
				}

		b) JSX will not allow void elements. Every element must have end token.

				<img>			// invalid
				<img> </img>		// valid
				<img />			// valid

		c) JSX can't use attributes, you have to define only properties.

				<img class="">		// invalid
				<img className="">	// valid
				<img src="">			// valid

5. Components are accessed and used in application as JSX elements.

				<Login>  </Login>
				<Login />

Ex:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <script src="../node_modules/react/umd/react.development.js"></script>
    <script src="../node_modules/react-dom/umd/react-dom.development.js"></script>
    <script src="../node_modules/@babel/standalone/babel.js"></script>
    <script type="text/babel">

            function Login()
            {
                return(
                   <main> 
                      <h2>Login</h2> 
                      <dl>
                         <dt>User Name</dt> 
                         <dd><input type="text" /></dd>
                         <dt>Password</dt> 
                         <dd><input type="password"/> </dd>
                      </dl>
                  </main>
                )
            }

            ReactDOM.render( <div> <Login /> <Login/> </div> , document.getElementById("root"));
    </script>
</head>
<body>
    <noscript> Please enable javascript on your browser </noscript>
    <div id="root"></div>
</body>
</html>
		
Ex: Netflix Design

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Netflix | Watch Movies</title>
    <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.css">
    <link rel="stylesheet" href="../node_modules/bootstrap-icons/font/bootstrap-icons.css">

    <style type="text/css">
         body {
             background-size: cover;
         }
         #root {
            background-color: rgba(0,0,0,0.6);
            height: 100vh;
         }
         .brand-name {
            text-shadow: 2px 2px 2px white;
         }
         section {
            text-align: center;
            color:white;
            margin-top: 100px;
         }
         .section-title {
             font-family: Arial;
             font-size: 50px;
             font-weight: bold;
         }
         .section-subtitle {
            font-family: Arial;
            font-size: 20px;
            margin-top: 10px;
            margin-bottom: 20px;
         }
    </style>

    <script src="../node_modules/react/umd/react.development.js"></script>
    <script src="../node_modules/react-dom/umd/react-dom.development.js"></script>
    <script src="../node_modules/@babel/standalone/babel.js"></script>
    <script type="text/babel">
          function NetflixIndex(){
               return(
                 <div>
                      <NetflixHeader />
                      <NetflixSection />
                 </div>
               )
          }

          function NetflixHeader(){
              return(
                <header className="p-4 d-flex justify-content-between">
                    <div className="text-danger h1 brand-name"> NETFLIX </div>
                    <div>
                        <div className="input-group">
                            <span className="bi bi-translate input-group-text"></span> 
                            <select class="form-select"> 
                                <option>Language</option>
                                <option>English</option> 
                                <option>हिंदी</option>
                            </select>
                            <button className="btn btn-danger ms-2">Sigin</button>
                        </div>
                    </div>
                </header>
              )
          }

          function NetflixSection(){
             return(
                <section className="d-flex justify-content-center">
                    <div className="w-50">
                        <div className="section-title">Unlimited movies, TV shows and more</div>
                        <div className="section-subtitle"> Starts at ₹149. Cancel anytime. </div>
                        <div>
                            <NetflixMain />
                        </div>
                    </div>
                </section>
             )
          }

          function NetflixMain(){
               return(
                <main>
                   <p>Ready to watch? Enter your email to create or restart your membership.</p>
                   <form className="input-group input-group-lg">
                      <input type="email" className="form-control" />
                      <button className="btn btn-danger"> Get Started <span className="bi bi-chevron-right"></span> </button>
                   </form>
               </main>
               )
          }

         ReactDOM.render(<NetflixIndex />, document.getElementById("root"));
    </script>
</head>
<body background="./images/netflix-banner.jpg">
    <noscript> Please enable Javascript </noscript>
    <div id="root"></div>
</body>
</html>


Create a new React 18x Application

*/
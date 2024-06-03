
/*
Summary
- What is React?
- Features of React
- Issues with React
- How to setup environment for React?
- How to use react in exisiting web application using CDN links?

How to use react in existing web application with offline library?
1. Install Node JS
2. Install Visual Studio Code

Process:
1. Create a new folder for your project

			E:\react-netflix

2. Open folder location in "Visual Studio Code"

3. Open Terminal [command prompt]   Ctrl + `  

4. Run the following command

			> npm   init   -y		[ package.json ]

5. Add File System

		a) Add a new file by name  "README.md"
		b) Add folders
				- public		it contains static resources.
							[html, images, docs, audio, video]

				- src			it container dynamic resources
							[css, scss, less, js, ts, jsx, tsx..]
		c) Add startup page in public folder
				- index.html


6.  React JS requires following libraries to install in project

		a) React
		b) React-DOM
		c) Babel

		> npm  install  react  --save
		> npm  install  react-dom  --save
		> npm  install  @babel/standalone --save

Note: All library files are copied into a folder called "node_modules".
	 The library files required for React will be in "UMD", which is a module system
	 for Javascript.

		a) Common JS [CJS]
		b) UMD [Universal Module Distribution]
		c) AMD [Asynchronous Module Distribution]
		etc..

7. To enable React in a page you have to link following script files
		
		a) react.development.js				[umd]
		b) react-dom.development.js			[umd]
		c) babel.js						[@babel]

8. To enable bootstrap in a project you have to install following libraries
		
		>npm  i bootstrap   bootstrap-icons  --save


Ex:
index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Netflix | Index</title>
    <link rel="stylesheet" href="../node_modules/bootstrap-icons/font/bootstrap-icons.css">
    <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.css">
    <style>
        body {
            background-image: url("images/netflix-banner.jpg");
            background-size: cover;
            color:white;
        }
        .shade {
            background-color: rgba(0,0,0,0.7);
            height: 100vh;
        }
    </style>
    <script src="../node_modules/react/umd/react.development.js"></script>
    <script src="../node_modules/react-dom/umd/react-dom.development.js"></script>
    <script src="../node_modules/@babel/standalone/babel.js"></script>
    <script type="text/babel">
        function Header(){
            return(
                <header class="p-4 d-flex justify-content-between">
                    <div class="h3 text-danger">NETFLIX</div>
                    <div class="d-flex">
                        <div class="input-group">
                            <span class="bi bi-translate input-group-text"></span>
                            <select class="form-select">
                            <option>English</option>    
                            </select>
                        </div>
                        <button class="btn btn-danger ms-2">Signin</button>
                    </div>    
                </header>
            )
        }

        function NetflixSection(){
            return(
                <div class="text-center">
                    <div class="h1 mt-4">Unlimited movies, TV shows and more</div>
                    <div class="h2 mt-4">Starts at ₹149. Cancel anytime.</div>
                    <NeflixMain />
                </div>
            )
        }

        function NeflixMain(){
            return(
                <form class="w-50">
                    <p> Ready to watch? Enter your email to create or restart your membership. </p>
                    <div class="input-group input-group-lg">
                        <input type="email" placeholder="Your email address" class="form-control" /> <button class=" ms-2 btn btn-danger"> Get Started <span class="bi bi-chevron-right"></span> </button>
                    </div>
                </form>
            )
        }

        function NetflixIndex(){
            return(
                <div>
                    <Header> </Header>
                    <NetflixSection> </NetflixSection>
                </div>
            )
        }

        ReactDOM.render(<NetflixIndex></NetflixIndex>, document.getElementById("root"));
    </script>
</head>
<body>
    <div class="shade">
        <noscript>Please enable Javascript on your browser.</noscript>
    <div id="root"></div>
    </div>
</body>
</html>

*/

/*


- Most common versions of React 
	      <16 React   		Legacy
		React 17x, 18x 
- Current Active react version is 18x.

	https://legacy.reactjs.org/		for developers using versions upto 16
	https://react.dev/				for developers using version 17x, 18x

Setup Environment for React:

1. Download and Install NodeJS on your PC
	
		https://nodejs.org/en     => 20.11x  LTS

     - We are install Node JS for a package manager called NPM.
     - You can also use package managers like
		yarn
		bower
		grunt
		growl
		rubyGems
		composer
		nuget etc..
	- Package manager is a tool used by developer to install, update or uninstall any
	  library in project.
	- After installing check the version from command prompt

		C:\> node  -v				16+ 
		C:\> npm  -v				 8+

2. Download and Install Visual Studio Code Editor

	- Editor provides IDE [ Integrated Development Environment ]
	- IDE allows to build, debug, test & deploy.
	
			https://editorconfig.org/
			https://code.visualstudio.com/


Using React in Existing Web Application:

1. Create a new Physical path for your project

		F:\web-app

2. Open Physical path in your VS Code editor and setup web application environment.

		> npm  init  -y					=> generates  "package.json"

		> add new file "README.MD"	=> Help documentation

		> add folders
				a) public				=> for static resources.
									     html, images, docs, video, audio, pdf..
				b) src				=> for dynamic resources.		
									     css, scss, less, js, jsx, ts, tsx ..
3. Create a startup page

		 public / index.html
		 public/  home.html				=> for react 

4. Install "Live Server" extension for VS code to run your project on a local server.

5. Start your project index page on local server

		http://127.0.0.1:5500/public/index.html

6. Add React environment for "home.html" page

  a) <noscript>				It is required to verify Javascript status in browser
  b) < id="root">			It is a container to display react components in page.


7. Include the libraries required for React in page
		a) React Core
		b) React Virtual DOM 
		c) Babel

  - Core library configure React library services.
  - Virtual DOM library is use to create a virtual DOM and synchronize with actual DOM.
  - Babel is a complier used for Javascript apps.

FAQ: How to get the libraries?
Ans 
	a) Get from CDN 
	b) Install using NPM

Note: React 18 disabled CDN integration into application.
          You can get react CDN only for 16x version from Legacy community.

Setup CDN Links:
------------------------
1. Visit 
	https://legacy.reactjs.org/
2. Go to "Docs"
3. CDN Links
4. Copy "Development" CDN links

<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

5. Visit 
	https://babeljs.io/

6. Copy babel/standalone CDN [integration packages]
	
   <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

7. React will not use Javascript, it used JavaScript Extention library [JSX]. Hence you have to embed a script with MIME type as "text/babel" or "text/jsx".

Syntax:
	<script type="text/babel">

	</script>

8. Your script have to create Virtual DOM and render component into DOM.

	ReactDOM.render("component", document.getElementById("root"));
*/
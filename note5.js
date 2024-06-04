/*
Summary
- Creating React 18 Application
- File System
- Basic Flow of React application
	app.js => index.js => index.html
- Adding components in react 18 
- Start react 18 app
	> npm  start

	http://localhost:3000

Enable Bootstrap for React 18 Application:

1. Install following libraries into project

		>npm  install  bootstrap   bootstrap-icons --save

2. Go to "Index.js" in src folder and import bootstrap css and Javascript.

	import  '../node_modules/bootstrap-icons/font/bootstrap-icons.css' ;
	import  '../node_modules/bootstrap/dist/css/bootstrap.css';
	import  *  as  bootstrap from  'bootstrap';

3. You can implement bootstrap & icon classes with jQuery attributes of bootstrap
			  www.getbootstrap.com

		Icons Classes
			.bi bi-person
			.bi bi-house
			.bi bi-chevron-right 
			etc...

		Bootstrap Classes
			alerts, modals, navbar, carousel, buttons, badge, breadcrumb etc..

		Bootstrap JQuery Attributes
			data-bs-target	
			data-bs-toggle
			data-bs-parent 
			data-bs-dismiss
			etc..
Ex:
   login.jsx

import './login.css';

export function Login()
{
    return(
        <div className="container">
            <form className='form-login alert alert-warning alert-dismissible'>
                <h3 className='bi bi-person-fill'> User Login</h3>
                <button data-bs-dismiss="alert" className='btn btn-close'></button>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" className='form-control' /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" className='form-control'/></dd>
                </dl>
                <button className='btn btn-warning w-100'>Login</button>
            </form>
        </div>
    )
}



Ex:
login.jsx

import './login.css';

export function Login()
{
    return(
        <div className="container-fluid">
            <h2>Bootstrap in React</h2>
            <button data-bs-target="#login" data-bs-toggle="modal" className='btn btn-primary'>Login</button>
            <div className='modal fade' id='login'>
                <div className='modal-dialog modal-dialog-centered'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h2>User Login</h2>
                            <button data-bs-dismiss="modal" className='btn btn-close'></button>
                        </div>
                        <div className='modal-body'>
                            <dl>
                                <dt>User Name</dt>
                                <dd><input type="text" className='form-control' /></dd>
                                <dt>Password</dt>
                                <dd><input type="password" className='form-control' / ></dd>
                            </dl>
                        </div>
                        <div className='modal-footer'>
                            <button className='btn btn-primary'>Login</button>
                            <button data-bs-dismiss="modal" className='btn btn-danger'>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Summary
- Creating a component 
- Add bootstrap icons & classes
- Add bootstrap interactions

						       Data Binding
- Data binding is the process of accessing data from source and rendering in the UI.
- It identifies the changes the UI and updates into data source.
- Javascript & jQuery uses lot of DOM methods and events to handle data binding.
- React can manage data binding by using simple data binding expression "{  }"

Syntax:
		var  userName = "John";

		<p> Hello !  <span> { userName } </span> </p>

		<input type="text"  value={userName} />

- JavaScript provides various types of data classified into 
		
		a) Primitive Types
		b) Non Primitive Types

Binding Primitive Types:  [ ES 6 + ]
- The Javascript primitive data types are

		1. number
		2. string
		3. boolean
		4. null
		5. undefined
		6. bigint
		7. symbol

Number Type:
- Javascript number can be any one of the following
		Signed Integer		- 34
		Unsigned Integer		  45
		Floating Point			  34.42
		Double				234.56
		Decimal				2456.66 [29]
		Hexa Decimal			0xf000
		Octa					0o765
		Binary				0b1010
		BigInt				889938384857n
		Exponent				2e3  [ 2 x 10(3) ]    2000

- You can convert the numbers into string format to define various localization styles.

		var  price = 45000.00;

		{ price.toLocaleString() }

		{ price.toLocaleString('en-in', { style: 'currency', currency: 'INR' }) }

- You can convert numeric string into number by using the methods

		a) parseInt()
		b) parseFloat()

		var x = "10";
		parseInt(x);

- Javascript checks the number type by using the method  "isNaN()"
- Javascript E6+ version supports Bigint, which allows to use big integer values safely in expression.

	Syntax:
		  var  n = 8848857721;		// not safe
		  var  n = 8848857721n;		// safe  - bigint


String Type:
- String in Javascript can be defined in 3 ways

		a) Double Quotes		"  "
		b) Single Quotes		'   '
		c) Backtick			`  `

- Double and Single quotes are used to switch between outer and inner strings.
- Backtick allows embedded expression, which is defined by using "${ }"

Syntax:
		var  route = "http://localhost/product";
		var  id = 1;
		
		var path = route + "/" + id;

		var path = `${route}/${id}`;

- Javascript string may escape printing of special characters, you have to print the non-printable characters by using "\".

	        var path= "D:\\images"			=>  D:\images

- All Javascript string manipulations and formats are same in React.

	Formatting Methods
		- toUpperCase()
		- toLowerCase()
		- bold()
		- italics()
		- fontcolor()
		- fontsize()  etc..

	String Manipulation Methods
		- charAt()
		- charCodeAt()
		- indexOf()
		- lastIndexOf()
		- slice()
		- substr()
		- substring()
		- match()
		- etc..

*/
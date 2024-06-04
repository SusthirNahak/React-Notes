/*
Data Binding in React
- Bind Primitive Data Types
	a) Number
	b) String
	
						Boolean Type

- Javascript boolean comprises of "true" and "false".
- React can't display boolean true or false directly in JSX.
- You have to use boolean conditional operator to present boolean types.
- JSX will not allow statements.
- You have to manage everything using operators and methods.

Syntax:
		var stock = true;

		{ (stock===true) ? "Available" : "Out of Stock" }


							  undefined
- It specifies that value is not defined into given reference.
- Compiler sets "undefined" as type for variables that are not  initialized or assigned with values.

Syntax:		
			var price;				// price is undefined

			{  (price) ? price : "Price not defined" }					=> Good code

						(or)

			{  (price===undefined) ? "Price not defined" : price }		=> Bad code

- Undefined is configured by compiler at compile time.

							  Null
- Null is a type configured for variables if value is not defined during runtime of application.
- The keyword "null" is used to verify the null reference.

Syntax:
		var  price = prompt("Enter Price");
	
		{ (price===null) ? "Please provide price" : price }


						        Symbol
- It is a new data type of Javascript available from ES5+ version.
- It is used to configure a hidden "key" for object.
- Hidden keys are not accessible over iteration, but they are available individually for manipulations.

Syntax:
		var  Id = Symbol();

		var product = {
		     [Id] : 1,				=> Id is hidden field
		     Name: "TV",
		     Price: 45000.44
		}

		<input type="hidden">

- You can access all keys using  "Object.keys()" method of Javascript.

		 {
		   Object.keys(product).map(key => <li> { key } </li>)
		 }

		 Product Id = { product[Id] }

Ex:
data-binding.jsx

export function Databinding()
{

    var Id = Symbol();

    var product = {
        [Id]: 1,
        Name: "Samsung TV",
        Price: 45000.44
    }

    return(
        <div className="container-fluid">
            <h2>Data Binding</h2>
            {
                Object.keys(product).map(key=> <li>{key}</li>)
            }
            <h3>Product Id = { product[Id] }</h3>
        </div>
    )
}

Summary:
- number
- string
- boolean
- null
- undefined
- symbol
- bigint

					 Binding Non-Primitive Types

1. Array
- Array configuration is same as in JavaScript.

		var  values = [ ];
		var  values = new Array();

- Array manipulations are also same as in Javascript

		Reading length and values
		-------------------------------------
		length
		toString()
		join()
		slice()
		find()
		filter()
		forEach()
		map()
		
		Add Elements
		--------------------
		push(), unshift(), splice()

		Remove Elements
		-------------------------
		pop(), shift(), splice()

		Sorting Elements
		------------------------
		sort(), reverse()
		etc..
- Configuring array with "spread" operator is same as in Javascript.

Syntax:
		var values = [ "A", "B", "C" ];

		<ol>
		   {
		      values.map(value => <li> { value } </li>)
		   }
		</ol>

Note: Every repeating element in JSX must have a unique key reference.

		{
		 values.map(value => <li key={value}>  {value}  </li>)
		}

Ex:
data-binding.jsx



export function Databinding()
{

    var categories = ["All", "Electronics", "Footwear"];

    return(
        <div className="container-fluid">
            <h2>Data Binding</h2>
            <ol>
                {
                    categories.map(category=> <li key={category}>{category}</li>)
                }
            </ol>
            <select>
                {
                    categories.map(category => <option key={category}>{category}</option>)
                }
            </select>
            <ul className="list-unstyled mt-4">
                {
                    categories.map(category => 
                          <li key={category}>
                             <input type="checkbox" value={category} /> <label>{category}</label>
                          </li>
                        )
                }
            </ul>
        </div>
    )
}

Ex:
 data-binding.jsx

export function Databinding()
{

     var sales = [46000.44, 13400.55, 67000.33, 30000.45];

    return(
        <div className="container-fluid">
            <h2>Data Binding</h2>
            <ol>
                {
                    sales.filter(value=> value>40000).map(item=> <li key={item}> {item} </li>)
                }
            </ol>
        </div>
    )
}

- You have to filter data from array by using the "filter()" method and present by using a "map()".

Ex:
data-binding.jsx
export function Databinding()
{

     var sales = [46000.44, 13400.55, 67000.33, 30000.45];

    return(
        <div className="container-fluid">
            <h2>Data Binding</h2>
            <ol className="list-unstyled">
                {
                    sales.filter(sale=> sale>40000).map((item, index) => <li key={index}> [{index}] {item} </li> )
                }
            </ol>
        </div>
    )
}

Spread Operator for Array:

Syntax:
		var  one = ["A", "B"];
		var  two = [one];			// two have one element.
		var  two = [...one];			// two is having 2 elements
		
		var two = [one, "C", "D"]		//  two have 3 elements

		var two = [...one, "C", "D"]	//  two have 4 elements

		
						 Object Type
- Object is a key/value collection.
- It comprises related data and logic.
- If only data is present then it is reffered as  "JSON".  
  [JavaScript Object Notation]
- Key is always string type.
- Value can be any type.

Syntax:
		var product = {
			"Name": "Samsung TV",
			"Price": 46000.44,
			"Stock": true,
			"Cities": ["Delhi", "Hyd"],
			"Rating": { "Rate":4.5, "Count": 5000 }
		}

- Object keys are access using object reference or destructuring technique.

		Name:  { product.Name }	
		
		Name : { product[Name] }


*/
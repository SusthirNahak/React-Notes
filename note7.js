/*
API Connection
Sudhakar Sharma
•
Mar 19
React JS - Data Binding
- One Way
- Two Way

FAQ: How to initialize values into state on component mount? [ Loading Component ]
Ans:  
- Javascript uses "onload" as event to define actions while loading page.
        <body onload="bodyload()">
- React is component based, here page loads first and later component mounts on to page.
- If you want any action to perform at the time of mounting component, then you have to define by using the hook "useEffect()".

Syntax:
        useEffect(()=>{}, [ dependencies ])

Ex:
        useEffect(()=>{

            //actions to perform at the time of loading component

        },[ dependency ])

- Every component mounts only once.
- The dependency specifies when to mount again.
- There can be multiple dependencies, hence it is configured as Array [ ].

Ex: Mount Demo

mount-demo.jsx

import { useEffect, useState } from "react";

export function MountDemo()
{
    const [userName, setUserName] = useState('');

    useEffect(()=>{
        setUserName('John');
    },[]);

    return(
        <div className="container-fluid">
            <h2 className="mt-3"> Hello ! {userName} </h2>
        </div>
    )
}

                     Accessing data from API

- API is "Application Programming Interface".
- API uses distributed computing architecture.
- It uses REST full services. [Representational State Transfer]
- In REST service consumer will make a simple query request and service provider will send an XML or JSON response.
- There are various pre-defined API services for different domains.
- You can practice on pre-defined API's.
   
        https://api.nasa.gov
        https://fakestoreapi.com
        https://openweathermap.org/api
        etc..

- To communicate with any API online or offline Javascript provides

        a) XMLHttpRequest        
        b) fetch()

   jQuery Provides

        a) $.ajax()
        b) $.getJSON()
       
   React uses 3rd party

        a) WHATWG Fetch
        b) axios()


                         XMLHttpRequest

- It is the Javascript native object used to make Ajax calls.
- It is browser native method.
- Hence it is faster in communication.
- It returns data in HTML, Text or XML format.
- If any another format is returned then it requires explicit parsing.
- It is poor in error handling.
- It is not async by default.

Syntax:
        var  http  = new XMLHttpRequest();

        http.open("method", "url", true/false);
        http.send();
       
        http.onreadystatechange = function() {
            //actions to perform when response is ready
        }

Ex:
        var http = new XMLHttpRequest();
       
        http.open("get" , "products.json", true);         // true = async
        http.send();

        http.onreadystatechange = function(){

            if(http.readyState==4)                // response ready
            {
                   JSON.parse(http.responseText);
            }
        }

Ex:  
mount-demo.jsx

1. Go to public folder and add a new file  "products.json"

[
    {
        "Name": "Samsung TV",
        "Price": 45000.44,
        "Stock": true
    },
    {
        "Name": "Nike Casuals",
        "Price": 3100.44,
        "Stock": false
    }
]

2. mount-demo.jsx

import { useEffect, useState } from "react";


export function MountDemo()
{
   
    const [products, setProducts] = useState([]);

    function LoadProducts(){
         var http = new XMLHttpRequest();
         http.open("get", "products.json", true);
         http.send();

         http.onreadystatechange = function(){

              console.log(http.responseText);
              if(http.readyState==4)
              {
                  setProducts(JSON.parse(http.responseText));
              }
         }
    }

    useEffect(()=>{

        LoadProducts();

    },[]);


    return(
        <div className="container-fluid">
            <h2>Products Table</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product=>
                            <tr key={product.Name}>
                                <td>{product.Name}</td>
                                <td>{product.Price}</td>
                                <td>{(product.Stock===true)?"Available":"Out of Stock"}</td>
                            </tr>
                            )
                    }
                </tbody>
            </table>
        </div>
    )
}

                            fetch() promise
- fetch() is a promise of Javascript.
- It is default "async".
- It uses XMLHttpRequest.
- It is good in errors when compared to XMLHttpRequest.
- It returns data in binary format.
- It request explicit conversions.

Syntax:
        fetch("url")
        .then(function(){ on success })
        .catch(function(){ on failure })
        .finally(function(){ always })

- "fetch()" promise belongs to Javascript "window" object.

Ex:
mount-demo.jsx

import { useEffect, useState } from "react";


export function MountDemo()
{
   
    const [products, setProducts] = useState([]);

    function LoadProducts(){
        fetch("products.json")
        .then(response => response.json())
        .then(products=>{
            setProducts(products);
        })
    }

    useEffect(()=>{

        LoadProducts();

    },[]);


    return(
        <div className="container-fluid">
            <h2>Products Table</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product=>
                            <tr key={product.Name}>
                                <td>{product.Name}</td>
                                <td>{product.Price}</td>
                                <td>{(product.Stock===true)?"Available":"Out of Stock"}</td>
                            </tr>
                            )
                    }
                </tbody>
            </table>
        </div>
    )
}

*/
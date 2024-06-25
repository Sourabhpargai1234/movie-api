import './Navbar.css';
import React from 'react';

 export default   function Navbar() {
        var i=1;
        function myFunction() {
            if(i%2!==0){
                document.getElementById("abc").style.display="grid";
                i++;
            }
            else{
                document.getElementById("abc").style.display="none";
                i--;
            }
            document.getElementById("button").classList.toggle("change");
        }
        
    
        return (
            <div className='mt-8'>
                <div id="abc" className="hidden sm:inline text-white font-bold text-3xl space-x-12">
                    <a href="/" className=" mx-2 sm:border-none border-gray-300 text-center w-96 hover:text-green-400 ">Home</a>
                    <a href="/popular" className="sm:border-none  border-gray-300 text-center mx-2 hover:text-green-400 ">Profile</a>
                    <a href="/top-rated" className="sm:border-none  border-gray-300 text-center mx-2 hover:text-green-400 ">Top Rated</a>
                </div>
    
                <a id="button" className='icon' onClick={() => myFunction()}>
                    <div className="sm:hidden fixed top-2 right-2 mr-2 mt-2 items-center cursor-pointer">
                        <div className="bar1 bg-white w-10 h-2 my-1"></div>
                        <div className="bar2 bg-white w-10 h-2 my-1"></div>
                        <div className="bar3 bg-white w-10 h-2 my-1"></div>
                    </div>
                </a>
            </div>
        );
    }
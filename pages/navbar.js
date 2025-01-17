import React, {Component} from 'react';
import Link from 'next/link';
import router from 'next/router';
class Navbar extends React.Component{
  render(){
    return(
            <>
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link href="/"><a class="navbar-brand" >Navbar</a></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link href="/"><a class="nav-link active" aria-current="page">Home</a></Link>
        </li>
        <li class="nav-item">
           <Link href={{pathname : "/about", query : {name : 'Anwar', age: 25} }}><a class="nav-link">About</a></Link>
        </li> 
        <li class="nav-item">
           <Link href="/contact"><a class="nav-link">Contact</a></Link>
        </li> 
        <li class="nav-item">
           <button onClick={()=> router.push('/about')} className="btn btn-default btn-sm"><a class="nav-link">About</a></button>
        </li> 
        <li class="nav-item">
           <Link href="/services"><a class="nav-link">Services</a></Link>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-success" type="button">Search</button>
      </form>
    </div>
  </div>
</nav>
            </>
          );
  }
}
export default Navbar;
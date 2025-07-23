import {Link,Outlet} from 'react-router-dom'


function Home (){

    return(
        <div>
            <h1 style={{textAlign:'center', marginTop:'50px'}}>its home page</h1>


        <nav style={{marginBottom: '20px'}}> 
        <Link to ='settings'> Settings </Link> |
        <Link to="/user/101">User</Link>
        </nav>

        <Outlet/>
        </div>
    ) 

}

export default Home 


import{useNavigate} from "react-router-dom"


function Login(){
    const Navigate=useNavigate()

    const handleLogin=(e)=>{
        e.preventDefault()
        Navigate('/home')
    }


    return(

        <div style={{textAlign:'center', marginTop:'50px'}}>
            <h1>Please Login</h1>
     <form onSubmit={handleLogin}>
        <input type="text" placeholder="username" required /> <br/> <br/>
        <input type="password" placeholder="password" required /> <br /> <br />
        <button type="submit">login</button>

     </form>

        </div>

    )
}
export default Login;
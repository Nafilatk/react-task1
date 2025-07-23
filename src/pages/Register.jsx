import{useNavigate} from "react-router-dom"


function Register(){
    const Navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        Navigate('/login')
    }

 
    return(

        <div style={{textAlign:'center', marginTop:'50px'}}>
            <h1>Please Register</h1>
     <form onSubmit={handleSubmit}>
        <input type="text" placeholder="username" required /> <br /> <br />
        <input type="password" placeholder="password" required /> <br /> <br />
        <button type="submit">submit</button>

     </form>

        </div>

    )
}
export default Register
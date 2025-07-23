import {useParams} from 'react-router-dom'

function User(){
    const {id} =useParams()

    const users={
        101: {name:'Nafila',email:'nafila@gmail.com',role : 'admin'},
        102:{ name: 'Salman',email:'salman@gmail.com',role:'editor'},
        103: {name:'Asnif', email: 'asnif@email.com',role: 'user' }
        }

        const user =users[id]


    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
           
        {user?(
            <>
            <h1>Welcome ,{user.name}</h1>
            <p><strong>Email :</strong>{user.email}</p>
            <p><strong>Role :</strong>{user.role}</p>
            </>
        ): (
            <h2>User not found !</h2>
        )

        }

        </div>
    )
}

export default User
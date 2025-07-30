import { useState } from "react";


const Login = (props) => {

    const onSumbit = (e)=>{
        e.preventDefault()
        props.onLogin(email, password);
    }
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return ( <div className="Login">
    <form onSubmit={onSumbit} className="">
        <h1>LOGIN</h1>
      <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Admin Email"/>
      <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password"/>
      <button className="bg-blue-600 text-white px-4 py-2">Login</button>
    </form>
    </div> );
}
 
export default Login;
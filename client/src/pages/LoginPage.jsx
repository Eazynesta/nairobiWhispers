function LoginPage(){
    return(
        <>
            <form className="login">
                <h1>Login Page</h1>
                <input type="text" placeholder="Username" />
                <input type="text" placeholder="Password" />
                <button>Login</button>
            </form>
        </>
    );
}

export default LoginPage
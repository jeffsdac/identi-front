export default function Form (){
    return(

    <div className="flex justify-center flex-col">
        <div className="w-96 h-20 mt-8 flex justify-between">
            <span className="text-slate-400 text-center josefina text-4xl font-normal">Login</span>
            <span className="text-slate-400 text-center josefina text-4xl font-normal">Cadastro</span>          
        </div>
        <input type="text" placeholder="Digite seu e-mail"
        className="w-full p-3 h-10 rounded-3xl border border-blue-500 shadow-sm shadow-blue-500 mb-5"
        ></input>

        <input type="password" placeholder="Digite sua senha"
        className="w-full p-3 h-10 rounded-3xl border border-blue-500 shadow-sm shadow-blue-500 my-5"
        ></input>

        <div className="button-nav-bar bg-button-light">
            Login
        </div>
    </div>
    
    )
}
import Link from "next/link";
import Logo from "@/midia/Logo.png"

export default function NavBar ({active}) {
 return (
    <nav className='flex gap-10 shadow-nav-box p-3 items-end justify-between'>
    <div className='ml-5 w-12 h-12'>
      <img src="https://media.discordapp.net/attachments/771112650523541524/1155966917107011634/Logo.png" alt="logo" />
    </div>


    <ul className='flex gap-10 pb-2'>
      <li className={active == "/" && "text-slate-400"}>
        <Link href="/">Página Inicial</Link>
      </li>
      <li className={active == "agendamento" && "text-slate-400" + " text-sm"}>
        <Link href="agendamento">Agendamento</Link>
      </li>
    </ul>


    <div className='flex gap-5'>
      <div className="button-nav-bar bg-button-light">
        Login
      </div>

      <div className="button-nav-bar bg-button-dark">
        Cadastro
      </div>
    </div>
   </nav>
 )
}
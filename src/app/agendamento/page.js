import CardConsulta from "@/components/CardConsulta";
import NavBar from "@/components/navBar";


export default function Agendamento() {
  const data = [
    {
      "cdConsulta": 1,
      "nomeMedico": "Dr. Exemplo 2",
      "descricao": "Consulta de rotina 2",
      "preco": 5000.0,
      "usuario": {
        "cdUsuario": 1,
        "email": "jeffandrade1999@gmail.com",
        "senha": "12345678910"
      },
      "clinica": {
        "cdClinica": 1,
        "nome": "Dentes Brancos",
        "email": "jef@jef.com",
        "senha": "jefopekdpowkdwapçdsçaldmaslo",
        "ativo": true
      },
      "_links": {
        "self": {
          "href": "http://localhost:8080/api/consulta/1"
        }
      }
    },
    {
      "cdConsulta": 2,
      "nomeMedico": "Dr. Exemplo 2",
      "descricao": "Consulta de rotina 2",
      "preco": 5000.0,
      "usuario": {
        "cdUsuario": 1,
        "email": "jeffandrade1999@gmail.com",
        "senha": "12345678910"
      },
      "clinica": {
        "cdClinica": 1,
        "nome": "Dentes Brancos",
        "email": "jef@jef.com",
        "senha": "jefopekdpowkdwapçdsçaldmaslo",
        "ativo": true
      },
      "_links": {
        "self": {
          "href": "http://localhost:8080/api/consulta/2"
        }
      }
    },
    {
      "cdConsulta": 3,
      "nomeMedico": "Dr. Exemplo 2",
      "descricao": "Consulta de rotina 2",
      "preco": 5000.0,
      "usuario": {
        "cdUsuario": 1,
        "email": "jeffandrade1999@gmail.com",
        "senha": "12345678910"
      },
      "clinica": {
        "cdClinica": 1,
        "nome": "Dentes Brancos",
        "email": "jef@jef.com",
        "senha": "jefopekdpowkdwapçdsçaldmaslo",
        "ativo": true
      },
      "_links": {
        "self": {
          "href": "http://localhost:8080/api/consulta/3"
        }
      }
    },
    {
      "cdConsulta": 4,
      "nomeMedico": "Dr. Exemplo 2",
      "descricao": "Consulta de rotina 2",
      "preco": 5000.0,
      "usuario": {
        "cdUsuario": 1,
        "email": "jeffandrade1999@gmail.com",
        "senha": "12345678910"
      },
      "clinica": {
        "cdClinica": 1,
        "nome": "Dentes Brancos",
        "email": "jef@jef.com",
        "senha": "jefopekdpowkdwapçdsçaldmaslo",
        "ativo": true
      },
      "_links": {
        "self": {
          "href": "http://localhost:8080/api/consulta/4"
        }
      }
    }
  ]

  return (
  <>
   <NavBar active={"agendamento"}/>

  <main className="flex felx-col flex-wrap">
    <div className="w-full">
      <h2 className="text-center">Veja as consultas da clinica com ID: </h2>
    </div>

    <div className="flex flex-row justify-center gap-4 mx-12 my-4">
      {data.map(despesa => <CardConsulta despesa ={despesa}/>)}
    </div>
  </main>


   </>
  )
}

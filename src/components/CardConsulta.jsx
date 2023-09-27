export default function CardConsulta ({despesa}) {
    return(
        <>
            <div class="bg-white border rounded-lg shadow-lg mt-5">
                <div class="p-4">
                    <h2 class="text-2xl text-blue-500 font-semibold">Consulta {despesa.cdConsulta}</h2>
                    <p class="text-gray-600">Médico: {despesa.nomeMedico}</p>
                    <p class="text-gray-600">Descrição: {despesa.descricao}</p>
                    <p class="text-blue-500 font-semibold mt-2">Preço: R$ {despesa.preco}</p>
                </div>
            </div>

        </>
    )
}
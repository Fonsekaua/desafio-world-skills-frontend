import React from 'react'
import InputInscricao from './InputInscricao';

export default function CardCurso({ props }) {
    const [modal, setModal] = React.useState(false)
    const [verMais, setVerMais] = React.useState(false);
    const [inscrever, setInscrever] = React.useState(false);
    return (
        <>

                        <div className={`fixed z-20 transition-all duration-1000 ${modal ? " pointer-events-auto bg-black/50" : "opacity-0 pointer-events-none"} w-screen h-screen inset-0 flex items-center justify-center`}>
                            {
                                verMais && (
                                    <div className='bg-gray-900 flex flex-col gap-1 relative'>
                            <button className='absolute right-5 top-5 z-40' onClick={() => {
                                setModal(false);
                                setVerMais(false)
                                setInscrever(false);
                            }}>
                                X
                            </button>
                            <img src={props.imagem} className='w-xl h-40 object-cover ' alt="" />
                            <div className=' *:mb-2 p-2'>
                                <h1 className='text-xl'>{props.nome}</h1>
                                <p>{props.descricao}</p>
                                <p>{props.modalidade}</p>
                                <p>Vagas: {props.quantVagas}</p>
                                <p>{props.dataInicio}</p>
                                <p>Carga Horaria: {props.cargaHoraria}h</p>
                            </div>
                            <button className='bg-sky-500 w-fit px-10 py-2 m-2' onClick={() => {
                                setModal(true);
                                setVerMais(false)
                                setInscrever(true);
                            }}>
                                increver-se
                            </button>
                        </div>
                                )
                            }

                            {
                                inscrever && (
                                    <form action="" onSubmit={() => alert("Incricao feita com sucesso!")} className='bg-gray-800 flex flex-col *:flex *:flex-col *:mb-5 px-10 py-5'>
                                        <h2>Formulario de inscricao</h2>
                                        <InputInscricao titulo="Nome" nome="nome" placeholder="Digite seu nome" />
                                        <InputInscricao titulo="CPF" nome="cpf" placeholder="Digite seu CPF" />
                                        <InputInscricao titulo="Email" nome="email" placeholder="Digite seu email" />
                                        <InputInscricao titulo="Telefone" nome="telefone" placeholder="Digite seu telefone" />
                                        <InputInscricao titulo="Data Nasc" nome="data" placeholder="Digite sua data de nascimento" />

                                        <button>Enviar</button>
                                    </form>
                                )
                            }
                    </div>
   
            <div className='flex items-center w-64 flex-col gap-2 bg-gray-950 p-1.5'>

                <img className='w-full h-36 object-cover' src={props.imagem} alt="" />
                <div className='flex flex-col gap-3'>
                    <p>{props.nome}</p>
                    <small className='bg-sky-500 w-fit rounded-full px-1'>{props.modalidade}</small>
                    <p className='line-clamp-2'>{props.descricao}</p>
                    <p>Carga horaria: {props.cargaHoraria}h</p>
                </div>
                <button className='bg-emerald-500 p-2 w-56' onClick={() => {
                    setModal(true);
                    setVerMais(true)
                    setInscrever(false);

                }}>
                    Ver detalhes
                </button>
            </div>
        </>
    )
}

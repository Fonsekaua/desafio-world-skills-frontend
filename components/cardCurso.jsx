import React from 'react'

export default function CardCurso({props}) {
    const [verMais,setVerMais] = React.useState('');

  return (
<>
  {
    verMais && (
        <div className='fixed z-20 bg-black/60 w-screen h-screen inset-0 flex items-center justify-center'>
    <div className='bg-gray-900 flex flex-col gap-1'>
        <img src={props.imagem} className='w-xl h-40 object-cover ' alt="" />
        <div className=' *:mb-2 p-2'>
            <h1 className='text-xl'>{props.nome}</h1>
            <p>{props.descricao}</p>
            <p>{props.modalidade}</p>
            <p>Vagas: {props.quantVagas}</p>
            <p>{props.dataInicio}</p>
            <p>Carga Horaria: {props.cargaHoraria}h</p>
        </div>
        <button className='bg-sky-500 w-fit px-10 py-2 m-2'>
            increver-se 
        </button>
    </div>
</div>
    )
  }
  <div className='flex items-center w-64 flex-col gap-2 bg-gray-950 p-1.5'>
        <img className='w-full h-36 object-cover' src={props.imagem} alt="" />
        <div className='flex flex-col gap-3'>
            <p>{props.nome}</p>
            <small className='bg-sky-500 w-fit rounded-full px-1'>{props.modalidade}</small>
            <p className='line-clamp-2'>{props.descricao}</p>
            <p>Carga horaria: {props.cargaHoraria}h</p>
        </div>
        <button className='bg-emerald-500 p-2 w-56' onClick={() => setVerMais(prev => !prev)}>
            Ver detalhes
        </button>
    </div>
</>
  )
}

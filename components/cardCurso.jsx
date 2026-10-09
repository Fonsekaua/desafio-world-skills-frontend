import React from 'react'

export default function CardCurso({props}) {
  return (
    <div className='flex items-center w-64 flex-col gap-2 bg-gray-950 p-1.5'>
        <img className='w-full object-cover' src={props.imagem} alt="" />
        <div className='*:mb-2'>
            <p>{props.nome}</p>
            <small className='bg-sky-500 rounded-full px-1'>{props.modalidade}</small>
            <p>{props.descricao}</p>
            <p>Carga horaria: {props.cargaHoraria}h</p>
        </div>
        <button className='bg-emerald-500 p-2 w-56'>
            Ver detalhes
        </button>
    </div>
  )
}

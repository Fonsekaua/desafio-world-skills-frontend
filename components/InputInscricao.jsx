import React from 'react'

export default function InputInscricao(props) {
  const {nome} = props
  const handleChange = (e) => {
    const {name,value} = e.target;

  }
  return (
    <label htmlFor="">
        <small>{props.titulo}</small>
        <input type={nome == "nome" ? "text": nome == "cpf" ? "number" : nome == "email"? "email": nome == "telefone"? "tel": nome == "data" ? "date": nome == "url"? "url" : nome == "cargaHoraria"?"number":"text"} placeholder={props.placeholder} name={props.nome} onChange={(e) => {
          props.onChange(e);
        }} value={props.valor}  required/>
    </label>
  )
}

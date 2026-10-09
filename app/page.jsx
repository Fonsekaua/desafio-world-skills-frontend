'use client'
import CardCurso from "@/components/cardCurso";
import cardCurso from "@/components/cardCurso";
import { useEffect, useState } from "react";

export default function Home() {
  const [cursos, setCursos] = useState([
    {
      nome: "goat",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXKsgvWFvlzQSV-IpqKH81g8Yl4PZkM73nj8CWLDBpenYFIFmqSrBEtS8&s=10",
      descricao: "Descrição incrivel de um curso incrivel bla bla bla bla bla",
      modalidade: "tecnologia",
      quantVagas: 80,
         dataInicio: "31/02/2026",
      cargaHoraria: 56
    },
    {
      nome: "curso02",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZgOrDYCNXBjS-dWCaGQLHo1vQjxdz35HUY9aad_JiOVMk-N_WvgXl_Q0&s=10",
      descricao: "Descrição incrivel de um curso incrivel bla bla bla bla bla",
      modalidade: "engenharia eletrica",
      quantVagas: 80,
         dataInicio: "31/02/2026",
      cargaHoraria: 56
    },
    {
      nome: "curso03",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3YW2e24DCNQx_37jnAL0o5Yl1fqQ6pDg0bLhhOvnw2yavPkpOJBOO_aq4&s=10",
      descricao: "Descrição incrivel de um curso incrivel bla bla bla bla bla",
      modalidade: "gastronomia",
      quantVagas: 80,
          dataInicio: "31/02/2026",
      cargaHoraria: 56
    },
    {
      nome: "curso04",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS53yIncfG0ktB7ZeL4UVGNBmDJMGK963K5PfiYadV3TTIBB8LjKSkOFdMl&s=10",
      descricao: "Descrição incrivel de um curso incrivel bla bla bla bla bla",
      modalidade: "mecanica altomotiva",
      quantVagas: 80,
      dataInicio: "31/02/2026",
      cargaHoraria: 56
    },
    {
      nome: "curso05",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbquKAjQiLvkNpNnXyik7SWvNhaAXBoslzmJSm-FZIHrvSaYLoRly8T6o&s=10",
      descricao: "Descrição incrivel de um curso incrivel bla bla bla bla bla",
      modalidade: "linguas estrangeiras",
      quantVagas: 80,
       dataInicio: "31/02/2026",
      cargaHoraria: 56
    },
  ])
  const [listaFiltrada,setListaFiltrada] = useState(cursos);
  const [filtroCursosModalidade,setFiltroCursosModalidade] = useState('');
  const [filtroCusosNome,setFiltroCursosNome] = useState("");



  return (
    <div className="flex flex-col flex-1 items-center py-10 font-sans bg-gray-900">
      <div className="bg-gray-950 p-3 flex items-center gap-5 w-xl justify-between rounded-lg">
        <input onChange={(e) => setFiltroCursosNome(e.target.value)} value={filtroCusosNome} placeholder="Pesquise o nome do curso" className="flex-1 outline-none" />
     
        <select className="bg-gray-950 w-32 text-center" onChange={(e) => setFiltroCursosModalidade(e.target.value)} value={filtroCursosModalidade}>
          <option value="">Filtro</option>
          <option value="tecnologia">Filtro</option>
          <option value="engenharia eletrica">Filtro</option>
          <option value="gastronomia">Filtro</option>
          <option value="mecanica automotiva">Filtro</option>
          <option value="linguas estrangeiras">Filtro</option>
        </select>
      </div>

      <section className="w-screen container py-5 flex items-center justify-center">
          <div className="w-full flex flex-col gap-10">
            <h1>Lista de cursos</h1>
            <div className={`flex ${listaFiltrada.length>0?"justify-between":"justify-center"}`}>
              {
              listaFiltrada.length>0 ? 
               listaFiltrada.map((curso,index) => (
                <CardCurso  key={index} props={curso}/>
              ))
              : 
              <p className=" text-center my-20 text-2xl font-bold ">nenhum curso encontrado</p>
            }
            </div>
          </div>
      </section>
    </div>
  );
}

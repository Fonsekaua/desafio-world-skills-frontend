'use client'
import CardCurso from "@/components/cardCurso";
import cardCurso from "@/components/cardCurso";
import Link from "next/link";
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



  const excluir = (nome) => {
    setCursos(prev => {
      return prev.filter(e => e.nome != nome);
    })
  }
  return (
    <div className="flex flex-col flex-1 items-center py-10 font-sans bg-gray-900">
     

      <section className="w-screen container py-5 flex items-center justify-center">
          <div className="w-full flex flex-col gap-10">
            <div className="flex justify-between">
              <h1>Meus cursos</h1>
              <button>
                Novo curso
              </button>
            </div>
            <div className={`flex flex-col ${cursos.length>0?"justify-between":"justify-center"}`}>
              {
              cursos.length>0 ? 
               cursos.map((curso,index) => (
                <div key={index} className="bg-gray-950 py-4 my-2 px-2">  
                  {curso.nome}
                  <div className="flex gap-2">
                    <button>
                     Editar
                  </button>
                  <button onClick={()=> excluir(curso.nome)}>
                     excluir
                  </button>
                  </div>
                </div>
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

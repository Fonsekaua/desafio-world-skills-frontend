'use client'
import CardCurso from "@/components/cardCurso";
import cardCurso from "@/components/cardCurso";
import { useState } from "react";

export default function Home() {
  const [cursos, setCursos] = useState([
    {
      nome: "curso01",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXKsgvWFvlzQSV-IpqKH81g8Yl4PZkM73nj8CWLDBpenYFIFmqSrBEtS8&s=10",
      descricao: "Descrição incrivel de um curso incrivel bla bla bla bla bla",
      modalidade: "tecnologia",
      quantVagas: 80,
      dataInicio: 12 - 22 - 26,
      cargaHoraria: 56
    },
    {
      nome: "curso02",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZGhv-AxEwG6XuGt5OM1g0R9GrOI81gEFvHdROmAzFiw&s",
      descricao: "Descrição incrivel de um curso incrivel bla bla bla bla bla",
      modalidade: "tecnologia",
      quantVagas: 80,
      dataInicio: 12 - 22 - 26,
      cargaHoraria: 56
    },
    {
      nome: "curso03",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfX1UbKomKahcxaWNgHVTAZRxbW1cy97XSH8jkYxhasA&s=10",
      descricao: "Descrição incrivel de um curso incrivel bla bla bla bla bla",
      modalidade: "tecnologia",
      quantVagas: 80,
      dataInicio: 12 - 22 - 26,
      cargaHoraria: 56
    },
    {
      nome: "curso04",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS53yIncfG0ktB7ZeL4UVGNBmDJMGK963K5PfiYadV3TTIBB8LjKSkOFdMl&s=10",
      descricao: "Descrição incrivel de um curso incrivel bla bla bla bla bla",
      modalidade: "tecnologia",
      quantVagas: 80,
      dataInicio: 12 - 22 - 26,
      cargaHoraria: 56
    },
    {
      nome: "curso05",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbquKAjQiLvkNpNnXyik7SWvNhaAXBoslzmJSm-FZIHrvSaYLoRly8T6o&s=10",
      descricao: "Descrição incrivel de um curso incrivel bla bla bla bla bla",
      modalidade: "tecnologia",
      quantVagas: 80,
      dataInicio: 12 - 22 - 26,
      cargaHoraria: 56
    },
  ])

  return (
    <div className="flex flex-col flex-1 items-center py-10 font-sans bg-gray-900">
      <div className="bg-gray-950 p-3 flex items-center gap-5 w-xl justify-between rounded-lg">
        <input placeholder="Pesquise o nome do curso" className="flex-1 outline-none" />
        <select>
          <option>Filtro</option>
        </select>
      </div>

      <section className="w-screen container py-5 flex items-center justify-center">
          <div className="w-full flex flex-col gap-10">
            <h1>Lista de cursos</h1>
            <div className="flex gap-10 justify-between">
              {
              cursos.map((curso,index) => (
                <CardCurso  key={index} props={curso}/>
              ))
            }
            </div>
          </div>
      </section>
    </div>
  );
}

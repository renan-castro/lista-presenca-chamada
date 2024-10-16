import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Btn from "../../components/button/button";
import { motion } from "framer-motion";
import BackgroundImage from "../../app/fonte.jpeg";
import { FaArrowLeft } from 'react-icons/fa';
import React, { useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

export default function ContainerViewProfessor({ onBack }) {
    const [activeComponent, setActiveComponent] = useState(null);
    const [codigoPresenca, setCodigoPresenca] = useState('');

    const onBtnClick = () => {
        gerarCodigoPresenca();
    };

    const handleBackClick = () => {
        setActiveComponent(null);
    };

    const gerarCodigoPresenca = () => {
        const codigo = Math.floor(1000 + Math.random() * 9000).toString();
        setCodigoPresenca(codigo);
    };

    const alunos = [
        { nome: "João Silva", curso: "Análise e Desenvolvimento de Sistemas", cadeira: "Lógica Matemática" },
        { nome: "Maria Oliveira", curso: "Sistemas da informação", cadeira: "Lógica Matemática" },
    ];

    return (
        <>
            {activeComponent === null ? (
                <div className="min-h-screen w-full bg-[url('fonte.jpeg')] bg-cover">
                    <motion.div
                        className="relative z-10 flex items-center justify-center min-h-screen overflow-hidden"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="bg-white rounded-lg w-10/12 sm:w-3/5 h-auto pb-5 text-center shadow-inner relative overflow-hidden">

                            <button
                                onClick={onBack}
                                className="flex items-center bg-[#001E12] text-white rounded-lg p-2 ml-3 mt-3 mr-40 shadow-lg font-semibold hover:bg-[#044A2B] transition duration-200 ease-in-out">
                                <FaArrowLeft className="mr-2" /> <span> Voltar </span>
                            </button>

                            <div className="sm:-translate-y-10">
                                <h1 className="text-6xl text-[#e58e31] mt-10 font-bold"> Olá professor! </h1>
                                <h1 className="text-5xl text-[#164528] mt-7 font-bold"> Gere o código de presença </h1>
                            </div>

                            <div className="flex flex-col items-center mt-4 space-y-4">
                                <div className="flex flex-col sm:flex-row justify-center space-x-2 w-full">
                                    <div className="flex flex-col w-full sm:w-1/2">
                                        <Label htmlFor="nome" className="mb-2 font-bold text-2xl">Nome</Label>
                                        <Input
                                            id="nome"
                                            name="nome"
                                            type="text"
                                            placeholder="Digite seu nome"
                                            className="bg-gray-200 mx-auto w-3/4"
                                        />
                                    </div>
                                    <div className="flex flex-col w-full sm:w-1/2">
                                        <Label htmlFor="cadeira" className="mb-2 font-bold text-2xl">Cadeira</Label>
                                        <Input
                                            id="cadeira"
                                            name="cadeira"
                                            type="text"
                                            placeholder="Insira a cadeira"
                                            className="bg-gray-200 mx-auto w-3/4"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row justify-center space-x-2 w-full">
                                    <div className="flex flex-col w-full sm:w-1/2">
                                        <Label htmlFor="curso" className="mb-2 font-bold text-2xl">Curso</Label>
                                        <Input
                                            id="curso"
                                            name="curso"
                                            type="text"
                                            placeholder="Insira o curso"
                                            className="bg-gray-200 mx-auto w-3/4"
                                        />
                                    </div>
                                    <div className="flex flex-col w-full sm:w-1/2">
                                        <Label htmlFor="codigo" className="mb-2 font-bold text-2xl">Gerar código</Label>
                                        <Input
                                            id="codigo"
                                            name="codigo"
                                            type="text"
                                            placeholder="O código irá aparecer aqui"
                                            className="bg-gray-200 mx-auto w-3/4"
                                            value={codigoPresenca}
                                            readOnly
                                        />
                                    </div>
                                </div>
                            </div>

                            <Btn
                                label={"Gerar código de Presença"}
                                className="bg-[#E58E31] text-white rounded-lg mt-9 mb-5 w-48 mx-auto pr-5 pl-5 shadow-lg font-semibold hover:bg-[#FF6B12] transition duration-200 ease-in-out"
                                onClick={onBtnClick}
                            />

                            <Table isStriped aria-label="alunos">
                                <TableHeader>
                                    <TableColumn>Nome</TableColumn>
                                    <TableColumn>Curso</TableColumn>
                                    <TableColumn>Cadeira</TableColumn>
                                </TableHeader>
                                <TableBody emptyContent={"Sem alunos."}>
                                    {alunos.map((aluno, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{aluno.nome}</TableCell>
                                            <TableCell>{aluno.curso}</TableCell>
                                            <TableCell>{aluno.cadeira}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>

                        </div>
                    </motion.div>
                </div>
            ) : (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                >
                </motion.div>
            )}
        </>
    );
}

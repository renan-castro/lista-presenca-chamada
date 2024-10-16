import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Btn from "../../components/button/button";
import { motion } from "framer-motion";
import BackgroundImage from "../../app/fonte.jpeg";
import { FaArrowLeft } from 'react-icons/fa';
import React, { useState } from "react";

export default function ContainerViewAluno({ onBack }) {
    const [activeComponent, setActiveComponent] = useState(null);

    const onBtnClick = () => {
        setActiveComponent("novoComponente");
    };

    const handleBackClick = () => {
        setActiveComponent(null);
    };

    return (
        <>
            {activeComponent === null ? (
                <div 
                    className="min-h-screen w-full bg-[url('fonte.jpeg')] bg-cover" 
                >
                    <motion.div
                        className="relative z-10 flex items-center justify-center min-h-screen overflow-hidden"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="bg-white rounded-lg place-content-center w-10/12 sm:w-3/5 h-auto pb-6 text-center shadow-inner relative overflow-hidden">

                            <button
                                onClick={onBack}
                                className="flex items-center bg-[#001E12] text-white rounded-lg p-2 ml-3 mt-3 mr-40 shadow-lg font-semibold hover:bg-[#044A2B] transition duration-200 ease-in-out"> 
                                <FaArrowLeft className="mr-2" /> <span> Voltar </span>
                            </button>

                            <div className="sm:-translate-y-10">
                                <h1 className="text-6xl text-[#e58e31] mt-10 font-bold"> Marque sua </h1>
                                <h1 className="text-5xl text-[#164528] mt-7 mt-10 font-bold"> Presença </h1>
                            </div>
                            <div className="flex flex-col items-center w-1/2 mx-auto mt-4">
                                <Label htmlFor="nome" className="mb-2 font-bold text-2xl">Nome</Label>
                                <Input
                                    id="nome"
                                    name="nome"
                                    type="text"
                                    placeholder="Digite seu nome"
                                    className="w-full bg-gray-200"
                                />
                            </div>
                            <div className="flex flex-col items-center w-1/2 mx-auto mt-4">
                                <Label htmlFor="matricula" className="mb-2 font-bold text-2xl">Matrícula</Label>
                                <Input
                                    id="matricula"
                                    name="matricula"
                                    type="text"
                                    placeholder="Insira sua matrícula"
                                    className="w-full bg-gray-200"
                                />
                            </div>

                            <div className="flex flex-col items-center w-1/2 mx-auto mt-4">
                                <Label htmlFor="curso" className="mb-2 font-bold text-2xl">Curso</Label>
                                <Input
                                    id="curso"
                                    name="curso"
                                    type="curso"
                                    placeholder="Insira o código gerado pelo professor"
                                    className="w-full bg-gray-200"
                                />
                            </div>

                            <div className="flex flex-col items-center w-1/2 mx-auto mt-4">
                                <Label htmlFor="codigo" className="mb-2 font-bold text-2xl">Código</Label>
                                <Input
                                    id="codigo"
                                    name="codigo"
                                    type="number"
                                    placeholder="Insira o código gerado pelo professor"
                                    className="w-full bg-gray-200"
                                />
                            </div>

                            <Btn
                                label={"Marcar Presença"}
                                className="bg-[#001E12] text-white rounded-lg mt-9 w-/4 shadow-lg font-semibold w-20 text-white rounded-lg mr-5 p-2 pl-4 pt-3 pb-4 pr-4 w-full sm:w-auto shadow-lg font-semibold hover:bg-[#044A2B] transition duration-200 ease-in-out"
                                onClick={onBtnClick}
                            />
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
                    {activeComponent === "novoComponente" && <ContainerViewAluno onBack={handleBackClick} />}  
                    {/* Renderiza o NovoComponente quando o botão "Entrar" é clicado */}
                </motion.div>
            )}
        </>
    );
}

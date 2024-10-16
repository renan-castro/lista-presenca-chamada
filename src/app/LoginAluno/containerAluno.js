import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Btn from "../../components/button/button";
import { motion } from "framer-motion";
import { FaArrowLeft } from 'react-icons/fa';
import React, { useState } from "react";
import ContainerViewAluno from "../ViewAluno/containerViewAluno";

export default function ContainerAluno({ onBack }) {
    const [activeComponent, setActiveComponent] = useState(null);
    const [matricula, setMatricula] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const onBtnClick = () => {
        if (!matricula || !senha) {
            setError("Por favor, preencha todos os campos.");
        } else {
            setError("");
            setActiveComponent("novoComponente");
        }
    };

    const handleBackClick = () => {
        setActiveComponent(null);
    };

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
                        <div className="bg-white rounded-lg place-content-center w-10/12 sm:w-2/5 h-auto sm:h-auto text-center shadow-inner p-5 relative overflow-hidden">
                            <button
                                onClick={onBack}
                                className="flex items-center bg-[#001E12] text-white rounded-lg p-2 ml-3 mt-3 mr-3 shadow-lg font-semibold hover:bg-[#044A2B] transition duration-200 ease-in-out">
                                <FaArrowLeft className="mr-2" /> <span> Voltar </span>
                            </button>

                            <div className="sm:-translate-y-2">
                                <h1 className="text-4xl sm:text-5xl text-[#e58e31] mt-10 font-bold"> Olá aluno! </h1>
                                <h1 className="text-3xl sm:text-4xl text-[#164528] mt-7 font-bold"> Realize o login </h1>
                            </div>

                            <div className="flex flex-col items-center w-11/12 mx-auto mt-4">
                                <Label htmlFor="matricula" className="mb-2 font-bold text-xl">Matrícula</Label>
                                <Input
                                    id="matricula"
                                    name="matricula"
                                    type="text"
                                    placeholder="Insira sua matrícula"
                                    className={`w-full bg-gray-200 ${error && !matricula ? 'border-red-500' : ''}`}
                                    value={matricula}
                                    onChange={(e) => setMatricula(e.target.value)}
                                />
                            </div>

                            <div className="flex flex-col items-center w-11/12 mx-auto mt-4">
                                <Label htmlFor="senha" className="mb-2 font-bold text-xl">Senha</Label>
                                <Input
                                    id="senha"
                                    name="senha"
                                    type="password"
                                    placeholder="Insira sua senha"
                                    className={`w-full bg-gray-200 ${error && !senha ? 'border-red-500' : ''}`}
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                />
                            </div>

                            {error && (
                                <p className="text-red-500 mt-2">{error}</p>
                            )}

                            <Btn
                                label={"Entrar"}
                                className="bg-[#001E12] text-white rounded-lg mt-9 mb-5 w-48 mx-auto shadow-lg font-semibold hover:bg-[#044A2B] transition duration-200 ease-in-out"
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
                </motion.div>
            )}
        </>
    );
}

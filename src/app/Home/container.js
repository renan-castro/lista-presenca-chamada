"use client";
import Btn from "../../components/button/button";
import ContainerAlunos from '../LoginAluno/containerAluno';
import ContainerProfessor from '../LoginProfessor/containerProfessor';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Fonte from '../../app/fonte.jpeg';

export default function Container() {
    const [activeComponent, setActiveComponent] = useState(null);

    const onBtnClick = (type) => {
        setActiveComponent(type);
    };

    const handleBackClick = () => {
        setActiveComponent(null);
    };

    return (
        <>
            <AnimatePresence>
                {!activeComponent ? (
                    <div className='relative z-10 flex items-center justify-center h-full bg-[url("fonte.jpeg")] bg-cover'>
                        <motion.div
                            className="bg-white rounded-lg place-content-center w-10/12 sm:w-2/5 h-auto sm:h-80 text-center shadow-inner p-5 relative overflow-hidden"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.3 }} // Duração da animação
                        >
                            <div className="sm:-translate-y-2">
                                <h1 className="text-4xl sm:text-6xl text-[#e58e31] font-bold">Lista de Presença</h1>
                                <h1 className="text-3xl sm:text-5xl text-[#164528] font-semibold">Unifametro</h1>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-2 mt-10">
                                <Btn
                                    label={"Aluno"}
                                    className="bg-[#001E12] text-white rounded-lg mr-5 p-2 pl-4 pt-3 pb-4 pr-4 w-full sm:w-auto shadow-lg font-semibold hover:bg-[#044A2B] transition duration-200 ease-in-out"
                                    onClick={() => onBtnClick('aluno')}
                                />
                                <Btn
                                    label={"Professor"}
                                    className="bg-[#001E12] text-white rounded-lg mr-5 p-2 pl-4 pt-3 pb-4 pr-4 w-full sm:w-auto shadow-lg font-semibold hover:bg-[#044A2B] transition duration-200 ease-in-out"
                                    onClick={() => onBtnClick('professor')}
                                />
                            </div>
                        </motion.div>
                    </div>
                ) : (
                    <motion.div
                        className=""
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {activeComponent === 'aluno' && <ContainerAlunos onBack={handleBackClick} />}
                        {activeComponent === 'professor' && <ContainerProfessor onBack={handleBackClick} />}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

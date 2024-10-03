import Btn from "../button/button";

export default function Container() {
    return (
        <div className="relative z-10 flex items-center justify-center h-full">
            <div className="bg-white rounded-lg place-content-center w-10/12 sm:w-2/5 h-auto sm:h-80 text-center shadow-inner p-5 relative overflow-hidden">
                <div className="sm:-translate-y-2">
                    <h1 className="text-4xl sm:text-6xl text-[#e58e31] font-bold"> Lista de Presença </h1>
                    <h1 className="text-3xl sm:text-5xl text-[#164528] font-semibold"> Unifametro </h1>
                </div>
                <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-2 mt-10">
                    <Btn label={"Aluno"} className="bg-[#CAB398] text-white rounded-lg mr-5 p-3 pl-4 pr-4 w-full sm:w-auto shadow-lg font-semibold" />
                    <Btn label={"Professor"} className="bg-[#CAB398] text-white rounded-lg p-3 pl-4 pr-4 w-full sm:w-auto shadow-lg font-semibold" />
                </div>
            </div>
        </div>
    );
}

import {Button, ButtonGroup} from "@nextui-org/button";

export default function Btn({label, size, onClick, className}){
    return(
    <Button size={size} onClick={onClick} className={className}>
      {label}
    </Button>
    );
}
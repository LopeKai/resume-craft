import { Plus } from "lucide-react";
import { ResumeCardButton } from "./resumes-card";

export function AddResumesButton() {
    return (
        <ResumeCardButton
            title="Criar novo curriculo"
            description="Comece do zero"
            icon={<Plus size={50} />}
        />
    )
}
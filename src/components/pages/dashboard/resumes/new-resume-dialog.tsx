"use client"

import { Button } from "@/components/ui/button";
import { BaseDialogProps, Dialog } from "@/components/ui/dialog";
import { InputField } from "@/components/ui/input/field";
import { useForm, SubmitHandler, Controller, FormProvider } from "react-hook-form"

type FormData = {
    title: string;
};

export function NewResumeDialog(props: BaseDialogProps) {
    const methods = useForm<FormData>();

    const onsubmit = (data: FormData) => {
        console.log(data)
    };

    return (
        <Dialog
            {...props}
            title="Criar novo curriculo"
            description="Para começar, escolha um titulo para seu curriculo"
            content={
                <FormProvider {...methods}>
                    <form 
                        onSubmit={methods.handleSubmit(onsubmit)}
                        className="flex flex-col"
                    >
                        <InputField
                            name="title"
                            label="Título"
                            required
                        />

                        <Button
                            type="submit"
                            className="w-max mt-6 ml-auto"
                        >
                            Criar
                        </Button>
                    </form>
                </FormProvider>
            }
        />
    )
};
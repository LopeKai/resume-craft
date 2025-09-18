import { Controller, useFormContext } from "react-hook-form";
import { Switch } from ".";
import { cn } from "@/lib/utils";

type SwitchFieldProps = {
    name: string;
    className?: string;
};

export function SwitchField({ name, className, ...props }: SwitchFieldProps) {
    const { control } = useFormContext();

    return (
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState }) => (
                <Switch
                    {...props}
                    className={cn(className)}
                    checked={field.value}
                    onCheckedChange={field.onChange}
                />
            )}
        />
    )
};
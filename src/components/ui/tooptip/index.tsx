import { ReactNode } from "react";
import {
    Tooltip as TooltipRoot,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider,
} from "./primitive";

type TooltipProps = {
    children: ReactNode;
    content: string | number | ReactNode
}

export function Tooltip({ children, content }: TooltipProps) {
    return (
        <TooltipProvider>
            <TooltipRoot delayDuration={300}>
                <TooltipTrigger asChild>
                    {children}
                </TooltipTrigger>

                <TooltipContent>
                    {content}
                </TooltipContent>
            </TooltipRoot>
        </TooltipProvider>
    )
}
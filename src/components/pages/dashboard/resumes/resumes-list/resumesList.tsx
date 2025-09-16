import { AddResumesButton } from "../add-resumes-button";
import { NewResumeDialog } from "../new-resume-dialog";
import { ResumesCard } from "../resumes-card";

export function ResumesList() {
    return (
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 auto-rows-max gap-4 lg:gap-5 flex-1">
            <NewResumeDialog>
                <AddResumesButton />
            </NewResumeDialog>

            <ResumesCard />

            <ResumesCard />

            <ResumesCard />
        </section>
    )
}
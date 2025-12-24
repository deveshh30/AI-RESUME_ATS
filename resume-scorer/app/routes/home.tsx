import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resume } from "../../constants";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "RESUME_SCORER" },
    { name: "description", content: "Smart feedback for your resume" },
  ];
}

export default function Home() {
  return <main>
    <section className="main-section bg-[url('resume-scorer/public/imgs/bg-main.svg')] bg-cover">
      <Navbar/>
      <div className="page-head py-13 flex flex-col text-center">
        <h1 className="uppercase">Track Your APPLICATIONS & Resume Rating</h1>
        <h2>Review your submission and check AI-powered feedback.
        </h2>
      </div>
    </section>

    {resume.length > 0 && (
      <div className="resumes-section">
        {resume.map((item) => (
          <ResumeCard key={item.id} resume={item} />
        ))}
      </div>
    )}


  </main>
}

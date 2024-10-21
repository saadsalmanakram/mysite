import ProjectHero from "@/components/ProjectHero";

export default function Project() {
  return (
    <main className="relative bg-black-100 flex
     justify-center items-center flex-col overflow-hidden
     mx-auto sm:px-10 px-5 min-h-screen">
      <div className="max-w-7xl w-full h-full">
        <ProjectHero />
      </div>
    </main>
  );
}

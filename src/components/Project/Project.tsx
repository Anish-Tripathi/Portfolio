import ProjectList from "./ProjectList";
import ProjectCTA from "./ProjectCTA";

function Project() {
  return (
    <div
      className="min-h-screen"
      style={{ scrollBehavior: "smooth", marginTop: "90px" }}
    >
      <div className="container mx-auto px-5 text-center relative z-10">
        <h1 className="py-3 text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-5">
          My Projects
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
          Exploring the intersection of code and creativity through innovative
          solutions.
        </p>
      </div>
      <ProjectList />
      <ProjectCTA />
    </div>
  );
}

export default Project;

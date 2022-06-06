import { loadProjects } from '../../api/projects';
import { Project } from '../../api/types';
import Navbar from '../../components/Navbar';
import ProjectPreview from '../../components/ProjectPreview';

type Props = {
  projects: Project[]
};

export default function Projects({ projects }: Props) {
  const projectPreviews = projects.map((p, i) => {
    const last = i === projects.length - 1;
    return (
      <ProjectPreview
        key={p.link}
        image={p.image}
        link={p.link}
        title={p.title}
        subtitle={p.subtitle}
        last={last}
      />
    );
  });

  return (
    <div>
      <Navbar
        minimal={false}
        title="Projects"
        description="List of projects Swapnil has worked on."
      />
      <div className="pt-10 md:pt-8">
        {projectPreviews}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const projects = await loadProjects();
  return {
    props: projects ?? [],
  };
}

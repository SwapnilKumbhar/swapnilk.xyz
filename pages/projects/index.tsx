import { loadProjects } from '../../api/projects';
import { Project } from '../../api/types';
import Navbar from '../../components/Navbar';
import ProjectPreview from '../../components/ProjectPreview';

type Props = {
  projects: Project[]
};

export default function Projects({ projects }: Props) {
  const projectPreviews = projects.map((p) => (
    <ProjectPreview
      image={p.image}
      link={p.link}
      title={p.title}
      subtitle={p.subtitle}
    />
  ));

  return (
    <div>
      <Navbar minimal={false} />
      {projectPreviews}
    </div>
  );
}

export async function getStaticProps() {
  const projects = await loadProjects();
  return {
    props: projects ?? [],
  };
}

import { readFile } from 'fs/promises';
import { load } from 'js-yaml';
import { Project } from './types';

const loadProjects = async ():
Promise<Project[] | undefined> => load(
  await readFile(process.env.PROJECTS_PATH ?? '', { encoding: 'utf-8' }),
) as Project[]
    ?? undefined;

export {
  loadProjects,
};

import { getProjectBySlug } from "../services/api/projectApi";

export function useProject(slug) {
  const project = getProjectBySlug(slug);

  return {
    project,
    notFound: !project,
  };
}
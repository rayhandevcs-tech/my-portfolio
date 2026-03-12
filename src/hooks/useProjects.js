import { getAllProjects } from "../services/api/projectApi";

export function useProjects() {
  const projects = getAllProjects();

  return { projects };
}
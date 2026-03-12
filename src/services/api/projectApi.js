import { projects } from "../../data/projects";

export function getAllProjects() {
  return projects;
}

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
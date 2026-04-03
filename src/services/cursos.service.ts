import { fetchAPI } from "./cliente.service";
import type { Curso, Aula } from "@/types/curso";

export function getCursos() {
  return fetchAPI<Curso[]>("/cursos");
}

export function getCurso(slug: string) {
  return fetchAPI<Curso & { aulas: Aula[] }>(`/cursos/${slug}`);
}

export function getAula(curso: string, aula: string) {
  return fetchAPI<Aula>(`/cursos/${curso}/${aula}`);
}

export function getCursoCompleto(slug: string) {
  return getCurso(slug);
}

// src/services/imagem.service.ts

import { createSupabaseServer } from "@/lib/supabase/server";
import type { Imagem } from "@/types/imagem";

const supabase = createSupabaseServer();
/**
 * Busca todos os tipos únicos de imagens
 */
export async function getTiposImagens(): Promise<string[] | null> {
  try {
    const { data, error } = await supabase
      .from("imagens")
      .select("tipo")
      .order("tipo", { ascending: true });

    if (error) {
      console.error(error);
      return null;
    }

    if (!data || data.length === 0) {
      return [];
    }

    const tiposUnicos = Array.from(
      new Set(
        data
          .map((item) => item.tipo)
          .filter((tipo): tipo is string => Boolean(tipo))
      )
    );

    return tiposUnicos;
  } catch (err) {
    console.error("Crash SSR getTiposImagens:", err);
    return null;
  }
}
/**
 * Busca imagens
 */
export async function getImagens(
  tipo: string,
): Promise<Imagem[] | null> {
  try {
    if (!tipo) return null;

    const { data, error } = await supabase
      .from("imagens")
      .select("*")
      .order("id", { ascending: true });

    if (error) {
      console.error(error);
    }

    if (!data) {
      console.warn("Sem dados retornados do Supabase");
      return [];
    }

    return data as Imagem[];
  } catch (err) {
    console.error("Crash SSR getImagensPorTipo:", err);
    return null;
  }
}
/**
 * Busca imagens por tipo
 */
export async function getImagensPorTipo(
  tipo: string,
): Promise<Imagem[] | null> {
  try {
    if (!tipo) return null;

    const { data, error } = await supabase
      .from("imagens")
      .select("*")
      .eq("tipo", tipo)
      .order("id", { ascending: true });

    if (error) {
      console.error(error);
    }

    if (!data) {
      console.warn("Sem dados retornados do Supabase");
      return [];
    }

    return data as Imagem[];
  } catch (err) {
    console.error("Crash SSR getImagensPorTipo:", err);
    return null;
  }
}
/**
 * Busca imagem por ID
 */
export async function getImagemPorId(id: number): Promise<Imagem | null> {
  try {
    if (!id) return null;

    const { data, error } = await supabase
      .from("imagens")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error(error);
    }

    return data as Imagem;
  } catch (err) {
    console.error("Crash SSR getImagemPorId:", err);
    return null;
  }
}
/**
 * Busca imagens por pesquisa no campo descrição
 */
export async function getPesquisa(pesquisa: string): Promise<Imagem[] | null> {
  try {
    let query = supabase.from("imagens").select("*");

    if (pesquisa && pesquisa.length >= 4) {
      query = query.ilike("desc", `%${pesquisa}%`);
    }

    const { data, error } = await query;

    if (error) {
      console.error(error);
    }

    return data as Imagem[];
  } catch (err) {
    console.error("Erro na pesquisa:", err);
    return null;
  }
}

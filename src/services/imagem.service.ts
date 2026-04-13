// src/services/imagem.service.ts

import { createSupabaseServer } from "@/lib/supabase/server";
import type { Imagem } from "@/types/imagem";

/**
 * Busca todos os tipos únicos de imagens
 */
import type { Tipo } from "@/types/tipo";

export async function getTiposImagens(): Promise<Tipo[]> {
const supabase = createSupabaseServer();
  try {
    const { data, error } = await supabase
      .from("imagens")
      .select("tipo, slug") // 👈 MUITO IMPORTANTE

    if (error) {
      console.error(error);
      return [];
    }

    if (!data || data.length === 0) {
      return [];
    }

    // remove duplicados pelo slug
    const tiposUnicos = Array.from(
      new Map(
        data.map((item) => [item.slug, item])
      ).values()
    );

    return tiposUnicos;
  } catch (err) {
    console.error("Crash SSR getTiposImagens:", err);
    return [];
  }
}
/**
 * Busca imagens
 */
export async function getImagens(
  tipo: string,
): Promise<Imagem[] | null> {
const supabase = createSupabaseServer();
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
  slug: string,
): Promise<Imagem[]> {
const supabase = createSupabaseServer();
  try {
    if (!slug) return [];

    const { data, error } = await supabase
      .from("imagens")
      .select("*")
      .eq("slug", slug)
      .order("id", { ascending: true });

    if (error) {
      console.error(error);
      return [];
    }

    return data ?? [];
  } catch (err) {
    console.error("Crash SSR getImagensPorTipo:", err);
    return [];
  }
}
/**
 * Busca imagem por ID
 */
export async function getImagemPorId(id: number): Promise<Imagem | null> {
const supabase = createSupabaseServer();
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
 * Busca imagens por pesquisa no campo nome
 */
export async function getPesquisa(pesquisa: string): Promise<Imagem[] | null> {
const supabase = createSupabaseServer();
  try {
    let query = supabase.from("imagens").select("*");

    if (pesquisa && pesquisa.length >= 4) {
      query = query.ilike("nome", `%${pesquisa}%`);
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

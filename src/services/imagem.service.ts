// src/services/imagem.service.ts

import { createSupabaseServer } from "@/lib/supabase/server";
import type { Imagem } from "@/types/imagem";

/**
 * Busca imagens e retorna 1 "capa" por tipo
 */
export async function getTiposComCapa(): Promise<Imagem[] | null> {
  try {
    const supabase = createSupabaseServer();

    const { data, error } = await supabase.from("imagens").select("*");

    if (error || !data) {
      console.error("Supabase error (getTiposComCapa):", error);
      return null;
    }

    const mapa = new Map<string, Imagem>();

    for (const img of data as Imagem[]) {
      if (!img?.tipo) continue;

      // mantém a primeira encontrada como capa (mais estável que Math.random)
      if (!mapa.has(img.tipo)) {
        mapa.set(img.tipo, img);
      }
    }

    return Array.from(mapa.values());
  } catch (err) {
    console.error("Crash SSR getTiposComCapa:", err);
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

    const supabase = createSupabaseServer();

    const { data, error } = await supabase
      .from("imagens")
      .select("*")
      .eq("tipo", tipo)
      .order("id", { ascending: true });

    if (error || !data) {
      console.error("Supabase error (getImagensPorTipo):", error);
      return null;
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

    const supabase = createSupabaseServer();

    const { data, error } = await supabase
      .from("imagens")
      .select("*")
      .eq("id", id)
      .single();

    if (error || !data) {
      console.error("Supabase error (getImagemPorId):", error);
      return null;
    }

    return data as Imagem;
  } catch (err) {
    console.error("Crash SSR getImagemPorId:", err);
    return null;
  }
}

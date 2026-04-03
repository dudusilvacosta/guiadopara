// src/services/imagem.service.ts
import { createSupabaseServer } from "@/lib/supabase/server";
import type { Imagem } from "@/types/imagem";

export async function getTiposComCapa() {
  const supabase = createSupabaseServer();

  const { data, error } = await supabase.from("imagens").select("*");

  if (error) throw error;

  const mapa = new Map<string, Imagem>();

  data.forEach((img: Imagem) => {
    if (!img.tipo) return;

    if (!mapa.has(img.tipo)) {
      mapa.set(img.tipo, img);
    } else {
      if (Math.random() > 0.5) {
        mapa.set(img.tipo, img);
      }
    }
  });

  return Array.from(mapa.values());
}

export async function getImagensPorTipo(tipo: string) {
  const supabase = createSupabaseServer();

  const { data, error } = await supabase
    .from("imagens")
    .select("*")
    .eq("tipo", tipo)
    .order("id", { ascending: true });

  if (error) throw error;

  return data as Imagem[];
}

export async function getImagemPorId(id: number) {
  const supabase = createSupabaseServer();

  const { data, error } = await supabase
    .from("imagens")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;

  return data as Imagem;
}

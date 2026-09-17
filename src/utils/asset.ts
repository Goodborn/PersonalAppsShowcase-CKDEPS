const BASE = import.meta.env.BASE_URL;

export function resolveAsset(path: string): string {
  if (!path) return path;
  if (/^(https?:)?\/\//.test(path)) return path;
  const base = BASE.endsWith("/") ? BASE.slice(0, -1) : BASE;
  return path.startsWith("/") ? `${base}${path}` : path;
}
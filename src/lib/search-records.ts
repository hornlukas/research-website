function sitePath(base: string, path: string) {
  return `${base.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}

export function paperSearchUrl(link: string, base: string, index: number) {
  const fallback = sitePath(base, `papers#paper-${index + 1}`);
  const value = link.trim();
  if (!value || value === '#') return fallback;
  // Only publish web links; placeholder or unsafe schemes point to the local paper.
  try {
    const resolved = new URL(value, 'https://search.invalid');
    if (!['http:', 'https:'].includes(resolved.protocol)) return fallback;
    if (/^(https?:)?\/\//i.test(value)) return value;
    if (value.startsWith('#')) return sitePath(base, `papers${value}`);
    return sitePath(base, value);
  } catch {
    return fallback;
  }
}

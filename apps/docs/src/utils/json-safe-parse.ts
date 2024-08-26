export default function safeParse<T>(str: string): any | null {
  try {
    const parseResult: T = JSON.parse(str);

    return parseResult;
  } catch {
    return null;
  }
}

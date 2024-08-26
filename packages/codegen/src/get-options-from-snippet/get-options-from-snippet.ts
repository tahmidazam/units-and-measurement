import { CodegenOptions } from "../options/options";

export function getOptionsFromSnippet(
  snippet: string,
  className: string,
  baseUnit: string
): CodegenOptions {
  const units: {
    [key: string]: [string, string];
  } = {};

  const symbolPattern = /static let (\w+)\s+=\s+"([^"]+)"/g;
  const coefficientPattern = /static let (\w+)\s+=\s+(.+)/g;

  let match: RegExpExecArray | null;

  // Parse the symbols
  const symbolMap: Record<string, string> = {};
  while ((match = symbolPattern.exec(snippet)) !== null) {
    const key = match[1];
    const value = match[2];
    if (key && value) {
      symbolMap[key] = value;
    }
  }

  // Parse the coefficients and combine with symbols
  while ((match = coefficientPattern.exec(snippet)) !== null) {
    const unitName = match[1];
    const coefficient = match[2];

    if (unitName && symbolMap[unitName] !== undefined && coefficient) {
      units[unitName] = [
        symbolMap[unitName],
        coefficient.replaceAll(".pi", "Math.PI").replaceAll("pow", "Math.pow"),
      ];
    }
  }

  return {
    className,
    baseUnit,
    units,
  };
}

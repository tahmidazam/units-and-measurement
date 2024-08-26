import { CodegenOptions } from "../options/options";

/**
 * Generates the code for a dimension subclass.
 * @param options The options for the dimension subclass code generation function.
 * @returns The TypeScript code for the dimension subclass.
 */
export function codegen(options: CodegenOptions): string {
  const { className, units, baseUnit } = options;

  const symbolObjectContent: string = Object.keys(units)
    .map((key: string): string => {
      const symbol: string = units[key]![0];

      return `${key}: "${symbol}",`;
    })
    .join("\n    ");

  const coefficientObjectContent: string = Object.keys(units)
    .map((key: string): string => {
      const coefficient: string = units[key]![1];

      return `${key}: ${coefficient},`;
    })
    .join("\n    ");

  const classDeclarationContent: string = Object.keys(units)
    .map((key: string): string => {
      return `
      static ${key}: ${className} =
          new (class extends ${className} {
            constructor() {
              super(
                ${className}.SYMBOL.${key},
                ${className}.COEFFICIENT.${key}
              );
            }
          })();
      `;
    })
    .join("\n\n");

  const template: string = `
  import { Dimension } from "../dimension/dimension";
  import { UnitConverterLinear } from "../unit-converter-linear/unit-converter-linear";

  export class ${className} extends Dimension {
    static SYMBOL = {
      ${symbolObjectContent}
    } as const;

    static COEFFICIENT = {
      ${coefficientObjectContent}
    } as const;

    private constructor(symbol: string, coefficient: number) {
      super(symbol, new UnitConverterLinear(coefficient, 0));
    }

    ${classDeclarationContent}

    baseUnit(): Dimension {
      return ${className}.${baseUnit};
    }
  }
`;

  return template;
}

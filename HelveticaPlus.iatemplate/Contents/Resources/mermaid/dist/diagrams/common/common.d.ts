import type { MermaidConfig } from '../../config.type.js';
export declare const lineBreakRegex: RegExp;
/**
 * Gets the rows of lines in a string
 *
 * @param s - The string to check the lines for
 * @returns The rows in that string
 */
export declare const getRows: (s?: string) => string[];
/**
 * Removes script tags from a text
 *
 * @param txt - The text to sanitize
 * @returns The safer text
 */
export declare const removeScript: (txt: string) => string;
export declare const sanitizeText: (text: string, config: MermaidConfig) => string;
export declare const sanitizeTextOrArray: (a: string | string[] | string[][], config: MermaidConfig) => string | string[];
/**
 * Whether or not a text has any line breaks
 *
 * @param text - The text to test
 * @returns Whether or not the text has breaks
 */
export declare const hasBreaks: (text: string) => boolean;
/**
 * Splits on <br> tags
 *
 * @param text - Text to split
 * @returns List of lines as strings
 */
export declare const splitBreaks: (text: string) => string[];
/**
 * Converts a string/boolean into a boolean
 *
 * @param val - String or boolean to convert
 * @returns The result from the input
 */
export declare const evaluate: (val?: string | boolean) => boolean;
/**
 * Wrapper around Math.max which removes non-numeric values
 * Returns the larger of a set of supplied numeric expressions.
 * @param values - Numeric expressions to be evaluated
 * @returns The smaller value
 */
export declare const getMax: (...values: number[]) => number;
/**
 * Wrapper around Math.min which removes non-numeric values
 * Returns the smaller of a set of supplied numeric expressions.
 * @param values - Numeric expressions to be evaluated
 * @returns The smaller value
 */
export declare const getMin: (...values: number[]) => number;
/**
 * Makes generics in typescript syntax
 *
 * @example
 * Array of array of strings in typescript syntax
 *
 * ```js
 * // returns "Array<Array<string>>"
 * parseGenericTypes('Array~Array~string~~');
 * ```
 * @param text - The text to convert
 * @returns The converted string
 */
export declare const parseGenericTypes: (text: string) => string;
declare const _default: {
    getRows: (s?: string | undefined) => string[];
    sanitizeText: (text: string, config: MermaidConfig) => string;
    sanitizeTextOrArray: (a: string | string[] | string[][], config: MermaidConfig) => string | string[];
    hasBreaks: (text: string) => boolean;
    splitBreaks: (text: string) => string[];
    lineBreakRegex: RegExp;
    removeScript: (txt: string) => string;
    getUrl: (useAbsolute: boolean) => string;
    evaluate: (val?: string | boolean | undefined) => boolean;
    getMax: (...values: number[]) => number;
    getMin: (...values: number[]) => number;
};
export default _default;

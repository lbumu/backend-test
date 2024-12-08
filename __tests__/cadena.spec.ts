import { describe, test} from "@jest/globals";
import { contarCoincidenciasEnCadena } from "../../backend-test/src/app/cadenas";

describe('contarCoincidenciasEnCadena', () => {
    test('debe contar correctamente las coincidencias de una subcadena', () => {
      expect(contarCoincidenciasEnCadena('ababab', 'ab')).toBe(3);
    });
  
    test('debe devolver 0 si no hay coincidencias', () => {
      expect(contarCoincidenciasEnCadena('abcdef', 'gh')).toBe(0);
    });
  
    test('debe manejar casos donde la subcadena es igual a la cadena', () => {
      expect(contarCoincidenciasEnCadena('hello', 'hello')).toBe(1);
    });
  
    test('debe devolver 0 si la subcadena es mayor que la cadena', () => {
      expect(contarCoincidenciasEnCadena('short', 'toolong')).toBe(0);
    });
  
    test('debe manejar cadenas vacías correctamente', () => {
      expect(contarCoincidenciasEnCadena('', 'sub')).toBe(0);
      expect(contarCoincidenciasEnCadena('cadena', '')).toBe(0);
      expect(contarCoincidenciasEnCadena('', '')).toBe(0);
    });
  
    test('debe contar coincidencias superpuestas correctamente', () => {
      expect(contarCoincidenciasEnCadena('aaaa', 'aa')).toBe(3);
    });
  });

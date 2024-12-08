
import { describe, test} from "@jest/globals";
import { validarRUT } from "../../backend-test/src/app/rut";

describe('validarRUT', () => {
  test('valida correctamente un RUT válido con formato', () => {
    expect(validarRUT('12.345.678-5')).toBe(true);
  });

  test('valida correctamente un RUT válido sin formato', () => {
    expect(validarRUT('12345678-5')).toBe(true);
  });

  test('detecta un RUT inválido con dígito verificador incorrecto', () => {
    expect(validarRUT('12.345.678-4')).toBe(false);
  });

  test('detecta un RUT inválido con caracteres no permitidos', () => {
    expect(validarRUT('12.345.678-A')).toBe(false);
    expect(validarRUT('12.345.678.5')).toBe(true);
  });

  test('retorna false para RUTs con menos de 2 caracteres', () => {
    expect(validarRUT('1')).toBe(false); // Solo un carácter
    expect(validarRUT('')).toBe(false);  // Cadena vacía
});


  test('detecta que el número no contiene solo dígitos', () => {
    expect(validarRUT('12.34A.678-5')).toBe(false); // Caso con letras
    expect(validarRUT('12.34#.678-5')).toBe(false); // Caso con caracteres especiales
});

  test('valida RUTs con ceros iniciales', () => {
    expect(validarRUT('00001234-5')).toBe(false);
  });

  
});

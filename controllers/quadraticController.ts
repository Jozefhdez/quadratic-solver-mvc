import { QuadraticEquation, QuadraticResult } from '../models/quadraticEcuation';

export class QuadraticController {
  static validateInputs(a: string, b: string, c: string): { isValid: boolean; error?: string } {
    if (!a.trim() || !b.trim() || !c.trim()) {
      return { isValid: false, error: 'Completa todos los campos' };
    }

    const numA = parseFloat(a);
    const numB = parseFloat(b);
    const numC = parseFloat(c);

    if (isNaN(numA) || isNaN(numB) || isNaN(numC)) {
      return { isValid: false, error: 'Ingresa numeros validos' };
    }

    return { isValid: true };
  }

  static calculateRoots(a: string, b: string, c: string): QuadraticResult {
    const validation = this.validateInputs(a, b, c);
    if (!validation.isValid) {
      return {
        hasRealRoots: false,
        roots: [],
        error: validation.error
      };
    }
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    const numC = parseFloat(c);

    const equation = new QuadraticEquation(numA, numB, numC);
    return equation.calculateRoots();
  }
}

export const calculateRoots = (a: string, b: string, c: string): QuadraticResult => {
  return QuadraticController.calculateRoots(a, b, c);
};
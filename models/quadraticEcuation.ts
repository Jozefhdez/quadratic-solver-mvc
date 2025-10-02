export interface QuadraticResult {
  hasRealRoots: boolean;
  roots: number[];
  complexRoots?: { real: number; imaginary: number }[];
  error?: string;
}

export class QuadraticEquation {
  constructor(
    public a: number,
    public b: number,
    public c: number
  ) {}

  calculateRoots(): QuadraticResult {
    if (this.a === 0) {
      return {
        hasRealRoots: false,
        roots: [],
        error: 'No es una ecuacion de segundo grado'
      };
    }

    const discriminant = this.b ** 2 - 4 * this.a * this.c;

    if (discriminant > 0) {
      const root1 = (-this.b + Math.sqrt(discriminant)) / (2 * this.a);
      const root2 = (-this.b - Math.sqrt(discriminant)) / (2 * this.a);
      return {
        hasRealRoots: true,
        roots: [root1, root2],
      };
    } else if (discriminant === 0) {
      const root = -this.b / (2 * this.a);
      return {
        hasRealRoots: false,
        roots: [root],
      };
    } else {
      const realPart = -this.b / (2 * this.a);
      const imaginaryPart = Math.sqrt(-discriminant) / (2 * this.a);
      return {
        hasRealRoots: false,
        roots: [],
        complexRoots: [
          { real: realPart, imaginary: imaginaryPart },
          { real: realPart, imaginary: -imaginaryPart }
        ],
      };
    }
  }
}
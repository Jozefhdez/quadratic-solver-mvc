# Resolvedor de Ecuaciones Cuadráticas

Una aplicación móvil en React Native que resuelve ecuaciones de segundo grado siguiendo el patrón de arquitectura **MVC (Modelo-Vista-Controlador)**.

## Capturas de Pantalla

| Ecuación con Raíces Reales | Ecuación con Raíces Complejas | Validación de Errores |

| ![Raíces Reales](images/image1.png) | ![Raíces Complejas](images/image2.png) | ![Validación](images/image3.png) |


### Estructura de Archivos

```
src/
├── app/(tabs)/
│   └── index.tsx                 # VISTA - UI
├── controllers/
│   └── quadraticController.ts    # CONTROLADOR
└── models/
    └── quadraticEcuation.ts      # MODELO - Lógica matemática
```
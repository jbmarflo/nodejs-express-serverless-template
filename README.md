# Proyecto Node.js + Express - Plantilla para Microservicios

Esta plantilla está diseñada para ayudarte a desarrollar **microservicios** utilizando **Node.js** y **Express**, estructurada bajo el enfoque **DDD (Domain-Driven Design)**. Además, está lista para ser desplegada en un entorno **serverless** con solo algunas configuraciones adicionales.

## Estructura del Proyecto

El proyecto sigue una estructura clara y organizada para separar responsabilidades y facilitar el desarrollo y mantenimiento.

### 1. **`/routes/`**: Rutas y Controladores

En la carpeta **`routes/`**, encontrarás los archivos que gestionan las **rutas de la aplicación**. Las rutas están conectadas a los **controladores**, que son responsables de manejar la lógica de las solicitudes HTTP.

Por ejemplo:
- `/latex`: Maneja la conversión de texto LaTeX a otros formatos.
- `/latex/detect`: Detecta la presencia de LaTeX en una solicitud.

Las rutas se definen utilizando un **decorador especial** llamado `@Route`, que simplifica el registro de rutas en la aplicación.

### 2. **`/module.ts`**: Inyección de Dependencias

El archivo **`module.ts`** es donde se manejan las **inyecciones de dependencias**. Este archivo sigue el patrón **IoC (Inversión de Control)**, permitiendo registrar los servicios necesarios y sus dependencias, para luego inyectarlos en los controladores u otros servicios según sea necesario.

#### Ejemplo:

```typescript
import { ConverterService } from './application/service/converter.service';

export function registerServices() {
    container.register<ConverterService>('ConverterService', ConverterService);
}

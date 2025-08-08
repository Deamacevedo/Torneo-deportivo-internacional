# Torneo Deportivo Internacional - Base de Datos MongoDB

**Estudiante:** Dylan Acevedo
**Proyecto:** Sistema de gestión de base de datos para torneo deportivo internacional  
**Tecnología:** MongoDB 

## Descripción del Proyecto

Este proyecto implementa una base de datos completa para la gestión del Torneo Deportivo Internacional organizado por GlobalSports Union. El sistema permite registrar y consultar información sobre países participantes, atletas, competiciones y resultados en diversas disciplinas deportivas como atletismo, natación, judo, ciclismo y esgrima.

## Arquitectura de la Base de Datos

### Base de Datos: `torneo_deportivo_internacional`

La base de datos está compuesta por **3 colecciones principales**:

1. **`paises`** - Información de países y delegaciones participantes
2. **`atletas`** - Datos detallados de cada competidor
3. **`competiciones`** - Registro de eventos deportivos y resultados

### Características Principales

- **15 documentos por colección** (45 documentos totales)
- **Relaciones lógicas** entre colecciones mediante campos comunes
- **Variedad de tipos de datos**: String, Number, Date, Boolean, Arrays, Objetos anidados
- **Consultas optimizadas** para el dominio deportivo

## Estructura de Archivos

```
/torneo-deportivo-internacional
│
├── README.md                   # Este archivo - información general
├── modelo_de_datos.md          # Documentación detallada del modelo
├── inserciones.js              # Script con datos de las 3 colecciones
├── consultas_sencillas.js      # 5 consultas básicas sin operadores
├── consultas_operadores.js     # 15 consultas con operadores avanzados
└── capturas/                   # (opcional) Screenshots de MongoDB
```

## Instrucciones de Ejecución

### Prerrequisitos
- MongoDB instalado localmente O acceso a MongoDB Atlas
- MongoDB Compass (opcional, para interfaz gráfica)
- MongoDB Shell (mongosh) O cualquier cliente MongoDB

### Pasos para Ejecutar

1. **Crear la base de datos y colecciones:**
   ```javascript
   // En MongoDB Shell o Compass
   use torneo_deportivo_internacional
   ```

2. **Insertar los datos:**
   ```bash
   # Ejecutar el archivo completo de inserciones
   mongosh < inserciones.js
   ```
   
   O copiar y pegar el contenido de `inserciones.js` en MongoDB Compass

3. **Ejecutar consultas sencillas:**
   ```bash
   mongosh < consultas_sencillas.js
   ```

4. **Ejecutar consultas con operadores:**
   ```bash
   mongosh < consultas_operadores.js
   ```

### Ejecución en MongoDB Atlas

Si usas MongoDB Atlas:
1. Conecta a tu cluster
2. Selecciona la base de datos `torneo_deportivo_internacional`
3. Usa la consola de MongoDB o importa los scripts directamente

## Contenido de los Archivos

### `modelo_de_datos.md`
- Análisis completo del contexto del torneo
- Justificación de la estructura de colecciones elegida
- Descripción detallada de campos y tipos de datos
- Explicación de las relaciones entre entidades

### `inserciones.js`
- **15 países** de diferentes continentes con datos completos de delegaciones
- **15 atletas** de diversas disciplinas con información física y logros
- **15 competiciones** en diferentes fases (programadas, finalizadas) con resultados

### `consultas_sencillas.js`
Incluye 5 consultas básicas:
- Atletas por país
- Competiciones por disciplina  
- Países por continente
- Competiciones por fecha
- Atletas por género

### `consultas_operadores.js`
Incluye 15 consultas avanzadas usando operadores como:
- `$gte`, `$lte`, `$gt`, `$lt`, `$ne` (comparación)
- `$in`, `$nin` (inclusión/exclusión)
- `$or`, `$and` (lógicos)
- `$exists`, `$regex` (existencia y patrones)
- `$expr`, `$size` (expresiones y tamaños de arrays)
- Consultas sobre campos anidados y arrays

## Ejemplo de Datos

### País
```javascript
{
  codigo_pais: "COL",
  nombre: "Colombia", 
  continente: "América del Sur",
  delegacion: {
    jefe_delegacion: "Carlos Ramírez",
    total_atletas: 45
  },
  medallas_historicas: { oro: 12, plata: 18, bronce: 25 }
}
```

### Atleta
```javascript
{
  numero_atleta: 1001,
  nombre: "Carlos",
  apellido: "Rodríguez", 
  pais: "COL",
  disciplinas: ["atletismo", "salto largo"],
  datos_fisicos: { altura: 182, peso: 78 },
  logros: [{ competencia: "Panamericanos 2022", medalla: "oro" }]
}
```

## Funcionalidades Implementadas

✅ **Gestión de países y delegaciones**  
✅ **Registro completo de atletas**  
✅ **Seguimiento de competiciones y resultados**  
✅ **Consultas por múltiples criterios**  
✅ **Estadísticas y métricas deportivas**  
✅ **Relaciones entre entidades**  
✅ **Flexibilidad para nuevas disciplinas**

## Casos de Uso Soportados

- **Organización del torneo**: Consultar países participantes, atletas por delegación
- **Gestión de competiciones**: Programar eventos, registrar resultados
- **Análisis estadístico**: Medalleros, rendimiento por país/disciplina
- **Consultas de prensa**: Información de atletas, resultados históricos
- **Planificación logística**: Número de participantes, sedes requeridas

## Tecnologías y Conceptos MongoDB Utilizados

- **Documentos BSON** con estructura flexible
- **Colecciones** organizadas por entidad de negocio
- **Campos anidados** para agrupar información relacionada
- **Arrays** para listas de elementos (disciplinas, logros, participantes)
- **Índices implícitos** en _id para rendimiento
- **Consultas complejas** con múltiples operadores
- **Agregación básica** mediante operadores de consulta

## Validación de Datos

Los datos insertados incluyen:
- **Variedad geográfica**: 6 continentes representados
- **Diversidad deportiva**: 6 disciplinas diferentes  
- **Rangos de edad**: Atletas de 21 a 30 años
- **Géneros balanceados**: Competiciones masculinas y femeninas
- **Estados diversos**: Competiciones programadas, finalizadas, en curso
- **Tipos de resultado**: Tiempos, distancias, puntos, técnicas

---

*Este proyecto demuestra el uso efectivo de MongoDB para aplicaciones deportivas complejas, implementando un modelo de datos robusto y consultas optimizadas para el dominio específico de torneos internacionales.*
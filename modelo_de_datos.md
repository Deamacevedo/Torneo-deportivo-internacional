# Modelo de Datos - Torneo Deportivo Internacional

## Análisis del Contexto

Para el Torneo Deportivo Internacional de GlobalSports Union, se requiere un sistema que gestione información de múltiples países, disciplinas deportivas, atletas y competiciones. Después del análisis, he identificado las siguientes necesidades: 

- Gestión de países y delegaciones
- Registro de atletas con sus características
- Organización de disciplinas deportivas
- Seguimiento de competiciones y resultados
- Manejo de equipos por disciplina

## Entidades Identificadas

1. **Países/Delegaciones**: Información de los países participantes
2. **Atletas**: Datos individuales de cada competidor
3. **Disciplinas**: Deportes y categorías del torneo
4. **Competiciones**: Eventos específicos con resultados
5. **Equipos**: Grupos de atletas por disciplina (cuando aplique)

## Colecciones Propuestas

### 1. Colección: `paises`
Almacena información de los países y delegaciones participantes.

**Campos:**
- `_id`: ObjectId (automático)
- `codigo_pais`: String (código ISO de 3 letras, ej: "COL")
- `nombre`: String (nombre del país)
- `continente`: String (continente al que pertenece)
- `delegacion`: Object (información de la delegación)
  - `jefe_delegacion`: String
  - `entrenadores`: Array de Strings
  - `total_atletas`: Number
- `medallas_historicas`: Object
  - `oro`: Number
  - `plata`: Number
  - `bronce`: Number
- `fecha_inscripcion`: Date

### 2. Colección: `atletas`
Contiene información detallada de cada atleta participante.

**Campos:**
- `_id`: ObjectId (automático)
- `numero_atleta`: Number (identificador único)
- `nombre`: String
- `apellido`: String
- `edad`: Number
- `genero`: String ("M" o "F")
- `pais`: String (código del país)
- `disciplinas`: Array de Strings (deportes que practica)
- `categoria`: String (juvenil, adulto, veterano)
- `datos_fisicos`: Object
  - `altura`: Number (en cm)
  - `peso`: Number (en kg)
- `experiencia`: Object
  - `anios_practicando`: Number
  - `competencias_internacionales`: Number
- `logros`: Array de Objects
  - `competencia`: String
  - `posicion`: Number
  - `medalla`: String
  - `ano`: Number
- `activo`: Boolean
- `fecha_registro`: Date

### 3. Colección: `competiciones`
Registra las competiciones específicas del torneo.

**Campos:**
- `_id`: ObjectId (automático)
- `codigo_competencia`: String (identificador único)
- `disciplina`: String
- `categoria`: String
- `genero`: String ("M", "F", "Mixto")
- `tipo`: String ("individual", "equipo")
- `fase`: String ("clasificacion", "semifinal", "final")
- `fecha`: Date
- `hora`: String
- `sede`: String
- `participantes`: Array de Objects
  - `numero_atleta`: Number
  - `pais`: String
  - `resultado`: String/Number (tiempo, puntos, etc.)
  - `posicion`: Number
- `resultados_finales`: Object
  - `oro`: Object (número_atleta, pais, resultado)
  - `plata`: Object (número_atleta, pais, resultado)
  - `bronce`: Object (número_atleta, pais, resultado)
- `estado`: String ("programada", "en_curso", "finalizada")
- `observaciones`: String

## Justificación de la Estructura

### Diseño de Colecciones
He optado por 3 colecciones principales que permiten:

1. **Separación lógica**: Cada colección representa una entidad clara del dominio
2. **Flexibilidad**: Permite consultas eficientes tanto por país, atleta o competición
3. **Escalabilidad**: Fácil de extender con nuevos campos o subdocumentos
4. **Desnormalización controlada**: Se repite información clave (como código de país) para optimizar consultas frecuentes

### Tipos de Datos Utilizados
- **String**: Para nombres, códigos, categorías
- **Number**: Para edades, medallas, resultados numéricos
- **Date**: Para fechas de competiciones y registros
- **Boolean**: Para estados activo/inactivo
- **Array**: Para listas de disciplinas, logros, participantes
- **Object**: Para agrupar información relacionada (delegación, datos físicos, resultados)

### Relaciones Entre Colecciones
- `atletas.pais` → `paises.codigo_pais`
- `competiciones.participantes.numero_atleta` → `atletas.numero_atleta`
- `competiciones.disciplina` puede relacionarse con un catálogo de disciplinas

Esta estructura permite consultas eficientes manteniendo la flexibilidad característica de MongoDB, evitando joins complejos mientras conserva la integridad conceptual de los datos.
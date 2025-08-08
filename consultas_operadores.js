// =============================================================================
// CONSULTAS CON OPERADORES - TORNEO DEPORTIVO INTERNACIONAL
// Consultas usando operadores de comparación, lógicos, arrays y campos anidados
// =============================================================================

use torneo_deportivo_internacional

// =============================================================================
// CONSULTA 1: Atletas con edad entre 20 y 25 años ($gte, $lte)
// =============================================================================

db.atletas.find({
  "edad": {
    "$gte": 20,
    "$lte": 25
  }
});

/*
Operadores usados: $gte, $lte
Resultado esperado: Atletas entre 20 y 25 años
*/

// =============================================================================
// CONSULTA 2: Países con más de 50 atletas en su delegación ($gt)
// =============================================================================

db.paises.find({
  "delegacion.total_atletas": {
    "$gt": 50
  }
});

/*
Operadores usados: $gt (sobre campo anidado)
Resultado esperado: USA, Brasil, Alemania, Japón, Francia, China, Rusia
*/

// =============================================================================
// CONSULTA 3: Atletas que practican atletismo O natación ($or, $in)
// =============================================================================

db.atletas.find({
  "$or": [
    { "disciplinas": { "$in": ["atletismo"] } },
    { "disciplinas": { "$in": ["natación"] } }
  ]
});

/*
Operadores usados: $or, $in (sobre arrays)
Resultado esperado: Atletas de atletismo o natación
*/

// =============================================================================
// CONSULTA 4: Competiciones finalizadas después del 20 de agosto ($and, $gte)
// =============================================================================

db.competiciones.find({
  "$and": [
    { "estado": "finalizada" },
    { "fecha": { "$gte": ISODate("2024-08-20") } }
  ]
});

/*
Operadores usados: $and, $gte
Resultado esperado: Competiciones finalizadas desde el 20 de agosto
*/

// =============================================================================
// CONSULTA 5: Países que NO son de América del Sur ($ne)
// =============================================================================

db.paises.find({
  "continente": {
    "$ne": "América del Sur"
  }
});

/*
Operadores usados: $ne
Resultado esperado: Todos los países excepto Colombia y Brasil
*/

// =============================================================================
// CONSULTA 6: Atletas con peso menor a 60kg ($lt)
// =============================================================================

db.atletas.find({
  "datos_fisicos.peso": {
    "$lt": 60
  }
});

/*
Operadores usados: $lt (sobre campo anidado)
Resultado esperado: Atletas con peso menor a 60kg
*/

// =============================================================================
// CONSULTA 7: Atletas que practican múltiples disciplinas ($size mayor a 1)
// =============================================================================

db.atletas.find({
  "$expr": {
    "$gt": [{ "$size": "$disciplinas" }, 1]
  }
});

/*
Operadores usados: $expr, $gt, $size
Resultado esperado: Atletas con más de una disciplina
*/

// =============================================================================
// CONSULTA 8: Países con medallas de oro entre 15 y 30 ($gte, $lte)
// =============================================================================

db.paises.find({
  "medallas_historicas.oro": {
    "$gte": 15,
    "$lte": 30
  }
});

/*
Operadores usados: $gte, $lte (sobre campo anidado)
Resultado esperado: Países con 15-30 medallas de oro
*/

// =============================================================================
// CONSULTA 9: Competiciones que NO están programadas ($nin)
// =============================================================================

db.competiciones.find({
  "estado": {
    "$nin": ["programada"]
  }
});

/*
Operadores usados: $nin
Resultado esperado: Competiciones finalizadas o en curso
*/

// =============================================================================
// CONSULTA 10: Atletas con más de 15 competencias internacionales Y menos de 30 años ($and)
// =============================================================================

db.atletas.find({
  "$and": [
    { "experiencia.competencias_internacionales": { "$gt": 15 } },
    { "edad": { "$lt": 30 } }
  ]
});

/*
Operadores usados: $and, $gt, $lt (sobre campos anidados)
Resultado esperado: Atletas jóvenes con mucha experiencia internacional
*/

// =============================================================================
// CONSULTA 11: Buscar atletas que tengan logros en años específicos ($in sobre array de objetos)
// =============================================================================

db.atletas.find({
  "logros.ano": {
    "$in": [2023, 2024]
  }
});

/*
Operadores usados: $in (sobre campo de array de objetos)
Resultado esperado: Atletas con logros en 2023 o 2024
*/

// =============================================================================
// CONSULTA 12: Países con al menos 3 entrenadores ($expr, $gte, $size)
// =============================================================================

db.paises.find({
  "$expr": {
    "$gte": [{ "$size": "$delegacion.entrenadores" }, 3]
  }
});

/*
Operadores usados: $expr, $gte, $size (sobre array anidado)
Resultado esperado: Países con 3 o más entrenadores
*/

// =============================================================================
// CONSULTA 13: Competiciones de judo O esgrima en fase final ($or, $and)
// =============================================================================

db.competiciones.find({
  "$and": [
    { "fase": "final" },
    {
      "$or": [
        { "disciplina": "judo" },
        { "disciplina": "esgrima" }
      ]
    }
  ]
});

/*
Operadores usados: $and, $or
Resultado esperado: Finales de judo y esgrima
*/

// =============================================================================
// CONSULTA 14: Atletas cuyo apellido existe ($exists)
// =============================================================================

db.atletas.find({
  "apellido": {
    "$exists": true,
    "$ne": ""
  }
});

/*
Operadores usados: $exists, $ne
Resultado esperado: Todos los atletas (tienen apellido)
*/

// =============================================================================
// CONSULTA 15: Competiciones con resultados de tiempo (contienen ":") ($regex)
// =============================================================================

db.competiciones.find({
  "resultados_finales.oro.resultado": {
    "$regex": ":",
    "$options": "i"
  }
});

/*
Operadores usados: $regex, $options
Resultado esperado: Competiciones con tiempos como resultado
*/

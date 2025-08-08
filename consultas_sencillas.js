// =============================================================================
// CONSULTAS SENCILLAS - TORNEO DEPORTIVO INTERNACIONAL
// Consultas por uno o dos campos, sin operadores complejos 
// =============================================================================

use torneo_deportivo_internacional

// =============================================================================
// CONSULTA 1: Buscar todos los atletas de un país específico (Colombia)
// =============================================================================

db.atletas.find({"pais": "COL"});

/*
Resultado esperado: Atletas colombianos
- Carlos Rodríguez (atletismo)
- Ana Martínez (natación)
*/

// =============================================================================
// CONSULTA 2: Mostrar todas las competiciones de una disciplina específica (atletismo)
// =============================================================================

db.competiciones.find({"disciplina": "atletismo"});

/*
Resultado esperado: Todas las competiciones de atletismo
- 100m masculino, 5000m masculino, salto largo, maratón femenino, salto con pértiga
*/

// =============================================================================
// CONSULTA 3: Buscar países de un continente específico (Europa)
// =============================================================================

db.paises.find({"continente": "Europa"});

/*
Resultado esperado: Países europeos participantes
- Alemania, Francia, Italia, España, Reino Unido, Rusia
*/

// =============================================================================
// CONSULTA 4: Listar competiciones de una fecha específica
// =============================================================================

db.competiciones.find({"fecha": ISODate("2024-08-15")});

/*
Resultado esperado: Competiciones del 15 de agosto de 2024
- ATL001: 100m masculino final
*/

// =============================================================================
// CONSULTA 5: Mostrar atletas de género femenino
// =============================================================================

db.atletas.find({"genero": "F"});

/*
Resultado esperado: Todas las atletas femeninas
- Ana Martínez (COL), Beatriz Santos (BRA), Sarah Williams (USA), 
  Petra Schmidt (GER), Yuki Sato (JPN), Emma Thompson (AUS), 
  Zhang Min (CHN)
*/
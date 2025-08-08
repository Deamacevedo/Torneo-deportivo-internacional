// =============================================================================
// INSERCIONES DE DATOS - TORNEO DEPORTIVO INTERNACIONAL
// Base de datos: torneo_deportivo_internacional
// =============================================================================

// Crear la base de datos
use torneo_deportivo_internacional

// =============================================================================
// COLECCIÓN: paises
// =============================================================================

db.paises.insertMany([
  {
    codigo_pais: "COL",
    nombre: "Colombia",
    continente: "América del Sur",
    delegacion: {
      jefe_delegacion: "Carlos Ramírez",
      entrenadores: ["Ana López", "Miguel Torres", "Laura Sánchez"],
      total_atletas: 45
    },
    medallas_historicas: {
      oro: 12,
      plata: 18,
      bronce: 25
    },
    fecha_inscripcion: new Date("2024-06-15")
  },
  {
    codigo_pais: "BRA",
    nombre: "Brasil",
    continente: "América del Sur",
    delegacion: {
      jefe_delegacion: "João Silva",
      entrenadores: ["Maria Santos", "Pedro Costa", "Ana Oliveira", "Luis Ferreira"],
      total_atletas: 78
    },
    medallas_historicas: {
      oro: 28,
      plata: 22,
      bronce: 31
    },
    fecha_inscripcion: new Date("2024-06-10")
  },
  {
    codigo_pais: "USA",
    nombre: "Estados Unidos",
    continente: "América del Norte",
    delegacion: {
      jefe_delegacion: "Michael Johnson",
      entrenadores: ["Sarah Williams", "David Brown", "Jennifer Davis", "Robert Wilson", "Lisa Anderson"],
      total_atletas: 95
    },
    medallas_historicas: {
      oro: 45,
      plata: 38,
      bronce: 42
    },
    fecha_inscripcion: new Date("2024-06-05")
  },
  {
    codigo_pais: "GER",
    nombre: "Alemania",
    continente: "Europa",
    delegacion: {
      jefe_delegacion: "Hans Mueller",
      entrenadores: ["Petra Schmidt", "Klaus Weber", "Ingrid Fischer"],
      total_atletas: 52
    },
    medallas_historicas: {
      oro: 32,
      plata: 29,
      bronce: 33
    },
    fecha_inscripcion: new Date("2024-06-12")
  },
  {
    codigo_pais: "JPN",
    nombre: "Japón",
    continente: "Asia",
    delegacion: {
      jefe_delegacion: "Hiroshi Tanaka",
      entrenadores: ["Yuki Sato", "Akiko Yamada", "Takeshi Suzuki"],
      total_atletas: 68
    },
    medallas_historicas: {
      oro: 25,
      plata: 31,
      bronce: 28
    },
    fecha_inscripcion: new Date("2024-06-08")
  },
  {
    codigo_pais: "KEN",
    nombre: "Kenia",
    continente: "África",
    delegacion: {
      jefe_delegacion: "David Kimani",
      entrenadores: ["Grace Wanjiku", "Peter Karanja"],
      total_atletas: 35
    },
    medallas_historicas: {
      oro: 18,
      plata: 15,
      bronce: 12
    },
    fecha_inscripcion: new Date("2024-06-18")
  },
  {
    codigo_pais: "AUS",
    nombre: "Australia",
    continente: "Oceanía",
    delegacion: {
      jefe_delegacion: "Emma Thompson",
      entrenadores: ["James Wilson", "Sophie Clarke", "Michael O'Connor"],
      total_atletas: 41
    },
    medallas_historicas: {
      oro: 22,
      plata: 26,
      bronce: 29
    },
    fecha_inscripcion: new Date("2024-06-14")
  },
  {
    codigo_pais: "FRA",
    nombre: "Francia",
    continente: "Europa",
    delegacion: {
      jefe_delegacion: "Pierre Dubois",
      entrenadores: ["Marie Martin", "Jean Leroy", "Sophie Moreau"],
      total_atletas: 58
    },
    medallas_historicas: {
      oro: 19,
      plata: 24,
      bronce: 27
    },
    fecha_inscripcion: new Date("2024-06-11")
  },
  {
    codigo_pais: "CHN",
    nombre: "China",
    continente: "Asia",
    delegacion: {
      jefe_delegacion: "Li Wei",
      entrenadores: ["Zhang Min", "Wang Lei", "Chen Xiaoli", "Liu Gang"],
      total_atletas: 82
    },
    medallas_historicas: {
      oro: 38,
      plata: 35,
      bronce: 41
    },
    fecha_inscripcion: new Date("2024-06-07")
  },
  {
    codigo_pais: "ITA",
    nombre: "Italia",
    continente: "Europa",
    delegacion: {
      jefe_delegacion: "Marco Rossi",
      entrenadores: ["Giulia Bianchi", "Antonio Romano", "Francesca Conti"],
      total_atletas: 44
    },
    medallas_historicas: {
      oro: 16,
      plata: 21,
      bronce: 23
    },
    fecha_inscripcion: new Date("2024-06-16")
  },
  {
    codigo_pais: "CAN",
    nombre: "Canadá",
    continente: "América del Norte",
    delegacion: {
      jefe_delegacion: "Jennifer Clark",
      entrenadores: ["Mark Johnson", "Sarah Lee", "David Martin"],
      total_atletas: 39
    },
    medallas_historicas: {
      oro: 14,
      plata: 19,
      bronce: 22
    },
    fecha_inscripcion: new Date("2024-06-13")
  },
  {
    codigo_pais: "ESP",
    nombre: "España",
    continente: "Europa",
    delegacion: {
      jefe_delegacion: "Antonio García",
      entrenadores: ["Carmen López", "José Martínez", "Isabel Rodríguez"],
      total_atletas: 36
    },
    medallas_historicas: {
      oro: 11,
      plata: 16,
      bronce: 20
    },
    fecha_inscripcion: new Date("2024-06-17")
  },
  {
    codigo_pais: "GBR",
    nombre: "Reino Unido",
    continente: "Europa",
    delegacion: {
      jefe_delegacion: "James Smith",
      entrenadores: ["Emily Johnson", "William Brown", "Charlotte Davis"],
      total_atletas: 48
    },
    medallas_historicas: {
      oro: 20,
      plata: 23,
      bronce: 26
    },
    fecha_inscripcion: new Date("2024-06-09")
  },
  {
    codigo_pais: "MEX",
    nombre: "México",
    continente: "América del Norte",
    delegacion: {
      jefe_delegacion: "María González",
      entrenadores: ["Roberto Hernández", "Ana Jiménez", "Carlos Vázquez"],
      total_atletas: 42
    },
    medallas_historicas: {
      oro: 8,
      plata: 12,
      bronce: 18
    },
    fecha_inscripcion: new Date("2024-06-19")
  },
  {
    codigo_pais: "RUS",
    nombre: "Rusia",
    continente: "Europa",
    delegacion: {
      jefe_delegacion: "Vladimir Petrov",
      entrenadores: ["Natasha Volkova", "Igor Kozlov", "Elena Sokolova"],
      total_atletas: 61
    },
    medallas_historicas: {
      oro: 29,
      plata: 27,
      bronce: 32
    },
    fecha_inscripcion: new Date("2024-06-06")
  }
]);

// =============================================================================
// COLECCIÓN: atletas
// =============================================================================

db.atletas.insertMany([
  {
    numero_atleta: 1001,
    nombre: "Carlos",
    apellido: "Rodríguez",
    edad: 24,
    genero: "M",
    pais: "COL",
    disciplinas: ["atletismo", "salto largo"],
    categoria: "adulto",
    datos_fisicos: {
      altura: 182,
      peso: 78
    },
    experiencia: {
      anios_practicando: 8,
      competencias_internacionales: 12
    },
    logros: [
      {
        competencia: "Sudamericanos 2023",
        posicion: 2,
        medalla: "plata",
        ano: 2023
      },
      {
        competencia: "Panamericanos 2022",
        posicion: 1,
        medalla: "oro",
        ano: 2022
      }
    ],
    activo: true,
    fecha_registro: new Date("2024-07-01")
  },
  {
    numero_atleta: 1002,
    nombre: "Ana",
    apellido: "Martínez",
    edad: 22,
    genero: "F",
    pais: "COL",
    disciplinas: ["natación", "estilo libre"],
    categoria: "adulto",
    datos_fisicos: {
      altura: 168,
      peso: 58
    },
    experiencia: {
      anios_practicando: 10,
      competencias_internacionales: 8
    },
    logros: [
      {
        competencia: "Mundial Juvenil 2021",
        posicion: 3,
        medalla: "bronce",
        ano: 2021
      }
    ],
    activo: true,
    fecha_registro: new Date("2024-07-02")
  },
  {
    numero_atleta: 2001,
    nombre: "Gabriel",
    apellido: "Silva",
    edad: 26,
    genero: "M",
    pais: "BRA",
    disciplinas: ["fútbol"],
    categoria: "adulto",
    datos_fisicos: {
      altura: 175,
      peso: 72
    },
    experiencia: {
      anios_practicando: 15,
      competencias_internacionales: 25
    },
    logros: [
      {
        competencia: "Copa América 2023",
        posicion: 1,
        medalla: "oro",
        ano: 2023
      },
      {
        competencia: "Mundial Sub-20 2019",
        posicion: 2,
        medalla: "plata",
        ano: 2019
      }
    ],
    activo: true,
    fecha_registro: new Date("2024-07-03")
  },
  {
    numero_atleta: 2002,
    nombre: "Beatriz",
    apellido: "Santos",
    edad: 28,
    genero: "F",
    pais: "BRA",
    disciplinas: ["judo"],
    categoria: "adulto",
    datos_fisicos: {
      altura: 165,
      peso: 65
    },
    experiencia: {
      anios_practicando: 12,
      competencias_internacionales: 18
    },
    logros: [
      {
        competencia: "Mundial de Judo 2023",
        posicion: 1,
        medalla: "oro",
        ano: 2023
      },
      {
        competencia: "Panamericanos 2022",
        posicion: 1,
        medalla: "oro",
        ano: 2022
      }
    ],
    activo: true,
    fecha_registro: new Date("2024-07-04")
  },
  {
    numero_atleta: 3001,
    nombre: "Michael",
    apellido: "Johnson",
    edad: 25,
    genero: "M",
    pais: "USA",
    disciplinas: ["atletismo", "100m", "200m"],
    categoria: "adulto",
    datos_fisicos: {
      altura: 185,
      peso: 82
    },
    experiencia: {
      anios_practicando: 12,
      competencias_internacionales: 22
    },
    logros: [
      {
        competencia: "Mundial de Atletismo 2023",
        posicion: 1,
        medalla: "oro",
        ano: 2023
      },
      {
        competencia: "Diamond League 2023",
        posicion: 1,
        medalla: "oro",
        ano: 2023
      }
    ],
    activo: true,
    fecha_registro: new Date("2024-07-05")
  },
  {
    numero_atleta: 3002,
    nombre: "Sarah",
    apellido: "Williams",
    edad: 23,
    genero: "F",
    pais: "USA",
    disciplinas: ["natación", "mariposa"],
    categoria: "adulto",
    datos_fisicos: {
      altura: 172,
      peso: 62
    },
    experiencia: {
      anios_practicando: 14,
      competencias_internacionales: 16
    },
    logros: [
      {
        competencia: "NCAA Championships 2023",
        posicion: 1,
        medalla: "oro",
        ano: 2023
      },
      {
        competencia: "World Aquatics 2022",
        posicion: 2,
        medalla: "plata",
        ano: 2022
      }
    ],
    activo: true,
    fecha_registro: new Date("2024-07-06")
  },
  {
    numero_atleta: 4001,
    nombre: "Hans",
    apellido: "Mueller",
    edad: 29,
    genero: "M",
    pais: "GER",
    disciplinas: ["ciclismo", "ruta"],
    categoria: "adulto",
    datos_fisicos: {
      altura: 178,
      peso: 68
    },
    experiencia: {
      anios_practicando: 11,
      competencias_internacionales: 28
    },
    logros: [
      {
        competencia: "Tour de Francia 2023",
        posicion: 3,
        medalla: "bronce",
        ano: 2023
      },
      {
        competencia: "Mundial de Ciclismo 2022",
        posicion: 1,
        medalla: "oro",
        ano: 2022
      }
    ],
    activo: true,
    fecha_registro: new Date("2024-07-07")
  },
  {
    numero_atleta: 4002,
    nombre: "Petra",
    apellido: "Schmidt",
    edad: 27,
    genero: "F",
    pais: "GER",
    disciplinas: ["esgrima", "espada"],
    categoria: "adulto",
    datos_fisicos: {
      altura: 170,
      peso: 60
    },
    experiencia: {
      anios_practicando: 9,
      competencias_internacionales: 14
    },
    logros: [
      {
        competencia: "Mundial de Esgrima 2023",
        posicion: 2,
        medalla: "plata",
        ano: 2023
      }
    ],
    activo: true,
    fecha_registro: new Date("2024-07-08")
  },
  {
    numero_atleta: 5001,
    nombre: "Hiroshi",
    apellido: "Tanaka",
    edad: 24,
    genero: "M",
    pais: "JPN",
    disciplinas: ["judo"],
    categoria: "adulto",
    datos_fisicos: {
      altura: 173,
      peso: 73
    },
    experiencia: {
      anios_practicando: 16,
      competencias_internacionales: 20
    },
    logros: [
      {
        competencia: "Juegos Asiáticos 2023",
        posicion: 1,
        medalla: "oro",
        ano: 2023
      },
      {
        competencia: "Mundial de Judo 2022",
        posicion: 2,
        medalla: "plata",
        ano: 2022
      }
    ],
    activo: true,
    fecha_registro: new Date("2024-07-09")
  },
  {
    numero_atleta: 5002,
    nombre: "Yuki",
    apellido: "Sato",
    edad: 21,
    genero: "F",
    pais: "JPN",
    disciplinas: ["atletismo", "maratón"],
    categoria: "adulto",
    datos_fisicos: {
      altura: 160,
      peso: 48
    },
    experiencia: {
      anios_practicando: 6,
      competencias_internacionales: 9
    },
    logros: [
      {
        competencia: "Maratón de Tokio 2024",
        posicion: 1,
        medalla: "oro",
        ano: 2024
      }
    ],
    activo: true,
    fecha_registro: new Date("2024-07-10")
  },
  {
    numero_atleta: 6001,
    nombre: "David",
    apellido: "Kimani",
    edad: 26,
    genero: "M",
    pais: "KEN",
    disciplinas: ["atletismo", "5000m", "10000m"],
    categoria: "adulto",
    datos_fisicos: {
      altura: 174,
      peso: 58
    },
    experiencia: {
      anios_practicando: 10,
      competencias_internacionales: 15
    },
    logros: [
      {
        competencia: "Mundial de Atletismo 2023",
        posicion: 1,
        medalla: "oro",
        ano: 2023
      },
      {
        competencia: "Diamond League 2023",
        posicion: 2,
        medalla: "plata",
        ano: 2023
      }
    ],
    activo: true,
    fecha_registro: new Date("2024-07-11")
  },
  {
    numero_atleta: 7001,
    nombre: "Emma",
    apellido: "Thompson",
    edad: 25,
    genero: "F",
    pais: "AUS",
    disciplinas: ["natación", "estilo libre", "espalda"],
    categoria: "adulto",
    datos_fisicos: {
      altura: 175,
      peso: 65
    },
    experiencia: {
      anios_practicando: 13,
      competencias_internacionales: 19
    },
    logros: [
      {
        competencia: "Commonwealth Games 2022",
        posicion: 1,
        medalla: "oro",
        ano: 2022
      },
      {
        competencia: "World Aquatics 2023",
        posicion: 3,
        medalla: "bronce",
        ano: 2023
      }
    ],
    activo: true,
    fecha_registro: new Date("2024-07-12")
  },
  {
    numero_atleta: 8001,
    nombre: "Pierre",
    apellido: "Dubois",
    edad: 30,
    genero: "M",
    pais: "FRA",
    disciplinas: ["ciclismo", "pista"],
    categoria: "adulto",
    datos_fisicos: {
      altura: 180,
      peso: 75
    },
    experiencia: {
      anios_practicando: 14,
      competencias_internacionales: 32
    },
    logros: [
      {
        competencia: "Mundial de Ciclismo en Pista 2023",
        posicion: 1,
        medalla: "oro",
        ano: 2023
      },
      {
        competencia: "Europeos 2022",
        posicion: 2,
        medalla: "plata",
        ano: 2022
      }
    ],
    activo: true,
    fecha_registro: new Date("2024-07-13")
  },
  {
    numero_atleta: 9001,
    nombre: "Li",
    apellido: "Wei",
    edad: 22,
    genero: "M",
    pais: "CHN",
    disciplinas: ["atletismo", "salto con pértiga"],
    categoria: "adulto",
    datos_fisicos: {
      altura: 183,
      peso: 72
    },
    experiencia: {
      anios_practicando: 8,
      competencias_internacionales: 11
    },
    logros: [
      {
        competencia: "Asiáticos 2023",
        posicion: 1,
        medalla: "oro",
        ano: 2023
      }
    ],
    activo: true,
    fecha_registro: new Date("2024-07-14")
  },
  {
    numero_atleta: 9002,
    nombre: "Zhang",
    apellido: "Min",
    edad: 26,
    genero: "F",
    pais: "CHN",
    disciplinas: ["natación", "estilo libre", "individual medley"],
    categoria: "adulto",
    datos_fisicos: {
      altura: 169,
      peso: 59
    },
    experiencia: {
      anios_practicando: 12,
      competencias_internacionales: 17
    },
    logros: [
      {
        competencia: "World Aquatics 2023",
        posicion: 1,
        medalla: "oro",
        ano: 2023
      },
      {
        competencia: "Asiáticos 2022",
        posicion: 1,
        medalla: "oro",
        ano: 2022
      }
    ],
    activo: true,
    fecha_registro: new Date("2024-07-15")
  }
]);

// =============================================================================
// COLECCIÓN: competiciones
// =============================================================================

db.competiciones.insertMany([
  {
    codigo_competencia: "ATL001",
    disciplina: "atletismo",
    categoria: "100m masculino",
    genero: "M",
    tipo: "individual",
    fase: "final",
    fecha: new Date("2024-08-15"),
    hora: "19:30",
    sede: "Estadio Principal",
    participantes: [
      {
        numero_atleta: 3001,
        pais: "USA",
        resultado: "9.85",
        posicion: 1
      },
      {
        numero_atleta: 1001,
        pais: "COL",
        resultado: "9.92",
        posicion: 2
      },
      {
        numero_atleta: 2001,
        pais: "BRA",
        resultado: "9.98",
        posicion: 3
      }
    ],
    resultados_finales: {
      oro: {
        numero_atleta: 3001,
        pais: "USA",
        resultado: "9.85"
      },
      plata: {
        numero_atleta: 1001,
        pais: "COL",
        resultado: "9.92"
      },
      bronce: {
        numero_atleta: 2001,
        pais: "BRA",
        resultado: "9.98"
      }
    },
    estado: "finalizada",
    observaciones: "Nuevo récord del torneo"
  },
  {
    codigo_competencia: "NAT001",
    disciplina: "natación",
    categoria: "100m estilo libre femenino",
    genero: "F",
    tipo: "individual",
    fase: "final",
    fecha: new Date("2024-08-16"),
    hora: "18:45",
    sede: "Centro Acuático",
    participantes: [
      {
        numero_atleta: 3002,
        pais: "USA",
        resultado: "52.34",
        posicion: 1
      },
      {
        numero_atleta: 7001,
        pais: "AUS",
        resultado: "52.67",
        posicion: 2
      },
      {
        numero_atleta: 9002,
        pais: "CHN",
        resultado: "52.89",
        posicion: 3
      }
    ],
    resultados_finales: {
      oro: {
        numero_atleta: 3002,
        pais: "USA",
        resultado: "52.34"
      },
      plata: {
        numero_atleta: 7001,
        pais: "AUS",
        resultado: "52.67"
      },
      bronce: {
        numero_atleta: 9002,
        pais: "CHN",
        resultado: "52.89"
      }
    },
    estado: "finalizada",
    observaciones: ""
  },
  {
    codigo_competencia: "JUD001",
    disciplina: "judo",
    categoria: "78kg femenino",
    genero: "F",
    tipo: "individual",
    fase: "final",
    fecha: new Date("2024-08-17"),
    hora: "16:00",
    sede: "Dojo Principal",
    participantes: [
      {
        numero_atleta: 2002,
        pais: "BRA",
        resultado: "Ippon",
        posicion: 1
      },
      {
        numero_atleta: 5001,
        pais: "JPN",
        resultado: "Waza-ari",
        posicion: 2
      }
    ],
    resultados_finales: {
      oro: {
        numero_atleta: 2002,
        pais: "BRA",
        resultado: "Ippon"
      },
      plata: {
        numero_atleta: 5001,
        pais: "JPN",
        resultado: "Waza-ari"
      },
      bronce: {
        numero_atleta: 4002,
        pais: "GER",
        resultado: "Waza-ari"
      }
    },
    estado: "finalizada",
    observaciones: "Combate espectacular"
  },
  {
    codigo_competencia: "CIC001",
    disciplina: "ciclismo",
    categoria: "Ruta masculino",
    genero: "M",
    tipo: "individual",
    fase: "final",
    fecha: new Date("2024-08-18"),
    hora: "08:00",
    sede: "Circuito de Ruta",
    participantes: [
      {
        numero_atleta: 4001,
        pais: "GER",
        resultado: "4:25:32",
        posicion: 1
      },
      {
        numero_atleta: 8001,
        pais: "FRA",
        resultado: "4:25:45",
        posicion: 2
      }
    ],
    resultados_finales: {
      oro: {
        numero_atleta: 4001,
        pais: "GER",
        resultado: "4:25:32"
      },
      plata: {
        numero_atleta: 8001,
        pais: "FRA",
        resultado: "4:25:45"
      },
      bronce: {
        numero_atleta: 1002,
        pais: "COL",
        resultado: "4:26:12"
      }
    },
    estado: "finalizada",
    observaciones: "Condiciones climáticas favorables"
  },
  {
    codigo_competencia: "ESG001",
    disciplina: "esgrima",
    categoria: "Espada femenino",
    genero: "F",
    tipo: "individual",
    fase: "semifinal",
    fecha: new Date("2024-08-19"),
    hora: "14:30",
    sede: "Pabellón de Esgrima",
    participantes: [
      {
        numero_atleta: 4002,
        pais: "GER",
        resultado: "15-12",
        posicion: 1
      },
      {
        numero_atleta: 8001,
        pais: "FRA",
        resultado: "15-10",
        posicion: 2
      }
    ],
    resultados_finales: {},
    estado: "finalizada",
    observaciones: "Pasan a la final"
  },
  {
    codigo_competencia: "ATL002",
    disciplina: "atletismo",
    categoria: "5000m masculino",
    genero: "M",
    tipo: "individual",
    fase: "final",
    fecha: new Date("2024-08-20"),
    hora: "20:15",
    sede: "Estadio Principal",
    participantes: [
      {
        numero_atleta: 6001,
        pais: "KEN",
        resultado: "13:15.42",
        posicion: 1
      },
      {
        numero_atleta: 5002,
        pais: "JPN",
        resultado: "13:18.67",
        posicion: 2
      }
    ],
    resultados_finales: {
      oro: {
        numero_atleta: 6001,
        pais: "KEN",
        resultado: "13:15.42"
      },
      plata: {
        numero_atleta: 5002,
        pais: "JPN",
        resultado: "13:18.67"
      },
      bronce: {
        numero_atleta: 3001,
        pais: "USA",
        resultado: "13:22.15"
      }
    },
    estado: "finalizada",
    observaciones: "Récord personal del ganador"
  },
  {
    codigo_competencia: "NAT002",
    disciplina: "natación",
    categoria: "200m mariposa masculino",
    genero: "M",
    tipo: "individual",
    fase: "clasificacion",
    fecha: new Date("2024-08-21"),
    hora: "09:30",
    sede: "Centro Acuático",
    participantes: [
      {
        numero_atleta: 2001,
        pais: "BRA",
        resultado: "1:58.45",
        posicion: 1
      },
      {
        numero_atleta: 7001,
        pais: "AUS",
        resultado: "1:59.12",
        posicion: 2
      }
    ],
    resultados_finales: {},
    estado: "finalizada",
    observaciones: "Clasifican los 8 mejores"
  },
  {
    codigo_competencia: "ATL003",
    disciplina: "atletismo",
    categoria: "Salto largo masculino",
    genero: "M",
    tipo: "individual",
    fase: "final",
    fecha: new Date("2024-08-22"),
    hora: "17:00",
    sede: "Estadio Principal",
    participantes: [
      {
        numero_atleta: 1001,
        pais: "COL",
        resultado: "8.45",
        posicion: 1
      },
      {
        numero_atleta: 9001,
        pais: "CHN",
        resultado: "8.32",
        posicion: 2
      }
    ],
    resultados_finales: {
      oro: {
        numero_atleta: 1001,
        pais: "COL",
        resultado: "8.45"
      },
      plata: {
        numero_atleta: 9001,
        pais: "CHN",
        resultado: "8.32"
      },
      bronce: {
        numero_atleta: 3001,
        pais: "USA",
        resultado: "8.28"
      }
    },
    estado: "finalizada",
    observaciones: "Excelente marca del colombiano"
  },
  {
    codigo_competencia: "JUD002",
    disciplina: "judo",
    categoria: "73kg masculino",
    genero: "M",
    tipo: "individual",
    fase: "final",
    fecha: new Date("2024-08-23"),
    hora: "15:45",
    sede: "Dojo Principal",
    participantes: [
      {
        numero_atleta: 5001,
        pais: "JPN",
        resultado: "Ippon",
        posicion: 1
      },
      {
        numero_atleta: 2002,
        pais: "BRA",
        resultado: "Shido",
        posicion: 2
      }
    ],
    resultados_finales: {
      oro: {
        numero_atleta: 5001,
        pais: "JPN",
        resultado: "Ippon"
      },
      plata: {
        numero_atleta: 2002,
        pais: "BRA",
        resultado: "Shido"
      },
      bronce: {
        numero_atleta: 4001,
        pais: "GER",
        resultado: "Waza-ari"
      }
    },
    estado: "finalizada",
    observaciones: "Técnica perfecta del japonés"
  },
  {
    codigo_competencia: "NAT003",
    disciplina: "natación",
    categoria: "Individual medley 400m femenino",
    genero: "F",
    tipo: "individual",
    fase: "final",
    fecha: new Date("2024-08-24"),
    hora: "19:00",
    sede: "Centro Acuático",
    participantes: [
      {
        numero_atleta: 9002,
        pais: "CHN",
        resultado: "4:35.67",
        posicion: 1
      },
      {
        numero_atleta: 1002,
        pais: "COL",
        resultado: "4:38.92",
        posicion: 2
      }
    ],
    resultados_finales: {
      oro: {
        numero_atleta: 9002,
        pais: "CHN",
        resultado: "4:35.67"
      },
      plata: {
        numero_atleta: 1002,
        pais: "COL",
        resultado: "4:38.92"
      },
      bronce: {
        numero_atleta: 3002,
        pais: "USA",
        resultado: "4:39.45"
      }
    },
    estado: "finalizada",
    observaciones: "Récord del torneo"
  },
  {
    codigo_competencia: "ATL004",
    disciplina: "atletismo",
    categoria: "Maratón femenino",
    genero: "F",
    tipo: "individual",
    fase: "final",
    fecha: new Date("2024-08-25"),
    hora: "07:00",
    sede: "Circuito Urbano",
    participantes: [
      {
        numero_atleta: 5002,
        pais: "JPN",
        resultado: "2:25:34",
        posicion: 1
      },
      {
        numero_atleta: 6001,
        pais: "KEN",
        resultado: "2:27:12",
        posicion: 2
      }
    ],
    resultados_finales: {
      oro: {
        numero_atleta: 5002,
        pais: "JPN",
        resultado: "2:25:34"
      },
      plata: {
        numero_atleta: 6001,
        pais: "KEN",
        resultado: "2:27:12"
      },
      bronce: {
        numero_atleta: 7001,
        pais: "AUS",
        resultado: "2:29:45"
      }
    },
    estado: "finalizada",
    observaciones: "Condiciones perfectas para la carrera"
  },
  {
    codigo_competencia: "CIC002",
    disciplina: "ciclismo",
    categoria: "Pista velocidad masculino",
    genero: "M",
    tipo: "individual",
    fase: "final",
    fecha: new Date("2024-08-26"),
    hora: "16:30",
    sede: "Velódromo",
    participantes: [
      {
        numero_atleta: 8001,
        pais: "FRA",
        resultado: "10.234",
        posicion: 1
      },
      {
        numero_atleta: 4001,
        pais: "GER",
        resultado: "10.456",
        posicion: 2
      }
    ],
    resultados_finales: {
      oro: {
        numero_atleta: 8001,
        pais: "FRA",
        resultado: "10.234"
      },
      plata: {
        numero_atleta: 4001,
        pais: "GER",
        resultado: "10.456"
      },
      bronce: {
        numero_atleta: 2001,
        pais: "BRA",
        resultado: "10.567"
      }
    },
    estado: "finalizada",
    observaciones: "Nueva marca francesa"
  },
  {
    codigo_competencia: "ESG002",
    disciplina: "esgrima",
    categoria: "Espada femenino",
    genero: "F",
    tipo: "individual",
    fase: "final",
    fecha: new Date("2024-08-27"),
    hora: "18:00",
    sede: "Pabellón de Esgrima",
    participantes: [
      {
        numero_atleta: 4002,
        pais: "GER",
        resultado: "15-11",
        posicion: 1
      }
    ],
    resultados_finales: {
      oro: {
        numero_atleta: 4002,
        pais: "GER",
        resultado: "15-11"
      },
      plata: {
        numero_atleta: 8001,
        pais: "FRA",
        resultado: "15-11"
      },
      bronce: {
        numero_atleta: 1002,
        pais: "COL",
        resultado: "15-13"
      }
    },
    estado: "finalizada",
    observaciones: "Final muy disputada"
  },
  {
    codigo_competencia: "ATL005",
    disciplina: "atletismo",
    categoria: "Salto con pértiga masculino",
    genero: "M",
    tipo: "individual",
    fase: "programada",
    fecha: new Date("2024-08-28"),
    hora: "19:30",
    sede: "Estadio Principal",
    participantes: [
      {
        numero_atleta: 9001,
        pais: "CHN",
        resultado: "",
        posicion: 0
      },
      {
        numero_atleta: 3001,
        pais: "USA",
        resultado: "",
        posicion: 0
      }
    ],
    resultados_finales: {},
    estado: "programada",
    observaciones: "Evento pendiente"
  }
]);
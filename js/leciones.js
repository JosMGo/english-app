// ========================================
// BASE DE DATOS DE LECCIONES
// ========================================

const LECCIONES = {
    A1: {
        clima: [
            {
                id: 'a1_clima_1',
                titulo: 'The Weather Today',
                emoji: '🌤️',
                conteo_palabras: 37,
                texto: 'Today the weather is sunny. The sky is blue. It is warm outside. Many people walk in the park. Some children play football. Birds sing in the trees. It is a happy day.',
                traduccion: 'Hoy el clima está soleado. El cielo está azul. Hace calor afuera. Mucha gente camina en el parque. Algunos niños juegan fútbol. Los pájaros cantan en los árboles. Es un día feliz.',
                vocab: [
                    { en: 'weather', es: 'clima' },
                    { en: 'sunny', es: 'soleado' },
                    { en: 'sky', es: 'cielo' },
                    { en: 'warm', es: 'cálido' },
                    { en: 'park', es: 'parque' },
                    { en: 'children', es: 'niños' },
                    { en: 'birds', es: 'pájaros' },
                    { en: 'happy', es: 'feliz' }
                ],
                ejercicios: {
                    comprension: [
                        { id: 'c1', pregunta: 'Is the weather sunny?', respuesta_esperada: 'Yes' },
                        { id: 'c2', pregunta: 'Is the sky green?', respuesta_esperada: 'No' }
                    ],
                    preguntas: [
                        { id: 'q1', pregunta: '______ color is the sky?', respuesta_esperada: 'What' },
                        { id: 'q2', pregunta: '______ do people walk?', respuesta_esperada: 'Where' }
                    ],
                    gramatica: [
                        { id: 'g1', oracion: 'Birds ______ (sing) in the trees.', respuesta_esperada: 'sing', tema: 'verbos_presentes' },
                        { id: 'g2', oracion: 'Children ______ (play) football.', respuesta_esperada: 'play', tema: 'verbos_presentes' }
                    ],
                    match: [
                        { id: 'm1', en: 'sunny', es: 'soleado' },
                        { id: 'm2', en: 'park', es: 'parque' },
                        { id: 'm3', en: 'happy', es: 'feliz' }
                    ]
                }
            },
            {
                id: 'a1_clima_2',
                titulo: 'It is Raining',
                emoji: '🌧️',
                conteo_palabras: 42,
                texto: 'It is raining today. The weather is cold and wet. I stay at home. I read a book and drink tea. My family watches TV together. The rain is very strong. We are all happy inside.',
                traduccion: 'Está lloviendo hoy. El clima es frío y mojado. Me quedo en casa. Leo un libro y bebo té. Mi familia ve televisión juntos. La lluvia es muy fuerte. Todos estamos felices adentro.',
                vocab: [
                    { en: 'raining', es: 'lloviendo' },
                    { en: 'cold', es: 'frío' },
                    { en: 'wet', es: 'mojado' },
                    { en: 'home', es: 'casa' },
                    { en: 'book', es: 'libro' },
                    { en: 'tea', es: 'té' },
                    { en: 'family', es: 'familia' },
                    { en: 'rain', es: 'lluvia' }
                ],
                ejercicios: {
                    comprension: [
                        { id: 'c1', pregunta: 'Is it raining?', respuesta_esperada: 'Yes' },
                        { id: 'c2', pregunta: 'Is the weather warm?', respuesta_esperada: 'No' }
                    ],
                    preguntas: [
                        { id: 'q1', pregunta: '______ is the weather?', respuesta_esperada: 'What' },
                        { id: 'q2', pregunta: '______ do you stay?', respuesta_esperada: 'Where' }
                    ],
                    gramatica: [
                        { id: 'g1', oracion: 'I ______ (read) a book.', respuesta_esperada: 'read', tema: 'verbos_presentes' },
                        { id: 'g2', oracion: 'My family ______ (watch) TV.', respuesta_esperada: 'watches', tema: 'verbos_presentes' }
                    ],
                    match: [
                        { id: 'm1', en: 'raining', es: 'lloviendo' },
                        { id: 'm2', en: 'cold', es: 'frío' },
                        { id: 'm3', en: 'tea', es: 'té' }
                    ]
                }
            }
        ],
        familia: [
            {
                id: 'a1_familia_1',
                titulo: 'My Family',
                emoji: '👨‍👩‍👧‍👦',
                conteo_palabras: 38,
                texto: 'I have a family. My mother is a teacher. My father is a doctor. I have a sister. Her name is Maria. We are happy together. We eat dinner every day. We love each other very much.',
                traduccion: 'Tengo una familia. Mi madre es maestra. Mi padre es doctor. Tengo una hermana. Su nombre es Maria. Somos felices juntos. Comemos cena cada día. Nos amamos mucho.',
                vocab: [
                    { en: 'family', es: 'familia' },
                    { en: 'mother', es: 'madre' },
                    { en: 'father', es: 'padre' },
                    { en: 'sister', es: 'hermana' },
                    { en: 'teacher', es: 'maestra' },
                    { en: 'doctor', es: 'doctor' },
                    { en: 'dinner', es: 'cena' },
                    { en: 'love', es: 'amar' }
                ],
                ejercicios: {
                    comprension: [
                        { id: 'c1', pregunta: 'Do you have a family?', respuesta_esperada: 'Yes' },
                        { id: 'c2', pregunta: 'Is your mother a doctor?', respuesta_esperada: 'No' }
                    ],
                    preguntas: [
                        { id: 'q1', pregunta: '______ is your mother?', respuesta_esperada: 'What' },
                        { id: 'q2', pregunta: '______ is your sister?', respuesta_esperada: 'Who' }
                    ],
                    gramatica: [
                        { id: 'g1', oracion: 'My mother ______ (is) a teacher.', respuesta_esperada: 'is', tema: 'verbos_presentes' },
                        { id: 'g2', oracion: 'We ______ (eat) dinner together.', respuesta_esperada: 'eat', tema: 'verbos_presentes' }
                    ],
                    match: [
                        { id: 'm1', en: 'mother', es: 'madre' },
                        { id: 'm2', en: 'family', es: 'familia' },
                        { id: 'm3', en: 'sister', es: 'hermana' }
                    ]
                }
            }
        ],
        deportes: [
            {
                id: 'a1_deportes_1',
                titulo: 'I like Sports',
                emoji: '⚽',
                conteo_palabras: 40,
                texto: 'I like sports very much. I play football on Mondays. I play tennis on Wednesdays. My friend plays basketball. We are very active. Sports are good for our health. We are strong and happy.',
                traduccion: 'Me gustan mucho los deportes. Juego fútbol los lunes. Juego tenis los miércoles. Mi amigo juega baloncesto. Somos muy activos. Los deportes son buenos para nuestra salud. Somos fuertes y felices.',
                vocab: [
                    { en: 'sports', es: 'deportes' },
                    { en: 'football', es: 'fútbol' },
                    { en: 'tennis', es: 'tenis' },
                    { en: 'basketball', es: 'baloncesto' },
                    { en: 'friend', es: 'amigo' },
                    { en: 'active', es: 'activo' },
                    { en: 'health', es: 'salud' },
                    { en: 'strong', es: 'fuerte' }
                ],
                ejercicios: {
                    comprension: [
                        { id: 'c1', pregunta: 'Do you like sports?', respuesta_esperada: 'Yes' },
                        { id: 'c2', pregunta: 'Do you play basketball?', respuesta_esperada: 'No' }
                    ],
                    preguntas: [
                        { id: 'q1', pregunta: '______ sport do you like?', respuesta_esperada: 'What' },
                        { id: 'q2', pregunta: '______ do you play football?', respuesta_esperada: 'When' }
                    ],
                    gramatica: [
                        { id: 'g1', oracion: 'I ______ (play) football.', respuesta_esperada: 'play', tema: 'verbos_presentes' },
                        { id: 'g2', oracion: 'My friend ______ (play) basketball.', respuesta_esperada: 'plays', tema: 'verbos_presentes' }
                    ],
                    match: [
                        { id: 'm1', en: 'football', es: 'fútbol' },
                        { id: 'm2', en: 'tennis', es: 'tenis' },
                        { id: 'm3', en: 'strong', es: 'fuerte' }
                    ]
                }
            }
        ],
        comida: [
            {
                id: 'a1_comida_1',
                titulo: 'Food and Drinks',
                emoji: '🍽️',
                conteo_palabras: 36,
                texto: 'I like food. I eat bread and cheese. I drink milk and water. My sister likes fruits. She eats apples and oranges. My mother cooks delicious food. We eat together every day.',
                traduccion: 'Me gusta la comida. Como pan y queso. Bebo leche y agua. A mi hermana le gustan las frutas. Come manzanas y naranjas. Mi madre cocina comida deliciosa. Comemos juntos cada día.',
                vocab: [
                    { en: 'food', es: 'comida' },
                    { en: 'bread', es: 'pan' },
                    { en: 'cheese', es: 'queso' },
                    { en: 'milk', es: 'leche' },
                    { en: 'water', es: 'agua' },
                    { en: 'fruits', es: 'frutas' },
                    { en: 'apple', es: 'manzana' },
                    { en: 'delicious', es: 'delicioso' }
                ],
                ejercicios: {
                    comprension: [
                        { id: 'c1', pregunta: 'Do you like food?', respuesta_esperada: 'Yes' },
                        { id: 'c2', pregunta: 'Does your sister like vegetables?', respuesta_esperada: 'No' }
                    ],
                    preguntas: [
                        { id: 'q1', pregunta: '______ do you eat?', respuesta_esperada: 'What' },
                        { id: 'q2', pregunta: '______ likes fruits?', respuesta_esperada: 'Who' }
                    ],
                    gramatica: [
                        { id: 'g1', oracion: 'I ______ (eat) bread.', respuesta_esperada: 'eat', tema: 'verbos_presentes' },
                        { id: 'g2', oracion: 'My mother ______ (cook) food.', respuesta_esperada: 'cooks', tema: 'verbos_presentes' }
                    ],
                    match: [
                        { id: 'm1', en: 'bread', es: 'pan' },
                        { id: 'm2', en: 'milk', es: 'leche' },
                        { id: 'm3', en: 'delicious', es: 'delicioso' }
                    ]
                }
            }
        ],
        viajes: [
            {
                id: 'a1_viajes_1',
                titulo: 'Travel and Vacation',
                emoji: '✈️',
                conteo_palabras: 39,
                texto: 'I love to travel. I go to the beach in summer. I visit my grandparents in the mountains. We take the bus and the train. I see beautiful places. I take many photos. Travel is very fun and interesting.',
                traduccion: 'Me encanta viajar. Voy a la playa en verano. Visito a mis abuelos en las montañas. Tomamos el autobús y el tren. Veo lugares hermosos. Tomo muchas fotos. Viajar es muy divertido e interesante.',
                vocab: [
                    { en: 'travel', es: 'viajar' },
                    { en: 'beach', es: 'playa' },
                    { en: 'summer', es: 'verano' },
                    { en: 'grandparents', es: 'abuelos' },
                    { en: 'mountains', es: 'montañas' },
                    { en: 'bus', es: 'autobús' },
                    { en: 'train', es: 'tren' },
                    { en: 'beautiful', es: 'hermoso' }
                ],
                ejercicios: {
                    comprension: [
                        { id: 'c1', pregunta: 'Do you love to travel?', respuesta_esperada: 'Yes' },
                        { id: 'c2', pregunta: 'Do you visit your grandparents in summer?', respuesta_esperada: 'No' }
                    ],
                    preguntas: [
                        { id: 'q1', pregunta: '______ do you go in summer?', respuesta_esperada: 'Where' },
                        { id: 'q2', pregunta: '______ do you visit?', respuesta_esperada: 'Who' }
                    ],
                    gramatica: [
                        { id: 'g1', oracion: 'I ______ (go) to the beach.', respuesta_esperada: 'go', tema: 'verbos_presentes' },
                        { id: 'g2', oracion: 'We ______ (take) the bus.', respuesta_esperada: 'take', tema: 'verbos_presentes' }
                    ],
                    match: [
                        { id: 'm1', en: 'beach', es: 'playa' },
                        { id: 'm2', en: 'summer', es: 'verano' },
                        { id: 'm3', en: 'beautiful', es: 'hermoso' }
                    ]
                }
            }
        ]
    },
    B2: {
        clima: [
            {
                id: 'b2_clima_1',
                titulo: 'Climate Change and Weather Patterns',
                emoji: '🌍',
                conteo_palabras: 187,
                texto: 'Climate change is affecting weather patterns around the world. Scientists have observed that temperatures are rising, and extreme weather events are becoming more frequent. In some regions, droughts last longer than they used to, while in others, heavy rainfall causes flooding. If we continue to emit greenhouse gases, these problems will worsen significantly. However, if governments implement stricter environmental policies, we might be able to slow down the process. Many countries are already investing in renewable energy sources like solar and wind power. The impact on agriculture is also concerning. Farmers are facing unpredictable seasons, which makes planning difficult.',
                traduccion: 'El cambio climático está afectando los patrones climáticos en todo el mundo. Los científicos han observado que las temperaturas están subiendo, y los eventos climáticos extremos son cada vez más frecuentes. En algunas regiones, las sequías duran más de lo que solían, mientras que en otras, las lluvias intensas causan inundaciones. Si continuamos emitiendo gases de efecto invernadero, estos problemas empeorarán significativamente. Sin embargo, si los gobiernos implementan políticas ambientales más estrictas, podríamos ralentizar el proceso. Muchos países ya están invirtiendo en fuentes de energía renovable como la solar y la eólica. El impacto en la agricultura también es preocupante. Los agricultores se enfrentan a estaciones impredecibles.',
                vocab: [
                    { en: 'climate change', es: 'cambio climático' },
                    { en: 'weather patterns', es: 'patrones climáticos' },
                    { en: 'temperatures', es: 'temperaturas' },
                    { en: 'extreme weather events', es: 'eventos climáticos extremos' },
                    { en: 'droughts', es: 'sequías' },
                    { en: 'flooding', es: 'inundaciones' },
                    { en: 'greenhouse gases', es: 'gases de efecto invernadero' },
                    { en: 'renewable energy', es: 'energía renovable' },
                    { en: 'agriculture', es: 'agricultura' },
                    { en: 'unpredictable', es: 'impredecible' }
                ],
                ejercicios: {
                    comprension: [
                        { id: 'c1', pregunta: 'Are temperatures rising around the world?', respuesta_esperada: 'Yes' },
                        { id: 'c2', pregunta: 'Are extreme weather events becoming less frequent?', respuesta_esperada: 'No' }
                    ],
                    preguntas: [
                        { id: 'q1', pregunta: 'What kind of weather events are becoming more frequent?', respuesta_esperada: 'extreme' },
                        { id: 'q2', pregunta: 'What renewable energy sources are mentioned?', respuesta_esperada: 'solar and wind' }
                    ],
                    gramatica: [
                        { id: 'g1', oracion: 'If we ______ (continue) to emit gases, problems ______ (worsen).', respuesta_esperada: 'continue, will worsen', tema: 'condicionales' },
                        { id: 'g2', oracion: 'If governments ______ (implement) policies, we ______ (might slow) the process.', respuesta_esperada: 'implement, might slow', tema: 'condicionales' }
                    ],
                    match: [
                        { en: 'climate change', es: 'cambio climático' },
                        { en: 'renewable energy', es: 'energía renovable' },
                        { en: 'agriculture', es: 'agricultura' }
                    ]
                }
            }
        ],
        familia: [
            {
                id: 'b2_familia_1',
                titulo: 'Family Relationships and Dynamics',
                emoji: '👨‍👩‍👧',
                conteo_palabras: 195,
                texto: 'Family relationships can be complex and multifaceted. While some families maintain close bonds throughout their lives, others experience periods of distance and conflict. Modern families have evolved significantly due to changing social norms and economic pressures. Many parents work long hours to support their families, which sometimes reduces the time they can spend with their children. However, quality of time matters more than quantity. Grandparents often play a crucial role in family dynamics, providing wisdom and emotional support. Sibling relationships also develop over time; younger siblings may initially look up to older ones, but these dynamics can change as they grow older. Communication is essential for maintaining healthy family relationships, and many families benefit from counseling when facing significant challenges.',
                traduccion: 'Las relaciones familiares pueden ser complejas y multifacéticas. Mientras que algunas familias mantienen vínculos cercanos durante toda la vida, otras experimentan períodos de distancia y conflicto. Las familias modernas han evolucionado significativamente debido a cambios en las normas sociales y presiones económicas. Muchos padres trabajan largas horas para mantener a sus familias, lo que a veces reduce el tiempo que pueden pasar con sus hijos. Sin embargo, la calidad del tiempo es más importante que la cantidad. Los abuelos a menudo juegan un papel crucial en la dinámica familiar, proporcionando sabiduría y apoyo emocional. Las relaciones entre hermanos también se desarrollan con el tiempo; los hermanos menores pueden inicialmente admirar a los mayores, pero estas dinámicas pueden cambiar a medida que crecen. La comunicación es esencial para mantener relaciones familiares saludables.',
                vocab: [
                    { en: 'relationships', es: 'relaciones' },
                    { en: 'complex', es: 'complejo' },
                    { en: 'bonds', es: 'vínculos' },
                    { en: 'conflict', es: 'conflicto' },
                    { en: 'economic pressures', es: 'presiones económicas' },
                    { en: 'quality', es: 'calidad' },
                    { en: 'crucial', es: 'crucial' },
                    { en: 'dynamics', es: 'dinámica' },
                    { en: 'counseling', es: 'consejería' },
                    { en: 'communication', es: 'comunicación' }
                ],
                ejercicios: {
                    comprension: [
                        { id: 'c1', pregunta: 'Are all family relationships the same?', respuesta_esperada: 'No' },
                        { id: 'c2', pregunta: 'Is quality of time more important than quantity?', respuesta_esperada: 'Yes' }
                    ],
                    preguntas: [
                        { id: 'q1', pregunta: 'What role do grandparents play in family dynamics?', respuesta_esperada: 'crucial' },
                        { id: 'q2', pregunta: 'What is essential for maintaining healthy family relationships?', respuesta_esperada: 'Communication' }
                    ],
                    gramatica: [
                        { id: 'g1', oracion: 'If parents ______ (work) long hours, they ______ (have) less time with children.', respuesta_esperada: 'work, have', tema: 'condicionales' },
                        { id: 'g2', oracion: 'While some families ______ (maintain) close bonds, others ______ (experience) distance.', respuesta_esperada: 'maintain, experience', tema: 'conectores' }
                    ],
                    match: [
                        { en: 'complex', es: 'complejo' },
                        { en: 'crucial', es: 'crucial' },
                        { en: 'communication', es: 'comunicación' }
                    ]
                }
            }
        ]
    },
    C1: {
        clima: [
            {
                id: 'c1_clima_1',
                titulo: 'Anthropogenic Climate Crisis and Ecological Tipping Points',
                emoji: '🌍',
                conteo_palabras: 312,
                texto: 'The scientific consensus regarding anthropogenic climate change has become unequivocal. Whilst scepticism persists in certain quarters, the preponderance of evidence suggests that human activity—predominantly through the emission of greenhouse gases—has fundamentally altered Earth\'s climatic equilibrium. Contemporary climate models indicate that we are approaching several critical tipping points. Should we exceed a 1.5°C threshold relative to pre-industrial levels, the ramifications would be catastrophic. Coral reef ecosystems would face near-total collapse, permafrost regions would release unprecedented quantities of methane, and sea-level rise would displace millions. Paradoxically, whilst the urgency cannot be overstated, our collective response remains inadequate. Governments continue to prioritize short-term economic interests over long-term planetary health. Renewable energy infrastructure, notwithstanding significant advances, remains insufficient to meet current and projected demand. Moreover, the transition away from fossil fuels entails substantial geopolitical complications, particularly regarding energy-dependent economies. Nevertheless, emerging technologies offer a glimmer of hope. Carbon sequestration, though still nascent, could potentially mitigate the worst consequences.',
                traduccion: 'El consenso científico respecto al cambio climático antropogénico se ha vuelto inequívoco. Aunque persiste el escepticismo en ciertos ámbitos, la preponderancia de evidencia sugiere que la actividad humana—predominantemente mediante la emisión de gases de efecto invernadero—ha alterado fundamentalmente el equilibrio climático de la Tierra. Los modelos climáticos contemporáneos indican que nos aproximamos a varios puntos de inflexión críticos. Si superáramos un umbral de 1.5°C respecto a los niveles preindustriales, las ramificaciones serían catastróficas. Los ecosistemas de arrecife de coral enfrentarían un colapso casi total, las regiones de permafrost liberarían cantidades sin precedentes de metano, y el aumento del nivel del mar desplazaría a millones. Paradójicamente, aunque la urgencia no puede ser exagerada, nuestra respuesta colectiva sigue siendo inadecuada. Los gobiernos continúan priorizando intereses económicos a corto plazo sobre la salud planetaria a largo plazo.',
                vocab: [
                    { en: 'anthropogenic', es: 'antropogénico' },
                    { en: 'unequivocal', es: 'inequívoco' },
                    { en: 'preponderance', es: 'preponderancia' },
                    { en: 'tipping points', es: 'puntos de inflexión' },
                    { en: 'threshold', es: 'umbral' },
                    { en: 'ramifications', es: 'ramificaciones' },
                    { en: 'permafrost', es: 'permafrost' },
                    { en: 'paradoxically', es: 'paradójicamente' },
                    { en: 'geopolitical', es: 'geopolítico' },
                    { en: 'carbon sequestration', es: 'secuestración de carbono' }
                ],
                ejercicios: {
                    comprension: [
                        { id: 'c1', pregunta: 'Is the scientific consensus regarding anthropogenic climate change equivocal?', respuesta_esperada: 'No' },
                        { id: 'c2', pregunta: 'Are tipping points imminent?', respuesta_esperada: 'Yes' }
                    ],
                    preguntas: [
                        { id: 'q1', pregunta: 'What would be the ramifications of exceeding 1.5°C?', respuesta_esperada: 'catastrophic' },
                        { id: 'q2', pregunta: 'What is insufficient to meet demand?', respuesta_esperada: 'renewable energy infrastructure' }
                    ],
                    gramatica: [
                        { id: 'g1', oracion: 'Should we ______ (exceed) the threshold, consequences ______ (be) catastrophic.', respuesta_esperada: 'exceed, would be', tema: 'condicionales_inversiones' },
                        { id: 'g2', oracion: 'Whilst the urgency ______ (not can be) overstated, response ______ (remain) inadequate.', respuesta_esperada: 'cannot be, remains', tema: 'argumentacion' }
                    ],
                    match: [
                        { en: 'anthropogenic', es: 'antropogénico' },
                        { en: 'tipping points', es: 'puntos de inflexión' },
                        { en: 'geopolitical', es: 'geopolítico' }
                    ]
                }
            }
        ]
    }
};

// Función para obtener lecciones basadas en débilidades
function obtenerLeccion(nivel, categoria, debilidades = []) {
    const leccionesNivel = LECCIONES[nivel];
    if (!leccionesNivel || !leccionesNivel[categoria]) {
        // Si no existe, retorna la primera lección disponible
        const primeraCategoria = Object.keys(leccionesNivel)[0];
        return leccionesNivel[primeraCategoria][0];
    }
    
    const lecciones = leccionesNivel[categoria];
    
    // Si hay débilidades, intentar seleccionar una lección que las ataque
    if (debilidades.length > 0) {
        // Por ahora, retorna la primera lección (puedes mejorar esto)
        return lecciones[0];
    }
    
    // Retorna una lección aleatoria
    return lecciones[Math.floor(Math.random() * lecciones.length)];
}

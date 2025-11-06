// Datos del juego con categorías expandidas
const gameData = {
    themes: {
        // ANIMALES - 120+ palabras
        animales: [
            // Mamíferos terrestres
            'Perro', 'Gato', 'León', 'Elefante', 'Tigre', 'Oso', 'Lobo', 'Zorro', 'Conejo', 'Panda',
            'Jirafa', 'Zebra', 'Hipopótamo', 'Rinoceronte', 'Canguro', 'Ardilla', 'Castor', 'Mapache',
            'Koala', 'Lemur', 'Jaguar', 'Leopardo', 'Guepardo', 'Cabra', 'Oveja', 'Cerdo', 'Vaca',
            'Caballo', 'Burro', 'Llama', 'Camello', 'Mono', 'Gorila', 'Chimpancé', 'Orangután',
            'Babuino', 'Rata', 'Ratón', 'Hámster', 'Cobaya', 'Erizo', 'Topo', 'Murciélago', 'Nutria',
            'Foca', 'Morsa', 'Oso Polar', 'Reno', 'Alce', 'Ciervo', 'Jabalí', 'Bisonte', 'Búfalo',
            'Antílope', 'Gacela', 'Impala', 'Wombat', 'Ornitorrinco', 'Equidna', 'Perezoso', 'Armadillo',

            // Aves
            'Águila', 'Búho', 'Flamenco', 'Pingüino', 'Colibrí', 'Loro', 'Canario', 'Gorrión', 'Paloma',
            'Cuervo', 'Gaviota', 'Pelícano', 'Cisne', 'Pato', 'Ganso', 'Gallina', 'Gallo', 'Pavo',
            'Avestruz', 'Emú', 'Kiwi', 'Tucán', 'Quetzal', 'Cardenal', 'Petirrojo', 'Jilguero',
            'Halcón', 'Buitre', 'Cóndor', 'Ibis', 'Grulla', 'Cigüeña', 'Garza', 'Martín Pescador',

            // Reptiles y anfibios
            'Serpiente', 'Lagarto', 'Iguana', 'Gecko', 'Camaleón', 'Cocodrilo', 'Caimán', 'Tortuga',
            'Salamandra', 'Rana', 'Sapo', 'Tritón', 'Dragón de Komodo', 'Pitón', 'Cobra', 'Víbora',

            // Peces y vida marina
            'Delfín', 'Ballena', 'Tiburón', 'Pulpo', 'Calamar', 'Medusa', 'Estrella de Mar', 'Cangrejo',
            'Langosta', 'Camarón', 'Atún', 'Salmón', 'Trucha', 'Sardina', 'Anchoa', 'Bacalao',
            'Pez Payaso', 'Pez Ángel', 'Raya', 'Anguila', 'Caballito de Mar', 'Pez Globo', 'Barracuda',

            // Insectos y arácnidos
            'Mariposa', 'Abeja', 'Araña', 'Hormiga', 'Libélula', 'Escarabajo', 'Grillo', 'Saltamontes',
            'Mantis', 'Mariquita', 'Mosca', 'Mosquito', 'Avispa', 'Termita', 'Polilla', 'Chinche',
            'Pulga', 'Garrapata', 'Escorpión', 'Ciempiés', 'Milpiés', 'Tarántula'
        ],

        // COMIDA - 150+ palabras
        comida: [
            // Platos principales
            'Pizza', 'Hamburguesa', 'Tacos', 'Sushi', 'Pasta', 'Lasaña', 'Paella', 'Empanadas', 'Ceviche',
            'Ramen', 'Curry', 'Falafel', 'Hummus', 'Gazpacho', 'Tortilla', 'Risotto', 'Goulash', 'Chili',
            'Burrito', 'Quesadilla', 'Enchiladas', 'Tamales', 'Pad Thai', 'Pho', 'Bibimbap', 'Kimchi',
            'Moussaka', 'Gyros', 'Kebab', 'Shawarma', 'Biryani', 'Tandoori', 'Dim Sum', 'Spring Rolls',
            'Fish and Chips', 'Bangers and Mash', 'Shepherd\'s Pie', 'Haggis', 'Borscht', 'Pierogi',
            'Gnocchi', 'Carbonara', 'Bolognese', 'Pesto', 'Minestrone', 'Bouillabaisse', 'Ratatouille',
            'Coq au Vin', 'Beef Bourguignon', 'Cassoulet', 'Schnitzel', 'Sauerbraten', 'Bratwurst',

            // Carnes y proteínas
            'Pollo', 'Pescado', 'Carne', 'Cerdo', 'Cordero', 'Ternera', 'Pavo', 'Pato', 'Conejo',
            'Venado', 'Jamón', 'Bacon', 'Salchichas', 'Chorizo', 'Morcilla', 'Paté', 'Foie Gras',
            'Salmón', 'Atún', 'Bacalao', 'Merluza', 'Lubina', 'Dorada', 'Pulpo', 'Calamares',
            'Gambas', 'Langostinos', 'Cangrejo', 'Mejillones', 'Almejas', 'Ostras', 'Caviar',

            // Lácteos y huevos
            'Queso', 'Leche', 'Yogur', 'Mantequilla', 'Nata', 'Huevos', 'Mozzarella', 'Parmesano',
            'Cheddar', 'Brie', 'Camembert', 'Roquefort', 'Feta', 'Ricotta', 'Mascarpone',

            // Cereales y granos
            'Arroz', 'Pan', 'Pasta', 'Quinoa', 'Avena', 'Cebada', 'Trigo', 'Centeno', 'Maíz',
            'Couscous', 'Bulgur', 'Mijo', 'Amaranto', 'Teff', 'Espelta',

            // Frutas
            'Manzana', 'Naranja', 'Plátano', 'Fresa', 'Uva', 'Piña', 'Mango', 'Papaya', 'Kiwi',
            'Pera', 'Melocotón', 'Albaricoque', 'Ciruela', 'Cereza', 'Frambuesa', 'Arándano',
            'Mora', 'Grosella', 'Sandía', 'Melón', 'Coco', 'Aguacate', 'Limón', 'Lima', 'Pomelo',
            'Mandarina', 'Higo', 'Dátil', 'Pasas', 'Granada', 'Caqui', 'Lichi', 'Maracuyá',

            // Verduras
            'Tomate', 'Lechuga', 'Zanahoria', 'Cebolla', 'Ajo', 'Patata', 'Pimiento', 'Pepino',
            'Apio', 'Espinacas', 'Brócoli', 'Coliflor', 'Repollo', 'Col', 'Acelgas', 'Rúcula',
            'Berenjenas', 'Calabacín', 'Calabaza', 'Remolacha', 'Rábano', 'Nabo', 'Puerro',
            'Espárragos', 'Alcachofas', 'Judías', 'Guisantes', 'Habas', 'Lentejas', 'Garbanzos',

            // Postres y dulces
            'Helado', 'Chocolate', 'Donut', 'Brownie', 'Cookies', 'Tiramisú', 'Cheesecake', 'Macarons',
            'Churros', 'Flan', 'Gelatina', 'Pudín', 'Mousse', 'Soufflé', 'Crème Brûlée', 'Profiteroles',
            'Éclair', 'Tarta', 'Pastel', 'Cupcake', 'Muffin', 'Scone', 'Galletas', 'Bizcocho',
            'Merengue', 'Nougat', 'Turrón', 'Mazapán', 'Caramelo', 'Toffee', 'Praline',

            // Panadería y desayuno
            'Croissant', 'Bagel', 'Pancakes', 'Waffles', 'Crepes', 'Tostadas', 'Cereales', 'Granola',
            'Avena', 'Porridge', 'Muesli', 'Brioche', 'Pain au Chocolat', 'Danish', 'Strudel',

            // Bebidas
            'Café', 'Té', 'Smoothie', 'Milkshake', 'Limonada', 'Sangría', 'Mojito', 'Margarita',
            'Piña Colada', 'Cappuccino', 'Latte', 'Espresso', 'Americano', 'Macchiato', 'Frappé',
            'Chai', 'Matcha', 'Kombucha', 'Kéfir', 'Horchata', 'Agua de Jamaica', 'Tamarindo'
        ],

        // DEPORTES - 100+ palabras
        deportes: [
            // Deportes de pelota
            'Fútbol', 'Baloncesto', 'Tenis', 'Voleibol', 'Béisbol', 'Golf', 'Hockey', 'Rugby', 'Ping Pong',
            'Bádminton', 'Squash', 'Racquetball', 'Críquet', 'Softball', 'Lacrosse', 'Polo', 'Waterpolo',
            'Fútbol Americano', 'Fútbol Australiano', 'Handball', 'Netball', 'Dodgeball', 'Kickball',

            // Deportes acuáticos
            'Natación', 'Surf', 'Buceo', 'Snorkel', 'Windsurf', 'Kitesurf', 'Wakeboard', 'Esquí Acuático',
            'Remo', 'Kayak', 'Canoa', 'Rafting', 'Vela', 'Regata', 'Triatlón', 'Aqua Aeróbicos',

            // Deportes de combate
            'Boxeo', 'Karate', 'Judo', 'Taekwondo', 'Esgrima', 'Lucha', 'MMA', 'Kickboxing', 'Muay Thai',
            'Jiu-Jitsu', 'Aikido', 'Kung Fu', 'Capoeira', 'Krav Maga', 'Sumo', 'Wrestling',

            // Atletismo
            'Atletismo', 'Carrera', 'Maratón', 'Velocidad', 'Salto Alto', 'Salto Largo', 'Salto con Pértiga',
            'Lanzamiento', 'Jabalina', 'Disco', 'Martillo', 'Peso', 'Vallas', 'Relevos', 'Marcha',
            'Decatlón', 'Heptatlón', 'Pentatlón', 'Campo a Través', 'Carrera de Montaña', 'Ultramaratón',

            // Deportes de invierno
            'Esquí', 'Snowboard', 'Patinaje', 'Hockey sobre Hielo', 'Curling', 'Bobsled', 'Luge',
            'Skeleton', 'Biatlón', 'Esquí de Fondo', 'Salto de Esquí', 'Freestyle', 'Slalom',

            // Deportes extremos
            'Escalada', 'Paracaidismo', 'Bungee', 'Base Jumping', 'Parkour', 'Skateboard', 'BMX',
            'Motocross', 'Snowboarding', 'Wingsuit', 'Rappel', 'Alpinismo', 'Espeleología',

            // Deportes de motor
            'Automovilismo', 'Karting', 'Motociclismo', 'Rally', 'Fórmula 1', 'NASCAR', 'Drag Racing',
            'Enduro', 'Trial', 'Speedway', 'Supercross',

            // Deportes de fuerza y fitness
            'Halterofilia', 'Powerlifting', 'Crossfit', 'Bodybuilding', 'Strongman', 'Calistenia',
            'Pilates', 'Yoga', 'Aeróbicos', 'Zumba', 'Spinning', 'Step', 'Aqua Fitness',

            // Otros deportes
            'Gimnasia', 'Gimnasia Rítmica', 'Trampolín', 'Arquería', 'Tiro', 'Dardos', 'Billar',
            'Snooker', 'Pool', 'Bolos', 'Petanca', 'Croquet', 'Frisbee', 'Ultimate Frisbee',
            'Ciclismo', 'Mountain Bike', 'BMX', 'Ciclocross', 'Pista', 'Ruta', 'Triatlón',
            'Equitación', 'Polo', 'Rodeo', 'Salto', 'Doma', 'Cross Country Ecuestre'
        ],

        // NUEVAS CATEGORÍAS

        // MÚSICA - 80+ palabras
        musica: [
            // Géneros
            'Rock', 'Pop', 'Jazz', 'Blues', 'Country', 'Folk', 'Reggae', 'Hip Hop', 'Rap', 'R&B',
            'Soul', 'Funk', 'Disco', 'House', 'Techno', 'Trance', 'Dubstep', 'EDM', 'Ambient',
            'Classical', 'Opera', 'Symphony', 'Chamber', 'Baroque', 'Romantic', 'Modern',
            'Flamenco', 'Tango', 'Salsa', 'Merengue', 'Bachata', 'Cumbia', 'Mariachi',
            'Punk', 'Metal', 'Heavy Metal', 'Death Metal', 'Black Metal', 'Thrash', 'Grunge',
            'Alternative', 'Indie', 'Emo', 'Ska', 'Reggaeton', 'Trap', 'Drill',

            // Instrumentos
            'Piano', 'Guitarra', 'Violín', 'Violonchelo', 'Contrabajo', 'Viola', 'Arpa',
            'Flauta', 'Clarinete', 'Oboe', 'Fagot', 'Saxofón', 'Trompeta', 'Trombón',
            'Tuba', 'Trompa', 'Batería', 'Percusión', 'Xilófono', 'Marimba', 'Timbal',
            'Acordeón', 'Armónica', 'Banjo', 'Mandolina', 'Ukelele', 'Sitar', 'Didgeridoo',
            'Gaita', 'Castañuelas', 'Pandereta', 'Bongos', 'Congas', 'Djembe',

            // Términos musicales
            'Melodía', 'Armonía', 'Ritmo', 'Tempo', 'Compás', 'Acorde', 'Escala', 'Tonalidad',
            'Sinfonía', 'Concierto', 'Sonata', 'Fuga', 'Vals', 'Marcha', 'Nocturno', 'Preludio'
        ],

        // TECNOLOGÍA - 70+ palabras
        tecnologia: [
            'Teléfono Inteligente', 'Tableta', 'Portátil', 'Ordenador de Mesa', 'Monitor', 'Teclado', 'Ratón', 'Cámara Web',
            'Auriculares', 'Altavoces', 'Micrófono', 'Impresora', 'Escáner', 'Enrutador', 'Módem',
            'USB', 'HDMI', 'Bluetooth', 'WiFi', '5G', '4G', 'LTE', 'GPS', 'NFC', 'Código QR',
            'Inteligencia Artificial', 'Aprendizaje Automático', 'Macrodatos', 'Computación en la Nube', 'Internet de las Cosas',
            'Cadena de Bloques', 'Criptomoneda', 'Bitcoin', 'Token No Fungible', 'Metaverso', 'Realidad Virtual', 'Realidad Aumentada',
            'Dron', 'Robot', 'Reloj Inteligente', 'Monitor de Actividad', 'Televisión Inteligente', 'Transmisión en Directo',
            'Podcast', 'YouTube', 'TikTok', 'Instagram', 'Facebook', 'Twitter', 'LinkedIn',
            'WhatsApp', 'Telegram', 'Discord', 'Zoom', 'Teams', 'Skype', 'FaceTime',
            'Netflix', 'Spotify', 'Apple Music', 'Amazon Prime', 'Disney Plus', 'Twitch',
            'PlayStation', 'Xbox', 'Nintendo', 'Steam', 'Epic Games', 'Fortnite', 'Minecraft',
            'Ciberseguridad', 'Cortafuegos', 'Antivirus', 'Red Privada Virtual', 'Contraseña', 'Biométrico', 'Autenticación de Dos Factores'
        ],

        // NATURALEZA - 90+ palabras
        naturaleza: [
            // Paisajes
            'Montaña', 'Valle', 'Río', 'Lago', 'Mar', 'Océano', 'Playa', 'Desierto', 'Bosque',
            'Selva', 'Pradera', 'Tundra', 'Sabana', 'Pantano', 'Manglar', 'Arrecife', 'Isla',
            'Península', 'Cabo', 'Bahía', 'Golfo', 'Estrecho', 'Canal', 'Cascada', 'Géiser',
            'Volcán', 'Cráter', 'Cueva', 'Cañón', 'Meseta', 'Colina', 'Acantilado', 'Glaciar',

            // Árboles
            'Roble', 'Pino', 'Abeto', 'Cedro', 'Eucalipto', 'Sauce', 'Álamo', 'Abedul',
            'Arce', 'Castaño', 'Nogal', 'Olivo', 'Palmera', 'Bambú', 'Secuoya', 'Baobab',
            'Cerezo', 'Manzano', 'Naranjo', 'Limonero', 'Higuera', 'Almendro',

            // Flores
            'Rosa', 'Tulipán', 'Girasol', 'Margarita', 'Orquídea', 'Lirio', 'Clavel', 'Jazmín',
            'Lavanda', 'Violeta', 'Petunia', 'Geranio', 'Begonia', 'Azalea', 'Hortensia',
            'Dalia', 'Peonía', 'Iris', 'Narciso', 'Jacinto', 'Amapola', 'Magnolia',

            // Fenómenos naturales
            'Lluvia', 'Nieve', 'Granizo', 'Viento', 'Huracán', 'Tornado', 'Tormenta', 'Rayo',
            'Trueno', 'Arcoíris', 'Aurora', 'Eclipse', 'Marea', 'Tsunami', 'Terremoto',
            'Avalancha', 'Erupción', 'Sequía', 'Inundación', 'Niebla', 'Rocío', 'Escarcha'
        ],

        // CIENCIA - 80+ palabras
        ciencia: [
            // Física
            'Átomo', 'Molécula', 'Electrón', 'Protón', 'Neutrón', 'Energía', 'Fuerza', 'Gravedad',
            'Magnetismo', 'Electricidad', 'Luz', 'Sonido', 'Calor', 'Temperatura', 'Presión',
            'Velocidad', 'Aceleración', 'Masa', 'Peso', 'Densidad', 'Volumen', 'Inercia',
            'Radiación', 'Láser', 'Plasma', 'Cuántico', 'Relatividad', 'Termodinámica',

            // Química
            'Elemento', 'Compuesto', 'Reacción', 'Catalizador', 'Ácido', 'Base', 'pH', 'Sal',
            'Oxidación', 'Reducción', 'Cristal', 'Solución', 'Precipitado', 'Destilación',
            'Hidrógeno', 'Oxígeno', 'Carbono', 'Nitrógeno', 'Helio', 'Oro', 'Plata', 'Hierro',

            // Biología
            'Célula', 'ADN', 'ARN', 'Gen', 'Cromosoma', 'Proteína', 'Enzima', 'Virus', 'Bacteria',
            'Evolución', 'Mutación', 'Selección Natural', 'Ecosistema', 'Biodiversidad',
            'Fotosíntesis', 'Respiración', 'Mitosis', 'Meiosis', 'Metabolismo',

            // Astronomía
            'Planeta', 'Estrella', 'Galaxia', 'Nebulosa', 'Agujero Negro', 'Supernova',
            'Cometa', 'Asteroide', 'Meteorito', 'Satélite', 'Órbita', 'Telescopio',
            'Sistema Solar', 'Vía Láctea', 'Big Bang', 'Universo', 'Cosmos'
        ],

        // Expandir categorías existentes también...
        peliculas: [
            // Clásicos
            'Titanic', 'Casablanca', 'Lo que el Viento se Llevó', 'Ciudadano Kane', 'Vértigo',
            'Psicosis', 'El Padrino', 'Apocalipsis Now', 'Taxi Driver', 'Uno de los Nuestros',

            // Ciencia Ficción
            'La Guerra de las Galaxias', 'Star Trek', 'Blade Runner', 'Matrix', 'Terminator', 'Alien', 'E.T.',
            'Regreso al Futuro', '2001 Odisea del Espacio', 'Interstellar', 'Origen', 'Avatar',
            'Dune', 'Mad Max', 'Minority Report', 'Desafío Total', 'El Quinto Elemento',

            // Superhéroes
            'Marvel', 'DC', 'Batman', 'Superman', 'Spider-Man', 'Iron Man', 'Capitán América',
            'Thor', 'Hulk', 'X-Men', 'Los Vengadores', 'Liga de la Justicia', 'Wonder Woman', 'Aquaman',
            'Pantera Negra', 'Doctor Extraño', 'Guardianes de la Galaxia', 'Deadpool',

            // Animación Disney/Pixar
            'Frozen', 'Toy Story', 'Cars', 'Monstruos S.A.', 'Buscando a Nemo', 'Up', 'Wall-E',
            'Del Revés', 'Coco', 'Vaiana', 'Encanto', 'Raya y el Último Dragón', 'Luca', 'Red',
            'El Rey León', 'La Sirenita', 'La Bella y la Bestia', 'Aladdin', 'Mulan', 'Pocahontas',
            'Cenicienta', 'Blancanieves', 'Bambi', 'Dumbo', 'Pinocho', 'Peter Pan',

            // Animación otros estudios
            'Shrek', 'Madagascar', 'La Era de Hielo', 'Gru Mi Villano Favorito', 'Los Minions', 'Cómo Entrenar a tu Dragón',
            'Kung Fu Panda', 'Rio', 'Los Increíbles', 'Ratatouille', 'Wall-E', 'Brave',

            // Terror
            'Halloween', 'Viernes 13', 'Pesadilla en Elm Street', 'Scream', 'El Resplandor',
            'El Exorcista', 'Poltergeist', 'Tiburón', 'Eso', 'La Llamada', 'Saw', 'Actividad Paranormal',

            // Acción
            'La Jungla de Cristal', 'Rambo', 'Rocky', 'Fast & Furious', 'Misión Imposible', 'James Bond',
            'John Wick', 'El Caso Bourne', 'Speed', 'Top Gun', 'Arma Letal',

            // Comedia
            'Los Cazafantasmas', 'El Reportero', 'Dos Tontos Muy Tontos', 'Resacón en Las Vegas', 'Superbad',
            'Pineapple Express', 'Hermanastros', 'Zoolander', 'Los Padres de Ella', 'Austin Powers',

            // Drama
            'Forrest Gump', 'Cadena Perpetua', 'La Lista de Schindler', 'Alguien Voló Sobre el Nido del Cuco',
            'Rain Man', 'El Indomable Will Hunting', 'El Club de los Poetas Muertos', 'Una Mente Maravillosa',

            // Fantasía
            'Harry Potter', 'El Señor de los Anillos', 'El Hobbit', 'Las Crónicas de Narnia',
            'Piratas del Caribe', 'El Laberinto del Fauno', 'La Forma del Agua',

            // Musicales
            'Sonrisas y Lágrimas', 'Grease', 'Chicago', 'Moulin Rouge', 'La La Land',
            'El Gran Showman', 'Mamma Mia', 'High School Musical', 'Hairspray'
        ],

        // Expandir países también
        paises: [
            // Europa
            'España', 'Francia', 'Italia', 'Alemania', 'Reino Unido', 'Portugal', 'Holanda',
            'Bélgica', 'Suiza', 'Austria', 'Suecia', 'Noruega', 'Dinamarca', 'Finlandia',
            'Islandia', 'Irlanda', 'Grecia', 'Turquía', 'Polonia', 'República Checa',
            'Hungría', 'Rumania', 'Bulgaria', 'Croacia', 'Serbia', 'Bosnia', 'Montenegro',
            'Albania', 'Macedonia', 'Eslovenia', 'Eslovaquia', 'Estonia', 'Letonia',
            'Lituania', 'Ucrania', 'Bielorrusia', 'Moldavia', 'Rusia', 'Georgia', 'Armenia',

            // América
            'Estados Unidos', 'Canadá', 'México', 'Guatemala', 'Belice', 'Honduras',
            'El Salvador', 'Nicaragua', 'Costa Rica', 'Panamá', 'Cuba', 'Jamaica',
            'Haití', 'República Dominicana', 'Puerto Rico', 'Trinidad y Tobago', 'Barbados',
            'Colombia', 'Venezuela', 'Guyana', 'Surinam', 'Brasil', 'Ecuador', 'Perú',
            'Bolivia', 'Paraguay', 'Uruguay', 'Argentina', 'Chile',

            // Asia
            'China', 'Japón', 'Corea del Sur', 'Corea del Norte', 'Mongolia', 'Taiwán',
            'Hong Kong', 'Macao', 'Filipinas', 'Indonesia', 'Malasia', 'Singapur',
            'Brunei', 'Tailandia', 'Vietnam', 'Laos', 'Camboya', 'Myanmar', 'India',
            'Pakistán', 'Bangladesh', 'Sri Lanka', 'Nepal', 'Bután', 'Maldivas',
            'Afganistán', 'Irán', 'Irak', 'Siria', 'Líbano', 'Jordania', 'Israel',
            'Palestina', 'Arabia Saudí', 'Yemen', 'Omán', 'Emiratos', 'Qatar', 'Bahréin',
            'Kuwait', 'Kazajstán', 'Uzbekistán', 'Turkmenistán', 'Kirguistán', 'Tayikistán',

            // África
            'Egipto', 'Libia', 'Túnez', 'Argelia', 'Marruecos', 'Sudán', 'Sudán del Sur',
            'Etiopía', 'Eritrea', 'Yibuti', 'Somalia', 'Kenia', 'Uganda', 'Tanzania',
            'Ruanda', 'Burundi', 'República Democrática del Congo', 'República del Congo',
            'Camerún', 'República Centroafricana', 'Chad', 'Níger', 'Nigeria', 'Benín',
            'Togo', 'Ghana', 'Costa de Marfil', 'Liberia', 'Sierra Leona', 'Guinea',
            'Guinea-Bissau', 'Gambia', 'Senegal', 'Mauritania', 'Mali', 'Burkina Faso',
            'Cabo Verde', 'Sudáfrica', 'Namibia', 'Botswana', 'Zimbabue', 'Zambia',
            'Malawi', 'Mozambique', 'Suazilandia', 'Lesoto', 'Madagascar', 'Mauricio',
            'Seychelles', 'Comoras',

            // Oceanía
            'Australia', 'Nueva Zelanda', 'Papúa Nueva Guinea', 'Fiji', 'Samoa',
            'Tonga', 'Vanuatu', 'Islas Salomón', 'Palau', 'Micronesia', 'Nauru',
            'Kiribati', 'Tuvalu', 'Islas Marshall'
        ],

        // Expandir profesiones
        profesiones: [
            // Salud
            'Médico', 'Enfermero', 'Dentista', 'Veterinario', 'Cirujano', 'Pediatra',
            'Cardiólogo', 'Neurólogo', 'Dermatólogo', 'Ginecólogo', 'Traumatólogo',
            'Anestesiólogo', 'Radiólogo', 'Patólogo', 'Oncólogo', 'Psiquiatra',
            'Psicólogo', 'Fisioterapeuta', 'Farmacéutico', 'Optometrista', 'Podólogo',
            'Nutricionista', 'Dietista', 'Logopeda', 'Terapeuta Ocupacional',
            'Quiropráctico', 'Acupunturista', 'Homeópata', 'Naturópata',

            // Educación
            'Profesor', 'Maestro', 'Director', 'Tutor', 'Pedagogo', 'Psicopedagogo',
            'Orientador', 'Bibliotecario', 'Investigador', 'Científico', 'Catedrático',

            // Tecnología
            'Programador', 'Desarrollador', 'Ingeniero de Software', 'Analista de Sistemas',
            'Administrador de Redes', 'Técnico Informático', 'Diseñador Web',
            'Data Scientist', 'Cybersecurity Specialist', 'DevOps', 'UX Designer',
            'Product Manager', 'Scrum Master', 'QA Tester', 'Database Administrator',

            // Arte y Entretenimiento
            'Artista', 'Pintor', 'Escultor', 'Músico', 'Cantante', 'Bailarín', 'Actor',
            'Director', 'Productor', 'Guionista', 'Editor', 'Fotógrafo', 'Camarógrafo',
            'Diseñador Gráfico', 'Ilustrador', 'Animador', 'Escritor', 'Poeta',
            'Periodista', 'Locutor', 'Presentador', 'Comediante', 'Mago', 'Payaso',

            // Servicios
            'Chef', 'Cocinero', 'Camarero', 'Barista', 'Sommelier', 'Recepcionista',
            'Conserje', 'Limpiador', 'Jardinero', 'Peluquero', 'Estilista', 'Barbero',
            'Maquillador', 'Masajista', 'Esteticista', 'Personal Trainer', 'Entrenador',

            // Seguridad y Emergencias
            'Policía', 'Bombero', 'Paramédico', 'Guardia de Seguridad', 'Detective',
            'Militar', 'Soldado', 'Piloto', 'Controlador Aéreo', 'Marinero', 'Capitán',

            // Legal y Negocios
            'Abogado', 'Juez', 'Notario', 'Procurador', 'Contador', 'Auditor',
            'Economista', 'Analista Financiero', 'Banquero', 'Corredor de Bolsa',
            'Consultor', 'Gerente', 'Director Ejecutivo', 'Empresario', 'Vendedor',
            'Representante de Ventas', 'Agente Inmobiliario', 'Agente de Seguros',

            // Construcción y Oficios
            'Arquitecto', 'Ingeniero', 'Constructor', 'Albañil', 'Carpintero', 'Electricista',
            'Fontanero', 'Pintor', 'Soldador', 'Mecánico', 'Técnico', 'Operario',
            'Conductor', 'Taxista', 'Camionero', 'Repartidor', 'Cartero',

            // Otros
            'Traductor', 'Intérprete', 'Guía Turístico', 'Azafata', 'Recepcionista',
            'Secretario', 'Asistente', 'Administrativo', 'Contable', 'Cajero',
            'Dependiente', 'Comerciante', 'Agricultor', 'Ganadero', 'Pescador',
            'Minero', 'Leñador', 'Pastor', 'Apicultor', 'Floricultor'
        ],

        // Expandir colores
        colores: [
            // Básicos
            'Rojo', 'Azul', 'Verde', 'Amarillo', 'Naranja', 'Morado', 'Rosa', 'Negro',
            'Blanco', 'Gris', 'Marrón',

            // Rojos
            'Carmesí', 'Escarlata', 'Bermellón', 'Granate', 'Burdeos', 'Vino', 'Cereza',
            'Frambuesa', 'Fresa', 'Sandía', 'Tomate', 'Ladrillo', 'Óxido', 'Sangre',

            // Azules
            'Celeste', 'Cielo', 'Marino', 'Cobalto', 'Índigo', 'Añil', 'Turquesa',
            'Aguamarina', 'Cian', 'Zafiro', 'Acero', 'Petróleo', 'Medianoche', 'Real',

            // Verdes
            'Esmeralda', 'Jade', 'Oliva', 'Lima', 'Menta', 'Pistacho', 'Bosque',
            'Musgo', 'Hierba', 'Pino', 'Salvia', 'Malaquita', 'Aguacate', 'Militar',

            // Amarillos
            'Dorado', 'Mostaza', 'Ámbar', 'Limón', 'Canario', 'Maíz', 'Miel',
            'Champán', 'Crema', 'Vainilla', 'Mantequilla', 'Oro', 'Azufre',

            // Naranjas
            'Coral', 'Salmón', 'Melocotón', 'Albaricoque', 'Mandarina', 'Calabaza',
            'Zanahoria', 'Cobre', 'Bronce', 'Óxido', 'Papaya', 'Mango',

            // Morados
            'Violeta', 'Lila', 'Lavanda', 'Púrpura', 'Magenta', 'Fucsia', 'Ciruela',
            'Berenjena', 'Amatista', 'Orquídea', 'Malva', 'Uva',

            // Rosas
            'Rosa', 'Fucsia', 'Magenta', 'Salmón', 'Coral', 'Durazno', 'Chicle',
            'Flamingo', 'Cereza', 'Frambuesa', 'Fresa', 'Sandía',

            // Marrones
            'Caoba', 'Chocolate', 'Café', 'Canela', 'Nuez', 'Castaño', 'Tierra',
            'Arena', 'Beige', 'Tostado', 'Sepia', 'Cacao', 'Cognac', 'Whisky',

            // Grises
            'Plateado', 'Plomo', 'Carbón', 'Grafito', 'Pizarra', 'Acero', 'Humo',
            'Ceniza', 'Perla', 'Plata', 'Mercurio', 'Antracita',

            // Otros
            'Marfil', 'Crema', 'Hueso', 'Perla', 'Nácar', 'Opalino', 'Iridiscente',
            'Metálico', 'Brillante', 'Mate', 'Satinado', 'Perlado', 'Fluorescente',
            'Neón', 'Pastel', 'Tierra', 'Natural', 'Neutro'
        ],

        // Expandir objetos
        objetos: [
            // Tecnología
            'Teléfono', 'Smartphone', 'Tablet', 'Computadora', 'Laptop', 'Monitor',
            'Teclado', 'Ratón', 'Auriculares', 'Altavoces', 'Cámara', 'Televisión',
            'Radio', 'Reproductor', 'Consola', 'Videojuego', 'DVD', 'USB', 'Disco Duro',
            'Router', 'Modem', 'Cable', 'Cargador', 'Batería', 'Pila',

            // Muebles
            'Silla', 'Mesa', 'Cama', 'Sofá', 'Sillón', 'Estantería', 'Armario',
            'Cómoda', 'Escritorio', 'Mesita', 'Taburete', 'Banco', 'Perchero',
            'Espejo', 'Lámpara', 'Cortinas', 'Alfombra', 'Cojín', 'Manta',

            // Cocina
            'Nevera', 'Horno', 'Microondas', 'Lavavajillas', 'Lavadora', 'Secadora',
            'Cafetera', 'Tostadora', 'Batidora', 'Licuadora', 'Sartén', 'Olla',
            'Cacerola', 'Plato', 'Vaso', 'Taza', 'Cuenco', 'Cuchillo', 'Tenedor',
            'Cuchara', 'Servilleta', 'Mantel', 'Delantal', 'Guante', 'Tabla de Cortar',

            // Baño
            'Ducha', 'Bañera', 'Lavabo', 'Inodoro', 'Bidé', 'Espejo', 'Toalla',
            'Champú', 'Jabón', 'Pasta de Dientes', 'Cepillo de Dientes', 'Peine',
            'Cepillo', 'Secador', 'Maquinilla', 'Perfume', 'Desodorante', 'Crema',

            // Ropa y Accesorios
            'Camisa', 'Camiseta', 'Pantalón', 'Falda', 'Vestido', 'Chaqueta',
            'Abrigo', 'Suéter', 'Jersey', 'Bufanda', 'Guantes', 'Gorro', 'Sombrero',
            'Zapatos', 'Botas', 'Sandalias', 'Zapatillas', 'Calcetines', 'Medias',
            'Ropa Interior', 'Pijama', 'Bañador', 'Bikini', 'Cinturón', 'Corbata',
            'Pajarita', 'Tirantes', 'Bolso', 'Mochila', 'Maleta', 'Cartera',

            // Joyería
            'Collar', 'Pulsera', 'Anillo', 'Pendientes', 'Reloj', 'Broche', 'Gemelos',
            'Cadena', 'Colgante', 'Diadema', 'Tiara', 'Corona',

            // Herramientas
            'Martillo', 'Destornillador', 'Taladro', 'Sierra', 'Lima', 'Llave Inglesa',
            'Alicates', 'Tijeras', 'Cutter', 'Regla', 'Metro', 'Nivel', 'Tornillo',
            'Clavo', 'Tuerca', 'Arandela', 'Tornillo', 'Pegamento', 'Cinta',

            // Oficina y Estudio
            'Libro', 'Cuaderno', 'Libreta', 'Agenda', 'Bolígrafo', 'Lápiz', 'Rotulador',
            'Marcador', 'Goma', 'Sacapuntas', 'Regla', 'Compás', 'Calculadora',
            'Grapadora', 'Perforadora', 'Clips', 'Chinchetas', 'Post-it', 'Carpeta',
            'Archivador', 'Papel', 'Sobre', 'Sello', 'Impresora', 'Escáner',

            // Transporte
            'Coche', 'Moto', 'Bicicleta', 'Patinete', 'Autobús', 'Tren', 'Avión',
            'Barco', 'Yate', 'Lancha', 'Kayak', 'Canoa', 'Submarino', 'Helicóptero',
            'Globo', 'Paracaídas', 'Cohete', 'Nave Espacial',

            // Deportes
            'Pelota', 'Balón', 'Raqueta', 'Palo de Golf', 'Bate', 'Guante', 'Casco',
            'Patines', 'Esquís', 'Tabla de Surf', 'Bicicleta', 'Pesas', 'Mancuernas',
            'Colchoneta', 'Cuerda', 'Silbato', 'Cronómetro', 'Red', 'Portería',

            // Jardín
            'Maceta', 'Regadera', 'Manguera', 'Pala', 'Rastrillo', 'Tijeras de Podar',
            'Cortacésped', 'Semillas', 'Abono', 'Tierra', 'Arena', 'Piedras',

            // Otros
            'Paraguas', 'Gafas', 'Gafas de Sol', 'Lupa', 'Telescopio', 'Microscopio',
            'Brújula', 'Mapa', 'GPS', 'Linterna', 'Vela', 'Cerilla', 'Encendedor',
            'Llave', 'Candado', 'Cerradura', 'Timbre', 'Campana', 'Silbato',
            'Globo', 'Pelota', 'Muñeca', 'Peluche', 'Puzzle', 'Juego de Mesa',
            'Cartas', 'Dados', 'Fichas', 'Ajedrez', 'Damas', 'Dominó'
        ]
    },
    players: [],
    currentPlayerIndex: 0,
    selectedWord: '',
    selectedTheme: '',
    impostorIndex: -1,
    gameMode: 'normal',
    showTheme: false,
    giveHint: false,
    roundType: 'elimination',
    timer: null,
    timeLeft: 300, // 5 minutos
    lastSettings: null, // Para guardar configuraciones anteriores
    currentRound: 1,
    eliminatedPlayers: [],
    activePlayers: [],
    discussionStarter: '' // Jugador que inicia la discusión
};

// Funciones de navegación
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// Función para mostrar/ocultar la opción de tema visible
function toggleThemeVisibility() {
    const themeSelect = document.getElementById('theme-select').value;
    const themeSection = document.getElementById('theme-visibility-section');

    if (themeSelect === 'random') {
        themeSection.style.display = 'block';
    } else {
        themeSection.style.display = 'none';
        document.getElementById('show-theme').checked = false;
    }
}

function showHome() {
    showScreen('home-screen');
    // No resetear si venimos de resultados, para mantener configuraciones
}

function showHomeAndReset() {
    showScreen('home-screen');
    resetGame();
}

function showSetup() {
    showScreen('setup-screen');
    // Cargar configuraciones anteriores si existen
    loadPreviousSettings();
    // Inicializar visibilidad del tema
    toggleThemeVisibility();
}

function showRules() {
    showScreen('rules-screen');
}

function showPlayerNames() {
    const playerCount = parseInt(document.getElementById('player-count').value);
    if (playerCount < 3 || playerCount > 12) {
        alert('El número de jugadores debe estar entre 3 y 12');
        return;
    }

    // Guardar configuraciones actuales
    saveCurrentSettings();

    generatePlayerNameInputs(playerCount);
    showScreen('names-screen');
}

function generatePlayerNameInputs(count) {
    const container = document.getElementById('player-names-container');
    container.innerHTML = '';

    for (let i = 1; i <= count; i++) {
        const div = document.createElement('div');
        div.className = 'player-name-input';
        // Si hay configuraciones guardadas, usar esos nombres, sino usar nombres por defecto
        const defaultName = gameData.lastSettings && gameData.lastSettings.playerNames && gameData.lastSettings.playerNames[i - 1]
            ? gameData.lastSettings.playerNames[i - 1]
            : `Jugador ${i}`;
        div.innerHTML = `
            <input type="text" placeholder="Jugador ${i}" id="player-${i}" value="${defaultName}" required>
        `;
        container.appendChild(div);
    }
}

function startGame() {
    // Recoger nombres de jugadores
    const playerCount = parseInt(document.getElementById('player-count').value);
    gameData.players = [];

    for (let i = 1; i <= playerCount; i++) {
        const name = document.getElementById(`player-${i}`).value.trim();
        // Si no hay nombre, usar el valor por defecto
        const finalName = name || `Jugador ${i}`;
        gameData.players.push(finalName);
    }

    // Configurar juego
    setupGame();
    showScreen('roles-screen');
    updateCurrentPlayer();
}

// Esta función se reemplazó por la nueva versión en el código añadido

function updateCurrentPlayer() {
    const playerName = gameData.players[gameData.currentPlayerIndex];
    document.getElementById('current-player-name').textContent = `Turno de: ${playerName}`;
    document.getElementById('show-role-btn').classList.remove('hidden');
    document.getElementById('role-display').classList.add('hidden');

    // Ocultar ambos botones inicialmente
    document.getElementById('next-player-btn').classList.add('hidden');
    document.getElementById('start-discussion-btn').classList.add('hidden');
}

// Esta función fue reemplazada por la versión mejorada más abajo

function nextPlayer() {
    gameData.currentPlayerIndex++;
    if (gameData.currentPlayerIndex < gameData.players.length) {
        updateCurrentPlayer();
    }
}

function startDiscussion() {
    // Seleccionar aleatoriamente quién empieza la discusión
    gameData.discussionStarter = gameData.players[Math.floor(Math.random() * gameData.players.length)];

    // Mostrar pantalla estética de quien empieza
    showScreen('starter-screen');
    document.getElementById('starter-name').textContent = gameData.discussionStarter;
}

function proceedToDiscussion() {
    showScreen('discussion-screen');
    setupDiscussion();
    startTimer();

    // Mostrar botón de votación manual solo en modo de una sola votación
    if (gameData.roundType === 'single-vote') {
        document.getElementById('manual-vote-btn').classList.remove('hidden');
    } else {
        document.getElementById('manual-vote-btn').classList.add('hidden');
    }
}

function setupDiscussion() {
    const themeInfo = document.getElementById('theme-info');
    if (gameData.showTheme) {
        themeInfo.innerHTML = `<strong>Tema:</strong> ${gameData.selectedTheme}`;
    } else {
        themeInfo.innerHTML = '<em>Tema oculto</em>';
    }

    const playersDisplay = document.getElementById('players-display');
    playersDisplay.innerHTML = '';

    gameData.players.forEach((player, index) => {
        const div = document.createElement('div');
        div.className = 'player-item';
        div.textContent = player;
        playersDisplay.appendChild(div);
    });
}

function startTimer() {
    gameData.timeLeft = 300; // 5 minutos
    updateTimerDisplay();

    gameData.timer = setInterval(() => {
        gameData.timeLeft--;
        updateTimerDisplay();

        if (gameData.timeLeft <= 0) {
            clearInterval(gameData.timer);
            alert('¡Tiempo agotado! Procedan a votar.');
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(gameData.timeLeft / 60);
    const seconds = gameData.timeLeft % 60;
    document.getElementById('timer-display').textContent =
        `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function startVoting() {
    if (gameData.timer) {
        clearInterval(gameData.timer);
    }

    showScreen('voting-screen');
    setupVoting();
}

function setupVoting() {
    const votingOptions = document.getElementById('voting-options');
    votingOptions.innerHTML = '';

    gameData.players.forEach((player, index) => {
        const div = document.createElement('div');
        div.className = 'voting-option';
        div.textContent = player;
        div.onclick = () => selectVote(index, div);
        votingOptions.appendChild(div);
    });
}

let selectedVote = -1;

function selectVote(index, element) {
    document.querySelectorAll('.voting-option').forEach(option => {
        option.classList.remove('selected');
    });

    element.classList.add('selected');
    selectedVote = index;
}

// Esta función fue reemplazada por la versión mejorada más abajo

function displayResults() {
    const resultsContent = document.getElementById('results-content');
    let content = '';

    // Mostrar la palabra secreta
    content += `<h3>🔍 La palabra era: <strong>${gameData.selectedWord}</strong></h3>`;
    content += `<p><strong>Tema:</strong> ${gameData.selectedTheme}</p><br>`;

    // Mostrar quién era el impostor
    if (gameData.gameMode === 'normal') {
        const impostorName = gameData.players[gameData.impostorIndex];
        content += `<p>🎭 <strong>El impostor era:</strong> ${impostorName}</p><br>`;

        // Determinar ganador
        if (selectedVote === gameData.impostorIndex) {
            content += `<div class="winner-announcement innocent-win">
                🎉 ¡Los inocentes ganaron!<br>
                Descubrieron al impostor correctamente
            </div>`;
        } else if (selectedVote === -1) {
            content += `<div class="winner-announcement">
                🤷‍♂️ No hubo votación<br>
                El impostor se salvó por falta de consenso
            </div>`;
        } else {
            const votedPlayer = gameData.players[selectedVote];
            content += `<div class="winner-announcement impostor-win">
                🎭 ¡El impostor ganó!<br>
                Votaron por ${votedPlayer} (inocente)
            </div>`;
        }
    } else if (gameData.gameMode === 'crazy-innocent') {
        content += `<p>🤪 <strong>Modo Loco:</strong> ¡Todos eran inocentes!</p>`;
        content += `<div class="winner-announcement innocent-win">
            🎉 ¿Se dieron cuenta de que no había impostor?
        </div>`;
    } else if (gameData.gameMode === 'crazy-impostor') {
        content += `<p>🤪 <strong>Modo Loco:</strong> ¡Todos eran impostores!</p>`;
        content += `<div class="winner-announcement impostor-win">
            🎭 Nadie conocía la palabra real<br>
            ¿Lograron fingir bien?
        </div>`;
    }

    resultsContent.innerHTML = content;
}

function resetGame() {
    gameData.players = [];
    gameData.currentPlayerIndex = 0;
    gameData.selectedWord = '';
    gameData.selectedTheme = '';
    gameData.impostorIndex = -1;
    gameData.gameMode = 'normal';
    gameData.showTheme = false;
    gameData.giveHint = false;
    selectedVote = -1;

    if (gameData.timer) {
        clearInterval(gameData.timer);
        gameData.timer = null;
    }

    // Resetear formularios
    document.getElementById('player-count').value = 5;
    document.getElementById('theme-select').value = 'random';
    document.getElementById('show-theme').checked = false;
    document.getElementById('give-hint').checked = false;
    document.getElementById('special-mode').value = 'normal';
}

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', function () {
    showHome();
});

// Funciones para guardar y cargar configuraciones
function saveCurrentSettings() {
    gameData.lastSettings = {
        playerCount: parseInt(document.getElementById('player-count').value),
        theme: document.getElementById('theme-select').value,
        showTheme: document.getElementById('show-theme').checked,
        giveHint: document.getElementById('give-hint').checked,
        specialMode: document.getElementById('special-mode').value,
        roundType: document.getElementById('round-type').value,
        playerNames: []
    };

    // Guardar nombres actuales si existen
    for (let i = 1; i <= gameData.lastSettings.playerCount; i++) {
        const nameInput = document.getElementById(`player-${i}`);
        if (nameInput) {
            gameData.lastSettings.playerNames.push(nameInput.value.trim() || `Jugador ${i}`);
        }
    }
}

function loadPreviousSettings() {
    if (gameData.lastSettings) {
        document.getElementById('player-count').value = gameData.lastSettings.playerCount;
        document.getElementById('theme-select').value = gameData.lastSettings.theme;
        document.getElementById('show-theme').checked = gameData.lastSettings.showTheme;
        document.getElementById('give-hint').checked = gameData.lastSettings.giveHint;
        document.getElementById('special-mode').value = gameData.lastSettings.specialMode;
        document.getElementById('round-type').value = gameData.lastSettings.roundType;
    }
}

// Función mejorada para configurar el juego con modo loco
function setupGame() {
    const themeSelect = document.getElementById('theme-select').value;
    const specialMode = document.getElementById('special-mode').value;

    gameData.showTheme = document.getElementById('show-theme').checked;
    gameData.giveHint = document.getElementById('give-hint').checked;
    gameData.roundType = document.getElementById('round-type').value;
    gameData.currentPlayerIndex = 0;
    gameData.currentRound = 1;
    gameData.eliminatedPlayers = [];
    gameData.activePlayers = [...gameData.players];

    // Seleccionar tema y palabra
    if (themeSelect === 'random') {
        const themes = Object.keys(gameData.themes);
        gameData.selectedTheme = themes[Math.floor(Math.random() * themes.length)];
    } else {
        gameData.selectedTheme = themeSelect;
    }

    const words = gameData.themes[gameData.selectedTheme];
    gameData.selectedWord = words[Math.floor(Math.random() * words.length)];

    // Asignar roles según el modo
    if (specialMode === 'normal') {
        gameData.gameMode = 'normal';
        gameData.impostorIndex = Math.floor(Math.random() * gameData.players.length);
    } else if (specialMode === 'crazy') {
        // Modo loco con 5% de probabilidad de eventos especiales
        const randomChance = Math.random();
        if (randomChance < 0.025) { // 2.5% todos inocentes
            gameData.gameMode = 'crazy-innocent';
            gameData.impostorIndex = -1;
        } else if (randomChance < 0.05) { // 2.5% todos impostores
            gameData.gameMode = 'crazy-impostor';
            gameData.impostorIndex = -2;
        } else { // 95% juego normal
            gameData.gameMode = 'normal';
            gameData.impostorIndex = Math.floor(Math.random() * gameData.players.length);
        }
    }
}

// Función completamente mejorada para generar pistas inteligentes y útiles
function generateSmartHint(selectedWord, theme) {
    // Definir categorías específicas para cada tema con pistas relacionadas pero no obvias
    const hintCategories = {
        animales: {
            // Mamíferos terrestres
            'Perro': ['Gato', 'Lobo'], 'Gato': ['Perro', 'León'], 'León': ['Tigre', 'Jaguar'],
            'Elefante': ['Rinoceronte', 'Hipopótamo'], 'Tigre': ['León', 'Leopardo'], 'Oso': ['Lobo', 'Zorro'],
            'Lobo': ['Perro', 'Zorro'], 'Zorro': ['Lobo', 'Mapache'], 'Conejo': ['Ardilla', 'Mapache'],
            'Panda': ['Oso', 'Koala'], 'Jirafa': ['Elefante', 'Cebra'], 'Zebra': ['Caballo', 'Jirafa'],
            'Hipopótamo': ['Elefante', 'Rinoceronte'], 'Rinoceronte': ['Hipopótamo', 'Elefante'],
            'Canguro': ['Koala', 'Lemur'], 'Ardilla': ['Conejo', 'Castor'], 'Castor': ['Ardilla', 'Mapache'],
            'Mapache': ['Zorro', 'Castor'], 'Koala': ['Panda', 'Lemur'], 'Lemur': ['Mono', 'Koala'],
            'Jaguar': ['León', 'Leopardo'], 'Leopardo': ['Tigre', 'Guepardo'], 'Guepardo': ['Leopardo', 'Jaguar'],
            'Cabra': ['Oveja', 'Llama'], 'Oveja': ['Cabra', 'Llama'], 'Cerdo': ['Vaca', 'Cabra'],
            'Vaca': ['Caballo', 'Cerdo'], 'Caballo': ['Burro', 'Zebra'], 'Burro': ['Caballo', 'Llama'],
            'Llama': ['Camello', 'Cabra'], 'Camello': ['Llama', 'Jirafa'], 'Mono': ['Gorila', 'Chimpancé'],
            'Gorila': ['Chimpancé', 'Mono'], 'Chimpancé': ['Gorila', 'Mono'],

            // Aves
            'Águila': ['Búho', 'Flamenco'], 'Búho': ['Águila', 'Murciélago'], 'Flamenco': ['Pingüino', 'Águila'],
            'Pingüino': ['Flamenco', 'Colibrí'], 'Colibrí': ['Mariposa', 'Libélula'], 'Murciélago': ['Búho', 'Araña'],

            // Marinos
            'Serpiente': ['Lagarto', 'Araña'], 'Tortuga': ['Caracol', 'Cangrejo'], 'Delfín': ['Ballena', 'Tiburón'],
            'Ballena': ['Delfín', 'Tiburón'], 'Tiburón': ['Delfín', 'Pulpo'], 'Pulpo': ['Tiburón', 'Medusa'],

            // Insectos
            'Mariposa': ['Libélula', 'Colibrí'], 'Abeja': ['Hormiga', 'Araña'], 'Araña': ['Abeja', 'Serpiente'],
            'Hormiga': ['Abeja', 'Escarabajo'], 'Libélula': ['Mariposa', 'Colibrí']
        },

        comida: {
            // Comida rápida/principal
            'Pizza': ['Pasta', 'Lasaña'], 'Hamburguesa': ['Tacos', 'Empanadas'], 'Tacos': ['Empanadas', 'Hamburguesa'],
            'Pasta': ['Pizza', 'Lasaña'], 'Pollo': ['Pescado', 'Carne'], 'Pescado': ['Sushi', 'Ceviche'],
            'Lasaña': ['Pizza', 'Pasta'], 'Paella': ['Arroz', 'Risotto'], 'Empanadas': ['Tacos', 'Hamburguesa'],
            'Ceviche': ['Sushi', 'Pescado'], 'Ramen': ['Sopa', 'Fideos'], 'Curry': ['Especias', 'Picante'],

            // Postres/dulces
            'Helado': ['Sorbete', 'Granizado'], 'Chocolate': ['Cacao', 'Brownie'], 'Donut': ['Muffin', 'Croissant'],
            'Brownie': ['Chocolate', 'Cookies'], 'Cookies': ['Galletas', 'Brownie'], 'Tiramisú': ['Cheesecake', 'Postre'],
            'Cheesecake': ['Tarta', 'Tiramisú'], 'Macarons': ['Cookies', 'Dulces'], 'Churros': ['Donut', 'Dulces'],
            'Flan': ['Pudín', 'Gelatina'], 'Gelatina': ['Flan', 'Pudín'],

            // Desayuno/panadería
            'Pan': ['Tostada', 'Bagel'], 'Croissant': ['Pan', 'Muffin'], 'Bagel': ['Pan', 'Donut'],
            'Muffin': ['Cupcake', 'Croissant'], 'Pancakes': ['Waffles', 'Crepes'], 'Waffles': ['Pancakes', 'Crepes'],
            'Crepes': ['Pancakes', 'Tortilla'], 'Tortilla': ['Crepes', 'Huevos'],

            // Bebidas
            'Café': ['Té', 'Cappuccino'], 'Té': ['Infusión', 'Café'], 'Smoothie': ['Batido', 'Zumo'],
            'Milkshake': ['Batido', 'Smoothie'], 'Limonada': ['Refresco', 'Zumo'], 'Sangría': ['Vino', 'Cóctel'],
            'Mojito': ['Cóctel', 'Margarita'], 'Margarita': ['Cóctel', 'Mojito'], 'Piña Colada': ['Cóctel', 'Tropical'],
            'Cappuccino': ['Café', 'Latte'],

            // Otros
            'Sushi': ['Pescado', 'Japonés'], 'Ensalada': ['Verduras', 'Fresca'], 'Arroz': ['Cereal', 'Paella'],
            'Queso': ['Lácteo', 'Cremoso'], 'Fruta': ['Natural', 'Dulce'], 'Verduras': ['Ensalada', 'Natural'],
            'Falafel': ['Hummus', 'Árabe'], 'Hummus': ['Falafel', 'Cremoso'], 'Gazpacho': ['Sopa', 'Frío']
        },

        deportes: {
            // Deportes de pelota
            'Fútbol': ['Baloncesto', 'Voleibol'], 'Baloncesto': ['Voleibol', 'Fútbol'], 'Tenis': ['Ping-pong', 'Bádminton'],
            'Voleibol': ['Fútbol', 'Baloncesto'], 'Béisbol': ['Softball', 'Cricket'], 'Golf': ['Tenis', 'Precisión'],
            'Hockey': ['Patinaje', 'Stick'], 'Rugby': ['Fútbol', 'Contacto'],

            // Deportes acuáticos
            'Natación': ['Buceo', 'Surf'], 'Surf': ['Natación', 'Olas'],

            // Deportes de combate
            'Boxeo': ['Karate', 'Lucha'], 'Karate': ['Judo', 'Taekwondo'], 'Judo': ['Karate', 'Lucha'],
            'Taekwondo': ['Karate', 'Patadas'], 'Esgrima': ['Espada', 'Duelo'],

            // Atletismo
            'Atletismo': ['Running', 'Pista'], 'Running': ['Maratón', 'Correr'], 'Maratón': ['Running', 'Resistencia'],
            'Salto Alto': ['Salto Largo', 'Altura'], 'Salto Largo': ['Salto Alto', 'Distancia'],
            'Lanzamiento': ['Jabalina', 'Disco'], 'Jabalina': ['Lanzamiento', 'Punta'], 'Disco': ['Lanzamiento', 'Circular'],
            'Martillo': ['Lanzamiento', 'Peso'], 'Bala': ['Peso', 'Lanzamiento'], 'Vallas': ['Obstáculos', 'Salto'],
            'Relevos': ['Equipo', 'Testigo'], 'Marcha': ['Caminar', 'Ritmo'],

            // Deportes de invierno
            'Esquí': ['Snowboard', 'Nieve'], 'Snowboard': ['Esquí', 'Tabla'], 'Patinaje': ['Hielo', 'Deslizar'],

            // Otros deportes
            'Ciclismo': ['Bicicleta', 'Pedales'], 'Escalada': ['Montaña', 'Altura'], 'Gimnasia': ['Flexibilidad', 'Acrobacia'],
            'Halterofilia': ['Pesas', 'Fuerza'], 'Crossfit': ['Intenso', 'Variado'], 'Yoga': ['Relajación', 'Estiramiento'],
            'Pilates': ['Yoga', 'Core'], 'Zumba': ['Baile', 'Ritmo'], 'Aeróbicos': ['Cardio', 'Ritmo'],
            'Spinning': ['Bicicleta', 'Intenso'], 'Triatlón': ['Tres', 'Resistencia'], 'Pentatlón': ['Cinco', 'Variado'],
            'Decatlón': ['Diez', 'Completo'], 'Arquería': ['Arco', 'Precisión'], 'Skateboard': ['Tabla', 'Trucos'],
            'BMX': ['Bicicleta', 'Trucos'], 'Motocross': ['Moto', 'Saltos'], 'Automovilismo': ['Coche', 'Velocidad'],
            'Karting': ['Kart', 'Pista']
        },

        peliculas: {
            // Clásicos/Drama
            'Titanic': ['Romance', 'Barco'], 'Avatar': ['Ciencia ficción', 'Azul'], 'Matrix': ['Realidad virtual', 'Acción'],

            // Superhéroes
            'Marvel': ['Superhéroes', 'Cómics'], 'Batman': ['Superman', 'Gotham'], 'Superman': ['Batman', 'Krypton'],
            'Spider-Man': ['Arañas', 'Nueva York'], 'Star Wars': ['Espacio', 'Jedis'],

            // Fantasía/Magia
            'Harry Potter': ['Magia', 'Hogwarts'], 'Jurassic Park': ['Dinosaurios', 'Isla'],

            // Animación Disney/Pixar
            'Frozen': ['Hielo', 'Hermanas'], 'Toy Story': ['Juguetes', 'Buzz'], 'Shrek': ['Ogro', 'Pantano'],
            'Cars': ['Coches', 'Rayo'], 'Minions': ['Amarillo', 'Gru'], 'El Rey León': ['Simba', 'Sabana'],
            'Buscando a Nemo': ['Pez', 'Océano'], 'Monsters Inc': ['Monstruos', 'Sustos'], 'Up': ['Globos', 'Casa'],
            'Wall-E': ['Robot', 'Basura'], 'Coco': ['Día de muertos', 'Música'], 'Moana': ['Océano', 'Isla'],
            'Encanto': ['Magia', 'Familia'], 'Rapunzel': ['Cabello', 'Torre'], 'La Sirenita': ['Mar', 'Sirena'],
            'Cenicienta': ['Zapato', 'Medianoche'], 'Blancanieves': ['Manzana', 'Enanitos'], 'Bella y Bestia': ['Rosa', 'Castillo'],
            'Aladdin': ['Genio', 'Lámpara'], 'Mulan': ['Guerrera', 'China'], 'Pocahontas': ['Naturaleza', 'Indígena'],
            'Hércules': ['Fuerza', 'Grecia'], 'Tarzan': ['Selva', 'Simios'], 'Bambi': ['Ciervo', 'Bosque'],
            'Dumbo': ['Elefante', 'Orejas'], 'Pinocho': ['Marioneta', 'Nariz'], 'Peter Pan': ['Volar', 'Nunca'],
            'Alice': ['Conejo', 'Maravillas'], 'Robin Hood': ['Arquero', 'Bosque']
        },

        paises: {
            // Europa
            'España': ['Portugal', 'Francia'], 'Francia': ['España', 'Italia'], 'Italia': ['Francia', 'Grecia'],
            'Alemania': ['Austria', 'Suiza'], 'Portugal': ['España', 'Atlántico'], 'Holanda': ['Bélgica', 'Tulipanes'],
            'Bélgica': ['Holanda', 'Francia'], 'Suiza': ['Austria', 'Montañas'], 'Austria': ['Alemania', 'Suiza'],
            'Suecia': ['Noruega', 'Finlandia'], 'Noruega': ['Suecia', 'Fiordos'], 'Dinamarca': ['Suecia', 'Vikingos'],
            'Finlandia': ['Suecia', 'Frío'], 'Islandia': ['Volcanes', 'Hielo'], 'Irlanda': ['Verde', 'Trébol'],
            'Grecia': ['Italia', 'Islas'], 'Turquía': ['Grecia', 'Puente'], 'Reino Unido': ['Islas', 'Té'],

            // América
            'Brasil': ['Argentina', 'Samba'], 'Argentina': ['Brasil', 'Tango'], 'México': ['Tacos', 'Azteca'],
            'Estados Unidos': ['Canadá', 'Libertad'], 'Canadá': ['Estados Unidos', 'Maple'],

            // Asia
            'Japón': ['China', 'Sushi'], 'China': ['Japón', 'Muralla'], 'India': ['Curry', 'Taj'],
            'Rusia': ['Grande', 'Frío'], 'Tailandia': ['Vietnam', 'Templos'], 'Vietnam': ['Tailandia', 'Pho'],
            'Indonesia': ['Islas', 'Volcanes'], 'Filipinas': ['Islas', 'Tropical'], 'Malasia': ['Singapur', 'Torres'],
            'Singapur': ['Malasia', 'Ciudad'], 'Corea del Sur': ['Japón', 'K-pop'], 'Mongolia': ['Caballos', 'Estepa'],
            'Nepal': ['Montañas', 'Everest'], 'Bangladesh': ['India', 'Delta'], 'Pakistán': ['India', 'Cricket'],
            'Afganistán': ['Montañas', 'Historia'], 'Irán': ['Persia', 'Petróleo'], 'Irak': ['Mesopotamia', 'Tigris'],

            // África/Oceanía
            'Australia': ['Canguros', 'Oceanía'], 'Egipto': ['Pirámides', 'Nilo'], 'Marruecos': ['Desierto', 'Casablanca'],
            'Sudáfrica': ['Safari', 'Diamantes'], 'Nigeria': ['Petróleo', 'Nollywood'], 'Kenia': ['Safari', 'Masai'],
            'Ghana': ['Oro', 'Cacao'], 'Etiopía': ['Café', 'Lucy'], 'Madagascar': ['Isla', 'Lemures']
        },

        profesiones: {
            // Salud
            'Médico': ['Enfermero', 'Cirujano'], 'Enfermero': ['Médico', 'Cuidados'], 'Dentista': ['Dientes', 'Sonrisa'],
            'Veterinario': ['Animales', 'Cuidados'], 'Cirujano': ['Operaciones', 'Bisturí'], 'Pediatra': ['Niños', 'Médico'],
            'Cardiólogo': ['Corazón', 'Médico'], 'Neurólogo': ['Cerebro', 'Nervios'], 'Dermatólogo': ['Piel', 'Médico'],
            'Farmacéutico': ['Medicinas', 'Recetas'], 'Fisioterapeuta': ['Rehabilitación', 'Ejercicios'],
            'Psicólogo': ['Mente', 'Terapia'], 'Psiquiatra': ['Psicólogo', 'Medicamentos'], 'Nutricionista': ['Dieta', 'Salud'],

            // Educación/Arte
            'Profesor': ['Enseñar', 'Estudiantes'], 'Artista': ['Creatividad', 'Pintura'], 'Músico': ['Instrumentos', 'Melodía'],
            'Escritor': ['Libros', 'Palabras'], 'Actor': ['Teatro', 'Personajes'], 'Cantante': ['Voz', 'Canciones'],
            'Bailarín': ['Danza', 'Ritmo'], 'Director': ['Cine', 'Acción'], 'Productor': ['Director', 'Dinero'],
            'Guionista': ['Escritor', 'Diálogos'], 'Editor': ['Textos', 'Corrección'], 'Traductor': ['Idiomas', 'Palabras'],

            // Técnico/Servicios
            'Ingeniero': ['Construcción', 'Cálculos'], 'Arquitecto': ['Edificios', 'Planos'], 'Programador': ['Código', 'Computadoras'],
            'Diseñador': ['Creatividad', 'Visual'], 'Fotógrafo': ['Cámara', 'Imágenes'], 'Periodista': ['Noticias', 'Escribir'],

            // Seguridad/Emergencias
            'Bombero': ['Fuego', 'Rescate'], 'Policía': ['Seguridad', 'Orden'], 'Piloto': ['Avión', 'Volar'],

            // Legal/Negocios
            'Abogado': ['Leyes', 'Justicia'], 'Chef': ['Cocina', 'Sabores'], 'Entrenador': ['Deportes', 'Ejercicio'],

            // Belleza/Cuidado
            'Estilista': ['Cabello', 'Belleza'], 'Barbero': ['Estilista', 'Hombres'], 'Maquillador': ['Belleza', 'Rostro'],
            'Masajista': ['Relajación', 'Músculos']
        },

        colores: {
            // Colores primarios y básicos
            'Rojo': ['Carmesí', 'Escarlata'], 'Azul': ['Celeste', 'Marino'], 'Verde': ['Esmeralda', 'Lima'],
            'Amarillo': ['Dorado', 'Mostaza'], 'Naranja': ['Coral', 'Salmón'], 'Morado': ['Violeta', 'Lila'],
            'Rosa': ['Fucsia', 'Salmón'], 'Negro': ['Gris', 'Oscuro'], 'Blanco': ['Crema', 'Marfil'],
            'Gris': ['Plateado', 'Negro'], 'Marrón': ['Caoba', 'Chocolate'],

            // Tonos específicos
            'Turquesa': ['Aguamarina', 'Celeste'], 'Violeta': ['Morado', 'Lila'], 'Dorado': ['Amarillo', 'Ámbar'],
            'Plateado': ['Gris', 'Metálico'], 'Beige': ['Crema', 'Arena'], 'Crema': ['Beige', 'Marfil'],
            'Marfil': ['Blanco', 'Crema'], 'Coral': ['Naranja', 'Salmón'], 'Salmón': ['Rosa', 'Coral'],
            'Fucsia': ['Rosa', 'Magenta'], 'Magenta': ['Fucsia', 'Rosa'], 'Carmesí': ['Rojo', 'Granate'],
            'Escarlata': ['Rojo', 'Bermellón'], 'Bermellón': ['Rojo', 'Naranja'], 'Granate': ['Rojo', 'Burdeos'],
            'Burdeos': ['Granate', 'Vino'], 'Vino': ['Burdeos', 'Rojo'], 'Cereza': ['Rojo', 'Frambuesa'],
            'Frambuesa': ['Rosa', 'Cereza'], 'Lavanda': ['Lila', 'Morado'], 'Lila': ['Violeta', 'Lavanda'],
            'Índigo': ['Azul', 'Añil'], 'Añil': ['Índigo', 'Azul'], 'Cobalto': ['Azul', 'Intenso'],
            'Marino': ['Azul', 'Oscuro'], 'Celeste': ['Azul', 'Cielo'], 'Cielo': ['Celeste', 'Azul'],
            'Aguamarina': ['Turquesa', 'Verde'], 'Esmeralda': ['Verde', 'Jade'], 'Jade': ['Verde', 'Esmeralda'],
            'Oliva': ['Verde', 'Marrón'], 'Lima': ['Verde', 'Amarillo'], 'Menta': ['Verde', 'Fresco'],
            'Pistacho': ['Verde', 'Claro'], 'Mostaza': ['Amarillo', 'Marrón'], 'Ámbar': ['Dorado', 'Naranja'],
            'Ocre': ['Marrón', 'Amarillo'], 'Caoba': ['Marrón', 'Rojo'], 'Chocolate': ['Marrón', 'Dulce']
        },

        objetos: {
            // Tecnología
            'Teléfono': ['Comunicación', 'Móvil'], 'Computadora': ['Tecnología', 'Pantalla'], 'Televisión': ['Pantalla', 'Programas'],

            // Muebles
            'Silla': ['Mesa', 'Sentarse'], 'Mesa': ['Silla', 'Superficie'], 'Cama': ['Dormir', 'Colchón'],
            'Espejo': ['Reflejo', 'Cristal'], 'Lámpara': ['Luz', 'Iluminar'], 'Ventana': ['Puerta', 'Cristal'],
            'Puerta': ['Ventana', 'Entrada'],

            // Transporte
            'Coche': ['Bicicleta', 'Motor'], 'Bicicleta': ['Coche', 'Pedales'],

            // Accesorios/Ropa
            'Reloj': ['Tiempo', 'Pulsera'], 'Gafas': ['Vista', 'Cristales'], 'Sombrero': ['Cabeza', 'Sol'],
            'Zapatos': ['Pies', 'Caminar'], 'Camisa': ['Pantalón', 'Torso'], 'Pantalón': ['Camisa', 'Piernas'],
            'Chaqueta': ['Abrigo', 'Frío'], 'Bufanda': ['Cuello', 'Calor'], 'Guantes': ['Manos', 'Frío'],
            'Calcetines': ['Pies', 'Zapatos'], 'Cinturón': ['Pantalón', 'Cintura'],

            // Joyería
            'Collar': ['Cuello', 'Joya'], 'Pulsera': ['Muñeca', 'Joya'], 'Anillo': ['Dedo', 'Joya'],
            'Pendientes': ['Orejas', 'Joya'],

            // Higiene/Cuidado
            'Perfume': ['Olor', 'Fragancia'], 'Champú': ['Cabello', 'Lavar'], 'Jabón': ['Limpiar', 'Espuma'],
            'Toalla': ['Secar', 'Baño'], 'Cepillo': ['Cabello', 'Peinar'], 'Peine': ['Cepillo', 'Cabello'],

            // Herramientas
            'Tijeras': ['Cortar', 'Hojas'], 'Martillo': ['Clavo', 'Golpear'], 'Destornillador': ['Tornillo', 'Girar'],
            'Taladro': ['Agujero', 'Perforar'], 'Sierra': ['Cortar', 'Madera'], 'Clavo': ['Martillo', 'Fijar'],
            'Tornillo': ['Destornillador', 'Rosca'], 'Tuerca': ['Tornillo', 'Rosca'],

            // Escritorio/Oficina
            'Libro': ['Leer', 'Páginas'], 'Bolígrafo': ['Escribir', 'Tinta'], 'Lápiz': ['Escribir', 'Grafito'],
            'Cuaderno': ['Escribir', 'Hojas'], 'Mochila': ['Cargar', 'Espalda'], 'Maleta': ['Viaje', 'Ropa'],

            // Otros
            'Paraguas': ['Lluvia', 'Proteger'], 'Llave': ['Puerta', 'Abrir']
        }
    };

    // Sistema de pistas expandido para las nuevas categorías
    const expandedHints = {
        musica: {
            'Rock': ['Pop', 'Metal'], 'Pop': ['Rock', 'Baile'], 'Jazz': ['Blues', 'Soul'], 'Blues': ['Jazz', 'Rock'],
            'Country': ['Folk', 'Rural'], 'Folk': ['Country', 'Acústico'], 'Reggae': ['Ska', 'Jamaica'],
            'Hip Hop': ['Rap', 'Urbano'], 'Rap': ['Hip Hop', 'Rimas'], 'R&B': ['Soul', 'Funk'],
            'Soul': ['R&B', 'Gospel'], 'Funk': ['Soul', 'Ritmo'], 'Disco': ['Funk', 'Baile'],
            'House': ['Techno', 'Electrónico'], 'Techno': ['House', 'Electrónico'], 'Trance': ['Techno', 'Hipnótico'],
            'Dubstep': ['Electrónico', 'Bajo'], 'EDM': ['Electrónico', 'Baile'], 'Ambient': ['Relajante', 'Atmosférico'],
            'Classical': ['Orquesta', 'Sinfonía'], 'Opera': ['Clásica', 'Vocal'], 'Symphony': ['Clásica', 'Orquesta'],
            'Flamenco': ['Español', 'Guitarra'], 'Tango': ['Argentino', 'Baile'], 'Salsa': ['Latino', 'Baile'],
            'Punk': ['Rock', 'Rebelde'], 'Metal': ['Rock', 'Pesado'], 'Grunge': ['Rock', 'Alternativo'],
            'Alternative': ['Indie', 'Rock'], 'Indie': ['Alternativo', 'Independiente'], 'Reggaeton': ['Latino', 'Urbano'],
            'Piano': ['Teclado', 'Teclas'], 'Guitarra': ['Cuerdas', 'Acorde'], 'Violín': ['Cuerdas', 'Arco'],
            'Violonchelo': ['Cuerdas', 'Grande'], 'Contrabajo': ['Cuerdas', 'Grave'], 'Viola': ['Violín', 'Medio'],
            'Arpa': ['Cuerdas', 'Ángel'], 'Flauta': ['Viento', 'Soplar'], 'Clarinete': ['Viento', 'Madera'],
            'Saxofón': ['Viento', 'Jazz'], 'Trompeta': ['Viento', 'Metal'], 'Trombón': ['Viento', 'Deslizar'],
            'Batería': ['Percusión', 'Ritmo'], 'Percusión': ['Batería', 'Golpear'], 'Xilófono': ['Percusión', 'Madera'],
            'Acordeón': ['Viento', 'Fuelle'], 'Armónica': ['Viento', 'Pequeña'], 'Banjo': ['Cuerdas', 'Country'],
            'Ukelele': ['Cuerdas', 'Hawái'], 'Gaita': ['Viento', 'Escocia'], 'Castañuelas': ['Percusión', 'España']
        },

        tecnologia: {
            'Teléfono Inteligente': ['Móvil', 'Teléfono'], 'Tableta': ['iPad', 'Pantalla'], 'Portátil': ['Ordenador', 'Computadora'],
            'Ordenador de Mesa': ['PC', 'Torre'], 'Monitor': ['Pantalla', 'Visualizar'], 'Teclado': ['Escribir', 'Teclas'],
            'Ratón': ['Cursor', 'Clic'], 'Cámara Web': ['Cámara', 'Vídeo'], 'Auriculares': ['Sonido', 'Oído'],
            'Altavoces': ['Sonido', 'Audio'], 'Micrófono': ['Grabar', 'Voz'], 'Impresora': ['Papel', 'Imprimir'],
            'Enrutador': ['WiFi', 'Internet'], 'Módem': ['Internet', 'Conexión'], 'USB': ['Puerto', 'Conectar'],
            'Bluetooth': ['Inalámbrico', 'Conectar'], 'WiFi': ['Inalámbrico', 'Internet'], '5G': ['Red', 'Rápido'],
            'GPS': ['Ubicación', 'Mapa'], 'NFC': ['Contacto', 'Pago'], 'Código QR': ['Código', 'Escanear'],
            'Inteligencia Artificial': ['IA', 'Robot'], 'Aprendizaje Automático': ['Aprender', 'Algoritmo'],
            'Macrodatos': ['Datos', 'Análisis'], 'Computación en la Nube': ['Nube', 'Servidor'], 'Internet de las Cosas': ['Conectado', 'Inteligente'],
            'Cadena de Bloques': ['Cadena', 'Cripto'], 'Bitcoin': ['Cripto', 'Digital'], 'Token No Fungible': ['Digital', 'Único'],
            'Realidad Virtual': ['Virtual', 'Gafas'], 'Realidad Aumentada': ['Aumentada', 'Realidad'], 'Dron': ['Volar', 'Control'],
            'Robot': ['Automático', 'Máquina'], 'Reloj Inteligente': ['Reloj', 'Inteligente'], 'Televisión Inteligente': ['Televisión', 'Internet'],
            'Transmisión en Directo': ['Vídeo', 'En Línea'], 'Podcast': ['Audio', 'Episodio'], 'YouTube': ['Vídeo', 'Google'],
            'Instagram': ['Fotos', 'Social'], 'Facebook': ['Social', 'Meta'], 'WhatsApp': ['Mensajes', 'Chat'],
            'Zoom': ['Vídeo', 'Llamada'], 'Netflix': ['Series', 'Streaming'], 'Spotify': ['Música', 'Streaming'],
            'PlayStation': ['Consola', 'Sony'], 'Xbox': ['Consola', 'Microsoft'], 'Nintendo': ['Consola', 'Mario'],
            'Ciberseguridad': ['Seguridad', 'Hacker'], 'Cortafuegos': ['Protección', 'Red'], 'Red Privada Virtual': ['Privado', 'Red']
        },

        naturaleza: {
            'Montaña': ['Pico', 'Alto'], 'Valle': ['Bajo', 'Entre'], 'Río': ['Agua', 'Corriente'],
            'Lago': ['Agua', 'Tranquilo'], 'Mar': ['Océano', 'Sal'], 'Océano': ['Mar', 'Grande'],
            'Playa': ['Arena', 'Costa'], 'Desierto': ['Arena', 'Seco'], 'Bosque': ['Árboles', 'Verde'],
            'Selva': ['Tropical', 'Densa'], 'Pradera': ['Hierba', 'Llano'], 'Tundra': ['Frío', 'Ártico'],
            'Sabana': ['África', 'Hierba'], 'Pantano': ['Húmedo', 'Agua'], 'Arrecife': ['Coral', 'Mar'],
            'Isla': ['Agua', 'Rodeada'], 'Volcán': ['Lava', 'Erupción'], 'Cueva': ['Oscura', 'Roca'],
            'Cañón': ['Profundo', 'Roca'], 'Glaciar': ['Hielo', 'Frío'], 'Cascada': ['Agua', 'Caer'],
            'Roble': ['Fuerte', 'Bellota'], 'Pino': ['Aguja', 'Verde'], 'Abeto': ['Navidad', 'Cono'],
            'Cedro': ['Aromático', 'Madera'], 'Eucalipto': ['Koala', 'Medicinal'], 'Sauce': ['Llorar', 'Flexible'],
            'Palmera': ['Tropical', 'Coco'], 'Bambú': ['Flexible', 'Asia'], 'Secuoya': ['Gigante', 'California'],
            'Baobab': ['África', 'Grueso'], 'Cerezo': ['Flor', 'Rosa'], 'Olivo': ['Aceite', 'Mediterráneo'],
            'Rosa': ['Espina', 'Amor'], 'Tulipán': ['Holanda', 'Bulbo'], 'Girasol': ['Sol', 'Amarillo'],
            'Margarita': ['Blanca', 'Pétalos'], 'Orquídea': ['Elegante', 'Tropical'], 'Lirio': ['Elegante', 'Blanco'],
            'Clavel': ['España', 'Rojo'], 'Jazmín': ['Perfume', 'Blanco'], 'Lavanda': ['Púrpura', 'Aromática'],
            'Violeta': ['Pequeña', 'Púrpura'], 'Azalea': ['Arbusto', 'Colorida'], 'Magnolia': ['Grande', 'Blanca'],
            'Lluvia': ['Agua', 'Gotas'], 'Nieve': ['Blanca', 'Frío'], 'Viento': ['Aire', 'Mover'],
            'Huracán': ['Tormenta', 'Fuerte'], 'Tornado': ['Remolino', 'Destruir'], 'Rayo': ['Eléctrico', 'Luz'],
            'Trueno': ['Sonido', 'Rayo'], 'Arcoíris': ['Colores', 'Lluvia'], 'Aurora': ['Polar', 'Luces'],
            'Eclipse': ['Sol', 'Luna'], 'Terremoto': ['Temblar', 'Tierra'], 'Tsunami': ['Ola', 'Grande']
        },

        ciencia: {
            'Átomo': ['Pequeño', 'Partícula'], 'Molécula': ['Átomos', 'Compuesto'], 'Electrón': ['Negativo', 'Órbita'],
            'Protón': ['Positivo', 'Núcleo'], 'Neutrón': ['Neutro', 'Núcleo'], 'Energía': ['Fuerza', 'Poder'],
            'Gravedad': ['Caer', 'Tierra'], 'Magnetismo': ['Imán', 'Atraer'], 'Electricidad': ['Corriente', 'Voltaje'],
            'Luz': ['Fotón', 'Ver'], 'Sonido': ['Onda', 'Oír'], 'Calor': ['Temperatura', 'Energía'],
            'Velocidad': ['Rápido', 'Distancia'], 'Masa': ['Peso', 'Materia'], 'Densidad': ['Compacto', 'Masa'],
            'Radiación': ['Energía', 'Ondas'], 'Láser': ['Luz', 'Concentrada'], 'Plasma': ['Estado', 'Ionizado'],
            'Cuántico': ['Pequeño', 'Partícula'], 'Relatividad': ['Einstein', 'Tiempo'],
            'Elemento': ['Tabla', 'Puro'], 'Compuesto': ['Mezcla', 'Elementos'], 'Reacción': ['Cambio', 'Química'],
            'Ácido': ['pH', 'Corrosivo'], 'Base': ['Alcalino', 'pH'], 'pH': ['Ácido', 'Básico'],
            'Oxidación': ['Óxido', 'Electrones'], 'Cristal': ['Estructura', 'Sólido'], 'Solución': ['Disolver', 'Líquido'],
            'Hidrógeno': ['H', 'Ligero'], 'Oxígeno': ['O', 'Respirar'], 'Carbono': ['C', 'Orgánico'],
            'Oro': ['Au', 'Precioso'], 'Plata': ['Ag', 'Metal'], 'Hierro': ['Fe', 'Fuerte'],
            'Célula': ['Vida', 'Pequeña'], 'ADN': ['Genético', 'Doble'], 'ARN': ['Genético', 'Simple'],
            'Gen': ['Herencia', 'Código'], 'Cromosoma': ['Genes', 'Par'], 'Proteína': ['Aminoácido', 'Función'],
            'Enzima': ['Catalizador', 'Biológico'], 'Virus': ['Infectar', 'Pequeño'], 'Bacteria': ['Microorganismo', 'Célula'],
            'Evolución': ['Darwin', 'Cambio'], 'Mutación': ['Cambio', 'Genético'], 'Ecosistema': ['Ambiente', 'Vida'],
            'Fotosíntesis': ['Plantas', 'Luz'], 'Respiración': ['Oxígeno', 'Energía'], 'Metabolismo': ['Energía', 'Proceso'],
            'Planeta': ['Órbita', 'Redondo'], 'Estrella': ['Luz', 'Fusión'], 'Galaxia': ['Estrellas', 'Espiral'],
            'Nebulosa': ['Gas', 'Colorida'], 'Agujero Negro': ['Gravedad', 'Absorber'], 'Supernova': ['Explosión', 'Estrella'],
            'Cometa': ['Cola', 'Hielo'], 'Asteroide': ['Roca', 'Espacio'], 'Satélite': ['Órbita', 'Luna'],
            'Telescopio': ['Ver', 'Lejos'], 'Sistema Solar': ['Sol', 'Planetas'], 'Vía Láctea': ['Galaxia', 'Casa'],
            'Big Bang': ['Origen', 'Explosión'], 'Universo': ['Todo', 'Espacio']
        }
    };

    // Combinar pistas existentes con las nuevas
    const allHints = { ...hintCategories, ...expandedHints };

    // Obtener pistas específicas para la palabra
    const categoryHints = allHints[theme];
    if (categoryHints && categoryHints[selectedWord]) {
        const possibleHints = categoryHints[selectedWord];
        return possibleHints[Math.floor(Math.random() * possibleHints.length)];
    }

    // Si no hay pista específica, usar una palabra aleatoria del mismo tema (fallback)
    const words = gameData.themes[theme];
    const otherWords = words.filter(w => w !== selectedWord);
    return otherWords[Math.floor(Math.random() * otherWords.length)];
}

// Función actualizada para mostrar roles con pistas mejoradas
function showRole() {
    const currentPlayer = gameData.currentPlayerIndex;
    const roleContent = document.getElementById('role-content');
    const roleCard = document.getElementById('role-display');

    let isImpostor = false;
    let content = '';

    // Determinar si es impostor según el modo
    if (gameData.gameMode === 'normal') {
        isImpostor = currentPlayer === gameData.impostorIndex;
    } else if (gameData.gameMode === 'crazy-innocent') {
        isImpostor = false;
    } else if (gameData.gameMode === 'crazy-impostor') {
        isImpostor = true;
    }

    if (isImpostor && gameData.gameMode !== 'crazy-innocent') {
        roleCard.className = 'role-card';
        if (gameData.gameMode === 'crazy-impostor') {
            content = `
                <h3>🤪 MODO LOCO</h3>
                <p>¡Todos son impostores!</p>
                <p>Nadie conoce la palabra real</p>
                <div class="word-display">Tema: ${gameData.selectedTheme}</div>
            `;
        } else {
            content = `
                <h3>🎭 IMPOSTOR</h3>
                <p>¡Eres el impostor!</p>
                <p>No conoces la palabra secreta</p>
                <div class="word-display">Tema: ${gameData.selectedTheme}</div>
            `;

            if (gameData.giveHint) {
                const hint = generateSmartHint(gameData.selectedWord, gameData.selectedTheme);
                content += `<p><strong>Pista:</strong> ${hint}</p>`;
            }
        }
    } else {
        roleCard.className = 'role-card innocent';
        if (gameData.gameMode === 'crazy-innocent') {
            content = `
                <h3>🤪 MODO LOCO</h3>
                <p>¡Todos son inocentes!</p>
                <p>No hay impostor</p>
                <div class="word-display">${gameData.selectedWord}</div>
            `;
        } else {
            content = `
                <h3>😇 INOCENTE</h3>
                <p>Conoces la palabra secreta</p>
                <div class="word-display">${gameData.selectedWord}</div>
            `;
        }

        if (gameData.showTheme) {
            content += `<p><strong>Tema:</strong> ${gameData.selectedTheme}</p>`;
        }
    }

    roleContent.innerHTML = content;
    roleCard.classList.remove('hidden');
    document.getElementById('show-role-btn').classList.add('hidden');

    // Mostrar el botón correcto según si es el último jugador
    if (gameData.currentPlayerIndex === gameData.players.length - 1) {
        // Es el último jugador - mostrar botón de iniciar discusión
        document.getElementById('next-player-btn').classList.add('hidden');
        document.getElementById('start-discussion-btn').classList.remove('hidden');
    } else {
        // No es el último jugador - mostrar botón de siguiente jugador
        document.getElementById('next-player-btn').classList.remove('hidden');
        document.getElementById('start-discussion-btn').classList.add('hidden');
    }
}

// Función para manejar diferentes tipos de rondas
function handleRoundType() {
    switch (gameData.roundType) {
        case 'elimination':
            return handleEliminationRound();
        case 'single-vote':
            return handleSingleVote();
    }
}

function handleEliminationRound() {
    if (selectedVote !== -1) {
        const eliminatedPlayer = gameData.players[selectedVote];
        gameData.eliminatedPlayers.push(eliminatedPlayer);
        gameData.activePlayers = gameData.activePlayers.filter(p => p !== eliminatedPlayer);

        // Verificar condiciones de victoria
        const remainingInnocents = gameData.activePlayers.length - (gameData.activePlayers.includes(gameData.players[gameData.impostorIndex]) ? 1 : 0);
        const impostorAlive = gameData.activePlayers.includes(gameData.players[gameData.impostorIndex]);

        if (selectedVote === gameData.impostorIndex) {
            // Impostor eliminado - ganan inocentes
            return 'innocent-win';
        } else if (remainingInnocents <= Math.ceil(gameData.players.length * 0.3) && impostorAlive) {
            // Impostor gana cuando quedan 30% o menos de inocentes
            return 'impostor-win';
        } else {
            // Continuar juego
            return 'continue';
        }
    }
    return 'no-vote';
}

// Función eliminada - ya no se usa el modo de dos rondas

function handleSingleVote() {
    // En modo de una sola votación, si aciertan ganan los inocentes, si no gana el impostor
    if (selectedVote === gameData.impostorIndex) {
        return 'innocent-win';
    } else {
        return 'impostor-win';
    }
}

// Variables globales para el manejo de eliminaciones
let currentGameResult = null;
let eliminatedPlayerInfo = null;

// Actualizar la función de resultados para manejar diferentes tipos de ronda
function revealResults() {
    const result = handleRoundType();
    currentGameResult = result;

    if (result === 'continue' || result === 'next-round') {
        // Mostrar pantalla de eliminación antes de continuar
        showEliminationScreen(result);
        return;
    }

    // Juego terminado - mostrar resultados finales
    showScreen('results-screen');
    displayResults(result);
}

// Nueva función para mostrar la pantalla de eliminación
function showEliminationScreen(result) {
    if (selectedVote === -1) {
        // No hubo votación
        showScreen('discussion-screen');
        setupDiscussion();
        startTimer();
        return;
    }

    const eliminatedPlayer = gameData.players[selectedVote];
    const isImpostor = selectedVote === gameData.impostorIndex;

    // Guardar información del eliminado
    eliminatedPlayerInfo = {
        name: eliminatedPlayer,
        isImpostor: isImpostor,
        result: result
    };

    // Configurar la pantalla de eliminación
    document.getElementById('eliminated-name').textContent = eliminatedPlayer;

    const eliminatedPlayerDiv = document.querySelector('.eliminated-player');
    const eliminatedRole = document.getElementById('eliminated-role');
    const eliminationMessage = document.getElementById('elimination-message');

    if (isImpostor) {
        eliminatedPlayerDiv.classList.remove('innocent');
        eliminatedRole.textContent = '🎭 ERA EL IMPOSTOR';
        eliminationMessage.textContent = '¡Los inocentes han ganado!';

        // Mostrar botón de resultados finales
        document.getElementById('continue-game-btn').classList.add('hidden');
        document.getElementById('end-game-btn').classList.remove('hidden');
    } else {
        eliminatedPlayerDiv.classList.add('innocent');
        eliminatedRole.textContent = '😇 ERA INOCENTE';

        if (result === 'continue') {
            eliminationMessage.textContent = 'El juego continúa...';
            document.getElementById('continue-game-btn').classList.remove('hidden');
            document.getElementById('end-game-btn').classList.add('hidden');
        } else if (result === 'impostor-win') {
            eliminationMessage.textContent = '¡El impostor ha ganado! Quedan muy pocos inocentes.';
            document.getElementById('continue-game-btn').classList.add('hidden');
            document.getElementById('end-game-btn').classList.remove('hidden');
        }
    }

    showScreen('elimination-screen');
}

// Función para continuar después de la eliminación
function continueAfterElimination() {
    selectedVote = -1;
    gameData.currentRound++;
    showScreen('discussion-screen');
    setupDiscussion();
    startTimer();
}

// Función para mostrar los resultados finales
function showFinalResults() {
    showScreen('results-screen');
    displayResults(currentGameResult);
}

function displayResults(result = null) {
    const resultsContent = document.getElementById('results-content');
    let content = '';

    // SIEMPRE mostrar la palabra secreta al final de la partida
    content += `<h3>🔍 La palabra era: <strong>${gameData.selectedWord}</strong></h3>`;
    content += `<p><strong>Tema:</strong> ${gameData.selectedTheme}</p><br>`;

    // Mostrar información del modo loco si aplica
    if (gameData.gameMode === 'crazy-innocent') {
        content += `<p>🤪 <strong>Modo Loco:</strong> ¡Todos eran inocentes!</p>`;
        content += `<div class="winner-announcement innocent-win">
            🎉 ¿Se dieron cuenta de que no había impostor?
        </div>`;
    } else if (gameData.gameMode === 'crazy-impostor') {
        content += `<p>🤪 <strong>Modo Loco:</strong> ¡Todos eran impostores!</p>`;
        content += `<div class="winner-announcement impostor-win">
            🎭 Nadie conocía la palabra real<br>
            ¿Lograron fingir bien?
        </div>`;
    } else {
        // Juego normal - SIEMPRE mostrar quién era el impostor
        const impostorName = gameData.players[gameData.impostorIndex];
        content += `<p>🎭 <strong>El impostor era:</strong> ${impostorName}</p><br>`;

        // Mostrar jugadores eliminados si los hay
        if (gameData.eliminatedPlayers.length > 0) {
            content += `<p><strong>Jugadores eliminados:</strong> ${gameData.eliminatedPlayers.join(', ')}</p><br>`;
        }

        // Determinar ganador
        if (result === 'innocent-win' || selectedVote === gameData.impostorIndex) {
            content += `<div class="winner-announcement innocent-win">
                🎉 ¡Los inocentes ganaron!<br>
                Descubrieron al impostor correctamente
            </div>`;
        } else if (result === 'impostor-win') {
            content += `<div class="winner-announcement impostor-win">
                🎭 ¡El impostor ganó!<br>
                Logró sobrevivir hasta el final
            </div>`;
        } else if (selectedVote === -1) {
            content += `<div class="winner-announcement">
                🤷‍♂️ No hubo votación<br>
                El impostor se salvó por falta de consenso
            </div>`;
        } else {
            const votedPlayer = gameData.players[selectedVote];
            content += `<div class="winner-announcement impostor-win">
                🎭 ¡El impostor ganó!<br>
                Votaron por ${votedPlayer} (inocente)
            </div>`;
        }
    }

    resultsContent.innerHTML = content;
}

// Actualizar función de reset para no perder configuraciones
function resetGame() {
    // No resetear lastSettings para mantener configuraciones
    gameData.players = [];
    gameData.currentPlayerIndex = 0;
    gameData.selectedWord = '';
    gameData.selectedTheme = '';
    gameData.impostorIndex = -1;
    gameData.gameMode = 'normal';
    gameData.currentRound = 1;
    gameData.eliminatedPlayers = [];
    gameData.activePlayers = [];
    selectedVote = -1;

    if (gameData.timer) {
        clearInterval(gameData.timer);
        gameData.timer = null;
    }
}
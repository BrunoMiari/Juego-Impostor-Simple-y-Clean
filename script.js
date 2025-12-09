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
    discussionStarter: '', // Jugador que inicia la discusión
    // Nuevos roles para modo Roles+
    helperIndexes: [], // Índices de los Ayudantes
    childIndexes: [],  // Índices de los Niños
    tabooWords: []     // Palabras tabú para los Ayudantes
};

// Funciones de navegación
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');

    // Mostrar/ocultar botón Nuevo Juego según la pantalla
    const newGameContainer = document.getElementById('new-game-container');
    if (newGameContainer) {
        if (screenId === 'roles-screen') {
            newGameContainer.style.display = 'block';
        } else {
            newGameContainer.style.display = 'none';
        }
    }
}

// Función eliminada - usar la versión actualizada más abajo

// Funciones eliminadas - usar las versiones actualizadas más abajo

function showHome() {
    showScreen('home-screen');
    // No resetear si venimos de resultados, para mantener configuracionesenimos de resultados, para mantener configuraciones
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
        showColoredAlert('El número de jugadores debe estar entre 3 y 12', 'warning');
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
        rn;
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

// Variables para el nuevo sistema de roles
let viewedPlayers = new Set();
let currentSelectedPlayer = '';

// Función auxiliar para manejar la visibilidad del botón de iniciar discusión
function updateStartDiscussionButton() {
    const startBtn = document.getElementById('start-discussion-btn');
    if (viewedPlayers.size === gameData.players.length && gameData.players.length > 0) {
        startBtn.classList.remove('hidden');
    } else {
        startBtn.classList.add('hidden');
    }
}

// Función auxiliar para generar contenido de rol en modo Roles+
function generateRolesPlusContent(currentPlayer) {
    let content = '';
    let className = 'role-card';

    if (currentPlayer === gameData.impostorIndex) {
        className = 'role-card';
        content = `
            <h3>🎭 IMPOSTOR</h3>
            <p>¡Eres el impostor!</p>
            <p>No conoces la palabra secreta</p>
            <div class="word-display">Tema: ${gameData.selectedTheme}</div>
        `;
        if (gameData.giveHint && gameData.impostorHint) {
            content += `<p><strong>Pista:</strong> ${gameData.impostorHint}</p>`;
        }
    } else if (gameData.helperIndexes.includes(currentPlayer)) {
        className = 'role-card helper';
        content = `
            <h3>🟠 AYUDANTE</h3>
            <p>¡Ayuda al impostor a ganar!</p>
            <p>Conoces la palabra y quién es el impostor</p>
            <div class="word-display">${gameData.selectedWord}</div>
            <p><strong>El impostor es:</strong> ${gameData.players[gameData.impostorIndex]}</p>
        `;
    } else if (gameData.childIndexes.includes(currentPlayer)) {
        className = 'role-card child';
        content = `
            <h3>🔵 NIÑO INOCENTE</h3>
            <p>¡Eres un inocente especial!</p>
            <p>Si te eliminan, ¡TÚ GANAS!</p>
            <div class="word-display">${gameData.selectedWord}</div>
            <p><em>Juega normal, pero si sospechan de ti... ¡perfecto!</em></p>
        `;
    } else {
        className = 'role-card innocent';
        content = `
            <h3>😇 INOCENTE</h3>
            <p>Conoces la palabra secreta</p>
            <div class="word-display">${gameData.selectedWord}</div>
        `;
    }

    if (gameData.showTheme) {
        content += `<p><strong>Tema:</strong> ${gameData.selectedTheme}</p>`;
    }

    return { content, className };
}

// Nueva función revealRole que maneja todos los modos - ESTA ES LA FUNCIÓN ACTIVA
function revealRoleFixed() {
    const currentPlayer = gameData.currentPlayerIndex;
    const roleContent = document.getElementById('individual-role-content');
    const roleCard = document.getElementById('role-content-display');
    const revealCard = document.querySelector('.role-reveal-card');

    let content = '';
    let className = 'role-card';

    // Manejar modo Roles+ primero
    if (gameData.gameMode === 'roles-plus') {
        const rolesPlusResult = generateRolesPlusContent(currentPlayer);
        content = rolesPlusResult.content;
        className = rolesPlusResult.className;
    } else {
        // Manejar otros modos
        let isImpostor = false;

        if (gameData.gameMode === 'normal') {
            isImpostor = currentPlayer === gameData.impostorIndex;
        } else if (gameData.gameMode === 'crazy-innocent') {
            isImpostor = false;
        } else if (gameData.gameMode === 'crazy-impostor') {
            isImpostor = true;
        }

        // Preparar el contenido según el rol
        if (isImpostor && gameData.gameMode !== 'crazy-innocent') {
            className = 'role-card';
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

                if (gameData.giveHint && gameData.impostorHint) {
                    content += `<p><strong>Pista:</strong> ${gameData.impostorHint}</p>`;
                }
            }
        } else {
            className = 'role-card innocent';
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
    }

    // Llenar el contenido del rol
    roleContent.innerHTML = content;

    // Aplicar la clase de rol correcta sin sobrescribir otras clases importantes
    roleCard.className = `${className} hidden`;

    // Iniciar la animación de transición
    revealCard.classList.add('fade-out');

    // Después de que termine la animación de salida, mostrar el contenido del rol
    setTimeout(() => {
        roleCard.classList.remove('hidden');
        roleCard.classList.add('show');

        // Marcar jugador como visto
        viewedPlayers.add(currentSelectedPlayer);
    }, 250);
}

function updateCurrentPlayer() {
    // Crear la cuadrícula de jugadores
    createPlayersGrid();
}

// Crear cuadrícula de jugadores
function createPlayersGrid() {
    const playersGrid = document.getElementById('players-grid');
    playersGrid.innerHTML = '';

    gameData.players.forEach((player, index) => {
        const playerCard = document.createElement('div');
        playerCard.className = 'player-card';
        playerCard.textContent = player;
        playerCard.onclick = () => selectPlayer(player, index);

        // Marcar como visto si ya vio su rol
        if (viewedPlayers.has(player)) {
            playerCard.classList.add('viewed');
        }

        playersGrid.appendChild(playerCard);
    });

    // Mostrar botón de iniciar discusión si todos han visto su rol
    updateStartDiscussionButton();
}

// Seleccionar jugador
function selectPlayer(playerName, playerIndex) {
    currentSelectedPlayer = playerName;
    gameData.currentPlayerIndex = playerIndex;
    document.getElementById('selected-player-name').textContent = playerName;

    // Resetear la pantalla de rol para la animación
    const revealCard = document.querySelector('.role-reveal-card');
    const roleCard = document.getElementById('role-content-display');

    // Resetear estados de animación
    revealCard.classList.remove('fade-out');
    revealCard.style.display = 'block';
    roleCard.classList.add('hidden');
    roleCard.classList.remove('show');

    showScreen('individual-role-screen');
}

// Revelar rol al tocar
function revealRole() {
    const currentPlayer = gameData.currentPlayerIndex;
    const roleContent = document.getElementById('individual-role-content');
    const roleCard = document.getElementById('role-content-display');
    const revealCard = document.querySelector('.role-reveal-card');

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

    // Preparar el contenido según el rol
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

            if (gameData.giveHint && gameData.impostorHint) {
                content += `<p><strong>Pista:</strong> ${gameData.impostorHint}</p>`;
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

    // Llenar el contenido del rol
    roleContent.innerHTML = content;

    // Iniciar la animación de transición
    revealCard.classList.add('fade-out');

    // Después de que termine la animación de salida, mostrar el contenido del rol
    setTimeout(() => {
        roleCard.classList.remove('hidden');
        roleCard.classList.add('show');

        // Marcar jugador como visto
        viewedPlayers.add(currentSelectedPlayer);
    }, 250); // La mitad del tiempo de transición para un efecto más suave
}

// Volver a la selección de jugadores
function backToPlayerSelection() {
    showScreen('roles-screen');
    createPlayersGrid();
}

// Función antigua mantenida para compatibilidad
function nextPlayer() {
    // Esta función ya no se usa con el nuevo sistema
    console.log('nextPlayer() is deprecated - using new player selection system');
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

// Eliminar temporizador - ahora es tiempo libre
function startTimer() {
    // Ya no hay límite de tiempo
    document.getElementById('timer-display').textContent = '∞';
}

function updateTimerDisplay() {
    // Función vacía - ya no se usa temporizador
}

function startVoting() {
    // Ya no hay temporizador que limpiar
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
    gameData.roundType = 'elimination';
    gameData.currentRound = 1;
    gameData.eliminatedPlayers = [];
    gameData.activePlayers = [];
    // Resetear nuevos roles del modo Roles+
    gameData.helperIndexes = [];
    gameData.childIndexes = [];
    gameData.tabooWords = [];
    selectedVote = -1;

    // Ya no hay temporizador que limpiar

    // Resetear también el sistema de roles
    viewedPlayers.clear();
    currentSelectedPlayer = '';

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

    // Agregar event listener para actualizar límites de roles cuando cambie el número de jugadores
    const playerCountInput = document.getElementById('player-count');
    if (playerCountInput) {
        playerCountInput.addEventListener('input', updateRoleLimits);
        // Inicializar límites con el valor actual
        updateRoleLimits();
    }
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

// Función eliminada - usar la versión actualizada más abajo que maneja categorías personalizadas

// Sistema de pistas avanzado con 3 opciones únicas por palabra
function generateAdvancedHint(selectedWord, theme) {
    // Definir 3 pistas únicas para cada palabra
    const advancedHints = {
        animales: {
            // Mamíferos terrestres
            'Perro': ['Doméstico', 'Leal', 'Guardián'],
            'Gato': ['Independiente', 'Nocturno', 'Ágil'],
            'León': ['Feroz', 'Majestuoso', 'Africano'],
            'Elefante': ['Gigante', 'Inteligente', 'Memoria'],
            'Tigre': ['Rayado', 'Solitario', 'Asiático'],
            'Oso': ['Hibernación', 'Omnívoro', 'Peludo'],
            'Lobo': ['Salvaje', 'Manada', 'Aullido'],
            'Zorro': ['Astuto', 'Rojizo', 'Adaptable'],
            'Conejo': ['Saltarín', 'Herbívoro', 'Orejas'],
            'Panda': ['Bambú', 'Blanco', 'Protegido'],
            'Jirafa': ['Alto', 'Cuello', 'Manchas'],
            'Zebra': ['Rayado', 'Africano', 'Équido'],
            'Hipopótamo': ['Acuático', 'Territorial', 'Boca'],
            'Rinoceronte': ['Cuerno', 'Blindado', 'Carga'],
            'Canguro': ['Saltador', 'Bolsa', 'Australiano'],
            'Ardilla': ['Roedor', 'Cola', 'Nueces'],
            'Castor': ['Constructor', 'Dientes', 'Acuático'],
            'Mapache': ['Nocturno', 'Manos', 'Bandido'],
            'Koala': ['Dormilón', 'Eucalipto', 'Australiano'],
            'Lemur': ['Primate', 'Madagascar', 'Cola'],
            'Jaguar': ['Felino', 'Americano', 'Manchas'],
            'Leopardo': ['Trepador', 'Nocturno', 'Manchado'],
            'Guepardo': ['Velocidad', 'Cazador', 'Manchas'],
            'Cabra': ['Escalador', 'Barbudo', 'Leche'],
            'Oveja': ['Lana', 'Rebaño', 'Balido'],
            'Cerdo': ['Inteligente', 'Hocico', 'Lodo'],
            'Vaca': ['Leche', 'Mugido', 'Herbívoro'],
            'Caballo': ['Galope', 'Elegante', 'Relincho'],
            'Burro': ['Resistente', 'Orejas', 'Rebuzno'],
            'Llama': ['Andino', 'Escupe', 'Cuello'],
            'Camello': ['Desierto', 'Joroba', 'Sed'],
            'Mono': ['Primate', 'Cola', 'Social'],
            'Gorila': ['Gigante', 'Pecho', 'Nudillos'],
            'Chimpancé': ['Inteligente', 'Herramientas', 'Pariente'],

            // Más mamíferos
            'Orangután': ['Pelirrojo', 'Brazos', 'Arbóreo'],
            'Babuino': ['Terrestre', 'Hocico', 'Tropas'],
            'Rata': ['Urbano', 'Adaptable', 'Cola'],
            'Ratón': ['Pequeño', 'Bigotes', 'Nocturno'],
            'Hámster': ['Doméstico', 'Mejillas', 'Rueda'],
            'Cobaya': ['Sudamericano', 'Mascota', 'Sonidos'],
            'Erizo': ['Espinas', 'Enrolla', 'Insectívoro'],
            'Topo': ['Ciego', 'Túneles', 'Subterráneo'],
            'Murciélago': ['Volador', 'Ecolocalización', 'Nocturno'],
            'Nutria': ['Nadador', 'Impermeable', 'Juguetón'],
            'Foca': ['Marino', 'Aletas', 'Bigotes'],
            'Morsa': ['Colmillos', 'Ártico', 'Social'],
            'Oso Polar': ['Ártico', 'Blanco', 'Nadador'],
            'Reno': ['Ártico', 'Cuernos', 'Migración'],
            'Alce': ['Gigante', 'Cornamenta', 'Norteño'],
            'Ciervo': ['Elegante', 'Cuernos', 'Saltador'],
            'Jabalí': ['Salvaje', 'Colmillos', 'Territorial'],
            'Bisonte': ['Salvaje', 'Joroba', 'Americano'],
            'Búfalo': ['Africano', 'Cuernos', 'Peligroso'],
            'Antílope': ['Veloz', 'Cuernos', 'Africano'],
            'Gacela': ['Grácil', 'Veloz', 'Desierto'],
            'Impala': ['Saltador', 'Cuernos', 'Manadas'],
            'Wombat': ['Excavador', 'Robusto', 'Madrigueras'],
            'Ornitorrinco': ['Único', 'Pico', 'Huevos'],
            'Equidna': ['Espinoso', 'Huevos', 'Hocico'],
            'Perezoso': ['Lento', 'Colgado', 'Metabolismo'],
            'Armadillo': ['Caparazón', 'Enrolla', 'Excavador'],

            // Aves
            'Águila': ['Rapaz', 'Vista', 'Nacional'],
            'Búho': ['Nocturno', 'Cabeza', 'Silencioso'],
            'Flamenco': ['Rosado', 'Equilibrio', 'Cuello'],
            'Pingüino': ['Polar', 'Nadador', 'Formal'],
            'Colibrí': ['Diminuto', 'Rápido', 'Néctar'],
            'Loro': ['Parlante', 'Colorido', 'Tropical'],
            'Canario': ['Cantor', 'Amarillo', 'Enjaulado'],
            'Gorrión': ['Urbano', 'Abundante', 'Pequeño'],
            'Paloma': ['Urbana', 'Mensajera', 'Arrulla'],
            'Cuervo': ['Inteligente', 'Negro', 'Graznido'],
            'Gaviota': ['Costera', 'Pescadora', 'Planeador'],
            'Pelícano': ['Pescador', 'Bolsa', 'Zambullida'],
            'Cisne': ['Elegante', 'Nadador', 'Cuello'],
            'Pato': ['Acuático', 'Palmeado', 'Graznido'],
            'Ganso': ['Migratorio', 'Formación', 'Potente'],
            'Gallina': ['Doméstica', 'Huevos', 'Picotea'],
            'Gallo': ['Cantante', 'Despertador', 'Cresta'],
            'Pavo': ['Grande', 'Cola', 'Navideño'],

            // Más aves
            'Avestruz': ['Gigante', 'Corredor', 'Terrestre'],
            'Emú': ['Australiano', 'Grande', 'Poderoso'],
            'Kiwi': ['Neozelandés', 'Nocturno', 'Terrestre'],
            'Tucán': ['Pico', 'Tropical', 'Fruta'],
            'Quetzal': ['Sagrado', 'Cola', 'Verde'],
            'Cardenal': ['Rojo', 'Cresta', 'Melodioso'],
            'Petirrojo': ['Pecho', 'Primavera', 'Alegre'],
            'Jilguero': ['Amarillo', 'Trino', 'Semillas'],
            'Halcón': ['Rapaz', 'Cazador', 'Picado'],
            'Buitre': ['Carroñero', 'Planeador', 'Pelado'],
            'Cóndor': ['Gigante', 'Envergadura', 'Montañas'],
            'Ibis': ['Curvado', 'Zancuda', 'Sagrado'],
            'Grulla': ['Migratoria', 'Cuello', 'Danza'],
            'Cigüeña': ['Zancuda', 'Nido', 'Bebés'],
            'Garza': ['Pescadora', 'Cuello', 'Inmóvil'],
            'Martín Pescador': ['Pescador', 'Brillante', 'Preciso'],

            // Reptiles y anfibios
            'Serpiente': ['Reptil', 'Ondulante', 'Lengua'],
            'Lagarto': ['Reptil', 'Cola', 'Muda'],
            'Iguana': ['Herbívoro', 'Cresta', 'Ojo'],
            'Gecko': ['Escalador', 'Adherente', 'Nocturno'],
            'Camaleón': ['Camuflaje', 'Ojos', 'Lengua'],
            'Cocodrilo': ['Acuático', 'Mandíbulas', 'Ancestro'],
            'Caimán': ['Americano', 'Hocico', 'Pantanos'],
            'Tortuga': ['Caparazón', 'Longevidad', 'Pausado'],
            'Salamandra': ['Regenerador', 'Permeable', 'Metamorfosis'],
            'Rana': ['Saltador', 'Nocturno', 'Lisa'],
            'Sapo': ['Terrestre', 'Verrugosa', 'Tóxicas'],
            'Tritón': ['Acuático', 'Comprimida', 'Regeneración'],
            'Dragón de Komodo': ['Gigante', 'Veneno', 'Indonesio'],
            'Pitón': ['Constrictora', 'Impresionante', 'Envolvente'],
            'Cobra': ['Venenosa', 'Capucha', 'Amenazante'],
            'Víbora': ['Venenosa', 'Retráctiles', 'Rápido'],

            // Peces y vida marina
            'Delfín': ['Marino', 'Sociable', 'Inteligente'],
            'Ballena': ['Gigante', 'Canto', 'Migración'],
            'Tiburón': ['Depredador', 'Cartílago', 'Dientes'],
            'Pulpo': ['Inteligente', 'Ocho', 'Camuflaje'],
            'Calamar': ['Nadador', 'Chorro', 'Tinta'],
            'Medusa': ['Gelatinoso', 'Urticante', 'Deriva'],
            'Estrella de Mar': ['Regenerador', 'Radial', 'Ambulacral'],
            'Cangrejo': ['Lateral', 'Pinzas', 'Crustáceo'],
            'Langosta': ['Marino', 'Antenas', 'Muda'],
            'Camarón': ['Pequeño', 'Comprimido', 'Impulsos'],
            'Atún': ['Pelágico', 'Veloz', 'Comercial'],
            'Salmón': ['Migratorio', 'Salto', 'Rosado'],
            'Trucha': ['Dulce', 'Moteado', 'Pesca'],
            'Sardina': ['Pequeño', 'Cardumen', 'Plateado'],
            'Pez Payaso': ['Tropical', 'Anémona', 'Llamativo'],
            'Caballito de Mar': ['Único', 'Vertical', 'Gestante'],

            // Más vida marina
            'Anchoa': ['Pequeño', 'Intenso', 'Salada'],
            'Bacalao': ['Comercial', 'Blanca', 'Tradicional'],
            'Pez Ángel': ['Tropical', 'Comprimida', 'Vibrante'],
            'Raya': ['Cartilaginoso', 'Aplanado', 'Pectorales'],
            'Anguila': ['Alargado', 'Serpentino', 'Misteriosa'],
            'Pez Globo': ['Inflable', 'Hinchado', 'Tóxico'],
            'Barracuda': ['Veloz', 'Poderosas', 'Torpedo'],

            // Insectos y arácnidos
            'Mariposa': ['Metamorfosis', 'Polinizador', 'Escamosas'],
            'Abeja': ['Vital', 'Organizada', 'Miel'],
            'Araña': ['Cazador', 'Ocho', 'Tela'],
            'Hormiga': ['Social', 'Fuerza', 'Colonia'],
            'Libélula': ['Aéreo', 'Compuestos', 'Ágil'],
            'Escarabajo': ['Grande', 'Protectores', 'Diverso'],
            'Grillo': ['Nocturno', 'Saltador', 'Termómetro'],
            'Saltamontes': ['Herbívoro', 'Posteriores', 'Plaga'],
            'Mantis': ['Paciente', 'Característica', 'Sexual'],
            'Mariquita': ['Biológico', 'Advertencia', 'Fortuna'],
            'Mosca': ['Común', 'Rápida', 'Vector'],
            'Mosquito': ['Sangre', 'Acuática', 'Transmisor'],
            'Avispa': ['Social', 'Reutilizable', 'Papel'],
            'Polilla': ['Nocturno', 'Positivo', 'Plumosas'],
            'Termita': ['Social', 'Celulosa', 'Montículos'],
            'Chinche': ['Bucal', 'Sangre', 'Parásito'],
            'Pulga': ['Saltador', 'Alas', 'Completa'],
            'Garrapata': ['Parásito', 'Sangre', 'Vector'],
            'Escorpión': ['Venenoso', 'Segmentada', 'Frontales'],
            'Ciempiés': ['Depredador', 'Patas', 'Paralizante'],
            'Milpiés': ['Cilíndrico', 'Química', 'Detrito'],
            'Tarántula': ['Grande', 'Urticantes', 'Longevidad']
        },

        comida: {
            // Platos principales
            'Pizza': ['Italiano', 'Redonda', 'Porciones'],
            'Hamburguesa': ['Rápida', 'Panes', 'Manos'],
            'Tacos': ['Mexicana', 'Doblada', 'Variado'],
            'Sushi': ['Japonesa', 'Arroz', 'Palillos'],
            'Pasta': ['Italiana', 'Formas', 'Salsa'],
            'Lasaña': ['Capas', 'Hornea', 'Queso'],
            'Paella': ['Española', 'Arroz', 'Sartén'],
            'Empanadas': ['Rellena', 'Semicircular', 'Fríe'],
            'Ceviche': ['Peruano', 'Marinado', 'Cítricos'],
            'Ramen': ['Japonesa', 'Fideos', 'Caliente'],
            'Curry': ['Especiado', 'Asiático', 'Espesa'],
            'Falafel': ['Árabe', 'Bolitas', 'Legumbres'],
            'Hummus': ['Árabe', 'Untar', 'Beige'],
            'Gazpacho': ['Española', 'Fría', 'Verduras'],
            'Tortilla': ['Española', 'Huevo', 'Voltear'],
            'Risotto': ['Italiano', 'Lenta', 'Cremosa'],
            'Goulash': ['Húngaro', 'Guisada', 'Pimentón'],
            'Chili': ['Picante', 'Frijoles', 'Americano'],
            'Burrito': ['Mexicana', 'Enrollada', 'Abundante'],
            'Quesadilla': ['Doblada', 'Queso', 'Plancha'],
            'Enchiladas': ['Enrolladas', 'Salsa', 'Mexicana'],
            'Tamales': ['Maíz', 'Hojas', 'Vapor'],
            'Pad Thai': ['Tailandeses', 'Salteados', 'Agridulce'],
            'Pho': ['Vietnamita', 'Arroz', 'Aromático'],
            'Bibimbap': ['Coreano', 'Verduras', 'Mezcla'],
            'Kimchi': ['Coreano', 'Encurtidas', 'Picante'],
            'Moussaka': ['Griego', 'Berenjenas', 'Gratinado'],
            'Gyros': ['Griega', 'Pita', 'Salsa'],
            'Kebab': ['Ensartada', 'Turco', 'Parrilla'],
            'Shawarma': ['Árabe', 'Láminas', 'Pan'],
            'Biryani': ['Indio', 'Especias', 'Aromático'],
            'Tandoori': ['India', 'Horno', 'Rojizo'],
            'Dim Sum': ['China', 'Pequeñas', 'Vapor'],
            'Spring Rolls': ['Asiáticos', 'Fina', 'Variado'],
            'Fish and Chips': ['Británico', 'Rebozado', 'Fritas'],
            'Bangers and Mash': ['Británica', 'Salchichas', 'Puré'],
            'Shepherd\'s Pie': ['Británico', 'Picada', 'Puré'],
            'Haggis': ['Escocés', 'Embutido', 'Típico'],
            'Borscht': ['Eslava', 'Rojizo', 'Remolacha'],
            'Pierogi': ['Polaca', 'Rellena', 'Luna'],
            'Gnocchi': ['Italiana', 'Pequeños', 'Patata'],
            'Carbonara': ['Italiana', 'Huevo', 'Cremosa'],
            'Bolognese': ['Italiana', 'Carne', 'Pasta'],
            'Pesto': ['Italiana', 'Verde', 'Albahaca'],
            'Minestrone': ['Italiana', 'Verduras', 'Nutritiva'],
            'Bouillabaisse': ['Francesa', 'Pescado', 'Aromática'],
            'Ratatouille': ['Francés', 'Verduras', 'Mediterráneo'],
            'Coq au Vin': ['Francés', 'Pollo', 'Vino'],
            'Beef Bourguignon': ['Francés', 'Res', 'Tinto'],
            'Cassoulet': ['Francés', 'Legumbres', 'Lenta'],
            'Schnitzel': ['Alemán', 'Empanada', 'Fino'],
            'Sauerbraten': ['Alemán', 'Marinado', 'Agridulce'],
            'Bratwurst': ['Alemana', 'Asar', 'Popular'],

            // Carnes y proteínas
            'Pollo': ['Ave', 'Magra', 'Versátil'],
            'Pescado': ['Marina', 'Omega', 'Variada'],
            'Carne': ['Animal', 'Rojizo', 'Asa'],
            'Cerdo': ['Rosada', 'Jugosa', 'Cortes'],
            'Cordero': ['Tierna', 'Distintivo', 'Joven'],
            'Jamón': ['Curada', 'Largo', 'Intenso'],
            'Bacon': ['Ahumado', 'Crujiente', 'Desayuno'],
            'Salchichas': ['Embutida', 'Cilíndrica', 'Fácil'],
            'Chorizo': ['Especiado', 'Rojizo', 'Intenso'],
            'Ternera': ['Joven', 'Tierna', 'Rosado'],
            'Pavo': ['Grande', 'Magra', 'Festividades'],
            'Pato': ['Acuática', 'Oscura', 'Grasa'],
            'Conejo': ['Blanca', 'Magra', 'Cuidadosa'],
            'Venado': ['Salvaje', 'Magra', 'Intenso'],
            'Morcilla': ['Oscuro', 'Sangre', 'Fuerte'],
            'Paté': ['Untable', 'Cremosa', 'Refinado'],
            'Foie Gras': ['Graso', 'Cremoso', 'Manjar'],
            'Salmón': ['Rosado', 'Grasa', 'Nutritivo'],
            'Atún': ['Grande', 'Firme', 'Rojizo'],
            'Bacalao': ['Blanco', 'Firme', 'Versátil'],
            'Merluza': ['Blanco', 'Delicada', 'Pocas'],
            'Lubina': ['Marino', 'Fina', 'Apreciado'],
            'Dorada': ['Dorado', 'Blanca', 'Delicado'],
            'Pulpo': ['Marino', 'Ocho', 'Especial'],
            'Calamares': ['Marino', 'Alargada', 'Negra'],
            'Gambas': ['Pequeño', 'Rosado', 'Dulce'],
            'Langostinos': ['Grande', 'Sabroso', 'Firme'],
            'Cangrejo': ['Crustáceo', 'Pinzas', 'Dulce'],
            'Mejillones': ['Bivalvo', 'Oscura', 'Marino'],
            'Almejas': ['Bivalvo', 'Clara', 'Delicado'],
            'Ostras': ['Marino', 'Crudo', 'Intenso'],
            'Caviar': ['Huevas', 'Caro', 'Único'],

            // Lácteos y huevos
            'Queso': ['Cuajada', 'Amarillo', 'Variedades'],
            'Leche': ['Líquida', 'Vaca', 'Cereales'],
            'Yogur': ['Fermentada', 'Ácido', 'Frutas'],
            'Mantequilla': ['Láctea', 'Untar', 'Cremosa'],
            'Nata': ['Grasa', 'Montar', 'Espesa'],
            'Huevos': ['Gallina', 'Frágil', 'Cocidos'],
            'Mozzarella': ['Italiana', 'Elástica', 'Pizza'],
            'Parmesano': ['Duro', 'Rallado', 'Italiano'],
            'Cheddar': ['Inglés', 'Amarillo', 'Intenso'],
            'Brie': ['Francés', 'Cremoso', 'Corteza'],
            'Camembert': ['Francés', 'Suave', 'Redondo'],
            'Roquefort': ['Azul', 'Francés', 'Fuerte'],
            'Feta': ['Griego', 'Salado', 'Desmenuzable'],
            'Ricotta': ['Italiana', 'Fresca', 'Granulosa'],
            'Mascarpone': ['Italiano', 'Cremoso', 'Tiramisú'],

            // Frutas
            'Manzana': ['Roja', 'Cruje', 'Día'],
            'Naranja': ['Cítrica', 'Exprime', 'Vitamina'],
            'Plátano': ['Amarillo', 'Pela', 'Potasio'],
            'Fresa': ['Roja', 'Dulce', 'Nata'],
            'Uva': ['Racimos', 'Vino', 'Morada'],
            'Piña': ['Corona', 'Tropical', 'Amarilla'],
            'Mango': ['Tropical', 'Hueso', 'Dulce'],
            'Papaya': ['Tropical', 'Naranja', 'Semillas'],
            'Kiwi': ['Verde', 'Peludo', 'Ácido'],
            'Pera': ['Gota', 'Jugosa', 'Amarilla'],
            'Melocotón': ['Peludo', 'Hueso', 'Jugoso'],
            'Albaricoque': ['Pequeño', 'Naranja', 'Hueso'],
            'Ciruela': ['Morada', 'Dulce', 'Hueso'],
            'Cereza': ['Pequeña', 'Rabito', 'Verano'],
            'Frambuesa': ['Roja', 'Pequeña', 'Dulce'],
            'Arándano': ['Azul', 'Pequeño', 'Antioxidante'],
            'Mora': ['Negra', 'Silvestre', 'Dulce'],
            'Grosella': ['Ácida', 'Pequeña', 'Roja'],
            'Sandía': ['Grande', 'Roja', 'Pepitas'],
            'Melón': ['Naranja', 'Refrescante', 'Rugosa'],
            'Coco': ['Tropical', 'Duro', 'Leche'],
            'Aguacate': ['Cremoso', 'Hueso', 'Guacamole'],
            'Limón': ['Ácido', 'Aliñar', 'Pequeño'],
            'Lima': ['Verde', 'Ácida', 'Pequeña'],
            'Pomelo': ['Grande', 'Amargo', 'Cítrico'],
            'Mandarina': ['Pequeña', 'Dulce', 'Gajos'],
            'Higo': ['Dulce', 'Morado', 'Mediterráneo'],
            'Dátil': ['Seco', 'Dulce', 'Árabe'],
            'Pasas': ['Secas', 'Arrugadas', 'Dulces'],
            'Granada': ['Roja', 'Semillas', 'Antioxidante'],
            'Caqui': ['Naranja', 'Dulce', 'Otoño'],
            'Lichi': ['Exótico', 'Dulce', 'Asiático'],
            'Maracuyá': ['Tropical', 'Ácido', 'Aromático'],

            // Verduras
            'Tomate': ['Jugoso', 'Ensalada', 'Pepitas'],
            'Lechuga': ['Hojas', 'Ensalada', 'Fresca'],
            'Zanahoria': ['Alargada', 'Vista', 'Cocida'],
            'Cebolla': ['Llorar', 'Capas', 'Sofrito'],
            'Ajo': ['Aromático', 'Dientes', 'Aliñar'],
            'Patata': ['Tubérculo', 'Fríe', 'Platos'],
            'Pimiento': ['Verde', 'Picante', 'Asar'],
            'Pepino': ['Alargado', 'Refrescante', 'Ensalada'],
            'Apio': ['Crujiente', 'Verde', 'Fibra'],
            'Espinacas': ['Verdes', 'Hierro', 'Popeye'],
            'Brócoli': ['Arbolito', 'Nutritivo', 'Vapor'],
            'Coliflor': ['Racimo', 'Pariente', 'Reboza'],
            'Repollo': ['Redondo', 'Hojas', 'Col'],
            'Col': ['Verde', 'Hojas', 'Cruda'],
            'Acelgas': ['Verdes', 'Tallos', 'Cocidas'],
            'Rúcula': ['Picante', 'Ensalada', 'Amarga'],
            'Berenjenas': ['Moradas', 'Esponjosas', 'Mediterráneas'],
            'Calabacín': ['Verde', 'Alargado', 'Suave'],
            'Calabaza': ['Naranja', 'Grande', 'Halloween'],
            'Remolacha': ['Roja', 'Dulce', 'Mancha'],
            'Rábano': ['Picante', 'Pequeño', 'Rojo'],
            'Nabo': ['Blanco', 'Raíz', 'Redondo'],
            'Puerro': ['Alargado', 'Blanco', 'Suave'],
            'Espárragos': ['Verdes', 'Puntiagudos', 'Primavera'],
            'Alcachofas': ['Verdes', 'Hojas', 'Corazón'],
            'Judías': ['Verdes', 'Vainas', 'Legumbres'],
            'Guisantes': ['Verdes', 'Redondos', 'Dulces'],
            'Habas': ['Grandes', 'Verdes', 'Primavera'],
            'Lentejas': ['Pequeñas', 'Secas', 'Proteína'],
            'Garbanzos': ['Redondos', 'Beige', 'Hummus'],

            // Cereales y granos
            'Arroz': ['Grano', 'Blanco', 'Asiático'],
            'Pan': ['Horneado', 'Miga', 'Corteza'],
            'Quinoa': ['Andino', 'Proteína', 'Pequeño'],
            'Avena': ['Desayuno', 'Fibra', 'Copos'],
            'Cebada': ['Cerveza', 'Grano', 'Sopa'],
            'Trigo': ['Harina', 'Dorado', 'Pan'],
            'Centeno': ['Oscuro', 'Pan', 'Nórdico'],
            'Maíz': ['Amarillo', 'Mazorca', 'Palomitas'],
            'Couscous': ['Árabe', 'Sémola', 'Pequeño'],
            'Bulgur': ['Turco', 'Trigo', 'Tabule'],
            'Mijo': ['Pequeño', 'África', 'Redondo'],
            'Amaranto': ['Andino', 'Pequeño', 'Nutritivo'],
            'Teff': ['Etíope', 'Diminuto', 'Injera'],
            'Espelta': ['Antiguo', 'Trigo', 'Nutritivo'],

            // Postres y dulces
            'Helado': ['Frío', 'Derrite', 'Sabores'],
            'Chocolate': ['Dulce', 'Cacao', 'Derrite'],
            'Donut': ['Agujero', 'Glaseado', 'Desayuno'],
            'Brownie': ['Cuadrado', 'Húmedo', 'Americano'],
            'Cookies': ['Redondas', 'Pepitas', 'Crujientes'],
            'Tiramisú': ['Italiano', 'Café', 'Capas'],
            'Cheesecake': ['Queso', 'Galleta', 'Densa'],
            'Macarons': ['Francés', 'Colorido', 'Delicado'],
            'Churros': ['Alargados', 'Azúcar', 'Chocolate'],
            'Flan': ['Gelatinoso', 'Caramelo', 'Clásico'],
            'Gelatina': ['Temblorosa', 'Colores', 'Fresca'],
            'Pudín': ['Cremoso', 'Dulce', 'Suave'],
            'Mousse': ['Espumoso', 'Ligero', 'Aéreo'],
            'Soufflé': ['Inflado', 'Delicado', 'Francés'],
            'Crème Brûlée': ['Quemada', 'Cremosa', 'Francesa'],
            'Profiteroles': ['Rellenos', 'Crema', 'Pequeños'],
            'Éclair': ['Alargado', 'Crema', 'Glaseado'],
            'Tarta': ['Redonda', 'Dulce', 'Celebración'],
            'Pastel': ['Capas', 'Cumpleaños', 'Decorado'],
            'Cupcake': ['Individual', 'Pequeño', 'Decorado'],
            'Muffin': ['Esponjoso', 'Desayuno', 'Molde'],
            'Scone': ['Británico', 'Té', 'Crujiente'],
            'Galletas': ['Crujientes', 'Dulces', 'Variadas'],
            'Bizcocho': ['Esponjoso', 'Base', 'Suave'],
            'Merengue': ['Claras', 'Azúcar', 'Blanco'],
            'Nougat': ['Almendras', 'Dulce', 'Francés'],
            'Turrón': ['Navideño', 'Almendras', 'Español'],
            'Mazapán': ['Almendras', 'Dulce', 'Moldeable'],
            'Caramelo': ['Azúcar', 'Dorado', 'Pegajoso'],
            'Toffee': ['Mantequilla', 'Dulce', 'Inglés'],
            'Praline': ['Almendras', 'Azúcar', 'Francés'],

            // Panadería y desayuno
            'Croissant': ['Francés', 'Hojaldrado', 'Mantequilla'],
            'Bagel': ['Redondo', 'Agujero', 'Judío'],
            'Pancakes': ['Americanos', 'Redondos', 'Jarabe'],
            'Waffles': ['Cuadrados', 'Hoyos', 'Belgas'],
            'Crepes': ['Finos', 'Franceses', 'Rellenos'],
            'Tostadas': ['Pan', 'Doradas', 'Crujientes'],
            'Cereales': ['Desayuno', 'Leche', 'Crujientes'],
            'Granola': ['Avena', 'Frutos', 'Crujiente'],
            'Porridge': ['Caliente', 'Cremoso', 'Avena'],
            'Muesli': ['Suizo', 'Avena', 'Frutos'],
            'Brioche': ['Francés', 'Mantequilla', 'Dulce'],
            'Pain au Chocolat': ['Francés', 'Chocolate', 'Hojaldrado'],
            'Danish': ['Danés', 'Dulce', 'Hojaldrado'],
            'Strudel': ['Austriaco', 'Manzana', 'Fino'],

            // Bebidas
            'Café': ['Amargo', 'Cafeína', 'Despertar'],
            'Té': ['Infusión', 'Bolsita', 'Sabores'],
            'Smoothie': ['Batido', 'Cremoso', 'Fresco'],
            'Milkshake': ['Batido', 'Leche', 'Espeso'],
            'Limonada': ['Limón', 'Ácida', 'Hielo'],
            'Sangría': ['Frutas', 'Española', 'Verano'],
            'Mojito': ['Menta', 'Ron', 'Cubano'],
            'Margarita': ['Tequila', 'Lima', 'Sal'],
            'Piña Colada': ['Tropical', 'Coco', 'Piña'],
            'Cappuccino': ['Café', 'Espuma', 'Italiano'],
            'Latte': ['Café', 'Leche', 'Suave'],
            'Espresso': ['Concentrado', 'Italiano', 'Pequeño'],
            'Americano': ['Café', 'Agua', 'Largo'],
            'Macchiato': ['Café', 'Manchado', 'Leche'],
            'Frappé': ['Frío', 'Espuma', 'Griego'],
            'Chai': ['Especias', 'Indio', 'Dulce'],
            'Matcha': ['Verde', 'Japonés', 'Polvo'],
            'Kombucha': ['Fermentado', 'Probiótico', 'Ácido'],
            'Kéfir': ['Fermentado', 'Lácteo', 'Probiótico'],
            'Horchata': ['Arroz', 'Canela', 'Dulce'],
            'Agua de Jamaica': ['Hibisco', 'Roja', 'Refrescante'],
            'Tamarindo': ['Agridulce', 'Tropical', 'Marrón']
        },

        deportes: {
            // Deportes de pelota
            'Fútbol': ['Mundial', 'Once', 'Manos'],
            'Baloncesto': ['Altura', 'Cinco', 'Americano'],
            'Tenis': ['Individual', 'Superficie', 'Torneos'],
            'Voleibol': ['Equipo', 'Red', 'Rotación'],
            'Béisbol': ['Innings', 'Americano', 'Temporada'],
            'Golf': ['Precisión', 'Hoyo', 'Handicap'],
            'Hockey': ['Invernal', 'Contacto', 'Cambios'],
            'Rugby': ['Contacto', 'Oval', 'Británico'],
            'Ping Pong': ['Mesa', 'Rápido', 'Asiático'],
            'Bádminton': ['Interior', 'Ligero', 'Rápido'],
            'Squash': ['Cerrado', 'Pared', 'Rápido'],
            'Racquetball': ['Cerrado', 'Raqueta', 'Americano'],
            'Críquet': ['Británico', 'Wicket', 'Largo'],
            'Softball': ['Femenino', 'Grande', 'Lento'],
            'Lacrosse': ['Nativo', 'Red', 'Contacto'],
            'Polo': ['Caballo', 'Mallete', 'Aristocrático'],
            'Waterpolo': ['Acuático', 'Contacto', 'Resistencia'],
            'Fútbol Americano': ['Americano', 'Oval', 'Protección'],
            'Fútbol Australiano': ['Australiano', 'Oval', 'Contacto'],
            'Handball': ['Mano', 'Portería', 'Europeo'],
            'Netball': ['Femenino', 'Canasta', 'Británico'],
            'Dodgeball': ['Esquivar', 'Eliminar', 'Escolar'],
            'Kickball': ['Patear', 'Bases', 'Recreativo'],

            // Deportes acuáticos
            'Natación': ['Acuático', 'Estilos', 'Cardio'],
            'Surf': ['Olas', 'Equilibrio', 'Hawaiano'],
            'Buceo': ['Subacuático', 'Respiración', 'Silencioso'],
            'Snorkel': ['Superficie', 'Tubo', 'Recreativo'],
            'Windsurf': ['Viento', 'Vela', 'Equilibrio'],
            'Kitesurf': ['Cometa', 'Viento', 'Extremo'],
            'Wakeboard': ['Lancha', 'Tabla', 'Acrobático'],
            'Esquí Acuático': ['Lancha', 'Esquís', 'Velocidad'],
            'Remo': ['Río', 'Equipo', 'Sincronizado'],
            'Kayak': ['Individual', 'Pala', 'Maniobrable'],
            'Canoa': ['Tradicional', 'Pala', 'Estable'],
            'Rafting': ['Rápidos', 'Equipo', 'Aventura'],
            'Vela': ['Náutico', 'Viento', 'Táctica'],
            'Regata': ['Competición', 'Vela', 'Náutico'],
            'Triatlón': ['Tres', 'Resistencia', 'Combinado'],
            'Aqua Aeróbicos': ['Acuático', 'Fitness', 'Bajo'],

            // Deportes de combate
            'Boxeo': ['Contacto', 'Puños', 'Rounds'],
            'Karate': ['Marcial', 'Oriental', 'Filosofía'],
            'Judo': ['Defensa', 'Proyección', 'Japonés'],
            'Taekwondo': ['Marcial', 'Piernas', 'Olímpico'],
            'Esgrima': ['Duelo', 'Espada', 'Europea'],
            'Lucha': ['Contacto', 'Proyección', 'Antiguo'],
            'MMA': ['Mixto', 'Jaula', 'Moderno'],
            'Kickboxing': ['Patadas', 'Puños', 'Fitness'],
            'Muay Thai': ['Tailandés', 'Codos', 'Tradicional'],
            'Jiu-Jitsu': ['Brasileño', 'Suelo', 'Sumisión'],
            'Aikido': ['Japonés', 'Defensa', 'Armonía'],
            'Kung Fu': ['Chino', 'Formas', 'Tradicional'],
            'Capoeira': ['Brasileño', 'Danza', 'Acrobático'],
            'Krav Maga': ['Israelí', 'Defensa', 'Militar'],
            'Sumo': ['Japonés', 'Círculo', 'Peso'],
            'Wrestling': ['Americano', 'Proyección', 'Colegial'],

            // Atletismo
            'Atletismo': ['Base', 'Disciplinas', 'Olímpico'],
            'Carrera': ['Básico', 'Velocidad', 'Distancia'],
            'Maratón': ['Histórica', 'Resistencia', 'Griego'],
            'Velocidad': ['Rápido', 'Corto', 'Explosivo'],
            'Salto Alto': ['Vertical', 'Listón', 'Técnica'],
            'Salto Largo': ['Horizontal', 'Arena', 'Impulso'],
            'Salto con Pértiga': ['Pértiga', 'Alto', 'Técnico'],
            'Lanzamiento': ['Fuerza', 'Distancia', 'Técnica'],
            'Jabalina': ['Lanza', 'Distancia', 'Precisión'],
            'Disco': ['Circular', 'Rotación', 'Griego'],
            'Martillo': ['Cadena', 'Rotación', 'Fuerza'],
            'Peso': ['Esfera', 'Fuerza', 'Explosivo'],
            'Vallas': ['Obstáculos', 'Ritmo', 'Técnica'],
            'Relevos': ['Equipo', 'Testigo', 'Velocidad'],
            'Marcha': ['Caminar', 'Técnica', 'Resistencia'],
            'Decatlón': ['Diez', 'Combinado', 'Completo'],
            'Heptatlón': ['Siete', 'Femenino', 'Combinado'],
            'Pentatlón': ['Cinco', 'Moderno', 'Militar'],
            'Campo a Través': ['Natural', 'Resistencia', 'Terreno'],
            'Carrera de Montaña': ['Montaña', 'Desnivel', 'Natural'],
            'Ultramaratón': ['Extremo', 'Distancia', 'Resistencia'],

            // Deportes de invierno
            'Esquí': ['Nieve', 'Deslizar', 'Montaña'],
            'Snowboard': ['Tabla', 'Nieve', 'Moderno'],
            'Patinaje': ['Hielo', 'Cuchillas', 'Artístico'],
            'Hockey sobre Hielo': ['Hielo', 'Disco', 'Contacto'],
            'Curling': ['Piedra', 'Hielo', 'Estrategia'],
            'Bobsled': ['Trineo', 'Velocidad', 'Equipo'],
            'Luge': ['Individual', 'Trineo', 'Velocidad'],
            'Skeleton': ['Cabeza', 'Trineo', 'Individual'],
            'Biatlón': ['Esquí', 'Tiro', 'Combinado'],
            'Esquí de Fondo': ['Resistencia', 'Plano', 'Técnica'],
            'Salto de Esquí': ['Rampa', 'Vuelo', 'Distancia'],
            'Freestyle': ['Acrobático', 'Estilo', 'Creativo'],
            'Slalom': ['Puertas', 'Zigzag', 'Técnico'],

            // Deportes extremos
            'Escalada': ['Vertical', 'Roca', 'Fuerza'],
            'Paracaidismo': ['Caída', 'Paracaídas', 'Extremo'],
            'Bungee': ['Elástico', 'Caída', 'Adrenalina'],
            'Base Jumping': ['Extremo', 'Paracaídas', 'Altura'],
            'Parkour': ['Urbano', 'Obstáculos', 'Fluidez'],
            'Skateboard': ['Tabla', 'Ruedas', 'Urbano'],
            'BMX': ['Bicicleta', 'Acrobático', 'Rampa'],
            'Motocross': ['Moto', 'Tierra', 'Saltos'],
            'Snowboarding': ['Tabla', 'Nieve', 'Acrobático'],
            'Wingsuit': ['Traje', 'Vuelo', 'Extremo'],
            'Rappel': ['Descenso', 'Cuerda', 'Vertical'],
            'Alpinismo': ['Montaña', 'Escalada', 'Altitud'],
            'Espeleología': ['Cuevas', 'Exploración', 'Subterráneo'],

            // Deportes de motor
            'Automovilismo': ['Coches', 'Velocidad', 'Circuito'],
            'Karting': ['Pequeño', 'Pista', 'Iniciación'],
            'Motociclismo': ['Moto', 'Velocidad', 'Inclinación'],
            'Rally': ['Etapas', 'Navegación', 'Terreno'],
            'Fórmula 1': ['Élite', 'Monoplaza', 'Mundial'],
            'NASCAR': ['Americano', 'Óvalo', 'Stock'],
            'Drag Racing': ['Línea', 'Aceleración', 'Cuarto'],
            'Enduro': ['Resistencia', 'Moto', 'Terreno'],
            'Trial': ['Obstáculos', 'Equilibrio', 'Técnica'],
            'Speedway': ['Óvalo', 'Tierra', 'Deslizar'],
            'Supercross': ['Estadio', 'Saltos', 'Técnico'],

            // Deportes de fuerza y fitness
            'Halterofilia': ['Pesas', 'Fuerza', 'Olímpico'],
            'Powerlifting': ['Fuerza', 'Máximo', 'Tres'],
            'Crossfit': ['Funcional', 'Variado', 'Intenso'],
            'Bodybuilding': ['Músculo', 'Estética', 'Posado'],
            'Strongman': ['Fuerza', 'Objetos', 'Extremo'],
            'Calistenia': ['Peso', 'Corporal', 'Funcional'],
            'Pilates': ['Core', 'Flexibilidad', 'Control'],
            'Yoga': ['Mental', 'Flexibilidad', 'Hindú'],
            'Aeróbicos': ['Cardio', 'Música', 'Grupo'],
            'Zumba': ['Baile', 'Fitness', 'Latino'],
            'Spinning': ['Bicicleta', 'Estática', 'Intenso'],
            'Step': ['Escalón', 'Cardio', 'Coreografía'],
            'Aqua Fitness': ['Agua', 'Resistencia', 'Articulaciones'],

            // Otros deportes
            'Gimnasia': ['Artístico', 'Aparatos', 'Flexibilidad'],
            'Gimnasia Rítmica': ['Rítmica', 'Aparatos', 'Música'],
            'Trampolín': ['Saltos', 'Acrobático', 'Elástico'],
            'Arquería': ['Arco', 'Precisión', 'Concentración'],
            'Tiro': ['Precisión', 'Arma', 'Concentración'],
            'Dardos': ['Precisión', 'Diana', 'Pub'],
            'Billar': ['Mesa', 'Bolas', 'Taco'],
            'Snooker': ['Británico', 'Colores', 'Puntos'],
            'Pool': ['Americano', 'Troneras', 'Ocho'],
            'Bolos': ['Pinos', 'Bola', 'Strike'],
            'Petanca': ['Bolas', 'Cochonnet', 'Francés'],
            'Croquet': ['Mallete', 'Aros', 'Césped'],
            'Frisbee': ['Disco', 'Vuelo', 'Recreativo'],
            'Ultimate Frisbee': ['Disco', 'Equipo', 'Zonas'],
            'Ciclismo': ['Bicicleta', 'Resistencia', 'Etapas'],
            'Mountain Bike': ['Montaña', 'Terreno', 'Suspensión'],
            'BMX': ['Acrobático', 'Rampa', 'Pequeña'],
            'Ciclocross': ['Obstáculos', 'Terreno', 'Mixto'],
            'Pista': ['Velódromo', 'Velocidad', 'Cerrado'],
            'Ruta': ['Carretera', 'Distancia', 'Pelotón'],
            'Triatlón': ['Tres', 'Natación', 'Resistencia'],
            'Equitación': ['Caballo', 'Jinete', 'Elegancia'],
            'Polo': ['Caballo', 'Mallete', 'Equipo'],
            'Rodeo': ['Toro', 'Cowboy', 'Americano'],
            'Salto': ['Caballo', 'Obstáculos', 'Altura'],
            'Doma': ['Caballo', 'Elegancia', 'Movimientos'],
            'Cross Country Ecuestre': ['Campo', 'Obstáculos', 'Resistencia']
        },

        peliculas: {
            // Clásicos
            'Titanic': ['Barco', 'Romance', 'Desastre'],
            'Casablanca': ['Guerra', 'Romance', 'Aeropuerto'],
            'Lo que el Viento se Llevó': ['Guerra', 'Plantación', 'Romance'],
            'Ciudadano Kane': ['Magnate', 'Misterio', 'Innovación'],
            'Vértigo': ['Miedo', 'Obsesión', 'Suspense'],
            'Psicosis': ['Motel', 'Ducha', 'Suspense'],
            'El Padrino': ['Familia', 'Lealtad', 'Imperio'],
            'Apocalipsis Now': ['Guerra', 'Locura', 'Río'],
            'Taxi Driver': ['Conductor', 'Ciudad', 'Soledad'],
            'Uno de los Nuestros': ['Crimen', 'Amistad', 'Vida'],

            // Ciencia Ficción
            'La Guerra de las Galaxias': ['Galaxia', 'Rebelión', 'Fuerza'],
            'Star Trek': ['Exploración', 'Federación', 'Misión'],
            'Blade Runner': ['Futuro', 'Androides', 'Identidad'],
            'Matrix': ['Realidad', 'Despertar', 'Lucha'],
            'Terminator': ['Viajero', 'Máquina', 'Futuro'],
            'Alien': ['Espacio', 'Criatura', 'Supervivencia'],
            'E.T.': ['Visitante', 'Amistad', 'Regreso'],
            'Regreso al Futuro': ['Viaje', 'Máquina', 'Paradoja'],
            '2001 Odisea del Espacio': ['Evolución', 'Inteligencia', 'Viaje'],
            'Interstellar': ['Agujeros', 'Supervivencia', 'Amor'],
            'Origen': ['Sueños', 'Realidad', 'Mente'],
            'Avatar': ['Mundo', 'Naturaleza', 'Invasión'],
            'Dune': ['Planeta', 'Especia', 'Profecía'],
            'Mad Max': ['Mundo', 'Gasolina', 'Supervivencia'],
            'Minority Report': ['Crímenes', 'Precognición', 'Libre'],
            'Desafío Total': ['Memoria', 'Realidad', 'Identidad'],
            'El Quinto Elemento': ['Futuro', 'Elementos', 'Amor'],

            // Superhéroes
            'Marvel': ['Universo', 'Héroes', 'Aventuras'],
            'DC': ['Héroes', 'Justicia', 'Poderes'],
            'Batman': ['Murciélago', 'Ciudad', 'Justicia'],
            'Superman': ['Hombre', 'Planeta', 'Esperanza'],
            'Spider-Man': ['Arácnido', 'Responsabilidad', 'Ciudad'],
            'Iron Man': ['Armadura', 'Genio', 'Reactor'],
            'Capitán América': ['Soldado', 'Escudo', 'Valores'],
            'Thor': ['Dios', 'Martillo', 'Reino'],
            'Hulk': ['Gigante', 'Ira', 'Fuerza'],
            'X-Men': ['Mutantes', 'Escuela', 'Evolución'],
            'Los Vengadores': ['Equipo', 'Amenaza', 'Unidos'],
            'Liga de la Justicia': ['Héroes', 'Tierra', 'Justicia'],
            'Wonder Woman': ['Guerrera', 'Lazo', 'Fuerza'],
            'Aquaman': ['Rey', 'Tridente', 'Mundo'],
            'Pantera Negra': ['Reino', 'Tecnología', 'Tradición'],
            'Doctor Extraño': ['Místico', 'Dimensiones', 'Magia'],
            'Guardianes de la Galaxia': ['Espacio', 'Equipo', 'Música'],
            'Deadpool': ['Irreverente', 'Regeneración', 'Cuarta'],

            // Animación Disney/Pixar
            'Frozen': ['Hielo', 'Hermanas', 'Canción'],
            'Toy Story': ['Juguetes', 'Buzz', 'Woody'],
            'Cars': ['Coches', 'Rayo', 'Carreras'],
            'Monstruos S.A.': ['Monstruos', 'Sustos', 'Niña'],
            'Buscando a Nemo': ['Pez', 'Océano', 'Padre'],
            'Up': ['Globos', 'Casa', 'Aventura'],
            'Wall-E': ['Robot', 'Basura', 'Amor'],
            'Del Revés': ['Emociones', 'Mente', 'Niña'],
            'Coco': ['Muertos', 'Música', 'Familia'],
            'Vaiana': ['Océano', 'Isla', 'Corazón'],
            'Encanto': ['Magia', 'Familia', 'Colombia'],
            'Raya y el Último Dragón': ['Dragón', 'Confianza', 'Asiático'],
            'Luca': ['Sirena', 'Amistad', 'Italia'],
            'Red': ['Panda', 'Adolescente', 'Transformación'],
            'El Rey León': ['Simba', 'Sabana', 'Rey'],
            'La Sirenita': ['Mar', 'Sirena', 'Voz'],
            'La Bella y la Bestia': ['Rosa', 'Castillo', 'Amor'],
            'Aladdin': ['Genio', 'Lámpara', 'Alfombra'],
            'Mulan': ['Guerrera', 'China', 'Honor'],
            'Pocahontas': ['Naturaleza', 'Indígena', 'Viento'],
            'Cenicienta': ['Zapato', 'Medianoche', 'Baile'],
            'Blancanieves': ['Manzana', 'Enanitos', 'Espejo'],
            'Bambi': ['Ciervo', 'Bosque', 'Madre'],
            'Dumbo': ['Elefante', 'Orejas', 'Volar'],
            'Pinocho': ['Marioneta', 'Nariz', 'Real'],
            'Peter Pan': ['Volar', 'Nunca', 'Hada'],

            // Animación otros estudios
            'Shrek': ['Ogro', 'Pantano', 'Princesa'],
            'Madagascar': ['Zoo', 'África', 'Animales'],
            'La Era de Hielo': ['Mamut', 'Hielo', 'Amistad'],
            'Gru Mi Villano Favorito': ['Villano', 'Niñas', 'Luna'],
            'Los Minions': ['Amarillo', 'Gru', 'Banana'],
            'Cómo Entrenar a tu Dragón': ['Dragón', 'Vikingo', 'Amistad'],
            'Kung Fu Panda': ['Panda', 'Kung Fu', 'Elegido'],
            'Rio': ['Loro', 'Brasil', 'Volar'],
            'Los Increíbles': ['Familia', 'Superpoderes', 'Secreto'],
            'Ratatouille': ['Rata', 'Cocina', 'París'],
            'Brave': ['Escocesa', 'Arco', 'Madre'],

            // Terror
            'Halloween': ['Máscara', 'Cuchillo', 'Noche'],
            'Viernes 13': ['Jason', 'Lago', 'Machete'],
            'Pesadilla en Elm Street': ['Sueños', 'Freddy', 'Garras'],
            'Scream': ['Máscara', 'Teléfono', 'Cuchillo'],
            'El Resplandor': ['Hotel', 'Laberinto', 'Hacha'],
            'El Exorcista': ['Posesión', 'Niña', 'Sacerdote'],
            'Poltergeist': ['Fantasmas', 'Televisión', 'Casa'],
            'Tiburón': ['Mar', 'Dientes', 'Playa'],
            'Eso': ['Payaso', 'Globo', 'Alcantarilla'],
            'La Llamada': ['Teléfono', 'Siete', 'Pozo'],
            'Saw': ['Trampa', 'Juego', 'Elección'],
            'Actividad Paranormal': ['Cámara', 'Casa', 'Demonio'],

            // Acción
            'La Jungla de Cristal': ['Rascacielos', 'Navidad', 'Terroristas'],
            'Rambo': ['Veterano', 'Selva', 'Supervivencia'],
            'Rocky': ['Boxeo', 'Filadelfia', 'Escaleras'],
            'Fast & Furious': ['Coches', 'Velocidad', 'Familia'],
            'Misión Imposible': ['Espía', 'Imposible', 'Acrobacias'],
            'James Bond': ['Espía', 'Martini', 'Gadgets'],
            'John Wick': ['Asesino', 'Perro', 'Venganza'],
            'El Caso Bourne': ['Amnesia', 'Espía', 'Identidad'],
            'Speed': ['Autobús', 'Bomba', 'Velocidad'],
            'Top Gun': ['Piloto', 'Aviones', 'Maverick'],
            'Arma Letal': ['Policía', 'Pareja', 'Peligroso'],

            // Comedia
            'Los Cazafantasmas': ['Fantasmas', 'Nueva York', 'Slimer'],
            'El Reportero': ['Noticias', 'Micrófono', 'San Diego'],
            'Dos Tontos Muy Tontos': ['Tontos', 'Viaje', 'Maleta'],
            'Resacón en Las Vegas': ['Vegas', 'Resaca', 'Boda'],
            'Superbad': ['Adolescentes', 'Fiesta', 'Alcohol'],
            'Pineapple Express': ['Marihuana', 'Persecución', 'Amistad'],
            'Hermanastros': ['Hermanos', 'Literas', 'Adultos'],
            'Zoolander': ['Modelo', 'Ridículo', 'Moda'],
            'Los Padres de Ella': ['Suegros', 'Mentiras', 'Enfermero'],
            'Austin Powers': ['Espía', 'Años 60', 'Groovy'],

            // Drama
            'Forrest Gump': ['Pluma', 'Chocolates', 'Correr'],
            'Cadena Perpetua': ['Prisión', 'Esperanza', 'Amistad'],
            'La Lista de Schindler': ['Guerra', 'Lista', 'Salvación'],
            'Alguien Voló Sobre el Nido del Cuco': ['Psiquiátrico', 'Rebelde', 'Enfermera'],
            'Rain Man': ['Autismo', 'Hermanos', 'Vegas'],
            'El Indomable Will Hunting': ['Genio', 'Conserje', 'Terapia'],
            'El Club de los Poetas Muertos': ['Profesor', 'Poesía', 'Carpe Diem'],
            'Una Mente Maravillosa': ['Matemático', 'Esquizofrenia', 'Nobel'],

            // Fantasía
            'Harry Potter': ['Magia', 'Hogwarts', 'Cicatriz'],
            'El Señor de los Anillos': ['Anillo', 'Hobbit', 'Tierra Media'],
            'El Hobbit': ['Dragón', 'Tesoro', 'Aventura'],
            'Las Crónicas de Narnia': ['Armario', 'León', 'Bruja'],
            'Piratas del Caribe': ['Piratas', 'Maldición', 'Jack'],
            'El Laberinto del Fauno': ['Guerra', 'Fantasía', 'Niña'],
            'La Forma del Agua': ['Criatura', 'Agua', 'Amor'],

            // Musicales
            'Sonrisas y Lágrimas': ['Música', 'Austria', 'Familia'],
            'Grease': ['Instituto', 'Musical', 'Años 50'],
            'Chicago': ['Jazz', 'Crimen', 'Baile'],
            'Moulin Rouge': ['Cabaret', 'París', 'Amor'],
            'La La Land': ['Jazz', 'Los Ángeles', 'Sueños'],
            'El Gran Showman': ['Circo', 'Espectáculo', 'Sueños'],
            'Mamma Mia': ['ABBA', 'Grecia', 'Boda'],
            'High School Musical': ['Instituto', 'Basketball', 'Teatro'],
            'Hairspray': ['Años 60', 'Baile', 'Televisión'],
            'Guardianes de la Galaxia': ['Equipo espacial', 'Música retro', 'Familia elegida'],
            'Deadpool': ['Antihéroe irreverente', 'Cuarta pared rota', 'Humor negro'],

            // Animación Disney/Pixar
            'Frozen': ['Reino helado', 'Hermanas separadas', 'Poder liberado'],
            'Toy Story': ['Juguetes secretos', 'Amistad leal', 'Infancia perdida'],
            'Cars': ['Coches parlantes', 'Carrera importante', 'Amistad inesperada'],
            'Monstruos S.A.': ['Fábrica sustos', 'Niña perdida', 'Miedo energía'],
            'Buscando a Nemo': ['Padre sobreprotector', 'Océano inmenso', 'Hijo perdido'],
            'Up': ['Casa voladora', 'Aventura tardía', 'Promesa cumplida'],
            'Wall-E': ['Robot solitario', 'Tierra abandonada', 'Amor puro'],
            'Del Revés': ['Emociones internas', 'Mente compleja', 'Crecimiento doloroso'],
            'Coco': ['Tradición familiar', 'Música prohibida', 'Memoria ancestral'],
            'Vaiana': ['Océano llamada', 'Isla pequeña', 'Destino heroico'],
            'Encanto': ['Familia mágica', 'Casa viviente', 'Don especial'],
            'Raya y el Último Dragón': ['Reino dividido', 'Confianza perdida', 'Unidad restaurada'],
            'Luca': ['Secreto marino', 'Amistad verano', 'Identidad oculta'],
            'Red': ['Adolescencia turbulenta', 'Transformación animal', 'Familia comprensiva'],
            'El Rey León': ['Sabana africana', 'Príncipe exiliado', 'Círculo vida'],
            'La Sirenita': ['Mundo submarino', 'Sueño superficie', 'Voz sacrificada'],
            'La Bella y la Bestia': ['Castillo encantado', 'Amor verdadero', 'Belleza interior'],
            'Aladdin': ['Lámpara mágica', 'Deseos tres', 'Amor prohibido'],
            'Mulan': ['Guerrera disfrazada', 'Honor familiar', 'Valor femenino'],
            'Pocahontas': ['Culturas encontradas', 'Naturaleza sagrada', 'Amor imposible'],
            'Cenicienta': ['Zapato cristal', 'Madrastra cruel', 'Baile mágico'],
            'Blancanieves': ['Espejo mágico', 'Manzana envenenada', 'Siete compañeros'],
            'Bambi': ['Bosque hogar', 'Madre perdida', 'Crecimiento natural'],
            'Dumbo': ['Orejas grandes', 'Circo cruel', 'Volar alto'],
            'Pinocho': ['Marioneta viviente', 'Nariz crece', 'Niño real'],
            'Peter Pan': ['Nunca crecer', 'Isla mágica', 'Volar libre'],

            // Animación otros estudios
            'Shrek': ['Ogro verde', 'Pantano hogar', 'Amor inesperado'],
            'Madagascar': ['Zoo escape', 'Isla salvaje', 'Amistad urbana'],
            'La Era de Hielo': ['Mundo helado', 'Especies unidas', 'Supervivencia juntos'],
            'Gru Mi Villano Favorito': ['Villano reformado', 'Niñas adoptadas', 'Corazón blando'],
            'Los Minions': ['Ayudantes amarillos', 'Caos divertido', 'Lealtad ciega'],
            'Cómo Entrenar a tu Dragón': ['Vikingo diferente', 'Dragón amigo', 'Prejuicios rotos'],
            'Kung Fu Panda': ['Oso guerrero', 'Destino inesperado', 'Maestro interior'],
            'Rio': ['Ave exótica', 'Último especie', 'Amor salvaje'],
            'Los Increíbles': ['Familia superhéroes', 'Identidad secreta', 'Unidos invencibles'],
            'Ratatouille': ['Rata cocinera', 'Sueño imposible', 'Talento oculto'],
            'Brave': ['Princesa rebelde', 'Tradición rota', 'Madre transformada'],

            // Terror
            'Halloween': ['Noche terror', 'Asesino máscara', 'Supervivencia adolescente'],
            'Viernes 13': ['Campamento maldito', 'Asesino lago', 'Venganza materna'],
            'Pesadilla en Elm Street': ['Sueños mortales', 'Asesino quemado', 'Realidad pesadilla'],
            'Scream': ['Asesino teléfono', 'Reglas terror', 'Meta horror'],
            'El Resplandor': ['Hotel aislado', 'Locura invernal', 'Familia amenazada'],
            'El Exorcista': ['Posesión demoníaca', 'Niña inocente', 'Fe probada'],
            'Poltergeist': ['Casa embrujada', 'Televisión portal', 'Familia aterrorizada'],
            'Tiburón': ['Depredador marino', 'Playa peligrosa', 'Caza mortal'],
            'Eso': ['Payaso malévolo', 'Niños perdidos', 'Miedo infantil'],
            'La Llamada': ['Video maldito', 'Siete días', 'Muerte anunciada'],
            'Saw': ['Juegos mortales', 'Decisiones imposibles', 'Supervivencia extrema'],
            'Actividad Paranormal': ['Casa normal', 'Cámaras vigilancia', 'Terror cotidiano'],

            // Acción
            'La Jungla de Cristal': ['Rascacielos sitiado', 'Policía descalzo', 'Navidad violenta'],
            'Rambo': ['Veterano guerra', 'Supervivencia extrema', 'Justicia personal'],
            'Rocky': ['Boxeador amateur', 'Oportunidad única', 'Corazón campeón'],
            'Fast & Furious': ['Carreras ilegales', 'Familia elegida', 'Velocidad extrema'],
            'Misión Imposible': ['Espía imposible', 'Misiones suicidas', 'Tecnología avanzada'],
            'James Bond': ['Agente secreto', 'Gadgets sofisticados', 'Villanos megalómanos'],
            'John Wick': ['Asesino retirado', 'Venganza personal', 'Mundo criminal'],
            'El Caso Bourne': ['Identidad perdida', 'Agente amnésico', 'Conspiración gobierno'],
            'Speed': ['Autobús bomba', 'Velocidad mínima', 'Rescate imposible'],
            'Top Gun': ['Pilotos élite', 'Competencia aérea', 'Peligro zona'],
            'Arma Letal': ['Pareja policías', 'Personalidades opuestas', 'Crimen organizado'],

            // Comedia
            'Los Cazafantasmas': ['Exterminadores paranormal', 'Nueva York invadida', 'Humor sobrenatural'],
            'El Reportero': ['Periodista egocéntrico', 'Día repetido', 'Amor verdadero'],
            'Dos Tontos Muy Tontos': ['Amigos ingenuos', 'Viaje absurdo', 'Humor inocente'],
            'Resacón en Las Vegas': ['Despedida soltero', 'Memoria perdida', 'Búsqueda desesperada'],
            'Superbad': ['Adolescentes torpes', 'Última fiesta', 'Amistad probada'],
            'Pineapple Express': ['Marihuana rara', 'Testigo accidental', 'Persecución cómica'],
            'Hermanastros': ['Familia mezclada', 'Rivalidad adulta', 'Madurez forzada'],
            'Zoolander': ['Modelo masculino', 'Conspiración moda', 'Vanidad extrema'],
            'Los Padres de Ella': ['Suegros investigadores', 'Yerno sospechoso', 'Familia protectora'],
            'Austin Powers': ['Espía retro', 'Villano calvo', 'Humor sexual'],

            // Drama
            'Forrest Gump': ['Hombre simple', 'Historia americana', 'Destino extraordinario'],
            'Cadena Perpetua': ['Prisión injusta', 'Amistad verdadera', 'Esperanza eterna'],
            'La Lista de Schindler': ['Holocausto nazi', 'Héroe improbable', 'Vidas salvadas'],
            'Alguien Voló Sobre el Nido del Cuco': ['Hospital mental', 'Rebelde paciente', 'Sistema opresivo'],
            'Rain Man': ['Hermanos separados', 'Autismo genio', 'Familia redescubierta'],
            'El Indomable Will Hunting': ['Genio rebelde', 'Terapia sanadora', 'Potencial desperdiciado'],
            'El Club de los Poetas Muertos': ['Profesor inspirador', 'Poesía liberadora', 'Tradición rota'],
            'Una Mente Maravillosa': ['Genio matemático', 'Enfermedad mental', 'Amor incondicional'],

            // Fantasía
            'Harry Potter': ['Mago huérfano', 'Escuela magia', 'Destino heroico'],
            'El Señor de los Anillos': ['Anillo poder', 'Misión imposible', 'Amistad leal'],
            'El Hobbit': ['Aventura inesperada', 'Tesoro dragón', 'Valor pequeño'],
            'Las Crónicas de Narnia': ['Mundo mágico', 'Niños héroes', 'León noble'],
            'Piratas del Caribe': ['Pirata excéntrico', 'Maldición antigua', 'Aventura marina'],
            'El Laberinto del Fauno': ['Guerra civil', 'Mundo fantástico', 'Inocencia perdida'],
            'La Forma del Agua': ['Criatura marina', 'Amor imposible', 'Guerra fría'],

            // Musicales
            'Sonrisas y Lágrimas': ['Familia musical', 'Institutriz alegre', 'Guerra escapar'],
            'Grease': ['Instituto musical', 'Romance verano', 'Transformación amor'],
            'Chicago': ['Jazz prohibición', 'Crimen pasión', 'Fama criminal'],
            'Moulin Rouge': ['Cabaret parisino', 'Amor bohemio', 'Música moderna'],
            'La La Land': ['Sueños Hollywood', 'Jazz moderno', 'Amor sacrificado'],
            'El Gran Showman': ['Circo creado', 'Espectáculo único', 'Sueños realizados'],
            'Mamma Mia': ['Isla griega', 'Música ABBA', 'Padre misterioso'],
            'High School Musical': ['Instituto cantante', 'Romance adolescente', 'Talento oculto'],
            'Hairspray': ['Baltimore sesentas', 'Baile televisión', 'Integración racial']
        },

        paises: {
            // Europa
            'España': ['Ibérica', 'Castellano', 'Europea'],
            'Francia': ['Hexágono', 'Romance', 'República'],
            'Italia': ['Mediterránea', 'Característica', 'Renacimiento'],
            'Alemania': ['Centro', 'Industrial', 'Reunificación'],
            'Reino Unido': ['Británicas', 'Parlamentaria', 'Imperio'],
            'Portugal': ['Atlántica', 'Navegantes', 'Lusitano'],
            'Holanda': ['Bajas', 'Canales', 'Tulipanes'],
            'Bélgica': ['Pequeño', 'Chocolates', 'Capital'],
            'Suiza': ['Montañas', 'Neutralidad', 'Relojes'],
            'Austria': ['Música', 'Alpes', 'Imperial'],
            'Suecia': ['Escandinavia', 'Bienestar', 'Inviernos'],
            'Noruega': ['Fiordos', 'Petróleo', 'Aurora'],
            'Dinamarca': ['Reino', 'Diseño', 'Bienestar'],
            'Finlandia': ['Lagos', 'Saunas', 'Tecnología'],
            'Islandia': ['Volcánica', 'Géiseres', 'Geotérmica'],
            'Irlanda': ['Verde', 'Celta', 'Folclórica'],
            'Grecia': ['Democracia', 'Mediterráneas', 'Filosofía'],
            'Turquía': ['Puente', 'Bizantina', 'Baños'],
            'Polonia': ['Llanura', 'Turbulenta', 'Solidaridad'],
            'República Checa': ['Bohemia', 'Cerveza', 'Gótica'],
            'Hungría': ['Danubiana', 'Único', 'Termales'],
            'Rumania': ['Cárpatos', 'Vampíricas', 'Romance'],
            'Bulgaria': ['Balcanes', 'Rosas', 'Cirílico'],
            'Croacia': ['Dálmata', 'Adriáticas', 'Reciente'],
            'Serbia': ['Balcanes', 'Yugoslava', 'Folclórica'],
            'Bosnia': ['Balcánicas', 'Étnica', 'Guerra'],
            'Montenegro': ['Negras', 'Adriática', 'Nueva'],
            'Albania': ['Bicéfala', 'Bunkers', 'Mediterránea'],
            'Macedonia': ['Alejandro', 'Disputa', 'Centrales'],
            'Eslovenia': ['Julianos', 'Cuevas', 'Pacífica'],
            'Eslovaquia': ['Tatras', 'Medievales', 'División'],
            'Estonia': ['Digital', 'Electrónico', 'Coral'],
            'Letonia': ['Central', 'Medieval', 'Bosques'],
            'Lituania': ['Sur', 'Pagana', 'Humana'],
            'Ucrania': ['Granero', 'Conflicto', 'Trigo'],
            'Bielorrusia': ['Dictador', 'Llanuras', 'Nuclear'],
            'Moldavia': ['Vinos', 'Gigantes', 'Romance'],
            'Rusia': ['Extenso', 'Siberia', 'Zarista'],
            'Georgia': ['Cáucaso', 'Ancestral', 'Único'],
            'Armenia': ['Montañas', 'Cristianismo', 'Genocidio'],

            // América
            'Estados Unidos': ['Cincuenta estados', 'Superpotencia mundial', 'Sueño americano'],
            'Canadá': ['Segundo más grande', 'Bilingüe oficial', 'Frío extremo'],
            'México': ['Aztecas mayas', 'Idioma español', 'Frontera sur'],
            'Guatemala': ['Mayas antiguos', 'Volcanes activos', 'Café calidad'],
            'Belice': ['Inglés oficial', 'Barrera coral', 'Pequeño centroamericano'],
            'Honduras': ['Copán ruinas', 'Bananas exporta', 'Golfo caribeño'],
            'El Salvador': ['Más pequeño', 'Volcanes numerosos', 'Café montaña'],
            'Nicaragua': ['Lagos grandes', 'Volcanes activos', 'Canal interoceánico'],
            'Costa Rica': ['Sin ejército', 'Biodiversidad rica', 'Ecoturismo verde'],
            'Panamá': ['Canal famoso', 'Puente continentes', 'Sombrero típico'],
            'Cuba': ['Isla caribeña', 'Revolución socialista', 'Tabaco habanos'],
            'Jamaica': ['Música reggae', 'Velocistas famosos', 'Café montaña'],
            'Haití': ['Independencia temprana', 'Idioma criollo', 'Pobreza extrema'],
            'República Dominicana': ['Isla compartida', 'Béisbol pasión', 'Turismo caribeño'],
            'Puerto Rico': ['Estado libre', 'Ciudadanía americana', 'Isla encanto'],
            'Trinidad y Tobago': ['Islas gemelas', 'Carnaval famoso', 'Petróleo marino'],
            'Barbados': ['Isla coral', 'Rum producción', 'Cricket pasión'],
            'Colombia': ['Café calidad', 'Esmeraldas verdes', 'Diversidad étnica'],
            'Venezuela': ['Petróleo abundante', 'Salto Ángel', 'Crisis actual'],
            'Guyana': ['Inglés oficial', 'Selva amazónica', 'Diversidad étnica'],
            'Surinam': ['Holandés oficial', 'Selva tropical', 'Diversidad cultural'],
            'Brasil': ['Gigante sudamericano', 'Idioma portugués', 'Carnaval famoso'],
            'Ecuador': ['Línea ecuatorial', 'Galápagos únicas', 'Biodiversidad alta'],
            'Perú': ['Imperio incaico', 'Machu Picchu', 'Gastronomía rica'],
            'Bolivia': ['Sin costa marina', 'Altiplano alto', 'Diversidad étnica'],
            'Paraguay': ['Sin costa marina', 'Guaraní oficial', 'Hidroeléctrica grande'],
            'Uruguay': ['Pequeño rioplatense', 'Democracia estable', 'Carne calidad'],
            'Argentina': ['Segundo más grande', 'Tango pasional', 'Carne famosa'],
            'Chile': ['Largo y estrecho', 'Desierto norte', 'Vino calidad'],

            // Asia
            'China': ['Más poblado', 'Muralla antigua', 'Dragón símbolo'],
            'Japón': ['Islas volcánicas', 'Tecnología avanzada', 'Tradición milenaria'],
            'Corea del Sur': ['Península dividida', 'Tecnología puntera', 'K-pop mundial'],
            'Corea del Norte': ['Régimen cerrado', 'Nuclear programa', 'Aislamiento total'],
            'Mongolia': ['Estepa infinita', 'Nómadas tradicionales', 'Entre gigantes'],
            'Taiwán': ['Isla rebelde', 'Tecnología avanzada', 'Democracia asiática'],
            'Hong Kong': ['Puerto fragante', 'Rascacielos densos', 'Autonomía especial'],
            'Macao': ['Casino oriental', 'Herencia portuguesa', 'Región especial'],
            'Filipinas': ['Siete mil islas', 'Tifones frecuentes', 'Inglés oficial'],
            'Indonesia': ['Archipiélago mayor', 'Volcanes activos', 'Diversidad étnica'],
            'Malasia': ['Torres gemelas', 'Selva tropical', 'Diversidad racial'],
            'Singapur': ['Ciudad estado', 'Puerto importante', 'Disciplina estricta'],
            'Brunei': ['Sultán rico', 'Petróleo abundante', 'Pequeño próspero'],
            'Tailandia': ['Nunca colonizada', 'Budismo predomina', 'Turismo masivo'],
            'Vietnam': ['Guerra famosa', 'Forma alargada', 'Arroz abundante'],
            'Laos': ['Sin costa marina', 'Mekong atraviesa', 'Budismo tranquilo'],
            'Camboya': ['Angkor templos', 'Khmer rouge', 'Mekong delta'],
            'Myanmar': ['Pagodas doradas', 'Junta militar', 'Diversidad étnica'],
            'India': ['Segundo poblado', 'Diversidad inmensa', 'Bollywood famoso'],
            'Pakistán': ['Creado religión', 'Nuclear potencia', 'Cricket pasión'],
            'Bangladesh': ['Delta densamente poblado', 'Inundaciones frecuentes', 'Textil exporta'],
            'Sri Lanka': ['Isla lágrima', 'Té calidad', 'Guerra civil'],
            'Nepal': ['Everest casa', 'Reino himalayo', 'Budismo hinduismo'],
            'Bután': ['Felicidad nacional', 'Reino dragón', 'Carbono negativo'],
            'Maldivas': ['Atolones coral', 'Nivel mar', 'Turismo lujo'],
            'Afganistán': ['Cementerio imperios', 'Montañas áridas', 'Conflicto perpetuo'],
            'Irán': ['Persia antigua', 'Petróleo abundante', 'Teocracia chiíta'],
            'Irak': ['Mesopotamia cuna', 'Petróleo rico', 'Guerra reciente'],
            'Siria': ['Cuna civilización', 'Guerra civil', 'Refugiados millones'],
            'Líbano': ['Cedros famosos', 'Diversidad religiosa', 'Crisis económica'],
            'Jordania': ['Reino hachemita', 'Petra rosa', 'Refugiados acoge'],
            'Israel': ['Tierra prometida', 'Tecnología avanzada', 'Conflicto palestino'],
            'Palestina': ['Territorio ocupado', 'Lucha independencia', 'Olivos milenarios'],
            'Arabia Saudí': ['Petróleo rey', 'Islam guardián', 'Desierto extenso'],
            'Yemen': ['Arabia feliz', 'Guerra civil', 'Crisis humanitaria'],
            'Omán': ['Sultán moderado', 'Incienso histórico', 'Estabilidad regional'],
            'Emiratos': ['Siete emiratos', 'Petróleo riqueza', 'Modernidad extrema'],
            'Qatar': ['Gas natural', 'Mundial fútbol', 'Riqueza per cápita'],
            'Bahréin': ['Isla reino', 'Perlas históricas', 'Fórmula uno'],
            'Kuwait': ['Petróleo pequeño', 'Invasión iraquí', 'Riqueza concentrada'],
            'Kazajstán': ['Más grande sin costa', 'Estepa infinita', 'Petróleo gas'],
            'Uzbekistán': ['Ruta seda', 'Algodón oro', 'Doble sin costa'],
            'Turkmenistán': ['Gas natural', 'Dictadura excéntrica', 'Desierto Karakum'],
            'Kirguistán': ['Montañas altas', 'Nómadas tradicionales', 'Revolución tulipán'],
            'Tayikistán': ['Montañas noventa', 'Guerra civil', 'Remesas dependiente'],

            // África
            'Egipto': ['Pirámides antiguas', 'Nilo sagrado', 'Faraones legendarios'],
            'Libia': ['Petróleo abundante', 'Desierto Sahara', 'Revolución reciente'],
            'Túnez': ['Primavera árabe', 'Cartago antigua', 'Mediterráneo norte'],
            'Argelia': ['Más grande africano', 'Gas natural', 'Guerra independencia'],
            'Marruecos': ['Reino alauí', 'Atlas montañas', 'Puerta África'],
            'Sudán': ['Nilo confluencia', 'División reciente', 'Crisis Darfur'],
            'Sudán del Sur': ['Independencia nueva', 'Petróleo disputado', 'Guerra civil'],
            'Etiopía': ['Nunca colonizada', 'Café origen', 'Cristianismo antiguo'],
            'Eritrea': ['Mar Rojo', 'Independencia tardía', 'Régimen autoritario'],
            'Yibuti': ['Puerto estratégico', 'Bases militares', 'Desierto pequeño'],
            'Somalia': ['Cuerno África', 'Estado fallido', 'Piratería marina'],
            'Kenia': ['Safari famoso', 'Corredores veloces', 'Té exporta'],
            'Uganda': ['Perla África', 'Gorilas montaña', 'Lagos numerosos'],
            'Tanzania': ['Kilimanjaro alto', 'Serengeti salvaje', 'Zanzíbar especias'],
            'Ruanda': ['Mil colinas', 'Genocidio superado', 'Gorilas protegidos'],
            'Burundi': ['Densamente poblado', 'Lagos grandes', 'Café calidad'],
            'República Democrática del Congo': ['Corazón África', 'Río Congo', 'Minerales ricos'],
            'República del Congo': ['Petróleo exporta', 'Selva densa', 'Río navegable'],
            'Camerún': ['África miniatura', 'Diversidad geográfica', 'Bilingüe oficial'],
            'República Centroafricana': ['Sin costa marina', 'Diamantes sangre', 'Inestabilidad crónica'],
            'Chad': ['Sin costa marina', 'Lago Chad', 'Petróleo reciente'],
            'Níger': ['Uranio exporta', 'Desierto Sahara', 'Río homónimo'],
            'Nigeria': ['Más poblado africano', 'Petróleo gigante', 'Nollywood cine'],
            'Benín': ['Vudú origen', 'Costa esclavos', 'Democracia estable'],
            'Togo': ['Estrecho alargado', 'Fosfatos exporta', 'Pequeño occidental'],
            'Ghana': ['Oro costa', 'Cacao exporta', 'Democracia sólida'],
            'Costa de Marfil': ['Cacao líder', 'Laguna Ébrié', 'Crisis postelectoral'],
            'Liberia': ['Esclavos liberados', 'Caucho plantaciones', 'Guerra civil'],
            'Sierra Leona': ['Diamantes sangre', 'Guerra brutal', 'Recuperación lenta'],
            'Guinea': ['Bauxita rica', 'Ríos nacen', 'Golpes militares'],
            'Guinea-Bissau': ['Pequeño occidental', 'Anacardos exporta', 'Inestabilidad política'],
            'Gambia': ['Río serpentea', 'Más pequeño continental', 'Turismo europeo'],
            'Senegal': ['Democracia estable', 'Cacahuetes exporta', 'Música rica'],
            'Mauritania': ['Desierto domina', 'Esclavitud tardía', 'Pesca atlántica'],
            'Mali': ['Imperio histórico', 'Oro sal', 'Crisis norte'],
            'Burkina Faso': ['Tierra honesta', 'Algodón exporta', 'Golpes recientes'],
            'Cabo Verde': ['Islas volcánicas', 'Música morna', 'Diáspora extensa'],
            'Sudáfrica': ['Arcoíris nación', 'Apartheid superado', 'Oro diamantes'],
            'Namibia': ['Desierto Namib', 'Independencia tardía', 'Diamantes uranio'],
            'Botswana': ['Diamantes ricos', 'Democracia estable', 'Desierto Kalahari'],
            'Zimbabue': ['Ruinas antiguas', 'Crisis económica', 'Tabaco exporta'],
            'Zambia': ['Cobre exporta', 'Sin costa marina', 'Cataratas Victoria'],
            'Malawi': ['Lago grande', 'Tabaco exporta', 'Densamente poblado'],
            'Mozambique': ['Costa larga', 'Guerra civil', 'Portugués oficial'],
            'Suazilandia': ['Reino pequeño', 'Rodeado gigantes', 'Tradición fuerte'],
            'Lesoto': ['Reino montaña', 'Rodeado completamente', 'Agua exporta'],
            'Madagascar': ['Isla grande', 'Especies únicas', 'Vainilla exporta'],
            'Mauricio': ['Isla paraíso', 'Turismo lujo', 'Diversidad étnica'],
            'Seychelles': ['Islas paraíso', 'Turismo exclusivo', 'Coco mar'],
            'Comoras': ['Islas perfume', 'Inestabilidad crónica', 'Ylang ylang'],

            // Oceanía
            'Australia': ['Continente isla', 'Animales únicos', 'Desierto centro'],
            'Nueva Zelanda': ['Dos islas', 'Ovejas abundantes', 'Maorí cultura'],
            'Papúa Nueva Guinea': ['Diversidad lingüística', 'Tribus numerosas', 'Oro cobre'],
            'Fiji': ['Islas paraíso', 'Agua cristalina', 'Rugby pasión'],
            'Samoa': ['Cultura polinesia', 'Tatuajes tradicionales', 'Rugby fuerte'],
            'Tonga': ['Reino pacífico', 'Nunca colonizada', 'Obesidad problema'],
            'Vanuatu': ['Volcanes activos', 'Diversidad lingüística', 'Salto bungee'],
            'Islas Salomón': ['Guerra mundial', 'Diversidad cultural', 'Pesca atún'],
            'Palau': ['Arrecifes prístinos', 'Buceo mundial', 'Medusas lago'],
            'Micronesia': ['Islas dispersas', 'Buceo famoso', 'Dependencia americana'],
            'Nauru': ['Más pequeño', 'Fosfatos agotados', 'Obesidad extrema'],
            'Kiribati': ['Línea ecuatorial', 'Atolones bajos', 'Cambio climático'],
            'Tuvalu': ['Desaparece lentamente', 'Dominio internet', 'Atolones pequeños'],
            'Islas Marshall': ['Pruebas nucleares', 'Atolones bajos', 'Dependencia americana']
        },

        profesiones: {
            // Salud
            'Médico': ['Salud', 'Diagnóstico', 'Estudio'],
            'Enfermero': ['Cuidado', 'Apoyo', 'Turnos'],
            'Dentista': ['Bucal', 'Sonrisa', 'Instrumental'],
            'Veterinario': ['Animal', 'Mascotas', 'Silencioso'],
            'Cirujano': ['Precisión', 'Especialización', 'Técnica'],
            'Pediatra': ['Especialización', 'Crecimiento', 'Desarrollo'],
            'Cardiólogo': ['Especialización', 'Circulación', 'Ritmo'],
            'Neurólogo': ['Especialización', 'Sistema', 'Complejo'],
            'Dermatólogo': ['Especialización', 'Superficie', 'Tratamiento'],
            'Ginecólogo': ['Femenina', 'Reproducción', 'Embarazo'],
            'Traumatólogo': ['Huesos', 'Lesiones', 'Rehabilitación'],
            'Anestesiólogo': ['Sueño', 'Dolor', 'Operaciones'],
            'Radiólogo': ['Imágenes', 'Rayos', 'Interior'],
            'Patólogo': ['Enfermedades', 'Laboratorio', 'Diagnóstico'],
            'Oncólogo': ['Cáncer', 'Tumores', 'Esperanza'],
            'Psiquiatra': ['Mente', 'Medicamentos', 'Trastornos'],
            'Psicólogo': ['Mente', 'Terapia', 'Emociones'],
            'Fisioterapeuta': ['Movimiento', 'Ejercicios', 'Rehabilitación'],
            'Farmacéutico': ['Medicamentos', 'Recetas', 'Química'],
            'Optometrista': ['Vista', 'Gafas', 'Ojos'],
            'Podólogo': ['Pies', 'Caminar', 'Extremidades'],
            'Nutricionista': ['Alimentación', 'Dietas', 'Peso'],
            'Dietista': ['Comida', 'Nutrición', 'Salud'],
            'Logopeda': ['Habla', 'Lenguaje', 'Comunicación'],
            'Terapeuta Ocupacional': ['Actividades', 'Independencia', 'Funcional'],
            'Quiropráctico': ['Columna', 'Dolor', 'Manipulación'],
            'Acupunturista': ['Agujas', 'Oriental', 'Puntos'],
            'Homeópata': ['Alternativa', 'Diluciones', 'Natural'],
            'Naturópata': ['Natural', 'Plantas', 'Holística'],

            // Educación
            'Profesor': ['Conocimiento transmite', 'Estudiantes enseña', 'Aula trabaja'],
            'Maestro': ['Niños educa', 'Primaria enseña', 'Futuro forma'],
            'Director': ['Escuela dirige', 'Decisiones importantes', 'Liderazgo educativo'],
            'Tutor': ['Apoyo individual', 'Refuerzo académico', 'Atención personalizada'],
            'Pedagogo': ['Educación estudia', 'Métodos enseñanza', 'Aprendizaje optimiza'],
            'Psicopedagogo': ['Dificultades aprendizaje', 'Educación psicología', 'Apoyo escolar'],
            'Orientador': ['Guía estudiantes', 'Futuro planifica', 'Decisiones académicas'],
            'Bibliotecario': ['Libros organiza', 'Información gestiona', 'Conocimiento custodia'],
            'Investigador': ['Conocimiento busca', 'Experimentos realiza', 'Verdad descubre'],
            'Científico': ['Ciencia practica', 'Hipótesis prueba', 'Mundo estudia'],
            'Catedrático': ['Universidad enseña', 'Experto materia', 'Investigación avanzada'],

            // Tecnología
            'Programador': ['Código escribe', 'Software crea', 'Lógica digital'],
            'Desarrollador': ['Aplicaciones construye', 'Soluciones tecnológicas', 'Innovación digital'],
            'Ingeniero de Software': ['Sistemas complejos', 'Arquitectura software', 'Tecnología avanzada'],
            'Analista de Sistemas': ['Procesos analiza', 'Soluciones diseña', 'Eficiencia optimiza'],
            'Administrador de Redes': ['Conexiones gestiona', 'Internet mantiene', 'Seguridad redes'],
            'Técnico Informático': ['Computadoras repara', 'Problemas soluciona', 'Hardware software'],
            'Diseñador Web': ['Páginas crea', 'Internet visual', 'Experiencia usuario'],
            'Data Scientist': ['Datos analiza', 'Patrones descubre', 'Información valiosa'],
            'Cybersecurity Specialist': ['Seguridad digital', 'Ataques previene', 'Datos protege'],
            'DevOps': ['Desarrollo operaciones', 'Automatización procesos', 'Despliegue continuo'],
            'UX Designer': ['Experiencia usuario', 'Interfaces intuitivas', 'Usabilidad optimiza'],
            'Product Manager': ['Producto gestiona', 'Estrategia define', 'Equipos coordina'],
            'Scrum Master': ['Metodología ágil', 'Equipos facilita', 'Procesos optimiza'],
            'QA Tester': ['Calidad asegura', 'Errores encuentra', 'Software prueba'],
            'Database Administrator': ['Bases datos', 'Información organiza', 'Rendimiento optimiza'],

            // Arte y Entretenimiento
            'Artista': ['Creatividad expresa', 'Belleza crea', 'Emociones transmite'],
            'Pintor': ['Colores mezcla', 'Lienzo plasma', 'Imágenes crea'],
            'Escultor': ['Formas moldea', 'Materiales transforma', 'Volumen crea'],
            'Músico': ['Sonidos crea', 'Instrumentos toca', 'Melodías compone'],
            'Cantante': ['Voz melodiosa', 'Canciones interpreta', 'Emociones transmite'],
            'Bailarín': ['Cuerpo expresivo', 'Ritmo sigue', 'Movimiento arte'],
            'Actor': ['Personajes interpreta', 'Emociones actúa', 'Historia vive'],
            'Director': ['Visión artística', 'Equipo dirige', 'Historia cuenta'],
            'Productor': ['Proyecto financia', 'Recursos gestiona', 'Visión ejecuta'],
            'Guionista': ['Historias escribe', 'Diálogos crea', 'Narrativa construye'],
            'Editor': ['Contenido mejora', 'Textos corrige', 'Calidad asegura'],
            'Fotógrafo': ['Momentos captura', 'Luz domina', 'Imágenes cuenta'],
            'Camarógrafo': ['Imágenes graba', 'Movimiento captura', 'Visual narra'],
            'Diseñador Gráfico': ['Visual comunica', 'Marcas crea', 'Estética funcional'],
            'Ilustrador': ['Dibujos crea', 'Conceptos visualiza', 'Arte comercial'],
            'Animador': ['Movimiento crea', 'Personajes vivos', 'Ilusión vida'],
            'Escritor': ['Palabras teje', 'Historias narra', 'Mundos crea'],
            'Poeta': ['Versos compone', 'Emociones rima', 'Alma expresa'],
            'Periodista': ['Noticias investiga', 'Verdad busca', 'Información transmite'],
            'Locutor': ['Voz profesional', 'Radio televisión', 'Mensaje transmite'],
            'Presentador': ['Programa conduce', 'Audiencia conecta', 'Carisma natural'],
            'Comediante': ['Risa provoca', 'Humor crea', 'Entretenimiento ofrece'],
            'Mago': ['Ilusiones crea', 'Imposible hace', 'Asombro genera'],
            'Payaso': ['Niños divierte', 'Sonrisas regala', 'Alegría esparce'],

            // Servicios
            'Chef': ['Creatividad', 'Experiencia', 'Liderazgo'],
            'Cocinero': ['Preparación', 'Ingredientes', 'Técnica'],
            'Camarero': ['Servicio', 'Atención', 'Hospitalidad'],
            'Barista': ['Bebidas', 'Especialidad', 'Técnica'],
            'Sommelier': ['Conocimiento', 'Degustación', 'Recomendación'],
            'Recepcionista': ['Atención', 'Información', 'Comunicación'],
            'Conserje': ['Edificio cuida', 'Mantenimiento hace', 'Orden mantiene'],
            'Limpiador': ['Espacios limpia', 'Higiene mantiene', 'Orden restaura'],
            'Jardinero': ['Plantas cuida', 'Jardines mantiene', 'Verde cultiva'],
            'Peluquero': ['Cabello corta', 'Estilo crea', 'Imagen mejora'],
            'Estilista': ['Moda asesora', 'Imagen transforma', 'Belleza realza'],
            'Barbero': ['Hombres afeita', 'Barba arregla', 'Tradición mantiene'],
            'Maquillador': ['Rostro embellece', 'Colores aplica', 'Belleza realza'],
            'Masajista': ['Tensión alivia', 'Músculos relaja', 'Bienestar da'],
            'Esteticista': ['Piel cuida', 'Belleza trata', 'Juventud preserva'],
            'Personal Trainer': ['Ejercicio guía', 'Forma física', 'Metas alcanza'],
            'Entrenador': ['Deportistas prepara', 'Técnica enseña', 'Victorias busca'],

            // Seguridad y Emergencias
            'Policía': ['Uniforme', 'Servicio', 'Comunidad'],
            'Bombero': ['Emergencias', 'Valiente', 'Equipo'],
            'Paramédico': ['Urgencias', 'Ambulancia', 'Ayuda'],
            'Guardia de Seguridad': ['Vigilancia', 'Turno', 'Protección'],
            'Detective': ['Investigación', 'Casos', 'Búsqueda'],
            'Militar': ['Disciplina', 'Servicio', 'Honor'],
            'Soldado': ['Órdenes', 'Entrenamiento', 'Misión'],
            'Piloto': ['Alturas', 'Transporte', 'Licencia'],
            'Controlador Aéreo': ['Torre', 'Comunicación', 'Coordina'],
            'Marinero': ['Navegación', 'Agua', 'Embarcación'],
            'Capitán': ['Comando', 'Responsabilidad', 'Liderazgo'],

            // Legal y Negocios
            'Abogado': ['Representación', 'Conocimiento', 'Defensa'],
            'Juez': ['Decisiones', 'Autoridad', 'Imparcialidad'],
            'Notario': ['Documentos', 'Certificación', 'Oficialidad'],
            'Procurador': ['Representación', 'Trámites', 'Gestión'],
            'Contador': ['Números maneja', 'Finanzas organiza', 'Impuestos calcula'],
            'Auditor': ['Cuentas revisa', 'Errores encuentra', 'Transparencia asegura'],
            'Economista': ['Mercados analiza', 'Tendencias predice', 'Recursos optimiza'],
            'Analista Financiero': ['Inversiones evalúa', 'Riesgos calcula', 'Ganancias proyecta'],
            'Banquero': ['Dinero gestiona', 'Créditos otorga', 'Finanzas maneja'],
            'Corredor de Bolsa': ['Acciones negocia', 'Inversiones maneja', 'Mercados conoce'],
            'Consultor': ['Consejos da', 'Problemas resuelve', 'Experiencia aporta'],
            'Gerente': ['Equipos dirige', 'Decisiones toma', 'Resultados logra'],
            'Director Ejecutivo': ['Empresa lidera', 'Estrategia define', 'Visión ejecuta'],
            'Empresario': ['Negocios crea', 'Riesgos toma', 'Oportunidades ve'],
            'Vendedor': ['Productos ofrece', 'Clientes convence', 'Ventas cierra'],
            'Representante de Ventas': ['Territorio cubre', 'Clientes visita', 'Metas cumple'],
            'Agente Inmobiliario': ['Propiedades vende', 'Hogares encuentra', 'Sueños realiza'],
            'Agente de Seguros': ['Riesgos cubre', 'Protección ofrece', 'Tranquilidad vende'],

            // Construcción y Oficios
            'Arquitecto': ['Edificios diseña', 'Espacios planifica', 'Sueños construye'],
            'Ingeniero': ['Soluciones técnicas', 'Estructuras calcula', 'Innovación aplica'],
            'Constructor': ['Edificios levanta', 'Proyectos ejecuta', 'Sueños materializa'],
            'Albañil': ['Ladrillos coloca', 'Muros levanta', 'Bases construye'],
            'Carpintero': ['Madera trabaja', 'Muebles crea', 'Precisión artesanal'],
            'Electricista': ['Cables instala', 'Luz proporciona', 'Energía domina'],
            'Fontanero': ['Tuberías instala', 'Agua controla', 'Fugas repara'],
            'Pintor': ['Paredes colorea', 'Espacios transforma', 'Belleza aplica'],
            'Soldador': ['Metales une', 'Estructuras refuerza', 'Fuego domina'],
            'Mecánico': ['Motores repara', 'Máquinas arregla', 'Problemas soluciona'],
            'Técnico': ['Equipos mantiene', 'Reparaciones hace', 'Funcionamiento asegura'],
            'Operario': ['Máquinas opera', 'Producción mantiene', 'Procesos ejecuta'],
            'Conductor': ['Vehículos maneja', 'Destinos alcanza', 'Seguridad prioriza'],
            'Taxista': ['Pasajeros transporta', 'Ciudad conoce', 'Servicio ofrece'],
            'Camionero': ['Cargas transporta', 'Largas distancias', 'Economía mueve'],
            'Repartidor': ['Paquetes entrega', 'Domicilios visita', 'Servicio rápido'],
            'Cartero': ['Correspondencia entrega', 'Comunicación facilita', 'Puntualidad mantiene'],

            // Otros
            'Traductor': ['Idiomas convierte', 'Culturas conecta', 'Comunicación facilita'],
            'Intérprete': ['Tiempo real traduce', 'Conversaciones facilita', 'Barreras rompe'],
            'Guía Turístico': ['Lugares muestra', 'Historia cuenta', 'Experiencias crea'],
            'Azafata': ['Vuelos atiende', 'Pasajeros cuida', 'Seguridad garantiza'],
            'Secretario': ['Agenda organiza', 'Comunicación gestiona', 'Apoyo administrativo'],
            'Asistente': ['Tareas apoya', 'Organización mantiene', 'Eficiencia mejora'],
            'Administrativo': ['Oficina gestiona', 'Documentos procesa', 'Orden mantiene'],
            'Contable': ['Libros lleva', 'Números cuadra', 'Finanzas controla'],
            'Cajero': ['Dinero maneja', 'Transacciones procesa', 'Clientes atiende'],
            'Dependiente': ['Productos vende', 'Clientes asesora', 'Tienda atiende'],
            'Comerciante': ['Negocios maneja', 'Productos ofrece', 'Ganancias busca'],
            'Agricultor': ['Tierra cultiva', 'Alimentos produce', 'Naturaleza trabaja'],
            'Ganadero': ['Animales cría', 'Carne produce', 'Campo vive'],
            'Pescador': ['Peces captura', 'Mar trabaja', 'Alimento obtiene'],
            'Minero': ['Tierra excava', 'Minerales extrae', 'Profundidades trabaja'],
            'Leñador': ['Árboles corta', 'Madera obtiene', 'Bosque trabaja'],
            'Pastor': ['Rebaños cuida', 'Animales guía', 'Campo vive'],
            'Apicultor': ['Abejas cuida', 'Miel produce', 'Colmenas mantiene'],
            'Floricultor': ['Flores cultiva', 'Belleza crea', 'Jardines diseña']
        },

        colores: {
            // Básicos
            'Rojo': ['Sangre', 'Amor', 'Fuego'],
            'Azul': ['Cielo', 'Mar', 'Frío'],
            'Verde': ['Hierba', 'Naturaleza', 'Esperanza'],
            'Amarillo': ['Sol', 'Alegría', 'Limón'],
            'Naranja': ['Fruta', 'Atardecer', 'Energía'],
            'Morado': ['Realeza', 'Uva', 'Misterio'],
            'Rosa': ['Niña', 'Flor', 'Dulzura'],
            'Negro': ['Noche', 'Elegancia', 'Ausencia'],
            'Blanco': ['Nieve', 'Paz', 'Luz'],
            'Gris': ['Nube', 'Neutral', 'Lluvia'],
            'Marrón': ['Tierra', 'Chocolate', 'Madera'],

            // Rojos
            'Carmesí': ['Intenso', 'Profundo', 'Dramático'],
            'Escarlata': ['Brillante', 'Vivo', 'Llamativo'],
            'Bermellón': ['Anaranjado', 'Vibrante', 'Cálido'],
            'Granate': ['Oscuro', 'Elegante', 'Profundo'],
            'Burdeos': ['Vinoso', 'Maduro', 'Rico'],
            'Vino': ['Líquido', 'Fermentado', 'Elegante'],
            'Cereza': ['Frutal', 'Dulce', 'Jugoso'],
            'Frambuesa': ['Silvestre', 'Natural', 'Fresco'],
            'Fresa': ['Tierno', 'Dulce', 'Primaveral'],
            'Sandía': ['Jugoso', 'Veraniego', 'Refrescante'],
            'Tomate': ['Maduro', 'Natural', 'Nutritivo'],
            'Ladrillo': ['Constructivo', 'Sólido', 'Hogareño'],
            'Óxido': ['Metálico', 'Oxidado', 'Natural'],
            'Sangre': ['Vital', 'Circulante', 'Viviente'],

            // Azules
            'Celeste': ['Claro', 'Aéreo', 'Celestial'],
            'Cielo': ['Infinito', 'Libre', 'Expansivo'],
            'Marino': ['Profundo', 'Oceánico', 'Abismal'],
            'Cobalto': ['Intenso', 'Mineral', 'Cristalino'],
            'Índigo': ['Violáceo', 'Nocturno', 'Místico'],
            'Añil': ['Tradicional', 'Natural', 'Artesanal'],
            'Turquesa': ['Verdoso', 'Tropical', 'Mineral'],
            'Aguamarina': ['Cristalino', 'Puro', 'Oceánico'],
            'Cian': ['Eléctrico', 'Digital', 'Vibrante'],
            'Zafiro': ['Precioso', 'Real', 'Valioso'],
            'Acero': ['Metálico', 'Industrial', 'Frío'],
            'Petróleo': ['Oscuro', 'Energético', 'Líquido'],
            'Medianoche': ['Nocturno', 'Profundo', 'Silencioso'],
            'Real': ['Noble', 'Supremo', 'Distinguido'],

            // Verdes
            'Esmeralda': ['Precioso', 'Natural', 'Mineral'],
            'Jade': ['Oriental', 'Antiguo', 'Espiritual'],
            'Oliva': ['Terroso', 'Mediterráneo', 'Ancestral'],
            'Lima': ['Ácido', 'Cítrico', 'Natural'],
            'Menta': ['Fresco', 'Aromático', 'Refrescante'],
            'Pistacho': ['Suave', 'Natural', 'Elegante'],
            'Bosque': ['Profundo', 'Salvaje', 'Abundante'],
            'Musgo': ['Húmedo', 'Silencioso', 'Paciente'],
            'Hierba': ['Tierno', 'Nuevo', 'Emergente'],
            'Pino': ['Perenne', 'Natural', 'Eterno'],
            'Salvia': ['Aromático', 'Herbal', 'Natural'],
            'Malaquita': ['Mineral', 'Geológico', 'Terrestre'],
            'Aguacate': ['Cremoso', 'Natural', 'Saludable'],
            'Militar': ['Camuflaje', 'Estratégico', 'Táctico'],

            // Amarillos
            'Dorado': ['Metálico', 'Brillante', 'Resplandeciente'],
            'Mostaza': ['Terroso', 'Especiado', 'Intenso'],
            'Ámbar': ['Cálido', 'Cristalizado', 'Antiguo'],
            'Limón': ['Ácido', 'Cítrico', 'Natural'],
            'Canario': ['Brillante', 'Cantarín', 'Musical'],
            'Maíz': ['Dorado', 'Natural', 'Nutritivo'],
            'Miel': ['Dulce', 'Natural', 'Laborioso'],
            'Champán': ['Burbujeante', 'Elegante', 'Efervescente'],
            'Crema': ['Suave', 'Lácteo', 'Delicado'],
            'Vainilla': ['Aromático', 'Dulce', 'Celestial'],
            'Mantequilla': ['Cremoso', 'Lácteo', 'Untable'],
            'Oro': ['Precioso', 'Eterno', 'Absoluto'],
            'Azufre': ['Mineral', 'Químico', 'Elemental'],

            // Naranjas
            'Coral': ['Rosado', 'Marino', 'Submarino'],
            'Salmón': ['Suave', 'Natural', 'Sutil'],
            'Melocotón': ['Tierno', 'Aterciopelado', 'Frutal'],
            'Albaricoque': ['Delicado', 'Temprano', 'Primaveral'],
            'Mandarina': ['Cítrico', 'Frutal', 'Vitamínico'],
            'Calabaza': ['Otoñal', 'Estacional', 'Hogareño'],
            'Zanahoria': ['Nutritivo', 'Natural', 'Terrestre'],
            'Cobre': ['Metálico', 'Conductivo', 'Industrial'],
            'Bronce': ['Dorado', 'Antiguo', 'Deportivo'],
            'Óxido': ['Terroso', 'Patinado', 'Envejecido'],
            'Papaya': ['Tropical', 'Exótico', 'Solar'],
            'Mango': ['Jugoso', 'Tropical', 'Frutal'],

            // Morados
            'Violeta': ['Floral', 'Aromático', 'Silvestre'],
            'Lila': ['Suave', 'Primaveral', 'Aromático'],
            'Lavanda': ['Aromático', 'Herbal', 'Relajante'],
            'Púrpura': ['Real', 'Antiguo', 'Imperial'],
            'Magenta': ['Eléctrico', 'Vibrante', 'Audaz'],
            'Fucsia': ['Brillante', 'Floral', 'Tropical'],
            'Ciruela': ['Frutal', 'Maduro', 'Natural'],
            'Berenjena': ['Profundo', 'Vegetal', 'Natural'],
            'Amatista': ['Cristalino', 'Mineral', 'Espiritual'],
            'Orquídea': ['Exótico', 'Tropical', 'Refinado'],
            'Malva': ['Suave', 'Floral', 'Natural'],
            'Uva': ['Jugoso', 'Fermentado', 'Vinícola'],

            // Rosas
            'Rosa': ['Clásico', 'Femenino', 'Universal'],
            'Fucsia': ['Intenso', 'Femenino', 'Audaz'],
            'Magenta': ['Eléctrico', 'Moderno', 'Digital'],
            'Salmón': ['Suave', 'Elegante', 'Natural'],
            'Coral': ['Marino', 'Oceánico', 'Submarino'],
            'Durazno': ['Frutal', 'Aterciopelado', 'Natural'],
            'Chicle': ['Dulce', 'Infantil', 'Masticable'],
            'Flamingo': ['Tropical', 'Exótico', 'Natural'],
            'Cereza': ['Frutal', 'Tentador', 'Jugoso'],
            'Frambuesa': ['Silvestre', 'Natural', 'Campestre'],
            'Fresa': ['Tierno', 'Primaveral', 'Frutal'],
            'Sandía': ['Refrescante', 'Veraniego', 'Jugoso'],

            // Marrones
            'Caoba': ['Noble', 'Maderero', 'Natural'],
            'Chocolate': ['Dulce', 'Delicioso', 'Tentador'],
            'Café': ['Aromático', 'Líquido', 'Matutino'],
            'Canela': ['Especiado', 'Aromático', 'Dulce'],
            'Nuez': ['Nutritivo', 'Natural', 'Terroso'],
            'Castaño': ['Otoñal', 'Estacional', 'Natural'],
            'Tierra': ['Fundamental', 'Sólido', 'Natural'],
            'Arena': ['Claro', 'Erosionado', 'Granular'],
            'Beige': ['Suave', 'Cálido', 'Sutil'],
            'Tostado': ['Dorado', 'Procesado', 'Desarrollado'],
            'Sepia': ['Nostálgico', 'Capturado', 'Visual'],
            'Cacao': ['Puro', 'Chocolate', 'Tropical'],
            'Cognac': ['Refinado', 'Destilado', 'Líquido'],
            'Whisky': ['Añejado', 'Madurado', 'Profundo'],

            // Grises
            'Plateado': ['Metálico', 'Moderno', 'Frío'],
            'Plomo': ['Pesado', 'Metálico', 'Industrial'],
            'Carbón': ['Oscuro', 'Concentrado', 'Combustible'],
            'Grafito': ['Mineral', 'Escritura', 'Deslizante'],
            'Pizarra': ['Educativo', 'Escrito', 'Acumulado'],
            'Acero': ['Industrial', 'Moderno', 'Resistente'],
            'Humo': ['Etéreo', 'Gaseoso', 'Volátil'],
            'Ceniza': ['Residual', 'Transformado', 'Material'],
            'Perla': ['Luminoso', 'Marino', 'Cultivado'],
            'Plata': ['Precioso', 'Tradicional', 'Clásico'],
            'Mercurio': ['Líquido', 'Metálico', 'Elemental'],
            'Antracita': ['Profundo', 'Concentrado', 'Mineral'],

            // Otros
            'Marfil': ['Cremoso', 'Natural', 'Orgánico'],
            'Crema': ['Suave', 'Lácteo', 'Nutritivo'],
            'Hueso': ['Natural', 'Vital', 'Orgánico'],
            'Perla': ['Luminoso', 'Marino', 'Cultivado'],
            'Nácar': ['Iridiscente', 'Cambiante', 'Marino'],
            'Opalino': ['Cambiante', 'Variable', 'Luminoso'],
            'Iridiscente': ['Cambiante', 'Variable', 'Luminoso'],
            'Metálico': ['Industrial', 'Reflectante', 'Frío'],
            'Brillante': ['Reflejado', 'Luminoso', 'Resplandor'],
            'Mate': ['Sin brillo', 'Sutil', 'Discreto'],
            'Satinado': ['Suave', 'Táctil', 'Visual'],
            'Perlado': ['Nacarado', 'Marino', 'Natural'],
            'Fluorescente': ['Artificial', 'Eléctrico', 'Vibrante'],
            'Neón': ['Eléctrico', 'Nocturno', 'Urbano'],
            'Pastel': ['Cromático', 'Tonal', 'Visual'],
            'Tierra': ['Natural', 'Orgánico', 'Terrestre'],
            'Natural': ['Artificio', 'Orgánico', 'Cromático'],
            'Neutro': ['Dominancia', 'Equilibrio', 'Visual']
        },

        objetos: {
            // Tecnología
            'Teléfono': ['Comunicación', 'Portátil', 'Contacto'],
            'Smartphone': ['Táctil', 'Aplicaciones', 'Inteligente'],
            'Tablet': ['Grande', 'Táctil', 'Plano'],
            'Computadora': ['Procesamiento', 'Digital', 'Software'],
            'Laptop': ['Plegable', 'Batería', 'Portátil'],
            'Monitor': ['Externa', 'Visualización', 'Conecta'],
            'Teclado': ['Teclas', 'Texto', 'Escribir'],
            'Ratón': ['Cursor', 'Clics', 'Movimiento'],
            'Auriculares': ['Audio', 'Orejas', 'Directo'],
            'Altavoces': ['Ambiental', 'Compartido', 'Alto'],
            'Cámara': ['Captura', 'Momentos', 'Enfoque'],
            'Televisión': ['Visual', 'Canales', 'Grande'],
            'Radio': ['Audio', 'Frecuencias', 'Noticias'],
            'Reproductor': ['Portátil', 'Personal', 'Almacenadas'],
            'Consola': ['Videojuegos', 'Interactivo', 'Controles'],
            'Videojuego': ['Digital', 'Virtual', 'Programados'],
            'DVD': ['Óptico', 'Películas', 'Digital'],
            'USB': ['Portátil', 'Universal', 'Transferibles'],
            'Disco Duro': ['Masivo', 'Permanentes', 'Interna'],
            'Router': ['Inalámbrica', 'Compartido', 'Múltiples'],
            'Modem': ['Hogar', 'Convertida', 'Proveedor'],
            'Cable': ['Física', 'Transmisión', 'Dispositivos'],
            'Cargador': ['Energía', 'Recarga', 'Eléctrica'],
            'Batería': ['Portátil', 'Autonomía', 'Recargable'],
            'Pila': ['Desechable', 'Pequeña', 'Básicos'],

            // Muebles
            'Silla': ['Asiento individual', 'Respaldo cómodo', 'Cuatro patas'],
            'Mesa': ['Superficie plana', 'Trabajo y comida', 'Altura cómoda'],
            'Cama': ['Descanso nocturno', 'Colchón suave', 'Sueño reparador'],
            'Sofá': ['Asiento múltiple', 'Sala estar', 'Comodidad compartida'],
            'Sillón': ['Asiento individual', 'Muy cómodo', 'Relajación personal'],
            'Estantería': ['Libros organizados', 'Almacenamiento vertical', 'Múltiples niveles'],
            'Armario': ['Ropa guardada', 'Puertas cerradas', 'Organización personal'],
            'Cómoda': ['Cajones múltiples', 'Ropa doblada', 'Dormitorio típico'],
            'Escritorio': ['Superficie trabajo', 'Estudio y oficina', 'Cajones útiles'],
            'Mesita': ['Mesa pequeña', 'Apoyo cercano', 'Junto a asiento'],
            'Taburete': ['Asiento alto', 'Sin respaldo', 'Barra o cocina'],
            'Banco': ['Asiento largo', 'Múltiples personas', 'Sin respaldo'],
            'Perchero': ['Colgar ropa', 'Entrada casa', 'Ganchos múltiples'],
            'Espejo': ['Reflejo personal', 'Imagen devuelta', 'Cristal plateado'],
            'Lámpara': ['Iluminación local', 'Luz dirigida', 'Ambiente cálido'],
            'Cortinas': ['Ventana cubierta', 'Privacidad hogar', 'Luz controlada'],
            'Alfombra': ['Suelo cubierto', 'Calidez pies', 'Decoración suelo'],
            'Cojín': ['Comodidad extra', 'Suave apoyo', 'Decoración funcional'],
            'Manta': ['Calor corporal', 'Suave cubierta', 'Descanso cómodo'],

            // Cocina
            'Nevera': ['Frío conserva', 'Alimentos frescos', 'Electrodoméstico grande'],
            'Horno': ['Calor cocina', 'Hornear alimentos', 'Temperatura controlada'],
            'Microondas': ['Calentamiento rápido', 'Ondas electromagnéticas', 'Cocina express'],
            'Lavavajillas': ['Limpieza automática', 'Platos limpios', 'Agua caliente'],
            'Lavadora': ['Ropa limpia', 'Agua y jabón', 'Ciclos automáticos'],
            'Secadora': ['Ropa seca', 'Aire caliente', 'Después lavado'],
            'Cafetera': ['Bebida caliente', 'Mañana energía', 'Granos molidos'],
            'Tostadora': ['Pan dorado', 'Calor directo', 'Desayuno rápido'],
            'Batidora': ['Mezcla ingredientes', 'Velocidad variable', 'Cocina útil'],
            'Licuadora': ['Líquidos mezclados', 'Frutas trituradas', 'Batidos suaves'],
            'Sartén': ['Cocina directa', 'Superficie antiadherente', 'Freír alimentos'],
            'Olla': ['Cocción líquida', 'Sopas y guisos', 'Calor uniforme'],
            'Cacerola': ['Cocina lenta', 'Guisos largos', 'Tapa incluida'],
            'Plato': ['Servir comida', 'Superficie plana', 'Mesa individual'],
            'Vaso': ['Beber líquidos', 'Transparente común', 'Capacidad medida'],
            'Taza': ['Bebidas calientes', 'Asa lateral', 'Desayuno típico'],
            'Cuenco': ['Contenido hondo', 'Cereales y sopas', 'Forma redondeada'],
            'Cuchillo': ['Cortar alimentos', 'Hoja afilada', 'Mango ergonómico'],
            'Tenedor': ['Pinchar comida', 'Dientes múltiples', 'Comer elegante'],
            'Cuchara': ['Líquidos y sólidos', 'Forma cóncava', 'Boca cómoda'],
            'Servilleta': ['Limpieza boca', 'Papel o tela', 'Mesa educada'],
            'Mantel': ['Mesa cubierta', 'Protección superficie', 'Decoración comida'],
            'Delantal': ['Ropa protegida', 'Cocina limpia', 'Ata cintura'],
            'Guante': ['Manos protegidas', 'Calor resistente', 'Cocina segura'],
            'Tabla de Cortar': ['Superficie corte', 'Protege encimera', 'Madera o plástico'],

            // Baño
            'Ducha': ['Agua corporal', 'Limpieza diaria', 'Cabina cerrada'],
            'Bañera': ['Inmersión completa', 'Relajación agua', 'Baño largo'],
            'Lavabo': ['Manos limpias', 'Agua corriente', 'Espejo cercano'],
            'Inodoro': ['Necesidades básicas', 'Agua limpia', 'Privacidad total'],
            'Bidé': ['Higiene íntima', 'Agua dirigida', 'Limpieza específica'],
            'Toalla': ['Secado corporal', 'Absorbe agua', 'Suave contacto'],
            'Champú': ['Cabello limpio', 'Espuma abundante', 'Fragancia agradable'],
            'Jabón': ['Limpieza básica', 'Espuma jabonosa', 'Grasa elimina'],
            'Pasta de Dientes': ['Dientes limpios', 'Aliento fresco', 'Cepillado diario'],
            'Cepillo de Dientes': ['Higiene bucal', 'Cerdas suaves', 'Uso personal'],
            'Peine': ['Cabello ordenado', 'Dientes finos', 'Peinado básico'],
            'Cepillo': ['Cabello desenredado', 'Cerdas amplias', 'Suavidad cabello'],
            'Secador': ['Cabello seco', 'Aire caliente', 'Peinado rápido'],
            'Maquinilla': ['Afeitado limpio', 'Cuchillas afiladas', 'Piel suave'],
            'Perfume': ['Fragancia personal', 'Aroma agradable', 'Ocasiones especiales'],
            'Desodorante': ['Olor controlado', 'Frescura duradera', 'Uso diario'],
            'Crema': ['Piel hidratada', 'Suavidad tacto', 'Cuidado personal'],

            // Transporte
            'Coche': ['Transporte personal', 'Motor combustión', 'Cuatro ruedas'],
            'Moto': ['Transporte ágil', 'Dos ruedas', 'Motor potente'],
            'Bicicleta': ['Transporte ecológico', 'Pedales humanos', 'Ejercicio saludable'],
            'Patinete': ['Transporte ligero', 'Impulso pie', 'Urbano práctico'],
            'Autobús': ['Transporte público', 'Múltiples pasajeros', 'Rutas fijas'],
            'Tren': ['Transporte masivo', 'Rieles metálicos', 'Distancias largas'],
            'Avión': ['Transporte aéreo', 'Vuelo alto', 'Distancias continentales'],
            'Barco': ['Transporte marítimo', 'Flota agua', 'Carga pesada'],
            'Yate': ['Embarcación lujo', 'Recreo marítimo', 'Comodidad flotante'],
            'Lancha': ['Embarcación rápida', 'Motor potente', 'Agua deportiva'],
            'Kayak': ['Embarcación individual', 'Remo doble', 'Agua tranquila'],
            'Canoa': ['Embarcación tradicional', 'Remo simple', 'Agua natural'],
            'Submarino': ['Navegación submarina', 'Bajo agua', 'Exploración profunda'],
            'Helicóptero': ['Vuelo vertical', 'Hélices giratorias', 'Aterrizaje preciso'],
            'Globo': ['Vuelo lento', 'Aire caliente', 'Vista panorámica'],
            'Paracaídas': ['Caída controlada', 'Tela amplia', 'Seguridad aérea'],
            'Cohete': ['Propulsión espacial', 'Velocidad extrema', 'Exploración cosmos'],
            'Nave Espacial': ['Viaje espacial', 'Tecnología avanzada', 'Exploración universo'],

            // Otros objetos importantes
            'Libro': ['Conocimiento escrito', 'Páginas múltiples', 'Lectura educativa'],
            'Reloj': ['Tiempo medido', 'Puntualidad importante', 'Muñeca común'],
            'Paraguas': ['Lluvia protección', 'Plegable portátil', 'Tiempo húmedo'],
            'Gafas': ['Visión corregida', 'Cristales graduados', 'Nariz apoyo'],
            'Llave': ['Acceso controlado', 'Cerradura específica', 'Seguridad hogar'],
            'Linterna': ['Luz portátil', 'Oscuridad ilumina', 'Emergencia útil'],
            'Vela': ['Luz romántica', 'Cera derretida', 'Llama pequeña'],
            'Globo': ['Aire inflado', 'Fiesta decoración', 'Colores alegres']
        },

        // Nuevas categorías
        musica: {
            // Géneros musicales
            'Rock': ['Guitarra', 'Enérgico', 'Rebeldía'],
            'Pop': ['Comercial', 'Pegadizas', 'Masivo'],
            'Jazz': ['Improvisación', 'Americano', 'Variados'],
            'Blues': ['Sentimiento', 'Afroamericano', 'Expresiva'],
            'Country': ['Rural', 'Cotidianas', 'Acústica'],
            'Folk': ['Tradición', 'Oral', 'Simples'],
            'Reggae': ['Jamaicano', 'Social', 'Prominente'],
            'Hip Hop': ['Urbana', 'Marcado', 'Callejera'],
            'Rap': ['Rápidas', 'Hablado', 'Ingeniosas'],
            'R&B': ['Blues', 'Emotiva', 'Afroamericano'],
            'Soul': ['Alma', 'Intensa', 'Poderosa'],
            'Funk': ['Pegajoso', 'Marcado', 'Irresistible'],
            'Disco': ['Baile', 'Constante', 'Dorada'],
            'House': ['Electrónica', 'Repetitivo', 'Baile'],
            'Techno': ['Sintéticos', 'Mecánico', 'Futurista'],
            'Trance': ['Hipnótico', 'Envolventes', 'Constante'],
            'Dubstep': ['Distorsionado', 'Sincopado', 'Digitales'],
            'EDM': ['Electrónica', 'Masivos', 'Alta'],
            'Ambient': ['Atmosférica', 'Envolventes', 'Profunda'],
            'Classical': ['Culta', 'Sinfónica', 'Europea'],
            'Opera': ['Dramático', 'Cantada', 'Potentes'],
            'Symphony': ['Completa', 'Movimientos', 'Extensa'],
            'Chamber': ['Pequeño', 'Íntima', 'Selectos'],
            'Baroque': ['Rica', 'Histórica', 'Compleja'],
            'Romantic': ['Intensa', 'Personal', 'XIX'],
            'Modern': ['Experimentación', 'Nuevos', 'Tradicional'],
            'Flamenco': ['Española', 'Flamenca', 'Expresivo'],
            'Tango': ['Argentina', 'Abrazada', 'Nostálgica'],
            'Salsa': ['Caribeño', 'Social', 'Latinos'],
            'Merengue': ['Dominicano', 'Rápido', 'Típico'],
            'Bachata': ['Latino', 'Romántica', 'Sensual'],
            'Cumbia': ['Colombiano', 'Popular', 'Tradicionales'],
            'Mariachi': ['Mexicana', 'Típicos', 'Tradicionales'],
            'Punk': ['Pura', 'Crudo', 'Antisistema'],
            'Metal': ['Pesado', 'Distorsionadas', 'Intensa'],
            'Heavy Metal': ['Alto', 'Poderosos', 'Rebelde'],
            'Death Metal': ['Extremo', 'Guturales', 'Oscura'],
            'Black Metal': ['Siniestra', 'Crudo', 'Oscura'],
            'Thrash': ['Extrema', 'Agresivos', 'Desatada'],
            'Grunge': ['Sucio', 'Despreocupada', 'Noventero'],
            'Alternative': ['Alternativo', 'Independiente', 'Mainstream'],
            'Indie': ['Independiente', 'Libre', 'Único'],
            'Emo': ['Intensa', 'Personales', 'Profunda'],
            'Ska': ['Saltarín', 'Viento', 'Jamaicano'],
            'Reggaeton': ['Urbano', 'Característico', 'Latina'],
            'Trap': ['Moderno', 'Rápidos', 'Urbana'],
            'Drill': ['Crudo', 'Directas', 'Callejero'],

            // Instrumentos musicales
            'Piano': ['Teclas', 'Versátil', 'Elegante'],
            'Guitarra': ['Cuerdas', 'Popular', 'Versátil'],
            'Violín': ['Cuerdas', 'Arco', 'Agudo'],
            'Violonchelo': ['Grande', 'Grave', 'Sentado'],
            'Contrabajo': ['Gigante', 'Profundo', 'Base'],
            'Viola': ['Hermano', 'Medio', 'Intermedio'],
            'Arpa': ['Verticales', 'Celestial', 'Elegante'],
            'Flauta': ['Viento', 'Dulce', 'Lateral'],
            'Clarinete': ['Simple', 'Cálido', 'Noble'],
            'Oboe': ['Doble', 'Penetrante', 'Orquesta'],
            'Fagot': ['Grave', 'Doblado', 'Profundo'],
            'Saxofón': ['Jazz', 'Dorado', 'Expresivo'],
            'Trompeta': ['Brillante', 'Heroico', 'Tres'],
            'Trombón': ['Deslizante', 'Potente', 'Característico'],
            'Tuba': ['Grave', 'Grande', 'Profundo'],
            'Trompa': ['Enrollado', 'Noble', 'Campana'],
            'Batería': ['Conjunto', 'Base', 'Elementos'],
            'Percusión': ['Golpeados', 'Marcado', 'Amplia'],
            'Xilófono': ['Láminas', 'Brillante', 'Mazos'],
            'Marimba': ['Grande', 'Cálido', 'Tubulares'],
            'Timbal': ['Afinado', 'Grave', 'Pedal'],
            'Acordeón': ['Fuelle', 'Botones', 'Popular'],
            'Armónica': ['Pequeño', 'Sopla', 'Nostálgico'],
            'Banjo': ['Parche', 'Country', 'Americano'],
            'Mandolina': ['Ocho', 'Brillante', 'Pequeño'],
            'Ukelele': ['Cuatro', 'Hawaiano', 'Alegre'],
            'Sitar': ['Indio', 'Muchas', 'Exótico'],
            'Didgeridoo': ['Tubo', 'Aborigen', 'Profundo'],
            'Gaita': ['Fuelle', 'Celta', 'Tradicional'],
            'Castañuelas': ['Española', 'Madera', 'Seco'],
            'Pandereta': ['Sonajas', 'Manual', 'Festivo'],
            'Bongos': ['Gemelos', 'Latina', 'Agudo'],
            'Congas': ['Altos', 'Afro', 'Grave'],
            'Djembe': ['Africano', 'Copa', 'Resonante'],

            // Términos musicales
            'Melodía': ['Sucesión', 'Línea', 'Cantable'],
            'Armonía': ['Acordes', 'Soporte', 'Vertical'],
            'Ritmo': ['Pulso', 'Patrón', 'Base'],
            'Tempo': ['Velocidad', 'Pulsos', 'Carácter'],
            'Compás': ['División', 'Estructura', 'Regular'],
            'Acorde': ['Simultáneas', 'Básica', 'Conjunto'],
            'Escala': ['Ordenada', 'Graduales', 'Melódica'],
            'Tonalidad': ['Centro', 'Jerarquía', 'Armónico'],
            'Sinfonía': ['Orquestal', 'Movimientos', 'Extensa'],
            'Concierto': ['Solista', 'Diálogo', 'Virtuosismo'],
            'Sonata': ['Forma musical', 'Estructura clásica', 'Desarrollo temático'],
            'Fuga': ['Contrapunto imitativo', 'Tema perseguido', 'Estructura compleja'],
            'Vals': ['Danza triple', 'Ritmo giratorio', 'Elegancia europea'],
            'Marcha': ['Ritmo militar', 'Paso regular', 'Carácter solemne'],
            'Nocturno': ['Música nocturna', 'Carácter íntimo', 'Atmósfera serena'],
            'Preludio': ['Pieza introductoria', 'Preparación musical', 'Forma libre']
        },

        tecnologia: {
            'Teléfono Inteligente': ['Móvil', 'Funciones', 'Conectividad'],
            'Tableta': ['Táctil', 'Portabilidad', 'Contenido'],
            'Portátil': ['Móvil', 'Plegable', 'Portátil'],
            'Ordenador de Mesa': ['Fija', 'Potencia', 'Periféricos'],
            'Monitor': ['Externa', 'Ampliada', 'Profesional'],
            'Teclado': ['Texto', 'Organizadas', 'Rápida'],
            'Ratón': ['Cursor', 'Precisa', 'Exactos'],
            'Cámara Web': ['Llamadas', 'Personal', 'Visual'],
            'Auriculares': ['Privado', 'Directo', 'Acústico'],
            'Altavoces': ['Compartido', 'Ambiental', 'Alta'],
            'Micrófono': ['Audio', 'Voz', 'Clara'],
            'Impresora': ['Físico', 'Tangibles', 'Tinta'],
            'Escáner': ['Digitalización', 'Archivo', 'Digital'],
            'Enrutador': ['Doméstica', 'Compartido', 'Múltiples'],
            'Módem': ['Internet', 'Convertida', 'Conecta'],
            'USB': ['Portátil', 'Universal', 'Móviles'],
            'HDMI': ['Definición', 'Digital', 'Multimedia'],
            'Bluetooth': ['Inalámbrica', 'Distancia', 'Pareados'],
            'WiFi': ['Inalámbrico', 'Doméstica', 'Móvil'],
            '5G': ['Móvil', 'Alta', 'Generación'],
            '4G': ['Móvil', 'Buena', 'Anterior'],
            'LTE': ['Móviles', 'Mejorada', 'Estable'],
            'GPS': ['Exacta', 'Satelital', 'Global'],
            'NFC': ['Cercana', 'Móviles', 'Directo'],
            'Código QR': ['Codificada', 'Rápido', 'Directo'],
            'Inteligencia Artificial': ['Máquinas inteligentes', 'Aprendizaje automático', 'Decisiones autónomas'],
            'Aprendizaje Automático': ['Algoritmos adaptativos', 'Patrones datos', 'Mejora continua'],
            'Macrodatos': ['Información masiva', 'Análisis complejo', 'Patrones ocultos'],
            'Computación en la Nube': ['Servicios remotos', 'Almacenamiento online', 'Acceso ubicuo'],
            'Internet de las Cosas': ['Objetos conectados', 'Red dispositivos', 'Automatización hogar'],
            'Cadena de Bloques': ['Registro distribuido', 'Seguridad criptográfica', 'Transacciones verificadas'],
            'Criptomoneda': ['Moneda digital', 'Descentralizada', 'Valor fluctuante'],
            'Bitcoin': ['Moneda virtual', 'Primera criptomoneda', 'Valor alto'],
            'Token No Fungible': ['Arte digital', 'Propiedad única', 'Coleccionable virtual'],
            'Metaverso': ['Mundo virtual', 'Realidad paralela', 'Interacción digital'],
            'Realidad Virtual': ['Mundo simulado', 'Inmersión total', 'Experiencia artificial'],
            'Realidad Aumentada': ['Mundo mejorado', 'Información superpuesta', 'Realidad expandida'],
            'Dron': ['Vehículo aéreo', 'Control remoto', 'Vuelo autónomo'],
            'Robot': ['Máquina autónoma', 'Tareas automatizadas', 'Inteligencia programada'],
            'Reloj Inteligente': ['Tiempo y más', 'Muñeca tecnológica', 'Salud monitoreada'],
            'Monitor de Actividad': ['Ejercicio medido', 'Salud rastreada', 'Pasos contados'],
            'Televisión Inteligente': ['TV conectada', 'Internet integrado', 'Apps incluidas'],
            'Transmisión en Directo': ['Video tiempo real', 'Audiencia conectada', 'Contenido inmediato'],
            'Podcast': ['Audio episódico', 'Contenido temático', 'Escucha flexible'],
            'YouTube': ['Videos online', 'Plataforma global', 'Contenido variado'],
            'TikTok': ['Videos cortos', 'Contenido viral', 'Entretenimiento rápido'],
            'Instagram': ['Fotos compartidas', 'Red social visual', 'Historias temporales'],
            'Facebook': ['Red social', 'Conexiones personales', 'Contenido compartido'],
            'Twitter': ['Mensajes cortos', 'Noticias rápidas', 'Opiniones públicas'],
            'LinkedIn': ['Red profesional', 'Contactos laborales', 'Oportunidades trabajo'],
            'WhatsApp': ['Mensajería móvil', 'Comunicación directa', 'Grupos familiares'],
            'Telegram': ['Mensajes seguros', 'Privacidad alta', 'Canales públicos'],
            'Discord': ['Comunicación gamers', 'Servidores temáticos', 'Chat voz'],
            'Zoom': ['Videollamadas', 'Reuniones virtuales', 'Trabajo remoto'],
            'Teams': ['Colaboración empresarial', 'Reuniones corporativas', 'Productividad grupal'],
            'Skype': ['Videollamadas pioneras', 'Comunicación internacional', 'Contacto familiar'],
            'FaceTime': ['Videollamadas Apple', 'Comunicación visual', 'Calidad alta'],
            'Netflix': ['Series y películas', 'Entretenimiento streaming', 'Contenido original'],
            'Spotify': ['Música streaming', 'Listas personalizadas', 'Descubrimiento musical'],
            'Apple Music': ['Música Apple', 'Biblioteca extensa', 'Calidad premium'],
            'Amazon Prime': ['Entretenimiento Amazon', 'Envíos incluidos', 'Contenido variado'],
            'Disney Plus': ['Contenido Disney', 'Familia entretenimiento', 'Clásicos animados'],
            'Twitch': ['Streaming juegos', 'Transmisiones vivo', 'Comunidad gamers'],
            'PlayStation': ['Consola Sony', 'Juegos exclusivos', 'Entretenimiento hogar'],
            'Xbox': ['Consola Microsoft', 'Gaming online', 'Servicios integrados'],
            'Nintendo': ['Consola japonesa', 'Juegos únicos', 'Innovación constante'],
            'Steam': ['Plataforma PC', 'Juegos digitales', 'Biblioteca extensa'],
            'Epic Games': ['Tienda juegos', 'Juegos gratuitos', 'Competencia Steam'],
            'Fortnite': ['Battle royale', 'Juego gratuito', 'Fenómeno cultural'],
            'Minecraft': ['Mundo bloques', 'Creatividad infinita', 'Construcción libre'],
            'Ciberseguridad': ['Protección digital', 'Amenazas online', 'Datos seguros'],
            'Cortafuegos': ['Barrera digital', 'Tráfico filtrado', 'Protección red'],
            'Antivirus': ['Protección malware', 'Escaneo archivos', 'Seguridad sistema'],
            'Red Privada Virtual': ['Conexión segura', 'Privacidad online', 'Túnel cifrado'],
            'Contraseña': ['Acceso seguro', 'Clave personal', 'Protección cuenta'],
            'Biométrico': ['Identificación corporal', 'Huella digital', 'Reconocimiento único'],
            'Autenticación de Dos Factores': ['Seguridad doble', 'Verificación extra', 'Protección adicional']
        },

        naturaleza: {
            // Paisajes
            'Montaña': ['Elevación', 'Altura', 'Escalada'],
            'Valle': ['Depresión', 'Bajo', 'Fértil'],
            'Río': ['Corriente', 'Flujo', 'Navegable'],
            'Lago': ['Tranquilo', 'Reflejo', 'Pesca'],
            'Mar': ['Salado', 'Inmensidad', 'Navegación'],
            'Océano': ['Profundo', 'Vastedad', 'Corrientes'],
            'Playa': ['Arena', 'Costero', 'Vacaciones'],
            'Desierto': ['Árido', 'Calor', 'Supervivencia'],
            'Bosque': ['Denso', 'Vida', 'Sombra'],
            'Selva': ['Húmedo', 'Biodiversidad', 'Tropical'],
            'Pradera': ['Extenso', 'Hierba', 'Pastoreo'],
            'Tundra': ['Frío', 'Escaso', 'Permafrost'],
            'Sabana': ['Estacional', 'Salvaje', 'Africana'],
            'Pantano': ['Húmedo', 'Estancado', 'Único'],
            'Manglar': ['Salobre', 'Raíces', 'Protección'],
            'Arrecife': ['Coral', 'Marino', 'Barrera'],
            'Isla': ['Rodeada', 'Aislada', 'Única'],
            'Península': ['Proyectada', 'Conexión', 'Terrestre'],
            'Cabo': ['Punta', 'Proyección', 'Referencia'],
            'Bahía': ['Protegida', 'Curva', 'Puerto'],
            'Golfo': ['Extenso', 'Entrada', 'Interior'],
            'Estrecho': ['Angosto', 'Paso', 'Navegación'],
            'Canal': ['Natural', 'Navegable', 'Conexión'],
            'Cascada': ['Caída', 'Vertical', 'Fuerza'],
            'Géiser': ['Caliente', 'Periódico', 'Geotérmica'],
            'Volcán': ['Ígneo', 'Erupción', 'Telúrico'],
            'Cráter': ['Circular', 'Impacto', 'Cicatriz'],
            'Cueva': ['Cavidad', 'Oscuridad', 'Refugio'],
            'Cañón': ['Profundo', 'Erosión', 'Vertical'],
            'Meseta': ['Elevada', 'Planicie', 'Resistente'],
            'Colina': ['Suave', 'Gradual', 'Ondulación'],
            'Acantilado': ['Vertical', 'Erosión', 'Peligroso'],
            'Glaciar': ['Hielo', 'Lento', 'Escultor'],

            // Árboles
            'Roble': ['Noble', 'Longevidad', 'Fortaleza'],
            'Pino': ['Perenne', 'Aromático', 'Vertical'],
            'Abeto': ['Cónico', 'Navideño', 'Montaña'],
            'Cedro': ['Aromático', 'Resistente', 'Milenario'],
            'Eucalipto': ['Rápido', 'Medicinal', 'Australiano'],
            'Sauce': ['Colgante', 'Húmedo', 'Flexible'],
            'Álamo': ['Rápido', 'Tembloroso', 'Alto'],
            'Abedul': ['Blanco', 'Boreal', 'Papel'],
            'Arce': ['Característico', 'Dulce', 'Colorido'],
            'Castaño': ['Comestible', 'Durable', 'Generoso'],
            'Nogal': ['Nutritivo', 'Precioso', 'Sombra'],
            'Olivo': ['Oleoso', 'Milenario', 'Paz'],
            'Palmera': ['Único', 'Tropical', 'Oasis'],
            'Bambú': ['Rápido', 'Flexible', 'Múltiple'],
            'Secuoya': ['Gigante', 'Extrema', 'Californiano'],
            'Baobab': ['Gigante', 'Almacena', 'Africano'],
            'Cerezo': ['Primaveral', 'Dulce', 'Efímero'],
            'Manzano': ['Conocido', 'Blanco', 'Huerto'],
            'Naranjo': ['Cítrico', 'Intenso', 'Mediterráneo'],
            'Limonero': ['Ácido', 'Fresco', 'Esencial'],
            'Higuera': ['Dulce', 'Grandes', 'Antiguo'],
            'Almendro': ['Seco', 'Temprano', 'Primaveral'],

            // Flores
            'Rosa': ['Reina', 'Protectoras', 'Símbolo'],
            'Tulipán': ['Primaveral', 'Copa', 'Holandés'],
            'Girasol': ['Sigue', 'Nutritivas', 'Impresionante'],
            'Margarita': ['Blancos', 'Amarillo', 'Pura'],
            'Orquídea': ['Exótica', 'Delicado', 'Tropical'],
            'Lirio': ['Pura', 'Intensa', 'Religioso'],
            'Clavel': ['Dentados', 'Especiada', 'Larga'],
            'Jazmín': ['Nocturna', 'Blancas', 'Aromática'],
            'Lavanda': ['Relajante', 'Característico', 'Medicinal'],
            'Violeta': ['Pequeña', 'Intenso', 'Modestia'],
            'Petunia': ['Vibrante', 'Abundante', 'Popular'],
            'Geranio': ['Resistente', 'Característico', 'Balcón'],
            'Begonia': ['Carnosa', 'Tolerante', 'Intenso'],
            'Azalea': ['Espectacular', 'Acidez', 'Explosiva'],
            'Hortensia': ['Agrupadas', 'Variable', 'Húmeda'],
            'Dalia': ['Compleja', 'Inmensa', 'Colorido'],
            'Peonía': ['Opulenta', 'Dulce', 'Lujosa'],
            'Iris': ['Característica', 'Intenso', 'Natural'],
            'Narciso': ['Amarilla', 'Primaveral', 'Vanidad'],
            'Jacinto': ['Intensa', 'Denso', 'Aromática'],
            'Amapola': ['Efímera', 'Intenso', 'Silvestre'],
            'Magnolia': ['Grande', 'Dulce', 'Antigua'],

            // Fenómenos naturales
            'Lluvia': ['Descendente', 'Renovadora', 'Natural'],
            'Nieve': ['Helados', 'Pureza', 'Mágico'],
            'Granizo': ['Esférico', 'Violenta', 'Potencial'],
            'Viento': ['Movimiento', 'Invisible', 'Natural'],
            'Huracán': ['Extremo', 'Masiva', 'Ciclónica'],
            'Tornado': ['Giratorio', 'Concentrada', 'Mortal'],
            'Tormenta': ['Atmosférica', 'Abundante', 'Desatada'],
            'Rayo': ['Natural', 'Instantánea', 'Destructivo'],
            'Trueno': ['Eléctrico', 'Poderoso', 'Sonora'],
            'Arcoíris': ['Descompuesta', 'Efímera', 'Esperanza'],
            'Aurora': ['Polar', 'Terrestre', 'Nocturno'],
            'Eclipse': ['Celestial', 'Cósmica', 'Raro'],
            'Marea': ['Rítmica', 'Lunar', 'Predecible'],
            'Tsunami': ['Gigante', 'Marina', 'Sísmica'],
            'Terremoto': ['Temblorosa', 'Móviles', 'Súbita'],
            'Avalancha': ['Deslizante', 'Peligrosa', 'Arrasadora'],
            'Erupción': ['Explosiva', 'Ardiente', 'Destructiva'],
            'Sequía': ['Ausente', 'Seca', 'Amenazada'],
            'Inundación': ['Desbordada', 'Sumergida', 'Líquida'],
            'Niebla': ['Suspendida', 'Reducida', 'Natural'],
            'Rocío': ['Condensada', 'Fresca', 'Matutina'],
            'Escarcha': ['Cristalino', 'Decorativo', 'Helada']
        },

        ciencia: {
            // Física
            'Átomo': ['Fundamental', 'Básica', 'Núcleo'],
            'Molécula': ['Unidos', 'Químico', 'Estructura'],
            'Electrón': ['Negativa', 'Órbita', 'Básica'],
            'Protón': ['Positiva', 'Componente', 'Atómica'],
            'Neutrón': ['Carga', 'Estable', 'Nuclear'],
            'Energía': ['Capacidad', 'Movimiento', 'Conservación'],
            'Fuerza': ['Movimiento', 'Interacción', 'Física'],
            'Gravedad': ['Atracción', 'Universal', 'Caída'],
            'Magnetismo': ['Atracción', 'Polos', 'Campo'],
            'Electricidad': ['Cargas', 'Energía', 'Corriente'],
            'Luz': ['Onda', 'Velocidad', 'Visión'],
            'Sonido': ['Onda', 'Vibración', 'Audición'],
            'Calor': ['Térmica', 'Temperatura', 'Molecular'],
            'Temperatura': ['Medida', 'Cinética', 'Termómetro'],
            'Presión': ['Superficie', 'Gases', 'Atmósfera'],
            'Velocidad': ['Distancia', 'Rapidez', 'Vector'],
            'Aceleración': ['Cambio', 'Fuerza', 'Variado'],
            'Masa': ['Cantidad', 'Inercia', 'Peso'],
            'Peso': ['Fuerza', 'Atracción', 'Balanza'],
            'Densidad': ['Volumen', 'Compacidad', 'Flotación'],
            'Volumen': ['Espacio', 'Dimensiones', 'Capacidad'],
            'Inercia': ['Resistencia', 'Estado', 'Primera'],
            'Radiación': ['Emitida', 'Ondas', 'Espacio'],
            'Láser': ['Coherente', 'Amplificación', 'Concentrado'],
            'Plasma': ['Estado', 'Ionizados', 'Estrellas'],
            'Cuántico': ['Paquetes', 'Pequeñas', 'Probabilidad'],
            'Relatividad': ['Teoría', 'Espacio', 'Límite'],
            'Termodinámica': ['Trabajo', 'Conserva', 'Aumenta'],

            // Química
            'Elemento': ['Pura', 'Iguales', 'Periódica'],
            'Compuesto': ['Unidos', 'Nuevas', 'Química'],
            'Reacción': ['Cambian', 'Rompen', 'Forman'],
            'Catalizador': ['Acelera', 'Consumirse', 'Reduce'],
            'Ácido': ['Dona', 'Bajo', 'Agrio'],
            'Base': ['Acepta', 'Alto', 'Tacto'],
            'pH': ['Medida', 'Logarítmica', 'Siete'],
            'Sal': ['Base', 'Cristales', 'Unidos'],
            'Oxidación': ['Pierde', 'Gana', 'Herrumbre'],
            'Reducción': ['Gana', 'Pierde', 'Opuesta'],
            'Cristal': ['Ordenada', 'Regulares', 'Geométrica'],
            'Solución': ['Homogénea', 'Disuelto', 'Variable'],
            'Precipitado': ['Formado', 'Abandona', 'Producto'],
            'Destilación': ['Separación', 'Ebullición', 'Método'],
            'Hidrógeno': ['Simple', 'Protón', 'Limpio'],
            'Oxígeno': ['Vital', 'Necesaria', 'Componente'],
            'Carbono': ['Base', 'Cadenas', 'Diamante'],
            'Nitrógeno': ['Mayoría', 'Componente', 'Gas'],
            'Helio': ['Noble', 'Globos', 'Abundante'],
            'Oro': ['Precioso', 'Oxida', 'Eterno'],
            'Plata': ['Brillante', 'Alta', 'Tradicional'],
            'Hierro': ['Común', 'Componente', 'Básica'],

            // Biología
            'Célula': ['Unidad', 'Protege', 'Vitales'],
            'ADN': ['Genética', 'Hélice', 'Transmite'],
            'ARN': ['Sintetiza', 'Copia', 'Contiene'],
            'Gen': ['Unidad', 'Codifica', 'Segmento'],
            'Cromosoma': ['Agrupados', 'Contiene', 'Organiza'],
            'Proteína': ['Cadena', 'Múltiples', 'Esencial'],
            'Enzima': ['Catalizadora', 'Acelera', 'Función'],
            'Virus': ['Obligado', 'ARN', 'Necesita'],
            'Bacteria': ['Simple', 'Núcleo', 'Vida'],
            'Evolución': ['Cambian', 'Natural', 'Largo'],
            'Mutación': ['Genético', 'Variación', 'Motor'],
            'Selección Natural': ['Supervivencia', 'Propuso', 'Mecanismo'],
            'Ecosistema': ['Interactúan', 'Incluye', 'Dinámico'],
            'Biodiversidad': ['Variedad', 'Múltiples', 'Biológica'],
            'Fotosíntesis': ['Energía', 'Proceso', 'Produce'],
            'Respiración': ['Consume', 'Libera', 'Mantiene'],
            'Mitosis': ['Celular', 'Permite', 'Idénticas'],
            'Meiosis': ['Produce', 'Genética', 'Sexual'],
            'Metabolismo': ['Químicas', 'Procesa', 'Mantiene'],

            // Astronomía
            'Planeta': ['Orbita', 'Suficiente', 'Limpia'],
            'Estrella': ['Nuclear', 'Produce', 'Equilibra'],
            'Galaxia': ['Agrupadas', 'Une', 'Inmenso'],
            'Nebulosa': ['Polvo', 'Nacen', 'Brillantes'],
            'Agujero Negro': ['Extrema', 'Escapa', 'Curva'],
            'Supernova': ['Explota', 'Dispersa', 'Intensa'],
            'Cometa': ['Roca', 'Desarrolla', 'Elíptica'],
            'Asteroide': ['Espacial', 'Planetas', 'Posible'],
            'Meteorito': ['Caída', 'Atraviesa', 'Alcanza'],
            'Satélite': ['Orbita', 'Capturado', 'Artificial'],
            'Órbita': ['Curva', 'Equilibra', 'Perpetuo'],
            'Telescopio': ['Concentra', 'Acerca', 'Explora'],
            'Sistema Solar': ['Planetas', 'Organiza', 'Hogar'],
            'Vía Láctea': ['Galaxia', 'Brazos', 'Billones'],
            'Big Bang': ['Origen', 'Inicial', 'Comienza'],
            'Universo': ['Existe', 'Tiempo', 'Continua'],
            'Cosmos': ['Universal', 'Total', 'Infinita']
        }
    };

    // Obtener las 3 pistas para la palabra
    if (advancedHints[theme] && advancedHints[theme][selectedWord]) {
        const hints = advancedHints[theme][selectedWord];
        // Seleccionar una pista aleatoria de las 3 disponibles
        return hints[Math.floor(Math.random() * hints.length)];
    }

    // Fallback si no hay pistas específicas (no debería llegar aquí)
    return 'Relacionado con ' + theme;
}

// Función antigua mantenida para compatibilidad
function generateSmartHint(selectedWord, theme) {
    return generateAdvancedHint(selectedWord, theme);
}

// Función para generar palabras tabú para el Ayudante en modo Roles+
function generateTabooWords(selectedWord, theme) {
    const tabooCategories = {
        animales: {
            'Perro': ['mascota', 'ladrar', 'hueso'],
            'Gato': ['maullar', 'ratón', 'felino'],
            'León': ['rey', 'melena', 'rugir'],
            'Elefante': ['trompa', 'marfil', 'gigante'],
            'Tigre': ['rayas', 'felino', 'naranja'],
            'Oso': ['miel', 'hibernar', 'peludo'],
            'Lobo': ['manada', 'aullar', 'feroz'],
            'Zorro': ['astuto', 'cola', 'rojo']
        },
        comida: {
            'Pizza': ['masa', 'queso', 'italiano'],
            'Hamburguesa': ['carne', 'pan', 'americana'],
            'Sushi': ['pescado', 'arroz', 'japonés'],
            'Pasta': ['trigo', 'salsa', 'italiano'],
            'Tacos': ['tortilla', 'mexicano', 'picante'],
            'Chocolate': ['cacao', 'dulce', 'marrón'],
            'Helado': ['frío', 'cremoso', 'verano']
        },
        deportes: {
            'Fútbol': ['balón', 'gol', 'once'],
            'Baloncesto': ['canasta', 'driblar', 'alto'],
            'Tenis': ['raqueta', 'pelota', 'red'],
            'Natación': ['agua', 'piscina', 'brazada'],
            'Golf': ['hoyo', 'palo', 'verde'],
            'Boxeo': ['guantes', 'ring', 'golpear']
        },
        peliculas: {
            'Titanic': ['barco', 'iceberg', 'hundirse'],
            'Avatar': ['azul', 'planeta', 'aliens'],
            'Matrix': ['realidad', 'píldora', 'virtual'],
            'Frozen': ['hielo', 'hermanas', 'cantar']
        },
        paises: {
            'España': ['ibérica', 'flamenco', 'paella'],
            'Francia': ['torre', 'queso', 'vino'],
            'Italia': ['bota', 'pasta', 'romano'],
            'Japón': ['sol', 'sushi', 'samurai'],
            'México': ['azteca', 'tequila', 'sombrero']
        },
        profesiones: {
            'Médico': ['hospital', 'curar', 'estetoscopio'],
            'Profesor': ['enseñar', 'escuela', 'estudiantes'],
            'Chef': ['cocinar', 'restaurante', 'recetas'],
            'Piloto': ['volar', 'avión', 'cielo']
        },
        colores: {
            'Rojo': ['sangre', 'fuego', 'rosa'],
            'Azul': ['cielo', 'mar', 'frío'],
            'Verde': ['hierba', 'naturaleza', 'esperanza'],
            'Amarillo': ['sol', 'oro', 'limón']
        },
        objetos: {
            'Teléfono': ['llamar', 'móvil', 'comunicar'],
            'Libro': ['leer', 'páginas', 'historia'],
            'Reloj': ['tiempo', 'horas', 'puntual'],
            'Coche': ['conducir', 'ruedas', 'motor']
        }
    };

    // Obtener palabras tabú específicas para la palabra
    if (tabooCategories[theme] && tabooCategories[theme][selectedWord]) {
        return tabooCategories[theme][selectedWord];
    }

    // Palabras tabú genéricas si no hay específicas
    return ['obvio', 'directo', 'fácil'];
}

// Función antigua para mantener compatibilidad
function generateOldSmartHint(selectedWord, theme) {
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

// Función antigua mantenida para compatibilidad - redirige al nuevo sistema
function showRole() {
    // Esta función ya no se usa - el nuevo sistema usa selectPlayer() y revealRole()
    console.log('showRole() is deprecated - using new player selection system');
    // Redirigir al nuevo sistema de selección de jugadores
    showScreen('roles-screen');
    createPlayersGrid();
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
    if (gameData.gameMode === 'roles-plus') {
        // Modo Roles+ - verificar si eliminaron al niño
        if (gameData.childIndexes.includes(selectedVote)) {
            return 'child-win';
        } else if (selectedVote === gameData.impostorIndex) {
            return 'innocent-win';
        } else {
            return 'impostor-win';
        }
    } else {
        // Modos normales
        if (selectedVote === gameData.impostorIndex) {
            return 'innocent-win';
        } else {
            return 'impostor-win';
        }
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
    } else if (gameData.gameMode === 'roles-plus') {
        // Modo Roles+ - mostrar información de todos los roles especiales
        const impostorName = gameData.players[gameData.impostorIndex];
        const helperNames = gameData.helperIndexes.map(idx => gameData.players[idx]);
        const childNames = gameData.childIndexes.map(idx => gameData.players[idx]);

        content += `<p>🎭 <strong>El impostor era:</strong> ${impostorName}</p>`;
        if (helperNames.length > 0) {
            content += `<p>�r <strong>Los ayudantes eran:</strong> ${helperNames.join(', ')}</p>`;
        }
        if (childNames.length > 0) {
            content += `<p>🔵 <strong>Los niños eran:</strong> ${childNames.join(', ')}</p>`;
        }
        content += `<br>`;

        // Mostrar jugadores eliminados si los hay
        if (gameData.eliminatedPlayers.length > 0) {
            content += `<p><strong>Jugadores eliminados:</strong> ${gameData.eliminatedPlayers.join(', ')}</p><br>`;
        }

        // Determinar ganador según el resultado
        if (result === 'child-win') {
            content += `<div class="winner-announcement child-win">
                🔵 ¡${childName} (Niño) ganó!<br>
                Lo eliminaron y esa era su condición de victoria
            </div>`;
        } else if (result === 'innocent-win' || selectedVote === gameData.impostorIndex) {
            content += `<div class="winner-announcement innocent-win">
                🎉 ¡Los inocentes ganaron!<br>
                Descubrieron al impostor correctamente
            </div>`;
        } else if (result === 'impostor-win') {
            content += `<div class="winner-announcement impostor-win">
                🎭 ¡El impostor y ayudante ganaron!<br>
                Lograron engañar a todos
            </div>`;
        } else if (selectedVote === -1) {
            content += `<div class="winner-announcement">
                🤷‍♂️ No hubo votación<br>
                El impostor se salvó por falta de consenso
            </div>`;
        } else {
            const votedPlayer = gameData.players[selectedVote];
            content += `<div class="winner-announcement impostor-win">
                🎭 ¡El impostor y ayudante ganaron!<br>
                Votaron por ${votedPlayer} (inocente)
            </div>`;
        }
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
function resetGameKeepSettings() {
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
    // Resetear nuevos roles del modo Roles+
    gameData.helperIndexes = [];
    gameData.childIndexes = [];
    gameData.tabooWords = [];
    selectedVote = -1;

    // Ya no hay temporizador que limpiar

    // Resetear también el sistema de roles
    viewedPlayers.clear();
    currentSelectedPlayer = '';
}

// Funciones eliminadas - usar las versiones del modal más abajo

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

// Función eliminada - usar la versión correcta más arriba

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

// Función eliminada - usar la versión correcta más arriba

// Seleccionar jugador
function selectPlayer(playerName, playerIndex) {
    currentSelectedPlayer = playerName;
    gameData.currentPlayerIndex = playerIndex;
    document.getElementById('selected-player-name').textContent = playerName;

    // Resetear la pantalla de rol para la animación
    const revealCard = document.querySelector('.role-reveal-card');
    const roleCard = document.getElementById('role-content-display');

    // Resetear estados de animación
    revealCard.classList.remove('fade-out');
    revealCard.style.display = 'block';
    roleCard.classList.add('hidden');
    roleCard.classList.remove('show');

    showScreen('individual-role-screen');
}

// Revelar rol al tocar
function revealRole() {
    const currentPlayer = gameData.currentPlayerIndex;
    const roleContent = document.getElementById('individual-role-content');
    const roleCard = document.getElementById('role-content-display');
    const revealCard = document.querySelector('.role-reveal-card');

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

    // Preparar el contenido según el rol
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

            if (gameData.giveHint && gameData.impostorHint) {
                content += `<p><strong>Pista:</strong> ${gameData.impostorHint}</p>`;
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

    // Llenar el contenido del rol
    roleContent.innerHTML = content;

    // Iniciar la animación de transición
    revealCard.classList.add('fade-out');

    // Después de que termine la animación de salida, mostrar el contenido del rol
    setTimeout(() => {
        roleCard.classList.remove('hidden');
        roleCard.classList.add('show');

        // Marcar jugador como visto
        viewedPlayers.add(currentSelectedPlayer);
    }, 250); // La mitad del tiempo de transición para un efecto más suave
}

// Volver a la selección de jugadores
function backToPlayerSelection() {
    showScreen('roles-screen');
    createPlayersGrid();
}

// Función eliminada - usar la versión correcta más arriba

function setupDiscussion() {
    // Mostrar información del juego
    const playersDisplay = document.getElementById('players-display');
    playersDisplay.innerHTML = `
        <div class="game-info">
            <p><strong>Jugadores:</strong> ${gameData.players.join(', ')}</p>
            <p><strong>Tema:</strong> ${gameData.selectedTheme}</p>
            <p><strong>Modo:</strong> ${gameData.gameMode === 'normal' ? 'Normal' : 'Loco'}</p>
        </div>
    `;

    // Configurar el botón de votación manual si es necesario
    if (gameData.roundType === 'single-vote') {
        document.getElementById('manual-vote-btn').classList.remove('hidden');
    }
}

function startTimer() {
    gameData.timeLeft = 300; // 5 minutos
    updateTimerDisplay();

    gameData.timer = setInterval(() => {
        gameData.timeLeft--;
        updateTimerDisplay();

        if (gameData.timeLeft <= 0) {
            clearInterval(gameData.timer);
            // Auto-iniciar votación cuando se acabe el tiempo
            startVoting();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(gameData.timeLeft / 60);
    const seconds = gameData.timeLeft % 60;
    const timerDisplay = document.getElementById('timer-display');
    if (timerDisplay) {
        timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
}

function startVoting() {
    clearInterval(gameData.timer);
    showScreen('voting-screen');
    setupVoting();
}

function setupVoting() {
    const votingOptions = document.getElementById('voting-options');
    votingOptions.innerHTML = '';

    gameData.activePlayers.forEach((player, index) => {
        const originalIndex = gameData.players.indexOf(player);
        const button = document.createElement('button');
        button.className = 'voting-option';
        button.textContent = player;
        button.onclick = () => selectVote(originalIndex);
        votingOptions.appendChild(button);
    });

    // Resetear selección
    selectedVote = -1;
}

function selectVote(playerIndex) {
    selectedVote = playerIndex;

    // Actualizar visualización
    document.querySelectorAll('.voting-option').forEach((btn, index) => {
        btn.classList.remove('selected');
    });

    const buttons = document.querySelectorAll('.voting-option');
    const selectedButton = Array.from(buttons).find(btn =>
        gameData.players.indexOf(btn.textContent) === playerIndex
    );

    if (selectedButton) {
        selectedButton.classList.add('selected');
    }
}

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

    // Resetear el sistema de roles para nuevo juego
    viewedPlayers.clear();
    currentSelectedPlayer = '';

    // Seleccionar tema y palabra según el modo
    if (themeSelect === 'random') {
        const themes = Object.keys(gameData.themes);
        gameData.selectedTheme = themes[Math.floor(Math.random() * themes.length)];
    } else if (themeSelect === 'custom') {
        // Modo personalizado: seleccionar de las categorías elegidas
        const selectedCategories = getSelectedCategories();
        if (selectedCategories.length === 0) {
            showColoredAlert('Por favor, selecciona al menos una categoría.', 'warning');
            return;
        }
        gameData.selectedTheme = selectedCategories[Math.floor(Math.random() * selectedCategories.length)];
    } else {
        gameData.selectedTheme = themeSelect;
    }

    const words = gameData.themes[gameData.selectedTheme];
    gameData.selectedWord = words[Math.floor(Math.random() * words.length)];

    // Generar la pista del impostor una sola vez para toda la partida
    if (gameData.giveHint) {
        gameData.impostorHint = generateAdvancedHint(gameData.selectedWord, gameData.selectedTheme);
    } else {
        gameData.impostorHint = null;
    }

    // Asignar roles según el modo
    if (specialMode === 'normal') {
        gameData.gameMode = 'normal';
        gameData.impostorIndex = Math.floor(Math.random() * gameData.players.length);
        gameData.helperIndexes = [];
        gameData.childIndexes = [];
        gameData.tabooWords = [];
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
        gameData.helperIndexes = [];
        gameData.childIndexes = [];
        gameData.tabooWords = [];
    } else if (specialMode === 'roles-plus') {
        // Modo Roles+ con roles especiales
        gameData.gameMode = 'roles-plus';

        // Obtener cantidades de roles de los controles
        const impostorCount = parseInt(document.getElementById('impostor-count').value);
        const helperCount = parseInt(document.getElementById('helper-count').value);
        const childCount = parseInt(document.getElementById('child-count').value);

        // Verificar que hay suficientes jugadores
        const totalSpecialRoles = impostorCount + helperCount + childCount;
        if (gameData.players.length < totalSpecialRoles + 1) {
            showColoredAlert(`El modo Roles+ requiere al menos ${totalSpecialRoles + 1} jugadores para esta configuración.`, 'warning');
            return;
        }

        // Asignar roles aleatoriamente
        const availableIndexes = [...Array(gameData.players.length).keys()];

        // Asignar impostores (siempre al menos 1)
        for (let i = 0; i < impostorCount; i++) {
            const impostorIdx = Math.floor(Math.random() * availableIndexes.length);
            if (i === 0) {
                gameData.impostorIndex = availableIndexes.splice(impostorIdx, 1)[0];
            } else {
                // Para múltiples impostores, usar el primer índice como principal
                availableIndexes.splice(impostorIdx, 1);
            }
        }

        // Asignar ayudantes
        gameData.helperIndexes = [];
        for (let i = 0; i < helperCount; i++) {
            const helperIdx = Math.floor(Math.random() * availableIndexes.length);
            gameData.helperIndexes.push(availableIndexes.splice(helperIdx, 1)[0]);
        }

        // Asignar niños
        gameData.childIndexes = [];
        for (let i = 0; i < childCount; i++) {
            const childIdx = Math.floor(Math.random() * availableIndexes.length);
            gameData.childIndexes.push(availableIndexes.splice(childIdx, 1)[0]);
        }

        // Generar palabras tabú para los ayudantes
        if (helperCount > 0) {
            gameData.tabooWords = generateTabooWords(gameData.selectedWord, gameData.selectedTheme);
        }
    }
}
// Funciones para el modal de categorías personalizadas
function openCategoriesModal() {
    const modal = document.getElementById('categories-modal');
    modal.classList.add('active');

    // Prevenir scroll del body cuando el modal está abierto
    document.body.style.overflow = 'hidden';

    // Agregar event listener para cerrar con click fuera del modal
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            closeCategoriesModal();
        }
    });

    // Agregar event listeners para actualizar el contador
    const checkboxes = document.querySelectorAll('#categories-modal input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateSelectedCount);
    });

    updateSelectedCount();
}

function closeCategoriesModal() {
    const modal = document.getElementById('categories-modal');
    modal.classList.remove('active');

    // Restaurar scroll del body
    document.body.style.overflow = '';
}

function saveCategoriesSelection() {
    const selectedCategories = getSelectedCategories();

    if (selectedCategories.length === 0) {
        showColoredAlert('Debes seleccionar al menos una categoría.', 'warning');
        return;
    }

    updateSelectedCount();
    closeCategoriesModal();
}

function updateSelectedCount() {
    const selectedCategories = getSelectedCategories();
    const countElement = document.getElementById('selected-count');
    if (countElement) {
        countElement.textContent = selectedCategories.length;
    }
}

// Función para mostrar avisos coloridos (móvil-friendly)
function showColoredAlert(message, type = 'warning') {
    // Remover avisos anteriores
    const existingAlerts = document.querySelectorAll('.colored-alert');
    existingAlerts.forEach(alert => alert.remove());

    // Crear el aviso
    const alertDiv = document.createElement('div');
    alertDiv.className = `colored-alert ${type}-alert`;

    const content = document.createElement('div');
    content.className = `${type}-content`;

    const icon = document.createElement('span');
    icon.className = `${type}-icon`;

    const text = document.createElement('span');
    text.className = `${type}-text`;
    text.textContent = message;

    // Iconos según el tipo
    switch (type) {
        case 'warning':
            icon.textContent = '⚠️';
            break;
        case 'success':
            icon.textContent = '✅';
            break;
        case 'info':
            icon.textContent = 'ℹ️';
            break;
        default:
            icon.textContent = '⚠️';
    }

    content.appendChild(icon);
    content.appendChild(text);
    alertDiv.appendChild(content);

    // Insertar en el body
    document.body.appendChild(alertDiv);

    // Posicionar en la parte superior
    alertDiv.style.position = 'fixed';
    alertDiv.style.top = '20px';
    alertDiv.style.left = '50%';
    alertDiv.style.transform = 'translateX(-50%)';
    alertDiv.style.zIndex = '10000';
    alertDiv.style.maxWidth = '90%';
    alertDiv.style.animation = 'slideDown 0.3s ease-out';

    // Auto-remover después de 4 segundos
    setTimeout(() => {
        if (alertDiv.parentNode) {
            alertDiv.style.animation = 'slideUp 0.3s ease-out';
            setTimeout(() => alertDiv.remove(), 300);
        }
    }, 4000);
}

// Funciones para el modal de configuración de roles
function openRolesModal() {
    const modal = document.getElementById('roles-modal');
    modal.classList.add('active');

    // Prevenir scroll del body cuando el modal está abierto
    document.body.style.overflow = 'hidden';

    // Actualizar el resumen al abrir
    updateRolesBreakdown();

    // Añadir event listeners para actualizar en tiempo real
    document.getElementById('impostor-count').addEventListener('change', updateRolesBreakdown);
    document.getElementById('helper-count').addEventListener('change', updateRolesBreakdown);
    document.getElementById('child-count').addEventListener('change', updateRolesBreakdown);

    // Actualizar límites de roles cuando cambie el número de jugadores
    document.getElementById('player-count').addEventListener('input', updateRoleLimits);
}

function closeRolesModal() {
    const modal = document.getElementById('roles-modal');
    modal.classList.remove('active');

    // Restaurar scroll del body
    document.body.style.overflow = '';
}

function updateRolesBreakdown() {
    const impostorCount = parseInt(document.getElementById('impostor-count').value);
    const helperCount = parseInt(document.getElementById('helper-count').value);
    const childCount = parseInt(document.getElementById('child-count').value);

    const totalSpecial = impostorCount + helperCount + childCount;
    const currentPlayers = parseInt(document.getElementById('player-count').value);

    // Mostrar advertencia con colores si no hay suficientes jugadores
    const warning = document.getElementById('roles-warning');
    if (totalSpecial >= currentPlayers) {
        warning.style.display = 'block';
    } else {
        warning.style.display = 'none';
    }
}

function updateRoleLimits() {
    const currentPlayers = parseInt(document.getElementById('player-count').value);
    const playerCountInput = document.getElementById('player-count');

    if (isNaN(currentPlayers) || currentPlayers < 3) return;

    // Obtener valores actuales de roles
    const impostorInput = document.getElementById('impostor-count');
    const helperInput = document.getElementById('helper-count');
    const childInput = document.getElementById('child-count');

    const currentImpostors = impostorInput ? parseInt(impostorInput.value) || 0 : 0;
    const currentHelpers = helperInput ? parseInt(helperInput.value) || 0 : 0;
    const currentChildren = childInput ? parseInt(childInput.value) || 0 : 0;

    // Calcular mínimo de jugadores necesarios para la configuración actual
    const totalSpecialRoles = currentImpostors + currentHelpers + currentChildren;
    const minPlayersNeeded = totalSpecialRoles + 1; // +1 para al menos 1 ciudadano normal

    // Si el número actual de jugadores es menor al mínimo necesario, ajustarlo
    if (currentPlayers < minPlayersNeeded) {
        playerCountInput.value = minPlayersNeeded;
        showColoredAlert(`Mínimo ${minPlayersNeeded} jugadores necesarios para esta configuración de roles.`, 'warning');
        return updateRoleLimits(); // Llamar recursivamente con el nuevo valor
    }

    // Calcular límite máximo de impostores (30% del total, mínimo 1)
    const maxImpostors = Math.max(1, Math.floor(currentPlayers * 0.3));

    // Calcular límites para otros roles
    const maxSpecialRoles = currentPlayers - 1; // -1 para al menos 1 ciudadano normal
    const maxHelpers = Math.max(0, maxSpecialRoles - 1); // -1 para el impostor mínimo
    const maxChildren = Math.max(0, maxSpecialRoles - 1); // -1 para el impostor mínimo

    // Actualizar los atributos max y min de los inputs
    if (impostorInput) {
        impostorInput.max = maxImpostors;
        impostorInput.min = 1; // Siempre al menos 1 impostor
        // Si el valor actual excede el nuevo máximo, ajustarlo
        if (parseInt(impostorInput.value) > maxImpostors) {
            impostorInput.value = maxImpostors;
        }
    }

    if (helperInput) {
        helperInput.max = maxHelpers;
        helperInput.min = 0;
        // Si el valor actual excede el nuevo máximo, ajustarlo
        if (parseInt(helperInput.value) > maxHelpers) {
            helperInput.value = Math.min(maxHelpers, parseInt(helperInput.value));
        }
    }

    if (childInput) {
        childInput.max = maxChildren;
        childInput.min = 0;
        // Si el valor actual excede el nuevo máximo, ajustarlo
        if (parseInt(childInput.value) > maxChildren) {
            childInput.value = Math.min(maxChildren, parseInt(childInput.value));
        }
    }

    // Actualizar el breakdown después de ajustar los valores
    updateRolesBreakdown();
}

function resetRolesConfig() {
    document.getElementById('impostor-count').value = '1';
    document.getElementById('helper-count').value = '1';
    document.getElementById('child-count').value = '1';
    updateRolesBreakdown();
}

function saveRolesConfiguration() {
    const impostorCount = parseInt(document.getElementById('impostor-count').value);
    const helperCount = parseInt(document.getElementById('helper-count').value);
    const childCount = parseInt(document.getElementById('child-count').value);

    const totalSpecial = impostorCount + helperCount + childCount;
    const currentPlayers = parseInt(document.getElementById('player-count').value);

    // Validar que hay suficientes jugadores
    if (totalSpecial >= currentPlayers) {
        showColoredAlert(`Necesitas al menos ${totalSpecial + 1} jugadores para esta configuración.`, 'warning');
        return;
    }

    // Actualizar el resumen en el botón
    updateRolesSummary();
    closeRolesModal();
}

function updateRolesSummary() {
    const impostorCount = parseInt(document.getElementById('impostor-count').value);
    const helperCount = parseInt(document.getElementById('helper-count').value);
    const childCount = parseInt(document.getElementById('child-count').value);

    let summary = [];

    if (impostorCount > 0) {
        summary.push(`${impostorCount} Impostor${impostorCount > 1 ? 'es' : ''}`);
    }
    if (helperCount > 0) {
        summary.push(`${helperCount} Ayudante${helperCount > 1 ? 's' : ''}`);
    }
    if (childCount > 0) {
        summary.push(`${childCount} Niño${childCount > 1 ? 's' : ''}`);
    }

    const summaryElement = document.getElementById('roles-summary');
    if (summaryElement) {
        summaryElement.textContent = summary.join(', ');
    }
}

// Actualizar la función toggleThemeVisibility para manejar el nuevo diseño
function toggleThemeVisibility() {
    const themeSelect = document.getElementById('theme-select').value;
    const themeSection = document.getElementById('theme-visibility-section');
    const customSection = document.getElementById('custom-categories-section');

    if (themeSelect === 'random') {
        themeSection.style.display = 'block';
        customSection.style.display = 'none';
    } else if (themeSelect === 'custom') {
        themeSection.style.display = 'block'; // Mostrar también en personalizado
        customSection.style.display = 'block';
        // Solo resetear si no hay configuraciones anteriores o si no estaba marcado previamente
        if (!gameData.lastSettings || !gameData.lastSettings.showTheme) {
            document.getElementById('show-theme').checked = false;
        }
        updateSelectedCount(); // Actualizar contador al mostrar la sección
    } else {
        themeSection.style.display = 'none';
        customSection.style.display = 'none';
        document.getElementById('show-theme').checked = false;
    }
}

// Función para mostrar/ocultar configuración de roles
function toggleRolesConfig() {
    const specialMode = document.getElementById('special-mode').value;
    const rolesConfig = document.getElementById('roles-config');

    if (specialMode === 'roles-plus') {
        rolesConfig.style.display = 'block';
    } else {
        rolesConfig.style.display = 'none';
    }
}

// Actualizar las funciones selectAllCategories y deselectAllCategories
function selectAllCategories() {
    const checkboxes = document.querySelectorAll('#categories-modal input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = true;
    });
    updateSelectedCount();
}

function deselectAllCategories() {
    const checkboxes = document.querySelectorAll('#categories-modal input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    updateSelectedCount();
}

// Actualizar la función getSelectedCategories para usar el modal
function getSelectedCategories() {
    const checkboxes = document.querySelectorAll('#categories-modal input[type="checkbox"]:checked');
    return Array.from(checkboxes).map(checkbox => checkbox.value);
}

// Cerrar modal con tecla Escape
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        const modal = document.getElementById('categories-modal');
        if (modal && modal.classList.contains('active')) {
            closeCategoriesModal();
        }
    }
});
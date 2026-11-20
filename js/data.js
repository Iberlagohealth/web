// ================================================================
// CONTENIDO EDITABLE DE LA WEB
// Añade las entradas nuevas al PRINCIPIO de cada lista.
// Conserva las comas y las comillas tal como aparecen en los ejemplos.
// Consulta EDITAR_WEB.md para instrucciones paso a paso.
// ================================================================

const PUBLICATIONS = [
 {year:2026,title:"Predicting myxomatosis distribution in Iberian hares (<em>Lepus granatensis</em>) through active surveillance",journal:"Preventive Veterinary Medicine 257:107044",doi:"10.1016/j.prevetmed.2026.107044",authors:"Cardoso B. et al."},
 {year:2026,title:"High Nasal Carriage of MRSA-mecC in Wild Rabbits in the Iberian Peninsula: a Wildlife Reservoir?",journal:"Microbial Ecology",doi:"10.1007/s00248-026-02713-6",authors:"González-Azcona C. et al."},
 {year:2026,title:"Temporal Dynamics and Turnover of Rabbit Hemorrhagic Disease Virus 2 (RHDV2/GI.2) in Wild Lagomorphs from Northeastern Spain",journal:"Microbial Ecology 89:89",doi:"10.1007/s00248-026-02746-x",authors:"Estruch J. et al."},
 {year:2026,title:"Seroprevalence responses to RHDV variants in wild European rabbits: evidence of resilience in the Iberian Peninsula",journal:"Mammalian Biology 106:1–8",doi:"10.1007/s42991-025-00532-9",authors:"Aguayo-Adán J.A. et al."},
 {year:2026,title:"Enrichment and Reduction of Microsatellite Regions in the Myxoma Virus Genome Following Species Jump to the Iberian Hare",journal:"Transboundary and Emerging Diseases 2026:3847131",doi:"10.1155/tbed/3847131",authors:"Menéndez-Manjón A. et al."},
 {year:2025,title:"Toxoplasmosis in the European brown hare: pathology, strain genotyping and population exposure within the Iberian distribution range",journal:"European Journal of Wildlife Research 71:90",doi:"10.1007/s10344-025-01966-9",authors:"Estruch J. et al."},
 {year:2025,title:"Changes in gut microbiota signatures associated with the epidemiological dynamics of wild European rabbits facing haemorrhagic disease outbreaks",journal:"Veterinary Microbiology 310:110688",doi:"10.1016/j.vetmic.2025.110688",authors:"Rouco C. et al."},
 {year:2025,title:"Estimating the diagnostic performance of serological assays for emerging pathogens using a Bayesian approach: Myxoma virus in the Iberian hare",journal:"Preventive Veterinary Medicine 239:106488",doi:"10.1016/j.prevetmed.2025.106488",authors:"Cardoso B. et al."},
 {year:2025,title:"Exposure to West Nile virus in wild lagomorphs in Spanish Mediterranean ecosystems",journal:"Zoonoses and Public Health 72:207–214",doi:"10.1111/zph.13200",authors:"Castro-Scholten S. et al."},
 {year:2025,title:"Culturomics profiling of nasal cavities of European wild rabbits on the Iberian Peninsula: Antimicrobial resistance and detection of microorganisms of public health interest",journal:"Pathogens 14:317",doi:"10.3390/pathogens14040317",authors:"González-Azcona C. et al."},
 {year:2025,title:"Epidemiological surveillance of myxoma virus in European hares in the Iberian Peninsula: First evidence of infection by the emerging ha-MYXV",journal:"Veterinary Microbiology 302:110405",doi:"10.1016/j.vetmic.2025.110405",authors:"Cardoso B. et al."},
 {year:2024,title:"<em>Francisella tularensis</em> in Wild Lagomorphs in Southern Spain’s Mediterranean Ecosystems",journal:"Animals 14:3376",doi:"10.3390/ani14233376",authors:"Castro-Scholten S. et al."},
 {year:2024,title:"Absence of Crimean-Congo hemorrhagic fever virus in wild lagomorphs and their ticks in Spanish Mediterranean ecosystems",journal:"Veterinary Microbiology 298:110217",doi:"10.1016/j.vetmic.2024.110217",authors:"Castro-Scholten S. et al."}
];

const ACTIVITIES = [
 {year:2026,date:"22–26 Jun",type:"oral",place:"Sevilla, España",event:"8th World Lagomorph Conference",title:"<em>Coxiella burnetii</em> exposure in wild lagomorphs in the Iberian Peninsula"},
 {year:2026,date:"22–26 Jun",type:"oral",place:"Sevilla, España",event:"8th World Lagomorph Conference",title:"Serological study of <em>Encephalitozoon cuniculi</em> in domestic and wild lagomorphs in the Iberian Peninsula"},
 {year:2026,date:"22–26 Jun",type:"oral",place:"Sevilla, España",event:"8th World Lagomorph Conference",title:"Hepatitis E Virus in Farmed Rabbits in the Iberian Peninsula: Seroepidemiology and Risk Factors"},
 {year:2026,date:"22–26 Jun",type:"oral",place:"Sevilla, España",event:"8th World Lagomorph Conference",title:"Long-term spatial monitoring of <em>Leishmania infantum</em> in European wild rabbits"},
 {year:2026,date:"22–26 Jun",type:"oral",place:"Sevilla, España",event:"8th World Lagomorph Conference",title:"Epidemiological study of zoonotic diseases in wild lagomorphs from a One Health perspective"},
 {year:2026,date:"22–26 Jun",type:"oral",place:"Sevilla, España",event:"8th World Lagomorph Conference",title:"Antigenic Relationships Among RHDV, RHDV2 and EBHSV in Iberian Hares"},
 {year:2026,date:"18–19 Jun",type:"oral",place:"Jaén, España",event:"VI Congreso Andaluz de Salud Pública Veterinaria",title:"Estudio seroepidemiológico de <em>Sarcoptes scabiei</em> en lagomorfos de la Península Ibérica"},
 {year:2026,date:"7–9 May",type:"oral",place:"Valencia, España",event:"IV Congreso Internacional de Sanidad y Bienestar Animal",title:"Estudio seroepidemiológico de <em>Encephalitozoon cuniculi</em> en lagomorfos de la Península Ibérica"},
 {year:2026,date:"17–21 Apr",type:"oral",place:"Múnich, Alemania",event:"36th ESCMID Congress",title:"Prevalence and characterization of non-<em>S. aureus</em> staphylococcal microbiota from European wild rabbits"},
 {year:2026,date:"30 Sep",type:"invited",place:"Marchamalo, España",event:"Jornada sobre la liebre ibérica: Presente y Futuro",title:"Mixomatosis en liebres ibéricas: siete años de investigación y vigilancia"},
 {year:2026,date:"26 Feb",type:"invited",place:"Córdoba, España",event:"Seminarios CIBERINFEC",title:"Vigilancia epidemiológica en fauna silvestre: proyecto Iber-LagoHealth"},
 {year:2026,date:"21 Mar",type:"invited",place:"Cabra, España",event:"Jornada de formación",title:"Principales enfermedades que afectan a los lagomorfos"},
 {year:2025,date:"5–8 Dec",type:"oral",place:"Évora, Portugal",event:"XVII Congreso Internacional SECEM",title:"Iber-LagoHealth: Exploring the role of lagomorphs in the epidemiology of transmissible pathogens"},
 {year:2025,date:"2–5 Sep",type:"poster",place:"Sevilla, España",event:"International Congress of the Spanish Society of Ethology and Evolutionary Ecology",title:"Serological and demographic divergence between <em>O. c. algirus</em> and <em>O. c. cuniculus</em>"},
 {year:2025,date:"22–24 May",type:"oral",place:"Málaga, España",event:"XXVIII Congreso SEEIMC",title:"Caracterización fenotípica y genotípica de <em>Staphylococcus</em> y <em>Mammaliicoccus</em> en conejos silvestres"},
 {year:2025,date:"11–15 Apr",type:"poster",place:"Viena, Austria",event:"35th ESCMID Congress",title:"High prevalence of mecC-carrying <em>S. aureus</em> isolates in nasal microbiota of wild rabbits"},
 {year:2025,date:"1–3 Apr",type:"invited",place:"Faro, Portugal",event:"European Rabbit International Workshop",title:"LagoHealth Project: the European wild rabbit and zoonotic pathogens in Southern Spain"},
 {year:2025,date:"1–3 Apr",type:"invited",place:"Faro, Portugal",event:"European Rabbit International Workshop",title:"Advances and challenges in Myxomatosis and Rabbit Haemorrhagic Disease"},
 {year:2025,date:"5–7 Feb",type:"poster",place:"Córdoba, España",event:"I Congreso Internacional ENZOEM",title:"Detection of microorganisms of public health interest from the nasal microbiota of wild rabbits"},
 {year:2024,date:"14–16 Nov",type:"oral",place:"Madrid, España",event:"III Congreso Internacional de Sanidad y Bienestar Animal",title:"Exposición al virus West Nile en lagomorfos silvestres del sur de España"}
];

// Noticias bilingües. El campo link es opcional: usa "" si no hay enlace.
const NEWS = [
 {date:"6 octubre 2026",dateEn:"6 October 2026",titleEs:"Nuevo mapa de riesgo de mixomatosis en la liebre ibérica",titleEn:"New risk map for myxomatosis in Iberian hares",textEs:"Un nuevo trabajo de Iber-LagoHealth combina la vigilancia activa de 647 liebres ibéricas con los brotes notificados en 454 municipios para predecir la distribución actual de la mixomatosis. El modelo identifica áreas de alto riesgo, principalmente en el sur de la Península, y municipios sin brotes comunicados previamente.",textEn:"A new Iber-LagoHealth study combines active surveillance of 647 Iberian hares with outbreaks reported in 454 municipalities to predict the current distribution of myxomatosis. The model identifies high-risk areas, mainly in the southern Iberian Peninsula, and municipalities with no previously reported outbreaks.",link:"https://www.sciencedirect.com/science/article/pii/S0167587726002631",linkTextEs:"Leer el artículo",linkTextEn:"Read the article"},
 {date:"22–26 junio 2026",dateEn:"22–26 June 2026",titleEs:"Iber-LagoHealth en la 8th World Lagomorph Conference",titleEn:"Iber-LagoHealth at the 8th World Lagomorph Conference",textEs:"El equipo presentó distintos resultados del proyecto sobre patógenos, vigilancia epidemiológica y salud de los lagomorfos ibéricos.",textEn:"The team presented project results on pathogens, epidemiological surveillance and the health of Iberian lagomorphs.",link:"",linkTextEs:"",linkTextEn:""},
 {date:"2025",dateEn:"2025",titleEs:"Publicado el estudio sobre microbiota y susceptibilidad a RHDV2",titleEn:"Study on microbiota and susceptibility to RHDV2 published",textEs:"El trabajo analiza los cambios en la microbiota intestinal asociados a la dinámica epidemiológica de la enfermedad hemorrágica del conejo.",textEn:"The study examines changes in gut microbiota associated with the epidemiological dynamics of rabbit haemorrhagic disease.",link:"https://doi.org/10.1016/j.vetmic.2025.110688",linkTextEs:"Leer el artículo",linkTextEn:"Read the article"}
];

// Vídeos de objetivos. Usa youtubeId para un vídeo alojado en YouTube o src
// para un MP4 local. poster solo se utiliza con vídeos MP4.
const OBJECTIVE_VIDEOS = [
 {objective:1,youtubeId:"L9AscayqJBo",src:"",poster:"",titleEs:"Iber-LagoHealth: Mapeando los virus que amenazan a conejos y liebres en la Península Ibérica",titleEn:"Iber-LagoHealth: Mapping the viruses threatening rabbits and hares in the Iberian Peninsula",descriptionEs:[
  "¿Qué virus están afectando a los conejos y las liebres de la Península Ibérica y cómo están evolucionando? El primer objetivo de Iber-LagoHealth busca responder a estas preguntas mediante el estudio de la mixomatosis y la enfermedad hemorrágica vírica, dos de las principales amenazas sanitarias para los lagomorfos ibéricos.",
  "En 2018, una nueva variante del virus de la mixomatosis, el ha-MYXV, saltó del conejo a la liebre ibérica. Para conocer su distribución, evolución y posibles factores de riesgo, el proyecto divide la Península en seis regiones epidemiológicas y analiza más de 2.000 conejos silvestres y cerca de 1.000 liebres. Se buscan anticuerpos y material genético de los virus y se estudian los factores que pueden hacer a las poblaciones más vulnerables.",
  "Además, en colaboración con la Universidad de Oviedo, se secuencian genomas completos para conocer cómo cambian estos virus, cómo se propagan y si aparecen nuevas variantes.",
  "El resultado será un mapa epidemiológico de los principales virus que afectan a los lagomorfos ibéricos, una herramienta clave para proteger la biodiversidad, apoyar al sector cunícola y anticipar riesgos desde una perspectiva One Health.",
  "Proyecto financiado por la Agencia Estatal de Investigación del Ministerio de Ciencia, Innovación y Universidades y por la Unión Europea, en el marco de la convocatoria de Proyectos de Generación de Conocimiento."
 ],descriptionEn:[
  "Which viruses are affecting rabbits and hares in the Iberian Peninsula, and how are they evolving? Iber-LagoHealth's first objective addresses these questions by studying myxomatosis and rabbit haemorrhagic disease, two of the main health threats to Iberian lagomorphs.",
  "In 2018, a new myxoma virus variant, ha-MYXV, jumped from rabbits to Iberian hares. To understand its distribution, evolution and potential risk factors, the project divides the Peninsula into six epidemiological regions and analyses more than 2,000 wild rabbits and nearly 1,000 hares. Researchers look for antibodies and viral genetic material and study the factors that may make populations more vulnerable.",
  "In collaboration with the University of Oviedo, complete viral genomes are also sequenced to understand how these viruses change and spread and whether new variants emerge.",
  "The result will be an epidemiological map of the main viruses affecting Iberian lagomorphs: a key tool for protecting biodiversity, supporting the rabbit-farming sector and anticipating risks from a One Health perspective.",
  "Project funded by the Spanish State Research Agency of the Ministry of Science, Innovation and Universities and by the European Union, under the Knowledge Generation Projects call."
 ]},
 {objective:2,youtubeId:"yDGBF877XxU",src:"",poster:"",titleEs:"Iber-LagoHealth: Conejos, liebres y enfermedades zoonóticas",titleEn:"Iber-LagoHealth: Rabbits, hares and zoonotic diseases",descriptionEs:[
  "Los conejos y las liebres pueden participar en la circulación de más de veinte patógenos zoonósicos, transmitidos de forma directa o mediante vectores, con posibles implicaciones para la salud humana y animal.",
  "Iber-LagoHealth analiza muestras de cerca de 2.000 conejos y liebres silvestres, 400 conejos de granja de España y Portugal y 250 conejos de compañía. Mediante la búsqueda de material genético y anticuerpos, el proyecto estudia agentes relacionados con la hepatitis E, salmonelosis, brucelosis, toxoplasmosis, fiebre Q, tularemia y leishmaniosis, entre otros.",
  "El análisis combina poblaciones silvestres, productivas y domésticas para comprender mejor la distribución de estos patógenos y los factores asociados a su transmisión. En Andalucía, parte del trabajo se desarrolla en coordinación con el proyecto LagoHealth.",
  "Esta visión comparada permitirá valorar el papel real de los lagomorfos en la epidemiología de las zoonosis y mejorar la vigilancia sanitaria desde una perspectiva One Health.",
  "Proyecto financiado por la Agencia Estatal de Investigación del Ministerio de Ciencia, Innovación y Universidades y por la Unión Europea, en el marco de la convocatoria de Proyectos de Generación de Conocimiento."
 ],descriptionEn:[
  "Rabbits and hares may participate in the circulation of more than twenty zoonotic pathogens, transmitted directly or through vectors, with potential implications for human and animal health.",
  "Iber-LagoHealth analyses samples from nearly 2,000 wild rabbits and hares, 400 farmed rabbits from Spain and Portugal, and 250 pet rabbits. By detecting genetic material and antibodies, the project studies agents associated with hepatitis E, salmonellosis, brucellosis, toxoplasmosis, Q fever, tularemia and leishmaniosis, among others.",
  "The analysis combines wild, farmed and domestic populations to better understand pathogen distribution and the factors associated with transmission. In Andalusia, part of this work is carried out in coordination with the LagoHealth project.",
  "This comparative perspective will help assess the true role of lagomorphs in zoonotic-disease epidemiology and improve health surveillance from a One Health perspective.",
  "Project funded by the Spanish State Research Agency of the Ministry of Science, Innovation and Universities and by the European Union, under the Knowledge Generation Projects call."
 ]},
 {objective:3,youtubeId:"WOmdYl9yiVk",src:"",poster:"",titleEs:"Iber-LagoHealth: Microbiota intestinal y resistencia a antibióticos en conejos y liebres",titleEn:"Iber-LagoHealth: Gut microbiota and antibiotic resistance in rabbits and hares",descriptionEs:[
  "La microbiota intestinal desempeña un papel esencial en la salud y la respuesta inmunitaria. Iber-LagoHealth estudia si su composición puede estar relacionada con la susceptibilidad de conejos y liebres a enfermedades como la enfermedad hemorrágica vírica y la mixomatosis.",
  "El proyecto compara animales infectados, individuos expuestos que han sobrevivido y poblaciones que nunca han estado en contacto con estos virus. El objetivo es identificar posibles biomarcadores asociados a la resistencia o vulnerabilidad frente a la enfermedad.",
  "También se analiza la presencia de genes de resistencia a los antibióticos. La fauna silvestre puede actuar como centinela de la contaminación ambiental y ayudar a comprender cómo circulan estas resistencias entre el medio ambiente, los animales y las personas.",
  "El estudio incluye conejos y liebres silvestres, animales de granja y conejos de compañía de toda la Península Ibérica, comparando ambientes naturales y humanizados para obtener una visión integral desde el enfoque One Health.",
  "Proyecto financiado por la Agencia Estatal de Investigación del Ministerio de Ciencia, Innovación y Universidades y por la Unión Europea, en el marco de la convocatoria de Proyectos de Generación de Conocimiento."
 ],descriptionEn:[
  "Gut microbiota plays an essential role in health and immune response. Iber-LagoHealth studies whether its composition may be related to the susceptibility of rabbits and hares to diseases such as rabbit haemorrhagic disease and myxomatosis.",
  "The project compares infected animals, exposed individuals that survived and populations that have never encountered these viruses. The aim is to identify potential biomarkers associated with resistance or vulnerability to disease.",
  "The presence of antibiotic-resistance genes is also analysed. Wildlife can act as a sentinel of environmental contamination and help reveal how resistance circulates among the environment, animals and people.",
  "The study includes wild rabbits and hares, farmed animals and pet rabbits from across the Iberian Peninsula, comparing natural and human-influenced environments to provide an integrated One Health perspective.",
  "Project funded by the Spanish State Research Agency of the Ministry of Science, Innovation and Universities and by the European Union, under the Knowledge Generation Projects call."
 ]},
 {objective:4,youtubeId:"k3fEsiduLd0",src:"",poster:"",titleEs:"Iber-LagoHealth: Vigilancia sanitaria de conejos y liebres: anticiparse a las enfermedades",titleEn:"Iber-LagoHealth: Health surveillance of rabbits and hares: anticipating disease",descriptionEs:[
  "Iber-LagoHealth desarrolla nuevas estrategias de vigilancia sanitaria y epidemiológica para detectar cambios, anticipar brotes y conocer mejor la evolución de las enfermedades que afectan a conejos y liebres.",
  "El trabajo se estructura en cinco líneas: muestras sencillas y económicas mediante tarjetas que permiten conservar sangre sin refrigeración; seguimiento longitudinal de poblaciones de conejo del sur de Portugal con animales identificados individualmente; monitorización de la abundancia en entre 10 y 15 poblaciones de conejos y liebres; elaboración de mapas de riesgo integrando clima, humedad, usos del suelo, distribución y abundancia; y creación de una red centinela en España y Portugal que combine vigilancia pasiva, ciencia ciudadana, vigilancia activa y seguimiento poblacional.",
  "Estas herramientas permitirán construir sistemas de alerta temprana, detectar cambios antes de que se conviertan en problemas de gran escala y consolidar a los lagomorfos como centinelas de la salud de los ecosistemas.",
  "Proyecto financiado por la Agencia Estatal de Investigación del Ministerio de Ciencia, Innovación y Universidades y por la Unión Europea, en el marco de la convocatoria de Proyectos de Generación de Conocimiento."
 ],descriptionEn:[
  "Iber-LagoHealth develops new health and epidemiological surveillance strategies to detect change, anticipate outbreaks and better understand the evolution of diseases affecting rabbits and hares.",
  "The work is organised around five lines: simple, low-cost sampling using cards that preserve blood without refrigeration; longitudinal monitoring of rabbit populations in southern Portugal with individually identified animals; abundance monitoring in 10 to 15 rabbit and hare populations; risk mapping that integrates climate, humidity, land use, distribution and abundance; and a sentinel network in Spain and Portugal combining passive surveillance, citizen science, active surveillance and population monitoring.",
  "These tools will support early-warning systems, detect changes before they become large-scale problems and strengthen the role of lagomorphs as sentinels of ecosystem health.",
  "Project funded by the Spanish State Research Agency of the Ministry of Science, Innovation and Universities and by the European Union, under the Knowledge Generation Projects call."
 ]}
];

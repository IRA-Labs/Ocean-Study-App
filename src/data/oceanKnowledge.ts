export type TopicCategory =
  | 'Ocean Systems'
  | 'Marine Life'
  | 'Climate'
  | 'Exploration'
  | 'Conservation'
  | 'Ocean Motion'
  | 'Seafloor'
  | 'Human Ocean';

export type OceanTopic = {
  id: string;
  title: string;
  category: TopicCategory;
  summary: string;
  depth: string;
  timeToRead: string;
  highlight: string;
  tags: string[];
  articleIds: string[];
  sourceLabel: string;
  sourceUrl: string;
};

export type OceanArticle = {
  id: string;
  topicId: string;
  title: string;
  subtitle: string;
  readingTime: string;
  difficulty: 'Starter' | 'Intermediate';
  heroImage: 'ocean-hero' | 'ocean-depths';
  keyTakeaways: string[];
  sections: {
    heading: string;
    body: string;
  }[];
  sourceLabel: string;
  sourceUrl: string;
};

export type QuizQuestion = {
  id: string;
  topicId: string;
  prompt: string;
  answers: string[];
  correctAnswer: number;
  explanation: string;
};

export type OceanFactCard = {
  id: string;
  title: string;
  fact: string;
  whyItMatters: string;
  sourceLabel: string;
  sourceUrl: string;
};

export type GlossaryEntry = {
  term: string;
  definition: string;
  example: string;
};

export type LearningModule = {
  id: string;
  title: string;
  goal: string;
  lessons: string[];
};

export const oceanTopics: OceanTopic[] = [
  {
    id: 'ocean-zones',
    title: 'Ocean Zones',
    category: 'Ocean Systems',
    summary:
      'Follow sunlight, pressure, temperature, and food from the bright surface into the deep ocean.',
    depth: 'Surface to hadal trenches',
    timeToRead: '12 min',
    highlight:
      'Ocean zones are a map for thinking: each layer changes light, pressure, temperature, oxygen, food, and survival strategies.',
    tags: ['sunlight', 'pressure', 'habitats', 'deep sea'],
    articleIds: ['reading-ocean-zones', 'pressure-and-light'],
    sourceLabel: 'NOAA Ocean Exploration',
    sourceUrl: 'https://oceanexplorer.noaa.gov/ocean-fact/explored/',
  },
  {
    id: 'coral-reef-cities',
    title: 'Coral Reef Cities',
    category: 'Marine Life',
    summary:
      'Learn how reefs build shelter, nursery grounds, food-web links, and some of the most crowded marine neighborhoods.',
    depth: 'Mostly shallow tropical seas',
    timeToRead: '14 min',
    highlight:
      'A reef is not only scenery. It is architecture made by life, and that architecture supports many other living things.',
    tags: ['reef', 'biodiversity', 'symbiosis', 'nurseries'],
    articleIds: ['reef-cities', 'reef-stress'],
    sourceLabel: 'NOAA Coral Reef Conservation Program',
    sourceUrl: 'https://coralreef.noaa.gov/',
  },
  {
    id: 'ocean-and-climate',
    title: 'Ocean and Climate',
    category: 'Climate',
    summary:
      'Understand how the ocean stores heat, exchanges carbon dioxide, drives weather patterns, and changes sea level.',
    depth: 'Global ocean system',
    timeToRead: '16 min',
    highlight:
      'The ocean is Earth climate engine: it stores heat, moves energy, exchanges gases, and shapes weather and coastlines.',
    tags: ['heat', 'carbon', 'currents', 'sea level'],
    articleIds: ['ocean-heat-engine', 'carbon-cycle'],
    sourceLabel: 'NASA Science',
    sourceUrl: 'https://science.nasa.gov/earth/explore/the-ocean-and-climate-change/',
  },
  {
    id: 'tools-of-exploration',
    title: 'Tools of Exploration',
    category: 'Exploration',
    summary:
      'Compare satellites, ships, sonar, floats, gliders, remotely operated vehicles, and crewed submersibles.',
    depth: 'Surface to abyss',
    timeToRead: '13 min',
    highlight:
      'Ocean knowledge depends on tools. Every map, sample, and image is shaped by what the instrument can sense.',
    tags: ['ROV', 'sonar', 'satellites', 'sampling'],
    articleIds: ['mapping-the-seafloor', 'robotic-explorers'],
    sourceLabel: 'NOAA Ocean Exploration',
    sourceUrl: 'https://oceanexplorer.noaa.gov/technology/technology.html',
  },
  {
    id: 'protecting-blue-habitats',
    title: 'Protecting Blue Habitats',
    category: 'Conservation',
    summary:
      'Study why mangroves, seagrasses, reefs, estuaries, and open-ocean systems need different protection strategies.',
    depth: 'Coasts to open ocean',
    timeToRead: '13 min',
    highlight:
      'Healthy ocean habitats protect biodiversity, coastlines, food systems, culture, and future learning opportunities.',
    tags: ['habitats', 'resilience', 'stewardship', 'restoration'],
    articleIds: ['blue-habitat-protection', 'everyday-ocean-actions'],
    sourceLabel: 'UNESCO Ocean Literacy',
    sourceUrl: 'https://oceanliteracy.unesco.org/about',
  },
  {
    id: 'currents-waves-tides',
    title: 'Currents, Waves, and Tides',
    category: 'Ocean Motion',
    summary:
      'See how wind, gravity, density, Earth rotation, and coastline shape keep seawater moving.',
    depth: 'Surface, coast, and deep circulation',
    timeToRead: '12 min',
    highlight:
      'The ocean is never still. Motion moves heat, nutrients, larvae, plastic, ships, and risk across the planet.',
    tags: ['currents', 'waves', 'tides', 'energy'],
    articleIds: ['ocean-in-motion', 'tides-and-coasts'],
    sourceLabel: 'Smithsonian Ocean',
    sourceUrl: 'https://ocean.si.edu/planet-ocean/tides-currents/currents-waves-and-tides',
  },
  {
    id: 'seafloor-story',
    title: 'The Seafloor Story',
    category: 'Seafloor',
    summary:
      'Explore mid-ocean ridges, trenches, seamounts, sediments, hydrothermal vents, and underwater landslides.',
    depth: 'Continental shelf to trenches',
    timeToRead: '15 min',
    highlight:
      'The seafloor records plate motion, climate history, habitat patterns, hazards, and unexplored landscapes.',
    tags: ['trenches', 'vents', 'plate tectonics', 'sediments'],
    articleIds: ['seafloor-landscapes', 'hydrothermal-vents'],
    sourceLabel: 'NOAA Ocean Exploration',
    sourceUrl: 'https://oceanexplorer.noaa.gov/facts/plate-boundaries.html',
  },
  {
    id: 'pollution-and-plastics',
    title: 'Pollution and Plastics',
    category: 'Human Ocean',
    summary:
      'Understand marine debris, microplastics, nutrient runoff, low oxygen, and the difference between cleanup and prevention.',
    depth: 'Rivers, coasts, surface, and deep sea',
    timeToRead: '14 min',
    highlight:
      'Pollution moves through watersheds into the ocean, so ocean protection begins far from the shoreline too.',
    tags: ['marine debris', 'microplastics', 'runoff', 'prevention'],
    articleIds: ['marine-debris-pathways', 'ocean-acidification-basics'],
    sourceLabel: 'NOAA Education',
    sourceUrl: 'https://www.noaa.gov/education/resource-collections/ocean-coasts/ocean-pollution',
  },
];

export const oceanArticles: OceanArticle[] = [
  {
    id: 'reading-ocean-zones',
    topicId: 'ocean-zones',
    title: 'Reading the Ocean in Layers',
    subtitle: 'Use sunlight, pressure, temperature, and food supply to understand why ocean life changes with depth.',
    readingTime: '7 min',
    difficulty: 'Starter',
    heroImage: 'ocean-depths',
    keyTakeaways: [
      'The ocean is one connected body of water, but conditions change dramatically with depth.',
      'Sunlight powers most surface food webs and fades quickly below the upper ocean.',
      'Deep-sea life depends on falling organic matter, chemosynthesis, migration, and efficient energy use.',
    ],
    sections: [
      {
        heading: 'The surface is an energy gateway',
        body:
          'Near the surface, sunlight, wind, waves, and gas exchange connect the ocean to the atmosphere. Microscopic phytoplankton can photosynthesize here, turning light and dissolved nutrients into the base of many marine food webs. This surface layer is also where satellites can observe color, temperature, sea level, and some movement patterns.',
      },
      {
        heading: 'The twilight zone changes the rules',
        body:
          'As light fades, animals can no longer rely on photosynthesis happening around them. Many organisms migrate upward at night to feed and sink back down by day to avoid predators. This daily movement helps transport carbon and energy from the surface into deeper water.',
      },
      {
        heading: 'Deep water is not empty',
        body:
          'The deep ocean has darkness, cold water, high pressure, and limited food, but it also contains remarkable habitats. Some animals use bioluminescence, slow metabolism, soft bodies, huge mouths, or extreme patience. Around vents and seeps, chemical energy can support communities without sunlight.',
      },
      {
        heading: 'Why zones help learners',
        body:
          'Ocean zones are a thinking tool. Instead of memorizing names, ask what changes with depth: light, pressure, temperature, oxygen, food, and distance from land. Those variables explain much of the biology and engineering challenge.',
      },
    ],
    sourceLabel: 'NOAA Ocean Exploration',
    sourceUrl: 'https://oceanexplorer.noaa.gov/ocean-fact/explored/',
  },
  {
    id: 'pressure-and-light',
    topicId: 'ocean-zones',
    title: 'Pressure, Light, and Design',
    subtitle: 'Why deep-sea science depends on engineering as much as observation.',
    readingTime: '6 min',
    difficulty: 'Starter',
    heroImage: 'ocean-hero',
    keyTakeaways: [
      'Water pressure increases quickly as depth increases.',
      'Deep-sea vehicles need pressure-resistant housings, seals, lights, and communication systems.',
      'The tools used to observe the ocean shape what scientists are able to notice.',
    ],
    sections: [
      {
        heading: 'Pressure is invisible but powerful',
        body:
          'At depth, the weight of all the water above presses on instruments, animals, and vehicles. Human bodies cannot survive unprotected at deep-sea pressures, and ordinary electronics, windows, and batteries would fail without special design.',
      },
      {
        heading: 'Light becomes part of the instrument',
        body:
          'In dark water, cameras only see what lights reveal. Light placement, brightness, color, and movement can change what is visible and how animals respond. Deep-sea images are therefore both observations and engineered scenes.',
      },
      {
        heading: 'Communication is difficult underwater',
        body:
          'Radio waves do not travel through seawater the way they do through air. Ocean teams often rely on cables, acoustics, autonomous instructions, or later data recovery. This affects how missions are planned and how quickly scientists can respond.',
      },
    ],
    sourceLabel: 'NOAA Ocean Exploration',
    sourceUrl: 'https://oceanexplorer.noaa.gov/technology/subs/subs.html',
  },
  {
    id: 'reef-cities',
    topicId: 'coral-reef-cities',
    title: 'Why Reefs Feel Like Cities',
    subtitle: 'Coral reefs create structure, shelter, nurseries, feeding grounds, and crowded ecological neighborhoods.',
    readingTime: '7 min',
    difficulty: 'Starter',
    heroImage: 'ocean-hero',
    keyTakeaways: [
      'Reefs are built by living coral animals and their calcium carbonate skeletons.',
      'Complex reef shapes create habitat for many species.',
      'A reef works through relationships among corals, algae, fish, invertebrates, microbes, and water conditions.',
    ],
    sections: [
      {
        heading: 'Structure creates opportunity',
        body:
          'The ridges, branches, holes, ledges, and slopes of a reef create places to hide, hunt, graze, reproduce, and grow. More structure can mean more ecological niches, which is one reason reefs can support such dense communities.',
      },
      {
        heading: 'Corals are animals with partners',
        body:
          'Many reef-building corals live with photosynthetic algae in their tissues. The coral provides shelter and nutrients; the algae provide energy from sunlight. This partnership helps build reefs but can be disrupted by stress.',
      },
      {
        heading: 'Food webs are layered',
        body:
          'Reef food webs include tiny plankton, algae grazers, filter feeders, predators, scavengers, cleaners, and decomposers. A change in one group can affect many others, so reef health is about relationships, not a single species.',
      },
    ],
    sourceLabel: 'NOAA Coral Reef Conservation Program',
    sourceUrl: 'https://coralreef.noaa.gov/',
  },
  {
    id: 'reef-stress',
    topicId: 'coral-reef-cities',
    title: 'Reef Stress Signals',
    subtitle: 'How heat, acidification, pollution, disease, and physical damage can affect reef communities.',
    readingTime: '7 min',
    difficulty: 'Intermediate',
    heroImage: 'ocean-depths',
    keyTakeaways: [
      'Stress can disrupt coral-algae partnerships and reduce reef growth.',
      'Land-based runoff, sediment, and pollution can make reef recovery harder.',
      'Healthy, connected habitats and reduced local stress can improve resilience.',
    ],
    sections: [
      {
        heading: 'Bleaching is a warning sign',
        body:
          'When corals are stressed, they may lose the symbiotic algae that give them much of their color and energy. Bleaching does not always mean immediate death, but repeated or severe bleaching can weaken reefs.',
      },
      {
        heading: 'Acidification affects skeleton builders',
        body:
          'As more carbon dioxide dissolves into seawater, chemistry changes can make it harder for some organisms to build and maintain shells or skeletons. Coral growth and reef structure can be affected over time.',
      },
      {
        heading: 'Local pressure still matters',
        body:
          'Even when global climate stress is important, local actions can reduce pollution, anchor damage, overuse, and sediment runoff. This can give reefs a better chance to recover after disturbance.',
      },
    ],
    sourceLabel: 'NOAA Coral Reef Conservation Program',
    sourceUrl: 'https://oceanservice.noaa.gov/facts/coralreef-climate.html',
  },
  {
    id: 'ocean-heat-engine',
    topicId: 'ocean-and-climate',
    title: 'The Ocean as a Heat Engine',
    subtitle: 'How seawater stores, transports, and releases heat across the planet.',
    readingTime: '8 min',
    difficulty: 'Starter',
    heroImage: 'ocean-depths',
    keyTakeaways: [
      'The ocean stores a large share of excess heat in the climate system.',
      'Currents move heat between the tropics, poles, surface, and deep ocean.',
      'Ocean heat affects weather, sea level, ecosystems, and storms.',
    ],
    sections: [
      {
        heading: 'Water stores heat slowly and deeply',
        body:
          'Water can absorb a large amount of heat before changing temperature. Because the ocean is deep and constantly moving, heat can be stored near the surface, mixed downward, or carried far away by currents.',
      },
      {
        heading: 'Currents move climate signals',
        body:
          'Warm and cold currents help redistribute energy. They influence fog, rainfall, storms, marine productivity, and regional climate. A coastline can be cool or warm partly because of the water moving nearby.',
      },
      {
        heading: 'Heat affects sea level too',
        body:
          'Warm water expands. Along with water added from melting land ice, thermal expansion contributes to sea-level rise. Local sea level also depends on land motion, winds, currents, and coastline shape.',
      },
    ],
    sourceLabel: 'NASA Science',
    sourceUrl: 'https://science.nasa.gov/earth/explore/the-ocean-and-climate-change/',
  },
  {
    id: 'carbon-cycle',
    topicId: 'ocean-and-climate',
    title: 'Ocean Carbon Pathways',
    subtitle: 'How carbon moves between air, seawater, organisms, shells, particles, and sediments.',
    readingTime: '8 min',
    difficulty: 'Intermediate',
    heroImage: 'ocean-hero',
    keyTakeaways: [
      'The ocean exchanges carbon dioxide with the atmosphere.',
      'Marine organisms move carbon through food webs and sinking particles.',
      'Carbon storage depends on chemistry, circulation, biology, and time scale.',
    ],
    sections: [
      {
        heading: 'Carbon crosses the surface',
        body:
          'Carbon dioxide can move between air and seawater. Whether the ocean takes up or releases carbon depends on temperature, wind, mixing, biology, and the difference between air and water chemistry.',
      },
      {
        heading: 'Life changes carbon routes',
        body:
          'Phytoplankton use carbon during photosynthesis. Some carbon moves through food webs, some returns quickly through respiration, and some sinks as dead cells, waste, shells, or aggregates.',
      },
      {
        heading: 'Storage is not one thing',
        body:
          'Some carbon is stored for days or months near the surface. Some reaches deep water or sediments and stays away from the atmosphere much longer. Ocean carbon is a set of pathways, not a single tank.',
      },
    ],
    sourceLabel: 'NASA Science',
    sourceUrl: 'https://science.nasa.gov/earth/explore/the-ocean-and-climate-change/',
  },
  {
    id: 'mapping-the-seafloor',
    topicId: 'tools-of-exploration',
    title: 'Mapping the Seafloor',
    subtitle: 'How sound helps researchers understand underwater landscapes that light cannot reveal from the surface.',
    readingTime: '6 min',
    difficulty: 'Starter',
    heroImage: 'ocean-depths',
    keyTakeaways: [
      'Sonar can estimate seafloor depth and shape using sound.',
      'Maps guide dive planning, habitat discovery, hazard awareness, and conservation.',
      'Better maps often reveal features that change scientific questions.',
    ],
    sections: [
      {
        heading: 'Sound is a measuring tool',
        body:
          'Research vessels can send sound pulses into the water and measure the returning echo. Timing and direction help estimate depth and build maps of underwater terrain.',
      },
      {
        heading: 'Maps are more than pictures',
        body:
          'A seafloor map can show ridges, canyons, vents, slopes, sediment plains, and possible habitats. Scientists use maps to choose sampling locations and understand how geology and life connect.',
      },
      {
        heading: 'Unmapped does not mean unimportant',
        body:
          'Large parts of the ocean remain poorly mapped at high resolution. Each new map can reveal unknown features and improve navigation, hazard planning, and habitat protection.',
      },
    ],
    sourceLabel: 'NOAA Ocean Exploration',
    sourceUrl: 'https://oceanexplorer.noaa.gov/technology/technology.html',
  },
  {
    id: 'robotic-explorers',
    topicId: 'tools-of-exploration',
    title: 'Robotic Ocean Explorers',
    subtitle: 'Why autonomous and remotely operated vehicles are essential ocean science tools.',
    readingTime: '6 min',
    difficulty: 'Starter',
    heroImage: 'ocean-hero',
    keyTakeaways: [
      'Robots extend human reach into deep, distant, dangerous, or long-duration environments.',
      'Sensors collect chemical, physical, acoustic, visual, and biological data.',
      'People still choose the questions, interpret the data, and decide what matters.',
    ],
    sections: [
      {
        heading: 'Different robots solve different problems',
        body:
          'Remotely operated vehicles can be guided by pilots in real time. Autonomous vehicles can follow planned missions over wider areas. Floats, gliders, and drifters can observe the ocean for long periods.',
      },
      {
        heading: 'Sensors create layered observations',
        body:
          'A camera can show visible life and terrain, but sensors can also measure temperature, salinity, oxygen, chemistry, currents, sound, and particles. Combining measurements makes the ocean story richer.',
      },
      {
        heading: 'Exploration is a loop',
        body:
          'A mission often begins with a map, uses robots to observe details, sends samples or data back for analysis, and then raises better questions for the next mission.',
      },
    ],
    sourceLabel: 'NOAA Ocean Exploration',
    sourceUrl: 'https://oceanexplorer.noaa.gov/technology/subs/subs.html',
  },
  {
    id: 'blue-habitat-protection',
    topicId: 'protecting-blue-habitats',
    title: 'Protecting Blue Habitats',
    subtitle: 'Why habitat protection changes from mangroves and seagrass to reefs, estuaries, and open ocean.',
    readingTime: '7 min',
    difficulty: 'Starter',
    heroImage: 'ocean-depths',
    keyTakeaways: [
      'Different habitats provide different benefits and face different pressures.',
      'Protection works best when science, policy, community knowledge, and monitoring connect.',
      'Ocean stewardship includes coastlines, rivers, cities, seafood choices, and climate action.',
    ],
    sections: [
      {
        heading: 'Habitats provide living infrastructure',
        body:
          'Mangroves, marshes, seagrasses, reefs, kelp forests, and estuaries can shelter young animals, store carbon, buffer waves, filter water, and support food webs. These services often overlap with human needs.',
      },
      {
        heading: 'Protection must match the place',
        body:
          'A seagrass meadow may need clear water and reduced boat scarring. A reef may need reduced heat stress and careful tourism. A fish nursery may need watershed management far upstream.',
      },
      {
        heading: 'Monitoring closes the loop',
        body:
          'Protection is not only declaring an area important. It also requires measuring change, listening to communities, updating rules, and learning whether actions are working.',
      },
    ],
    sourceLabel: 'UNESCO Ocean Literacy',
    sourceUrl: 'https://oceanliteracy.unesco.org/about',
  },
  {
    id: 'everyday-ocean-actions',
    topicId: 'protecting-blue-habitats',
    title: 'Everyday Ocean Actions',
    subtitle: 'How learners can connect ocean knowledge with responsible choices.',
    readingTime: '5 min',
    difficulty: 'Starter',
    heroImage: 'ocean-hero',
    keyTakeaways: [
      'Ocean literacy means understanding how the ocean affects us and how we affect the ocean.',
      'Local choices can influence waterways, coasts, waste, and public decisions.',
      'Good stewardship begins with curiosity, evidence, and humility.',
    ],
    sections: [
      {
        heading: 'The ocean begins upstream',
        body:
          'Storm drains, rivers, wastewater, farms, streets, and plastic use can all connect to the sea. People far from the coast still live in the ocean system.',
      },
      {
        heading: 'Ask better questions',
        body:
          'Before sharing a claim, ask: What is the source? What place and time does it describe? What measurement was used? What uncertainty remains? Ocean learning is also media literacy.',
      },
      {
        heading: 'Actions can scale',
        body:
          'Personal habits matter, but so do community science, voting, school projects, coastal planning, responsible recreation, and support for evidence-based policy.',
      },
    ],
    sourceLabel: 'UNESCO Ocean Literacy',
    sourceUrl: 'https://oceanliteracy.unesco.org/about',
  },
  {
    id: 'ocean-in-motion',
    topicId: 'currents-waves-tides',
    title: 'The Ocean in Motion',
    subtitle: 'How currents, waves, and mixing move energy and materials through seawater.',
    readingTime: '6 min',
    difficulty: 'Starter',
    heroImage: 'ocean-depths',
    keyTakeaways: [
      'Wind, density differences, gravity, and Earth rotation all help move seawater.',
      'Currents can transport heat, nutrients, larvae, pollution, and ships.',
      'Motion links local coastlines to basin-scale and global patterns.',
    ],
    sections: [
      {
        heading: 'Wind pushes the surface',
        body:
          'Wind transfers energy to surface water, creating waves and helping drive surface currents. Those currents are influenced by continents, Earth rotation, and friction.',
      },
      {
        heading: 'Density moves deeper water',
        body:
          'Cold, salty water is denser than warm or fresher water. Density differences help drive deeper circulation that connects ocean basins over long time scales.',
      },
      {
        heading: 'Motion moves living things',
        body:
          'Many organisms drift as eggs, larvae, plankton, or fragments. Current patterns can decide where young life settles and how populations stay connected.',
      },
    ],
    sourceLabel: 'Smithsonian Ocean',
    sourceUrl: 'https://ocean.si.edu/planet-ocean/tides-currents/currents-waves-and-tides',
  },
  {
    id: 'tides-and-coasts',
    topicId: 'currents-waves-tides',
    title: 'Tides and Coasts',
    subtitle: 'Why predictable tidal rhythms still create complex coastal conditions.',
    readingTime: '6 min',
    difficulty: 'Starter',
    heroImage: 'ocean-hero',
    keyTakeaways: [
      'Tides are driven mainly by the gravitational pull of the Moon and Sun.',
      'Coastline shape and seafloor form affect local tide height and timing.',
      'Tidal zones create demanding habitats with wet, dry, hot, cold, salty, and wave-exposed conditions.',
    ],
    sections: [
      {
        heading: 'Gravity sets the rhythm',
        body:
          'Tides rise and fall in patterns linked to the Moon, Sun, and Earth rotation. Local conditions then modify the exact height and timing that people observe at a coast.',
      },
      {
        heading: 'Intertidal life is tough',
        body:
          'Organisms in the intertidal zone may be underwater, exposed to air, hit by waves, heated by sun, cooled by wind, or diluted by rain within a single day.',
      },
      {
        heading: 'Tides matter for people',
        body:
          'Tides affect navigation, fishing, flooding, recreation, coastal construction, restoration, and emergency planning. Knowing tides is practical ocean literacy.',
      },
    ],
    sourceLabel: 'NOAA National Ocean Service',
    sourceUrl: 'https://oceanservice.noaa.gov/education/tutorial_tides/',
  },
  {
    id: 'seafloor-landscapes',
    topicId: 'seafloor-story',
    title: 'Seafloor Landscapes',
    subtitle: 'Ridges, trenches, shelves, slopes, plains, canyons, seamounts, and sediments.',
    readingTime: '8 min',
    difficulty: 'Starter',
    heroImage: 'ocean-depths',
    keyTakeaways: [
      'The seafloor has mountains, valleys, plains, cliffs, volcanoes, and trenches.',
      'Plate tectonics shapes many large seafloor features.',
      'Sediments record biological, geological, and climate history.',
    ],
    sections: [
      {
        heading: 'Continental margins are transitions',
        body:
          'Continental shelves, slopes, and rises connect land to deep ocean basins. They can host fisheries, canyons, methane seeps, landslides, and important sediment records.',
      },
      {
        heading: 'Ocean basins have mountains',
        body:
          'Mid-ocean ridges, seamounts, volcanic arcs, and fracture zones create rough underwater terrain. These features can shape currents and provide hard surfaces for life.',
      },
      {
        heading: 'Trenches are extreme boundaries',
        body:
          'Deep ocean trenches form where one tectonic plate descends beneath another. They are among the deepest environments on Earth and require specialized exploration tools.',
      },
    ],
    sourceLabel: 'NOAA Ocean Exploration',
    sourceUrl: 'https://oceanexplorer.noaa.gov/facts/plate-boundaries.html',
  },
  {
    id: 'hydrothermal-vents',
    topicId: 'seafloor-story',
    title: 'Hydrothermal Vents',
    subtitle: 'Where hot fluids, minerals, microbes, and deep-sea life meet.',
    readingTime: '7 min',
    difficulty: 'Intermediate',
    heroImage: 'ocean-hero',
    keyTakeaways: [
      'Hydrothermal vents release hot, mineral-rich fluids from the seafloor.',
      'Chemosynthetic microbes can form the base of vent food webs.',
      'Vent ecosystems show that sunlight is not the only energy source for rich communities.',
    ],
    sections: [
      {
        heading: 'Heat and seawater interact',
        body:
          'Seawater can seep into cracks in the crust, heat up near magma, react with rocks, and return to the seafloor carrying dissolved chemicals.',
      },
      {
        heading: 'Microbes unlock chemical energy',
        body:
          'At vents, some microbes use chemical reactions rather than sunlight to build organic matter. Larger animals can depend directly or indirectly on these microbes.',
      },
      {
        heading: 'Vents are windows into Earth systems',
        body:
          'Vent studies connect geology, chemistry, biology, and astrobiology. They also raise questions about mineral resources, conservation, and deep-sea disturbance.',
      },
    ],
    sourceLabel: 'NOAA Ocean Exploration',
    sourceUrl: 'https://oceanexplorer.noaa.gov/facts/vents.html',
  },
  {
    id: 'marine-debris-pathways',
    topicId: 'pollution-and-plastics',
    title: 'Marine Debris Pathways',
    subtitle: 'How waste moves from land and water into ocean ecosystems.',
    readingTime: '7 min',
    difficulty: 'Starter',
    heroImage: 'ocean-depths',
    keyTakeaways: [
      'Marine debris includes large items, fishing gear, and microplastics.',
      'Debris can travel through rivers, stormwater, wind, beaches, and vessels.',
      'Prevention usually matters more than cleanup after debris spreads.',
    ],
    sections: [
      {
        heading: 'Debris has many sources',
        body:
          'Litter, lost fishing gear, packaging, abandoned materials, and fragments can enter waterways through daily life, storms, industry, tourism, and maritime activity.',
      },
      {
        heading: 'Small pieces are hard to remove',
        body:
          'Microplastics are tiny plastic particles. Once spread through water, sediment, organisms, and shorelines, they are extremely difficult to collect at scale.',
      },
      {
        heading: 'Prevention is powerful',
        body:
          'Reducing waste, improving collection systems, designing better products, recovering fishing gear, and changing behavior can keep debris from entering the ocean in the first place.',
      },
    ],
    sourceLabel: 'NOAA Education',
    sourceUrl: 'https://www.noaa.gov/education/resource-collections/ocean-coasts/ocean-pollution',
  },
  {
    id: 'ocean-acidification-basics',
    topicId: 'pollution-and-plastics',
    title: 'Ocean Acidification Basics',
    subtitle: 'How carbon dioxide changes seawater chemistry and why shell-builders are vulnerable.',
    readingTime: '7 min',
    difficulty: 'Intermediate',
    heroImage: 'ocean-hero',
    keyTakeaways: [
      'The ocean absorbs carbon dioxide from the atmosphere.',
      'Dissolved carbon dioxide changes seawater chemistry and lowers pH.',
      'Corals, oysters, and some plankton can be affected because they build shells or skeletons.',
    ],
    sections: [
      {
        heading: 'Chemistry connects air and water',
        body:
          'When carbon dioxide dissolves into seawater, it participates in chemical reactions that change acidity and the availability of carbonate ions. These changes can affect organisms that build calcium carbonate structures.',
      },
      {
        heading: 'Shell-builders are not the only concern',
        body:
          'Acidification can affect food webs, development, behavior, and ecosystem interactions. Impacts vary by species, life stage, location, and other stressors such as temperature.',
      },
      {
        heading: 'Monitoring helps communities prepare',
        body:
          'Scientists monitor ocean chemistry to understand where changes are happening, how quickly they are progressing, and what fisheries, reefs, aquaculture, and coastal communities may face.',
      },
    ],
    sourceLabel: 'NOAA Education',
    sourceUrl: 'https://www.noaa.gov/education/resource-collections/ocean-coasts/ocean-acidification',
  },
];

export const dailyFacts = [
  'The ocean covers about 70 percent of Earth surface and is the planet largest livable space.',
  'The average ocean depth is about 3,682 meters, but trenches reach much deeper.',
  'Sunlight fades quickly with depth, so photosynthesis is concentrated in the upper ocean.',
  'The ocean stores most of the excess heat trapped in the climate system.',
  'Phytoplankton form a major base of marine food webs and influence global carbon cycling.',
  'Tides are driven mainly by the gravity of the Moon and Sun, then shaped by local coastlines.',
  'Seafloor maps help scientists find habitats, hazards, vents, canyons, and sampling sites.',
  'Marine debris can begin far inland and travel through rivers, drains, wind, and coastlines.',
];

export const learningPath = [
  {
    label: 'Build the ocean map',
    detail: 'Start with zones, seafloor features, currents, tides, and coastlines.',
  },
  {
    label: 'Connect life to habitat',
    detail: 'Study reefs, food webs, plankton, deep-sea adaptations, and nurseries.',
  },
  {
    label: 'Trace Earth systems',
    detail: 'Follow heat, carbon, oxygen, water movement, sediments, and climate signals.',
  },
  {
    label: 'Think like an explorer',
    detail: 'Use tools, evidence, uncertainty, and source checks to reason about the sea.',
  },
  {
    label: 'Turn knowledge into stewardship',
    detail: 'Connect ocean literacy with pollution prevention, habitat care, and community action.',
  },
];

export const oceanFacts: OceanFactCard[] = [
  {
    id: 'largest-living-space',
    title: 'Largest living space',
    fact: 'The ocean covers about 70 percent of Earth surface and contains life from sunlit waters to deep trenches.',
    whyItMatters:
      'Ocean study is not a niche subject. It is a way to understand the largest environment on the planet.',
    sourceLabel: 'NOAA Ocean Exploration',
    sourceUrl: 'https://oceanexplorer.noaa.gov/ocean-fact/explored/',
  },
  {
    id: 'average-depth',
    title: 'Average depth',
    fact: 'The average ocean depth is about 3,682 meters.',
    whyItMatters:
      'Depth creates engineering challenges and many habitats that most people never see directly.',
    sourceLabel: 'NOAA Ocean Exploration',
    sourceUrl: 'https://oceanexplorer.noaa.gov/ocean-fact/explored/',
  },
  {
    id: 'ocean-heat',
    title: 'Climate heat storage',
    fact: 'The ocean stores most of the excess heat energy trapped in Earth climate system.',
    whyItMatters:
      'Ocean warming affects sea level, marine heatwaves, storms, ecosystems, and long-term climate patterns.',
    sourceLabel: 'NOAA Climate.gov',
    sourceUrl: 'https://www.climate.gov/news-features/understanding-climate/climate-change-ocean-heat-content',
  },
  {
    id: 'carbon-uptake',
    title: 'Carbon exchange',
    fact: 'The ocean absorbs carbon dioxide from the atmosphere, changing seawater chemistry.',
    whyItMatters:
      'Carbon uptake links climate change with acidification and the health of shell-building organisms.',
    sourceLabel: 'NASA Science',
    sourceUrl: 'https://science.nasa.gov/earth/explore/the-ocean-and-climate-change/',
  },
  {
    id: 'reef-risk',
    title: 'Coral stress',
    fact: 'Warming, acidification, runoff, pollution, and physical damage can all stress coral reef systems.',
    whyItMatters:
      'Reefs support biodiversity and coastal communities, but they need both local and global protection.',
    sourceLabel: 'NOAA National Ocean Service',
    sourceUrl: 'https://oceanservice.noaa.gov/facts/coralreef-climate.html',
  },
  {
    id: 'marine-debris',
    title: 'Marine debris',
    fact: 'Marine debris ranges from large abandoned items to microplastics smaller than 5 millimeters.',
    whyItMatters:
      'Once debris spreads into waterways and ecosystems, prevention is usually easier than cleanup.',
    sourceLabel: 'NOAA Education',
    sourceUrl: 'https://www.noaa.gov/education/resource-collections/ocean-coasts/ocean-pollution',
  },
  {
    id: 'motion',
    title: 'Always moving',
    fact: 'Currents, waves, tides, and mixing keep ocean water in motion at many scales.',
    whyItMatters:
      'Motion transports heat, nutrients, larvae, pollutants, and energy across the planet.',
    sourceLabel: 'Smithsonian Ocean',
    sourceUrl: 'https://ocean.si.edu/planet-ocean/tides-currents/currents-waves-and-tides',
  },
  {
    id: 'ocean-literacy',
    title: 'Ocean literacy',
    fact: 'Ocean literacy means understanding how the ocean affects us and how we affect the ocean.',
    whyItMatters:
      'Ocean knowledge should lead to better questions, responsible choices, and informed stewardship.',
    sourceLabel: 'UNESCO Ocean Literacy',
    sourceUrl: 'https://oceanliteracy.unesco.org/about',
  },
];

export const glossaryEntries: GlossaryEntry[] = [
  {
    term: 'Abyssal plain',
    definition: 'A broad, relatively flat region of the deep ocean floor covered by fine sediments.',
    example: 'Abyssal plains can look empty but contain animals, microbes, tracks, burrows, and slow processes.',
  },
  {
    term: 'Acidification',
    definition: 'A shift in seawater chemistry caused when carbon dioxide dissolves and lowers pH.',
    example: 'Acidification can make shell or skeleton building harder for some organisms.',
  },
  {
    term: 'Bathymetry',
    definition: 'The measurement and mapping of underwater depth and seafloor shape.',
    example: 'A bathymetric map can reveal canyons, ridges, seamounts, and trenches.',
  },
  {
    term: 'Biodiversity',
    definition: 'The variety of life, including genes, species, habitats, and ecological relationships.',
    example: 'Coral reefs are known for high biodiversity because reef structure creates many niches.',
  },
  {
    term: 'Bioluminescence',
    definition: 'Light produced by living organisms through chemical reactions.',
    example: 'Many deep-sea animals use bioluminescence for communication, camouflage, or hunting.',
  },
  {
    term: 'Chemosynthesis',
    definition: 'The process of building organic matter using chemical energy instead of sunlight.',
    example: 'Microbes at hydrothermal vents can support food webs through chemosynthesis.',
  },
  {
    term: 'Current',
    definition: 'A directed movement of seawater caused by wind, density differences, gravity, rotation, or tides.',
    example: 'Currents move heat and nutrients and can carry drifting organisms across long distances.',
  },
  {
    term: 'Estuary',
    definition: 'A coastal area where freshwater and seawater mix.',
    example: 'Estuaries often serve as nurseries for fish, shellfish, and birds.',
  },
  {
    term: 'Hadal zone',
    definition: 'The deepest ocean zone, mainly in trenches below about 6,000 meters.',
    example: 'Hadal exploration requires specialized vehicles that can survive extreme pressure.',
  },
  {
    term: 'Marine debris',
    definition: 'Human-made material that is discarded, lost, or abandoned in marine or coastal environments.',
    example: 'Lost fishing gear and plastic fragments are forms of marine debris.',
  },
  {
    term: 'Microplastic',
    definition: 'A plastic particle smaller than 5 millimeters.',
    example: 'Microplastics can come from broken larger items or manufactured small particles.',
  },
  {
    term: 'Phytoplankton',
    definition: 'Microscopic photosynthetic organisms that drift in sunlit waters.',
    example: 'Phytoplankton form a major base of marine food webs.',
  },
  {
    term: 'ROV',
    definition: 'A remotely operated vehicle controlled from a ship or station, usually through a cable.',
    example: 'An ROV can carry cameras, lights, sensors, and manipulator arms into deep water.',
  },
  {
    term: 'Salinity',
    definition: 'A measure of dissolved salts in water.',
    example: 'Salinity affects density, circulation, animal physiology, and water layering.',
  },
  {
    term: 'Seamount',
    definition: 'An underwater mountain rising from the seafloor that does not reach the surface.',
    example: 'Seamounts can shape currents and create habitat for deep-sea life.',
  },
  {
    term: 'Thermocline',
    definition: 'A layer where water temperature changes rapidly with depth.',
    example: 'The thermocline can limit mixing between warm surface water and colder deep water.',
  },
];

export const learningModules: LearningModule[] = [
  {
    id: 'ocean-basics',
    title: 'Ocean Basics',
    goal: 'Understand the ocean as one connected system with many zones and features.',
    lessons: [
      'Read Ocean Zones to connect depth with light, pressure, and food.',
      'Read The Seafloor Story to understand the hidden landscape beneath the water.',
      'Use the glossary terms bathymetry, thermocline, current, and hadal zone.',
    ],
  },
  {
    id: 'life-and-habitats',
    title: 'Life and Habitats',
    goal: 'Connect organisms with the physical environments that shape them.',
    lessons: [
      'Read Coral Reef Cities to see how habitat structure creates ecological opportunity.',
      'Compare reefs with vents, estuaries, and the deep sea.',
      'Ask how food, shelter, oxygen, temperature, and disturbance change survival.',
    ],
  },
  {
    id: 'climate-connections',
    title: 'Climate Connections',
    goal: 'Trace heat, carbon, sea level, and chemistry through ocean systems.',
    lessons: [
      'Read Ocean and Climate before reading Ocean Carbon Pathways.',
      'Use facts about heat storage, carbon uptake, and acidification as anchors.',
      'Ask how global processes show up locally at coasts, reefs, fisheries, and storms.',
    ],
  },
  {
    id: 'explorer-method',
    title: 'Explorer Method',
    goal: 'Learn how ocean knowledge is collected and why tools matter.',
    lessons: [
      'Read Mapping the Seafloor and Robotic Ocean Explorers.',
      'Match each question with a tool: satellite, ship, sonar, ROV, float, glider, or sample.',
      'Practice source checking: who measured it, where, when, with what instrument, and with what uncertainty?',
    ],
  },
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'light-depth',
    topicId: 'ocean-zones',
    prompt: 'Which factor most directly limits photosynthesis as ocean depth increases?',
    answers: ['Less sunlight', 'More salt', 'More sound', 'Less gravity'],
    correctAnswer: 0,
    explanation:
      'Photosynthesis depends on light. As sunlight fades with depth, photosynthetic organisms become less common.',
  },
  {
    id: 'seafloor-sonar',
    topicId: 'tools-of-exploration',
    prompt: 'Which tool is commonly used to map seafloor shape from a research vessel?',
    answers: ['Sonar', 'Thermometer only', 'Rain gauge', 'Compass only'],
    correctAnswer: 0,
    explanation:
      'Sonar systems send sound pulses and measure returns, helping researchers map seafloor features.',
  },
  {
    id: 'reef-structure',
    topicId: 'coral-reef-cities',
    prompt: 'Why do reef structures support many forms of marine life?',
    answers: [
      'They create shelter and varied habitat',
      'They remove all predators',
      'They stop tides',
      'They make seawater fresh',
    ],
    correctAnswer: 0,
    explanation:
      'Reef structures create surfaces, hiding places, feeding opportunities, and nursery spaces for many organisms.',
  },
  {
    id: 'climate-heat',
    topicId: 'ocean-and-climate',
    prompt: 'What role does the ocean play in the climate system?',
    answers: [
      'It stores and moves heat',
      'It prevents weather',
      'It removes seasons',
      'It blocks all sunlight',
    ],
    correctAnswer: 0,
    explanation:
      'The ocean stores heat and transports it through currents, influencing climate and weather patterns.',
  },
  {
    id: 'motion-current',
    topicId: 'currents-waves-tides',
    prompt: 'What can currents transport through the ocean?',
    answers: ['Heat and nutrients', 'Only sand', 'Only freshwater', 'Nothing at all'],
    correctAnswer: 0,
    explanation:
      'Currents can transport heat, nutrients, drifting organisms, pollution, and other materials.',
  },
  {
    id: 'acidification-shells',
    topicId: 'pollution-and-plastics',
    prompt: 'Why is ocean acidification important for shell-building organisms?',
    answers: [
      'It changes carbonate chemistry',
      'It makes gravity stronger',
      'It removes tides',
      'It turns seawater into freshwater',
    ],
    correctAnswer: 0,
    explanation:
      'Acidification changes seawater chemistry, which can make shell and skeleton building harder for some organisms.',
  },
];

export const categories = ['All', ...Array.from(new Set(oceanTopics.map((topic) => topic.category)))];

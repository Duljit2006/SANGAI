/**
 * Mock Data for SANGAI Platform
 * This file contains placeholder data for all regions, destinations, and festivals.
 * Replace with real API calls later.
 */

// Region/State information
export const REGIONS = {
    'Arunachal Pradesh': {
        name: 'Arunachal Pradesh',
        tagline: 'Land of the Dawn-Lit Mountains',
        heroImage: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=1920',
        description: 'Arunachal Pradesh, meaning "Land of the Rising Sun," is India\'s northeastern frontier, sharing borders with Bhutan, China, and Myanmar. With 26 major tribes and over 100 sub-tribes, it\'s one of the most culturally diverse regions in the world.',
        history: 'The region was known as NEFA (North-East Frontier Agency) until 1972. Ancient trade routes connected it to Tibet and Southeast Asia, leaving a rich tapestry of Buddhist and animist traditions.',
        culture: 'The Monpa, Adi, Apatani, Nyishi, and Galo tribes each have distinct customs, festivals, and architectural styles. Traditional practices include intricate weaving, bamboo crafts, and sustainable farming methods passed down through generations.',
        impact: 'Tourism has brought economic opportunities but also challenges. The region promotes responsible tourism through community-owned homestays and eco-certified guides to preserve its pristine environment.',
    },
    'Assam': {
        name: 'Assam',
        tagline: 'Gateway to the Seven Sisters',
        heroImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1920',
        description: 'Assam is the gateway to Northeast India, famous for its tea plantations, Brahmaputra River, and one-horned rhinoceros. It serves as the cultural and economic hub of the region.',
        history: 'Assam has been a center of civilization for millennia, with the Ahom dynasty ruling for 600 years. The region witnessed the only successful resistance against Mughal expansion.',
        culture: 'Bihu celebrations, Sattriya dance, and silk weaving (Muga, Eri, Pat) define Assamese culture. The state has a rich literary tradition with the first Assamese poetry dating back to the 14th century.',
        impact: 'Tea tourism and wildlife sanctuaries like Kaziranga have become major attractions, employing thousands of locals while funding conservation efforts.',
    },
    'Manipur': {
        name: 'Manipur',
        tagline: 'Jewel of India',
        heroImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920',
        description: 'Manipur, the "Jewel of India," is known for its classical dance form, floating Loktak Lake, and the endangered Sangai deer. The oval-shaped valley surrounded by mountains creates a unique ecosystem.',
        history: 'With a recorded history dating back 2,000 years, Manipur was one of the earliest kingdoms in the region. It played a crucial role in World War II, with the Battle of Imphal being a turning point.',
        culture: 'Manipuri dance, Thang-Ta martial arts, and the unique Pung Cholom are cultural treasures. The state has a vibrant theater tradition and produces some of India\'s best athletes.',
        impact: 'Sustainable tourism initiatives focus on preserving Loktak Lake\'s phumdis (floating islands) and protecting the Sangai deer habitat.',
    },
    'Meghalaya': {
        name: 'Meghalaya',
        tagline: 'Abode of the Clouds',
        heroImage: 'https://images.unsplash.com/photo-1544015759-9a6e0f32c4a5?w=1920',
        description: 'Meghalaya, the "Abode of the Clouds," receives the highest rainfall on Earth at Mawsynram. Living root bridges, crystal-clear rivers, and matrilineal societies make it unique.',
        history: 'The Khasi, Jaintia, and Garo tribes have maintained their distinct identities for centuries. British influence brought Christianity but traditional practices remain strong.',
        culture: 'Matrilineal society where children take their mother\'s surname, living root bridges grown over generations, and sacred groves protected by tradition showcase harmony with nature.',
        impact: 'Adventure tourism (caving, trekking, root bridge walks) brings income to remote villages. Village councils regulate tourist numbers to prevent overcrowding.',
    },
    'Mizoram': {
        name: 'Mizoram',
        tagline: 'Land of the Highlanders',
        heroImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920',
        description: 'Mizoram\'s rolling hills, bamboo forests, and close-knit communities offer a peaceful retreat. The state has one of India\'s highest literacy rates and lowest crime rates.',
        history: 'The Mizo people migrated from China and Myanmar centuries ago. The 1986 Peace Accord ended years of conflict, transforming Mizoram into one of the most peaceful states.',
        culture: 'Cheraw (bamboo dance), traditional handloom weaving, and community-based living define Mizo culture. Music and choir singing are integral to daily life.',
        impact: 'Community-based tourism ensures visitors experience authentic Mizo hospitality while supporting local livelihoods.',
    },
    'Nagaland': {
        name: 'Nagaland',
        tagline: 'Land of Festivals',
        heroImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920',
        description: 'Nagaland is home to 16 major tribes, each with distinct traditions, attire, and festivals. The Hornbill Festival showcases this diversity to the world.',
        history: 'Naga tribes were fierce warriors who resisted external control for centuries. Post-independence, the region saw conflict, but peace processes have brought stability.',
        culture: 'Each tribe has unique festivals, traditional dress with intricate beadwork, and warrior dances. Headhunting traditions have given way to cultural preservation efforts.',
        impact: 'The Hornbill Festival has become a major tourism draw, providing income to villages while showcasing Naga culture authentically.',
    },
    'Sikkim': {
        name: 'Sikkim',
        tagline: 'Himalayan Paradise',
        heroImage: 'https://images.unsplash.com/photo-1560347876-aeef00ee58a1?w=1920',
        description: 'Sikkim is India\'s first fully organic state, with Kanchenjunga as its crown. Monasteries, rhododendron forests, and sustainable practices define this Himalayan gem.',
        history: 'The Chogyal kingdom ruled Sikkim until 1975 when it merged with India. Tibetan Buddhist influence remains strong in art, architecture, and daily life.',
        culture: 'Masked dances at monasteries, traditional Sikkimese cuisine, and organic farming practices reflect a deep connection to nature and spirituality.',
        impact: 'Sikkim pioneered eco-tourism in India with strict regulations on plastic use and sustainable trekking practices.',
    },
    'Tripura': {
        name: 'Tripura',
        tagline: 'Land of Fourteen Gods',
        heroImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1920',
        description: 'Tripura\'s temples, palaces, and tribal heritage offer an unexplored treasure. The state\'s compact size makes it perfect for immersive cultural experiences.',
        history: 'The Manikya dynasty ruled for over 500 years, leaving behind magnificent palaces and rock-cut temples. Tripura was one of the first princely states to join India.',
        culture: 'The 19 tribes of Tripura practice unique traditions. The Neermahal (Water Palace) and Unakoti rock carvings showcase architectural brilliance.',
        impact: 'Heritage tourism focusing on palaces and tribal villages provides sustainable income while preserving cultural sites.',
    },
};

// Destination data
export const DESTINATIONS = [
    {
        id: 1,
        name: 'Loktak Lake',
        tagline: 'World\'s only floating national park',
        region: 'Manipur',
        district: 'Bishnupur',
        type: 'Nature',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
        description: 'Loktak Lake, the largest freshwater lake in Northeast India, is famous for its circular floating islands called phumdis. The Keibul Lamjao National Park, floating on these phumdis, is home to the endangered Sangai deer.',
        bestTime: 'October to February',
        difficulty: 'Easy',
        ecoTip: 'Take only photos, leave only footprints. Avoid plastic bags as they harm the lake ecosystem.',
    },
    {
        id: 2,
        name: 'Kaziranga National Park',
        tagline: 'Home to the one-horned rhinoceros',
        region: 'Assam',
        district: 'Golaghat',
        type: 'Wildlife',
        image: 'https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=800',
        description: 'A UNESCO World Heritage Site, Kaziranga hosts two-thirds of the world\'s one-horned rhinoceros. Elephant safaris offer close encounters with rhinos, tigers, and wild elephants.',
        bestTime: 'November to April',
        difficulty: 'Easy',
        ecoTip: 'Maintain silence during safaris. Flash photography is prohibited and disturbs animals.',
    },
    {
        id: 3,
        name: 'Ziro Valley',
        tagline: 'UNESCO World Heritage Site',
        region: 'Arunachal Pradesh',
        district: 'Lower Subansiri',
        type: 'Cultural Heritage',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
        description: 'The Ziro Valley, home to the Apatani tribe, is a UNESCO World Heritage Site candidate. Known for sustainable farming and unique nose plugs traditionally worn by women.',
        bestTime: 'March to October',
        difficulty: 'Moderate',
        ecoTip: 'Ask permission before photographing locals. Respect their privacy and traditions.',
    },
    {
        id: 4,
        name: 'Living Root Bridges',
        tagline: 'Nature\'s engineering marvel',
        region: 'Meghalaya',
        district: 'East Khasi Hills',
        type: 'Adventure',
        image: 'https://images.unsplash.com/photo-1544015759-9a6e0f32c4a5?w=800',
        description: 'The Khasi people have been growing bridges from living Ficus elastica roots for centuries. The Double Decker Root Bridge at Nongriat requires a trek but rewards with an unforgettable experience.',
        bestTime: 'October to May',
        difficulty: 'Challenging',
        ecoTip: 'Don\'t carve names or damage the bridges. They take 15-20 years to grow.',
    },
    {
        id: 5,
        name: 'Tawang Monastery',
        tagline: 'Second largest Buddhist monastery in the world',
        region: 'Arunachal Pradesh',
        district: 'Tawang',
        type: 'Spiritual',
        image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800',
        description: 'Perched at 10,000 feet, Tawang Monastery is a center of Mahayana Buddhism. The 400-year-old monastery houses ancient scriptures and a magnificent 28-foot Buddha statue.',
        bestTime: 'April to October',
        difficulty: 'Moderate',
        ecoTip: 'Dress modestly. Remove shoes before entering prayer halls. Photography may be restricted in certain areas.',
    },
    {
        id: 6,
        name: 'Dzukou Valley',
        tagline: 'Valley of Flowers of the East',
        region: 'Nagaland',
        district: 'Kohima',
        type: 'Trekking',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
        description: 'A high-altitude valley at the border of Nagaland and Manipur, Dzukou blooms with rare lilies from June to September. The challenging trek rewards with pristine, untouched beauty.',
        bestTime: 'June to September',
        difficulty: 'Challenging',
        ecoTip: 'Carry all trash back. No campfires allowed to protect the fragile ecosystem.',
    },
];

// Festival data
export const FESTIVALS = [
    {
        id: 1,
        name: 'Hornbill Festival',
        region: 'Nagaland',
        location: 'Kisama Heritage Village',
        dateStart: '2024-12-01',
        dateEnd: '2024-12-10',
        type: 'Event',
        image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800',
        description: 'The "Festival of Festivals" showcases the cultural heritage of all 16 Naga tribes through traditional dances, music, crafts, and indigenous games.',
        ecoCertified: true,
    },
    {
        id: 2,
        name: 'Ziro Festival of Music',
        region: 'Arunachal Pradesh',
        location: 'Ziro Valley',
        dateStart: '2024-09-28',
        dateEnd: '2024-10-01',
        type: 'Music',
        image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800',
        description: 'An outdoor music festival set in the rice fields of Ziro Valley, featuring indie artists from across Asia. Known for its eco-friendly policies and minimal environmental impact.',
        ecoCertified: true,
    },
    {
        id: 3,
        name: 'Torgya Festival',
        region: 'Arunachal Pradesh',
        location: 'Tawang',
        dateStart: '2024-01-14',
        dateEnd: '2024-01-16',
        type: 'Culture',
        image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800',
        description: 'A Buddhist festival featuring colorful masked dances performed at Tawang Monastery to ward off evil spirits and usher in prosperity.',
        ecoCertified: false,
    },
    {
        id: 4,
        name: 'Bihu',
        region: 'Assam',
        location: 'Throughout Assam',
        dateStart: '2024-04-14',
        dateEnd: '2024-04-20',
        type: 'Culture',
        image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800',
        description: 'Assam\'s most important festival marking the Assamese New Year. Celebrations include traditional Bihu dance, feasts, and community gatherings.',
        ecoCertified: false,
    },
    {
        id: 5,
        name: 'Sangai Festival',
        region: 'Manipur',
        location: 'Imphal',
        dateStart: '2024-11-21',
        dateEnd: '2024-11-30',
        type: 'Event',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
        description: 'Named after the state animal, this festival showcases Manipuri culture, art, cuisine, and handloom. Adventure sports and local food are highlights.',
        ecoCertified: true,
    },
    {
        id: 6,
        name: 'Cherry Blossom Festival',
        region: 'Meghalaya',
        location: 'Shillong',
        dateStart: '2024-11-14',
        dateEnd: '2024-11-16',
        type: 'Event',
        image: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800',
        description: 'Celebrate the unique autumn cherry blossoms of Shillong with music, rock concerts, and cultural performances.',
        ecoCertified: false,
    },
];

// Guide information
export const GUIDES = {
    'Arunachal Pradesh': {
        etiquette: [
            'Always carry Inner Line Permit (ILP) - mandatory for non-residents',
            'Ask permission before entering tribal villages',
            'Dress modestly, especially near monasteries',
            'Don\'t touch sacred objects or religious artifacts',
            'Gift-giving is appreciated - local snacks or sweets',
        ],
        photography: [
            { text: 'Landscapes and nature', status: 'green' },
            { text: 'Villages (with permission)', status: 'yellow' },
            { text: 'Monasteries (check restrictions)', status: 'yellow' },
            { text: 'Military installations', status: 'red' },
            { text: 'People without consent', status: 'red' },
        ],
        realities: [
            '⚠️ Road conditions: Challenging, especially during monsoons',
            '📶 Connectivity: Limited mobile network in remote areas',
            '🏨 Accommodation: Basic in villages, better in Itanagar/Tawang',
            '🌧️ Weather: Unpredictable mountain weather, always carry rain gear',
            '🗓️ Permits: Apply for ILP at least 2 weeks in advance',
        ],
    },
    'default': {
        etiquette: [
            'Respect local customs and traditions',
            'Ask permission before photographing people',
            'Dress modestly in religious places',
            'Remove shoes before entering homes and temples',
            'Learn basic greetings in the local language',
        ],
        photography: [
            { text: 'Landscapes and nature', status: 'green' },
            { text: 'Public places and markets', status: 'green' },
            { text: 'Religious sites (with permission)', status: 'yellow' },
            { text: 'Tribal ceremonies (ask first)', status: 'yellow' },
            { text: 'Restricted/Military areas', status: 'red' },
        ],
        realities: [
            '⚠️ Roads may be rough in rural areas',
            '📶 Mobile connectivity varies by region',
            '🏨 Mix of homestays and hotels available',
            '🌧️ Monsoon season (June-September) can disrupt travel',
            '🗓️ Check for local festivals and events',
        ],
    },
};

// API-like functions
export function getRegionData(regionName) {
    return REGIONS[regionName] || REGIONS['Assam'];
}

export function getDestinationsByRegion(regionName) {
    return DESTINATIONS.filter(d => d.region === regionName);
}

export function getFestivalsByRegion(regionName) {
    return FESTIVALS.filter(f => f.region === regionName);
}

export function getGuideByRegion(regionName) {
    return GUIDES[regionName] || GUIDES['default'];
}

export function getDestinationById(id) {
    return DESTINATIONS.find(d => d.id === parseInt(id));
}

export function searchAll(query) {
    const q = query.toLowerCase();

    const destinations = DESTINATIONS.filter(d =>
        d.name.toLowerCase().includes(q) ||
        d.region.toLowerCase().includes(q) ||
        d.type.toLowerCase().includes(q)
    );

    const festivals = FESTIVALS.filter(f =>
        f.name.toLowerCase().includes(q) ||
        f.region.toLowerCase().includes(q)
    );

    return { destinations, festivals };
}

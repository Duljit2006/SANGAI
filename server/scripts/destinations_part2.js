
export const destinationsPart2 = [
    // --- NAGALAND ---
    {
        name: 'Kohima War Cemetery',
        type: 'monument',
        districtId: 'NL_KOHIMA',
        shortDescription: 'A memorial dedicated to soldiers of the 2nd British Division who died in World War II.',
        story: {
            overview: 'Built on the site of the Battle of Kohima, the tennis court was the scene of fierce hand-to-hand combat.',
            culturalSignificance: 'A symbol of peace and remembrance.',
            quote: '“When You Go Home, Tell Them Of Us And Say, For Your Tomorrow, We Gave Our Today.”'
        },
        location: { lat: 25.67, lng: 94.10 },
        logistics: {
            nearestTown: 'Kohima',
            distanceFromNearestTown: '0 km',
            distanceFromShillong: '419 km',
            distanceFromGuwahati: '364 km',
            transportationInfo: 'In the heart of Kohima city. Walkable.'
        },
        experience: {
            highlights: ['Tennis Court Battle Site', 'Well-maintained graves', 'Panoramic View'],
            visitorTips: ['Maintain silence.', 'Open 9 AM - 4 PM.']
        },
        bestTimeToVisit: 'All year',
        isHiddenGem: false,
        images: [{ url: 'https://images.unsplash.com/photo-1596708304910-449e7552984b?w=800', caption: 'War Cemetery' }] // Placeholder
    },
    {
        name: 'Khonoma Village',
        type: 'village',
        districtId: 'NL_KOHIMA',
        shortDescription: 'India\'s first Green Village, known for its conservation efforts and history of resistance.',
        story: {
            overview: 'A 700-year-old Angami settlement that banned hunting and logging.',
            culturalSignificance: 'Birthplace of Angami resistance against British rule.',
            quote: '“Where warriors became guardians of nature.”'
        },
        location: { lat: 25.64, lng: 94.02 },
        logistics: {
            nearestTown: 'Kohima (20 km)',
            distanceFromNearestTown: '20 km',
            distanceFromShillong: '440 km',
            distanceFromGuwahati: '385 km',
            transportationInfo: 'Taxi from Kohima.'
        },
        experience: {
            highlights: ['Terraced Fields', 'Forts', 'Nature Walk'],
            visitorTips: ['Hire a local guide for history.', 'Try local food.'],
            dontMiss: [{ title: 'Dzuleke', description: 'Nearby eco-tourism spot with river picnic.' }]
        },
        bestTimeToVisit: 'Oct-Apr',
        isHiddenGem: false,
        images: [{ url: 'https://images.unsplash.com/photo-1628522384994-67d64386e881?w=800', caption: 'Khonoma Village' }] // Placeholder
    },
    {
        name: 'Dzukou Valley',
        type: 'valley',
        districtId: 'NL_KOHIMA',
        shortDescription: 'A dreamlike valley of rolling hills bordering Nagaland and Manipur.',
        story: {
            overview: 'Famous for the seasonal Dzukou Lily and its untouched beauty.',
            localBelief: 'No trees grow in the valley due to a curse (legend).',
            quote: '“Valley of the flowers of the East.”'
        },
        location: { lat: 25.57, lng: 94.08 },
        logistics: {
            nearestTown: 'Viswema (Trek Start)',
            distanceFromNearestTown: '8 km trek',
            distanceFromShillong: '430 km',
            distanceFromGuwahati: '380 km',
            transportationInfo: 'Reach Viswema/Zakhama from Kohima, then trek.'
        },
        experience: {
            highlights: ['Dzukou Lily', 'Green Mounds', 'Cave Camping'],
            visitorTips: ['Carry sleeping bag if camping.', 'Entry fee required.'],
            dontMiss: [{ title: 'Ghost Caves', description: 'Natural caves for staying overnight.' }]
        },
        guideInfo: 'Tours Cart: +91-8472895147',
        bestTimeToVisit: 'Jun-Sep (Flowers), Oct-Apr (Trekking)',
        isHiddenGem: false,
        images: [{ url: 'https://images.unsplash.com/photo-1628082537243-bd2650033486?w=800', caption: 'Dzukou Valley' }] // Placeholder
    },
    {
        name: 'Mon Village',
        type: 'heritage',
        districtId: 'NL_MON',
        shortDescription: 'The land of the Konyaks, famous for facial tattoos and headhunting history.',
        story: {
            overview: 'Mon is the cultural center of the Konyak tribe.',
            culturalSignificance: 'Headhunting practice ended in the 1960s.',
            quote: '“Faces that tell a thousand stories.”'
        },
        location: { lat: 26.75, lng: 95.06 },
        logistics: {
            nearestTown: 'Mon Town',
            distanceFromNearestTown: '0 km',
            distanceFromShillong: '450 km',
            distanceFromGuwahati: '450 km',
            transportationInfo: 'Reach via Sonari (Assam).'
        },
        experience: {
            highlights: ['Tattooed Elders', 'Traditional Houses', 'Wood Carving'],
            visitorTips: ['Roads are rough.', 'Carry power bank.'],
            dontMiss: [{ title: 'Aoling Festival', description: 'Held in April.' }]
        },
        bestTimeToVisit: 'Nov-Apr',
        isHiddenGem: true,
        images: [{ url: 'https://images.unsplash.com/photo-1546768292-fb12f6c92568?w=800', caption: 'Konyak Morung' }]
    },
    {
        name: 'Longwa Village',
        type: 'village',
        districtId: 'NL_MON',
        shortDescription: 'A village that straddles the India-Myanmar border.',
        story: {
            overview: 'The Angh\'s (King\'s) house is half in India, half in Myanmar.',
            culturalSignificance: 'Villagers have dual citizenship essentially.',
            quote: '“Breakfast in India, Dinner in Myanmar.”'
        },
        location: { lat: 26.83, lng: 95.13 },
        logistics: {
            nearestTown: 'Mon (42 km)',
            distanceFromNearestTown: '42 km',
            distanceFromShillong: '490 km',
            distanceFromGuwahati: '490 km',
            transportationInfo: 'Drive from Mon Town.'
        },
        experience: {
            highlights: ['Angh House', 'Border Pillar', 'Opium Smoking Culture (Heritage)'],
            visitorTips: ['No passport needed to cross locally.'],
            dontMiss: [{ title: 'Brass Skull Necklaces', description: 'Unique jewelry souvernirs.' }]
        },
        bestTimeToVisit: 'Nov-Apr',
        isHiddenGem: true,
        images: [{ url: 'https://images.unsplash.com/photo-1628522384994-67d64386e881?w=800', caption: 'Longwa Border' }] // Placeholder
    },
    {
        name: 'Touphema Village',
        type: 'village',
        districtId: 'NL_KOHIMA',
        shortDescription: 'A tourist village built by the local community to showcase Naga culture.',
        story: {
            overview: 'Each clan built a hut, offering an authentic stay experience.',
            culturalSignificance: 'Model of community tourism.',
            quote: '“Living the Naga way.”'
        },
        location: { lat: 25.80, lng: 94.13 },
        logistics: {
            nearestTown: 'Kohima (40 km)',
            distanceFromNearestTown: '40 km',
            distanceFromShillong: '460 km',
            distanceFromGuwahati: '400 km',
            transportationInfo: 'Drive from Kohima.'
        },
        experience: {
            highlights: ['Traditional Huts', 'Museum', 'Naga Cuisine'],
            visitorTips: ['Stay overnight.']
        },
        bestTimeToVisit: 'Oct-Apr',
        isHiddenGem: false,
        images: [{ url: 'https://images.unsplash.com/photo-1617377520790-a2g4b6d?w=800', caption: 'Naga Hut' }] // Placeholder
    },
    {
        name: 'Mokokchung',
        type: 'village', // mapped to village
        districtId: 'NL_MOKOKCHUNG',
        shortDescription: 'The cultural capital of Nagaland, home to the Ao Nagas.',
        story: {
            overview: 'A vibrant town known for Christmas celebrations and Ao culture.',
            quote: '“The land of pioneers.”'
        },
        location: { lat: 26.32, lng: 94.51 },
        logistics: {
            nearestTown: 'Mokokchung',
            distanceFromNearestTown: '0 km',
            distanceFromShillong: '350 km',
            distanceFromGuwahati: '290 km',
            transportationInfo: 'Accessible from Jorhat (Assam).'
        },
        experience: {
            highlights: ['Ungma Village', 'Longkhum', 'Ao Baptist Church'],
            visitorTips: ['Visit during Moatsu festival (May).']
        },
        bestTimeToVisit: 'Oct-May',
        isHiddenGem: false,
        images: [{ url: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800', caption: 'Mokokchung Church' }] // Placeholder
    },

    // --- MIZORAM ---
    {
        name: 'Reiek Tlang',
        type: 'peak',
        districtId: 'MZ_MAMIT',
        shortDescription: 'A peak offering panoramic views of Aizawl and Bangladesh.',
        story: {
            overview: 'Home to the Reiek Heritage Village, showcasing Mizo sub-tribe huts.',
            culturalSignificance: 'Associated with spirits in folklore.',
            quote: '“Where the wind whispers ancient tales.”'
        },
        location: { lat: 23.678, lng: 92.603 },
        logistics: {
            nearestTown: 'Aizawl (29 km)',
            distanceFromNearestTown: '29 km',
            distanceFromShillong: '375 km',
            distanceFromGuwahati: '469 km',
            transportationInfo: 'Short drive from Aizawl.'
        },
        experience: {
            highlights: ['Heritage Village', 'Cave', 'Viewpoint'],
            visitorTips: ['Attend Anthurium Festival in Sept.'],
            dontMiss: [{ title: 'Typical Mizo Village', description: 'Recreated model village.' }]
        },
        bestTimeToVisit: 'Sep-Apr',
        isHiddenGem: true,
        images: [{ url: 'https://images.unsplash.com/photo-1627572703816-72aa4c7c5982?w=800', caption: 'Reiek Peak' }] // Placeholder
    },
    {
        name: 'Phawngpui',
        type: 'peak',
        districtId: 'MZ_LAWANGTLAI', // Corrected ID
        shortDescription: 'The Blue Mountain, highest peak in Mizoram (2,157m).',
        story: {
            overview: 'Revered as the abode of the goddess Sangau.',
            culturalSignificance: 'Sacred mountain.',
            quote: '“The majestic sentinel of the south.”'
        },
        location: { lat: 22.63, lng: 93.04 },
        logistics: {
            nearestTown: 'Saiha',
            distanceFromNearestTown: 'Drive + Trek',
            distanceFromShillong: '600+ km',
            distanceFromGuwahati: '700+ km',
            transportationInfo: 'Long drive from Aizawl (2 days).'
        },
        experience: {
            highlights: ['Orchids', 'Rhododendrons', 'Chindwin River View'],
            visitorTips: ['Requires permit.']
        },
        bestTimeToVisit: 'Nov-Apr',
        isHiddenGem: true,
        images: [{ url: 'https://images.unsplash.com/photo-1628082537243-bd2650033486?w=800', caption: 'Blue Mountain' }] // Placeholder
    },
    {
        name: 'Vantawng Falls',
        type: 'waterfall',
        districtId: 'MZ_SERCHHIP',
        shortDescription: 'Highest unbroken waterfall in Mizoram (750 ft).',
        story: {
            overview: 'Surrounded by lush bamboo forests.',
            quote: '“A silver streak in the green jungle.”'
        },
        location: { lat: 23.27, lng: 92.76 },
        logistics: {
            nearestTown: 'Thenzawl (5 km)',
            distanceFromNearestTown: '5 km',
            distanceFromShillong: '450 km',
            distanceFromGuwahati: '550 km',
            transportationInfo: 'Drive from Aizawl (3-4 hrs).'
        },
        experience: {
            highlights: ['View Tower', 'Bamboo Groves', 'Thenzawl Handloom'],
            visitorTips: ['Visit the weaving centre in Thenzawl.']
        },
        bestTimeToVisit: 'Sep-Jan',
        isHiddenGem: true,
        images: [{ url: 'https://images.unsplash.com/photo-1589623820295-8869c93db04c?w=800', caption: 'Vantawng Falls' }] // Placeholder
    },
    {
        name: 'Palak Dil',
        type: 'lake',
        districtId: 'MZ_SAIHA',
        shortDescription: 'Largest natural lake in Mizoram, surrounded by virgin forests.',
        story: {
            overview: 'A remote oval lake rich in biodiversity.',
            localBelief: 'Believed to be haunted by spirits of a submerged village.',
            quote: '“Mirror of the deep South.”'
        },
        location: { lat: 22.20, lng: 92.88 },
        logistics: {
            nearestTown: 'Phura',
            distanceFromNearestTown: 'Trek/Jeep',
            distanceFromShillong: '650+ km',
            distanceFromGuwahati: '750+ km',
            transportationInfo: 'Very remote, access via Saiha.'
        },
        experience: {
            highlights: ['Wildlife', 'Wetland', 'Solitude'],
            visitorTips: ['For extreme offbeat travelers.']
        },
        bestTimeToVisit: 'Nov-Mar',
        isHiddenGem: true,
        images: [{ url: 'https://images.unsplash.com/photo-1622306368383-8557ee085794?w=800', caption: 'Palak Lake' }] // Placeholder
    },
    {
        name: 'Solomon’s Temple',
        type: 'temple',
        districtId: 'MZ_AIZAWL',
        shortDescription: 'A magnificent church built with marble imported from around the world.',
        story: {
            overview: 'Run by Kohhran Thianghlim, it took 20 years to build.',
            quote: '“A testament of faith in marble.”'
        },
        location: { lat: 23.75, lng: 92.70 },
        logistics: {
            nearestTown: 'Aizawl',
            distanceFromNearestTown: '10 km',
            distanceFromShillong: '375 km',
            distanceFromGuwahati: '470 km',
            transportationInfo: 'Taxi from city center.'
        },
        experience: {
            highlights: ['Architecture', 'Gardens', 'Peaceful Ambience'],
            visitorTips: ['Open to all faiths.']
        },
        bestTimeToVisit: 'All year',
        isHiddenGem: false,
        images: [{ url: 'https://images.unsplash.com/photo-1548602088-9d12a4f9c10d?w=800', caption: 'Solomon Temple' }] // Placeholder
    },

    // --- TRIPURA ---
    {
        name: 'Unakoti',
        type: 'heritage',
        districtId: 'TR_NORTH_TRIPURA', // Mapped to North Tripura
        shortDescription: 'Massive rock-cut reliefs of Shiva dating back to 7th-9th centuries.',
        story: {
            overview: 'Meaning "one less than a crore", it is a Shaivite pilgrimage spot.',
            localBelief: 'Lord Shiva cursed 99,99,999 sleeping gods into stone here.',
            quote: '“Angkor Wat of the Northeast.”'
        },
        location: { lat: 24.31, lng: 92.07 },
        logistics: {
            nearestTown: 'Kailashahar (8 km)',
            distanceFromNearestTown: '8 km',
            distanceFromShillong: '300 km',
            distanceFromGuwahati: '550 km',
            transportationInfo: 'Train to Kumarghat, then Taxi.'
        },
        experience: {
            highlights: ['Unakotiswara Kal Bhairava', 'Ganesha Figures', 'Trek'],
            visitorTips: ['Attend Ashokastami Mela (April).'],
            dontMiss: [{ title: 'Main Head', description: '30-foot high Shiva head.' }]
        },
        bestTimeToVisit: 'Oct-Mar',
        isHiddenGem: true,
        images: [{ url: 'https://images.unsplash.com/photo-1599592237934-297eb06b9117?w=800', caption: 'Unakoti Rock Carvings' }] // Placeholder
    },
    {
        name: 'Neermahal',
        type: 'heritage',
        districtId: 'TR_WEST_TRIPURA', // Mapped to West Tripura
        shortDescription: 'A stunning water palace built in the middle of Rudrasagar Lake.',
        story: {
            overview: 'Built by Maharaja Bir Bikram Kishore Manikya in 1930.',
            quote: '“A floating palace of dreams.”'
        },
        location: { lat: 23.49, lng: 91.30 },
        logistics: {
            nearestTown: 'Melaghar',
            distanceFromNearestTown: '2 km',
            distanceFromShillong: '450 km',
            distanceFromGuwahati: '530 km',
            transportationInfo: 'Drive from Agartala (53 km).'
        },
        experience: {
            highlights: ['Boat Ride', 'Light & Sound Show', 'Architecture'],
            visitorTips: ['Best viewed at sunset.']
        },
        bestTimeToVisit: 'Oct-Mar',
        isHiddenGem: false,
        images: [{ url: 'https://images.unsplash.com/photo-1596708304910-449e7552984b?w=800', caption: 'Neermahal Palace' }] // Placeholder
    },
    {
        name: 'Jampui Hills',
        type: 'hill',
        districtId: 'TR_NORTH_TRIPURA',
        shortDescription: 'The "Seat of Eternal Spring", famous for orange orchards and Mizo culture.',
        story: {
            overview: 'Highest hill range in Tripura.',
            culturalSignificance: 'Orange Festival in November.',
            quote: '“Where spring never ends.”'
        },
        location: { lat: 23.97, lng: 92.28 },
        logistics: {
            nearestTown: 'Dharmanagar',
            distanceFromNearestTown: '100 km',
            distanceFromShillong: '350 km',
            distanceFromGuwahati: '450 km',
            transportationInfo: 'Drive from Agartala (200 km).'
        },
        experience: {
            highlights: ['Sunrise View', 'Orange Orchards', 'Village Life'],
            visitorTips: ['Stay in Vanghmun village.']
        },
        bestTimeToVisit: 'Oct-Mar',
        isHiddenGem: true,
        images: [{ url: 'https://images.unsplash.com/photo-1627572703816-72aa4c7c5982?w=800', caption: 'Jampui Hills' }] // Placeholder
    },
    {
        name: 'Ujjayanta Palace',
        type: 'heritage',
        districtId: 'TR_WEST_TRIPURA',
        shortDescription: 'The former royal palace of Tripura, now a state museum.',
        story: {
            overview: 'A gleaming white palace in the heart of Agartala.',
            culturalSignificance: 'Showcases the art and culture of the Northeast.',
            quote: '“Royal legacy in white.”'
        },
        location: { lat: 23.83, lng: 91.28 },
        logistics: {
            nearestTown: 'Agartala',
            distanceFromNearestTown: '0 km',
            distanceFromShillong: '450 km',
            distanceFromGuwahati: '550 km',
            transportationInfo: 'Heart of the city.'
        },
        experience: {
            highlights: ['Museum', 'Gardens', 'Fountains'],
            visitorTips: ['Closed on Mondays.']
        },
        bestTimeToVisit: 'All year',
        isHiddenGem: false,
        images: [{ url: 'https://images.unsplash.com/photo-1596708304910-449e7552984b?w=800', caption: 'Ujjayanta Palace' }] // Placeholder
    },
    {
        name: 'Sepahijala Wildlife Sanctuary',
        type: 'wildlife',
        districtId: 'TR_WEST_TRIPURA', // Mapped to West Tripura
        shortDescription: 'Home to the Clouded Leopard and Phayre\'s Langur.',
        story: {
            overview: 'A bio-diversity hotspot with a zoo and botanical garden.',
            quote: '“Into the wild of Tripura.”'
        },
        location: { lat: 23.65, lng: 91.33 },
        logistics: {
            nearestTown: 'Agartala (25 km)',
            distanceFromNearestTown: '25 km',
            distanceFromShillong: '475 km',
            distanceFromGuwahati: '575 km',
            transportationInfo: 'Short drive from Agartala.'
        },
        experience: {
            highlights: ['Clouded Leopard', 'Boating', 'Elephant Joy Ride'],
            visitorTips: ['Carry binoculars.']
        },
        bestTimeToVisit: 'Oct-Mar',
        isHiddenGem: false,
        images: [{ url: 'https://images.unsplash.com/photo-1535940588601-d07f3c0519d5?w=800', caption: 'Clouded Leopard' }] // Placeholder
    },
    {
        name: 'Dumbur Lake',
        type: 'lake',
        districtId: 'TR_DHALAI',
        shortDescription: 'A massive water body with 48 islands.',
        story: {
            overview: 'Source of the Gomati river. Narkel Kunja is a popular island destination.',
            quote: '“Islands in the stream.”'
        },
        location: { lat: 23.47, lng: 91.82 },
        logistics: {
            nearestTown: 'Ambassa',
            distanceFromNearestTown: '30 km',
            distanceFromShillong: '400 km',
            distanceFromGuwahati: '500 km',
            transportationInfo: 'Drive from Agartala (120 km).'
        },
        experience: {
            highlights: ['Boating', 'Narkel Kunja', 'Migratory Birds'],
            visitorTips: ['Stay in the log huts on the island.']
        },
        bestTimeToVisit: 'Oct-Mar',
        isHiddenGem: true,
        images: [{ url: 'https://images.unsplash.com/photo-1622306368383-8557ee085794?w=800', caption: 'Dumbur Lake' }] // Placeholder
    },
    {
        name: 'Chabimura',
        type: 'heritage',
        districtId: 'TR_SOUTH_TRIPURA', // Mapped to South Tripura
        shortDescription: 'Famous for its panels of rock carvings on the steep mountain wall.',
        story: {
            overview: 'Features a massive carving of Goddess Durga (Chakrakma).',
            quote: '“Amazon of Tripura.”'
        },
        location: { lat: 23.42, lng: 91.56 },
        logistics: {
            nearestTown: 'Amarpur',
            distanceFromNearestTown: '8 km',
            distanceFromShillong: '450 km',
            distanceFromGuwahati: '550 km',
            transportationInfo: 'Boat ride required to see carvings.'
        },
        experience: {
            highlights: ['Rock Carvings', 'Boat Ride', 'Cave'],
            visitorTips: ['Best seen by boat.']
        },
        bestTimeToVisit: 'Oct-Mar',
        isHiddenGem: true,
        images: [{ url: 'https://images.unsplash.com/photo-1599592237934-297eb06b9117?w=800', caption: 'Rock Carving' }] // Placeholder
    },


    // --- SIKKIM ---
    {
        name: 'Gurudongmar Lake',
        type: 'lake',
        districtId: 'SK_NORTH', // Mangan -> North Sikkim
        shortDescription: 'One of the highest lakes in the world at 17,800 ft, sacred to Buddhists and Sikhs.',
        story: {
            overview: 'A crystal clear glacial lake where a portion never freezes.',
            culturalSignificance: 'Guru Nanak touched the water, blessing it.',
            quote: '“Sacred waters touching the sky.”'
        },
        location: { lat: 28.02, lng: 88.71 },
        logistics: {
            nearestTown: 'Lachen (65 km)',
            distanceFromNearestTown: '65 km',
            distanceFromShillong: '600+ km',
            distanceFromGuwahati: '530 km',
            transportationInfo: 'Drive from Lachen early morning. Permit needed.'
        },
        experience: {
            highlights: ['Snow Capped Peaks', 'Blue Water', 'Temple'],
            visitorTips: ['High altitude! Acclimatize in Lachen.', 'Leave before noon.'],
            dontMiss: [{ title: 'Sarva Dharma Sthal', description: 'Temple for all religions nearby.' }]
        },
        bestTimeToVisit: 'Nov-Jun',
        isHiddenGem: false,
        images: [{ url: 'https://images.unsplash.com/photo-1628678257007-88544d9351e3?w=800', caption: 'Gurudongmar Lake' }]
    },
    {
        name: 'Dzongu',
        type: 'reserve',
        districtId: 'SK_NORTH', // Mangan -> North Sikkim
        shortDescription: 'A protected reserve for the Lepcha tribe, offering pristine nature and culture.',
        story: {
            overview: 'The "Hidden Paradise" (Mayal Lyang) of the Lepchas.',
            culturalSignificance: 'Worship of Mt. Kanchenjunga as guardian deity.',
            quote: '“The land of the original people.”'
        },
        location: { lat: 27.50, lng: 88.50 },
        logistics: {
            nearestTown: 'Mangan',
            distanceFromNearestTown: '20 km',
            distanceFromShillong: '600 km',
            distanceFromGuwahati: '550 km',
            transportationInfo: 'Special permit required.'
        },
        experience: {
            highlights: ['Bamboo Bridges', 'Hot Springs', 'Organic Food'],
            visitorTips: ['Stay in homestays.', 'Respect local customs.']
        },
        bestTimeToVisit: 'Mar-May, Oct-Dec',
        isHiddenGem: true,
        images: [{ url: 'https://images.unsplash.com/photo-1545233267-33a7589d8137?w=800', caption: 'Dzongu Village' }] // Placeholder
    },
    {
        name: 'Yumthang Valley',
        type: 'valley',
        districtId: 'SK_NORTH', // Mangan -> North Sikkim
        shortDescription: 'The "Valley of Flowers" of Sikkim, famous for Rhododendrons.',
        story: {
            overview: 'A sanctuary of flowers with the Teesta river flowing through.',
            quote: '“A riot of colors in the snow.”'
        },
        location: { lat: 27.82, lng: 88.70 },
        logistics: {
            nearestTown: 'Lachung (25 km)',
            distanceFromNearestTown: '25 km',
            distanceFromShillong: '600 km',
            distanceFromGuwahati: '540 km',
            transportationInfo: 'Drive from Lachung.'
        },
        experience: {
            highlights: ['Rhododendrons', 'Hot Springs', 'Zero Point'],
            visitorTips: ['Visit in April-May for flowers.']
        },
        bestTimeToVisit: 'Feb-Jun',
        isHiddenGem: false,
        images: [{ url: 'https://images.unsplash.com/photo-1628082537243-bd2650033486?w=800', caption: 'Yumthang Flowers' }] // Placeholder
    },
    {
        name: 'Nathu La Pass',
        type: 'pass',
        districtId: 'SK_EAST', // Gangtok -> East Sikkim
        shortDescription: 'A mountain pass on the Indo-China border at 14,140 ft.',
        story: {
            overview: 'Part of the ancient Silk Road.',
            culturalSignificance: 'Baba Harbhajan Singh Temple nearby.',
            quote: '“Gateway to the Silk Route.”'
        },
        location: { lat: 27.38, lng: 88.82 },
        logistics: {
            nearestTown: 'Gangtok (54 km)',
            distanceFromNearestTown: '54 km',
            distanceFromShillong: '544 km',
            distanceFromGuwahati: '580 km',
            transportationInfo: 'Shared taxi from Gangtok. Permit required.'
        },
        experience: {
            highlights: ['Indo-China Border', 'Snow', 'Baba Mandir'],
            visitorTips: ['Closed on Mon/Tue.']
        },
        bestTimeToVisit: 'May-Oct',
        isHiddenGem: false,
        images: [{ url: 'https://images.unsplash.com/photo-1628678257007-88544d9351e3?w=800', caption: 'Nathu La Snow' }]
    },
    {
        name: 'Tsomgo Lake',
        type: 'lake',
        districtId: 'SK_EAST',
        shortDescription: 'A glacial lake that changes color with the seasons.',
        story: {
            overview: 'Locals predict the future based on the lake\'s color.',
            quote: '“The changing face of nature.”'
        },
        location: { lat: 27.37, lng: 88.76 },
        logistics: {
            nearestTown: 'Gangtok (40 km)',
            distanceFromNearestTown: '40 km',
            distanceFromShillong: '530 km',
            distanceFromGuwahati: '570 km',
            transportationInfo: 'En route to Nathu La.'
        },
        experience: {
            highlights: ['Yak Ride', 'Cable Car', 'Snow'],
            visitorTips: ['Permit required.']
        },
        bestTimeToVisit: 'All year (Frozen in winter)',
        isHiddenGem: false,
        images: [{ url: 'https://images.unsplash.com/photo-1628678257007-88544d9351e3?w=800', caption: 'Changu Lake' }]
    },
    {
        name: 'Pelling',
        type: 'hill',
        districtId: 'SK_WEST', // West Sikkim
        shortDescription: 'Best views of Kanchenjunga and home to the Glass Skywalk.',
        story: {
            overview: 'A historic town housing the Pemayangtse Monastery.',
            quote: '“Where Kanchenjunga feels within reach.”'
        },
        location: { lat: 27.31, lng: 88.23 },
        logistics: {
            nearestTown: 'Geyzing',
            distanceFromNearestTown: '10 km',
            distanceFromShillong: '550 km',
            distanceFromGuwahati: '520 km',
            transportationInfo: 'Drive from Siliguri or Gangtok.'
        },
        experience: {
            highlights: ['Skywalk', 'Pemayangtse Monastery', 'Rabdentse Ruins'],
            visitorTips: ['Wake up early for mountain views.']
        },
        bestTimeToVisit: 'All year',
        isHiddenGem: false,
        images: [{ url: 'https://images.unsplash.com/photo-1622306368383-8557ee085794?w=800', caption: 'Kanchenjunga View' }] // Placeholder
    },
    {
        name: 'Ravangla',
        type: 'hill',
        districtId: 'SK_SOUTH', // Namchi -> South Sikkim
        shortDescription: 'Famous for the massive Buddha Park with a 130-ft statue.',
        story: {
            overview: 'A tranquil town situated between Maenam and Tendong Hill.',
            quote: '“Serenity in stone and green.”'
        },
        location: { lat: 27.30, lng: 88.36 },
        logistics: {
            nearestTown: 'Namchi',
            distanceFromNearestTown: '26 km',
            distanceFromShillong: '540 km',
            distanceFromGuwahati: '510 km',
            transportationInfo: 'Drive from Gangtok or Siliguri.'
        },
        experience: {
            highlights: ['Buddha Park', 'Ralang Monastery', 'Tea Gardens'],
            visitorTips: ['Visit the Buddha Park at sunset.']
        },
        bestTimeToVisit: 'Mar-Jun, Sep-Nov',
        isHiddenGem: false,
        images: [{ url: 'https://images.unsplash.com/photo-1545233267-33a7589d8137?w=800', caption: 'Buddha Park' }]
    }
];

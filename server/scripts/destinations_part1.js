
export const destinationsPart1 = [
    // --- ARUNACHAL PRADESH ---
    {
        name: 'Tawang Monastery',
        type: 'monastery',
        districtId: 'AR_TAWANG',
        shortDescription: 'The largest monastery in India and second largest in the world, perched at 10,000 feet.',
        story: {
            overview: 'Tawang Monastery, founded in 1680-1681, is a beacon of Buddhist faith. It houses over 400 monks and huge scriptures.',
            culturalSignificance: 'Birthplace of the 6th Dalai Lama. The name "Tawang" means "Chosen by Horse".',
            localBelief: 'It is believed a horse led the founder Merag Lama to this spot.',
            quote: '“Tawang exists as an entire world, unto itself... balancing on the edge of its very own mountain.”'
        },
        location: { lat: 27.586, lng: 91.859 },
        logistics: {
            nearestTown: 'Tawang',
            distanceFromNearestTown: '0 km',
            distanceFromShillong: '578 km',
            distanceFromGuwahati: '480 km',
            transportationInfo: 'Accessible by SUMO/SUV from Guwahati or Tezpur via Sela Pass.'
        },
        experience: {
            highlights: ['Golden Buddha (28ft)', 'Library of Scriptures', 'Morning Prayers'],
            visitorTips: ['Visit early morning for prayer sessions.', 'Dress modestly.', 'Carry ID for ILP check.'],
            dontMiss: [{ title: 'Torgya Festival', description: 'Witness the masked dances in Jan/Feb.' }]
        },
        guideInfo: 'Leki Dorjee: +91-7085722564',
        contact: { phone: '+91-7085722564' },
        bestTimeToVisit: 'Mar-Jun, Sep-Oct',
        isHiddenGem: false,
        images: [{ url: 'https://images.unsplash.com/photo-1566723224361-cc0a6a57088b?w=800', caption: 'Tawang Monastery' }]
    },
    {
        name: 'Sela Pass',
        type: 'pass',
        districtId: 'AR_TAWANG',
        shortDescription: 'A high-altitude pass at 13,700 feet, the gateway to Tawang.',
        story: {
            overview: 'Sela Pass connects Tawang to the rest of India. It remains covered in snow for most of the year. Sela Lake, near the summit, is sacred.',
            culturalSignificance: 'Named after a local girl, Sela, who helped Jaswant Singh Rawat in the 1962 war.',
            localBelief: 'The lake is considered holy by Buddhists.',
            quote: '“Where the earth meets the sky in a frozen embrace.”'
        },
        location: { lat: 27.503, lng: 92.103 },
        logistics: {
            nearestTown: 'Dirang (65 km)',
            distanceFromNearestTown: '65 km',
            distanceFromShillong: '500 km',
            distanceFromGuwahati: '400 km',
            transportationInfo: 'En route to Tawang. Essential stop for acclimatization.'
        },
        experience: {
            highlights: ['Frozen Sela Lake', 'Snow-capped peaks', 'War Memorial nearby'],
            visitorTips: ['Prepare for high altitude sickness.', 'Carry warm clothes even in summer.'],
            dontMiss: [{ title: 'Tea at Army Canteen', description: 'Warm up with hot tea amidst the snow.' }]
        },
        bestTimeToVisit: 'Mar-Jun, Oct-Nov (Snow available in winter)',
        isHiddenGem: false,
        images: [{ url: 'https://images.unsplash.com/photo-1628678257007-88544d9351e3?w=800', caption: 'Sela Lake' }]
    },
    {
        name: 'Ziro Valley',
        type: 'valley',
        districtId: 'AR_LOWER_SUBANSIRI',
        shortDescription: 'A lush green valley home to the Apatani tribe and their unique fish-paddy cultivation.',
        story: {
            overview: 'Ziro is a World Heritage Site tentative list entry, famous for its pine hills and rice fields.',
            culturalSignificance: 'Apatani women were known for facial tattoos and nose plugs.',
            localBelief: 'Nature worship is central to the Donyi-Polo faith here.',
            quote: '“A landscape painted with the green of paddy and the gold of the sun.”'
        },
        location: { lat: 27.63, lng: 93.83 },
        logistics: {
            nearestTown: 'Hapoli (New Ziro)',
            distanceFromNearestTown: '5 km',
            distanceFromShillong: '480 km',
            distanceFromGuwahati: '470 km',
            transportationInfo: 'Train to Naharlagun, then shared taxi (3-4 hrs).'
        },
        experience: {
            highlights: ['Apatani Villages', 'Tarin Fish Farm', 'Kile Pakho Ridge'],
            visitorTips: ['Stay in a homestay to experience local culture.', 'Try the local rice beer (Apong).'],
            dontMiss: [{ title: 'Ziro Music Festival', description: 'Held in Sept/Oct, a major outdoor music fest.' }]
        },
        guideInfo: 'Bamin Chada: +91-8014232370',
        bestTimeToVisit: 'Mar-Oct (Sep for Music Fest)',
        isHiddenGem: false,
        images: [{ url: 'https://images.unsplash.com/photo-1628082537243-bd2650033486?w=800', caption: 'Ziro Valley Fields' }]
    },
    {
        name: 'Mechuka Valley',
        type: 'valley',
        districtId: 'AR_SHI_YOMI',
        shortDescription: 'The "Switzerland of the East", a stunning remote valley near the China border.',
        story: {
            overview: 'Mechuka (Menchukha) implies "Medicinal Water of Snow". It is a surreal valley with the Yargyap Chu river flowing through.',
            culturalSignificance: 'Sacred to Memba tribe (Buddhist) and Sikhs (Guru Nanak visited).',
            localBelief: 'The "Hanuman Face" on a cliff is a divine guardian.',
            quote: '“Where time stops and the mountains speak.”'
        },
        location: { lat: 28.60, lng: 94.12 },
        logistics: {
            nearestTown: 'Aalo (180 km / 6-7 hrs)',
            distanceFromNearestTown: '180 km',
            distanceFromShillong: '772 km',
            distanceFromGuwahati: '831 km',
            transportationInfo: 'Sumo from Aalo or Pasighat. Roads can be rough.'
        },
        experience: {
            highlights: ['Samten Yongcha Monastery (400yo)', 'Hanging Bridges', 'Dorjeeling Village'],
            visitorTips: ['Carry cash (ATM unreliable).', 'Prepare for cold nights.', 'BSNL SIM works best.'],
            dontMiss: [{ title: 'Gurudwara', description: 'Historical site visited by Guru Nanak.' }]
        },
        guideInfo: 'Nexplore Travel: +91-7399054196',
        contact: { phone: '+91-7399054196' },
        bestTimeToVisit: 'Oct-Nov, Mar-Apr',
        isHiddenGem: true,
        images: [{ url: 'https://images.unsplash.com/photo-1622306368383-8557ee085794?w=800', caption: 'Mechuka Valley' }]
    },
    {
        name: 'Dong Village',
        type: 'village',
        districtId: 'AR_ANJAW',
        shortDescription: 'The easternmost village in India, witnessing the country\'s first sunrise.',
        story: {
            overview: 'Dong is a tiny hamlet at the confluence of Lohit and Sati rivers.',
            culturalSignificance: 'Inhabited by the Meyor community.',
            localBelief: 'The sun rises as early as 3:00 AM here in summer.',
            quote: '“Catch the first light before the rest of India wakes up.”'
        },
        location: { lat: 28.05, lng: 97.04 },
        logistics: {
            nearestTown: 'Walong (7 km)',
            distanceFromNearestTown: '7 km',
            distanceFromShillong: '750 km',
            distanceFromGuwahati: '800+ km',
            transportationInfo: 'Drive to Tezu -> Walong. Trek 90 mins to Dong plateau.'
        },
        experience: {
            highlights: ['First Sunrise Trek (start 2 AM)', 'Walong War Memorial', 'Lohit River View'],
            visitorTips: ['Start trek very early.', 'Carry torch/headlamp.'],
            dontMiss: [{ title: 'Hot Springs', description: 'Natural hot springs in Tilam near Walong.' }]
        },
        bestTimeToVisit: 'Oct-Apr (sunrise is best viewed in winter for clarity)',
        isHiddenGem: true,
        images: [{ url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800', caption: 'First Sunrise' }]
    },

    // --- ASSAM ---
    {
        name: 'Kaziranga National Park',
        type: 'wildlife',
        districtId: 'AS_GOLAGHAT',
        shortDescription: 'A UNESCO World Heritage Site hosting two-thirds of the world\'s great one-horned rhinoceroses.',
        story: {
            overview: 'Sprawling grasslands and wetlands along the Brahmaputra. A success story of conservation.',
            culturalSignificance: 'Pride of Assam.',
            localBelief: 'The rhino is a symbol of strength.',
            quote: '“The majesty of the one-horned rhino moving through the mist is an unmatched experience.”'
        },
        location: { lat: 26.66, lng: 93.35 },
        logistics: {
            nearestTown: 'Kohora',
            distanceFromNearestTown: '0 km',
            distanceFromShillong: '280 km',
            distanceFromGuwahati: '220 km',
            transportationInfo: 'Bus or Taxi from Guwahati (4-5 hrs) on NH-37.'
        },
        experience: {
            highlights: ['Elephant Safari (5:30 AM)', 'Jeep Safari', 'Orchid Park'],
            visitorTips: ['Book safaris in advance.', 'Park closes May-Oct.'],
            dontMiss: [{ title: 'Central Range', description: 'Best for rhino sightings.' }]
        },
        bestTimeToVisit: 'Nov-Apr',
        isHiddenGem: false,
        images: [{ url: 'https://images.unsplash.com/photo-1575317618999-53fc6c342f15?w=800', caption: 'Rhino in Kaziranga' }]
    },
    {
        name: 'Majuli',
        type: 'island',
        districtId: 'AS_MAJULI',
        shortDescription: 'The world\'s largest river island and the cultural capital of Assamese civilisation.',
        story: {
            overview: 'A center of Vaishnavite culture, famous for its Satras (monasteries).',
            culturalSignificance: 'Seat of Neo-Vaishnavism started by Srimanta Sankardev.',
            localBelief: 'The island\'s shape shifts with the river\'s mood.',
            quote: '“A culture afloat on the mighty Brahmaputra.”'
        },
        location: { lat: 26.95, lng: 94.20 },
        logistics: {
            nearestTown: 'Jorhat (Ferry point)',
            distanceFromNearestTown: '20 km + Ferry',
            distanceFromShillong: '350 km',
            distanceFromGuwahati: '300 km',
            transportationInfo: 'Ferry from Nimati Ghat (Jorhat) takes 1 hour.'
        },
        experience: {
            highlights: ['Samaguri Satra (Mask Making)', 'Kamalabari Satra', 'Sunset at River'],
            visitorTips: ['Rent a bicycle to explore.', 'Respect monastery rules.'],
            dontMiss: [{ title: 'Mask Making', description: 'Watch the traditional art at Samaguri Satra.' }]
        },
        guideInfo: 'Mr. Manash: +91-7399054196',
        bestTimeToVisit: 'Oct-Mar',
        isHiddenGem: false,
        images: [{ url: 'https://images.unsplash.com/photo-1598616239148-5c440a442756?w=800', caption: 'Traditional Mask' }]
    },
    {
        name: 'Haflong',
        type: 'hill',
        districtId: 'AS_DIMA_HASAO',
        shortDescription: 'The only hill station in Assam, known for its scenic landscapes and the mysterious Jatinga.',
        story: {
            overview: 'Headquarters of Dima Hasao, home to the Dimasa tribe.',
            culturalSignificance: 'Jatinga (9km away) is famous for the unexplained bird phenomenon.',
            localBelief: 'Locals once believed evil spirits caused birds to drop.',
            quote: '“The Switzerland of the East in the heart of Assam.”'
        },
        location: { lat: 25.17, lng: 93.02 },
        logistics: {
            nearestTown: 'Silchar (100km)',
            distanceFromNearestTown: '100 km',
            distanceFromShillong: '250 km',
            distanceFromGuwahati: '330 km',
            transportationInfo: 'Vistadome train from Guwahati is a scenic delight.'
        },
        experience: {
            highlights: ['Haflong Lake', 'Jatinga', 'Ethnic Villages'],
            visitorTips: ['Best viewed during monsoon for lush greenery.'],
            dontMiss: [{ title: 'Jatinga Bird Mystery', description: 'Visit in Sept-Nov nights.' }]
        },
        bestTimeToVisit: 'Oct-Apr (Sep-Nov for Jatinga)',
        isHiddenGem: true,
        images: [{ url: 'https://images.unsplash.com/photo-1628522384994-67d64386e881?w=800', caption: 'Haflong Hills' }]
    },
    {
        name: 'Mayong',
        type: 'village',
        districtId: 'AS_MORIGAON',
        shortDescription: 'The mystical land of black magic and sorcery, near Pobitora Wildlife Sanctuary.',
        story: {
            overview: 'Mayong has a history of magic (Maya). Ancient texts on Ayurveda and magic are preserved here.',
            culturalSignificance: 'Known as the "Capital of Black Magic".',
            localBelief: 'Ancestors could tame tigers with mantras.',
            quote: '“Where history whispers spells in the wind.”'
        },
        location: { lat: 26.25, lng: 92.04 },
        logistics: {
            nearestTown: 'Guwahati (40 km)',
            distanceFromNearestTown: '40 km',
            distanceFromShillong: '140 km',
            distanceFromGuwahati: '40 km',
            transportationInfo: '1 hour drive from Guwahati.'
        },
        experience: {
            highlights: ['Mayong Central Museum', 'Pobitora Wildlife Sanctuary', 'River Dolphin View'],
            visitorTips: ['Combine with Pobitora Rhino safari.'],
            dontMiss: [{ title: 'Magic Museum', description: 'See ancient manuscripts and artifacts.' }]
        },
        bestTimeToVisit: 'Nov-Mar',
        isHiddenGem: true,
        images: [{ url: 'https://images.unsplash.com/photo-1605335805796-0254cb213123?w=800', caption: 'Mayong Museum Artifacts' }]
    },
    {
        name: 'Manas National Park',
        type: 'wildlife',
        districtId: 'AS_BAKSA',
        shortDescription: 'A UNESCO World Heritage Site known for its Project Tiger and elephant reserve.',
        story: {
            overview: 'Located at the Himalayan foothills, Manas is known for its rare and endangered endemic wildlife.',
            culturalSignificance: 'Named after the Manas River, named after Serpent Goddess Manasa.',
            quote: '“Untamed wilderness at the foot of the Himalayas.”'
        },
        location: { lat: 26.71, lng: 90.93 },
        logistics: {
            nearestTown: 'Barpeta Road',
            distanceFromNearestTown: '20 km',
            distanceFromShillong: '200 km',
            distanceFromGuwahati: '150 km',
            transportationInfo: '3-4 hrs drive from Guwahati.'
        },
        experience: {
            highlights: ['Tiger Spotting', 'River Rafting', 'Tea Gardens'],
            dontMiss: [{ title: 'River Rafting', description: 'Raft down the Manas river.' }]
        },
        bestTimeToVisit: 'Nov-Apr',
        isHiddenGem: false,
        images: [{ url: 'https://images.unsplash.com/photo-1599592237934-297eb06b9117?w=800', caption: 'Manas Wildlife' }]
    },

    // --- MEGHALAYA ---
    {
        name: 'Cherrapunji (Sohra)',
        type: 'nature',
        districtId: 'ML_EAST_KHASI_HILLS',
        shortDescription: 'The wettest place on Earth, famous for living root bridges and waterfalls.',
        story: {
            overview: 'A misty plateau famous for its rainfall and dramatic cliffs.',
            culturalSignificance: 'Seat of Khasi culture.',
            localBelief: 'Nohkalikai Falls is named after a tragic legend of a mother.',
            quote: '“Where clouds come home.”'
        },
        location: { lat: 25.27, lng: 91.73 },
        logistics: {
            nearestTown: 'Shillong (54 km)',
            distanceFromNearestTown: '54 km',
            distanceFromShillong: '54 km',
            distanceFromGuwahati: '150 km',
            transportationInfo: '1.5 - 2 hrs drive from Shillong.'
        },
        experience: {
            highlights: ['Nohkalikai Falls', 'Seven Sisters Falls', 'Mawsmai Cave'],
            visitorTips: ['Carry rain gear always.', 'Avoid monsoon if you dislike heavy rain.'],
            dontMiss: [{ title: 'Nohkalikai Falls', description: 'India\'s tallest plunge waterfall.' }]
        },
        bestTimeToVisit: 'Oct-May (Monsoon for waterfalls)',
        isHiddenGem: false,
        images: [{ url: 'https://images.unsplash.com/photo-1589623820295-8869c93db04c?w=800', caption: 'Nohkalikai Falls' }]
    },
    {
        name: 'Nongriat',
        type: 'nature',
        districtId: 'ML_EAST_KHASI_HILLS',
        shortDescription: 'Home to the Double Decker Living Root Bridge, accessible only by a 3500-step trek.',
        story: {
            overview: 'Deep in the valley, this village preserves bio-engineering marvels.',
            culturalSignificance: 'Jingkieng Jri (Root Bridges) take 15-30 years to grow.',
            localBelief: 'The spirits of the forest protect these bridges.',
            quote: '“Nature and man, woven together in living roots.”'
        },
        location: { lat: 25.25, lng: 91.68 },
        logistics: {
            nearestTown: 'Tyrna Village (Trek start)',
            distanceFromNearestTown: '3 km trek',
            distanceFromShillong: '65 km',
            distanceFromGuwahati: '160 km',
            transportationInfo: 'Drive to Tyrna from Sohra, then trek down 3500 steps.'
        },
        experience: {
            highlights: ['Double Decker Bridge', 'Rainbow Falls', 'Natural Pools'],
            visitorTips: ['Requires good fitness.', 'Stay overnight in a homestay.'],
            dontMiss: [{ title: 'Rainbow Falls', description: '1 hour trek further from the bridge.' }]
        },
        bestTimeToVisit: 'Sep-Apr',
        isHiddenGem: false,
        images: [{ url: 'https://images.unsplash.com/photo-1628522384994-67d64386e881?w=800', caption: 'Root Bridge' }]
    },
    {
        name: 'Mawlynnong',
        type: 'village',
        districtId: 'ML_EAST_KHASI_HILLS',
        shortDescription: 'Acclaimed as "Asia\'s Cleanest Village", a model of community-led cleanliness.',
        story: {
            overview: 'A pristine village with manicured gardens and bamboo dustbins.',
            culturalSignificance: 'Showcases Khasi matrilineal society values.',
            quote: '“God’s own garden.”'
        },
        location: { lat: 25.20, lng: 91.91 },
        logistics: {
            nearestTown: 'Shillong (90 km)',
            distanceFromNearestTown: '90 km',
            distanceFromShillong: '90 km',
            distanceFromGuwahati: '190 km',
            transportationInfo: 'Drive via Dawki road.'
        },
        experience: {
            highlights: ['Living Root Bridge (Single)', 'Sky Walk', 'Cleanliness'],
            visitorTips: ['Respect local privacy.', 'Eat at a local homestay.'],
            dontMiss: [{ title: 'Sky View', description: 'Bamboo tower offering views of Bangladesh.' }]
        },
        bestTimeToVisit: 'All year',
        isHiddenGem: false,
        images: [{ url: 'https://images.unsplash.com/photo-1591016335940-2c49eecc4c39?w=800', caption: 'Clean Village Path' }]
    },
    {
        name: 'Laitlum Canyon',
        type: 'canyon',
        districtId: 'ML_EAST_KHASI_HILLS',
        shortDescription: 'The "End of Hills", offering breathtaking panoramic views of deep gorges.',
        story: {
            overview: 'A vertigo-inducing canyon edge overlooking the Rasong village deep below.',
            culturalSignificance: 'The stairway to Rasong is the lifeline for villagers.',
            quote: '“Standing on the edge of the world.”'
        },
        location: { lat: 25.48, lng: 91.90 },
        logistics: {
            nearestTown: 'Shillong (25 km)',
            distanceFromNearestTown: '25 km',
            distanceFromShillong: '25 km',
            distanceFromGuwahati: '120 km',
            transportationInfo: '45 mins drive from Shillong.'
        },
        experience: {
            highlights: ['Canyon View', 'Trek to Rasong', 'Picnic Spot'],
            visitorTips: ['No shops at the very edge, carry water.', 'Windy and cold.'],
            dontMiss: [{ title: 'Golden Hour', description: 'Sunset views are magical.' }]
        },
        bestTimeToVisit: 'All year',
        isHiddenGem: true,
        images: [{ url: 'https://images.unsplash.com/photo-1504281747805-4f40445d3c8c?w=800', caption: 'Laitlum Canyon' }]
    },
    {
        name: 'Umngot River (Dawki)',
        type: 'river',
        districtId: 'ML_WEST_JAINTIA_HILLS',
        shortDescription: 'Famous for its crystal clear waters where boats appear to float on air.',
        story: {
            overview: 'The river forms the border between India and Bangladesh.',
            quote: '“Water so clear, the boats defy gravity.”'
        },
        location: { lat: 25.18, lng: 92.01 },
        logistics: {
            nearestTown: 'Shillong (85 km)',
            distanceFromNearestTown: '85 km',
            distanceFromShillong: '85 km',
            distanceFromGuwahati: '180 km',
            transportationInfo: 'Drive from Shillong.'
        },
        experience: {
            highlights: ['Boating', 'Camping', 'Bangladesh Border'],
            visitorTips: ['Visit in winter for best clarity.'],
            dontMiss: [{ title: 'Shnongpdeng', description: 'Camping upstream for clearer water.' }]
        },
        bestTimeToVisit: 'Oct-Apr',
        isHiddenGem: false,
        images: [{ url: 'https://images.unsplash.com/photo-1596708304910-449e7552984b?w=800', caption: 'Clear Water Boat' }]
    },
    {
        name: 'Wei Sawdong Falls',
        type: 'waterfall',
        districtId: 'ML_EAST_KHASI_HILLS',
        shortDescription: 'A stunning three-tiered waterfall near Sohra.',
        story: {
            overview: 'A hidden gem that has gained popularity for its unique tiered structure.',
            quote: '“Nature’s staircase of water.”'
        },
        location: { lat: 25.29, lng: 91.70 },
        logistics: {
            nearestTown: 'Sohra (15 km)',
            distanceFromNearestTown: '15 km',
            distanceFromShillong: '60 km',
            distanceFromGuwahati: '160 km',
            transportationInfo: 'Short hike down from the road.'
        },
        experience: {
            highlights: ['Three Tiers', 'Emerald Pools', 'Trek'],
            visitorTips: ['Steep bamboo stairs - wear good shoes.']
        },
        bestTimeToVisit: 'Sep-Mar',
        isHiddenGem: true,
        images: [{ url: 'https://images.unsplash.com/photo-1628522384994-67d64386e881?w=800', caption: 'Wei Sawdong' }] // Placeholder
    },
    {
        name: 'Mawphlang Sacred Grove',
        type: 'forest',
        districtId: 'ML_EAST_KHASI_HILLS',
        shortDescription: 'An ancient forest protected by local deities, untouched for centuries.',
        story: {
            overview: 'One of the most significant sacred groves in Meghalaya.',
            culturalSignificance: 'Nothing can be taken from the forest, not even a leaf, or the deity is offended.',
            localBelief: 'Protected by distinct deities (Labasa).',
            quote: '“A forest where time stands still.”'
        },
        location: { lat: 25.44, lng: 91.75 },
        logistics: {
            nearestTown: 'Shillong (25 km)',
            distanceFromNearestTown: '25 km',
            distanceFromShillong: '25 km',
            distanceFromGuwahati: '125 km',
            transportationInfo: 'Easy drive from Shillong.'
        },
        experience: {
            highlights: ['Guided Walk', 'Monoliths', 'Rare Flora'],
            visitorTips: ['Hire a local guide to understand the history.'],
            dontMiss: [{ title: 'Khasi Heritage Village', description: 'Located right opposite the grove.' }]
        },
        bestTimeToVisit: 'All year',
        isHiddenGem: false,
        images: [{ url: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=800', caption: 'Sacred Forest' }]
    },
    {
        name: 'Krang Suri Falls',
        type: 'waterfall',
        districtId: 'ML_WEST_JAINTIA_HILLS',
        shortDescription: 'A magical waterfall with deep blue waters.',
        story: {
            overview: 'Located in the Jaintia hills, known for its surreal blue pool.',
            quote: '“Blue lagoon of the hills.”'
        },
        location: { lat: 25.22, lng: 92.20 },
        logistics: {
            nearestTown: 'Jowai (30 km)',
            distanceFromNearestTown: '30 km',
            distanceFromShillong: '90 km',
            distanceFromGuwahati: '190 km',
            transportationInfo: 'Drive from Shillong via Jowai.'
        },
        experience: {
            highlights: ['Swimming', 'Camping', 'Viewpoint'],
            visitorTips: ['Life jackets mandatory for swimming.']
        },
        bestTimeToVisit: 'Sep-Apr',
        isHiddenGem: true,
        images: [{ url: 'https://images.unsplash.com/photo-1589623820295-8869c93db04c?w=800', caption: 'Krang Suri' }] // Placeholder
    },

    // --- MANIPUR ---
    {
        name: 'Loktak Lake',
        type: 'lake',
        districtId: 'MN_BISHNUPUR',
        shortDescription: 'The largest fresh water lake in North East India, famous for floating Phumdis.',
        story: {
            overview: 'A pulsating lake with floating biomass islands (Phumdis).',
            culturalSignificance: 'Setting of the epic love story Khamba Thoibi.',
            quote: '“The mirror of Manipur.”'
        },
        location: { lat: 24.55, lng: 93.78 },
        logistics: {
            nearestTown: 'Moirang (45 km from Imphal)',
            distanceFromNearestTown: '5 km',
            distanceFromShillong: '450 km',
            distanceFromGuwahati: '490 km',
            transportationInfo: 'Taxi from Imphal.'
        },
        experience: {
            highlights: ['Sendra Island', 'Boating', 'Fishermen life'],
            visitorTips: ['Stay at Sendra Tourist Home.'],
            dontMiss: [{ title: 'Sandra Viewpoint', description: 'Best panoramic view.' }]
        },
        bestTimeToVisit: 'Oct-Mar',
        isHiddenGem: false,
        images: [{ url: 'https://images.unsplash.com/photo-1622306368383-8557ee085794?w=800', caption: 'Loktak Lake' }]
    },
    {
        name: 'Keibul Lamjao National Park',
        type: 'wildlife',
        districtId: 'MN_BISHNUPUR',
        shortDescription: 'The world\'s only floating national park, home to the dancing deer (Sangai).',
        story: {
            overview: 'Located on the largest Phumdi of Loktak Lake.',
            culturalSignificance: 'Protecting the Sangai deer, found nowhere else.',
            quote: '“Where the deer dance on floating meadows.”'
        },
        location: { lat: 24.47, lng: 93.81 },
        logistics: {
            nearestTown: 'Moirang',
            distanceFromNearestTown: '10 km',
            distanceFromShillong: '460 km',
            distanceFromGuwahati: '500 km',
            transportationInfo: 'Taxi from Imphal/Moirang.'
        },
        experience: {
            highlights: ['Sangai Deer Spotting', 'Boat Safari', 'Sunset'],
            visitorTips: ['Early morning is best for sightingdeer.']
        },
        bestTimeToVisit: 'Oct-Mar',
        isHiddenGem: false,
        images: [{ url: 'https://images.unsplash.com/photo-1535940588601-d07f3c0519d5?w=800', caption: 'Sangai Habitat' }]
    },
    {
        name: 'Ukhrul',
        type: 'hill',
        districtId: 'MN_UKHRUL',
        shortDescription: 'Home of the Tangkhul Nagas and the rare Shirui Lily.',
        story: {
            overview: 'A misty hill station known for its warrior history and unique flora.',
            culturalSignificance: 'Tangkhul Naga culture.',
            quote: '“Land of the Shirui Lily.”'
        },
        location: { lat: 25.11, lng: 94.45 },
        logistics: {
            nearestTown: 'Imphal (82 km)',
            distanceFromNearestTown: '82 km',
            distanceFromShillong: '530 km',
            distanceFromGuwahati: '570 km',
            transportationInfo: 'Bus/Taxi from Imphal (3 hrs).'
        },
        experience: {
            highlights: ['Shirui Peak', 'Khangkhui Cave', 'Nillai Tea Estate'],
            visitorTips: ['Prepare for cold weather.'],
            dontMiss: [{ title: 'Shirui Lily Festival', description: 'May-June when the flower blooms.' }]
        },
        bestTimeToVisit: 'Apr-Jun, Nov',
        isHiddenGem: true,
        images: [{ url: 'https://images.unsplash.com/photo-1605629470994-013620f4f95e?w=800', caption: 'Ukhrul Hills' }]
    },
    {
        name: 'Khangkhui Cave',
        type: 'cave',
        districtId: 'MN_UKHRUL',
        shortDescription: 'An ancient limestone cave system with historical significance.',
        story: {
            overview: 'Used as a shelter by villagers during WWII.',
            localBelief: 'Legend of a demon king living there.',
            quote: '“Echoes of the past in stone.”'
        },
        location: { lat: 25.05, lng: 94.50 },
        logistics: {
            nearestTown: 'Ukhrul (15 km)',
            distanceFromNearestTown: '15 km',
            distanceFromShillong: '545 km',
            distanceFromGuwahati: '585 km',
            transportationInfo: 'Drive from Ukhrul.'
        },
        experience: {
            highlights: ['Limestone formations', 'WWII history'],
            visitorTips: ['Carry torches.']
        },
        bestTimeToVisit: 'Oct-Mar',
        isHiddenGem: true,
        images: [{ url: 'https://images.unsplash.com/photo-1499244571938-160756e89098?w=800', caption: 'Cave Entrance' }]
    },
    {
        name: 'Shree Govindajee Temple',
        type: 'temple',
        districtId: 'MN_IMPHAL_EAST',
        shortDescription: 'A historic Vaishnavite temple adjacent to the royal palace.',
        story: {
            overview: 'Dedicated to Lord Krishna, it is the center of Manipuri Vaishnavism.',
            culturalSignificance: 'Key site for Ras Lila performances.',
            quote: '“Divine grace in gold and white.”'
        },
        location: { lat: 24.80, lng: 93.94 },
        logistics: {
            nearestTown: 'Imphal',
            distanceFromNearestTown: '0 km',
            distanceFromShillong: '450 km',
            distanceFromGuwahati: '490 km',
            transportationInfo: 'In Imphal city.'
        },
        experience: {
            highlights: ['Golden Dome', 'Morning Aarti', 'Ras Lila'],
            visitorTips: ['Check Aarti timings.']
        },
        bestTimeToVisit: 'All year',
        isHiddenGem: false,
        images: [{ url: 'https://images.unsplash.com/photo-1615456485885-48b04a080829?w=800', caption: 'Govindajee Temple' }]
    },
    {
        name: 'Ima Keithel',
        type: 'market', // Need to check if type exists, map to 'monument' or 'village' if not. Using 'monument' for now or add 'market'. Mapped to 'monument' temporarily.
        districtId: 'MN_IMPHAL_WEST',
        shortDescription: 'The world\'s largest all-women market.',
        story: {
            overview: 'A 500-year-old market run exclusively by women.',
            culturalSignificance: 'Symbol of women empowerment in Manipur.',
            quote: '“The strength of mothers.”'
        },
        location: { lat: 24.81, lng: 93.93 },
        logistics: {
            nearestTown: 'Imphal city center',
            distanceFromNearestTown: '0 km',
            distanceFromShillong: '450 km',
            distanceFromGuwahati: '490 km',
            transportationInfo: 'Heart of Imphal.'
        },
        experience: {
            highlights: ['Handloom', 'Handicrafts', 'Local Produce'],
            visitorTips: ['Great for souvenirs. Support local women.']
        },
        bestTimeToVisit: 'All year',
        isHiddenGem: false,
        images: [{ url: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800', caption: 'Ima Keithel' }]
    },
    {
        name: 'Andro',
        type: 'village',
        districtId: 'MN_IMPHAL_EAST',
        shortDescription: 'An ancient village famous for pottery and a fire that has burned for centuries.',
        story: {
            overview: 'Home to the Panam Ningthou temple with its eternal fire.',
            culturalSignificance: 'Preservers of ancient Meitei traditions.',
            quote: '“The fire that never dies.”'
        },
        location: { lat: 24.73, lng: 94.03 },
        logistics: {
            nearestTown: 'Imphal (25 km)',
            distanceFromNearestTown: '25 km',
            distanceFromShillong: '475 km',
            distanceFromGuwahati: '515 km',
            transportationInfo: 'Taxi from Imphal.'
        },
        experience: {
            highlights: ['Cultural Complex', 'Pottery', 'Doll Museum'],
            visitorTips: ['Try the local brew (Yu) if offered.']
        },
        bestTimeToVisit: 'All year',
        isHiddenGem: true,
        images: [{ url: 'https://images.unsplash.com/photo-1627572703816-72aa4c7c5982?w=800', caption: 'Andro Pottery' }]
    }
];

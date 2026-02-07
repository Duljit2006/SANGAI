
import { config } from 'dotenv';
config({ path: 'e:/SANGAI/server/.env' });
import mongoose from 'mongoose';
import connectDB from '../src/config/database.js';
import { FestivalMaster, FestivalOccurrence } from '../src/models/index.js';

const festivals = [
    // 1. Currently Ongoing & Immediate Upcoming (Feb 2026)
    {
        _id: 'kaziranga-elephant-festival-2026',
        name: 'Kaziranga Elephant Festival',
        tagline: 'Celebrating the Gentle Giants',
        description: 'A unique festival aimed at resolving man-elephant conflict and promoting conservation. The festival features a spectacular elephant parade where hundreds of Asiatic elephants are groomed and decorated. It raises awareness about the conservation of the endangered species.',
        category: 'Eco-Certified',
        subCategory: 'Wildlife',
        stateId: 'AS',
        districtId: 'AS_GOLAGHAT', // Verified: Kaziranga spans Golaghat and Nagaon
        images: {
            preview: 'https://images.unsplash.com/photo-1585110396067-c3d6e3d23192?q=80&w=800',
            hero: ['https://images.unsplash.com/photo-1585110396067-c3d6e3d23192?q=80&w=1920'],
            content: []
        },
        tags: ['Assam', 'Wildlife', 'Elephant', 'Conservation'],
        venue: 'Kaziranga National Park',
        startDate: new Date('2026-02-11'),
        endDate: new Date('2026-02-17'),
        location: { lat: 26.5775, lng: 93.1711 }
    },
    {
        _id: 'lui-ngai-ni-2026',
        name: 'Lui-Ngai-Ni',
        tagline: 'Seed Sowing Festival',
        description: 'The seed-sowing festival of the Naga tribes in Manipur. It marks the start of the farming season and is famous for the lighting of the sacred fire and traditional folk songs. It brings together various Naga tribes in a display of unity and cultural richness.',
        category: 'Harvest',
        subCategory: 'Cultural',
        stateId: 'MN',
        districtId: 'MN_UKHRUL', // Verified: Major celebration center
        images: {
            preview: 'https://images.unsplash.com/photo-1605629470994-013620f4f95e?q=80&w=800',
            hero: ['https://images.unsplash.com/photo-1605629470994-013620f4f95e?q=80&w=1920'],
            content: []
        },
        tags: ['Manipur', 'Naga', 'Seed Sowing', 'Harvest'],
        venue: 'Ukhrul & Senapati',
        startDate: new Date('2026-02-15'),
        endDate: new Date('2026-02-15'),
        location: { lat: 25.1111, lng: 94.4536 }
    },
    {
        _id: 'losar-tawang-2026',
        name: 'Losar',
        tagline: 'The Himalayan New Year',
        description: 'Celebrated by the Monpa tribe, Losar marks the arrival of the Tibetan New Year. The Tawang Monastery comes alive with the Cham (masked dances) to ward off evil spirits. Houses are cleaned, prayer flags are hoisted, and community feasts are held.',
        category: 'Religious',
        subCategory: 'Dance',
        stateId: 'AR',
        districtId: 'AR_TAWANG', // Verified
        images: {
            preview: 'https://images.unsplash.com/photo-1566723224361-cc0a6a57088b?q=80&w=800',
            hero: ['https://images.unsplash.com/photo-1566723224361-cc0a6a57088b?q=80&w=1920'],
            content: []
        },
        tags: ['Arunachal Pradesh', 'Buddhist', 'New Year', 'Monpa'],
        venue: 'Tawang Monastery',
        startDate: new Date('2026-02-18'),
        endDate: new Date('2026-02-22'),
        location: { lat: 27.5861, lng: 91.8617 }
    },
    {
        _id: 'ali-aye-ligang-2026',
        name: 'Ali Aye Ligang',
        tagline: 'Rhythm of the River People',
        description: 'The spring festival of the Mishing community, initiating the cultivation cycle. The vibrant Gumrag Soman (folk dance) is performed with rapid footwork. A special dish called Purang Apin (packed sticky rice) is served. It is a celebration of fertility and agriculture.',
        category: 'Dance',
        subCategory: 'Harvest',
        stateId: 'AS',
        // Note: Majuli is a district now. Using AS_MAJULI if exists, else AS_JORHAT/LAKHIMPUR
        districtId: 'AS_MAJULI',
        images: {
            preview: 'https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=800',
            hero: ['https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=1920'],
            content: []
        },
        tags: ['Assam', 'Mishing', 'Spring', 'Dance'],
        venue: 'Majuli & Lakhimpur',
        startDate: new Date('2026-02-18'),
        endDate: new Date('2026-02-18'),
        location: { lat: 26.9535, lng: 94.2093 }
    },
    {
        _id: 'sekrenyi-2026',
        name: 'Sekrenyi',
        tagline: 'The Festival of Purification',
        description: 'Known as "Phousanyi" by the Angami Nagas, Sekrenyi is a festival of purification. The main ritual involves men bathing in a specific village well to cleanse sins. It also features a "bridge pulling" ceremony and grand feasts to strengthen community bonds.',
        category: 'Religious',
        subCategory: 'Ritual',
        stateId: 'NL',
        districtId: 'NL_KOHIMA', // Verified
        images: {
            preview: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=800',
            hero: ['https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=1920'],
            content: []
        },
        tags: ['Nagaland', 'Angami', 'Purification', 'Tribal'],
        venue: 'Kisama & Kohima Villages',
        startDate: new Date('2026-02-25'),
        endDate: new Date('2026-02-27'),
        location: { lat: 25.6701, lng: 94.1077 }
    },
    {
        _id: 'nyokum-yullo-2026',
        name: 'Nyokum Yullo',
        tagline: 'The Festival of Harmony',
        description: 'Celebrated by the Nyishi tribe to invite the forces of the universe (Nyokum) for prosperity. It is famous for the chanting of the priest (Nyibu) who recites myths for hours without script, and the sacrifice rituals. It ensures harmony between humans, animals, and gods.',
        category: 'Religious',
        subCategory: 'Ritual',
        stateId: 'AR',
        // Seppa is East Kameng. Yazali is Lower Subansiri. Using East Kameng for Seppa.
        districtId: 'AR_EAST_KAMENG',
        images: {
            preview: 'https://images.unsplash.com/photo-1621063162788-b7c1348e3d6d?q=80&w=800',
            hero: ['https://images.unsplash.com/photo-1621063162788-b7c1348e3d6d?q=80&w=1920'],
            content: []
        },
        tags: ['Arunachal Pradesh', 'Nyishi', 'Harmony', 'Ritual'],
        venue: 'Yazali & Seppa',
        startDate: new Date('2026-02-26'),
        endDate: new Date('2026-02-26'),
        location: { lat: 27.3598, lng: 93.0560 }
    },

    // 2. Upcoming (March - April 2026)
    {
        _id: 'chapchar-kut-2026',
        name: 'Chapchar Kut',
        tagline: 'The Festival of Joy',
        description: 'The biggest festival in Mizoram, marking the clearing of forests for Jhum cultivation. The centerpiece is the Cheraw (Bamboo Dance) where thousands of dancers perform in unison. It is one of the most rhythmic and visually stunning festivals in the Northeast.',
        category: 'Dance',
        subCategory: 'Harvest',
        stateId: 'MZ',
        districtId: 'MZ_AIZAWL', // Verified
        images: {
            preview: 'https://images.unsplash.com/photo-1628082537759-40ad81c37b2d?q=80&w=800',
            hero: ['https://images.unsplash.com/photo-1628082537759-40ad81c37b2d?q=80&w=1920'],
            content: []
        },
        tags: ['Mizoram', 'Bamboo Dance', 'Harvest', 'Spring'],
        venue: 'Lammual Assam Rifles Ground, Aizawl',
        startDate: new Date('2026-03-06'),
        endDate: new Date('2026-03-07'),
        location: { lat: 23.7271, lng: 92.7176 }
    },
    {
        _id: 'yaoshang-2026',
        name: 'Yaoshang',
        tagline: "Manipur's Holi",
        description: 'Often called the "Holi of Manipur" but distinct, Yaoshang dates back centuries. Highlights include the Thabal Chongba (Moonlight Dance) where boys and girls dance in circles, and traditional sports like Mukna (wrestling). It is a 5-day celebration of youth and tradition.',
        category: 'Religious',
        subCategory: 'Dance',
        stateId: 'MN',
        districtId: 'MN_IMPHAL_WEST', // Verified
        images: {
            preview: 'https://images.unsplash.com/photo-1615456485885-48b04a080829?q=80&w=800',
            hero: ['https://images.unsplash.com/photo-1615456485885-48b04a080829?q=80&w=1920'],
            content: []
        },
        tags: ['Manipur', 'Holi', 'Thabal Chongba', 'Sports'],
        venue: 'Imphal',
        startDate: new Date('2026-03-03'),
        endDate: new Date('2026-03-07'),
        location: { lat: 24.8170, lng: 93.9368 }
    },
    {
        _id: 'mopin-2026',
        name: 'Mopin',
        tagline: 'Festival of White',
        description: 'Celebrated by the Galo tribe to drive away evil spirits and pray for a good harvest. Participants smear white rice powder (Ete) on each other’s faces, a symbol of purity. The Popir dance is performed by women in traditional white attire.',
        category: 'Harvest',
        subCategory: 'Dance',
        stateId: 'AR',
        districtId: 'AR_WEST_SIANG', // Along is HQ of West Siang
        images: {
            preview: 'https://images.unsplash.com/photo-1617377520790-a2g4b6d?q=80&w=800',
            hero: ['https://images.unsplash.com/photo-1617377520790-a2g4b6d?q=80&w=1920'],
            content: []
        },
        tags: ['Arunachal Pradesh', 'Galo', 'Harvest', 'Mopin'],
        venue: 'Along & Pasighat',
        startDate: new Date('2026-04-05'),
        endDate: new Date('2026-04-05'),
        location: { lat: 28.1698, lng: 94.7891 }
    },

    // 3. Recently Concluded (Dec 2025 - Jan 2026)
    {
        _id: 'torgya-2026',
        name: 'Torgya Festival',
        tagline: 'Chasing the Spirits',
        description: 'A monastic festival in Tawang featuring the "Tpa Glong", where huge effigies are burned to destroy evil forces. The monks perform sacred Cham dances in the courtyard of Tawang Monastery to bring peace and prosperity.',
        category: 'Religious',
        subCategory: 'Dance',
        stateId: 'AR',
        districtId: 'AR_TAWANG', // Verified
        images: {
            preview: 'https://images.unsplash.com/photo-1545233267-33a7589d8137?q=80&w=800',
            hero: ['https://images.unsplash.com/photo-1545233267-33a7589d8137?q=80&w=1920'],
            content: []
        },
        tags: ['Arunachal Pradesh', 'Monastery', 'Cham Dance', 'Ritual'],
        venue: 'Tawang Monastery',
        startDate: new Date('2026-01-16'),
        endDate: new Date('2026-01-18'),
        location: { lat: 27.5861, lng: 91.8617 }
    },
    {
        _id: 'magh-bihu-2026',
        name: 'Magh Bihu',
        tagline: 'Feast of the Harvest',
        description: 'The harvest festival of Assam, marked by community feasting (Uruka) and bonfires (Meji). People build makeshift huts (Bhelaghar), feast inside them overnight, and burn them the next morning as an offering to the fire god.',
        category: 'Food',
        subCategory: 'Harvest',
        stateId: 'AS',
        districtId: 'AS_KAMRUP_METROPOLITAN', // Guwahati/General representation
        images: {
            preview: 'https://images.unsplash.com/photo-1579782921868-d0643715c0e7?q=80&w=800',
            hero: ['https://images.unsplash.com/photo-1579782921868-d0643715c0e7?q=80&w=1920'],
            content: []
        },
        tags: ['Assam', 'Bihu', 'Harvest', 'Bonfire'],
        venue: 'Across Assam',
        startDate: new Date('2026-01-14'),
        endDate: new Date('2026-01-15'),
        location: { lat: 26.1158, lng: 91.7086 }
    },
    {
        _id: 'orange-festival-2025',
        name: 'Orange Festival of Adventure & Music',
        tagline: 'Music in the Orchards',
        description: 'A unique mix of off-roading (JK Tyre Orange 4x4 Fury) and indie music, set in the orange orchards of the Lower Dibang Valley. It brings together adventure enthusiasts and music lovers from across the globe.',
        category: 'Music',
        subCategory: 'Eco-Certified',
        stateId: 'AR',
        districtId: 'AR_LOWER_DIBANG_VALLEY', // Verified
        images: {
            preview: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=800',
            hero: ['https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=1920'],
            content: []
        },
        tags: ['Arunachal Pradesh', 'Music', 'Adventure', 'Off-roading'],
        venue: 'Dambuk',
        startDate: new Date('2025-12-18'),
        endDate: new Date('2025-12-21'),
        location: { lat: 28.1884, lng: 95.6698 }
    },
    {
        _id: 'hornbill-2025',
        name: 'Hornbill Festival',
        tagline: 'Festival of Festivals',
        description: 'The largest tourism event in the region, held at Kisama Heritage Village. It showcases the rich culture of all Naga tribes with traditional dances, arts, indigenous games, and the famous Hornbill Rock Contest.',
        category: 'Music',
        subCategory: 'Dance',
        stateId: 'NL',
        districtId: 'NL_KOHIMA', // Verified
        images: {
            preview: 'https://images.unsplash.com/photo-1546768292-fb12f6c92568?q=80&w=800',
            hero: ['https://images.unsplash.com/photo-1546768292-fb12f6c92568?q=80&w=1920'],
            content: []
        },
        tags: ['Nagaland', 'Kisama', 'Tribal', 'Cultural Heritage'],
        venue: 'Kisama Heritage Village',
        startDate: new Date('2025-12-01'),
        endDate: new Date('2025-12-10'),
        location: { lat: 25.6701, lng: 94.1077 }
    }
];

const seedFestivals = async () => {
    try {
        await connectDB();
        console.log('🌱 Adding 5 hyped festivals...');

        for (const festival of festivals) {
            // 1. Upsert Festival Master
            const masterData = {
                _id: festival._id,
                name: festival.name,
                tagline: festival.tagline,
                description: festival.description,
                category: festival.category,
                subCategory: festival.subCategory,
                stateId: festival.stateId,
                districtId: festival.districtId,
                images: festival.images,
                tags: festival.tags,
                recurring: true
            };

            await FestivalMaster.findOneAndUpdate(
                { _id: festival._id },
                masterData,
                { upsert: true, new: true }
            );
            console.log(`   ✓ Master: ${festival.name}`);

            // 2. Upsert Occurrence
            // Assuming one occurrence for 2026
            const occurrenceId = `${festival._id}-2026`;
            const occurrenceData = {
                _id: occurrenceId,
                festivalId: festival._id,
                districtId: festival.districtId,
                venue: festival.venue,
                location: festival.location,
                startDate: festival.startDate,
                endDate: festival.endDate
            };

            await FestivalOccurrence.findOneAndUpdate(
                { _id: occurrenceId },
                occurrenceData,
                { upsert: true, new: true }
            );
            console.log(`   ✓ Occurrence: ${festival.name} (2026)`);
        }

        console.log('\n✅ Successfully added hyped festivals!');

    } catch (error) {
        console.error('❌ Error seeding festivals:', error);
    } finally {
        await mongoose.connection.close();
        process.exit();
    }
};

seedFestivals();


import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import Region from '../src/models/Region.js';
import State from '../src/models/State.js';
import District from '../src/models/District.js';
import dns from 'dns';

// Use Google DNS to bypass ISP blocking of MongoDB SRV records
dns.setServers(['8.8.8.8', '8.8.4.4']);

// Setup environment
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '../.env') });

const MONGO_URI = process.env.MONGO_URI || process.env.MONGODB_URI;

const CONTENT_DATA = {
    region: {
        slug: 'northeast',
        tagline: 'Paradise Unexplored',
        description: {
            title: 'Welcome to the Land of the Seven Sisters',
            content: 'Northeast India is a realm of enchantment, where the first rays of the sun kiss the snowy peaks of the Himalayas and the mighty Brahmaputra river weaves tales of ancient civilizations. A tapestry of eight distinct states, this region is a sanctuary of biodiversity, vibrant cultures, and untouched natural beauty. From the cloud-shrouded hills of Meghalaya to the dawn-lit mountains of Arunachal, every corner whispers stories of myths, legends, and a harmony between man and nature found nowhere else.'
        },
        glance: {
            description: 'A biodiversity hotspot featuring 8 distinctive states, over 200 tribes, and landscapes ranging from the Himalayan peaks to tropical rainforests.'
        },
        gateway: {
            title: 'Journey to the Unexplored',
            description: 'Embark on an adventure through the eight states, each a unique jewel in India\'s crown. Whether you seek spiritual solace, high-altitude trekking, or a deep dive into tribal heritage, the Northeast awaits.'
        }
    },
    states: {
        'arunachal-pradesh': {
            tagline: 'The Land of Dawn-lit Mountains',
            description: {
                title: 'Where India Greets the Sun',
                content: 'Arunachal Pradesh, the largest of the Seven Sisters, is a spectacular land of jagged peaks, deep valleys, and rushing rivers. Known as the "Orchid State of India," it is a treasure trove of flora and fauna. Home to the majestic Tawang Monastery and colorful tribes like the Monpa, Apatani, and Adi, it offers a spiritual and cultural journey amidst breath-taking scenery that feels almost otherworldly.'
            },
            glance: {
                description: 'India\'s easternmost state, famous for the Tawang Monastery, pristine lakes, and being the first soil in India to kiss the sunrise.'
            },
            gateway: {
                title: 'Gateway to Serenity',
                description: 'Ascend to the high passes of Tawang or explore the lush valleys of Ziro. Arunachal invites you to witness nature in its most raw and majestic form.'
            }
        },
        'assam': {
            tagline: 'Awesome Assam',
            description: {
                title: 'The Land of the Red River and Blue Hills',
                content: 'Assam is the vibrant heart of the Northeast, dominated by the mighty Brahmaputra River. It is a land famous for its golden silk, world-renowned tea, and the one-horned rhinoceros of Kaziranga. With a rich history of the Ahom kingdom and a mosaic of cultures, Assam offers a blend of wildlife adventures, spiritual pilgrimages to Kamakhya, and the serenity of endless tea gardens.'
            },
            glance: {
                description: 'The gateway to the Northeast, known for its tea plantations, oil fields, silk, and the UNESCO World Heritage site of Kaziranga.'
            },
            gateway: {
                title: 'Discover the Tea Gardens',
                description: 'Cruise the Brahmaputra, spot rhinos in the wild, or sip the world\'s finest tea. Assam is an experience that lingers on your palate and soul.'
            }
        },
        'manipur': {
            tagline: 'Jewel of India',
            description: {
                title: 'A Flower on Lofty Heights',
                content: 'Manipur, described by Lord Irwin as the "Switzerland of India," is a verdant masterpiece of nature. Famous for the distinct Loktak Lake with its floating phumdis and the Keibul Lamjao National Park, the only floating park in the world. It is the birthplace of modern Polo and home to the classical Manipuri dance, reflecting a society deeply rooted in art, culture, and martial traditions.'
            },
            glance: {
                description: 'A cultural powerhouse famous for its classical dance, martial arts, and the unique floating islands of Loktak Lake.'
            },
            gateway: {
                title: 'Enter the Jewel',
                description: 'Witness the grace of Raas Leela, explore the floating lake, or shop at the all-women Ima Keithel market. Manipur is a gem waiting to be admired.'
            }
        },
        'meghalaya': {
            tagline: 'Halfway to Heaven',
            description: {
                title: 'The Abode of Clouds',
                content: 'Meghalaya is a dreamscape of rolling hills, cascading waterfalls, and root bridges grown by centuries of patience. Separating the Assam valley from the plains of Bangladesh, it is one of the wettest places on Earth. The state offers a unique matrilineal culture and landscapes that range from the sacred forests of Mawphlang to the crystal clear waters of the Umngot River.'
            },
            glance: {
                description: 'Home to the wettest place on earth (Mawsynram), living root bridges, and a stunning plateau of rolling hills and waterfalls.'
            },
            gateway: {
                title: 'Walk Above the Clouds',
                description: 'Trek across living root bridges, explore deep caves, and find peace in Asia\'s cleanest village. Meghalaya is truly a slice of heaven.'
            }
        },
        'mizoram': {
            tagline: 'Peace Pays',
            description: {
                title: 'The Land of the Blue Mountains',
                content: 'Mizoram, a land of rolling hills, valleys, rivers, and lakes, is known for its dramatic landscape and pleasant climate. It is the land of the Mizos, or "people of the hills," known for their close-knit society and vibrant community life. With its high literacy rate and Bamboo Dance (Cheraw), Mizoram offers a serene escape into a world where nature and culture exist in quiet harmony.'
            },
            glance: {
                description: 'A serene land of bamboo forests, gentle hills, and high literacy, known for the rhythmic Cheraw dance and warm hospitality.'
            },
            gateway: {
                title: 'Find Inner Peace',
                description: 'Immerse yourself in the tranquility of the blue mountains and the vibrant Mizo culture. A destination for the soul.'
            }
        },
        'nagaland': {
            tagline: 'Land of Festivals',
            description: {
                title: 'The Warrior\'s Land',
                content: 'Nagaland is a vibrant hill state, home to diverse indigenous tribes, each with its own customs, language, and dress. It is a land of folklore passed down through generations. Famous for the Hornbill Festival, which brings together all tribes in a colorful celebration, Nagaland offers a raw, authentic experience of tribal life, history, and the valiance of its people.'
            },
            glance: {
                description: 'A hill state of 16 major tribes, famous for the annual Hornbill Festival and its rich history of bravery and unique traditions.'
            },
            gateway: {
                title: 'Celebrate with the Tribes',
                description: 'Join the circle of the Hornbill Festival, trek the Dzukou Valley, and experience the unparalleled hospitality of the Naga people.'
            }
        },
        'sikkim': {
            tagline: 'Small but Beautiful',
            description: {
                title: 'The Himalayan Paradise',
                content: 'Sikkim, though small, is a giant in natural beauty. Guarded by the majestic Kanchenjunga, the third highest peak in the world, it is a land of monasteries, orchids, and rhododendrons. As India\'s first organic state, it offers a pristine environment. From the frozen Gurudongmar Lake to the bustling MG Marg in Gangtok, Sikkim is a haven for peace-seekers and adventurers alike.'
            },
            glance: {
                description: 'India\'s first fully organic state, home to Mount Kanchenjunga, ancient monasteries, and breathtaking high-altitude lakes.'
            },
            gateway: {
                title: 'Ascend to the Peaks',
                description: 'Stand in the shadow of Kanchenjunga, spin a prayer wheel, and breathe the clean mountain air. Sikkim is a small package of big wonders.'
            }
        },
        'tripura': {
            tagline: 'Where Culture Meets Nature',
            description: {
                title: 'Land of Myths and Legends',
                content: 'Tripura is a land of rich royal heritage and archaeological mysteries. Home to the majestic Ujjayanta Palace and the rock carvings of Unakoti, often called the "Angkor Wat of the Northeast." It is a quiet, verdant state where 19 tribes and Bengali communities live in harmony. Its bamboo crafts and rubber plantations add to the charm of this culturally deep land.'
            },
            glance: {
                description: 'A state of royal palaces, ancient rock carvings at Unakoti, and a rich tradition of bamboo and cane crafts.'
            },
            gateway: {
                title: 'Uncover Ancient Secrets',
                description: 'Marvel at the Unakoti rock reliefs, visit the floating Neermahal palace, and explore the royal history of Agartala.'
            }
        }
    }
};

async function updateContent() {
    try {
        console.log('Connecting to MongoDB...');
        await mongoose.connect(MONGO_URI);
        console.log('Connected.');

        // 1. Update Region
        console.log('Updating Region: Northeast...');
        await Region.findOneAndUpdate(
            { slug: CONTENT_DATA.region.slug },
            { $set: CONTENT_DATA.region },
            { upsert: true }
        );

        // 2. Update States
        console.log('Updating States...');
        for (const [slug, data] of Object.entries(CONTENT_DATA.states)) {
            console.log(`  - ${data.tagline} (${slug})`);

            // Try to find by slug first
            const updateResult = await State.findOneAndUpdate(
                { slug: slug },
                { $set: data },
                { new: true }
            );

            if (!updateResult) {
                // If slug mismatch (e.g. arunachal_pradesh vs arunachal-pradesh), try to find loosely
                // We know our slugs in CONTENT_DATA might need matching.
                // Let's assume standard slugs. If failed, log it.
                // Note: The app mostly uses underscored slugs for files but often hyphens in URLs.
                // Let's try underscored version if hyphenated fails.
                const underscoredSlug = slug.replace(/-/g, '_');
                await State.findOneAndUpdate(
                    { slug: underscoredSlug },
                    { $set: data }
                );
            }
        }

        // 3. Smart Update for Districts
        console.log('Updating Districts with smart templates...');
        const districts = await District.find({});

        for (const district of districts) {
            // Find parent state content to inherit vibe
            const parentStateSlugHyphen = district.stateName.toLowerCase().replace(/ /g, '-');
            const parentStateSlugUnderscore = district.stateName.toLowerCase().replace(/ /g, '_');
            const stateData = CONTENT_DATA.states[parentStateSlugHyphen] || CONTENT_DATA.states[parentStateSlugUnderscore];

            const updates = {};
            const dName = district.districtName;

            // Generate "Smart" Content if missing or generic
            updates.tagline = stateData ? `The Heart of ${stateData.tagline}` : `The Hidden Gem of ${district.stateName}`;

            updates['description.title'] = `Welcome to ${dName}`;
            updates['description.content'] = `Experience the authentic charm of ${dName}. ${stateData ? stateData.description.content.split('.')[0] + '.' : ''
                } Known for its unique local culture and scenic beauty, ${dName} invites you to explore its untouched landscapes.`;

            updates['glance.description'] = `A key district in ${district.stateName}, offering a blend of ${stateData ? 'cultural heritage' : 'history'} and nature.`;

            updates['gateway.title'] = `Explore ${dName}`;
            updates['gateway.description'] = `Dive deeper into the local life of ${dName} and discover its secret trails and stories.`;

            await District.updateOne({ _id: district._id }, { $set: updates });
        }

        console.log('✅ All Content Updated Successfully');

    } catch (error) {
        console.error('❌ Update Error:', error);
    } finally {
        await mongoose.connection.close();
    }
}

updateContent();

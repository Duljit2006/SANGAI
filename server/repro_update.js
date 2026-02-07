
import axios from 'axios';

const SLUG = 'arunachal_pradesh';
const API_URL = `http://localhost:3001/api/cms/states/${SLUG}/contributions`;
const AUTH = 'Basic ' + Buffer.from('dulumoni:dulumoni').toString('base64');

async function testUpdate() {
    try {
        console.log('Fetching current data...');
        const getRes = await axios.get(`http://localhost:3001/api/states/${SLUG}`);
        let contributions = getRes.data.data.contributions;

        console.log(`Found ${contributions.length} contributions.`);

        if (contributions.length > 0) {
            contributions[0].title = "TEST UPDATE " + Date.now();
            contributions[0].image.url = "https://images.unsplash.com/photo-1566723224361-cc0a6a57088b?w=800"; // Use the URL we checked earlier (oops that was 404) 
            // Let's use a VALID URL this time.
            contributions[0].image.url = "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800"; // This one looked valid in seed data
            console.log('Payload prepared.');
        } else {
            console.error('No contributions to update!');
            return;
        }

        console.log('Sending PUT request...');
        const putRes = await axios.put(API_URL, { contributions }, {
            headers: { 'Authorization': AUTH }
        });

        console.log('PUT Response Status:', putRes.status);
        console.log('PUT Response Data:', JSON.stringify(putRes.data, null, 2));

    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
    }
}

testUpdate();

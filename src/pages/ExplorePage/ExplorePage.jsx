/**
 * ExplorePage - Map-Only Exploration Interface
 * 
 * User interacts with the map to select regions.
 * Click "Explore" button to navigate to region pages.
 */
import { MapProvider } from '../../context/MapContext';
import MapContainer from '../../components/Map/MapContainer';
import './ExplorePage.css';

export default function ExplorePage() {
    return (
        <MapProvider>
            <div className="explore-page">
                <MapContainer />
            </div>
        </MapProvider>
    );
}

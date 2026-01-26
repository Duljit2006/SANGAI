import './App.css'
import { MapProvider } from './context/MapContext'
import MapContainer from './components/Map/MapContainer'

function App() {
  return (
    <MapProvider>
      <div className="map-page">
        <MapContainer />
      </div>
    </MapProvider>
  )
}

export default App

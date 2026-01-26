import { createContext, useContext, useState, useCallback, useRef } from 'react';

const MapContext = createContext(null);

// View states: 'default' | 'state' | 'district'
export function MapProvider({ children }) {
    // Current view state
    const [viewState, setViewState] = useState('default');

    // Selected state and district
    const [selectedState, setSelectedState] = useState(null);
    const [selectedDistrict, setSelectedDistrict] = useState(null);

    // Label shown at bottom-left
    const [currentLabel, setCurrentLabel] = useState('Northeast India');

    // Zoom target feature (for calculating zoom bounds)
    const [zoomTarget, setZoomTarget] = useState(null);

    // Counter to force zoom effect re-trigger (incremented on each zoom action)
    const [zoomCounter, setZoomCounter] = useState(0);

    // Store the state feature for when we go back from district view
    const stateFeatureRef = useRef(null);

    // Select a state - transition from default to state view
    const selectState = useCallback((stateName, stateFeature) => {
        if (stateName === 'West Bengal') return; // West Bengal is not interactive

        // Set zoom target first (triggers D3 animation)
        setZoomTarget(stateFeature);
        stateFeatureRef.current = stateFeature;
        setZoomCounter(c => c + 1);

        // Solution B: Defer DOM-changing state updates to next frame
        // This allows D3 animation to start before React mounts new components
        requestAnimationFrame(() => {
            setSelectedState(stateName);
            setSelectedDistrict(null);
            setCurrentLabel(stateName);
            setViewState('state');
        });
    }, []);

    // Select a district - transition from state to district view
    const selectDistrict = useCallback((districtName, districtFeature) => {
        // Set zoom target first (triggers D3 animation)
        setZoomTarget(districtFeature);
        setZoomCounter(c => c + 1);

        // Solution B: Defer DOM-changing state updates to next frame
        requestAnimationFrame(() => {
            setSelectedDistrict(districtName);
            setCurrentLabel(districtName);
            setViewState('district');
        });
    }, []);

    // Go back one level
    const goBack = useCallback(() => {
        if (viewState === 'district') {
            // Go back to state view - restore the state feature as zoom target
            setZoomTarget(stateFeatureRef.current);
            setZoomCounter(c => c + 1);

            // Solution B: Defer DOM-changing state updates
            requestAnimationFrame(() => {
                setSelectedDistrict(null);
                setCurrentLabel(selectedState);
                setViewState('state');
            });
        } else if (viewState === 'state') {
            // Go back to default view
            setZoomTarget(null);
            setZoomCounter(c => c + 1);

            // Solution B: Defer DOM-changing state updates
            requestAnimationFrame(() => {
                setSelectedState(null);
                setSelectedDistrict(null);
                setCurrentLabel('Northeast India');
                stateFeatureRef.current = null;
                setViewState('default');
            });
        }
    }, [viewState, selectedState]);

    // Reset to default view
    const resetView = useCallback(() => {
        setViewState('default');
        setSelectedState(null);
        setSelectedDistrict(null);
        setCurrentLabel('Northeast India');
        setZoomTarget(null);
        stateFeatureRef.current = null;
        setZoomCounter(c => c + 1);
    }, []);

    // Tooltip State
    const [tooltipData, setTooltipData] = useState({ content: '', x: 0, y: 0, visible: false });

    // Show Tooltip with content and position
    const setTooltip = useCallback((data) => {
        setTooltipData(prev => ({ ...prev, ...data, visible: true }));
    }, []);

    const hideTooltip = useCallback(() => {
        setTooltipData(prev => ({ ...prev, visible: false }));
    }, []);

    return (
        <MapContext.Provider
            value={{
                viewState,
                selectedState,
                selectedDistrict,
                currentLabel,
                zoomTarget,
                zoomCounter,
                selectState,
                selectDistrict,
                goBack,
                resetView,
                tooltipData,
                setTooltip,
                hideTooltip,
            }}
        >
            {children}
        </MapContext.Provider>
    );
}

export function useMapContext() {
    const context = useContext(MapContext);
    if (!context) {
        throw new Error('useMapContext must be used within a MapProvider');
    }
    return context;
}


import { useMapContext } from '../../context/MapContext';
import { generateId, STATE_COLORS } from './mapUtils';

export default function StatesLayer({ pathGenerator, statesData }) {
    const { viewState, selectedState, selectState, setTooltip, hideTooltip } = useMapContext();

    if (!pathGenerator || !statesData) {
        return null;
    }

    const handleStateClick = (feature, e) => {
        e.stopPropagation();
        const stateName = feature.properties.ST_NM;

        // West Bengal is not interactive
        if (stateName === 'West Bengal') return;

        // Only allow clicks in default view
        if (viewState !== 'default') return;

        selectState(stateName, feature);
    };

    return (
        <g className="states-layer">
            {statesData.features.map((feature) => {
                const stateName = feature.properties.ST_NM;
                const stateId = generateId('state', stateName);
                const isWestBengal = stateName === 'West Bengal';
                const isSelected = selectedState === stateName;
                const pathD = pathGenerator(feature);

                if (!pathD) return null;

                // Determine visibility class based on viewState
                let visibilityClass = '';
                if (viewState === 'state') {
                    // In state view, hide all except selected state (including West Bengal)
                    if (!isSelected) {
                        visibilityClass = 'hidden';
                    }
                } else if (viewState === 'district') {
                    // In district view, hide all states (including West Bengal)
                    visibilityClass = 'hidden';
                }

                return (
                    <path
                        key={stateId}
                        id={stateId}
                        d={pathD}
                        className={`state-path ${isWestBengal ? 'west-bengal' : ''} ${isSelected ? 'selected' : ''} ${visibilityClass}`}
                        onClick={(e) => handleStateClick(feature, e)}
                        onMouseEnter={() => {
                            if (viewState === 'default' && !isWestBengal) {
                                setTooltip({ content: stateName, visible: true });
                            }
                        }}
                        onMouseLeave={() => hideTooltip()}
                        style={{
                            fill: isSelected ? '#a8d5ba' : (STATE_COLORS[stateName] || '#e8f4ea'),
                            stroke: '#000000',
                            strokeWidth: isSelected ? 2 : 1,
                        }}
                    >
                    </path>
                );
            })}
        </g>
    );
}

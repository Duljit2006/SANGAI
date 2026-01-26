import { useMapContext } from '../../context/MapContext';
import { generateId, STATE_COLORS, getParentShade } from './mapUtils';

export default function DistrictsLayer({ pathGenerator, districts, hidden = false }) {
    const { viewState, selectedDistrict, selectDistrict, setTooltip, hideTooltip } = useMapContext();

    // Solution C: Return empty group when hidden (stays mounted but renders nothing)
    // Or when no data available
    if (!pathGenerator || !districts || districts.length === 0) {
        return <g className="districts-layer" />;
    }

    const handleDistrictClick = (feature, e) => {
        e.stopPropagation();

        // Only allow clicks in state view
        if (viewState !== 'state') return;

        const districtName = feature.properties.DISTRICT;
        selectDistrict(districtName, feature);
    };

    return (
        <g className={`districts-layer ${hidden ? 'layer-hidden' : ''}`}>
            {districts.map((feature) => {
                const districtName = feature.properties.DISTRICT;
                const stateName = feature.properties.ST_NM;
                const districtId = generateId('district', districtName);
                const isSelected = selectedDistrict === districtName;
                const pathD = pathGenerator(feature);

                if (!pathD) return null;

                // Determine visibility class based on viewState
                let visibilityClass = '';
                if (viewState === 'district') {
                    // In district view, hide all except selected district
                    if (!isSelected) {
                        visibilityClass = 'hidden';
                    }
                }

                // Get base color from parent state, then generate shade
                const parentColor = STATE_COLORS[stateName] || '#e8f4ea';
                const fillColor = getParentShade(parentColor, districtName);

                return (
                    <path
                        key={districtId}
                        id={districtId}
                        d={pathD}
                        className={`district-path ${isSelected ? 'selected' : ''} ${visibilityClass}`}
                        onClick={(e) => handleDistrictClick(feature, e)}
                        onMouseEnter={() => {
                            if (viewState === 'state' || viewState === 'district') {
                                setTooltip({ content: districtName, visible: true });
                            }
                        }}
                        onMouseLeave={() => hideTooltip()}
                        style={{
                            fill: fillColor,
                            stroke: '#000000',
                            strokeWidth: isSelected ? 0.25 : 0.15,
                        }}
                    >
                    </path>
                );
            })}
        </g>
    );
}

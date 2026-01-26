/**
 * Generate a unique ID from a name
 */
export function generateId(prefix, name) {
    if (!name) return `${prefix}-unknown`;
    const slug = name
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '');
    return `${prefix}-${slug}`;
}

export const STATE_COLORS = {
    'Arunachal Pradesh': '#FFB3BA', // Pastel Red
    'Arunanchal Pradesh': '#FFB3BA', // Handle typo in GeoJSON
    'Assam': '#BAFFC9',             // Pastel Green
    'Manipur': '#BAE1FF',           // Pastel Blue
    'Meghalaya': '#FFFFBA',         // Pastel Yellow
    'Mizoram': '#FFDFBA',           // Pastel Orange
    'Nagaland': '#E2F0CB',          // Pastel Lime
    'Sikkim': '#D4C2FF',            // Pastel Purple
    'Tripura': '#FFC2E2',           // Pastel Pink
    'West Bengal': '#d0d0d0'        // Grey
};

export function getParentShade(parentColor, districtName) {
    if (!parentColor) return '#e0e0e0';

    // Parse Hex
    let c = parentColor.substring(1);
    let rgb = parseInt(c, 16);
    let r = (rgb >> 16) & 0xff;
    let g = (rgb >> 8) & 0xff;
    let b = (rgb >> 0) & 0xff;

    // Calculate variance based on name
    let hash = 0;
    for (let i = 0; i < districtName.length; i++) {
        hash = districtName.charCodeAt(i) + ((hash << 5) - hash);
    }
    // Variance between -30 (darker) and +10 (lighter)
    const amount = (hash % 50) - 35;

    // Clamp and apply
    r = Math.max(0, Math.min(255, r + amount));
    g = Math.max(0, Math.min(255, g + amount));
    b = Math.max(0, Math.min(255, b + amount));

    // Convert back to Hex
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

/**
 * Calculate winding order of a polygon ring
 * Returns positive for counter-clockwise, negative for clockwise
 */
function calculateWindingOrder(ring) {
    let sum = 0;
    for (let i = 0; i < ring.length - 1; i++) {
        const [x1, y1] = ring[i];
        const [x2, y2] = ring[i + 1];
        sum += (x2 - x1) * (y2 + y1);
    }
    return sum;
}

/**
 * Ensure correct winding order for d3-geo
 * Outer rings should be counter-clockwise (positive winding)
 * This fixes issues where d3-geo interprets polygons as "holes"
 */
function fixWindingOrder(coordinates, geometryType) {
    if (geometryType === 'Polygon') {
        return coordinates.map((ring, index) => {
            const winding = calculateWindingOrder(ring);
            // First ring is exterior - should be counter-clockwise (positive)
            // Subsequent rings are holes - should be clockwise (negative)
            const shouldBePositive = index === 0;
            const isPositive = winding > 0;

            if (shouldBePositive !== isPositive) {
                return [...ring].reverse();
            }
            return ring;
        });
    } else if (geometryType === 'MultiPolygon') {
        return coordinates.map(polygon =>
            polygon.map((ring, index) => {
                const winding = calculateWindingOrder(ring);
                const shouldBePositive = index === 0;
                const isPositive = winding > 0;

                if (shouldBePositive !== isPositive) {
                    return [...ring].reverse();
                }
                return ring;
            })
        );
    }
    return coordinates;
}

/**
 * Preprocess GeoJSON to fix winding order issues
 */
export function preprocessGeoJSON(geojson) {
    if (!geojson || !geojson.features) return geojson;

    return {
        ...geojson,
        features: geojson.features.map(feature => {
            if (!feature.geometry || !feature.geometry.coordinates) {
                return feature;
            }

            return {
                ...feature,
                geometry: {
                    ...feature.geometry,
                    coordinates: fixWindingOrder(
                        feature.geometry.coordinates,
                        feature.geometry.type
                    )
                }
            };
        })
    };
}

/**
 * Calculate bounds for a collection of features manually
 */
export function calculateCollectionBounds(features) {
    let minLon = Infinity, maxLon = -Infinity;
    let minLat = Infinity, maxLat = -Infinity;

    function processCoords(coords) {
        coords.forEach(coord => {
            if (Array.isArray(coord[0])) {
                processCoords(coord);
            } else {
                const [lon, lat] = coord;
                if (isFinite(lon) && isFinite(lat)) {
                    minLon = Math.min(minLon, lon);
                    maxLon = Math.max(maxLon, lon);
                    minLat = Math.min(minLat, lat);
                    maxLat = Math.max(maxLat, lat);
                }
            }
        });
    }

    features.forEach(feature => {
        if (feature.geometry && feature.geometry.coordinates) {
            processCoords(feature.geometry.coordinates);
        }
    });

    return [[minLon, minLat], [maxLon, maxLat]];
}

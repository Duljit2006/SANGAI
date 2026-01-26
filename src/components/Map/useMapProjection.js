import { useMemo } from 'react';
import { geoMercator, geoPath } from 'd3-geo';

/**
 * Custom hook to create a map projection and path generator
 * Auto-centers and scales to fit the provided GeoJSON data
 */
export function useMapProjection(geoData, width, height) {
    return useMemo(() => {
        if (!geoData || !geoData.features || geoData.features.length === 0) {
            return { projection: null, pathGenerator: null };
        }

        // Create Mercator projection
        const projection = geoMercator();

        // Fit the projection to the GeoJSON data with some padding
        const padding = 20;
        projection.fitSize(
            [width - padding * 2, height - padding * 2],
            geoData
        );

        // Adjust for padding
        const [tx, ty] = projection.translate();
        projection.translate([tx + padding, ty + padding]);

        // Create path generator using the projection
        const pathGenerator = geoPath().projection(projection);

        return { projection, pathGenerator };
    }, [geoData, width, height]);
}

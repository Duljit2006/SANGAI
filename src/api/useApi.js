/**
 * Custom React hooks for API data fetching
 */
import { useState, useEffect, useCallback } from 'react';
import * as api from './apiService';

/**
 * Generic data fetching hook
 */
export function useApiData(fetchFn, params = null, immediate = true) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(immediate);
    const [error, setError] = useState(null);

    const execute = useCallback(async (newParams) => {
        setLoading(true);
        setError(null);
        try {
            const result = await fetchFn(newParams ?? params);
            setData(result);
            return result;
        }
        catch (err) {
            setError(err.message);
            return null;
        }
        finally {
            setLoading(false);
        }
    }, [fetchFn, params]);

    useEffect(() => {
        if (immediate) {
            execute();
        }
    }, []);

    return { data, loading, error, refetch: execute };
}

// ============ District Hooks ============

export function useDistricts() {
    return useApiData(api.getDistricts);
}

export function useDistrictsByState(stateCode) {
    return useApiData(() => api.getDistrictsByState(stateCode), null, !!stateCode);
}

export function useDistrict(id) {
    return useApiData(() => api.getDistrictById(id), null, !!id);
}

// ============ Places Hooks ============

export function usePlaces(params = {}) {
    return useApiData(() => api.getPlaces(params), params);
}

export function usePlace(id) {
    return useApiData(() => api.getPlaceById(id), null, !!id);
}

export function usePlaceTypes() {
    return useApiData(api.getPlaceTypes);
}

export function useNearbyPlaces(lat, lng, maxDistance) {
    return useApiData(
        () => api.getNearbyPlaces(lat, lng, maxDistance),
        null,
        !!(lat && lng)
    );
}

// ============ Homestays Hooks ============

export function useHomestays(params = {}) {
    return useApiData(() => api.getHomestays(params), params);
}

export function useHomestay(id) {
    return useApiData(() => api.getHomestayById(id), null, !!id);
}

export function useAmenities() {
    return useApiData(api.getAmenities);
}

// ============ Guides Hooks ============

export function useGuides(params = {}) {
    return useApiData(() => api.getGuides(params), params);
}

export function useGuide(id) {
    return useApiData(() => api.getGuideById(id), null, !!id);
}

export function useGuideLanguages() {
    return useApiData(api.getGuideLanguages);
}

export function useGuideSpecialties() {
    return useApiData(api.getGuideSpecialties);
}

// ============ Festivals Hooks ============

export function useFestivals() {
    return useApiData(api.getFestivals);
}

export function useFestival(id) {
    return useApiData(() => api.getFestivalById(id), null, !!id);
}

export function useUpcomingFestivals(limit = 10) {
    return useApiData(() => api.getUpcomingFestivals(limit));
}

export function useFestivalsByMonth(month) {
    return useApiData(() => api.getFestivalsByMonth(month), null, !!month);
}

// ============ Search Hook ============

export function useSearch(query, type = null) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const search = useCallback(async (searchQuery, searchType) => {
        if (!searchQuery || searchQuery.length < 2) return;

        setLoading(true);
        setError(null);
        try {
            const result = await api.searchAll(searchQuery, searchType);
            setData(result);
            return result;
        }
        catch (err) {
            setError(err.message);
            return null;
        }
        finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (query && query.length >= 2) {
            search(query, type);
        }
    }, [query, type, search]);

    return { data, loading, error, search };
}

// ============ Tags Hook ============

export function useTags() {
    return useApiData(api.getTags);
}

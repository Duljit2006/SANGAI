import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getPlaceById } from '../../api/apiService';

export default function DestinationDetailsPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [place, setPlace] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPlace = async () => {
            try {
                const data = await getPlaceById(id);
                setPlace(data);
                setLoading(false);
            } catch (err) {
                console.error("Failed to fetch place:", err);
                setError(err.message);
                setLoading(false);
            }
        };

        if (id) {
            fetchPlace();
        }
    }, [id]);

    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center bg-[#FFFFE3] dark:bg-neutral-900">
                <div className="text-xl text-[#6D8196]">Loading...</div>
            </div>
        );
    }

    if (error || !place) {
        return (
            <div className="flex h-screen flex-col items-center justify-center bg-[#FFFFE3] dark:bg-neutral-900">
                <div className="text-xl text-red-500">Failed to load destination</div>
                <button onClick={() => navigate(-1)} className="mt-4 rounded bg-[#6D8196] px-4 py-2 text-white">Go Back</button>
            </div>
        );
    }

    // Default data
    const heroImage = place.images?.[0]?.url || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200';
    const placeName = place.name || 'Destination';
    const districtName = place.districtId?.districtName || 'Meghalaya';
    const shortDesc = place.shortDescription || `Experience the breathtaking beauty of ${placeName}, a hidden gem waiting to be discovered.`;
    const fullDesc = place.description || `Located in the heart of ${districtName}, ${placeName} offers visitors a unique glimpse into the natural splendor of the region. Whether you are an adventure seeker or looking for tranquility, this destination promises an unforgettable experience.`;

    return (
        <div className="bg-white text-black dark:bg-neutral-900">
            {/* HERO SECTION */}
            <section className="relative bg-cover bg-fixed bg-center bg-no-repeat h-[80dvh]">
                <figure className="group relative overflow-hidden transition-all duration-1000 ease-in-out hover:scale-[0.97] !absolute inset-0 !rounded-none object-cover">
                    <img
                        alt={placeName}
                        className="h-full w-full object-cover dark:brightness-90 dark:contrast-125 transition-all duration-1000 ease-in-out group-hover:scale-[1.10] !rounded-0"
                        src={heroImage}
                    />
                </figure>
                <div className="relative z-10 flex h-full flex-col items-center justify-center before:absolute before:inset-0 before:-z-[1] before:bg-gradient-to-b before:from-black/5 before:via-black/15 before:to-black/40 before:content-['']">
                    <p className="font-montserrat px-4 text-center text-2xl leading-normal font-bold text-white capitalize md:text-3xl lg:text-4xl">
                        {placeName}
                    </p>

                    {/* Breadcrumbs */}
                    <section className="absolute right-0 bottom-0 left-0 w-full">
                        <div className="container mx-auto max-w-6xl border-t border-white/20 px-4 py-5">
                            <nav aria-label="breadcrumb" className="w-full">
                                <div className="scrollbar-hide flex items-center overflow-x-auto text-white">
                                    <Link className="flex-shrink-0 p-1 text-slate-200 transition-colors hover:text-white" aria-label="Home" to="/">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house h-4 w-4">
                                            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                                            <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                        </svg>
                                    </Link>
                                    <div className="flex flex-shrink-0 items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right mx-1 h-3 w-3 text-slate-50">
                                            <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                        <Link className="min-w-0 rounded px-2 py-1 text-xs transition-colors text-slate-200 hover:bg-white/10 hover:text-white" to="/explore">
                                            <span className="block max-w-[120px] truncate md:max-w-md">Explore</span>
                                        </Link>
                                    </div>
                                    <div className="flex flex-shrink-0 items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right mx-1 h-3 w-3 text-slate-50">
                                            <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                        <span className="min-w-0 rounded px-2 py-1 text-xs font-medium text-white">
                                            <span className="block max-w-[120px] truncate md:max-w-md">{placeName}</span>
                                        </span>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </section>
                </div>
            </section>

            {/* MAIN CONTENT SPLIT */}
            <section className="mx-auto flex flex-wrap items-start gap-0 px-4 pt-12 md:max-w-7xl md:gap-0 md:pt-20 lg:flex-nowrap lg:gap-16 lg:pt-20">
                {/* Left Column */}
                <div className="flex w-full flex-col lg:w-8/12">
                    {/* Description Section */}
                    <div className="flex flex-wrap items-start justify-center gap-12 pb-12 md:flex-nowrap md:justify-between md:pb-20 lg:flex-nowrap lg:justify-between lg:pb-20">
                        <div className="space-y-10 text-left">
                            <p className="font-montserrat text-base leading-relaxed font-medium text-black italic dark:text-neutral-100">
                                "{shortDesc}"
                            </p>
                            <div className="font-montserrat text-base leading-relaxed text-black dark:text-neutral-400 whitespace-pre-line">
                                {fullDesc}
                            </div>
                        </div>
                    </div>

                    {/* Info Cards Grid */}
                    <div className="grid grid-cols-1 gap-6 pb-12 md:grid-cols-3 md:pb-20 lg:pb-20">
                        {/* Map Icon Card */}
                        <div className="bg-[#F0EFEB] p-6 text-start dark:bg-neutral-800 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map h-12 w-12 text-green-700 dark:text-green-400">
                                <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path>
                                <path d="M15 5.764v15"></path>
                                <path d="M9 3.236v15"></path>
                            </svg>
                            <div className="pt-10">
                                <p className="font-montserrat pb-1.5 text-sm font-medium dark:text-neutral-100"></p>
                                <p className="font-montserrat text-[11px] leading-normal font-extralight dark:text-neutral-100">
                                    Accessible from {districtName}. Local transport available from major towns.
                                </p>
                            </div>
                        </div>

                        {/* Car Icon Card */}
                        <div className="bg-[#F0EFEB] p-6 text-start dark:bg-neutral-800 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-car-taxi-front h-12 w-12 text-green-700 dark:text-green-400">
                                <path d="M10 2h4"></path>
                                <path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"></path>
                                <path d="M7 14h.01"></path>
                                <path d="M17 14h.01"></path>
                                <rect width="18" height="8" x="3" y="10" rx="2"></rect>
                                <path d="M5 18v2"></path>
                                <path d="M19 18v2"></path>
                            </svg>
                            <div className="pt-10">
                                <p className="font-montserrat pb-1.5 text-sm font-medium dark:text-neutral-100">~20-40 Kms</p>
                                <p className="font-montserrat text-[11px] leading-normal font-extralight dark:text-neutral-100">
                                    Approximate distance from district headquarters.
                                </p>
                            </div>
                        </div>

                        {/* Building Icon Card */}
                        <div className="bg-[#F0EFEB] p-6 text-start dark:bg-neutral-800 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building2 lucide-building-2 h-12 w-12 text-green-700 dark:text-green-400">
                                <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                                <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                                <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                                <path d="M10 6h4"></path>
                                <path d="M10 10h4"></path>
                                <path d="M10 14h4"></path>
                                <path d="M10 18h4"></path>
                            </svg>
                            <div className="pt-10">
                                <p className="font-montserrat pb-1.5 text-sm font-medium dark:text-neutral-100"></p>
                                <p className="font-montserrat text-[11px] leading-normal font-extralight dark:text-neutral-100">
                                    Local guides recommended for the comprehensive experience.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Don't Miss Section */}
                    <div className="pb-12 md:pb-20 lg:pb-20">
                        <h2 className="font-montserrat pb-12 text-3xl font-bold dark:text-neutral-100">Don't miss!</h2>
                        <div className="grid min-h-52 gap-8 grid-cols-1 lg:grid-cols-3 md:grid-cols-3">
                            {['Scenic Viewpoints', 'Local Cuisine', 'Cultural Interactions'].map((item, i) => (
                                <div key={i} className="flex min-h-52 items-center justify-center bg-[#F0EFEB] p-6 dark:bg-neutral-800 rounded-lg">
                                    <div className="font-raleway text-center text-sm leading-normal font-medium text-black dark:text-neutral-400">
                                        Experience {item} at {placeName}. unique to this region.
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* How to Get There & Nearby */}
                    <div className="pb-12 md:pb-20 lg:pb-20">
                        <div className="space-y-10">
                            <div className="pb-0">
                                <h2 className="font-montserrat m-0 pb-12 text-3xl font-bold text-black dark:text-neutral-100">How to Get There</h2>
                                <ul className="list-disc space-y-2 pl-4 text-neutral-700 dark:text-neutral-400">
                                    <li className="font-montserrat text-1xl leading-normal">
                                        Located in {districtName}, typically a drive from the nearest major town.
                                    </li>
                                    <li className="font-montserrat text-1xl leading-normal">
                                        Shared taxis and private cabs are the most common mode of transport.
                                    </li>
                                    <li className="font-montserrat text-1xl leading-normal">
                                        Best time to visit is typically between October and April for pleasant weather.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column (Sidebar) */}
                <div className="sticky top-24 flex w-full flex-col items-center justify-center gap-6 space-y-4 pb-12 md:flex-row md:items-stretch md:space-y-0 md:pb-20 lg:flex lg:w-4/12 lg:flex-col lg:space-y-4 lg:pb-20">

                    {/* Map Widget */}
                    <div className="flex w-full flex-col gap-10 bg-[#F1F0EA] p-4 dark:bg-neutral-800 rounded-md">
                        <div className="w-full aspect-video bg-neutral-300 dark:bg-neutral-700 flex items-center justify-center">
                            {/* Placeholder for real map */}
                            <iframe
                                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d91.8!3d25.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s${encodeURIComponent(placeName)}!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin`}
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: '220px' }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Map"
                            ></iframe>
                        </div>
                    </div>

                    {/* Weather Widget */}
                    <div className="flex w-full flex-col gap-10 rounded-md bg-[#F1F0EA] p-4 dark:bg-neutral-800 text-left">
                        <div className="font-montserrat space-y-4">
                            <p className="font-semibold dark:text-neutral-100">Weather Today</p>
                            <div className="flex items-center gap-4">
                                <div className="text-4xl">🌤️</div>
                                <div className="group">
                                    <p className="text-3xl font-light dark:text-neutral-100">20°</p>
                                    <small className="capitalize dark:text-neutral-400">Partly Cloudy</small>
                                </div>
                            </div>
                            <a href={`https://www.google.com/search?q=weather+${placeName}`} className="flex items-center gap-1.5 text-sm text-green-800 dark:text-green-400" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-4 w-4">
                                    <path d="m9 18 6-6-6-6"></path>
                                </svg>
                                <span>Weather Forecast</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-4 w-4">
                                    <path d="M7 7h10v10"></path>
                                    <path d="M7 17 17 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Helpline Widget */}
                    <div className="flex w-full flex-col gap-3 bg-[#F1F0EA] p-4 dark:bg-neutral-800 rounded-md">
                        <p className="font-montserrat text-base font-medium text-black dark:text-neutral-100 text-left">
                            Please call for assistance at the<span className="ml-2 font-bold"> toll free number</span>
                        </p>
                        <ul className="flex flex-col gap-2 text-left text-neutral-900 dark:text-neutral-100">
                            <li>
                                <a href="tel:18001234567" className="flex w-full flex-row items-center border border-neutral-200 p-4 text-base font-bold dark:border-neutral-700 bg-white dark:bg-neutral-900 rounded">
                                    <div className="mr-3 flex h-8 w-8 items-center justify-center bg-green-50 dark:bg-neutral-800 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone-call h-4 w-4 text-green-500">
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                            <path d="M14.05 2a9 9 0 0 1 8 7.94"></path>
                                            <path d="M14.05 6A5 5 0 0 1 18 10"></path>
                                        </svg>
                                    </div>
                                    <div className="flex flex-col">
                                        <span>Call Our Helpline</span>
                                        <small className="block text-xs font-light">1800-123-4567</small>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </section>
        </div>
    );
}

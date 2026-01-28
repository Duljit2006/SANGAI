import React from 'react';
// import { useOutletContext } from 'react-router-dom';
import './StoryView.css';

/**
 * Story View - Cultural Documentary Layout
 * Renders the deep dive content for a state/region
 */
export default function StoryView() {
    // We'll get data from the parent layout later, for now we use the design structure
    // const { regionData } = useOutletContext(); 

    return (
        <div className="story-view">
            <div className="story-intro">
                <p>
                    For centuries, the Naga tribes lived in isolation, developing unique cultures, dialects, and traditions that vary from village to village. Today, Nagaland stands as a testament to the resilience of indigenous culture in the modern world.
                </p>
            </div>

            <div className="story-sidebar">
                <div className="insights-card">
                    <h3>
                        <span className="material-symbols-outlined text-primary">analytics</span>
                        Key Insights
                    </h3>
                    <div className="insight-item">
                        <div className="insight-icon"><span className="material-symbols-outlined">groups</span></div>
                        <div>
                            <span className="insight-label">Tribes</span>
                            <span className="insight-value">16 Major Tribes</span>
                            <span className="insight-sub">Each with unique customs</span>
                        </div>
                    </div>
                    <div className="insight-item">
                        <div className="insight-icon"><span className="material-symbols-outlined">location_city</span></div>
                        <div>
                            <span className="insight-label">Capital</span>
                            <span className="insight-value">Kohima</span>
                            <span className="insight-sub">Historic hill station</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* CULTURAL PILLARS */}
            <section className="story-pillars">
                <div className="pillars-header">
                    <div>
                        <h2>Cultural Pillars</h2>
                        <p>The foundational elements that uphold Naga society.</p>
                    </div>
                    <div className="pillars-nav">
                        <button className="nav-btn"><span className="material-symbols-outlined">arrow_back</span></button>
                        <button className="nav-btn"><span className="material-symbols-outlined">arrow_forward</span></button>
                    </div>
                </div>

                <div className="pillars-scroller">
                    {/* Card 1 */}
                    <div className="pillar-card">
                        <div className="pillar-bg" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA6YPL-yfgIEeiVc7_uSfAFEtsV9F-hpWmsEGzwP0lFtD8Y_mX-GdhafZLfgTqMkX-uRW2KrH0a6Je3ZHgJInTLddjTbfZBqCtKT27VKK34XfVdh5CTsXUU8-ROz9ylz8sRKLCfC5dJkW-aEMw-F3AzI3zdTIvXCx1gb_bQHrZkeRIGasEfX2dT0sFwLNXT-iEMH8Xkx2hbceISrXnSOL1Rngl3--BgjDMcn3OEKmPZr_5cYH1P_ZF6SowP881P_-rI2VxKiKzVEQ")' }}></div>
                        <div className="pillar-overlay"></div>
                        <div className="pillar-content">
                            <div className="pillar-tag">
                                <span className="material-symbols-outlined">palette</span>
                                <span>Artistry</span>
                            </div>
                            <h3>Weaving & Crafts</h3>
                            <p>The shawl is not just a garment; it is a marker of identity, status, and achievement.</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="pillar-card">
                        <div className="pillar-bg" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBIeDVViQXwqrziDIPPu4M9pEgswpNcnN8KBL2hdFKhXKGhdB83Tv5k45AeRNEgdA73jrwITfWmbkM_CC8vlifvYEJs1NI4oq8yQtSmtVNIQlZpeGa5YYSvzbRyNyn3o2Ba6XnZBMjDJhBYnGjT2SnT38vLtoNfVhP9G4eOfc7eYvLEbr9Dy-Jfe2Ai9xovhUAgbAd5Wka4UprvQaGHEo3FzaTtJARBpWDZe471NFn9t-Zsgllsn7Cry0uiu4__Lbv_7BtDMs_icg")' }}></div>
                        <div className="pillar-overlay"></div>
                        <div className="pillar-content">
                            <div className="pillar-tag">
                                <span className="material-symbols-outlined">music_note</span>
                                <span>Oral Tradition</span>
                            </div>
                            <h3>Folk Songs</h3>
                            <p>Polyphonic melodies that recount history, agricultural cycles, and tales of romance.</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="pillar-card grayscale">
                        <div className="pillar-bg" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCtA73m32v_sAL1D2bVMG9xMffC0j60rqTgPA97BXalsbHMk2m6bAD8PtAQAw5_HB6OtYp2KcuOxxlLH2K9KnMxJUFpjELvbZsmh2Td10iL1p8WSN_yFZIT_kaTzI5k4h-eVDI32Ph5mI_NVrKe6W1vTKAvVkj_VXYJyQnQB-dhXfHjv4nAV9pvCPcLjWPMdiT0Dx4un3l2mZ4e5bFebR6sq2tUTDcn3WLEZU0gl4KrX3r6UQNHd3_bx4fLXIPvkZ41B8YswmfvwA")' }}></div>
                        <div className="pillar-overlay"></div>
                        <div className="pillar-content">
                            <div className="pillar-tag">
                                <span className="material-symbols-outlined">diversity_3</span>
                                <span>Community</span>
                            </div>
                            <h3>The Morung</h3>
                            <p>The traditional dormitory system where youth learned discipline, warfare, and social values.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURE FEATURE */}
            <section className="story-feature">
                <div className="feature-img-box">
                    <div className="feature-bg" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC_64yUvKpgOU-9vz1EvDe5xEDWj4gQf19mOtaPJEtqYRZ2zOwSpH4BbRSSBou3kz5woBgnhPaKLG3hPByHr9GMJX-aePUCypruTwFFRfXHRG-4Hyo50eKq9dVwmSTT9i3DIOOXRN__4smH0v2DgIpPscEuUH-eWLsp8fLGk1_DxkoYcQ_Cc5_g8KOyO2OEcQuiyzHD-CzbClK4zILvV4BZuxwposBXlrDNWnn4-RWQF_hqKua-CRczcjVAzrnK5fNB_IK6jMvO8Q")' }}></div>
                </div>
                <div className="feature-content">
                    <div className="feature-tag">
                        <span className="material-symbols-outlined">eco</span>
                        <span>Natural Legacy</span>
                    </div>
                    <h2>The Falcon Capital of the World</h2>
                    <p>
                        Every year, millions of Amur Falcons roost in Nagaland's Doyang reservoir during their migration from Mongolia to South Africa. Once hunted, they are now fiercely protected by the local communities.
                    </p>
                    <div className="feature-stats">
                        <div>
                            <strong>360+</strong>
                            <span>Orchid Species</span>
                        </div>
                        <div>
                            <strong>80%</strong>
                            <span>Forest Cover</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* IMPACT SECTION */}
            <section className="story-impact">
                <div className="impact-header">
                    <h2>Why Preservation Matters</h2>
                    <p>Sustainable tourism is the key to keeping these stories alive.</p>
                </div>

                <div className="impact-grid">
                    <div className="impact-card">
                        <div className="impact-icon-box"><span className="material-symbols-outlined">school</span></div>
                        <h3>Cultural Education</h3>
                        <p>Funding local schools that integrate traditional arts.</p>
                        <div className="impact-bar"><div className="fill" style={{ width: '75%' }}></div></div>
                        <span className="impact-meta">75% Goal Reached</span>
                    </div>

                    <div className="impact-card">
                        <div className="impact-icon-box"><span className="material-symbols-outlined">forest</span></div>
                        <h3>Forest Conservation</h3>
                        <p>Empowering village councils to enforce hunting bans.</p>
                        <div className="impact-bar"><div className="fill" style={{ width: '50%' }}></div></div>
                        <span className="impact-meta">Ongoing Project</span>
                    </div>
                </div>
            </section>
            <div className="content-surface"></div>
        </div>
    );
}


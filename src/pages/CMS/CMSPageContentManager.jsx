
import { useState, useEffect } from 'react';

/**
 * CMSPageContentManager
 * Manage written content for Region, State, and District pages:
 * - Hero Tagline
 * - Description Section (Title & Content)
 * - Glance Description
 * - Gateway Description
 */
export default function CMSPageContentManager() {
    const [scope, setScope] = useState('region'); // region, state, district
    const [states, setStates] = useState([]);
    const [districts, setDistricts] = useState([]);

    // Selection state
    const [selectedStateSlug, setSelectedStateSlug] = useState('');
    const [selectedDistrictSlug, setSelectedDistrictSlug] = useState('');

    const [loading, setLoading] = useState(false);
    const [saving, setSaving] = useState(false);
    const [successMsg, setSuccessMsg] = useState('');

    // Form Data
    const [formData, setFormData] = useState({
        tagline: '',
        description: { title: '', content: '' },
        glance: { description: '' },
        gateway: { title: '', description: '' }
    });

    const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';
    const getAuthHeader = () => ({ 'Authorization': sessionStorage.getItem('cms_auth') });

    // Fetch states on mount
    useEffect(() => {
        fetchStates();
    }, []);

    const fetchStates = async () => {
        try {
            const res = await fetch(`${API_BASE}/states`);
            const data = await res.json();
            if (data.success) setStates(data.data);
        } catch (err) {
            console.error('Failed to fetch states:', err);
        }
    };

    // Load Districts when State Selected (if scope is district)
    useEffect(() => {
        if (scope === 'district' && selectedStateSlug) {
            fetchDistricts(selectedStateSlug);
        }
    }, [scope, selectedStateSlug]);

    const fetchDistricts = async (stateSlug) => {
        try {
            // Find state code to fetch districts
            const state = states.find(s => s.slug === stateSlug);
            if (!state) return;

            const res = await fetch(`${API_BASE}/districts?stateCode=${state.code}`);
            const data = await res.json();
            if (data.success) setDistricts(data.data);
        } catch (err) {
            console.error('Failed to fetch districts:', err);
        }
    };

    // Load Content Logic
    useEffect(() => {
        if (scope === 'region') {
            fetchContent('regions/northeast');
        } else if (scope === 'state' && selectedStateSlug) {
            fetchContent(`states/${selectedStateSlug}`);
        } else if (scope === 'district' && selectedDistrictSlug) {
            fetchContent(`districts/${selectedDistrictSlug}`);
        } else {
            // Reset form if no valid selection
            setFormData({
                tagline: '',
                description: { title: '', content: '' },
                glance: { description: '' },
                gateway: { title: '', description: '' }
            });
        }
    }, [scope, selectedStateSlug, selectedDistrictSlug]);

    const fetchContent = async (endpoint) => {
        setLoading(true);
        try {
            const res = await fetch(`${API_BASE}/${endpoint}`);
            const data = await res.json();

            if (data.success) {
                const item = data.data;
                setFormData({
                    tagline: item.tagline || '',
                    description: {
                        title: item.description?.title || '',
                        content: item.description?.content || ''
                    },
                    glance: {
                        description: item.glance?.description || ''
                    },
                    gateway: {
                        title: item.gateway?.title || '',
                        description: item.gateway?.description || ''
                    }
                });
            }
        } catch (err) {
            console.error('Failed to fetch content:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async () => {
        setSaving(true);
        setSuccessMsg('');

        let endpoint = '';
        if (scope === 'region') endpoint = 'regions/northeast/content';
        else if (scope === 'state') endpoint = `states/${selectedStateSlug}/content`;
        else if (scope === 'district') endpoint = `districts/${selectedDistrictSlug}/content`;

        if (!endpoint) return;

        try {
            const res = await fetch(`${API_BASE}/cms/${endpoint}`, {
                method: 'PUT',
                headers: {
                    ...getAuthHeader(),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                setSuccessMsg('Content saved successfully!');
                setTimeout(() => setSuccessMsg(''), 3000);
            } else {
                alert('Failed to save content');
            }
        } catch (err) {
            console.error('Save error:', err);
            alert('Error saving content');
        } finally {
            setSaving(false);
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Page Content Manager</h2>
            <p style={{ color: '#666' }}>Manage Taglines, Descriptions, and Intro text.</p>

            {/* Scope Selection */}
            <div style={{ marginBottom: '20px', padding: '15px', background: '#f5f5f5', borderRadius: '8px' }}>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ marginRight: '15px', fontWeight: 'bold' }}>Scope:</label>
                    <select
                        value={scope}
                        onChange={(e) => {
                            setScope(e.target.value);
                            setSelectedStateSlug('');
                            setSelectedDistrictSlug('');
                        }}
                        style={{ padding: '8px' }}
                    >
                        <option value="region">Region (Northeast)</option>
                        <option value="state">State</option>
                        <option value="district">District</option>
                    </select>
                </div>

                {scope !== 'region' && (
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ marginRight: '15px' }}>Select State:</label>
                        <select
                            value={selectedStateSlug}
                            onChange={(e) => {
                                setSelectedStateSlug(e.target.value);
                                setSelectedDistrictSlug('');
                            }}
                            style={{ padding: '8px' }}
                        >
                            <option value="">-- Select State --</option>
                            {states.map(s => (
                                <option key={s.slug} value={s.slug}>{s.name}</option>
                            ))}
                        </select>
                    </div>
                )}

                {scope === 'district' && selectedStateSlug && (
                    <div>
                        <label style={{ marginRight: '15px' }}>Select District:</label>
                        <select
                            value={selectedDistrictSlug}
                            onChange={(e) => setSelectedDistrictSlug(e.target.value)}
                            style={{ padding: '8px' }}
                        >
                            <option value="">-- Select District --</option>
                            {districts.map(d => (
                                <option key={d.slug} value={d.slug}>{d.districtName}</option>
                            ))}
                        </select>
                    </div>
                )}
            </div>

            {loading && <p>Loading...</p>}

            {!loading && (
                <div>
                    {successMsg && (
                        <div style={{
                            background: '#d4fdd4',
                            border: '1px solid #4a4',
                            padding: '10px',
                            borderRadius: '4px',
                            marginBottom: '20px'
                        }}>
                            ✓ {successMsg}
                        </div>
                    )}

                    {/* Form Fields */}
                    {/* 1. Hero Tagline */}
                    <Section title="1. Hero Section">
                        <Field label="Tagline (displayed below name)">
                            <input
                                type="text"
                                value={formData.tagline}
                                onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                                style={inputStyle}
                                placeholder="e.g. The Hidden Jewel"
                            />
                        </Field>
                    </Section>

                    {/* 2. Description Section */}
                    <Section title="2. Description Section (.desc-paragraph)">
                        <Field label="Title">
                            <input
                                type="text"
                                value={formData.description.title}
                                onChange={(e) => setFormData({
                                    ...formData,
                                    description: { ...formData.description, title: e.target.value }
                                })}
                                style={inputStyle}
                            />
                        </Field>
                        <Field label="Content">
                            <textarea
                                value={formData.description.content}
                                onChange={(e) => setFormData({
                                    ...formData,
                                    description: { ...formData.description, content: e.target.value }
                                })}
                                style={{ ...inputStyle, height: '100px' }}
                            />
                        </Field>
                    </Section>

                    {/* 3. Glance Section */}
                    <Section title="3. At a Glance (.glance-description)">
                        <Field label="Description">
                            <textarea
                                value={formData.glance.description}
                                onChange={(e) => setFormData({
                                    ...formData,
                                    glance: { ...formData.glance, description: e.target.value }
                                })}
                                style={{ ...inputStyle, height: '80px' }}
                            />
                        </Field>
                    </Section>

                    {/* 4. Gateway Section */}
                    {/* Only show for Region/State/District if applicable (Gateway usually links to children or siblings) */}
                    <Section title="4. Gateway / Explore More (.gateway-description)">
                        <Field label="Title">
                            <input
                                type="text"
                                value={formData.gateway.title}
                                onChange={(e) => setFormData({
                                    ...formData,
                                    gateway: { ...formData.gateway, title: e.target.value }
                                })}
                                style={inputStyle}
                            />
                        </Field>
                        <Field label="Description">
                            <textarea
                                value={formData.gateway.description}
                                onChange={(e) => setFormData({
                                    ...formData,
                                    gateway: { ...formData.gateway, description: e.target.value }
                                })}
                                style={{ ...inputStyle, height: '80px' }}
                            />
                        </Field>
                    </Section>

                    <button
                        onClick={handleSave}
                        disabled={saving || (scope !== 'region' && !selectedStateSlug) || (scope === 'district' && !selectedDistrictSlug)}
                        style={{
                            background: '#333',
                            color: 'white',
                            padding: '15px 30px',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '16px',
                            marginTop: '20px'
                        }}
                    >
                        {saving ? 'Saving...' : 'Save All Changes'}
                    </button>
                </div>
            )}
        </div>
    );
}

// Sub-components for styling
const Section = ({ title, children }) => (
    <div style={{ marginBottom: '24px', border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
        <h3 style={{ marginTop: 0, marginBottom: '15px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>{title}</h3>
        {children}
    </div>
);

const Field = ({ label, children }) => (
    <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>{label}</label>
        {children}
    </div>
);

const inputStyle = {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '14px',
    fontFamily: 'inherit'
};

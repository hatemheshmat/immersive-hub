import React, { useState, useMemo } from 'react';
import { Search, Clock, Tag, Globe, Beaker, Layers, Map, Building2, Sparkles, ChevronRight } from 'lucide-react';
import './LibraryCatalog.css';

const CATEGORIES = ['All', '360° Exploration', 'Science Lab', 'Mixed Reality', 'Cultural Heritage', 'History'];

const CATALOG_ITEMS = [
    {
        id: 1, title: 'Journey to Mars', category: '360° Exploration', duration: '25 min',
        description: 'Take a virtual field trip to the red planet and explore its landscape, terrain, and atmosphere.',
        image: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=600&h=400&fit=crop',
        grade: 'Grades 4-8', subject: 'Earth Science',
    },
    {
        id: 2, title: 'Amazon Rainforest', category: '360° Exploration', duration: '20 min',
        description: 'Explore the world\'s largest rainforest ecosystem. Discover biodiversity and conservation in action.',
        image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&h=400&fit=crop',
        grade: 'Grades 3-7', subject: 'Life Science',
    },
    {
        id: 3, title: 'Conductors & Insulators', category: 'Science Lab', duration: '15 min',
        description: 'Interactive virtual lab: test materials for conductivity. Build circuits and observe real-time results.',
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop',
        grade: 'Grades 5-9', subject: 'Physics',
    },
    {
        id: 4, title: 'Chemical Reactions', category: 'Science Lab', duration: '18 min',
        description: 'Mix chemicals safely in a virtual lab environment. Observe exothermic and endothermic reactions.',
        image: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=600&h=400&fit=crop',
        grade: 'Grades 6-10', subject: 'Chemistry',
    },
    {
        id: 5, title: 'Human Anatomy: Lungs', category: 'Mixed Reality', duration: '22 min',
        description: 'Teacher-led MR lesson: project a 3D lung model into the classroom. Explore the respiratory system.',
        image: '/vr_mixed_reality.jpg',
        grade: 'Grades 5-9', subject: 'Biology',
    },
    {
        id: 6, title: 'Human Heart', category: 'Mixed Reality', duration: '20 min',
        description: 'Interactive 3D heart model: explore chambers, valves, and blood flow in real-time.',
        image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=400&fit=crop',
        grade: 'Grades 5-9', subject: 'Biology',
    },
    {
        id: 7, title: 'Egyptian Museum Tour', category: 'Cultural Heritage', duration: '30 min',
        description: 'Walk through the Egyptian Museum and interact with ancient artifacts and mummies.',
        image: '/vr_historical_museum.jpg',
        grade: 'Grades 4-12', subject: 'Social Studies',
    },
    {
        id: 8, title: 'The Louvre Experience', category: 'Cultural Heritage', duration: '25 min',
        description: 'Visit the world\'s largest art museum from your classroom. Explore masterpieces up close.',
        image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&h=400&fit=crop',
        grade: 'Grades 5-12', subject: 'Arts & Culture',
    },
    {
        id: 9, title: 'Ancient Egypt: Pharaohs', category: 'History', duration: '28 min',
        description: 'Meet pivotal historical figures and explore their contributions in an interactive timeline.',
        image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=600&h=400&fit=crop',
        grade: 'Grades 6-12', subject: 'History',
    },
    {
        id: 10, title: 'The Solar System', category: '360° Exploration', duration: '22 min',
        description: 'Travel through our solar system and visit each planet. Learn about scale, distance and gravity.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
        grade: 'Grades 3-8', subject: 'Earth Science',
    },
    {
        id: 11, title: 'Volcano Eruption Sim', category: 'Science Lab', duration: '16 min',
        description: 'Witness a volcanic eruption up close. Learn about tectonic plates, magma, and lava flow.',
        image: 'https://images.unsplash.com/photo-1562622759-1d8e4b0b2981?w=600&h=400&fit=crop',
        grade: 'Grades 4-8', subject: 'Earth Science',
    },
    {
        id: 12, title: 'Great Pyramids VR', category: 'History', duration: '30 min',
        description: 'Explore the construction and inner chambers of the Great Pyramids of Giza in full VR.',
        image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=600&h=400&fit=crop',
        grade: 'Grades 5-12', subject: 'History',
    },
];

const CATEGORY_ICONS = {
    'All': Sparkles,
    '360° Exploration': Globe,
    'Science Lab': Beaker,
    'Mixed Reality': Layers,
    'Cultural Heritage': Map,
    'History': Building2,
};

const LibraryCatalog = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filtered = useMemo(() => {
        return CATALOG_ITEMS.filter(item => {
            const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
            const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase())
                || item.description.toLowerCase().includes(searchQuery.toLowerCase())
                || item.subject.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchQuery]);

    return (
        <section id="catalog" className="section catalog-section">
            <div className="catalog-header text-center">
                <span className="section-badge catalog-badge">VR Library</span>
                <h2>Explore Our <span className="text-gradient">Full Catalog</span></h2>
                <p>A diverse library built for every subject and learning style.</p>
            </div>

            {/* Search + Filters */}
            <div className="catalog-controls">
                <div className="catalog-search">
                    <Search size={18} className="search-icon" />
                    <input
                        type="text"
                        placeholder="Search experiences…"
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                    />
                </div>

                <div className="catalog-filters">
                    {CATEGORIES.map(cat => {
                        const Icon = CATEGORY_ICONS[cat];
                        return (
                            <button
                                key={cat}
                                className={`filter-chip ${activeCategory === cat ? 'active' : ''}`}
                                onClick={() => setActiveCategory(cat)}
                            >
                                <Icon size={14} />
                                {cat}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Results count */}
            <p className="catalog-results-count">{filtered.length} experience{filtered.length !== 1 ? 's' : ''} found</p>

            {/* Card Grid */}
            <div className="catalog-grid">
                {filtered.map(item => (
                    <div key={item.id} className="catalog-card">
                        <div className="catalog-card-img" style={{ backgroundImage: `url(${item.image})` }}>
                            <span className="duration-badge"><Clock size={12} /> {item.duration}</span>
                        </div>
                        <div className="catalog-card-body">
                            <div className="catalog-card-tags">
                                <span className="category-tag"><Tag size={12} /> {item.category}</span>
                                <span className="grade-tag">{item.grade}</span>
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <div className="catalog-card-footer">
                                <span className="subject-label">{item.subject}</span>
                                <button className="card-launch-btn">
                                    Preview <ChevronRight size={14} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {filtered.length === 0 && (
                <div className="catalog-empty">
                    <Search size={40} />
                    <h3>No experiences found</h3>
                    <p>Try adjusting your search or category filter.</p>
                </div>
            )}
        </section>
    );
};

export default LibraryCatalog;

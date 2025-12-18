import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ onSearch }) => {
    const [term, setTerm] = useState('');
    const [filters, setFilters] = useState({
        cuisine: '',
        isVegetarian: '',
        maxTime: '',
        difficulty: ''
    });

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch({ search: term, ...filters });
    };

    const handleFilterChange = (key, value) => {
        const newFilters = { ...filters, [key]: value };
        setFilters(newFilters);
        onSearch({ search: term, ...newFilters });
    };

    return (
        <div className="search-container" style={{ maxWidth: '900px', margin: '0 auto 3rem' }}>
            <form onSubmit={handleSearch} style={{ position: 'relative', marginBottom: '1.5rem' }}>
                <input
                    type="text"
                    placeholder="Search for tasty recipes..."
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    className="glass-panel"
                    style={{
                        width: '100%',
                        padding: '1.25rem 3rem 1.25rem 1.5rem',
                        fontSize: '1.1rem',
                        color: 'var(--text-primary)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: '50px',
                        outline: 'none',
                        background: 'rgba(30, 41, 59, 0.6)',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
                    }}
                />
                <button type="submit" style={{
                    position: 'absolute',
                    right: '15px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'var(--accent)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 2px 10px rgba(244, 63, 94, 0.4)'
                }}>
                    <Search color="white" size={20} />
                </button>
            </form>

            <div className="glass-panel" style={{
                padding: '1rem',
                borderRadius: '16px',
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                justifyContent: 'center',
                background: 'rgba(30, 41, 59, 0.4)'
            }}>
                <select
                    className="glass-input"
                    style={{
                        padding: '0.6rem 1rem',
                        background: 'rgba(15, 23, 42, 0.6)',
                        color: 'var(--text-primary)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: '12px',
                        cursor: 'pointer',
                        outline: 'none',
                        flex: '1 1 150px'
                    }}
                    onChange={(e) => handleFilterChange('cuisine', e.target.value)}
                >
                    <option value="">🌍 All Cuisines</option>
                    <option value="Indian">🇮🇳 Indian</option>
                    <option value="Italian">🇮🇹 Italian</option>
                    <option value="Japanese">🇯🇵 Japanese</option>
                    <option value="Mexican">🇲🇽 Mexican</option>
                    <option value="American">🇺🇸 American</option>
                    <option value="French">🇫🇷 French</option>
                </select>

                <select
                    className="glass-input"
                    style={{
                        padding: '0.6rem 1rem',
                        background: 'rgba(15, 23, 42, 0.6)',
                        color: 'var(--text-primary)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: '12px',
                        cursor: 'pointer',
                        outline: 'none',
                        flex: '1 1 150px'
                    }}
                    onChange={(e) => handleFilterChange('difficulty', e.target.value)}
                >
                    <option value="">🔥 Any Difficulty</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>

                <select
                    className="glass-input"
                    style={{
                        padding: '0.6rem 1rem',
                        background: 'rgba(15, 23, 42, 0.6)',
                        color: 'var(--text-primary)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: '12px',
                        cursor: 'pointer',
                        outline: 'none',
                        flex: '1 1 150px'
                    }}
                    onChange={(e) => handleFilterChange('isVegetarian', e.target.value)}
                >
                    <option value="">🥗 Dietary</option>
                    <option value="true">Vegetarian</option>
                    <option value="false">Non-Vegetarian</option>
                </select>

                <input
                    type="number"
                    placeholder="⏱️ Max Mins"
                    style={{
                        padding: '0.6rem 1rem',
                        background: 'rgba(15, 23, 42, 0.6)',
                        color: 'var(--text-primary)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: '12px',
                        outline: 'none',
                        flex: '1 1 100px',
                        maxWidth: '120px'
                    }}
                    onChange={(e) => handleFilterChange('maxTime', e.target.value)}
                />
            </div>
        </div>
    );
};

export default SearchBar;

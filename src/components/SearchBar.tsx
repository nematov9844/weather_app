import React, { useState } from 'react';
import { Button } from './ui/button';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city) {
      onSearch(city);
      setCity('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center justify-center mb-4 p-0 bg-[rgba(255,255,255,0.2)] rounded-lg border border-gray-300">
      <input 
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search city..."
        className="py-1 px-3 w-full  border-none bg-transparent outline-none focus:border-none"
      />
      <Button  onClick={handleSearch} className="py-2 px-3 bg-transparent text-white border-none shadow-none   rounded-r-lg flex items-center">
        <Search className="" />
      </Button>
    </div>
  );
};

export default SearchBar; 
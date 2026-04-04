"use client";
import React, { createContext, useContext, useState } from 'react';
import { Property, properties } from '../data';

interface EstateContextType {
  filteredProperties: Property[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  handleSearch: () => void;
  resetFilters: () => void;
  leads: any[];
  addLead: (lead: any) => void;
}

const EstateContext = createContext<EstateContextType | undefined>(undefined);

export function EstateProvider({ children }: { children: React.ReactNode }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [leads, setLeads] = useState<any[]>([]);

  const handleSearch = () => {
    let result = properties;
    if (searchTerm) {
      result = result.filter(p => 
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        p.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (activeFilter !== 'all') {
      result = result.filter(p => p.type === activeFilter);
    }
    setFilteredProperties(result);
  };

  const resetFilters = () => {
    setSearchTerm('');
    setActiveFilter('all');
    setFilteredProperties(properties);
  };

  const addLead = (lead: any) => {
    setLeads([...leads, { ...lead, id: Date.now(), date: new Date().toLocaleDateString() }]);
    // In real app, this is where WhatsApp Business API would be triggered
  };

  return (
    <EstateContext.Provider value={{ 
      filteredProperties, 
      searchTerm, 
      setSearchTerm, 
      activeFilter, 
      setActiveFilter, 
      handleSearch, 
      resetFilters,
      leads,
      addLead
    }}>
      {children}
    </EstateContext.Provider>
  );
}

export function useEstate() {
  const context = useContext(EstateContext);
  if (!context) throw new Error('useEstate must be used within EstateProvider');
  return context;
}

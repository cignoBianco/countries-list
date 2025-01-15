"use client";

import React, { useState } from 'react';
import { Country } from '../types/country';
import CountryItem from './CountryItem';
import { AnimatePresence } from 'framer-motion';

interface CountryListProps {
    countries: Country[];
}

const CountryList: React.FC<CountryListProps> = ({ countries }) => {
    const [countryList, setCountryList] = useState<Country[]>(countries);

    const handleDelete = async (iso_code2: string) => {
        const response = await fetch(`/api/countries/${iso_code2}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            setCountryList(prevCountries => prevCountries.filter(country => country.iso_code2 !== iso_code2));
        } else {
            console.error('Failed to delete the country');
        }
    };

    return (
        <div className="countries-list_container max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg">
            <h2 className="countries-list_heading">Список стран</h2>
            <div className='countries-list_list'>
                <AnimatePresence>
                    {countryList.map(country => (
                        <CountryItem key={country.iso_code2} country={country} onDelete={handleDelete} />
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default CountryList;

import React from 'react';
import CountryList from '../../components/CountryList';
import { Country } from '../../types/country';

const fetchCountries = async (): Promise<Country[]> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/countries`);
    if (!response.ok) {
        throw new Error('Failed to fetch countries');
    }
    return response.json();
};

const Countries = async () => {
    const countriesData = await fetchCountries();
    const countries: Country[] = countriesData.map(country => ({
        ...country,
        flag_url: country.flag_url && `https:${country.flag_url}` || 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Missing_flag.png' // Добавляем https:
    }));

    return (
        <div className="countries-page-container">
            <h1 className="countries-page-container_title">Lorem impsum dolor</h1>
            <CountryList countries={countries} />
        </div>
    );
};

export default Countries;

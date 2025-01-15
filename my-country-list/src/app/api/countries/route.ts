import { Country } from '@/types/country';
import { NextResponse } from 'next/server';

let countries: Country[] = [];

export const loadCountries = async () => {
    try {
        const response = await fetch('https://gist.githubusercontent.com/sanchezzzhak/8606e9607396fb5f8216/raw/39de29950198a7332652e1e8224f988b2e94b166/ISO3166_RU.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        countries = await response.json();
        return countries;
    } catch (error) {
        console.error('Error loading countries:', error);
        throw new Error('Failed to load countries');
    }
};

export async function GET() {
    if (countries.length === 0) {
        await loadCountries();
    }
    return NextResponse.json(countries);
}

import { NextResponse } from 'next/server';

const mockCountries = [
{ iso_code2: 'RU', name_ru: 'Россия', flag_url: 'https://flagcdn.com/ru.svg' },
{ iso_code2: 'US', name_ru: 'США', flag_url: 'https://flagcdn.com/us.svg' }
];

let countries = [...mockCountries];

export async function DELETE(request: Request, { params }: { params: { iso_code2: string } }) {
const { iso_code2 } = params;

countries = countries.filter(country => country.iso_code2 !== iso_code2);

return NextResponse.json({ message: 'Country deleted', iso_code2 });
}
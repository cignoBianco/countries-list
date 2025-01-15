"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Country } from '../types/country';
import { removeAnimation } from '@/utils/animations';

interface CountryItemProps {
    country: Country;
    onDelete: (iso_code2: string) => void;
}

const CountryItem: React.FC<CountryItemProps> = ({ country, onDelete }) => {
    return (
        <motion.div
            initial="initial"
            animate="initial"
            exit="exit"
            variants={removeAnimation}
            transition={{ duration: 0.5 }}
            className="flex items-center p-4 border-b border-gray-200 hover:bg-gray-100 rounded-lg transition duration-200"
        >
            <Image
                src={country.flag_url}
                alt={""}// `${country.name_ru} flag`}
                width={32}
                height={22}
                className="mr-2 rounded country-image"
            />
            <span className="country-name flex-1">{country.name_ru}</span>
            <button onClick={() => onDelete(country.iso_code2)} className="delete-button">
                Удалить
            </button>
        </motion.div>
    );
};

export default CountryItem;

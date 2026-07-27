import Hero from '@/components/sections/models/Hero';
import Plans from '@/components/sections/models/Plans';
import Platform from '@/components/sections/models/Platform';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'ZipNach-Models',
};

export default function Models() {
    return (
        <>
            <Hero />
            <Platform />
            <Plans />
        </>
    );
}

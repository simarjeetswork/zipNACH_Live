
import Analysis from '@/components/sections/factCentre/Analysis';
import Enterprise from '@/components/sections/factCentre/Enterprises';
import Glance from '@/components/sections/factCentre/Glance';
import HeroFact from '@/components/sections/factCentre/HeroFact';
import Metrics from '@/components/sections/factCentre/Metrics';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'ZipNach-Fact Centre',
};

export default function FactCentre() {
    return (
        <>
            <HeroFact />
            <Glance />
            <Metrics />
            <Analysis />
            <Enterprise />

        </>
    );
}

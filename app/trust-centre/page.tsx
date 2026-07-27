
import HeroSection from '@/components/sections/trust-centre/overview/Hero';
import TrustTabs from '@/components/sections/trust-centre/overview/TrustTabs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'ZipNach-Trust Centre',
};

export default function TrustCentre() {
    return (
        <>
            <HeroSection />
            <TrustTabs />
        </>
    );
}

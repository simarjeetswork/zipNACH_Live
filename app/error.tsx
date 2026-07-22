
'use client';

import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error)
    }, [error]);

    return (
        <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-3xl font-heading text-primary">Something went wrong</h1>
            <p className="mt-4 text-muted">Please try again.</p>
            <button
                onClick={() => reset()}
                className="mt-6 px-6 py-3 rounded-md bg-primary text-white"
            >
                Try again
            </button>
        </section>
    );
}
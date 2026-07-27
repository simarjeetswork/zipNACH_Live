"use client"
import Link from 'next/link';

export default function NotFound() {
    return (
        <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-6xl font-heading text-primary">404</h1>
            <p className="mt-4 text-muted">This page doesn't exist.</p>
            <Link
                href="/"
                className="mt-6 inline-block px-6 py-3 rounded-md bg-primary text-white"
            >
                Back to Home
            </Link>
        </section>
    );
}
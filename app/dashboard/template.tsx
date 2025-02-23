'use client'
import Link from "next/link";
import { useState } from "react";

const pathData = [{ name: 'About', path: '/dashboard/about' }, { name: 'Settings', path: '/dashboard/settings' }]

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h2>Dashbord Template {count}</h2>
            <button style={{ background: 'black', color: '#fff' }} onClick={() => setCount(count + 1)}>Increment </button>
            {children}
        </div>
    );
}

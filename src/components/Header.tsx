'use client';

import { getDateString, getGreetingString } from "@/lib/greeter"

export default function Header() {
    const date = getDateString()
    const greeting = getGreetingString()

    return <div className="mt-12">
        <p className="text-cyan-600 text-lg font-light">{date}</p>
        <p className="text-slate-300 text-5xl font-bold">{greeting}</p>
    </div>
}
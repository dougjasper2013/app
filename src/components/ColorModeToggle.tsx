'use client';
import { useState, useEffect } from "react";

export function ColorModeToggle() {
    console.log('Does ColorModeToggle run on the Server and Client?');

    const [colorMode, setColorMode] = useState<'dark' | 'light'>('light');
    function handleClick() {
        const newColorMode = colorMode == 'dark' ? 'light' : 'dark';
        setColorMode(newColorMode);
    }

    useEffect(() => {
        if (colorMode == 'dark') {
            document.body.classList.add('dark');
            document.documentElement.style.setProperty(
                '--background',
                '#0A0A0A',
            );
            document.documentElement.style.setProperty(
                '--foreground',
                '#EDEDED',
            );
        }
        else {
            document.body.classList.remove('dark');
            document.documentElement.style.setProperty(
                '--background',
                '#FFFFFF',
            );
            document.documentElement.style.setProperty(
                '--foreground',
                '#171717',
            );
        }
    }, [colorMode]);

    useEffect(() => {
        const mediaQuery = window.matchMedia(
            '(prefers-color-schem: dark',
        );
        setColorMode(mediaQuery.matches ? 'dark' : 'light');
    }, []);

    return (
        <button onClick={handleClick} className="flex rounded bg-blue-500 px-4 py-2 text-white">
            {colorMode == 'dark' ? 'Light' : 'Dark'}
        </button>
    );
}
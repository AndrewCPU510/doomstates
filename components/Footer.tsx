
import React from 'react';
import { TwitterIcon, InstagramIcon } from './Icons';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black py-16">
            <div className="container mx-auto px-6 text-center text-stone-500 font-mono">
                <h4 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-stone-300">
                    DoomsDates
                </h4>
                <p className="mt-4 text-lg">Survive well. Eat smart.</p>

                <div className="flex justify-center space-x-6 mt-8">
                    <a href="#" className="text-stone-400 hover:text-white transition-colors">
                        <TwitterIcon className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-stone-400 hover:text-white transition-colors">
                        <InstagramIcon className="w-6 h-6" />
                    </a>
                </div>

                <div className="mt-10 text-sm space-x-4 md:space-x-8">
                    <a href="#" className="hover:text-white transition-colors">Contact</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                </div>
                 <p className="mt-8 text-xs text-stone-600">&copy; {new Date().getFullYear()} DoomsDates Industries. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

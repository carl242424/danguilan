import React, { useState } from "react";
import "../css/contact.css";

const socialLinks = [
    {
        name: "Facebook",
        url: "https://facebook.com/carldanguilan",
        icon: (
            <svg width="60" height="60" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="16" fill="#1877F3"/>
                <path d="M21.333 16H18.667V25.333H15.333V16H13.333V13.333H15.333V11.733C15.333 9.866 16.2 8.667 18.467 8.667H21.333V11.333H19.6C19.067 11.333 18.667 11.733 18.667 12.267V13.333H21.333V16Z" fill="white"/>
            </svg>
        ),
    },
    {
        name: "GitHub",
        url: "https://github.com/carl242424",
        icon: (
            <svg width="60" height="60" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="16" fill="#181717"/>
                <path d="M16 8C11.58 8 8 11.58 8 16C8 19.31 10.29 22.09 13.47 22.97C13.87 23.04 14.02 22.8 14.02 22.59C14.02 22.41 14.01 21.85 14.01 21.13C11.73 21.59 11.22 20.2 11.22 20.2C10.86 19.28 10.3 19.05 10.3 19.05C9.5 18.54 10.36 18.55 10.36 18.55C11.24 18.62 11.7 19.46 11.7 19.46C12.48 20.77 13.78 20.39 14.28 20.18C14.36 19.63 14.57 19.27 14.81 19.07C13.09 18.87 11.27 18.19 11.27 15.67C11.27 14.91 11.54 14.31 11.98 13.85C11.9 13.65 11.66 12.89 12.06 11.82C12.06 11.82 12.65 11.62 14.01 12.49C14.57 12.34 15.18 12.27 15.79 12.27C16.4 12.27 17.01 12.34 17.57 12.49C18.93 11.62 19.52 11.82 19.52 11.82C19.92 12.89 19.68 13.65 19.6 13.85C20.04 14.31 20.31 14.91 20.31 15.67C20.31 18.2 18.48 18.87 16.76 19.07C17.08 19.33 17.36 19.85 17.36 20.62C17.36 21.67 17.35 22.36 17.35 22.59C17.35 22.8 17.5 23.04 17.9 22.97C21.08 22.09 23.37 19.31 23.37 16C23.37 11.58 19.79 8 16 8Z" fill="white"/>
            </svg>
        ),
    },
    {
        name: "X",
        url: "https://x.com/Carl21244",
        icon: (
            <svg width="60" height="60" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="16" fill="#000"/>
                <path d="M21.7 10.5H19.9L16.9 14.1L14.2 10.5H10.5L15.1 16.5L10.5 21.5H12.3L15.3 17.9L18 21.5H21.7L17.1 15.5L21.7 10.5ZM13.1 11.7L16.9 16.7L20.7 11.7H18.9L16.9 14.3L14.9 11.7H13.1ZM18.9 20.3L15.1 15.3L11.3 20.3H13.1L15.1 17.7L17.1 20.3H18.9Z" fill="white"/>
            </svg>
        ),
    },
];

const Contacts = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '70px' }}>
            <h1 style={{ fontSize: '2.7rem', color: '#4f46e5', fontWeight: 'bold', marginBottom: '0.5rem', letterSpacing: '1px' }}>
                Contact Me
            </h1>
            <p style={{ fontSize: '1.3rem', color: '#64748b', marginBottom: '2.2rem' }}>
                Let's connect! Reach out to me through my social platforms below.
            </p>
            <div style={{ display: 'flex', gap: '2.5rem', justifyContent: 'center', alignItems: 'center', marginTop: '1.5rem' }}>
                {socialLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.name}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '80px', borderRadius: '50%', background: 'none', boxShadow: 'none', textDecoration: 'none', cursor: 'pointer', fontSize: '2.7rem', transition: 'transform 0.2s, filter 0.2s' }}
                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.12) rotate(-8deg)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        {link.icon}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Contacts;
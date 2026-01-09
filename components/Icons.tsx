import React from 'react';

export const MessageIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.8" />
    <circle cx="8" cy="12" r="1" fill="white" />
    <circle cx="12" cy="12" r="1" fill="white" />
    <circle cx="16" cy="12" r="1" fill="white" />
    <path d="M7 18L5 21L6 18H7Z" fill="white" />
  </svg>
);

export const ActionIcon = ({ type }: { type: 'deposit' | 'withdraw' }) => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="blueGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#1F6AE1" />
        <stop offset="100%" stopColor="#0B4DB8" />
      </linearGradient>
    </defs>
    {type === 'deposit' ? (
      <path d="M19 7H5C3.89543 7 3 7.89543 3 9V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V9C21 7.89543 20.1046 7 19 7Z" fill="url(#blueGrad)" />
    ) : (
      <path d="M21 5H3C1.89543 5 1 5.89543 1 7V17C1 18.1046 1.89543 19 3 19H21C22.1046 19 23 18.1046 23 17V7C23 5.89543 22.1046 5 21 5Z" fill="url(#blueGrad)" />
    )}
    <rect x="3" y="10" width="18" height="2" fill="white" fillOpacity="0.4" />
    <circle cx="18" cy="15" r="1.5" fill="white" />
  </svg>
);

export const FeatureIcon = ({ type }: { type: 'teams' | 'record' | 'wallet' | 'invite' }) => {
  switch (type) {
    case 'teams':
      return (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" fill="#F4A236" />
          <path d="M12 14C8.68629 14 6 16.6863 6 20V21H18V20C18 16.6863 15.3137 14 12 14Z" fill="#F4A236" />
        </svg>
      );
    case 'record':
      return (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <rect x="6" y="4" width="12" height="16" rx="2" fill="#58CBA0" />
          <path d="M9 8H15M9 12H15M9 16H13" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'wallet':
      return (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#E15858" />
          <path d="M7 13L10 16L17 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'invite':
      return (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <rect x="4" y="6" width="16" height="12" rx="2" fill="#4B81F2" />
          <path d="M4 8L12 13L20 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
};

export const NavIcon = ({ type, active }: { type: string; active: boolean }) => {
  const color = active ? "#4B81F2" : "#999999";
  const size = "24";
  switch (type) {
    case 'home':
      return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;
    case 'service':
      return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8"><path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" /></svg>;
    case 'menu':
      return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>;
    case 'record':
      return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>;
    case 'mine':
      return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>;
    default:
      return null;
  }
};
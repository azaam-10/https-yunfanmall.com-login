
import React from 'react';

export interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

export interface NavItem {
  id: string;
  label: string;
  icon: (active: boolean) => React.ReactNode;
}

import React from 'react';

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}
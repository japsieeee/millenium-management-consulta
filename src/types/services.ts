import React from 'react';

export interface ServiceCard {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
  delay?: number;
}

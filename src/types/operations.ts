import React from 'react';

export interface OperationCard {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
  delay?: number;
}

import React from 'react';

export interface SubscriptionCard {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
  delay?: number;
}

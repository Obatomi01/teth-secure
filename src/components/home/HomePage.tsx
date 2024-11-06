'use client';

import React from 'react';

import styles from '@/styles/home.module.scss';

import Hero from './Hero';
import Introduction from './Introduction';
import Features from './Features';
import PricingPlans from './PricingPlans';
import FAQs from './FAQs';
import Footer from '../general/Footer';

export default function HomePage() {
  return (
    <main className={styles['home--container']}>
      <Hero />
      <Introduction />
      <Features />
      <PricingPlans />
      <FAQs />
      <Footer />
    </main>
  );
}

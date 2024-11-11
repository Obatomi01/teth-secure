'use client';

import React from 'react';
import DashboardContentsContainer from '../general/DashboardContentsContainer';
import TopDashboardContainer from '../dashboard/TopDashboardContainer';
import PricingPlans from '../home/PricingPlans';

import { manropeBold } from '@/styles/fonts';

export default function Subscriptions() {
  return (
    <DashboardContentsContainer>
      <TopDashboardContainer
        rightContent={
          <h3 className={`text-xl md:text-2xl ${manropeBold.className}`}>
            Subscriptions
          </h3>
        }
      />
      <section className='mb-24'>
        <PricingPlans isLoggedIn />
      </section>
    </DashboardContentsContainer>
  );
}

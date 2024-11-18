import React from 'react';
import { manropeMedium } from '@/styles/fonts';

const styles = {
  content: {
    fontSize: '16px',
  },
};

export default function WebhookDescription() {
  return (
    <div className='flex flex-col gap-6'>
      <p className={`${manropeMedium.className}`} style={styles.content}>
        This feature allows the customer to register/generate activation token
        through the Teth Secure mobile app.
      </p>
      <p className={`${manropeMedium.className}`} style={styles.content}>
        To use this feature, you are required to provide some pieces of
        information and do some code integration before it is possible for users
        to register or generate through the Teth Secure App.
      </p>
      <p className={`${manropeMedium.className}`} style={styles.content}>
        It is required to provide instructions to your users on how to register
        token via the Teth Secure App, and also display your App ID and a unique
        customerIdentifier generated on your platform for each user to validate
        on the Teth Secure App. The unique customerIdentifier can be the user
        id, username, email or any unique string from your platform to identify
        each user on your system.
      </p>
    </div>
  );
}

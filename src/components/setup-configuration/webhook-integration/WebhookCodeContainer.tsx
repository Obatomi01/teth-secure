import React, { useState } from 'react';
import Image from 'next/image';

import styles from '@/styles/webhookIntegration.module.scss';
import ClipboardIcon from '@/../public/icons/clipboard-icon.png';

import { manropeBold, manropeMedium } from '@/styles/fonts';
import FormPopUp from '@/components/general/FormPopUp';

type Props = {
  title: string;
  content: string;
  description?: string;
};

export default function WebhookCodeContainer({
  title,
  content,
  description,
}: Props) {
  const [showPopUp, setShowPopUp] = useState(false);

  return (
    <div className={`${styles['webhook--code__container']}`}>
      <FormPopUp showPopUp={showPopUp} message='Code copied' />
      <p className={`${manropeBold.className} mb-2`}>{title}</p>
      <div className={`${styles['code--container']}`}>
        <pre>
          <code>{content}</code>
        </pre>
        <Image
          src={ClipboardIcon}
          alt='clipboard icon'
          onClick={async () => {
            await navigator.clipboard.writeText(content);

            setShowPopUp(true);

            setTimeout(() => {
              setShowPopUp(false);
            }, 2000);
          }}
        />
      </div>
      <p className={`${manropeMedium.className} text-sm mt-2`}>{description}</p>
    </div>
  );
}

'use client';
import { useForm } from 'react-hook-form';
import React, { useState, useEffect } from 'react';

import TopDashboardContainer from '@/components/dashboard/TopDashboardContainer';
import DashboardContentsContainer from '@/components/general/DashboardContentsContainer';

import styles from '@/styles/webhookIntegration.module.scss';

import { manropeBold, manropeSemiBold, manropeMedium } from '@/styles/fonts';
import WebhookDescription from './WebhookDescription';
import WebhookCodeContainer from './WebhookCodeContainer';
import ToggleSwitch from './ToggleSwitch';
import SignInFormInput from '@/components/sign-in/SignInFormInput';
import BlueBtn from '@/components/general/BlueBtn';
import ActionFeedfbackContainer from '@/components/general/ActionFeedfbackContainer';

type WebhhokFormValues = {
  postMethodPayload: string;
  webhookNotificationUrl: string;
};

export default function WebhookIntegrationPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WebhhokFormValues>();

  const [showBackdrop, setShowBackdrop] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Prevent body scroll when the reset password modal is open
    if (showBackdrop) {
      // Prevent body scroll
      document.body.style.overflowY = 'hidden';
    } else {
      // Restore body scroll
      document.body.style.overflowY = 'auto';
    }

    return () => {
      // Restore body scroll
      document.body.style.overflowY = 'auto';
    };
  }, [showBackdrop]);

  const onSubmit = (data: WebhhokFormValues) => {
    console.log(data);

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setShowBackdrop(true);
    }, 2000);
  };

  return (
    <DashboardContentsContainer>
      <TopDashboardContainer
        rightContent={
          <h3 className={`text-xl md:text-2xl ${manropeBold.className}`}>
            Webhook Integration
          </h3>
        }
        showRightContentForMobile={true}
      />
      <form
        className={`${styles['webhook--contents__container']}`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <WebhookDescription />

        <div
          className='flex justify-between my-6 p-4 items-center'
          style={{
            backgroundColor: '#FAFAFA',
            borderRadius: '100px',
          }}
        >
          <p className={`${manropeSemiBold.className} text-sm`}>
            Allow user to generate activation token via tethsecure mobile app
          </p>
          <ToggleSwitch />
        </div>

        <div>
          <SignInFormInput
            label='POST method payload'
            register={
              <input
                type='text'
                placeholder='Enter url here'
                {...register('postMethodPayload', {
                  required: 'Payload is required',
                })}
              />
            }
            error={errors.postMethodPayload?.message}
          />
          <p
            className={`${manropeMedium.className} text-sm`}
            style={{
              marginTop: '-14px',
            }}
          >
            Provide a post endpoint for us to validate user information
          </p>
        </div>

        <WebhookCodeContainer
          title='Sample Request Format'
          content={`
{
 "user_id": "123456789",
 "otp": "123456",
 "timestamp": "2024-03-21T09:00:00Z"
}
          `}
          description='This is a sample json data we are sending to the POST URL you provided'
        />
        <WebhookCodeContainer
          title='Allowed Code Structure'
          content={`
// Sample code structure for handling token verification request
function handleTokenVerificationRequest(request) {  
  // Extract user ID, OTP, and timestamp from request  
  const { user_id, otp, timestamp } = request;  

  // Perform token verification logic  
  // Example: Verify OTP validity, check timestamp, etc. 

  // Return appropriate response  
  return {
    user_id,
    verification_status: "success",
    message: "Token verified successfully"  
  };
}
          `}
        />
        <WebhookCodeContainer
          title='Expected JSON Response (Success Response)'
          content={`
{
.... “status”:  “00” ,
.... “message”: “Successful” ,
.... “email”: “toluxsys@gmail.com”
          `}
        />
        <WebhookCodeContainer
          title='Expected JSON Response (Failed Response)'
          content={`
{
.... “status”:  “01” ,
.... “message”: “Failed” ,
.... “email”: “toluxsys@gmail.com”
          `}
        />

        <SignInFormInput
          label='Webhook Notification URL'
          register={
            <input
              type='text'
              placeholder='Enter url here'
              {...register('webhookNotificationUrl', {
                required: 'Notification url is required',
              })}
            />
          }
          error={errors.webhookNotificationUrl?.message}
        />

        {showBackdrop && (
          <ActionFeedfbackContainer
            feedBackType='success'
            onClickBackdrop={() => setShowBackdrop(false)}
            feedBackMessage='Your connection was successful'
            feedBackTitle='Connection Successful'
          />
        )}

        <div className={`${styles['buttons--container']}`}>
          <BlueBtn
            hasBlueBackground={false}
            btnText='Test Connection'
            isNotLink
            btnType='submit'
            hasLoadingDots
            isLoading={isLoading}
            additionalStyles='w-48'
          />
          <BlueBtn
            hasBlueBackground
            btnText='Save Changes'
            isNotLink
            btnType='button'
            additionalStyles='w-48'
          />
        </div>
      </form>
    </DashboardContentsContainer>
  );
}

import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function SignInCard({ children }: Props) {
  return <div>{children}</div>;
}

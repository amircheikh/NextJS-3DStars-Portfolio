import { DetailedHTMLProps } from 'react';

//TODO: add sound and animation to component
export function BaseButton(props: DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
  return <button {...props} />;
}

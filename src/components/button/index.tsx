import { DetailedHTMLProps } from 'react';
import useSound from 'use-sound';
import click from '../../sounds/click-1.mp3';

export function BaseButton(
  props: DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & { isBack?: boolean },
) {
  const { isBack, onClick, ...restProps } = props;
  const [playClick] = useSound(click, { playbackRate: isBack ? 0.85 : 1 });
  return (
    <button
      {...restProps}
      onClick={(e) => {
        onClick(e);
        playClick();
      }}
    />
  );
}

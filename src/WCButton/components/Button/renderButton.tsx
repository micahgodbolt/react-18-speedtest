import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import type { ButtonSlots, ButtonState } from './Button.types';

/**
 * Renders a Button component by passing the state defined props to the appropriate slots.
 */
export const renderButton = (state: ButtonState) => {
  const { slots, slotProps } = getSlots<ButtonSlots>(state, ['root', 'icon']);
  const { iconOnly, iconPosition } = state;
  const getAppearance = () =>  {switch (state.appearance) {
    case 'primary':
      return 'accent'
    case 'outline':
      return 'outline'
    case 'subtle':
      return 'lightweight'
    case 'transparent':
    return 'stealth'
    default:
      break;
  }
}
  return (
    <fluent-button {...slotProps.root} appearance={getAppearance()} >  
      {iconPosition !== 'after' && <slots.icon slot="start" {...slotProps.icon} />}
      {!iconOnly && state.root.children}
      {iconPosition === 'after' && <slots.icon slot="end" {...slotProps.icon} />}
    </fluent-button>

  );
};

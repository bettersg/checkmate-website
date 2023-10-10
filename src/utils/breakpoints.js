import { theme } from 'tailwind.config.cjs';

const getCurrentBreakpoint = () => {
  const result = Object.entries(theme.screens)
    .reverse()
    .find(([val]) => {
      return window.innerWidth >= parseInt(val.slice(0, -2));
    });
  return result ? result[0] : 'xs';
};

export { getCurrentBreakpoint };

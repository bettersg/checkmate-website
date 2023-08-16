import { theme } from "tailwind.config.cjs";

const getCurrentBreakpoint = () => {
    const result = Object.entries(theme.screens).find(([key, val]) => parseInt(val.slice(0, -2)) >= window.innerWidth);
    return result ? result[0] : "xl"
}

export { getCurrentBreakpoint };
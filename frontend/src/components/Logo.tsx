import React from 'react';

const logoStylesLight = `
.vortx-logo-light {
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(90deg, #9bb7ff 0%, #4f7bff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  letter-spacing: 1px;
  user-select: none;
}
`;

const logoStylesDark = `
.vortx-logo-dark {
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(90deg, #1f2f63 0%, #4f7bff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  letter-spacing: 1px;
  user-select: none;
}
`;

interface LogoProps {
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ variant = 'light' }) => (
  <>
    <style>{logoStylesLight + logoStylesDark}</style>
    <span className={variant === 'light' ? 'vortx-logo-light' : 'vortx-logo-dark'}>
      vortx.ai
    </span>
  </>
);

export default Logo;

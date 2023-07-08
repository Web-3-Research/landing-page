import React from 'react';

const LinkButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    {...props}
    style={{
      textDecoration: "underline",
      textTransform: "none",
      padding: 0,
      minWidth: 0,
      color: "#18216d", // LINK COLOR
      background: "none",
      border: "none",
      cursor: "pointer",
      font: "inherit",
    }}
  />
);

export default LinkButton;

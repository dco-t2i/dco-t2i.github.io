import React, { ReactNode } from "react";

// not use?
const Nav: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <a className="text-blue-700" href="https://naver.com">
      {children}
    </a>
  );
};

export default Nav;

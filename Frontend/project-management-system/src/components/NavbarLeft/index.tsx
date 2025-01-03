// import React from 'react';
// import styled from 'styled-components';
// import { Icon, AboutTooltip } from 'shared/components';
// import { NavLeft, LogoLink, Bottom, Item, ItemText } from './Styles';


// const ProjectNavbar: React.FC = () => (
//   <NavLeft>
//     <LogoLink to="/">
//       <StyledLogo color="#fff" />
//     </LogoLink>

//     <Item>
//       <Icon type="search" size={22} top={1} left={3} />
//       <ItemText>Search issues</ItemText>
//     </Item>

//     <Item>
//       <Icon type="plus" size={27} />
//       <ItemText>Create Issue</ItemText>
//     </Item>

//     <Bottom>
//       <AboutTooltip
//         placement="right"
//         offset={{ top: -218 }}
//         renderLink={(linkProps: React.HTMLAttributes<HTMLDivElement>) => (
//           <Item {...linkProps}>
//             <Icon type="help" size={25} />
//             <ItemText>About</ItemText>
//           </Item>
//         )}
//       />
//     </Bottom>
//   </NavLeft>
// );

// export default ProjectNavbar;

import React from 'react';
import './Style.css';  // Import the CSS file for styles

const Navbar = () => {
  return (
    <aside className="nav-left">
      <a href="/" className="logo-link">
        <div className="logo" />
      </a>

      <div className="item">
        <i className="icon search-icon" />
        <span className="item-text">Search issues</span>
      </div>

      <div className="item">
        <i className="icon plus-icon" />
        <span className="item-text">Create Issue</span>
      </div>

      <div className="bottom">
        <div className="item">
          <i className="icon help-icon" />
          <span className="item-text">About</span>
        </div>
      </div>
    </aside>
  );
};

export default Navbar;

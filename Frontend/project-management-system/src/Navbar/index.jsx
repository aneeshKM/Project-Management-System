import React from 'react';
import PropTypes from 'prop-types';

import { Icon, AboutTooltip, Modal } from 'shared/components';

import { NavLeft, LogoLink, StyledLogo, Bottom, Item, ItemText, LinkData } from './Styles';
import {Link, useHistory} from 'react-router-dom';
import { createQueryParamModalHelpers } from 'shared/utils/queryParamModal';
import CreateProject from 'CreateProject';


const createProjectModalHelper = createQueryParamModalHelpers('create-project')

const NavbarLeft = () => {
  const history = useHistory();
  
  return(
  <>
  <NavLeft>
    <LogoLink to="/">
      <StyledLogo color="#fff" />
    </LogoLink>

    {/* <Item onClick={issueSearchModalOpen}>
      <Icon type="search" size={22} top={1} left={3} />
      <ItemText>Search issues</ItemText>
    </Item> */}

    {/* <Item onClick={issueCreateModalOpen}>
      <Icon type="plus" size={27} />
      <ItemText>Create Issue</ItemText>
    </Item> */}
    <LogoLink to="/dashboard/home">
    <Item>
      <Icon type="menu" size={25} />
      <ItemText>Home</ItemText>
    </Item>
    </LogoLink>

    <Item onClick={createProjectModalHelper.open}>
      <Icon type="plus" size={25} />
      <ItemText>Create Project</ItemText>
    </Item>
    
    <Bottom>
      <AboutTooltip
        placement="right"
        offset={{ top: -218 }}
        renderLink={linkProps => (
          <Item {...linkProps}>
            <Icon type="help" size={25} />
            <ItemText>About</ItemText>
          </Item>
        )}
      />
    </Bottom>
  </NavLeft>

  {createProjectModalHelper.isOpen() && (
          <Modal
            isOpen
            testid="modal:create-project"
            width={800}
            withCloseIcon={false}
            onClose={createProjectModalHelper.close}
            renderContent={modal => (
              <CreateProject
                onCreate={() => history.push(`dashboard/home`)}
                modalClose={modal.close}
              />
            )}
          />
        )}
  </>
);
}

export default NavbarLeft;

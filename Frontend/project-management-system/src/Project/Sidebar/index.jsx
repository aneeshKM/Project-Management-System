import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { createQueryParamModalHelpers } from 'shared/utils/queryParamModal';
import { useHistory } from 'react-router-dom';

import { ProjectCategoryCopy } from 'shared/constants/projects';
import { Icon, ProjectAvatar } from 'shared/components';

import {
  Sidebar,
  ProjectInfo,
  ProjectTexts,
  ProjectName,
  ProjectCategory,
  Divider,
  LinkItem,
  LinkText,
  NotImplemented,
} from './Styles';

const propTypes = {
  project: PropTypes.object.isRequired,
};

// const history = useHistory();


const ProjectSidebar = ({ project }) => {
  const match = useRouteMatch();
  const issueCreateModalHelpers = createQueryParamModalHelpers('issue-create');

  return (
    <Sidebar>
      <ProjectInfo>
        <ProjectAvatar />
        <ProjectTexts>
          <ProjectName>{project.name}</ProjectName>
          <ProjectCategory>{ProjectCategoryCopy[project.category]} project</ProjectCategory>
        </ProjectTexts>
      </ProjectInfo>

      {renderLinkItem(match, 'Kanban Board', 'board', '/board')}
      {renderLinkItem(match, 'Project settings', 'settings', '/settings')}
      <LinkItem as="div" onClick={issueCreateModalHelpers.open}>
        <Icon type="issues" />
        <LinkText>Create Issue</LinkText>
    </LinkItem>
    </Sidebar>
  );
};

const renderLinkItem = (match, text, iconType, path) => {
  const isImplemented = !!path;

  const linkItemProps = isImplemented
    ? { as: NavLink, exact: true, to: `${match.path}${path}` }
    : { as: 'div' };

  return (
    <LinkItem {...linkItemProps}>
      <Icon type={iconType} />
      <LinkText>{text}</LinkText>
      {/* {!isImplemented && <NotImplemented>Not implemented</NotImplemented>} */}
    </LinkItem>
    
  );
};

ProjectSidebar.propTypes = propTypes;

export default ProjectSidebar;


import React, { useEffect } from 'react';

// Navigation
import Sidebar from '../../components/Navigation/Sidebar';
import Topbar from '../../components/Navigation/Topbar';
import KanbanBoard from './KanbanBoard';

const Project = () => {
  useEffect(() => {
    document.getElementById('body').className = 'page-top';
  }, []);

  return (
    <div>
      {/* Page Wrapper */}
      <div id="wrapper">
        {/* Sidebar */}
        <Sidebar />
        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            {/* Topbar */}
            <Topbar />

            {/* Begin Page Content */}
            <div className="container-fluid">
                <p>This new Kanban board</p>
                <KanbanBoard />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

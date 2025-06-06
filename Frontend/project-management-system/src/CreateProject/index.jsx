import React from 'react';
import PropTypes from 'prop-types';

import { ProjectCategory, ProjectCategoryCopy } from 'shared/constants/projects';
import toast from 'shared/utils/toast';
import useApi from 'shared/hooks/api';
import { Form, Breadcrumbs } from 'shared/components';

import { FormCont, FormHeading, FormElement, ActionButton } from './Styles';


const CreateProject = () => {
  const [{ isCreating }, createProject] = useApi.post('/project');

  return (
    <Form
      initialValues={{
        name:        '',
        url:         '',
        category:    '',
        description: '',
      }}
      validations={{
        name: [Form.is.required(), Form.is.maxLength(100)],
        url: Form.is.url(),
        category: Form.is.required(),
      }}
      onSubmit={async (values, form) => {
        try {
          await createProject(values);
        //   await fetchProject();
          toast.success('Changes have been saved successfully.');
        } catch (error) {
          Form.handleAPIError(error, form);
        }
      }}
    >
      <FormCont>
        <FormElement>
          <FormHeading>Create New Project</FormHeading>

          <Form.Field.Input name="name" label="Name" />
          <Form.Field.Input name="url" label="URL" />
          <Form.Field.TextEditor
            name="description"
            label="Description"
            tip="Describe the project in as much detail as you'd like."
          />
          <Form.Field.Select name="category" label="Project Category" options={categoryOptions} />

          <ActionButton type="submit" variant="primary" isWorking={isCreating}>
            Save changes
          </ActionButton>
        </FormElement>
      </FormCont>
    </Form>
  );
};

const categoryOptions = Object.values(ProjectCategory).map(category => ({
  value: category,
  label: ProjectCategoryCopy[category],
}));


export default CreateProject;

import { Modal } from 'components';
import { Form, Formik } from 'formik';
import { TaskForm } from 'forms';
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { TaskDto, taskYupSchema } from 'shared';
import { createTask } from 'store/calendar';

const formModel: TaskDto = {
  title: '',
  description: '',
  priority: 0,
};

interface Props {
  isOpened: boolean;
  loading: boolean;
  date: string;
  setOpened(arg: boolean): void;
}

const TaskModal = ({ isOpened, loading, date, setOpened }: Props) => {
  const formRef = useRef<HTMLFormElement>(null);
  const dispatch = useDispatch();

  const initialValues = {
    ...formModel,
  };

  const onSubmit = (data: typeof formModel) => {
    dispatch(createTask(date, data));
    onModalClose();
  };

  const onModalClose = () => {
    formRef?.current?.resetForm();
    setOpened(false);
  };

  return (
    <Modal
      open={isOpened}
      loading={loading}
      onClose={onModalClose}
      title="Create Task"
      actions={[
        {
          label: 'Cancel',
          handler: () => onModalClose(),
        },
        {
          label: 'Save',
          handler: () => formRef?.current?.handleSubmit(),
          primary: true,
          disabled: loading,
        },
      ]}
    >
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        innerRef={formRef as any}
        validationSchema={taskYupSchema}
        enableReinitialize
      >
        {() => (
          <Form>
            <TaskForm />
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default TaskModal;

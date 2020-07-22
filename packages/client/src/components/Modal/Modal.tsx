import { ModalProps, Typography } from '@material-ui/core/';
import CloseIcon from '@material-ui/icons/Close';
import { Button, Flex, WithLoader } from 'components';
import React from 'react';
import Styled from './styled';

interface ModalAction {
  label: string;
  handler: Function;
  primary?: boolean;
  disabled?: boolean;
}

interface Props extends ModalProps {
  title?: string;
  actions?: ModalAction[];
  loading?: boolean;
}

const renderTitle = (onClose?: Function, title?: string) => (
  <Styled.DialogTitle disableTypography>
    <Typography variant="h6">{title}</Typography>
    <Styled.IconButton
      onClick={() => {
        if (onClose) {
          onClose();
        }
      }}
    >
      <CloseIcon />
    </Styled.IconButton>
  </Styled.DialogTitle>
);

const renderActions = (actions?: ModalAction[]) =>
  actions ? (
    <Styled.DialogActions>
      <Flex.Grow />
      {actions.map(action => (
        <Button
          key={action.label}
          variant="outlined"
          color={action.primary ? 'primary' : 'default'}
          onClick={() => action.handler()}
          disabled={action.disabled}
        >
          {action.label}
        </Button>
      ))}
    </Styled.DialogActions>
  ) : null;

const Modal = ({
  children,
  title,
  open,
  onClose,
  actions,
  loading,
  ...otherProps
}: Props) => {
  return (
    <Styled.Dialog onClose={onClose} open={open} {...otherProps}>
      {renderTitle(onClose, title)}
      <Styled.DialogContent>
        <WithLoader loading={loading}>{children}</WithLoader>
      </Styled.DialogContent>
      {renderActions(actions)}
    </Styled.Dialog>
  );
};

export default Modal;

import Dialog, { DialogProps } from '@material-ui/core/Dialog';
import DialogActions, {
  DialogActionsProps,
} from '@material-ui/core/DialogActions';
import DialogContent, {
  DialogContentProps,
} from '@material-ui/core/DialogContent';
import DialogTitle, { DialogTitleProps } from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import styled from 'styled-components';

const StyledDialog = styled(Dialog)<DialogProps>``;

const StyledDialogTitle = styled(DialogTitle)<DialogTitleProps>``;

const StyledIconButton = styled(IconButton)`
  position: absolute !important;
  right: 12px;
  top: 8px;
`;

const StyledDialogContent = styled(DialogContent)<DialogContentProps>``;

const StyledDialogActions = styled(DialogActions)<DialogActionsProps>``;

export default {
  Dialog: StyledDialog,
  DialogTitle: StyledDialogTitle,
  DialogContent: StyledDialogContent,
  DialogActions: StyledDialogActions,
  IconButton: StyledIconButton,
};

import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import styles from './styles';
import { compose } from 'redux'
import { withStyles } from "@material-ui/core/styles";

function generate(element, array) {
    return array.map(value =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

const View = ({ members, open, handleClose, classes, isAdmin, deleteMember, acceptMember }) => {

    return (
        <>
            <div>
                <Dialog
                    fullScreen={false}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <DialogTitle id="responsive-dialog-title">Membros da República</DialogTitle>
                    <DialogContent className={classes.dialogStyle}>
                            <Grid item xs={12} md={6}>

                                <div >
                                    <List dense={false}>
                                        {members && members.map(member => {
                                            return (
                                                <ListItem key={member.uid}>
                                                    <ListItemAvatar>
                                                        <Avatar>
                                                            <PersonIcon />
                                                        </Avatar>
                                                    </ListItemAvatar>
                                                    <ListItemText
                                                        primary={member.name}
                                                        secondary={member.email}
                                                    />
                                                    {isAdmin ?
                                                        <ListItemSecondaryAction>
                                                            <IconButton onClick={() => deleteMember(member)} className={classes.icon} aria-label="Delete">
                                                                <DeleteIcon />
                                                            </IconButton>
                                                            {!member.accepted ?
                                                                <IconButton onClick={() => acceptMember(member)} className={classes.icon} aria-label="Approve">
                                                                    <CheckIcon />
                                                                </IconButton> : ''}
                                                        </ListItemSecondaryAction>
                                                        :
                                                        ''
                                                    }

                                                </ListItem>
                                            );
                                        })}

                                    </List>
                                </div>
                            </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary" autoFocus>
                            Ok
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </>
    );
}
View.propTypes = {
    fullScreen: PropTypes.bool.isRequired,
};

export default compose(
    withStyles(styles),
    withMobileDialog()
)(View);

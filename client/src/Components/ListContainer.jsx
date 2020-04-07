import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

import Lists from "./Lists";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

function ListContainer({ personsList, banksList }) {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <React.Fragment>
      <a className="nav-link active" onClick={handleOpenDialog}>
        <span>Banks & Users</span>
      </a>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="form-dialog-title"
        TransitionComponent={Transition}
        keepMounted
        maxWidth="md"
        fullWidth
      >
        <DialogContent>
          <div>
            <Box className="">
              <div className="container">
                <div className="row justify-content-between">
                  <div className="col-md-6">
                    <Lists subheader="Persons" persons={personsList} />
                  </div>
                  <div className="col-md-6">
                    <Lists subheader="Banks" banks={banksList} />
                  </div>
                </div>
              </div>
            </Box>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  personsList: state.persons.items,
  banksList: state.banks.items,
});

export default connect(mapStateToProps, {})(ListContainer);

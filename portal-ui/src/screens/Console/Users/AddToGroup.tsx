// This file is part of MinIO Console Server
// Copyright (c) 2019 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
import React, { useState, useEffect } from "react";
import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { Button, LinearProgress } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {
  modalBasic,
  predefinedList,
} from "../Common/FormComponents/common/styleLibrary";
import api from "../../../common/api";
import GroupsSelectors from "./GroupsSelectors";
import Title from "../../../common/Title";
import ModalWrapper from "../Common/ModalWrapper/ModalWrapper";

interface IAddToGroup {
  open: boolean;
  checkedUsers: any;
  closeModalAndRefresh: any;
  classes: any;
}

const styles = (theme: Theme) =>
  createStyles({
    errorBlock: {
      color: "red",
    },
    strongText: {
      fontWeight: 700,
    },
    keyName: {
      marginLeft: 5,
    },
    buttonContainer: {
      textAlign: "right",
    },
    ...modalBasic,
    ...predefinedList,
  });

const AddToGroup = ({
  open,
  checkedUsers,
  closeModalAndRefresh,
  classes,
}: IAddToGroup) => {
  //Local States
  const [saving, isSaving] = useState<boolean>(false);
  const [accepted, setAccepted] = useState<boolean>(false);
  const [updatingError, setError] = useState<string>("");
  const [selectedGroups, setSelectedGroups] = useState<string[]>([]);

  //Effects
  useEffect(() => {
    if (saving) {
      if (selectedGroups.length > 0) {
        api
          .invoke("PUT", "/api/v1/users-groups-bulk", {
            groups: selectedGroups,
            users: checkedUsers,
          })
          .then((res) => {
            isSaving(false);
            setError("");
            setAccepted(true);
          })
          .catch((err) => {
            isSaving(false);
            setError(err);
          });
      } else {
        isSaving(false);
        setError("You need to select at least one group to assign");
      }
    }
  }, [
    saving,
    isSaving,
    setError,
    closeModalAndRefresh,
    selectedGroups,
    checkedUsers,
  ]);

  //Fetch Actions
  const setSaving = (event: React.FormEvent) => {
    event.preventDefault();

    isSaving(true);
  };

  const resetForm = () => {
    setSelectedGroups([]);
  };

  return (
    <ModalWrapper
      modalOpen={open}
      onClose={() => {
        closeModalAndRefresh(accepted);
      }}
      title={
        accepted
          ? "The selected users were added to the following groups."
          : "Add Users to Group"
      }
    >
      {accepted ? (
        <React.Fragment>
          <Grid container>
            <Grid item xs={12} className={classes.predefinedTitle}>
              Groups
            </Grid>
            <Grid item xs={12} className={classes.predefinedList}>
              {selectedGroups.join(", ")}
            </Grid>
            <Grid item xs={12} className={classes.predefinedTitle}>
              Users
            </Grid>
            <Grid item xs={12} className={classes.predefinedList}>
              {checkedUsers.join(", ")}
            </Grid>
          </Grid>
          <br />
          <br />
          <br />
        </React.Fragment>
      ) : (
        <form noValidate autoComplete="off" onSubmit={setSaving}>
          <Grid container>
            <Grid item xs={12} className={classes.formScrollable}>
              {updatingError !== "" && (
                <Grid item xs={12}>
                  <Typography
                    component="p"
                    variant="body1"
                    className={classes.errorBlock}
                  >
                    {updatingError}
                  </Typography>
                </Grid>
              )}

              <Grid item xs={12} className={classes.predefinedTitle}>
                Selected Users
              </Grid>
              <Grid item xs={12} className={classes.predefinedList}>
                {checkedUsers.join(", ")}
              </Grid>
              <Grid item xs={12}>
                <br />
              </Grid>
              <Grid item xs={12}>
                <GroupsSelectors
                  selectedGroups={selectedGroups}
                  setSelectedGroups={setSelectedGroups}
                />
              </Grid>
            </Grid>
            <Grid item xs={12} className={classes.buttonContainer}>
              <button
                type="button"
                color="primary"
                className={classes.clearButton}
                onClick={resetForm}
              >
                Clear
              </button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={saving || selectedGroups.length < 1}
              >
                Save
              </Button>
            </Grid>
            {saving && (
              <Grid item xs={12}>
                <LinearProgress />
              </Grid>
            )}
          </Grid>
        </form>
      )}
    </ModalWrapper>
  );
};

export default withStyles(styles)(AddToGroup);

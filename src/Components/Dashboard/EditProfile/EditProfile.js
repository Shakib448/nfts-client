import { Container } from "@material-ui/core";
import React from "react";
import EditProfileBio from "./EditProfileBio";
import EditProfileHeader from "./EditProfileHeader";

const EditProfile = () => {
  return (
    <Container>
      <EditProfileHeader />
      <EditProfileBio />
    </Container>
  );
};

export default EditProfile;

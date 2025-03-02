import { Stack, Typography } from "@mui/material";
import { DynamicHelmet } from "@rt/components/Helmet/Helmet";
import AddNewUsersButton from "@rt/pages/privatePages/UsersPage/page-components/AddNewUsers/AddNewUsersButton";
import UsersList from "@rt/pages/privatePages/UsersPage/page-components/UsersList/UsersList";
import { RouteType } from "@rt/routes/routes";
import React from "react";

interface UserPageProps {
  routeData: RouteType;
}

const UserPage: React.FC<UserPageProps> = ({ routeData }) => {
  return (
    <>
      <DynamicHelmet title={routeData.title} />
      <Stack
        direction="row"
        justifyContent="space-between"
        alignContent={"center"}
      >
        <Typography variant="h6" margin={"auto 0"}>
          Users
        </Typography>
        <AddNewUsersButton />
      </Stack>
      <UsersList />
    </>
  );
};

export default UserPage;

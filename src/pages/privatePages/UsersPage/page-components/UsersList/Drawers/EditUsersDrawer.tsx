import React, { useState } from "react";
import StyledDrawer from "@rt/components/Drawer/Drawer";
import { useEdit } from "@rt/hooks/crudFunctions/useEdit";
import { ENDPOINTS } from "@rt/api/end-points";
import { RTButton } from "@rt/components/Buttons/Index";
import { useGlobalSnackbar } from "@rt/context/GlobalSnackbarProvider/GlobalSnackbarProvider";
import EditUsersPanel from "@rt/pages/privatePages/UsersPage/page-components/UsersList/Panels/EditUsersPanel";
import { User } from "@rt/pages/privatePages/UsersPage/page-components/AddNewUsers/AddNewUsersButton";
import { UserList } from "@rt/context/UserContext/UserContext";

interface EditUsersDrawerProps {
  open: boolean;
  onClose: () => void;
  data: UserList;
}

const EditUsersDrawer: React.FC<EditUsersDrawerProps> = ({
  open,
  onClose,
  data,
}) => {
  const { userName, role, experience, email, phone } = data;
  const { showSnackbar } = useGlobalSnackbar();
  const [user, setUser] = useState<User>({
    userName,
    role,
    experience,
    email,
    phone,
  });

  const { editMutation } = useEdit<User>({
    endpoint: ENDPOINTS.USERS.UPDATE.replace(":userId", data.userId),
    invalidationKey: "users",
    onSuccess: () => {
      showSnackbar("User successfully edited!", "success");
      onClose();
    },
    onError: (error) => {
      showSnackbar(`User edit failed! ${error.message}`, "error");
    },
  });

  return (
    <StyledDrawer
      title={`Edit User: ${data.userName}`}
      open={open}
      onClose={onClose}
      content={<EditUsersPanel setUser={setUser} user={user} />}
      footer={
        <RTButton.add
          disabled={editMutation.isPending}
          loading={editMutation.isPending}
          onClick={() => editMutation.mutate(user)}
        >
          Edit User
        </RTButton.add>
      }
    />
  );
};

export default EditUsersDrawer;

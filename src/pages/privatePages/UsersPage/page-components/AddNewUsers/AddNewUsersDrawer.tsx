import { useState } from "react";
import { RTButton } from "@rt/components/Buttons/Index";
import StyledDrawer from "@rt/components/Drawer/Drawer";
import AddNewUsersPanel from "@rt/pages/privatePages/UsersPage/page-components/AddNewUsers/AddNewUsersPanel";
import { useAdd } from "@rt/hooks/crudFunctions/useAdd";
import { ENDPOINTS } from "@rt/api/end-points";
import { useGlobalSnackbar } from "@rt/context/GlobalSnackbarProvider/GlobalSnackbarProvider";
import { User } from "@rt/pages/privatePages/UsersPage/page-components/AddNewUsers/AddNewUsersButton";

export interface AddNewUsersDrawerProps {
  open: boolean;
  onClose: () => void;
}

const AddNewUsersDrawer: React.FC<AddNewUsersDrawerProps> = ({
  open,
  onClose,
}) => {
  const { showSnackbar } = useGlobalSnackbar();

  const [user, setUser] = useState<User>({
    userName: "",
    role: "",
    experience: "",
    email: "",
    phone: "",
  });

  const { addMutation } = useAdd<User>({
    endpoint: ENDPOINTS.USERS.CREATE,
    invalidationKey: "users",
    onSuccess: () => {
      showSnackbar("User successfully added!", "success");
      onClose();
    },
    onError: (error) => {
      showSnackbar(`User creation failed! ${error.message}`, "error");
    },
  });

  return (
    <>
      <StyledDrawer
        title="Add New User"
        open={open}
        onClose={onClose}
        content={
          <AddNewUsersPanel setUser={setUser} user={user} />
        }
        footer={
          <RTButton.add
            disabled={addMutation.isPending}
            loading={addMutation.isPending}
            onClick={() => addMutation.mutate(user)}
          >
            Add User
          </RTButton.add>
        }
      />
    </>
  );
};

export default AddNewUsersDrawer;

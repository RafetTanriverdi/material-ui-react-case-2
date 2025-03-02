import { ENDPOINTS } from "@rt/api/end-points";
import { RTButton } from "@rt/components/Buttons/Index";
import StyledDrawer from "@rt/components/Drawer/Drawer";
import { useDelete } from "@rt/hooks/crudFunctions/useDelete";
import { useGlobalSnackbar } from "@rt/context/GlobalSnackbarProvider/GlobalSnackbarProvider";
import DeleteUsersPanel from "@rt/pages/privatePages/UsersPage/page-components/UsersList/Panels/DeleteUsersPanel";
import { UserList } from "@rt/context/UserContext/UserContext";

const DeleteUsersDrawer = ({
  open,
  onClose,
  data,
}: {
  open: boolean;
  onClose: () => void;
  data: UserList;
}) => {
  const { showSnackbar } = useGlobalSnackbar();

  const { deleteMutation } = useDelete({
    endpoint: ENDPOINTS.USERS.DELETE.replace(":userId", data.userId),
    invalidationKey: "users",
    onSuccess: () => {
      showSnackbar("User successfully deleted!", "success");
      onClose();
    },
    onError: (error) => {
      showSnackbar(`User deletion failed! ${error.message}`, "error");
      onClose();
    },
  });

  return (
    <StyledDrawer
      title={`Delete User: ${data.userName}`}
      open={open}
      onClose={onClose}
      content={<DeleteUsersPanel data={data} />}
      footer={
        <RTButton.delete
          onClick={() => deleteMutation.mutate()}
          loading={deleteMutation.isPending}
          disabled={deleteMutation.isPending}
        >
          Delete
        </RTButton.delete>
      }
    />
  );
};

export default DeleteUsersDrawer;

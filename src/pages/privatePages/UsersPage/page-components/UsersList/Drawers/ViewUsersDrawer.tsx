import StyledDrawer from "@rt/components/Drawer/Drawer";
import { UserList } from "@rt/context/UserContext/UserContext";
import ViewUsersPanel from "@rt/pages/privatePages/UsersPage/page-components/UsersList/Panels/ViewUsersPanel";
import { useQueryClient } from "@tanstack/react-query";

const ViewUsersDrawer = ({
  open,
  onClose,
  data,
}: {
  open: boolean;
  onClose: () => void;
  data: UserList;
}) => {
  const queryClient = useQueryClient();
  const handleClose = () => {
    onClose();
    queryClient.removeQueries({ queryKey: [`get-${data.userName}`] });
  };

  return (
    <StyledDrawer
      title={`View User: ${data.userName}`}
      open={open}
      onClose={handleClose}
      content={<ViewUsersPanel data={data} />}
    />
  );
};

export default ViewUsersDrawer;

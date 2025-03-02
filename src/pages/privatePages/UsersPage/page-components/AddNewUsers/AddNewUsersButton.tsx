import { RTButton } from "@rt/components/Buttons/Index";
import { CrudEntity } from "@rt/hooks/crudFunctions/useAdd";
import AddNewUsersDrawer from "@rt/pages/privatePages/UsersPage/page-components/AddNewUsers/AddNewUsersDrawer";
import { useState } from "react";

export interface User extends CrudEntity {
  userName: string;
  role: string;
  experience: string;
  email: string;
  phone: string;
}

const AddNewUsersButton = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <RTButton.add onClick={() => setOpen(true)}>
        Add New Users
      </RTButton.add>
      {open && <AddNewUsersDrawer open={open} onClose={handleClose} />}
    </>
  );
};

export default AddNewUsersButton;

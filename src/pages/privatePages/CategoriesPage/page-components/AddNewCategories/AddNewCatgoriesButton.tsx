import { RTButton } from "@rt/components/Buttons/Index";
import AddNewCategoriesDrawer from "@rt/pages/privatePages/CategoriesPage/page-components/AddNewCategories/AddNewCategoriesDrawer";
import { useState } from "react";

const AddNewCatgoriesButton = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <RTButton.add onClick={() => setOpen(true)}>
        Add New Categories
      </RTButton.add>
      {open && <AddNewCategoriesDrawer open={open} onClose={handleClose} />}
    
    </>
  );
};

export default AddNewCatgoriesButton;

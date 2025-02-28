import React from "react";
import StyledDrawer from "@rt/components/Drawer/Drawer";
import EditCategoriesPanel from "@rt/pages/privatePages/CategoriesPage/page-components/CategoriesList/Panels/EditCategoriesPanel";

interface EditCategoriesDrawerProps {
  open: boolean;
  onClose: () => void;
  data: {
    id: number;
    name: string;
    description: string;
  };
}

const EditCategoriesDrawer: React.FC<EditCategoriesDrawerProps> = ({
  open,
  onClose,
  data,
}) => {
  return (
    <StyledDrawer
      title={`Edit Category: ${data.id}`}
      open={open}
      onClose={onClose}
      content={<EditCategoriesPanel />}
    />
  );
};

export default EditCategoriesDrawer;

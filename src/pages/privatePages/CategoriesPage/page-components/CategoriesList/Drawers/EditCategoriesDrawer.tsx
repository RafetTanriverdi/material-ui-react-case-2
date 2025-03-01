import React, { useState } from "react";
import StyledDrawer from "@rt/components/Drawer/Drawer";
import EditCategoriesPanel from "@rt/pages/privatePages/CategoriesPage/page-components/CategoriesList/Panels/EditCategoriesPanel";
import { CategoryList } from "@rt/context/CategoryContext/CategoryContext";
import { Category } from "@rt/pages/privatePages/CategoriesPage/page-components/AddNewCategories/AddNewCategoriesDrawer";
import { useEdit } from "@rt/hooks/crudFunctions/useEdit";
import { useGlobalSnackbar } from "@rt/context/GlobalSnackbarProvider/GlobalSnackbarProvider";
import { ENDPOINTS } from "@rt/api/end-points";
import { RTButton } from "@rt/components/Buttons/Index";

interface EditCategoriesDrawerProps {
  open: boolean;
  onClose: () => void;
  data: CategoryList;
}

const EditCategoriesDrawer: React.FC<EditCategoriesDrawerProps> = ({
  open,
  onClose,
  data,
}) => {
  const { categoryName, description, productAmount } = data;
  const { showSnackbar } = useGlobalSnackbar();
  const [category, setCategory] = useState<Category>({
    categoryName,
    description,
    productAmount,
  });

  const { editMutation } = useEdit<Category>({
    endpoint: ENDPOINTS.CATEGOREIS.UPDATE.replace(':categoryId', data.categoryId),
    invalidationKey: "categories",
    onSuccess: () => {
      showSnackbar("Category successfully edited!", "success");
      onClose();
    },
    onError: (error) => {
      showSnackbar(`Category edit failed! ${error.message}`, "error");
    },
  });

  return (
    <StyledDrawer
      title={`Edit Category: ${data.categoryName}`}
      open={open}
      onClose={onClose}
      content={
        <EditCategoriesPanel setCategory={setCategory} category={category} />
      }
      footer={
        <RTButton.add
          disabled={editMutation.isPending}
          loading={editMutation.isPending}
          onClick={() => editMutation.mutate(category)}
        >
          Edit Category
        </RTButton.add>
      }
    />
  );
};

export default EditCategoriesDrawer;

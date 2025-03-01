import { useState } from "react";
import { RTButton } from "@rt/components/Buttons/Index";
import StyledDrawer from "@rt/components/Drawer/Drawer";
import AddNewCategoriesPanel from "@rt/pages/privatePages/CategoriesPage/page-components/AddNewCategories/AddNewCategoriesPanel";
import { CrudEntity, useAdd } from "@rt/hooks/crudFunctions/useAdd";
import { ENDPOINTS } from "@rt/api/end-points";
import { useGlobalSnackbar } from "@rt/context/GlobalSnackbarProvider/GlobalSnackbarProvider";

export interface Category extends CrudEntity {
  categoryName: string;
  description: string;
  productAmount: string;
}

export interface AddNewCategoriesDrawerProps {
  open: boolean;
  onClose: () => void;
}

const AddNewCategoriesDrawer: React.FC<AddNewCategoriesDrawerProps> = ({
  open,
  onClose,
}) => {
  const { showSnackbar } = useGlobalSnackbar();

  const [category, setCategory] = useState<Category>({
    categoryName: "",
    description: "",
    productAmount: "",
  });

  const { addMutation } = useAdd<Category>({
    endpoint: ENDPOINTS.CATEGOREIS.CREATE,
    invalidationKey: "categories",
    onSuccess: () => {
      showSnackbar("Category successfully added!", "success");
      onClose();
    },
    onError: (error) => {
      showSnackbar(`Category creation failed! ${error.message}`, "error");
    },
  });

  return (
    <>
      <StyledDrawer
        title="Add New Category"
        open={open}
        onClose={onClose}
        content={
          <AddNewCategoriesPanel
            setCategory={setCategory}
            category={category}
          />
        }
        footer={
          <RTButton.add
            disabled={addMutation.isPending}
            loading={addMutation.isPending}
            onClick={() => addMutation.mutate(category)}
          >
            Add Category
          </RTButton.add>
        }
      />
    </>
  );
};

export default AddNewCategoriesDrawer;

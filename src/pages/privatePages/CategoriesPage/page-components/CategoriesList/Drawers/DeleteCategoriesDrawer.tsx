import { ENDPOINTS } from "@rt/api/end-points";
import { RTButton } from "@rt/components/Buttons/Index";
import StyledDrawer from "@rt/components/Drawer/Drawer";
import { CategoryList } from "@rt/context/CategoryContext/CategoryContext";
import { useGlobalSnackbar } from "@rt/context/GlobalSnackbarProvider/GlobalSnackbarProvider";
import { useDelete } from "@rt/hooks/crudFunctions/useDelete";
import DeleteCategoriesPanel from "@rt/pages/privatePages/CategoriesPage/page-components/CategoriesList/Panels/DeleteCategoriesPanel";

const DeleteCategoriesDrawer = ({
  open,
  onClose,
  data,
}: {
  open: boolean;
  onClose: () => void;
  data: CategoryList;
}) => {
  const { showSnackbar } = useGlobalSnackbar();

  const { deleteMutation } = useDelete({
    endpoint: ENDPOINTS.CATEGOREIS.DELETE.replace(
      ":categoryId",
      data.categoryId
    ),
    invalidationKey: "categories",
    onSuccess: () => {
      showSnackbar("Category successfully deleted!", "success");
      onClose();
    },
    onError: (error) => {
      showSnackbar(`Category deletion failed! ${error.message}`, "error");
      onClose();
    },
  });

  return (
    <StyledDrawer
      title={`Delete Category: ${data.categoryName}`}
      open={open}
      onClose={onClose}
      content={<DeleteCategoriesPanel data={data} />}
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

export default DeleteCategoriesDrawer;

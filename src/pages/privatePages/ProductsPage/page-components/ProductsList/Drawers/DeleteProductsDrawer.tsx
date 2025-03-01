import { ENDPOINTS } from "@rt/api/end-points";
import { RTButton } from "@rt/components/Buttons/Index";
import StyledDrawer from "@rt/components/Drawer/Drawer";
import { useDelete } from "@rt/hooks/crudFunctions/useDelete";
import { useGlobalSnackbar } from "@rt/context/GlobalSnackbarProvider/GlobalSnackbarProvider";
import DeleteProductsPanel from "@rt/pages/privatePages/ProductsPage/page-components/ProductsList/Panels/DeleteProductsPanel";
import { ProductList } from "@rt/pages/privatePages/ProductsPage/page-components/ProductsList/ProductsList";

const DeleteProductsDrawer = ({
  open,
  onClose,
  data,
}: {
  open: boolean;
  onClose: () => void;
  data: ProductList;
}) => {
  const { showSnackbar } = useGlobalSnackbar();

  const { deleteMutation } = useDelete({
    endpoint: ENDPOINTS.PRODUCTS.DELETE.replace(":productId", data.productId),
    invalidationKey: "products",
    onSuccess: () => {
      showSnackbar("Product successfully deleted!", "success");
      onClose();
    },
    onError: (error) => {
      showSnackbar(`Product deletion failed! ${error.message}`, "error");
      onClose();
    },
  });

  return (
    <StyledDrawer
      title={`Delete Product: ${data.productName}`}
      open={open}
      onClose={onClose}
      content={<DeleteProductsPanel data={data} />}
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

export default DeleteProductsDrawer;

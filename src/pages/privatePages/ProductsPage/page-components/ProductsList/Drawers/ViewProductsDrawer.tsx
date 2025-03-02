import StyledDrawer from "@rt/components/Drawer/Drawer";
import { ProductList } from "@rt/context/ProductContext/ProductContext";
import ViewProductsPanel from "@rt/pages/privatePages/ProductsPage/page-components/ProductsList/Panels/ViewProductsPanel";
import { useQueryClient } from "@tanstack/react-query";

const ViewProductsDrawer = ({
  open,
  onClose,
  data,
}: {
  open: boolean;
  onClose: () => void;
  data: ProductList;
}) => {
  const queryClient = useQueryClient();
  const handleClose = () => {
    onClose();
    queryClient.removeQueries({ queryKey: [`get-${data.productName}`] });
  };
  
  return (
    <StyledDrawer
      title={`View Product: ${data.productName}`}
      open={open}
      onClose={handleClose}
      content={<ViewProductsPanel data={data} />}
    />
  );
};

export default ViewProductsDrawer;

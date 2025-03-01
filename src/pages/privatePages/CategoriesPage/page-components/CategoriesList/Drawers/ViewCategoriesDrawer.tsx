import StyledDrawer from "@rt/components/Drawer/Drawer";
import ViewCategoriesPanel from "@rt/pages/privatePages/CategoriesPage/page-components/CategoriesList/Panels/ViewCategoriesPanel";
import { useQueryClient } from "@tanstack/react-query";
import { CategoryList } from "@rt/context/CategoryContext/CategoryContext";

const ViewCategoriesDrawer = ({
  open,
  onClose,
  data,
}: {
  open: boolean;
  onClose: () => void;
  data: CategoryList;
}) => {
  const queryClient = useQueryClient();
  const handleClose = () => {
    onClose();
    queryClient.removeQueries({ queryKey: [`get-${data.categoryName}`] });
  };
  
  return (
    <StyledDrawer
      title={`View Category: ${data.categoryName}`}
      open={open}
      onClose={handleClose}
      content={<ViewCategoriesPanel data={data} />}
    />
  );
};

export default ViewCategoriesDrawer;

import StyledDrawer from "@rt/components/Drawer/Drawer";
import ViewCategoriesPanel from "@rt/pages/privatePages/CategoriesPage/page-components/CategoriesList/Panels/ViewCategoriesPanel";

const ViewCategoriesDrawer = ({
  open,
  onClose,
  data,
}: {
  open: boolean;
  onClose: () => void;
  data: {
    id: number;
    name: string;
    description: string;
  };
}) => {
  return (
    <StyledDrawer
      title={`View Category: ${data.id}`}
      open={open}
      onClose={onClose}
      content={<ViewCategoriesPanel />}
    />
  );
};

export default ViewCategoriesDrawer;

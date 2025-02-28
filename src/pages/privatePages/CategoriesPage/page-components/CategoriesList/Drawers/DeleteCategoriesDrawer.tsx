import StyledDrawer from "@rt/components/Drawer/Drawer";
import DeleteCategoriesPanel from "@rt/pages/privatePages/CategoriesPage/page-components/CategoriesList/Panels/DeleteCategoriesPanel";

const DeleteCategoriesDrawer = ({
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
      title={`Delete Category: ${data.id}`}
      open={open}
      onClose={onClose}
      content={<DeleteCategoriesPanel />}
    />
  );
};

export default DeleteCategoriesDrawer;

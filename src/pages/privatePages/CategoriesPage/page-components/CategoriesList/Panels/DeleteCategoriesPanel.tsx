import Description from "@rt/components/Description/Description";
import { CategoryList } from "@rt/context/CategoryContext/CategoryContext";

interface DeleteCategoriesPanelProps {
  data: CategoryList;
}

const DeleteCategoriesPanel = ({ data }: DeleteCategoriesPanelProps) => {
  const descData = [
    {
      label: "Category Name",
      value: data.categoryName,
    },
    {
      label: "Category Description",
      value: data.description,
    },
    {
      label: "Product Amount",
      value: data.productAmount,
    },
    {
      label: "Created Date",
      value: data.createdDate,
    },
    {
      label: "Updated Date",
      value: data.updatedDate,
    },
  ];

  return <Description data={descData} column={2} bordered />;
};

export default DeleteCategoriesPanel;

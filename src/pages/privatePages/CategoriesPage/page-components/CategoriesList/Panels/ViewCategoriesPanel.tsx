import { ENDPOINTS } from "@rt/api/end-points";
import { RTAlert } from "@rt/components/Alerts/Index";
import Description from "@rt/components/Description/Description";
import { RTLoading } from "@rt/components/Loading/Index";
import { CategoryList } from "@rt/context/CategoryContext/CategoryContext";
import { useGet } from "@rt/hooks/crudFunctions/useGet";

interface ViewCategoriesPanelProps {
  data: CategoryList;
}

const ViewCategoriesPanel = ({ data }: ViewCategoriesPanelProps) => {
  const { getQuery } = useGet({
    endpoint: ENDPOINTS.CATEGOREIS.GET.replace(
      ":categoryId",
      data.categoryId
    ),
    queryKey: data.categoryName,
  });

  const { data: categoryData, isLoading, isError, error } = getQuery;

  if (isLoading) {
    return <RTLoading.desc variant="rectangular" />;
  }
  if (isError) {
    return <RTAlert.error message={error.message} />;
  }

  return (
    <Description
      data={[
        {
          label: "Category Name",
          value: categoryData.categoryName,
        },
        {
          label: "Category Description",
          value: categoryData.description,
        },
        {
          label: "Product Amount",
          value: categoryData.productAmount,
        },
        {
          label: "Created Date",
          value: categoryData.createdDate,
        },
        {
          label: "Updated Date",
          value: categoryData.updatedDate,
        },
      ]}
      column={2}
      bordered
    />
  );
};

export default ViewCategoriesPanel;

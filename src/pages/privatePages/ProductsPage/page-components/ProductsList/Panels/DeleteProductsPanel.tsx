import Description from "@rt/components/Description/Description";
import { ProductList } from "@rt/context/ProductContext/ProductContext";

interface DeleteProductsPanelProps {
  data: ProductList;
}

const DeleteProductsPanel = ({ data }: DeleteProductsPanelProps) => {
  const descData = [
    {
      label: "Product Name",
      value: data.productName,
    },
    {
      label: "Product Description",
      value: data.description,
    },

    {
      label: "Price",
      value: data.price,
    },
    {
      label: "Category Name",
      value: data.categoryName,
    },
    {
      label: "Stock",
      value: data.stock,
    },
    {
      label: "Created Date",
      value: data.createdAt,
    },
    {
      label: "Updated Date",
      value: data.updatedAt,
    },
  ];

  return <Description data={descData} column={2} bordered />;
};

export default DeleteProductsPanel;

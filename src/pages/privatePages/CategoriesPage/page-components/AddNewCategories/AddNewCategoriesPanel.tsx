import { RTInput } from "@rt/components/Inputs/Index";
import { Category } from "@rt/pages/privatePages/CategoriesPage/page-components/AddNewCategories/AddNewCategoriesDrawer";

const AddNewCategoriesPanel = ({
  setCategory,
  category,
}: {
  setCategory: (category: Category) => void;
  category: Category;
}) => {
  return (
    <>
      <RTInput.text
        value={category.categoryName}
        onChange={(e) =>
          setCategory({ ...category, categoryName: e.target.value })
        }
        fullWidth
        label="Category Name"
        variant="outlined"
        required
        placeholder="Enter new category name"
      />
      <RTInput.text
        value={category.description}
        onChange={(e) =>
          setCategory({ ...category, description: e.target.value })
        }
        fullWidth
        label="Category Description"
        variant="outlined"
        required
        placeholder="Enter new category description"
      />
      <RTInput.text
        fullWidth
        value={category.productAmount}
        onChange={(e) =>
          setCategory({ ...category, productAmount: e.target.value })
        }
        label="Product Amount"
        variant="outlined"
        required
        type="number"
        inputMode="numeric"
      />
    </>
  );
};

export default AddNewCategoriesPanel;

import { RTInput } from "@rt/components/Inputs/Index";
import { Category } from "@rt/pages/privatePages/CategoriesPage/page-components/AddNewCategories/AddNewCategoriesDrawer";
import React from "react";

interface EditCategoriesPanelProps {
  setCategory: (value: Category) => void;
  category: Category;
}

const EditCategoriesPanel: React.FC<EditCategoriesPanelProps> = ({
  setCategory,
  category,
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
        required
        variant="outlined"
      />
      <RTInput.text
        value={category.description}
        onChange={(e) =>
          setCategory({ ...category, description: e.target.value })
        }
        fullWidth
        label="Category Description"
        required
        variant="outlined"
      />
      <RTInput.text
        fullWidth
        value={category.productAmount}
        onChange={(e) =>
          setCategory({ ...category, productAmount: e.target.value })
        }
        label="Product Amount"
        required
        variant="outlined"
        type="number"
        inputMode="numeric"
      />
    </>
  );
};

export default EditCategoriesPanel;

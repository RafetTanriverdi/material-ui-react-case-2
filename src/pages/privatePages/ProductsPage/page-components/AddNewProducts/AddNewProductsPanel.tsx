import { RTInput } from "@rt/components/Inputs/Index";
import { Product } from "@rt/pages/privatePages/ProductsPage/page-components/AddNewProducts/AddNewProductsButton";

const AddNewCategoriesPanel = ({
  setProduct,
  product,
}: {
  setProduct: (product: Product) => void;
  product: Product;
}) => {
  return (
    <>
      <RTInput.text
        value={product.productName}
        onChange={(e) =>
          setProduct({ ...product, productName: e.target.value })
        }
        fullWidth
        label="Product Name"
        variant="outlined"
        required
        placeholder="Enter new product name"
      />
      <RTInput.text
        value={product.description}
        onChange={(e) =>
          setProduct({ ...product, description: e.target.value })
        }
        fullWidth
        label="Product Description"
        variant="outlined"
        required
        placeholder="Enter new product description"
      />

      <RTInput.text
        fullWidth
        value={product.price}
        onChange={(e) => setProduct({ ...product, price: e.target.value })}
        label="Price"
        variant="outlined"
        required
        type="number"
        inputMode="numeric"
      />
      
      <RTInput.text
        value={product.categoryName}
        onChange={(e) =>
          setProduct({ ...product, categoryName: e.target.value })
        }
        fullWidth
        label="Category Name"
        variant="outlined"
        required
        placeholder="Enter new category name"
      />

      <RTInput.text
        fullWidth
        value={product.stock}
        onChange={(e) => setProduct({ ...product, stock: e.target.value })}
        label="Stock"
        variant="outlined"
        required
        type="number"
        inputMode="numeric"
      />
    </>
  );
};

export default AddNewCategoriesPanel;

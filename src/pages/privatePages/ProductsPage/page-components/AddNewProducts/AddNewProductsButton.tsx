import { RTButton } from "@rt/components/Buttons/Index";
import { CrudEntity } from "@rt/hooks/crudFunctions/useAdd";
import AddNewProductsDrawer from "@rt/pages/privatePages/ProductsPage/page-components/AddNewProducts/AddNewProductsDrawer";
import { useState } from "react";

export interface Product extends CrudEntity {
  productName: string;
  price: string;
  description: string;
  stock: string;
  categoryName: string;
}

const AddNewProductsButton = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <RTButton.add onClick={() => setOpen(true)}>
        Add New Products
      </RTButton.add>
      {open && <AddNewProductsDrawer open={open} onClose={handleClose} />}
    </>
  );
};

export default AddNewProductsButton;

import { GridColDef } from "@mui/x-data-grid";
import { ENDPOINTS } from "@rt/api/end-points";
import { RTAlert } from "@rt/components/Alerts/Index";
import { RTButton } from "@rt/components/Buttons/Index";
import { RTLoading } from "@rt/components/Loading/Index";
import Table from "@rt/components/Table/Table";
import { useList } from "@rt/hooks/crudFunctions/useList";
import DeleteProductsDrawer from "@rt/pages/privatePages/ProductsPage/page-components/ProductsList/Drawers/DeleteProductsDrawer";
import EditProductsDrawer from "@rt/pages/privatePages/ProductsPage/page-components/ProductsList/Drawers/EditProductsDrawer";
import ViewProductsDrawer from "@rt/pages/privatePages/ProductsPage/page-components/ProductsList/Drawers/ViewProductsDrawer";
import { TableView } from "@rt/pages/privatePages/ProductsPage/page-components/ProductsList/TableView";
import dayjs from "dayjs";
import React, { useState } from "react";

export interface ProductList {
  productName: string;
  price: string;
  description: string;
  stock: string;
  categoryName: string;
  productId: string;
  createdAt?: string;
  updatedAt?: string;
  id?: string;
}

export interface TableActionsProps {
  data: ProductList;
}

const columns: GridColDef[] = [
  {
    field: "productName",
    headerName: "Product Name",
    minWidth: 130,
    flex: 1,
  },
  {
    field: "categoryName",
    headerName: "Category Name",
    minWidth: 130,
    flex: 1,
  },
  {
    field: "description",
    headerName: "Description",
    minWidth: 130,
    flex: 1,
  },
  {
    field: "price",
    headerName: "Price",
    minWidth: 130,
    flex: 1,
    renderCell: ({ value }) => {
      return `$ ${value}`;
    },
  },
  {
    field: "stock",
    headerName: "Stock",
    description: "This column has a value getter and is not sortable.",
    minWidth: 160,
    flex: 1,
  },
  {
    field: "createdAt",
    headerName: "Created",
    minWidth: 130,
    flex: 1,
    renderCell: ({ value }) => {
      return dayjs(value).format("DD/MM/YYYY - HH:mm");
    },
  },
  {
    field: "updatedAt",
    headerName: "Updated",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    minWidth: 160,
    flex: 1,
    renderCell: ({ value }) => {
      return dayjs(value).format("DD/MM/YYYY - HH:mm");
    },
  },
  {
    flex: 1.5,
    field: "actions",
    headerName: "Actions",
    type: "actions",
    filterable: false,
    sortable: false,
    minWidth: 160,
    renderCell: ({ row }) => {
      return <TableActions data={row} />;
    },
  },
];

const TableActions: React.FC<TableActionsProps> = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState(TableView.VIEW);

  const showDrawer = (type: string) => {
    setType(type);
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <RTButton.action
        underline="none"
        onClick={() => showDrawer(TableView.VIEW)}
      >
        View
      </RTButton.action>
      <RTButton.action
        underline="none"
        onClick={() => showDrawer(TableView.EDIT)}
      >
        Edit
      </RTButton.action>
      <RTButton.action
        underline="none"
        onClick={() => showDrawer(TableView.DELETE)}
      >
        Delete
      </RTButton.action>
      {open && type === TableView.EDIT && (
        <EditProductsDrawer open={open} onClose={onClose} data={data} />
      )}
      {open && type === TableView.VIEW && (
        <ViewProductsDrawer open={open} onClose={onClose} data={data} />
      )}
      {open && type === TableView.DELETE && (
        <DeleteProductsDrawer open={open} onClose={onClose} data={data} />
      )}
    </div>
  );
};

const ProductsList = () => {
  const { listQuery } = useList({
    endpoint: ENDPOINTS.PRODUCTS.LIST,
    queryKey: "products",
  });

  const { data, isLoading, isError, error } = listQuery;

  const rows =
    (data as ProductList[])
      ?.sort(
        (a, b) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf()
      )
      .map((e) => ({ ...e, id: e.productId })) ?? [];

  if (isLoading) return <RTLoading.table />;
  if (isError) return <RTAlert.error message={error.message} />;
  return <Table columns={columns} rows={rows} />;
};

export default ProductsList;

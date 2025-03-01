import { GridColDef } from "@mui/x-data-grid";
import { RTAlert } from "@rt/components/Alerts/Index";
import { RTButton } from "@rt/components/Buttons/Index";
import { RTLoading } from "@rt/components/Loading/Index";
import Table from "@rt/components/Table/Table";
import { CategoryList, useCategoryContext } from "@rt/context/CategoryContext/CategoryContext";
import DeleteCategoriesDrawer from "@rt/pages/privatePages/CategoriesPage/page-components/CategoriesList/Drawers/DeleteCategoriesDrawer";
import EditCategoriesDrawer from "@rt/pages/privatePages/CategoriesPage/page-components/CategoriesList/Drawers/EditCategoriesDrawer";
import ViewCategoriesDrawer from "@rt/pages/privatePages/CategoriesPage/page-components/CategoriesList/Drawers/ViewCategoriesDrawer";
import { TableView } from "@rt/pages/privatePages/CategoriesPage/page-components/CategoriesList/TableView";
import dayjs from "dayjs";
import React, { useState } from "react";

export interface TableActionsProps {
  data: CategoryList;
}

const columns: GridColDef[] = [
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
    field: "productAmount",
    headerName: "Product Amount",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    minWidth: 160,
    flex: 1,
  },
  {
    field: "createdDate",
    headerName: "Created",
    minWidth: 130,
    flex: 1,
    renderCell: ({ value }) => {
      return dayjs(value).format("DD/MM/YYYY - HH:mm");
    },
  },
  {
    field: "updatedDate",
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
        <EditCategoriesDrawer open={open} onClose={onClose} data={data} />
      )}
      {open && type === TableView.VIEW && (
        <ViewCategoriesDrawer open={open} onClose={onClose} data={data} />
      )}
      {open && type === TableView.DELETE && (
        <DeleteCategoriesDrawer open={open} onClose={onClose} data={data} />
      )}
    </div>
  );
};

const CategoriesList = () => {
  const { data, isLoading, isError, error } = useCategoryContext();

  const rows =
    data
      ?.sort(
        (a, b) =>
          dayjs(b.createdDate).valueOf() - dayjs(a.createdDate).valueOf()
      )
      .map((e) => ({ ...e, id: e.categoryId })) ?? [];

  if (isLoading) return <RTLoading.table />;
  if (isError) return <RTAlert.error message={error} />;
  return <Table columns={columns} rows={rows} />;
};

export default CategoriesList;

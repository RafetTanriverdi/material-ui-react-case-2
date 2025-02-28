import { Stack, Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { RTButton } from "@rt/components/Buttons/Index";
import Table from "@rt/components/Table/Table";
import AddNewCatgoriesButton from "@rt/pages/privatePages/CategoriesPage/page-components/AddNewCategories/AddNewCatgoriesButton";
import DeleteCategoriesDrawer from "@rt/pages/privatePages/CategoriesPage/page-components/CategoriesList/Drawers/DeleteCategoriesDrawer";
import EditCategoriesDrawer from "@rt/pages/privatePages/CategoriesPage/page-components/CategoriesList/Drawers/EditCategoriesDrawer";
import ViewCategoriesDrawer from "@rt/pages/privatePages/CategoriesPage/page-components/CategoriesList/Drawers/ViewCategoriesDrawer";
import { TableView } from "@rt/pages/privatePages/CategoriesPage/page-components/CategoriesList/TableView";
import React, { useState } from "react";

interface TableActionsProps {
  data: {
    id: number;
    name: string;
    description: string;
  };
}

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70, flex: 1 },
  { field: "firstName", headerName: "First name", width: 130, flex: 1 },
  {
    field: "lastName",
    headerName: "Last name",
    width: 130,
    flex: 1,
  },
  {
    field: "age",
    headerName: "Age",
    width: 130,
    flex: 1,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (_value, row) =>
      `${row.firstName || ""} ${row.lastName || ""}`,
    flex: 1,
  },
  {
    flex: 1.5,
    field: "actions",
    headerName: "Actions",
    type: "actions",
    filterable: false,
    sortable: false,
    width: 160,
    renderCell: ({ row }) => {
      console.log(row);
      return <TableActions data={row} />;
    },
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 123 },
  { id: 6, lastName: "Melisandre", firstName: "sdfs", age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 10, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 11, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 12, lastName: "Lannister", firstName: "Jaime", age: 45 },
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
  return (
    <>
      <Stack direction={"row"} justifyContent="space-between">
        <Typography variant="h6"   >Categories</Typography>
        <AddNewCatgoriesButton/>
      </Stack>
      <Table columns={columns} rows={rows} />
    </>
  );
};

export default CategoriesList;

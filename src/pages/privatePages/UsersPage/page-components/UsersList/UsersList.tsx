import { GridColDef } from "@mui/x-data-grid";
import { RTAlert } from "@rt/components/Alerts/Index";
import { RTButton } from "@rt/components/Buttons/Index";
import { RTLoading } from "@rt/components/Loading/Index";
import Table from "@rt/components/Table/Table";
import { UserList, useUserContext } from "@rt/context/UserContext/UserContext";
import DeleteUsersDrawer from "@rt/pages/privatePages/UsersPage/page-components/UsersList/Drawers/DeleteUsersDrawer";
import EditUsersDrawer from "@rt/pages/privatePages/UsersPage/page-components/UsersList/Drawers/EditUsersDrawer";
import ViewUsersDrawer from "@rt/pages/privatePages/UsersPage/page-components/UsersList/Drawers/ViewUsersDrawer";
import { TableView } from "@rt/pages/privatePages/UsersPage/page-components/UsersList/TableView";
import dayjs from "dayjs";
import React, { useState } from "react";

export interface TableActionsProps {
  data: UserList;
}

const columns: GridColDef[] = [
  {
    field: "userName",
    headerName: "User Name",
    minWidth: 130,
    flex: 1,
  },
  {
    field: "role",
    headerName: "Role",
    minWidth: 130,
    flex: 1,
  },
  {
    field: "experience",
    headerName: "Experience",
    minWidth: 130,
    flex: 1,
  },
  {
    field: "email",
    headerName: "E-mail",
    minWidth: 130,
    flex: 1,
  },
  {
    field: "phone",
    headerName: "Phone",
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
        <EditUsersDrawer open={open} onClose={onClose} data={data} />
      )}
      {open && type === TableView.VIEW && (
        <ViewUsersDrawer open={open} onClose={onClose} data={data} />
      )}
      {open && type === TableView.DELETE && (
        <DeleteUsersDrawer open={open} onClose={onClose} data={data} />
      )}
    </div>
  );
};

const UsersList = () => {
  const { data, isLoading, isError, error } = useUserContext();

  const rows =
    data
      ?.sort(
        (a, b) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf()
      )
      .map((e) => ({ ...e, id: e.userId })) ?? [];

  if (isLoading) return <RTLoading.table />;
  if (isError) return <RTAlert.error message={error} />;
  return <Table columns={columns} rows={rows} />;
};

export default UsersList;

import { Paper, styled } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const TableContainer = styled(Paper)(() => ({
  height: "79vh",
  width: "100%",
  margin: "0 auto",
}));

const Table = ({
  rows,
  columns,
  paginationModel = { pageSize: 10, page: 0 },
}: {
  columns: GridColDef[];
  rows: Array<{
    id: number | string;
    lastName?: string;
    firstName?: string;
    age?: number;
  }>;
  paginationModel?: { pageSize: number; page: number };
}) => {
  return (
    <TableContainer>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[10, 20, 30]}
        sx={{ minWidth: "100%" }}
        isRowSelectable={() => false}
      />
    </TableContainer>
  );
};

export default Table;

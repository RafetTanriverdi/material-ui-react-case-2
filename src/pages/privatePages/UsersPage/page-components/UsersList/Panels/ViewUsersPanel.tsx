import { ENDPOINTS } from "@rt/api/end-points";
import { RTAlert } from "@rt/components/Alerts/Index";
import Description from "@rt/components/Description/Description";
import { RTLoading } from "@rt/components/Loading/Index";
import { UserList } from "@rt/context/UserContext/UserContext";
import { useGet } from "@rt/hooks/crudFunctions/useGet";
import React from "react";

interface ViewUsersPanelProps {
  data: UserList;
}

const ViewUsersPanel: React.FC<ViewUsersPanelProps> = ({ data }) => {
  const { getQuery } = useGet({
    endpoint: ENDPOINTS.USERS.GET.replace(":userId", data.userId),
    queryKey: data.userName,
  });

  const { data: userData, isLoading, isError, error } = getQuery;

  if (isLoading) {
    return <RTLoading.desc variant="rectangular" />;
  }
  if (isError) {
    return <RTAlert.error message={error.message} />;
  }

  return (
    <Description
      data={[
        {
          label: "User Name",
          value: userData.userName,
        },
        {
          label: "User Role",
          value: userData.role,
        },

        {
          label: "Experience",
          value: userData.experience,
        },
        {
          label: "E-mail",
          value: userData.email,
        },
        {
          label: "Phone",
          value: userData.phone,
        },
        {
          label: "Created Date",
          value: userData.createdAt,
        },
        {
          label: "Updated Date",
          value: userData.updatedAt,
        },
      ]}
      column={2}
      bordered
    />
  );
};

export default ViewUsersPanel;

import Description from "@rt/components/Description/Description";
import { UserList } from "@rt/context/UserContext/UserContext";

interface DeleteUsersPanelProps {
  data: UserList;
}

const DeleteUsersPanel = ({ data }: DeleteUsersPanelProps) => {
  const descData = [
    {
      label: "User Name",
      value: data.userName,
    },
    {
      label: "User Role",
      value: data.role,
    },

    {
      label: "Experience",
      value: data.experience,
    },
    {
      label: "E-mail",
      value: data.email,
    },
    {
      label: "Phone",
      value: data.phone,
    },
    {
      label: "Created Date",
      value: data.createdAt,
    },
    {
      label: "Updated Date",
      value: data.updatedAt,
    },
  ];

  return <Description data={descData} column={2} bordered />;
};

export default DeleteUsersPanel;

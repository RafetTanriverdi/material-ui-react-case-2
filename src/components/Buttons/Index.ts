import { ActionButton } from "@rt/components/Buttons/ActionButton/ActionButton";
import { AddButton } from "@rt/components/Buttons/AddButton/AddButton";
import { DeleteButton } from "@rt/components/Buttons/DeleteButton/DeleteButton";
import { LinkButton } from "@rt/components/Buttons/LinkButton/LinkButton";
import { LoginButton } from "@rt/components/Buttons/LoginButton/LoginButton";

export const RTButton = {
  action: ActionButton,
  register: LoginButton,
  login: LoginButton,
  add: AddButton,
  delete: DeleteButton,
  signOut: DeleteButton,
  link: LinkButton,
};

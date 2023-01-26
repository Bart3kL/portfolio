export interface HelloPageFoldersProps {
  isOpen: { open: boolean; i: number };
  setIsOpen: ({
    i,
    open,
    menu,
  }: {
    i: number;
    open: boolean;
    menu: string;
  }) => void;
  setSubmenuName: (v: string) => void;
  open: boolean;
  menu: string;
  subMenu: {
    name: string;
    content: { text: string }[];
  }[];
  index: number;
}

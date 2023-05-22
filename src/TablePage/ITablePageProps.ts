import { ReactNode } from "react";

export interface ITablePageProps {
  tableBody: any;
  tableHeading: any;
  children?: ReactNode;
  idName: string;
  hasCheckbox: boolean;
  onAction: any;
  canBeDeleted?: boolean;
}

export type TtableData = Record<string, any>[];

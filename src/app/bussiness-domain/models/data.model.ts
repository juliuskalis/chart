export interface DataModel {
  id: string;
  title: string;
  displayName: string;
  firstAndLastLetter: string;
  parentId: string;
  firstname: string;
  lastname: string;
  department: string;
  mail: string;
  tel: string;
  displayChildren?: boolean;
  children?: DataModel[];
  childrenLength?: number;
}

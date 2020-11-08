import type { Column } from "@devexpress/dx-react-grid";

export const columns: Column[] = [
  { name: "name", title: "Название" },
  { name: "priority", title: "Приоритет" },
  { name: "status", title: "Статус" },
  { name: "description", title: "Описание" },
  { name: "date", title: "Дата" },
  { name: "timePlanned", title: "Планируемое время" },
  { name: "timeElapsed", title: "Затраченное время" },
];

export const pageSizes: number[] = [5, 10, 15];

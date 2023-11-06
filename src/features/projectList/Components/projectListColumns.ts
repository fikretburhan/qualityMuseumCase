import { createColumnHelper } from "@tanstack/react-table";
import { IProjectList } from "../Service/projectListTypes";



  const columnHelper = createColumnHelper<IProjectList>()

  export const columns = [
    columnHelper.accessor('name', {
      cell: info => info.getValue(),
      footer: info => info.column.id,
    }),
    // columnHelper.accessor(row => row.name, {
    //   id: 'name',
    //   cell: info => <i>{info.getValue()}</i>,
    //   header: () => <span>Last Name</span>,
    //   footer: info => info.column.id,
    // }),
    columnHelper.accessor('description', {
      header: () => 'Açıklama',
      cell: info => info.renderValue(),
      footer: info => info.column.id,
    }),
    columnHelper.accessor('language', {
      header: () => "Dil",
      footer: info => info.column.id,
    }),
    columnHelper.accessor('activeStatus', {
      header: 'Statü',
      footer: info => info.column.id,
    }),
    columnHelper.accessor('createdDate', {
      header: 'Oluşturulma Tarihi',
      footer: info => info.column.id,
    }),
  ]

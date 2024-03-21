import * as React from "react"
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export type InfoPrev = {
    peerId: string;
    email: string;
    status: "Online" | "Offline" | "Busy";
    location: string;
    latency: string;
    file_they_want: string;
};

const infoprev: InfoPrev[] = [
    {
      peerId: "m5gr84i9",
      email: "ken99@yahoo.com",
      status: "Online",
      location: "New York, USA",
      latency: "120ms",
      file_they_want: "Stony Brook Dictionary"
    },
    {
      peerId: "3u1reuv4",
      email: "Abe45@gmail.com",
      status: "Online",
      location: "Tokyo, Japan",
      latency: "200ms",
      file_they_want: "Harvard Dictionary"
    },
    {
      peerId: "derv1ws0",
      email: "Monserrat44@gmail.com",
      status: "Offline",
      location: "Beijing, China",
      latency: "200ms",
      file_they_want: "Harvard Dictionary"
    },
    {
      peerId: "5kma53ae",
      email: "Silas22@gmail.com",
      status: "Busy",
      location: "Tokyo, Japan",
      latency: "200ms",
      file_they_want: "Harvard Dictionary"
    },
    {
      peerId: "bhqecj4p",
      email: "carmella@hotmail.com",
      status: "Offline",
      location: "Tokyo, Japan",
      latency: "200ms",
      file_they_want: "Stony Brook Dictionary"
    },
    // Add more peers as necessary
];
interface ProfileInfoPopupProps {
  peer: PeerInfo;
  position: { top: number; left: number };
}

const ProfileInfoPopup: React.FC<ProfileInfoPopupProps> = ({ peer, position }) => {
  const matchingPeer = infoprev.find((p) => p.peerId === peer.id); // Ensure infoprev is accessible
  console.log(peer, position);
  if (!matchingPeer) {
    return null;
  }


  const style = {
    position: 'absolute' as 'absolute', // Explicitly cast the value to 'absolute'
    top: `${position.top}px`,
    left: `${position.left}px`,
    zIndex: 1000,
    backgroundColor: 'white',
    border: '1px solid black',
    padding: '10px',
  };

  return (
    // <div style={style} className="popup-class">
      <div className="mt-2">
        <p>Email: {matchingPeer.email}</p>
        <p>Status: {matchingPeer.status}</p>
        <p>Location: {matchingPeer.location}</p>
        <p>Latency: {matchingPeer.latency}</p>
        <p>File They Want: {matchingPeer.file_they_want}</p>
      </div>
    // </div>
  );
};

export type PeerInfo = {
    id: string;
    amount: number;
    status: "Online" | "Busy" | "Offline";
    email: string;
    activeTime: Date; // Using Date type for activeTime
  }
  
  // Sample data with activeTime as Date objects
  const data: PeerInfo[] = [
    {
      id: "m5gr84i9",
      amount: 316,
      status: "Online",
      email: "ken99@yahoo.com",
      activeTime: new Date('2023-01-01T14:00:00Z'),
    },
    {
      id: "3u1reuv4",
      amount: 242,
      status: "Online",
      email: "Abe45@gmail.com",
      activeTime: new Date('2023-02-15T09:30:00Z'),
    },
    {
      id: "derv1ws0",
      amount: 837,
      status: "Offline",
      email: "Monserrat44@gmail.com",
      activeTime: new Date('2023-03-10T11:45:00Z'),
    },
    {
      id: "5kma53ae",
      amount: 874,
      status: "Busy",
      email: "Silas22@gmail.com",
      activeTime: new Date('2023-03-20T16:20:00Z'),
    },
    {
      id: "bhqecj4p",
      amount: 721,
      status: "Offline",
      email: "carmella@hotmail.com",
      activeTime: new Date('2023-04-05T07:30:00Z'),
    },
  ];
  

export const columns: ColumnDef<PeerInfo>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "activeTime",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Active Time
        <CaretSortIcon className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const activeTime = row.getValue<Date>('activeTime');
      const formattedTime = activeTime.toLocaleString(); // Converts Date object to a string
      return <div>{formattedTime}</div>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status: "Online" | "Busy" | "Offline" = row.getValue("status");
      let dotColor: string;
      switch (status) {
        case "Online":
          dotColor = "bg-green-500";
          break;
        case "Busy":
          dotColor = "bg-red-500"; 
          break;
        case "Offline":
          dotColor = "bg-gray-500"; 
          break;
        default:
          dotColor = "bg-gray-200";
      }
  
      return (
        <div className="flex items-center gap-2">
          <span className={`h-2 w-2 rounded-full ${dotColor}`} aria-hidden="true"></span>
          {status} 
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)

      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const peerinfo = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(peerinfo.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View Peerinfo details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

const PeersPage = () => {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})
  const [hoveredPeer, setHoveredPeer] = useState<PeerInfo | null>(null);
  const [popupPosition, setPopupPosition] = useState<{ top: number; left: number } | null>(null);

    
  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="relative">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
          {table.getRowModel().rows.map((row) => (
            <React.Fragment key={row.id}>
              <tr
                onMouseEnter={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setHoveredPeer(row.original);
                  setPopupPosition({
                    top: rect.bottom + window.scrollY,
                    left: rect.left,
                  });
                }}
                onMouseLeave={() => {
                  setHoveredPeer(null);
                  setPopupPosition(null);
                }}
                className="cursor-pointer"
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </tr>
              {hoveredPeer === row.original && popupPosition && (
                <tr>
                  <td colSpan={table.getAllColumns().length}>
                    <ProfileInfoPopup peer={hoveredPeer} position={popupPosition} />
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
          </TableBody>

        </Table>
      </div>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
export default PeersPage;

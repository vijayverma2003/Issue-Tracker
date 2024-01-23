import { IssueStatusBadge } from "@/app/components";
import prisma from "@/prisma/client";
import { Issue, Status } from "@prisma/client";
import { Table } from "@radix-ui/themes";
import Link from "../../components/Link";
import NextLink from "next/link";
import IssueActions from "./IssueActions";
import { PiArrowDown, PiArrowUp } from "react-icons/pi";

interface Props {
  searchParams: {
    status: Status;
    orderBy: keyof Issue;
    sortOrder: "asc" | "desc";
  };
}

const IssuesPage = async ({ searchParams }: Props) => {
  const columns: { label: string; value: keyof Issue; className?: string }[] = [
    { label: "Issue", value: "title" },
    { label: "Status", value: "status", className: "hidden md:table-cell" },
    {
      label: "Created At",
      value: "createdAt",
      className: "hidden md:table-cell",
    },
  ];

  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;

  const orderBy = columns.map((col) => col.value).includes(searchParams.orderBy)
    ? {
        [searchParams.orderBy]:
          searchParams.sortOrder === "asc" || searchParams.sortOrder === "desc"
            ? searchParams.sortOrder
            : "asc",
      }
    : undefined;

  const issues = await prisma.issue.findMany({
    where: { status },
    orderBy,
  });

  return (
    <div>
      <IssueActions />
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            {columns.map((column) => (
              <Table.ColumnHeaderCell
                className={column.className}
                key={column.value}
              >
                <NextLink
                  href={{
                    query: {
                      ...searchParams,
                      orderBy: column.value,
                      sortOrder:
                        (searchParams.orderBy === column.value &&
                        searchParams.sortOrder === "asc"
                          ? "desc"
                          : "asc") || "asc",
                    },
                  }}
                >
                  {column.label}
                </NextLink>
                {column.value === searchParams.orderBy &&
                  searchParams.sortOrder === "asc" && (
                    <PiArrowUp className="inline" />
                  )}
                {column.value === searchParams.orderBy &&
                  searchParams.sortOrder === "desc" && (
                    <PiArrowDown className="inline" />
                  )}
              </Table.ColumnHeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues?.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.Cell>
                <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                <div className="block md:hidden mt-1">
                  <IssueStatusBadge status={issue.status} />
                </div>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <IssueStatusBadge status={issue.status} />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {issue.createdAt.toLocaleString()}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export const dynamic = "force-dynamic";

export default IssuesPage;

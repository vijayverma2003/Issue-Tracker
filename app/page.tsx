import prisma from "@/prisma/client";
import IssuesSummary from "./IssuesSummary";
import IssuesChart from "./IssuesChart";

export default async function Home() {
  const open = await prisma.issue.count({ where: { status: "OPEN" } });
  const inProgress = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });
  const closed = await prisma.issue.count({ where: { status: "CLOSED" } });

  return <IssuesChart open={open} closed={closed} inProgress={inProgress} />;
}

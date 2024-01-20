import { Box, Button, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import { IssueStatusBadge } from "@/app/components";
import Markdown from "react-markdown";
import prisma from "@/prisma/client";
import { PiNotePencilDuotone } from "react-icons/pi";
import Link from "next/link";
interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params: { id } }: Props) => {
  const issue = await prisma.issue.findUnique({ where: { id: parseInt(id) } });

  if (!issue) notFound();

  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
      <Box>
        <Heading>{issue.title}</Heading>
        <Flex mt="2" gap="2" mb="5">
          <IssueStatusBadge status={issue.status} />
          <Text>{issue.createdAt.toLocaleString()}</Text>
        </Flex>
        <Card className="prose">
          <Markdown>{issue.description}</Markdown>
        </Card>
      </Box>
      <Box>
        <Button>
          <PiNotePencilDuotone />{" "}
          <Link href={`/issues/${issue.id}/edit`}>Edit Issue</Link>
        </Button>
      </Box>
    </Grid>
  );
};

export default IssueDetailPage;

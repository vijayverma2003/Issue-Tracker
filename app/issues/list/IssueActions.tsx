import { Box, Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import IssueStatusFilter from "./IssueStatusFilter";

const IssueActions = () => {
  return (
    <Flex justify="between">
      <Box>
        <IssueStatusFilter />
      </Box>
      <Box>
        <Button>
          <Link href="/issues/new">New Issue</Link>
        </Button>
      </Box>
    </Flex>
  );
};

export default IssueActions;

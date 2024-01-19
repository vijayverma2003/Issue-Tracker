import { Box, Card, Flex, Heading } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Markdown from "react-markdown";

const LoadingIssueDetail = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Flex mt="2" gap="2" mb="5">
        <Skeleton width="5rem" />
        <Skeleton width="6rem" />
      </Flex>
      <Card className="prose">
        <Skeleton count={3} />
      </Card>
    </Box>
  );
};

export default LoadingIssueDetail;

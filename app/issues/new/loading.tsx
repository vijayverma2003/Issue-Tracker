import { Box } from "@radix-ui/themes";
import { Skeleton } from "@/app/components";

const LoadingIssueForm = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Skeleton height="20rem" />
      <Skeleton width="8rem" />
    </Box>
  );
};

export default LoadingIssueForm;

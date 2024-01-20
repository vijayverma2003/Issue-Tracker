import { Button } from "@radix-ui/themes";
import { PiNotePencilDuotone } from "react-icons/pi";
import Link from "next/link";

const EditIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <Link href={`/issues/${issueId}/edit`}>
      <Button>
        <PiNotePencilDuotone /> Edit Issue
      </Button>
    </Link>
  );
};

export default EditIssueButton;

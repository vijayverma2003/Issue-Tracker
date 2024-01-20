import { Button } from "@radix-ui/themes";
import { PiNotePencilDuotone } from "react-icons/pi";
import Link from "next/link";

const EditIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <Button>
      <PiNotePencilDuotone />
      <Link href={`/issues/${issueId}/edit`}>Edit Issue</Link>
    </Button>
  );
};

export default EditIssueButton;

import { Button } from "@radix-ui/themes";
import { PiNotePencilDuotone } from "react-icons/pi";
import Link from "next/link";

const EditIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <Button>
      <PiNotePencilDuotone />
      <Link href={`/issues/edit/${issueId}`}>Edit Issue</Link>
    </Button>
  );
};

export default EditIssueButton;

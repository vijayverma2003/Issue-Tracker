"use client";

import "easymde/dist/easymde.min.css";
import { Button, TextField } from "@radix-ui/themes";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";
import SimpleMDE from "react-simplemde-editor";

interface NewIssue {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const router = useRouter();
  const { control, register, handleSubmit } = useForm<NewIssue>();

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        await axios.post("/api/issues", data);
        router.push("/issues");
      })}
      className="max-w-xl space-y-5"
    >
      <TextField.Root>
        <TextField.Input placeholder="Title" {...register("title")} />
      </TextField.Root>
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <SimpleMDE placeholder="Description" {...field} />
        )}
      />

      <Button>Create New Issue</Button>
    </form>
  );
};

export default NewIssuePage;

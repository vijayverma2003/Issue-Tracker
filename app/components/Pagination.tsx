"use client";

import { Button, Flex, Text } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

interface Props {
  itemsCount: number;
  pageSize: number;
  currentPage: number;
}

const Pagination = ({ itemsCount, pageSize, currentPage }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const pageCount = Math.ceil(itemsCount / pageSize);

  if (pageCount <= 1) return null;

  const changePage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());

    router.push("/?" + params.toString());
  };

  return (
    <Flex align="center" gap="2">
      <Button
        color="gray"
        variant="soft"
        disabled={currentPage === 1}
        onClick={() => changePage(1)}
      >
        <MdOutlineKeyboardDoubleArrowLeft />
      </Button>
      <Button
        color="gray"
        variant="soft"
        disabled={currentPage === 1}
        onClick={() => changePage(currentPage - 1)}
      >
        <MdOutlineKeyboardArrowLeft />
      </Button>
      <Text size="2">
        Page {currentPage} of {pageCount}
      </Text>
      <Button
        color="gray"
        variant="soft"
        disabled={currentPage === pageCount}
        onClick={() => changePage(currentPage + 1)}
      >
        <MdOutlineKeyboardArrowRight />
      </Button>
      <Button
        color="gray"
        variant="soft"
        disabled={currentPage === pageCount}
        onClick={() => changePage(pageCount)}
      >
        <MdOutlineKeyboardDoubleArrowRight />
      </Button>
    </Flex>
  );
};

export default Pagination;

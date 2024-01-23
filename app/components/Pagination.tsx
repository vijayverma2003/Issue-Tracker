import { Button, Flex, Text } from "@radix-ui/themes";
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
  const pageCount = Math.ceil(itemsCount / pageSize);

  if (pageCount <= 1) return null;

  return (
    <Flex align="center" gap="2">
      <Button color="gray" variant="soft" disabled={currentPage === 1}>
        <MdOutlineKeyboardDoubleArrowLeft />
      </Button>
      <Button color="gray" variant="soft" disabled={currentPage === 1}>
        <MdOutlineKeyboardArrowLeft />
      </Button>
      <Text size="2">
        Page {currentPage} of {pageCount}
      </Text>
      <Button color="gray" variant="soft" disabled={currentPage === pageCount}>
        <MdOutlineKeyboardArrowRight />
      </Button>
      <Button color="gray" variant="soft" disabled={currentPage === pageCount}>
        <MdOutlineKeyboardDoubleArrowRight />
      </Button>
    </Flex>
  );
};

export default Pagination;

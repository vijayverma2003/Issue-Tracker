import Pagination from "./components/Pagination";

export default function Home({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  return (
    <div>
      Hello World
      <Pagination
        pageSize={10}
        itemsCount={100}
        currentPage={parseInt(searchParams.page)}
      />
    </div>
  );
}

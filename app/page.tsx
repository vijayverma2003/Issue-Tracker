import Pagination from "./components/Pagination";

export default function Home() {
  return (
    <div>
      Hello World
      <Pagination pageSize={10} itemsCount={10} currentPage={10} />
    </div>
  );
}

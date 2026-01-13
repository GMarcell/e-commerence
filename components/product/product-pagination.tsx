"use client";
import { useProductFilterStore } from "@/store/product-filter";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { getPaginationRange } from "@/lib/get-pagination-range";

export default function ProductPagination() {
  const { totalPages, page: currentPage, setPage } = useProductFilterStore();
  const isMobile = useMediaQuery("(max-width: 640px)");
  const MAX_VISIBLE = isMobile ? 5 : 7;

  console.log(totalPages);
  const { start, end } = getPaginationRange(
    currentPage,
    totalPages,
    MAX_VISIBLE
  );
  return (
    <Pagination className="p-4">
      <PaginationContent>
        {/* Previous */}
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious
              onClick={() => setPage(Math.max(currentPage - 1, 1))}
            />
          </PaginationItem>
        )}

        {/* First + Ellipsis */}
        {start > 1 && (
          <>
            <PaginationItem>
              <PaginationLink onClick={() => setPage(1)}>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          </>
        )}

        {/* Page Numbers */}
        {Array.from({ length: end - start + 1 }).map((_, i) => {
          const page = start + i;
          return (
            <PaginationItem key={page}>
              <PaginationLink
                isActive={currentPage === page}
                onClick={() => setPage(page)}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        {/* Ellipsis + Last */}
        {end < totalPages && (
          <>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink onClick={() => setPage(totalPages)}>
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          </>
        )}

        {/* Next */}
        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext
              onClick={() => setPage(Math.min(currentPage + 1, totalPages))}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}

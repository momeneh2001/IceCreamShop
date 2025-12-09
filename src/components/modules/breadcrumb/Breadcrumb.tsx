import Link from "next/link";
import React from "react";

export type Crumb = { label: string; href?: string };

export default function Breadcrumb({
  items,
  className = "",
  separator = "/",
}: {
  items: Crumb[];
  className?: string;
  separator?: React.ReactNode;
}) {
  if (!items || items.length === 0) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className={`inline-block bg-white rounded-full px-4 py-2 border shadow-sm ${className}`}
    >
      <ol className="flex items-center gap-2 text-sm text-gray-600 whitespace-nowrap">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link href={item.href} className="hover:underline text-hotPink">
                  {item.label}
                </Link>
              ) : (
                <span aria-current={isLast ? "page" : undefined} className={isLast ? "font-semibold text-gray-900" : ""}>
                  {item.label}
                </span>
              )}

              {!isLast && (
                <span className="text-gray-400" aria-hidden>
                  {separator}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

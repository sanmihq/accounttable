"use client";

import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { APP_NAME } from "@/config/appConfig";

export default function DynamicBreadcrumb() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean); // Get path segments, e.g. ["accounttable", "dashboard"]

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>{APP_NAME}</BreadcrumbItem>
        <BreadcrumbSeparator className="hidden md:block" />
        {/* Dynamic breadcrumbs for other path segments */}
        {pathSegments.map((segment, index) => (
          <BreadcrumbItem key={index}>
            <BreadcrumbPage>
              {segment.charAt(0).toUpperCase() + segment.slice(1)}{" "}
              {/* Capitalize first letter */}
              {index < pathSegments.length - 1 && <BreadcrumbSeparator />}
            </BreadcrumbPage>
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

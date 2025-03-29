import { Fragment } from "react"

import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  Breadcrumb as BreadcrumbRoot,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export interface BreadcrumbEntry {
  href: string
  label: string
}

export function Breadcrumb({ breadcrumb }: { breadcrumb: BreadcrumbEntry[] }) {
  return (
    <BreadcrumbRoot>
      <BreadcrumbList>
        {breadcrumb.slice(0, -1).map(({ href, label }) => (
          <Fragment key={href}>
            <BreadcrumbItem>
              <a href={href}>
                <BreadcrumbLink>{label}</BreadcrumbLink>
              </a>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </Fragment>
        ))}
        <BreadcrumbItem>
          <BreadcrumbPage>
            {breadcrumb[breadcrumb.length - 1].label}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </BreadcrumbRoot>
  )
}

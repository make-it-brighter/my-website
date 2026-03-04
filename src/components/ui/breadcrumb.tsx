import * as React from "react"

export function Breadcrumb({ children }: { children: React.ReactNode }) {
  return <nav aria-label="breadcrumb">{children}</nav>
}
export function BreadcrumbList({ children }: { children: React.ReactNode }) {
  return <ol className="flex items-center gap-2 text-sm">{children}</ol>
}
export function BreadcrumbItem({ children }: { children: React.ReactNode }) {
  return <li className="flex items-center gap-2">{children}</li>
}
export function BreadcrumbLink({ children, asChild }: { children: React.ReactNode, asChild?: boolean }) {
  return <span className="text-muted-foreground hover:text-foreground">{children}</span>
}
export function BreadcrumbPage({ children }: { children: React.ReactNode }) {
  return <span className="font-medium">{children}</span>
}
export function BreadcrumbSeparator() {
  return <span className="text-muted-foreground">/</span>
}

import { cn } from "@/lib/utils"

interface MainContentProps {
  children: React.ReactNode
  className?: string
}

export function MainContent({ children, className }: MainContentProps) {
  return (
    <div className={cn("flex-1 overflow-auto", className)}>
      <div className="container mx-auto p-6 max-w-4xl">
        {children}
      </div>
    </div>
  )
}
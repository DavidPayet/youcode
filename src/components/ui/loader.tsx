import { Loader2, LucideProps } from "lucide-react"
import { cn } from "@/lib/utils"

export const Loader = ({className, ...props}: LucideProps) => {
  return (
    <Loader2 className={cn("animate-spin", props)} {...props} />
  )
}
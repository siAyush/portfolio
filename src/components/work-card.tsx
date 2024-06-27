import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

interface WorkCardProps {
  title: string;
  subtitle?: string;
  href?: string;
  period: string;
  description?: string;
}

export const WorkCard = ({
  title,
  subtitle,
  href,
  period,
  description,
}: WorkCardProps) => {
  return (
    <Link href={href || "#"} className="block cursor-pointer">
      <Card className="flex">
        <div className="flex-grow items-center flex-col group">
          <CardHeader>
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center font-bold leading-none text-xs sm:text-sm">
                {title}
                <ChevronRightIcon className="size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100" />
              </h3>
              <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                {period}
              </div>
            </div>
            {subtitle && <div className="font-sans text-xs">{subtitle}</div>}
          </CardHeader>
          <CardContent className="mt-2 text-xs sm:text-sm">
            {description}
          </CardContent>
        </div>
      </Card>
    </Link>
  );
};

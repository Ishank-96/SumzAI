import { Button } from "@/components/ui/button";
import { Calendar, ChevronLeft, Clock, Sparkles } from "lucide-react";
import Link from "next/link";
import { Badge } from "../ui/badge";

export default function SummaryHeader({ title, createdAt, readingTime }: { title: string, createdAt: string, readingTime: number }) {
    return (
        <div className="flex gap-4 mb-4 justify-between">
            <div className="space-y-6">
                <div className="flex items-center gap-4 flex-wrap">
                    <Badge className="relative px-4 py-1.5 text-sm font-medium bg-white/80 backdrop-blur-xs rounded-full hover:bg-white/90 transition-all durantion-200 shadow-xs hover:shadow-md border border-blue-100/30 text-blue-500">
                        <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500" />
                        AI-Generated Summary
                    </Badge>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 text-blue-400" />
                        {new Date(createdAt).toLocaleDateString('en-US', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                        })}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 text-blue-400" />
                        {readingTime} minute read
                    </div>
                </div>
                <h1 className="text-2xl font-bold lg:text-4xl lg:tracking-tight">
                    <span className="bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">
                        {title}
                    </span>
                </h1>
            </div>
            <div>
                <Link href="/dashboard">
                    <Button
                        variant="link"
                        size="sm"
                        className="group flex items-center gap-1 sm:gap-2 hover:bg-white/80 backdrop-blur-xs rounded-full transition-all duration-200 shadow-xs hover:shadow-md border border-blue-100/30 bg-blue-100 px-2 sm:px-3"
                    >
                        <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500 transition-transform group-hover:translate-x-0.5" />
                        <span className="text-xs sm:text-sm text-muted-foreground font-medium">
                            Back <span className="hidden sm:inline">to Dashboard</span>
                        </span>
                    </Button>
                </Link>
            </div>
        </div>
    );
}

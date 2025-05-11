"use client"

import { Notebook } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useUserRole } from "@/hooks/useUserRole";

function DashboardButton() {
    const { isCandidate, isLoading } = useUserRole();

    if (isCandidate || isLoading) return null

    return (
        <Link href="/dashboard">
            <Button className="gap-2 font-medium text-sm">
                <Notebook className="size-4" />
                Dashboard
            </Button>
        </Link>
    )
}

export default DashboardButton
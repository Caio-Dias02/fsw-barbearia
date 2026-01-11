import { MenuIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Header() {
    return (
        <Card>
            <CardContent className="flex items-center justify-between flex-row p-5">
                <Image src="/logo.png" alt="Logo" width={120} height={18} />
                <Button variant="outline" size="icon">
                    <MenuIcon />
                </Button>
            </CardContent>
        </Card>
    );
}
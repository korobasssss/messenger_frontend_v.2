"use client"

import {useRouter} from "next/navigation";
import {Auth_path} from "@/app/paths/auth";

export default function Home() {
    const router = useRouter()
    router.push(Auth_path.LOGIN)
}

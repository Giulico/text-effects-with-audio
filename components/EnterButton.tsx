"use client"

import { useSetAtom } from "jotai";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { userInteractionAtom } from "./AudioOnly";
import { Button } from "@mui/material";

export default function EnterButton() {
  const router = useRouter()

  const setUserInteraction = useSetAtom(userInteractionAtom)

  const onEnter = useCallback(() => {
    setUserInteraction(true)
    router.push('/poc/1')
  }, [router, setUserInteraction]);
  
  return (
    <Button variant={"contained"} onClick={onEnter}>Enter</Button>
  )
}
"use client"

import { Button } from "@mui/material"
import { useRouter } from "next/navigation"
import { useCallback } from "react"

type Props = {
  active: boolean
  id: string
}

export default function MenuLink({ active, id }: Props) {
  const router = useRouter()

  const clickHandler = useCallback(() => { 
    router.push(`/poc/${id}`)
  }, [id, router])

  return (
    <Button
      disabled={active}
      onClick={clickHandler}
      sx={{ my: 2, display: 'block' }}
    >
      {id}
    </Button>
  )
}
"use client"

import { atom, useAtomValue } from 'jotai'
import { redirect } from 'next/navigation'

import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export const userInteractionAtom = atom(false)

export default function AudioOnly({ children }: Props) {
  const userInteracted = useAtomValue(userInteractionAtom)

  if (!userInteracted) {
    redirect('/')
  }

  return children
}
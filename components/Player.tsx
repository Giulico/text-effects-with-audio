"use client"

import { Box, Button, keyframes } from "@mui/material"
import { MouseEvent, useCallback, useEffect, useRef, useState } from "react"

import { HPlayer } from "@/utils/player"
import useAnimationFrame from "@/utils/useAnimationFrame"
import { useAtom, useAtomValue } from "jotai"
import { userInteractionAtom } from "./AudioOnly"
import { usePathname } from "next/navigation"

const player = new HPlayer(
  [
    {
      file: "/tracks/Power-Glove-Deceiver.mp3"
    }
  ]
) as HPlayer & { analyzer: AnalyserNode }

export const Player = () => {
  const pathname = usePathname()
  const userInteracted = useAtomValue(userInteractionAtom)
  const userInteractedRef = useRef(false)
  const [isPlaying, setIsPlaying] = useState(player.playing() as boolean)
  
  const togglePlayer = useCallback(() => {
    player.toggle()
    setIsPlaying(!isPlaying)
  }, [isPlaying])
  
  const handleClick = useCallback(
    (e: MouseEvent) => {
      e.preventDefault()
      togglePlayer()
    },
    [togglePlayer]
  )

  useEffect(() => {
    if (userInteracted) {
      togglePlayer()
      player.createAnalyzer()
      userInteractedRef.current = true
    }
  }, [userInteracted])

  useAnimationFrame(() => {
    if (userInteractedRef.current) {
      // let frameHeight = 200
      const analyzer = player.analyzer

      const bufferLength = analyzer.frequencyBinCount
      const data = new Uint8Array(bufferLength)
      const dataFreq = new Uint8Array(bufferLength)
      analyzer.getByteTimeDomainData(data)
      analyzer.getByteFrequencyData(dataFreq)

      const frequencyData = uint8ArrayToArray(dataFreq)

      const sum = frequencyData.reduce((acc, val) => acc + val, 0)
      const average = 1 + (sum / frequencyData.length) * 0.001

      document.documentElement.style.setProperty("--text-scale", average.toString())
    }
  })

  return (
    <Button
      onClick={handleClick}
      aria-label="Play"
      sx={{
        mx: 1,
        opacity: pathname === "/" ? 0 : 1,
        pointerEvents: pathname === "/" ? "none" : "auto",
      }}
    >
      <Box
        component="svg"
        viewBox="0 0 28 28"
        fill="none"
        sx={{
          width: 28,
          height: 28,
          "& rect": isPlaying
            ? {
                transformOrigin: "50% 50%",
                animation: `${equalize} 4s 0s linear infinite`,
                "&:nth-of-type(1)": {
                  animation: `${equalizeAlt} 4s 0s linear infinite`,
                },
                "&:nth-of-type(2)": {
                  animationDuration: "3s",
                },
                "&:nth-of-type(3)": {
                  animation: `${equalizeAlt} 4s 0s linear infinite`,
                  animationDirection: "reverse",
                },
              }
            : {},
        }}
      >
        <rect x="8" y="12" width="1.5" height="4" rx="0.75" fill="#faafe7" />
        <rect x="13.5" y="12" width="1.5" height="4" rx="0.75" fill="#faafe7" />
        <rect x="19" y="12" width="1.5" height="4" rx="0.75" fill="#faafe7" />
      </Box>
    </Button>
  )
}

const equalize = keyframes`
  0% {
    transform:scaleY(4);
  }
  4% {
    transform:scaleY(0.9);
  }
  8% {
    transform:scaleY(1.5);
  }
  12% {
    transform:scaleY(2);
  }
  16% {
    transform:scaleY(0.8);
  }
  20% {
    transform:scaleY(2);
  }
  24% {
    transform:scaleY(0.8);
  }
  28% {
    transform:scaleY(1.5);
  }
  32% {
    transform:scaleY(0.8);
  }
  36% {
    transform:scaleY(4);
  }
  40% {
    transform:scaleY(0.8);
  }
  44% {
    transform:scaleY(0.8);
  }
  48% {
    transform:scaleY(4);
  }
  52% {
    transform:scaleY(2);
  }
  56% {
    transform:scaleY(1.5);
  }
  60% {
    transform:scaleY(2);
  }
  64% {
    transform:scaleY(4);
  }
  68% {
    transform:scaleY(2);
  }
  72% {
    transform:scaleY(4);
  }
  76% {
    transform:scaleY(0.8);
  }
  80% {
    transform:scaleY(4);
  }
  84% {
    transform:scaleY(2);
  }
  88% {
    transform:scaleY(4);
  }
  92% {
    transform:scaleY(0.8);
  }
  96% {
    transform:scaleY(4);
  }
  100% {
    transform:scaleY(4);
  }
`

const equalizeAlt = keyframes`
  0% {
    transform:scaleY(3);
  }
  4% {
    transform:scaleY(0.9);
  }
  8% {
    transform:scaleY(1.5);
  }
  12% {
    transform:scaleY(2);
  }
  16% {
    transform:scaleY(0.9);
  }
  20% {
    transform:scaleY(2);
  }
  24% {
    transform:scaleY(0.8);
  }
  28% {
    transform:scaleY(1.5);
  }
  32% {
    transform:scaleY(0.8);
  }
  36% {
    transform:scaleY(3);
  }
  40% {
    transform:scaleY(0.9);
  }
  44% {
    transform:scaleY(0.8);
  }
  48% {
    transform:scaleY(3);
  }
  52% {
    transform:scaleY(2);
  }
  56% {
    transform:scaleY(1.5);
  }
  60% {
    transform:scaleY(2);
  }
  64% {
    transform:scaleY(3);
  }
  68% {
    transform:scaleY(2);
  }
  72% {
    transform:scaleY(3);
  }
  76% {
    transform:scaleY(0.9);
  }
  80% {
    transform:scaleY(3);
  }
  84% {
    transform:scaleY(0.6);
  }
  88% {
    transform:scaleY(3);
  }
  92% {
    transform:scaleY(0.9);
  }
  96% {
    transform:scaleY(3);
  }
  100% {
    transform:scaleY(3);
  }
`

function uint8ArrayToArray(uint8Array: Uint8Array) {
  let array: number[] = []

  for (let i = 0; i < uint8Array.byteLength; i++) {
    array[i] = uint8Array[i]
  }

  return array
}

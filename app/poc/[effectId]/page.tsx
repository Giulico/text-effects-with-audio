import AudioOnly from "@/components/AudioOnly";
import Header from "@/components/Header";
import Page from "@/components/Page";

export default function Poc({ params }: { params: { effectId: string } }) {
  return (
    <AudioOnly>
      <Header effectId={params.effectId} />
      <Page effectId={params.effectId} />
    </AudioOnly>
  )
}
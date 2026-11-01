import { useState } from 'react'
import { SocialMaintenanceModal } from './SocialMaintenanceModal'
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  YouTubeIcon,
} from '@/components/ui/BrandIcons'
import { cn } from '@/lib/utils'

const networks = [
  { id: 'facebook', label: 'Facebook', Icon: FacebookIcon },
  { id: 'instagram', label: 'Instagram', Icon: InstagramIcon },
  { id: 'linkedin', label: 'LinkedIn', Icon: LinkedInIcon },
  { id: 'youtube', label: 'YouTube', Icon: YouTubeIcon },
] as const

export function SocialLinks({ className }: { className?: string }) {
  const [open, setOpen] = useState(false)
  const [network, setNetwork] = useState<string>()

  return (
    <>
      <div className={cn('flex flex-wrap items-center gap-2', className)}>
        {networks.map(({ id, label, Icon }) => (
          <button
            key={id}
            type="button"
            aria-label={`${label} — informação`}
            onClick={() => {
              setNetwork(label)
              setOpen(true)
            }}
            className="inline-flex h-10 w-10 items-center justify-center border border-white/15 text-white/80 transition hover:border-primary hover:text-white"
          >
            <Icon className="h-[18px] w-[18px]" />
          </button>
        ))}
      </div>
      <SocialMaintenanceModal
        open={open}
        network={network}
        onClose={() => setOpen(false)}
      />
    </>
  )
}

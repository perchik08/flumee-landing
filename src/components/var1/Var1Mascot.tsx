type MascotState =
  | 'logo'
  | 'hero'
  | 'confused'
  | 'thinking'
  | 'happy'
  | 'free'
  | 'pro'

const mascotAssets: Record<
  MascotState,
  { src: string; width: number; height: number }
> = {
  logo: {
    src: '/images/var1/flumee-logo.webp',
    width: 84,
    height: 84,
  },
  hero: {
    src: '/images/var1/flumee-hero.webp',
    width: 355,
    height: 360,
  },
  confused: {
    src: '/images/var1/flumee-confused.webp',
    width: 165,
    height: 162,
  },
  thinking: {
    src: '/images/var1/flumee-thinking.webp',
    width: 190,
    height: 192,
  },
  happy: {
    src: '/images/var1/flumee-happy.webp',
    width: 208,
    height: 200,
  },
  free: {
    src: '/images/var1/flumee-free-calm.webp',
    width: 145,
    height: 128,
  },
  pro: {
    src: '/images/var1/flumee-pro-happy.webp',
    width: 155,
    height: 136,
  },
}

interface Var1MascotProps {
  state: MascotState
  className?: string
  alt?: string
  priority?: boolean
}

export function Var1Mascot({
  state,
  className = '',
  alt = '',
  priority = false,
}: Var1MascotProps) {
  const asset = mascotAssets[state]

  return (
    <img
      src={asset.src}
      width={asset.width}
      height={asset.height}
      alt={alt}
      decoding="async"
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      className={className}
    />
  )
}

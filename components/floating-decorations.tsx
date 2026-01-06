export function FloatingDecorations({ variant = "default" }: { variant?: "default" | "alt" | "minimal" }) {
  if (variant === "alt") {
    return (
      <>
        <div className="absolute top-1/4 right-20 w-2 h-2 rounded-full bg-accent/25 animate-float-delay" />
        <div className="absolute bottom-1/3 left-10 w-3 h-3 rounded-full bg-accent/20 animate-float-delay-2" />
      </>
    )
  }

  if (variant === "minimal") {
    return (
      <>
        <div className="absolute top-10 left-10 w-2 h-2 rounded-full bg-accent/30 animate-float" />
        <div className="absolute bottom-20 right-20 w-3 h-3 rounded-full bg-accent/20 animate-float-delay-2" />
      </>
    )
  }

  return (
    <>
      <div className="absolute bottom-10 right-10 w-2 h-2 rounded-full bg-accent/30 animate-float" />
      <div className="absolute top-20 left-1/4 w-3 h-3 rounded-full bg-accent/20 animate-float-delay" />
    </>
  )
}

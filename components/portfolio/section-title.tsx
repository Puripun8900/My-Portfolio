interface SectionTitleProps {
  children: React.ReactNode
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h3 className="text-xl md:text-2xl font-bold text-foreground mt-10 md:mt-12 mb-4">
      {children}
      <span className="block w-14 h-[3px] bg-blue-600 rounded-full mt-2" />
    </h3>
  )
}

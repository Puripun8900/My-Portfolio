const education = [
  {
    school: "LAB University of Applied Sciences",
    detail: "Bachelor of Engineering - Industrial IT Engineering (2023-2026)",
  },
  {
    school: "The Polytechnic University of Valencia",
    detail: "Exchange Studies - Spain (2026-Present)",
  },
  {
    school: "Hamilton Boys' High School",
    detail: "International Exchange - New Zealand (2019-2020)",
  },
  {
    school: "Vajiravudh College",
    detail: "Secondary Education - Thailand (2014-2023)",
  },
]

export function Education() {
  return (
    <div className="border-l-[3px] border-blue-600 pl-5 ml-2">
      {education.map((item, index) => (
        <div key={item.school} className={`relative ${index < education.length - 1 ? "mb-6" : ""}`}>
          <span className="absolute -left-[29px] top-1 w-3.5 h-3.5 bg-blue-600 rounded-full" />
          <h4 className="text-foreground font-semibold text-sm md:text-base">
            {item.school}
          </h4>
          <span className="text-muted-foreground text-xs md:text-sm">
            {item.detail}
          </span>
        </div>
      ))}
    </div>
  )
}

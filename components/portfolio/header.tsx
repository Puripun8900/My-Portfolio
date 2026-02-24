import Image from "next/image"
import { MapPin, Phone, Mail } from "lucide-react"

export function PortfolioHeader() {
  return (
    <header className="bg-card/60 backdrop-blur-md rounded-2xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6">
      <div className="flex-1 text-center md:text-left order-2 md:order-1">
        <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600 text-balance">
          Puripan Leelapong-Anan
        </h1>
        <h2 className="text-blue-700 text-base md:text-lg font-semibold mt-1">
          3rd Year Industrial IT Engineering Student
        </h2>
        <div className="mt-4 flex flex-col gap-1.5">
          <p className="text-sm text-muted-foreground flex items-center gap-2 justify-center md:justify-start">
            <MapPin className="h-4 w-4 shrink-0 text-blue-500" />
            <span>Korpraalinkuja 3 2, 53810 Lappeenranta, Finland</span>
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-2 justify-center md:justify-start">
            <Phone className="h-4 w-4 shrink-0 text-blue-500" />
            <span>+358 41 723 7134</span>
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-2 justify-center md:justify-start">
            <Mail className="h-4 w-4 shrink-0 text-blue-500" />
            <span className="font-semibold break-all">Puripan.Leelapong-Anan@student.lab.fi</span>
          </p>
        </div>
      </div>
      <div className="order-1 md:order-2 shrink-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/picture%20for%20portfolio.jpg-SJmu9SnvfE3cbdMUbGSjt4dnPYlr9f.jpeg"
          alt="Puripan Leelapong-Anan portrait"
          width={170}
          height={170}
          className="w-32 h-32 md:w-[170px] md:h-[170px] rounded-full object-cover border-4 border-blue-100 shadow-lg shadow-blue-500/25"
          priority
        />
      </div>
    </header>
  )
}

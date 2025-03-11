import { Button } from "@/components/ui/button"
import Image from "next/image"

interface CardProps {
  title: string
  description: string
  image: string
  link: string
}

export default function Card({ title, description, image, link }: CardProps) {
  return (
    <div className="relative overflow-hidden h-[350px] rounded-lg shadow-md group">
      <div className="relative h-full">
        <Image src={image || "/placeholder.svg"} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-slate-900 bg-opacity-90 transition-all duration-300 ease-in-out h-[150px] group-hover:h-[50%] overflow-hidden">
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <div className="transition-all duration-300 ease-in-out max-h-[40px] group-hover:max-h-[calc(100%-80px)] overflow-hidden">
            <p>{description}</p>
          </div>
          <div className="mt-4">
            <Button asChild size="sm" className="w-full">
              <a href={link} target="_blank" rel="noopener noreferrer">
                Visitar
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
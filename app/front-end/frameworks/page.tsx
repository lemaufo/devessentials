import Card from "../../../components/card"

const cards = [
  {
    title: "Astro",
    description:
      "The web framework for content-driven websites.",
    image: "https://coderdiaz.com/_astro/featured.CXs8tS3F_16Nj5c.webp",
    link: "https://astro.build/",
  },
  {
    title: "Astro",
    description:
      "The web framework for content-driven websites.",
    image: "https://coderdiaz.com/_astro/featured.CXs8tS3F_16Nj5c.webp",
    link: "https://astro.build/",
  },
  {
    title: "Astro",
    description:
      "The web framework for content-driven websites.",
    image: "https://coderdiaz.com/_astro/featured.CXs8tS3F_16Nj5c.webp",
    link: "https://astro.build/",
  },
  {
    title: "Astro",
    description:
      "The web framework for content-driven websites.",
    image: "https://coderdiaz.com/_astro/featured.CXs8tS3F_16Nj5c.webp",
    link: "https://astro.build/",
  },
]

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Frameworks</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            link={card.link}
          />
        ))}
      </div>
    </main>
  )
}
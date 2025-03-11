import { PlaceholdersAndVanishInputDemo } from "@/components/search"
import {CoverDemo} from "../components/cover-text"
import {GlowingEffectDemo} from "../components/glowing-effect"

export default function WelcomePage() {
  return (
    <main className="container mx-auto p-8">
      <div className="">
          <CoverDemo   
          />
      </div>
      <div>
        <PlaceholdersAndVanishInputDemo />
      </div>
      <div className="mt-10 mb-8">
          <GlowingEffectDemo />
      </div>
    </main>
  )
}
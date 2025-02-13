import { type HeroProfileProps } from './types'

export const HeroProfile = ({
  name,
  level,
  class: heroClass,
  stats,
  abilities,
  isOnline = false
}: HeroProfileProps) => {
  return (
    <div className="hero-profile">
      {/* 
        TODO: Implementa el contenido del perfil aquí
        Utiliza los props recibidos para mostrar la información
      */}
    </div>
  )
}
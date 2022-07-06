import { RemoveFavoritProvider } from "./RemoveFavorite"

const Providers = ({children}) => {
  return (
    <RemoveFavoritProvider>
      {children}
    </RemoveFavoritProvider>
  )
}

export default Providers
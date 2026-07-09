import { createContext, useContext, useState, type ReactNode } from 'react'

type LoaderContextValue = {
  loaderRevealDone: boolean
  setLoaderRevealDone: (value: boolean) => void
}

const LoaderContext = createContext<LoaderContextValue>({
  loaderRevealDone: false,
  setLoaderRevealDone: () => {},
})

export function LoaderProvider({ children }: { children: ReactNode }) {
  const [loaderRevealDone, setLoaderRevealDone] = useState(false)
  return (
    <LoaderContext.Provider value={{ loaderRevealDone, setLoaderRevealDone }}>
      {children}
    </LoaderContext.Provider>
  )
}

export function useLoader() {
  return useContext(LoaderContext)
}

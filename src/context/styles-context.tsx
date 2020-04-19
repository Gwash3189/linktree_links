import React from 'react'

export type StylesData = {
  backgroundColour: string,
  textColor: string
}

const defaultStyles = () => ({
  backgroundColour: '',
  textColor: '',
})

const StylesContext = React.createContext<StylesData>(defaultStyles())

export const useStyles = (): [StylesData, Function] => {
  const context = React.useContext(StylesContext)
  if (!context) {
    throw new Error('useStyles must be used within a StylesProvider')
  }

  return context as unknown as [StylesData, Function]
}

export const StylesProvider = (props: any) => {
  const [Styles, setStyles] = React.useState(props.StylesData || defaultStyles)
  return <StylesContext.Provider value={[Styles, setStyles]} {...props} />
}

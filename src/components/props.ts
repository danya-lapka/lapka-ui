enum Color {
  Accent = 'accent',
  White = 'white',
  Black = 'black',
  Accent_1 = 'accent-1',
  Accent_2 = 'accent-2',
  Accent_3 = 'accent-3',
  Gray_1 = 'gray-1',
  Gray_2 = 'gray-2',
  Gray_3 = 'gray-3'
}

interface BaseProps {
  children?: React.ReactNode,
  className?: string,
  color?: Color
}

export type { BaseProps }
export { Color }
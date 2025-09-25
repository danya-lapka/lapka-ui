enum Text {
  Heading_1 = 'heading-1',
  Heading_2 = 'heading-2',
  Heading_3 = 'heading-3',
  Heading_4 = 'heading-4',
  Body_1 = 'body-1',
  Body_2 = 'body-2',
  Body_3 = 'body-3',
  Body_4 = 'body-4',
  Body_5 = 'body-5',
  Body_6 = 'body-6'
}

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
  text?: Text,
  color?: Color
}

export type { BaseProps }
export { Text, Color }
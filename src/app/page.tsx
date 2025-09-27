import { A, Button } from "@/components"

const styles : { [key: string]: React.CSSProperties } = {
  gray: {
    backgroundColor: '#808080'
  }
}

export default function Home() {

  const colors : { 
    [group: string] : {
      name: string, 
      value: string,
      text: string
    }[] } = {
    grays: [
      {
        name: 'white',
        value: '#F2F2F2',
        text: 'black'
      },
      {
        name: 'gray-1',
        value: '#BFBFBF',
        text: 'black'
      },
      {
        name: 'gray-2',
        value: '#797979',
        text: 'white'
      },
      {
        name: 'gray-3',
        value: '#333333',
        text: 'white'
      },
      {
        name: 'black',
        value: '#000000',
        text: 'white'
      }
    ],
    accents: [
      {
        name: 'accent',
        value: '#FF40BF',
        text: 'white'
      },
      {
        name: 'accent-1',
        value: '#FFBFE9',
        text: 'black'
      },
      {
        name: 'accent-2',
        value: '#FF99DD',
        text: 'black'
      },
      {
        name: 'accent-3',
        value: '#660043',
        text: 'white'
      }
    ]
  }

  const texts: {[group:string]: string[]} = {
    headings: [
      'heading-1', 'heading-2', 'heading-3', 'heading-4'
    ],
    bodies: [
      'body-1', 'body-2', 'body-3', 'body-4', 'body-5', 'body-6'
    ]
  }

  const components: string[] = [
    'white', 'black', 'accent', 'accent-alt', 'white-accent', 'black-accent'
  ]

  return (
    <div className="f-rw gap-32 pad-all-32" style={styles.gray}>
      <div className="f-c gap-16">
        <div className="f-r gap-8">
          {colors.grays.map((i) => {
            return(
              <div key={i.value} className={`bg-${i.name} color-${i.text} body-4 pad-all-8 rad-all-8`}>{i.value}</div>
            )
          })}
        </div>
        <div className="f-r gap-8">
          {colors.accents.map((i) => {
            return(
              <div key={i.value} className={`bg-${i.name} color-${i.text} body-4 pad-all-8 rad-all-8`}>{i.value}</div>
            )
          })}
        </div>
      </div>
      <div className="f-c gap-16">
        <div className="f-c gap-8">
          {texts.headings.map((i) => {
            return (
              <div key={i} className={i}>{i}</div>
            )
          })}
        </div>
        <div className="f-c gap-8">
          {texts.bodies.map((i) => {
            return (
              <div key={i} className={i}>{i}</div>
            )
          })}
        </div>
      </div>
      <div className="f-c gap-8">
        {components.map((i) => {
          return (
            <A className="body-4" key={i} color={i}>Link {i}</A>
          )
        })}
      </div>
      <div className="f-c gap-8">
        {components.map((i) => {
          return (
            <Button className="body-4" key={i} color={i}>Button {i}</Button>
          )
        })}
      </div>
    </div>
  );
}

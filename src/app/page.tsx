import { Text } from "@/components/props";
import { Texting } from "@/components/server";
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
        value: '#FFD9F2',
        text: 'black'
      },
      {
        name: 'accent-2',
        value: '#FF99DD',
        text: 'black'
      },
      {
        name: 'accent-3',
        value: '#40303A',
        text: 'white'
      }
    ]
  }

  const texts: {[group:string]: string[]} = {
    headings: [
      'Heading_1', 'Heading_2', 'Heading_3', 'Heading_4'
    ],
    bodies: [
      'Body_1', 'Body_2', 'Body_3', 'Body_4', 'Body_5', 'Body_6'
    ]
  }

  return (
    <div className="f-rw gap-32 pad-all-32" style={styles.gray}>
      <div className="f-c gap-16">
        <div className="f-r gap-8">
          {colors.grays.map((i) => {
            return(
              <div key={i.value} className={`bg-${i.name} color-${i.text} pad-all-8 body-4 rad-all-8`}>{i.value}</div>
            )
          })}
        </div>
        <div className="f-r gap-8">
          {colors.accents.map((i) => {
            return(
              <div key={i.value} className={`bg-${i.name} color-${i.text} pad-all-8 body-4 rad-all-8`}>{i.value}</div>
            )
          })}
        </div>
      </div>
      <div className="f-c gap-16">
        <div className="f-c gap-8">
          {texts.headings.map((i) => {
            return (
              <Texting key={i} text={Text[i as keyof typeof Text]}>{i}</Texting>
            )
          })}
        </div>
        <div className="f-c gap-8">
          {texts.bodies.map((i) => {
            return (
              <Texting key={i} text={Text[i as keyof typeof Text]}>{i}</Texting>
            )
          })}
        </div>
      </div>
    </div>
  );
}

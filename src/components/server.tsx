import clsx from "clsx";
import { Text, Color, BaseProps} from '@/components/props';

const Texting: React.FC<BaseProps> = ({
  children,
  text,
  className, 
  ...rest
}) => {
  switch (text) {
    case Text.Heading_1: return(<h1 className={`${text} ${className}`}>{children}</h1>);
    case Text.Heading_2: return(<h2 className={`${text} ${className}`}>{children}</h2>);
    case Text.Heading_3: return(<h3 className={`${text} ${className}`}>{children}</h3>);
    case Text.Heading_4: return(<h4 className={`${text} ${className}`}>{children}</h4>);
    case Text.Body_1: return(<div className={`${text} ${className}`}>{children}</div>);
    case Text.Body_2: return(<div className={`${text} ${className}`}>{children}</div>);
    case Text.Body_3: return(<div className={`${text} ${className}`}>{children}</div>);
    case Text.Body_4: return(<div className={`${text} ${className}`}>{children}</div>);
    case Text.Body_5: return(<div className={`${text} ${className}`}>{children}</div>);
    case Text.Body_6: return(<div className={`${text} ${className}`}>{children}</div>);
  }
}

export { Texting }
interface DogData {
  name: string;
  age: number;
  src: string;
  facts: string[];
}

interface DogProps {
  dogs: Array<DogData>;
}

interface ColorData {
  name: string;
  code: string;
}

interface ColorProps {
  colors: ColorData[];
  add?: Function;
}

interface AllProps {
  dogs: Array<DogData>;
  colors: Array<ColorData>;
  addColor?: Function;
}

export type { DogData, DogProps, ColorData, ColorProps, AllProps };

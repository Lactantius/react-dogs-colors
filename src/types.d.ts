interface DogData {
  name: string;
  age: number;
  src: string;
  facts: string[];
}

interface DogProps {
  dogs: Array<DogData>;
}

export type { DogData, DogProps };

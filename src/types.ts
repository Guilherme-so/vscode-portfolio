export type SelectOptions = {
    label: any;
    img: any;
    locale: string
  };
  
  export type SelectProps = {
    value?: SelectOptions;
    options?: SelectOptions[];
    onChange?: (value: SelectOptions | undefined) => void;
  };
import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Caret,
  Container,
  ImageContainer,
  List,
  ListItem,
} from "./select.styled";
import Image from "next/image";
import { SelectOptions, SelectProps } from "@/types";

function SelectCountry({ value, options, onChange }: SelectProps) {
  const [active, setActive] = useState(false);

  function changeOptions(option: SelectOptions) {
    onChange!(option);
  }

  //onBlur styled components
  const selectorRef = useRef<HTMLDivElement>();

  useEffect(() => {
    const externalEventHandler = (e: any) => {
      if (!active) return;
      const node = selectorRef.current;
      if (node && node.contains(e.target)) {
        return;
      }
      setActive(false);
    };

    if (active) {
      document.addEventListener("click", externalEventHandler);
    } else {
      document.removeEventListener("click", externalEventHandler);
    }
    return () => {
      document.removeEventListener("click", externalEventHandler);
    };
  }, [active]);

  return (
    <Container ref={selectorRef} onClick={() => setActive((prev) => !prev)}>
      <ImageContainer>
        <Image
          src={value?.img}
          alt={value?.label}
          layout="fill"
          objectFit="cover"
        />
      </ImageContainer>

      <Button
        onClick={(e) => {
          e.stopPropagation();
          setActive((prev) => !prev);
        }}
      >
        <p>{value?.label}</p> <Caret active={active}></Caret>
      </Button>

      <List options={active}>
        {options?.map((item) => (
          <ListItem key={item.label} onClick={() => changeOptions(item)}>
            <Image src={item?.img} alt={item.label} width={17} height={17} />
            <p>{item?.label}</p>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default SelectCountry;

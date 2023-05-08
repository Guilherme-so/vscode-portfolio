import React from "react";
import { Container } from "../styles/contact";
import { contactItems } from "@/components/helper/constants";
import Head from "@/components/helper/head";

function Contact() {
  return (
    <>
      <Head title="Contact" />

      <Container>
        <p>
          <span>Guilherme</span>&#58;
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&#8212; <span>socials</span>&#58;
        </p>
        {contactItems.map((item, index) => (
          <p key={index}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.social}:{" "}
            <a href={item.href} target="_blank" rel="noopener">
              {item.link}
            </a>
          </p>
        ))}
      </Container>
    </>
  );
}

export default Contact;

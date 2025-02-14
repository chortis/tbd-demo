import { MouseEventHandler } from "react";
import { Button } from "../Button/Button";

type FeatureCardProps = {
  title: string;
  description: string;
  meta: string;
  buttonText: string;
  onClick: MouseEventHandler;
};

export const FeatureCard = (props: FeatureCardProps) => {
  return (
    <div
      style={{
        width: 200,
        minHeight: 200,
        padding: 10,
        background: "#FFFFFF",
        color: "#222222",
        border: "1px solid gray",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <header>
        <h1>{props.title}</h1>
      </header>
      <p>{props.description}</p>
      <footer>
        <p>{props.meta}</p>
      </footer>
      <Button
        onClick={props.onClick}
        data-testid="feature-card-btn"
        style={{
          justifySelf: "end",
          alignSelf: "end",
          marginTop: "auto",
        }}
      >
        {props.buttonText}
      </Button>
    </div>
  );
};

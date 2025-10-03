import { Button } from "../ui/button";

export function ShadButtonPrimary({ children, ...props }:any) {
  return (
    <Button variant="default" {...props}>
      {children}
    </Button>
  );
}
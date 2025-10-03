import { Button } from "../ui/button";

export function ShadButtonSecondary({ children, ...props }:any) {
  return (
    <Button variant="outline" {...props}>
      {children}
    </Button>
  );
}
import { Button } from "@/components/ui/button";

export function ShadButtonSecondary({ children, ...props }: React.ComponentProps<typeof Button>) {
  return (
    <Button variant="outline" {...props}>
      {children}
    </Button>
  );
}
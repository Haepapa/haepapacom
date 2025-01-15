import { Card, useToken } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar";

type CardTemplateProps = {
  title: string;
  description: string;
  hashtags: string;
  SvgComponent: React.FC<{ fillColor?: string; strokeColor?: string }>;
};

export function CardTemplate({
  title,
  description,
  hashtags,
  SvgComponent,
}: CardTemplateProps) {
  const [strokeColor, fillColor] = useToken("colors", ["outline", "main"]);
  return (
    <Card.Root minWidth="190px" maxWidth="270px" shadow="sm" background="white">
      <Card.Body gap="2">
        <Card.Title textStyle="sm" fontWeight="bold" textAlign="center">
          {title}
        </Card.Title>
        <SvgComponent fillColor={fillColor} strokeColor={strokeColor} />
        <Card.Description textStyle="xs">{description}</Card.Description>
      </Card.Body>
      <Card.Footer textStyle="xs" fontWeight="bold">
        {hashtags}
      </Card.Footer>
    </Card.Root>
  );
}

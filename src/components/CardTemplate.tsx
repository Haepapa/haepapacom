import { Box, Card, useToken } from "@chakra-ui/react";

type CardTemplateProps = {
  title: string;
  description?: string;
  hashtags?: string;
  SvgComponent?: React.FC<{ fillColor?: string; strokeColor?: string }> | null;
  onClick?: () => void;
};

export function CardTemplate({
  title,
  description,
  hashtags,
  SvgComponent,
  onClick,
}: CardTemplateProps) {
  const [strokeColor, fillColor] = useToken("colors", ["outline", "main"]);
  return (
    <Card.Root
      shadow="md"
      background="white"
      onClick={onClick}
      cursor={"pointer"}
    >
      <Card.Body gap="2">
        <Card.Title textStyle="md" fontWeight="bold" textAlign="center">
          {title}
        </Card.Title>
        {SvgComponent && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="end"
            width="100%"
            height="100%"
          >
            <SvgComponent fillColor={fillColor} strokeColor={strokeColor} />
          </Box>
        )}
        <Card.Description textStyle="sm">{description}</Card.Description>
      </Card.Body>
      <Card.Footer textStyle="sm" fontWeight="bold">
        {hashtags}
      </Card.Footer>
    </Card.Root>
  );
}

import { Box, Card, useToken } from "@chakra-ui/react";

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
        <Box
          display="flex"
          justifyContent="center"
          alignItems="end"
          width="100%"
          height="100%"
        >
          <SvgComponent fillColor={fillColor} strokeColor={strokeColor} />
        </Box>
        <Card.Description textStyle="xs">{description}</Card.Description>
      </Card.Body>
      <Card.Footer textStyle="xs" fontWeight="bold">
        {hashtags}
      </Card.Footer>
    </Card.Root>
  );
}

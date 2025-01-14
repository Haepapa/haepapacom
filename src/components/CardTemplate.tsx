import { Card } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar";

type CardTemplateProps = {
  title: string;
  description: string;
  icon: string;
  hashtags: string;
};

export function CardTemplate({
  title,
  description,
  icon,
  hashtags,
}: CardTemplateProps) {
  return (
    <Card.Root minWidth="190px" maxWidth="270px" shadow="sm" background="white">
      <Card.Body gap="2">
        <Card.Title textStyle="sm" fontWeight="bold" textAlign="center">
          {title}
        </Card.Title>
        <Avatar
          src={icon}
          name={title}
          size="2xl"
          shape="rounded"
          alignSelf="center"
          background="none"
        />
        <Card.Description textStyle="xs">{description}</Card.Description>
      </Card.Body>
      <Card.Footer textStyle="xs" fontWeight="bold">
        {hashtags}
      </Card.Footer>
    </Card.Root>
  );
}

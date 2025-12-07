import { Box, Text, SimpleGrid, useToken } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";
import SectionContainer from "../SectionContainer";
import LightbulbIcon from "@/assets/LightbulbIcon";
import { useEffect, useState } from "react";
import getFileByName from "@/actions/getFileURLByName";

type IdeaSectionProps = {
  idea: string | null;
  name: string | null;
};

export default function IdeaSection({ idea, name }: IdeaSectionProps) {
  const { colorMode } = useColorMode();
  const [lightIMG, setLightIMG] = useState<string | null>(null);
  const [darkIMG, setDarkIMG] = useState<string | null>(null);
  const paragraphs = (idea ?? "").split("\n");
  const [fillColor, strokeColor] = useToken("colors", ["main", "outline"]);

  useEffect(() => {
    async function fetchImages() {
      const light = await getFileByName({
        name: name + "_idea_light.png",
      });
      const dark = await getFileByName({
        name: name + "_idea_dark.png",
      });
      setLightIMG(light);
      setDarkIMG(dark);
    }
    fetchImages();
  }, []);

  const imageUrl = (colorMode === "light" ? lightIMG : darkIMG) ?? "";

  return (
    <SectionContainer>
      <SimpleGrid minChildWidth="190px" gap={4}>
        {" "}
        <Box display="flex" gap={2} flexDirection="column" flex="1">
          <Text fontWeight="bold" textStyle="xl" alignContent="center">
            The Idea
          </Text>
          {paragraphs.map((paragraph, index) => (
            <Text textStyle="sm" key={index} mb={4}>
              {paragraph}
            </Text>
          ))}
        </Box>
        <Box flex="1" display="flex" justifyContent="center">
          {imageUrl ? (
            <img
              style={{ maxHeight: "200px", objectFit: "contain" }}
              src={imageUrl}
              alt="Inspiration Image"
            />
          ) : (
            <LightbulbIcon fillColor={fillColor} strokeColor={strokeColor} />
          )}
        </Box>
      </SimpleGrid>
    </SectionContainer>
  );
}

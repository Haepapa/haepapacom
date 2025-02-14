import { Box, Text, SimpleGrid, useBreakpointValue } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";
import SectionContainer from "../SectionContainer";
import getFileByName from "@/actions/getFileURLByName";
import { useEffect, useState } from "react";

type IdeaSectionProps = {
  inspiration: string | null;
  name: string | null;
};

const InspirationHeading = () => (
  <Text fontWeight="bold" textStyle="xl" alignContent="center" mb={4}>
    The Inspiration
  </Text>
);

export default function InspirationSection({
  inspiration,
  name,
}: IdeaSectionProps) {
  const { colorMode } = useColorMode();
  const [lightIMG, setLightIMG] = useState<string | null>(null);
  const [darkIMG, setDarkIMG] = useState<string | null>(null);
  const headingPosition = useBreakpointValue({ base: "first", md: "second" });

  useEffect(() => {
    async function fetchImages() {
      const light = await getFileByName({
        name: name + "_inspiration_light.png",
      });
      const dark = await getFileByName({
        name: name + "_inspiration_dark.png",
      });
      setLightIMG(light);
      setDarkIMG(dark);
    }
    fetchImages();
  }, []);

  const imageUrl = (colorMode === "light" ? lightIMG : darkIMG) ?? "";
  const paragraphs = (inspiration ?? "").split("\n");

  return (
    <SectionContainer>
      <SimpleGrid minChildWidth="190px" gap={4}>
        <Box flex="1" display="flex" justifyContent="center" flexDirection="column">
        {headingPosition === "first" && <InspirationHeading />}
          <img
            style={{ maxHeight: "200px", objectFit: "contain" }}
            src={imageUrl}
            alt="Inspiration Image"
          />
        </Box>
        <Box display="flex" gap={2} flexDirection="column" flex="1">
        {headingPosition === "second" && <InspirationHeading />}
          {paragraphs.map((paragraph, index) => (
            <Text textStyle="sm" key={index} mb={4}>
              {paragraph}
            </Text>
          ))}
        </Box>
      </SimpleGrid>
    </SectionContainer>
  );
}

import { Box, Text, SimpleGrid, useToken } from "@chakra-ui/react";
import SectionContainer from "../SectionContainer";
import upperFirstChar from "@/actions/upperFirstChar";
import LightbulbIcon from "@/assets/LightbulbIcon";
import HaepapacomInspiration from "@/assets/project/HaepapacomInspiration";
import React, { useEffect, useState } from "react";

const svgMap: {
  [key: string]: React.FC<{
    strokeColor?: string;
    fillColor?: string;
    greyColor?: string;
    width?: number;
    height?: number;
  }>;
} = {
  HaepapacomInspiration,
};

type IdeaSectionProps = {
  inspiration: string | null;
  name: string | null;
};

export default function InspirationSection({
  inspiration,
  name,
}: IdeaSectionProps) {
  const [DynamicComponent, setDynamicComponent] = useState<React.FC | null>(
    null
  );
  const paragraphs = (inspiration ?? "").split("\n");
  const [fillColor, strokeColor, greyColor] = useToken("colors", [
    "main",
    "outline",
    "grey",
  ]);

  useEffect(() => {
    async function fetchComponent() {
      try {
        const response = await fetch(
          "https://dev.appwrite.haepapa.com/v1/storage/buckets/679f175800189f0a55f4/files/679f1772001a7c9b645a/view?project=67837be7001fd034ae1e&project=67837be7001fd034ae1e&mode=admin"
        );
        const componentString = await response.text();
        const Component = new Function("React", `return ${componentString}`)(
          React
        );
        setDynamicComponent(() => Component);
      } catch (error) {
        console.error("Error fetching component:", error);
      }
    }

    fetchComponent();
  }, [name]);

  const InspirationSVG =
    svgMap[upperFirstChar(name) + "Inspiration"] || LightbulbIcon;
  return (
    <SectionContainer>
      <SimpleGrid minChildWidth="190px" gap={2}>
        <Box flex="1" display="flex" justifyContent="center">
          {/* <InspirationSVG
            fillColor={fillColor}
            strokeColor={strokeColor}
            greyColor={greyColor}
            width={200}
            height={200}
          /> */}
          {DynamicComponent && <DynamicComponent />}
        </Box>
        <Box display="flex" gap={2} flexDirection="column" flex="1">
          <Text fontWeight="bold" textStyle="xl" alignContent="center">
            The Inspiration
          </Text>
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

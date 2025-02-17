import { Feature } from "@/types/appwrite.d";
import SectionContainer from "../SectionContainer";
import {
  SimpleGrid,
  Box,
  List,
  Text,
  Spacer,
  useBreakpointValue,
} from "@chakra-ui/react";

type FeaturesSectionProps = {
  features: Feature[] | null;
};

export default function FeaturesSection({ features }: FeaturesSectionProps) {
  const featureGrouping = useBreakpointValue({ base: "first", md: "second" });
  return (
    <SectionContainer>
      <SimpleGrid minChildWidth="190px" gap={2} paddingBottom={4}>
        <Text as="h2" fontSize="lg" fontWeight="bold">
          Features
        </Text>
        <Spacer />
      </SimpleGrid>
      <SimpleGrid minChildWidth="190px" gap={4} textStyle="sm">
        {featureGrouping === "second" && (
          <>
            {" "}
            <Box flex="1" display="flex" justifyContent="center">
              <List.Root>
                {features
                  ?.filter((_, index) => index % 2 === 0)
                  .map((feature, index) => (
                    <List.Item key={index}>{feature.description}</List.Item>
                  ))}
              </List.Root>
            </Box>
            <Box display="flex" gap={2} flexDirection="column" flex="1">
              <List.Root>
                {features
                  ?.filter((_, index) => index % 2 !== 0)
                  .map((feature, index) => (
                    <List.Item key={index}>{feature.description}</List.Item>
                  ))}
              </List.Root>
            </Box>
          </>
        )}

        {featureGrouping === "first" && (
          <>
            {" "}
            <Box flex="1" display="flex" justifyContent="center">
              <List.Root>
                {features?.map((feature, index) => (
                  <List.Item key={index}>{feature.description}</List.Item>
                ))}
              </List.Root>
            </Box>
          </>
        )}
      </SimpleGrid>
    </SectionContainer>
  );
}

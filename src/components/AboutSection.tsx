import { Box } from "@chakra-ui/react";
import SectionContainer from "./SectionContainer";
import websiteIcon from "@/assets/website_icon.svg";
import desktopIcon from "@/assets/desktop_icon.svg";
import dataIcon from "@/assets/data_icon.svg";
import buildIcon from "@/assets/build_icon.svg";
import { CardTemplate } from "./CardTemplate";

export default function AboutSection() {
  return (
    <SectionContainer>
      <Box display="flex" flexDirection="row" gap={2}>
        <CardTemplate
          title="We Build Web Apps"
          description="From sleek designs to seamless functionality, we create web applications that are intuitive, efficient, and fun to use."
          icon={websiteIcon}
          hashtags="#webapp"
        />
        <CardTemplate
          title="We Automate and Innovate on Desktop"
          description="Our desktop apps simplify tasks and solve problems, with a focus on making life easier—whatever the challenge."
          icon={desktopIcon}
          hashtags="#desktop"
        />

        <CardTemplate
          title="We Bring Data to Life"
          description="Whether it’s platforms, tools, or solutions powered by AI, we build to help uncover insights and solve data challenges."
          icon={dataIcon}
          hashtags="#data"
        />

        <CardTemplate
          title="We Build Whatever Seems Fun"
          description="If it’s interesting, creative, or just plain cool, we’ll dive in and make it happen. No idea is off-limits!"
          icon={buildIcon}
          hashtags="#fun"
        />
      </Box>
    </SectionContainer>
  );
}

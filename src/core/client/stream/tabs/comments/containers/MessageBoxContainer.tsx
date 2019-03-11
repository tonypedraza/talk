import React, { StatelessComponent } from "react";
import { graphql } from "react-relay";
import { withFragmentContainer } from "talk-framework/lib/relay";

import { MessageBoxContainer_story as StoryData } from "talk-stream/__generated__/MessageBoxContainer_story.graphql";
import {
  MessageBox,
  MessageBoxContent,
  MessageBoxIcon,
} from "talk-stream/components/MessageBox";

interface Props {
  story: StoryData;
  className?: string;
}

const MessageBoxContainer: StatelessComponent<Props> = ({
  story,
  className,
}) => {
  return (
    <MessageBox className={className}>
      {story.messageBox.icon && (
        <MessageBoxIcon>{story.messageBox.icon}</MessageBoxIcon>
      )}
      <MessageBoxContent>{story.messageBox.content || ""}</MessageBoxContent>
    </MessageBox>
  );
};

const enhanced = withFragmentContainer<Props>({
  story: graphql`
    fragment MessageBoxContainer_story on Story {
      messageBox {
        content
        icon
      }
    }
  `,
})(MessageBoxContainer);

export default enhanced;

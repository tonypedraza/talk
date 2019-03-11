import React from "react";
import { graphql } from "react-relay";

import { withFragmentContainer } from "talk-framework/lib/relay";
import { MessageBoxConfigContainer_story as StoryData } from "talk-stream/__generated__/MessageBoxConfigContainer_story.graphql";

import MessageBoxConfig from "../components/MessageBoxConfig";

interface Props {
  story: StoryData;
  onInitValues: (values: StoryData) => void;
  disabled: boolean;
}

class MessageBoxConfigContainer extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    props.onInitValues(props.story);
  }

  public render() {
    const { disabled } = this.props;
    return <MessageBoxConfig disabled={disabled} />;
  }
}

const enhanced = withFragmentContainer<Props>({
  story: graphql`
    fragment MessageBoxConfigContainer_story on Story {
      messageBox {
        enabled
        content
        icon
      }
    }
  `,
})(MessageBoxConfigContainer);

export default enhanced;

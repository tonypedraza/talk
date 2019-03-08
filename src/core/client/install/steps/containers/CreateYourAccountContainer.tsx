import React, { Component } from "react";

import { PropTypesOf } from "talk-ui/types";

import CreateYourAccount, {
  CreateYourAccountForm,
} from "../components/CreateYourAccount";

interface CreateYourAccountContainerProps {
  onGoToNextStep: () => void;
  onGoToPreviousStep: () => void;
  data: PropTypesOf<typeof CreateYourAccount>["data"];
  onSaveData: (newData: PropTypesOf<typeof CreateYourAccount>["data"]) => void;
}

class CreateYourAccountContainer extends Component<
  CreateYourAccountContainerProps
> {
  private onSubmit: CreateYourAccountForm["onSubmit"] = async (input, form) => {
    this.props.onSaveData(input);
    return this.props.onGoToNextStep();
  };
  public render() {
    return (
      <CreateYourAccount
        data={this.props.data}
        onSubmit={this.onSubmit}
        onGoToPreviousStep={this.props.onGoToPreviousStep}
      />
    );
  }
}

export default CreateYourAccountContainer;

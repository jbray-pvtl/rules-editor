import React, { Component } from "react";
import { FormRow, FormCol } from "pivotal-ui/react/forms";
import { Input } from "pivotal-ui/react/inputs";
import { DefaultButton, DangerButton } from "pivotal-ui/react/buttons";

class Recipe extends FormRow {
  state = {};
  render() {
    return (
      <FormRow>
        <FormCol label="Recipe">
          <Input
            placeholder="Enter recipe URL here"
            type="text"
          />
          
        </FormCol>
        <FormCol fixed retainLabelHeight>
          <DangerButton onClick={() => this.props.onDeleteRecipe(this.props.recipe)}>Remove Recipe</DangerButton>
        </FormCol>

      </FormRow>
    );
  }
}

export default Recipe;

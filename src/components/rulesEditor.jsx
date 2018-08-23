import React, { Component } from "react";
import {
  DefaultButton,
  BrandButton,
  DangerButton
} from "pivotal-ui/react/buttons";
import { Form, FormRow, FormCol } from "pivotal-ui/react/forms";
import { Input } from "pivotal-ui/react/inputs";
import Rule from "./rule";
import Recipe from "./recipe";

let rule = new Rule();

class RulesEditor extends Component {
  state = {
    recipes: []
  };
  render() {
    return (
      <div>
        <h1>Rules Editor</h1>
        <Form name="ruleEditForm">
          <FormRow>
            <FormCol label="Rule Name">
              <Input
                placeholder="Enter rule name here"
                type="text"
                name="name"
              />
            </FormCol>
          </FormRow>
          <FormRow>
            <FormCol label="File Type">
              <Input
                placeholder="Enter file type here"
                type="text"
                name="filetype"
              />
            </FormCol>
          </FormRow>
          <FormRow>
            <FormCol label="Target">
              <Input
                placeholder="Enter target here"
                type="text"
                name="target"
              />
            </FormCol>
          </FormRow>
          <FormRow>
            <FormCol label="Type">
              <Input placeholder="Enter type here" type="text" name="type" />
            </FormCol>
          </FormRow>
          <FormRow>
            <FormCol label="Category">
              <Input
                placeholder="Enter category here"
                type="text"
                name="category"
              />
            </FormCol>
          </FormRow>
          <FormRow>
            <FormCol label="Advice">
              <Input
                placeholder="Enter advice here"
                type="text"
                name="advice"
              />
            </FormCol>
          </FormRow>
          {this.state.recipes.map(recipe => (
            <Recipe
              key={recipe.key}
              onDeleteRecipe={this.onDeleteRecipe}
              recipe={recipe}
            />
          ))}
          <FormRow>
            <FormCol>
              <DefaultButton onClick={this.onAddRecipe}>
                Add Recipe
              </DefaultButton>
            </FormCol>
          </FormRow>
        </Form>

        <BrandButton
          className="btn btn-success m-2"
          onClick={this.onCreateNewRule}
        >
          Create Rule
        </BrandButton>
        <DangerButton className="btn btn-danger m-2" onClick={this.onCancel}>
          Cancel
        </DangerButton>
      </div>
    );
  }

  onAddRecipe = () => {
    console.info("Add new recipe to list...");
    let index = this.state.recipes.length;
    let recipe = { key: index++ };
    console.info(recipe);
    let localRecipes = this.state.recipes;
    localRecipes.push(recipe);
    this.setState({ recipes: localRecipes });
  };

  onDeleteRecipe = recipe => {
    console.info("Deleting recipe " + recipe.key);
    const localRecipes = this.state.recipes.filter(rp => rp.key !== recipe.key);
    console.info(localRecipes);
    this.setState({ recipes: localRecipes });
  };

  onCreateNewRule = () => {
    console.info("Create new rule");
  };

  onCancel = () => {
    console.warn("Cancel rule creation");
  };
}

export default RulesEditor;

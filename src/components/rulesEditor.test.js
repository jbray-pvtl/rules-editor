import React, { Component } from 'react';

const recipes = [];

test('Addition of recipe to ui', () => {
    expect(recipes).toContain({key: 0});
});
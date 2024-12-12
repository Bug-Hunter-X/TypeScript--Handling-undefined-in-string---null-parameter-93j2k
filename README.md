# TypeScript: Handling undefined in string | null parameter

This code demonstrates a common issue in TypeScript when dealing with optional parameters that can be either a string or null.  The function `printName` is designed to handle both string values and null values gracefully. However, when an undefined value is passed, TypeScript throws an error because it cannot guarantee that the variable will be either a string or null.

The solution shows how to correctly handle the undefined case either by explicit check or type assertion
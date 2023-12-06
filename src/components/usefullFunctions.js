export const customRenderer = (text) => {
    // Replace backticks with \u0060 using a regular expression
    const replacedText = text.replace(/`/g, '\\`');
    return replacedText;
  };
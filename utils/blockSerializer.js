/* eslint-disable react/display-name */
export default {
  types: {
    code: properties => (
      <pre data-language={properties.node.language}>
        <code>{properties.node.code}</code>
      </pre>
    )
  }
};

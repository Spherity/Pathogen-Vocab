const getContextFromIntermediate = (intermediate) => {
  let partialContext = {};
  Object.values(intermediate).forEach((classDefinition) => {
    let propertDefinitionPartialContext = {};
    Object.values(classDefinition.classProperties).forEach((classProperty) => {
      propertDefinitionPartialContext = {
        ...propertDefinitionPartialContext,
        [classProperty.$comment.term]: {
          '@id': classProperty.$comment['@id'],
        },
      };
    });

    partialContext = {
      ...partialContext,
      [classDefinition.$comment.term]: {
        '@id': classDefinition.$comment['@id'],
        '@context': {
          ...propertDefinitionPartialContext,
        },
      },
    };
  });
  return {
    '@context': {
      '@version': 1.1,
      name: 'http://schema.org/name',
      description: 'http://schema.org/description',
      identifier: 'http://schema.org/identifier',
      image: {
        '@id': 'http://schema.org/image',
        '@type': '@id',
      },
      DocumentVerificationEvidence: {
        '@id': 'https://schema.org/DigitalDocument',
        '@context': {
          verifier: { '@id': 'https://schema.org/Organization' },
          evidenceDocument: { '@id': 'https://schema.org/name' },
          subjectPresence: { '@id': 'https://schema.org/Person' },
          documentPresence: { '@id': 'https://schema.org/PresentationDigitalDocument' }
        }
      },
      id: '@id',
      type: '@type',
      ...partialContext,
    },
  };
};

module.exports = getContextFromIntermediate;

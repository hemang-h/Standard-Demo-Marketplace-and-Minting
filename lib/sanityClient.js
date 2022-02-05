import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '68n6rcykw',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skKqQVOj4nc779zvaOt67Iy0dOTQYJuahuKkvn4aygMCfTADnNMbHbtZ1C7EcI2mRZCt8UFeOn03b3nZgPLoQT2PMob1TAJJeY2Z5OKjaSIQNWzvoc4puSYjsX04QrVqUcQgbhzLyv5bt0AaM69pg2dGXyxA2eJQosNuHpRLM4HFZePmJ9n9',
  useCdn: false,
})
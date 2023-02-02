export const mockSetValue = jest.fn(() => {});

const mockHook = jest.fn(() => {
  return {
    value: '',
    setValue : mockSetValue,
    suggestions: {
      status: 'ok',
      data: []
    },
  }
})

export default mockHook;